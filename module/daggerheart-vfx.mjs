import { MODULE_ID, SETTING_MAPPA, SETTING_ATTIVO } from "./lib/costanti.mjs";
import { datiAzione } from "./lib/chiavi.mjs";
import { contesto } from "./lib/contesto.mjs";
import { decidi } from "./lib/decisione.mjs";
import { costruisci } from "./lib/scena.mjs";

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
