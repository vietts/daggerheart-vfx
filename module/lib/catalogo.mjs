/*
 * L'elenco che la finestra mostra, e la precompilazione.
 *
 * Riceve le carte gia' lette da fuori (il compendio si apre con game.packs, che e' un
 * globale): qui dentro sono solo oggetti, e i test le costruiscono a mano.
 */

import { FORME } from "./costanti.mjs";
import { chiave, datiAzione, datiAzioneAvversario } from "./chiavi.mjs";
import { fileDaRegola, formaDaAzione } from "./regole.mjs";
import { ASSEGNAZIONI } from "./assegnazioni.mjs";
import { ASSEGNAZIONI_AVVERSARI } from "./assegnazioni-avversari.mjs";

const TABELLA = { ...ASSEGNAZIONI, ...ASSEGNAZIONI_AVVERSARI };

/*
 * L'unico modo di iterare le azioni di una carta, per i due cammini che ne hanno bisogno: la
 * finestra (che vede oggetti sorgente, da toObject()) e il preload (che vede documenti vivi,
 * cioe' quello che il system istanzia). Due cicli scritti separatamente avevano gia' smesso
 * di leggere la stessa cosa: se a runtime `system.actions` fosse una Collection invece di un
 * oggetto semplice, `Object.values` darebbe [] e il preload non precaricherebbe niente, in
 * silenzio.
 *
 * Quindi si accettano le tre forme plausibili (oggetto, array, qualunque cosa abbia values())
 * e si legge campo per campo invece di fare lo spread: se i campi dell'azione fossero getter
 * di prototipo e non proprieta' proprie, `{ ...az }` li perderebbe e ne uscirebbero chiavi e
 * forme sbagliate.
 */
function elencoAzioni(azioni) {
  if (!azioni || typeof azioni !== "object") return [];
  const elenco = Array.isArray(azioni) ? azioni
    : typeof azioni.values === "function" ? [...azioni.values()]
    : Object.values(azioni);
  return elenco.filter(az => az && typeof az === "object");
}

export function azioniDiCarta(carta) {
  return elencoAzioni(carta?.system?.actions).map(az => datiAzione({
    _id: az._id, name: az.name, type: az.type, range: az.range, target: az.target, item: carta
  }));
}

/*
 * Un avversario ha due fonti di azioni: l'attacco base, che sta in system.attack e non in un
 * item, e le azioni delle sue feature. Stesse tre forme da reggere di azioniDiCarta, piu'
 * `items`, che e' un array sull'oggetto sorgente e una Collection sull'attore vivo.
 */
export function azioniDiAvversario(attore) {
  const dati = [];
  const attacco = attore?.system?.attack;
  if (attacco && typeof attacco === "object") dati.push(datiAzioneAvversario(attore, null, attacco));
  for (const feature of attore?.items ?? []) {
    for (const az of elencoAzioni(feature?.system?.actions)) dati.push(datiAzioneAvversario(attore, feature, az));
  }
  return dati;
}

/* Le azioni che il modulo sa animare, da qualunque documento: carta di dominio o avversario. */
export function azioniDi(doc) {
  if (doc?.type === "domainCard") return azioniDiCarta(doc);
  if (doc?.type === "adversary") return azioniDiAvversario(doc);
  return [];
}

/*
 * Lo stesso avversario puo' arrivare da due compendi (quello del system e una copia di mondo
 * con i token): stessi id, quindi stesse chiavi. Si tiene la prima riga e basta, altrimenti
 * la finestra ne mostrerebbe due che scrivono nello stesso posto.
 */
