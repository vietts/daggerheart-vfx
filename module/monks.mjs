/*
 * Un'azione in piu' per Monk's Active Tile Triggers: "Effetto JB2A". Monk's ha gia' musica,
 * attese, mostra/nascondi con dissolvenza; gli manca un effetto Sequencer, ed e' tutto quello
 * che questo file aggiunge. Se Monk's non c'e', l'hook non scatta mai e il file non fa niente.
 *
 * I token si scelgono in due modi. Il selettore di Monk's copre i token scelti a mano sulla
 * mappa, quello che ha attivato la tile, quelli dentro la tile, i selezionati e i risultati
 * dell'azione precedente (cosi' "fumo, poi mostrali" lavora sugli stessi). I bersagli (tasto T)
 * Monk's non li offre: li aggiunge la voce "bersagli", e sono quelli di chi ha attivato la tile.
 */

import { MODULE_ID } from "./lib/costanti.mjs";
import { costruisciLibero } from "./lib/scena.mjs";

const SCELTE = ["token", "within", "players", "previous", "controlled", "tagger"];
const soloToken = e => e instanceof foundry.canvas.placeables.Token;
const L = k => `DHVFX.monks.${k}`;

/* I campi di Monk's si leggono dal suo dialog con jQuery: e' lui a usarlo, noi ci adeguiamo. */
const valore = (app, id) => $(`select[name="data.${id}"]`, app.element).val();

/*
 * Dal campo di scelta ai token sul canvas del GM. Monk's restituisce TokenDocument; Sequencer
 * vuole l'oggetto disegnato, e un documento senza oggetto (altra scena) resta fuori.
 */
async function tokenDi(args, chi, entita) {
  /* Senza una scelta, getEntities ripiegherebbe sul primo selettore dell'azione. */
  if (chi !== "bersagli" && entita === null) return [];
  if (chi === "bersagli") return [...(game.users.get(args.userId)?.targets ?? game.user.targets)];
  const documenti = await game.MonksActiveTiles.getEntities(args, "tokens", entita);
  return documenti.map(d => d?.object).filter(o => o instanceof foundry.canvas.placeables.Token);
}

function nomeDi(chi, entita) {
  if (chi === "bersagli") return game.i18n.localize(L("bersagli"));
  return game.MonksActiveTiles.entityName(entita || "previous", "tokens");
}

/*
 * La chiave non la ricorda nessuno: il campo "Effetto" suggerisce mentre scrivi. Monk's non
 * ci lascia attributi sull'input (li passa escapati), quindi il suggeritore si attacca quando
 * il campo prende il fuoco, e solo se l'azione scelta e' la nostra. Le chiavi sono quelle
 * "semplici" di Sequencer: i proiettili arrivano gia' senza la lunghezza.
 */
const ELENCO = `${MODULE_ID}-effetti`;

function elencoEffetti() {
  if (document.getElementById(ELENCO)) return;
  const lista = document.createElement("datalist");
  lista.id = ELENCO;
  for (const k of Sequencer.Database.publicFlattenedSimpleEntries) {
    const voce = document.createElement("option");
    voce.value = k;
    lista.append(voce);
  }
  document.body.append(lista);
}

document.addEventListener("focusin", evento => {
  const campo = evento.target;
  if (!campo.matches?.('input[name="data.file"]')) return;
  const azione = campo.closest(".application, .app")?.querySelector('select[name="action"]')?.value;
  if (azione !== `${MODULE_ID}.effetto`) return;
  elencoEffetti();
  campo.setAttribute("list", ELENCO);
});

Hooks.on("setupTileActions", app => {
  app.registerTileGroup(MODULE_ID, "Daggerheart VFX");
  app.registerTileAction(MODULE_ID, "effetto", {
    name: L("effetto"),
    requiresGM: true,
    ctrls: [
      { id: "file", name: L("file"), type: "text", required: true,
        get placeholder() { return game.i18n.localize(L("fileSegnaposto")); },
        get help() { return game.i18n.localize(L("fileAiuto")); } },
      { id: "chi", name: L("chi"), type: "list", list: "chi", defvalue: "entita" },
      {
        id: "entity", name: L("quali"), type: "select", subtype: "entity",
        options: { show: SCELTE }, restrict: soloToken, defaultType: "tokens",
        conditional: app => valore(app, "chi") !== "bersagli"
      },
      { id: "forma", name: L("forma"), type: "list", list: "forma", defvalue: "sopra" },
      {
        id: "verso", name: L("verso"), type: "list", list: "chi", defvalue: "bersagli",
        conditional: app => valore(app, "forma") === "proiettile"
      },
      {
        id: "destinazione", name: L("quali"), type: "select", subtype: "entity",
        options: { show: SCELTE }, restrict: soloToken, defaultType: "tokens",
        conditional: app => valore(app, "forma") === "proiettile" && valore(app, "verso") !== "bersagli"
      },
      { id: "tinta", name: L("tinta"), type: "text", get help() { return game.i18n.localize(L("tintaAiuto")); } },
      { id: "scala", name: L("scala"), type: "number", min: 0.1, step: 0.1, defvalue: 1.5 }
    ],
    values: {
      chi: { entita: L("chiEntita"), bersagli: L("bersagli") },
      forma: { sopra: L("sopra"), proiettile: L("proiettile") }
    },
    fn: async (args = {}) => {
      const { action } = args;
      const d = action.data ?? {};
      try {
        const file = d.file?.trim();
        if (!file) return;

        const origini = await tokenDi(args, d.chi, d.entity);
        const proiettile = d.forma === "proiettile";
        const destinazioni = proiettile ? await tokenDi(args, d.verso, d.destinazione ?? null) : [];
        /* Un proiettile senza capo non e' un effetto sopra l'origine: e' un errore di chi ha
           preparato la tile, e fare altro in silenzio lo nasconderebbe. */
        if (!origini.length || (proiettile && !destinazioni.length)) {
          console.warn(`[${MODULE_ID}] effetto "${file}" senza token su cui giocarlo, saltato`);
          return;
        }

        const tinta = d.tinta?.trim() || null;
        const scala = Number(d.scala) || 1.5;
        await costruisciLibero({ file, origini, destinazioni, tinta, scala }, Sequence).play();

        /* Gli stessi token passano all'azione dopo, come fanno le azioni di Monk's. */
        return { tokens: origini.map(o => o.document) };
      } catch (e) {
        console.error(`[${MODULE_ID}] effetto della tile fallito, la tile prosegue:`, e);
      }
    },
    content: async (trigger, action) => {
      const d = action.data ?? {};
      const su = await nomeDi(d.chi, d.entity);
      const verso = d.forma === "proiettile" ? ` → ${await nomeDi(d.verso, d.destinazione)}` : "";
      return `<span class="action-style">${game.i18n.localize(trigger.name)}</span> `
        + `<span class="details-style">"${d.file ?? ""}"</span> `
        + `<span class="entity-style">${su}${verso}</span>`;
    }
  });
});
