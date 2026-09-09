import { MODULE_ID, SETTING_MAPPA, SETTING_ATTIVO } from "./lib/costanti.mjs";
import { datiAzione } from "./lib/chiavi.mjs";
import { contesto } from "./lib/contesto.mjs";
import { decidi } from "./lib/decisione.mjs";
import { costruisci } from "./lib/scena.mjs";
import { fileDaPrecaricare } from "./lib/preload.mjs";
import { ConfigurazioneVFX } from "./apps/configurazione.mjs";

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
 */
function risolviToken({ origine, bersagli, ...resto }) {
  const src = canvas.tokens.get(origine);
  if (!src) return null;
  return { ...resto, origine: src, bersagli: bersagli.map(id => canvas.tokens.get(id)).filter(Boolean) };
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
    if (dati.tipoItem !== "domainCard") return;

    const src = action.actor?.getActiveTokens?.()?.[0];
    const ctx = contesto(config, src?.id ?? null);

    const descrittore = decidi(dati, mappa(), ctx);
    if (!descrittore) return;

    const risolto = risolviToken(descrittore);
    if (!risolto) return;

    await costruisci(risolto, Sequence).play();
  } catch (e) {
    console.error(`[${MODULE_ID}] errore giocando l'effetto, la giocata prosegue:`, e);
  }
});

/*
 * Le azioni delle carte di dominio possedute da chi ha un token in questa scena. Si guarda
 * l'attore del token, non il token: le carte stanno sull'attore.
 */
function azioniInScena() {
  const attori = new Set(canvas.tokens.placeables.map(t => t.actor).filter(Boolean));
  return [...attori].map(a => a.items
    .filter(i => i.type === "domainCard")
    .flatMap(i => Object.values(i.system?.actions ?? {}).map(az => datiAzione({ ...az, item: i })))
  );
}

Hooks.on("canvasReady", async () => {
  try {
    if (!attivo()) return;
    const file = fileDaPrecaricare(azioniInScena(), mappa());
    if (!file.length) return;
    await Sequencer.Preloader.preloadForClients(file, true);
    console.log(`[${MODULE_ID}] precaricati ${file.length} effetti per questa scena`);
  } catch (e) {
    console.error(`[${MODULE_ID}] preload fallito, si gioca lo stesso:`, e);
  }
});