export function righeDaCarte(carte, mappa = {}) {
  const righe = [];
  const viste = new Set();
  for (const carta of carte) {
    for (const dati of azioniDi(carta)) {
      const k = chiave(dati);
      if (!k || viste.has(k)) continue;
      viste.add(k);
      const riga = mappa[k] ?? {};
      righe.push({
        chiave: k,
        categoria: dati.categoria,
        dominio: dati.dominio,
        nomeCarta: dati.nomeCarta,
        nomeAzione: dati.nomeAzione,
        tipo: dati.tipo,
        range: dati.range,
        targetType: dati.targetType,
        file: riga.file ?? null,
        forma: riga.forma ?? null
      });
    }
  }
  return righe;
}

/*
 * Le regole sono una proposta, non un motore: precompila scrive dentro la mappa esplicita e
 * poi non conta piu' niente. E non sovrascrive: una scelta fatta a mano vince sempre sulla
 * regola, altrimenti il bottone diventerebbe un modo per perdere il proprio lavoro.
 *
 * La proposta viene prima dalla tabella per azione (una scelta per carta o per avversario,
 * letta dal testo) e solo se l'azione non c'e' — homebrew, carte uscite dopo — dalla regola
 * del dominio. Gli avversari una regola di dominio non ce l'hanno: fuori tabella restano vuoti.
 *
 * Unica eccezione al "non sovrascrive": una riga il cui file e' ancora esattamente quello
 * della regola di dominio non l'ha scelta nessuno, e' la vecchia precompilazione. Quella
 * si aggiorna alla scelta per azione, cosi' chi aveva gia' premuto Precompila non deve
 * svuotare la mappa per averla. Il prezzo: chi aveva scelto a mano proprio l'effetto della
 * regola se lo vede cambiare — lo stesso effetto per tutta la famiglia e' esattamente la
 * cosa che la tabella esiste per togliere, quindi e' un caso raro.
 */
export function precompila(righe, mappa) {
  const nuova = { ...mappa };
  for (const r of righe) {
    const attuale = nuova[r.chiave]?.file;
    const regola = fileDaRegola(r.dominio, r.tipo);
    const specifica = TABELLA[r.chiave];

    if (attuale && !(specifica && attuale === regola)) continue;
    if (specifica) { nuova[r.chiave] = { ...specifica }; continue; }
    if (!regola) continue;
    nuova[r.chiave] = { file: regola, forma: formaDaAzione(r) };
  }
  return nuova;
}

/* Quante righe precompila ha scritto: aggiunte e aggiornate, non solo le chiavi nuove. */
export function righeCambiate(prima, dopo) {
  return Object.keys(dopo).filter(k => prima[k]?.file !== dopo[k]?.file || prima[k]?.forma !== dopo[k]?.forma).length;
}

/*
 * L'import e' per costruzione l'unico ingresso non fidato del modulo: la spec (§4.3) lo
 * descrive come "il modo in cui la gente si scambia le mappe gia' fatte", cioe' testo che
 * arriva da qualcun altro. Controllare il solo contenitore non basta.
 *
 * Cosa passava quando si guardava solo il contenitore: `{"k": "stringa"}`, `{"k": null}`,
 * `{"k": {"file": 42}}` e soprattutto `forma: "pippo"`, che cade nel ramo else di costruisci
 * e diventa un lanciatore — l'utente vede un effetto, quello sbagliato, e non ha modo di
 * capire perche'. Un `file` non stringa invece esplode dentro Sequencer al momento della
 * giocata, dove il try/catch lo inghiotte correttamente: effetto muto per sempre su quella
 * carta, senza un indizio in finestra.
 */
export function rigaValida(riga) {
  if (!riga || typeof riga !== "object" || Array.isArray(riga)) return false;
  if (typeof riga.file !== "string" || !riga.file.trim()) return false;
  return riga.forma == null || FORME.includes(riga.forma);
}

/* Le righe buone di una mappa importata, e quante ne sono state buttate via. */
export function righeImportabili(mappa) {
  const voci = Object.entries(mappa).filter(([, riga]) => rigaValida(riga));
  return { mappa: Object.fromEntries(voci), scartate: Object.keys(mappa).length - voci.length };
}
