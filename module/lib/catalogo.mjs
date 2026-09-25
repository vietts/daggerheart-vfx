/*
 * La parte del catalogo che non dipende dal sistema: costruire le righe della finestra da una
 * lista di documenti, precompilare la mappa, validare un import. Cosa sia un'azione, come si
 * chiami e cosa proporre lo dice l'adattatore (lib/sistemi/<id>/).
 */

import { FORME } from "./costanti.mjs";

/*
 * Lo stesso oggetto puo' arrivare da due compendi (quello del system e una copia di mondo):
 * stessi id, quindi stesse chiavi. Si tiene la prima riga e basta, altrimenti la finestra ne
 * mostrerebbe due che scrivono nello stesso posto.
 *
 * La riga porta tutti i dati dell'azione: le regole di precompilazione li leggono da li'.
 */
export function righeDa(documenti, mappa = {}, { azioniDi, chiave }) {
  const righe = [];
  const viste = new Set();
  for (const doc of documenti) {
    for (const dati of azioniDi(doc)) {
      const k = chiave(dati);
      if (!k || viste.has(k)) continue;
      viste.add(k);
      const riga = mappa[k] ?? {};
      righe.push({ ...dati, chiave: k, file: riga.file ?? null, forma: riga.forma ?? null });
    }
  }
  return righe;
}

/*
 * Le regole sono una proposta, non un motore: precompila scrive dentro la mappa esplicita e
 * poi non conta piu' niente. E non sovrascrive: una scelta fatta a mano vince sempre sulla
 * regola, altrimenti il bottone diventerebbe un modo per perdere il proprio lavoro.
 *
 * `proposta(riga)` restituisce { specifica, regola }: la scelta per quella chiave (tabella) e
 * quella di famiglia (regola), ognuna { file, forma } o null. La specifica vince.
 *
 * Unica eccezione al "non sovrascrive": una riga il cui file e' ancora esattamente quello
 * della regola non l'ha scelta nessuno, e' la vecchia precompilazione. Quella si aggiorna
 * alla scelta specifica, cosi' chi aveva gia' premuto Precompila non deve svuotare la mappa.
 */
export function precompilaCon(righe, mappa, proposta) {
  const nuova = { ...mappa };
  for (const r of righe) {
    const attuale = nuova[r.chiave]?.file;
    const { specifica = null, regola = null } = proposta(r) ?? {};

    if (attuale && !(specifica && attuale === regola?.file)) continue;
    if (specifica) { nuova[r.chiave] = { ...specifica }; continue; }
    if (regola) nuova[r.chiave] = { ...regola };
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
