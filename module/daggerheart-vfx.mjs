import { MODULE_ID, SETTING_MAPPA, SETTING_ATTIVO } from "./lib/costanti.mjs";
import { datiAzione, chiave } from "./lib/sistemi/daggerheart/chiavi.mjs";
import { contesto } from "./lib/sistemi/daggerheart/contesto.mjs";
import { decidi } from "./lib/decisione.mjs";
import { costruisci } from "./lib/scena.mjs";
import { fileDaPrecaricare } from "./lib/preload.mjs";
import { azioniDiCarta, azioniDiAvversario } from "./lib/sistemi/daggerheart/catalogo.mjs";
import { ConfigurazioneVFX } from "./apps/configurazione.mjs";
import "./monks.mjs";

const mappa = () => game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {};
const attivo = () => game.settings.get(MODULE_ID, SETTING_ATTIVO);

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, SETTING_ATTIVO, {
    name: "DHVFX.settings.attivo.name",
    hint: "DHVFX.settings.attivo.hint",
    scope: "world", config: true, type: Boolean, default: true
  });

  /* La mappa non si modifica dal pannello dei settings: e' un oggetto di centinaia di righe
     e ha una finestra sua. config: false la tiene fuori dall'elenco. */
  game.settings.register(MODULE_ID, SETTING_MAPPA, {
    scope: "world", config: false, type: Object, default: {}
  });

  game.settings.registerMenu(MODULE_ID, "configurazione", {
    name: "DHVFX.settings.menu.name",
    label: "DHVFX.settings.menu.label",
    hint: "DHVFX.settings.menu.hint",
    icon: "fas fa-wand-sparkles",
    type: ConfigurazioneVFX,
    restricted: true
  });
});

/*
 * Trasforma il descrittore (che porta id di token, perche' e' puro) in oggetti del canvas.
 * Un bersaglio sparito nel frattempo viene semplicemente lasciato fuori.
 *
 * E se li lascia fuori tutti, non si gioca niente. La guardia di decisione.mjs sta a monte di
 * questa traduzione: un descrittore che li' aveva bersagli puo' arrivare qui senza (token
 * cancellato, scena cambiata, bersaglio su un'altra scena), e `costruisci` ciclerebbe su un
 * array vuoto producendo una Sequence che non fa nulla. Vale per `proiettile` e per
 * `bersaglio`: il solo `lanciatore` non ha bisogno di nessuno.
 */
function risolviToken(descrittore) {
  const src = canvas.tokens.get(descrittore.origine);
  if (!src) return null;

  const bersagli = descrittore.bersagli.map(id => canvas.tokens.get(id)).filter(Boolean);
  if (descrittore.forma !== "lanciatore" && !bersagli.length) return null;

  return { ...descrittore, origine: src, bersagli };
}

/*
 * L'hook gira DENTRO il workflow del system: se solleva, la giocata si ferma. Un modulo di
 * effetti che impedisce a un incantesimo di risolversi e' peggio di un modulo muto, quindi
 * qui si tace e si logga.
 */
Hooks.on("daggerheart.postUseAction", async (action, config) => {
  try {
    if (!attivo()) return;

    const dati = datiAzione(action);
    if (!dati.categoria) return;

    const src = action.actor?.getActiveTokens?.()?.[0];
    const ctx = contesto(config, src?.id ?? null);

    const descrittore = decidi(chiave(dati), mappa(), ctx);
    if (!descrittore) return;

    const risolto = risolviToken(descrittore);
    if (!risolto) return;

    await costruisci(risolto, Sequence).play();
  } catch (e) {
    console.error(`[${MODULE_ID}] errore giocando l'effetto, la giocata prosegue:`, e);
  }
});

/*
 * Le azioni delle carte di dominio possedute da chi ha un token in questa scena, e quelle
 * degli avversari in scena. Si guarda l'attore del token, non il token: le carte stanno
 * sull'attore, e per un token non collegato l'attore sintetico porta feature e attacco.
 *
 * L'iterazione delle azioni passa da `azioniDiCarta`, la stessa che usa la finestra: qui i
 * documenti sono vivi e li' sono oggetti sorgente, e due cicli scritti a parte avevano gia'
 * finito per leggere due cose diverse.
 */
function azioniInScena() {
  const attori = new Set(canvas.tokens.placeables.map(t => t.actor).filter(Boolean));
  return [...attori].map(a => a.type === "adversary"
    ? azioniDiAvversario(a)
    : a.items.filter(i => i.type === "domainCard").flatMap(i => azioniDiCarta(i))
  );
}

/*
 * Il preload lo innesca il solo GM. `canvasReady` scatta su OGNI client, e
 * `preloadForClients` per definizione manda la richiesta a tutti quanti: con il GM e quattro
 * giocatori sarebbero cinque trasmissioni per cambio scena, cioe' venticinque preload chiesti
 * e cinque barre di progresso su ogni schermo. Resta `preloadForClients` e non un preload
 * locale perche' la spec §8 vuole che gli asset arrivino a tutti: e' sbagliato solo chi lo
 * innesca, non il meccanismo.
 */
Hooks.on("canvasReady", async () => {
  try {
    if (!attivo()) return;
    if (!game.user.isGM) return;
    const file = fileDaPrecaricare(azioniInScena(), mappa(), chiave);
    if (!file.length) return;
    await Sequencer.Preloader.preloadForClients(file, true);
    console.log(`[${MODULE_ID}] precaricati ${file.length} effetti per questa scena`);
  } catch (e) {
    console.error(`[${MODULE_ID}] preload fallito, si gioca lo stesso:`, e);
  }
});
