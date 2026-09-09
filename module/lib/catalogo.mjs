/*
 * L'elenco che la finestra mostra, e la precompilazione.
 *
 * Riceve le carte gia' lette da fuori (il compendio si apre con game.packs, che e' un
 * globale): qui dentro sono solo oggetti, e i test le costruiscono a mano.
 */

import { chiave, datiAzione } from "./chiavi.mjs";
import { fileDaRegola, formaDaAzione } from "./regole.mjs";

export function righeDaCarte(carte, mappa = {}) {
  const righe = [];
  for (const carta of carte) {
    for (const azione of Object.values(carta.system?.actions ?? {})) {
      const dati = datiAzione({ ...azione, item: carta });
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
