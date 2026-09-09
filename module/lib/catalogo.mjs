/*
 * L'elenco che la finestra mostra, e la precompilazione.
 *
 * Riceve le carte gia' lette da fuori (il compendio si apre con game.packs, che e' un
 * globale): qui dentro sono solo oggetti, e i test le costruiscono a mano.
 */

import { chiave, datiAzione } from "./chiavi.mjs";
import { fileDaRegola, formaDaAzione } from "./regole.mjs";

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
 */
export function precompila(righe, mappa) {
  const nuova = { ...mappa };
  for (const r of righe) {
    if (nuova[r.chiave]?.file) continue;
    const file = fileDaRegola(r.dominio, r.tipo);
    if (!file) continue;
    nuova[r.chiave] = { file, forma: formaDaAzione(r) };
  }
  return nuova;
}
