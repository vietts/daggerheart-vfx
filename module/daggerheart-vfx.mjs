import { MODULE_ID, SETTING_MAPPA, SETTING_ATTIVO } from "./lib/costanti.mjs";
import { adattatorePer } from "./lib/sistemi/index.mjs";
import { decidi } from "./lib/decisione.mjs";
import { fileDaPrecaricare } from "./lib/preload.mjs";
import { suona } from "./suona.mjs";
import { creaApi } from "./api.mjs";
import { ConfigurazioneVFX } from "./apps/configurazione.mjs";
import "./monks.mjs";

const mappa = () => game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {};
const attivo = () => game.settings.get(MODULE_ID, SETTING_ATTIVO);

/* Scelto all'init: game.system e' gia' noto, e l'hook del system va registrato prima che
   qualcuno possa usare un oggetto. null su un system che il modulo non conosce. */
let adattatore = null;

Hooks.once("init", () => {
  adattatore = adattatorePer(game.system.id);

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

  /* Esposta anche su un system non supportato: chi la chiama riceve false invece di un
     "api is undefined". */
  game.modules.get(MODULE_ID).api = creaApi({ adattatore, mappa, attivo, suona });

  if (!adattatore) {
    console.warn(`[${MODULE_ID}] system ${game.system.id} non supportato: il modulo resta spento`);
    return;
  }

  game.settings.registerMenu(MODULE_ID, "configurazione", {
    name: "DHVFX.settings.menu.name",
    label: "DHVFX.settings.menu.label",
    hint: "DHVFX.settings.menu.hint",
    icon: "fas fa-wand-sparkles",
    type: ConfigurazioneVFX,
    restricted: true
  });

  Hooks.on(adattatore.hook, (...args) => { suonaDaHook(args); });
});

/*
 * L'hook gira DENTRO il workflow del system: se solleva, la giocata si ferma. Un modulo di
 * effetti che impedisce a un incantesimo di risolversi e' peggio di un modulo muto, quindi
 * qui si tace e si logga. E non si restituisce niente all'hook: dnd5e usa Hooks.call, dove
 * un `false` fermerebbe l'uso dell'oggetto.
 *
 * Senza canvas (un telefono col canvas spento) non c'e' niente da disegnare: si esce subito.
 */
async function suonaDaHook(args) {
  try {
    if (!attivo() || !canvas?.ready) return;
    const ev = adattatore.daHook(args, { bersagliUtente: [...game.user.targets].map(t => t.id) });
    if (!ev) return;
    const origine = ev.attore?.getActiveTokens?.()?.[0]?.id ?? null;
    const descrittore = decidi(adattatore.chiave(ev.dati), mappa(), {
      origine, bersagli: ev.bersagli, haTiro: ev.haTiro, area: ev.area
    });
    await suona(descrittore);
  } catch (e) {
    console.error(`[${MODULE_ID}] errore giocando l'effetto, la giocata prosegue:`, e);
  }
}

/*
 * Il preload lo innesca il solo GM. `canvasReady` scatta su OGNI client, e
 * `preloadForClients` per definizione manda la richiesta a tutti quanti: con il GM e quattro
 * giocatori sarebbero cinque trasmissioni per cambio scena.
 */
Hooks.on("canvasReady", async () => {
  try {
    if (!adattatore || !attivo() || !game.user.isGM) return;
    const attori = new Set(canvas.tokens.placeables.map(t => t.actor).filter(Boolean));
    const gruppi = [...attori].map(a => adattatore.azioniDiAttore(a));
    const file = fileDaPrecaricare(gruppi, mappa(), adattatore.chiave);
    if (!file.length) return;
    await Sequencer.Preloader.preloadForClients(file, true);
    console.log(`[${MODULE_ID}] precaricati ${file.length} effetti per questa scena`);
  } catch (e) {
    console.error(`[${MODULE_ID}] preload fallito, si gioca lo stesso:`, e);
  }
});
