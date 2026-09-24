/*
 * L'elenco che la finestra mostra, e la precompilazione.
 *
 * Riceve le carte gia' lette da fuori (il compendio si apre con game.packs, che e' un
 * globale): qui dentro sono solo oggetti, e i test le costruiscono a mano.
 */

import { FORME } from "./costanti.mjs";
import { chiave, datiAzione } from "./chiavi.mjs";
import { fileDaRegola, formaDaAzione } from "./regole.mjs";
import { ASSEGNAZIONI } from "./assegnazioni.mjs";

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
export function azioniDiCarta(carta) {
  const azioni = carta?.system?.actions;
  if (!azioni || typeof azioni !== "object") return [];

  const elenco = Array.isArray(azioni) ? azioni
    : typeof azioni.values === "function" ? [...azioni.values()]
    : Object.values(azioni);

  return elenco
    .filter(az => az && typeof az === "object")
    .map(az => datiAzione({
      _id: az._id, name: az.name, type: az.type, range: az.range, target: az.target, item: carta
    }));
}

export function righeDaCarte(carte, mappa = {}) {
  const righe = [];
  for (const carta of carte) {
    for (const dati of azioniDiCarta(carta)) {
      const k = chiave(dati);
      if (!k) continue;
      const riga = mappa[k] ?? {};
      righe.push({
        chiave: k,
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
 * La proposta viene prima dalla tabella per azione (una scelta per carta, letta dal testo) e
 * solo se l'azione non c'e' — homebrew, carte uscite dopo — dalla regola del dominio.
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
    const specifica = ASSEGNAZIONI[r.chiave];

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
