/*
 * L'elenco che la finestra mostra, e la precompilazione, per Daggerheart.
 *
 * Riceve le carte gia' lette da fuori (il compendio si apre con game.packs, che e' un
 * globale, in finestra.mjs): qui dentro sono solo oggetti, e i test le costruiscono a mano.
 */

import { chiave, datiAzione, datiAzioneAvversario } from "./chiavi.mjs";
import { fileDaRegola, formaDaAzione } from "./regole.mjs";
import { ASSEGNAZIONI } from "./assegnazioni.mjs";
import { ASSEGNAZIONI_AVVERSARI } from "./assegnazioni-avversari.mjs";
import { elencoAzioni } from "../../elenco.mjs";
import { righeDa, precompilaCon } from "../../catalogo.mjs";

export { righeCambiate, rigaValida, righeImportabili } from "../../catalogo.mjs";

const TABELLA = { ...ASSEGNAZIONI, ...ASSEGNAZIONI_AVVERSARI };

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
 * La proposta viene prima dalla tabella per azione (una scelta per carta o per avversario,
 * letta dal testo) e solo se l'azione non c'e' — homebrew, carte uscite dopo — dalla regola
 * del dominio. Gli avversari una regola di dominio non ce l'hanno: fuori tabella restano vuoti.
 */
export function proposta(r) {
  const file = fileDaRegola(r.dominio, r.tipo);
  return {
    specifica: TABELLA[r.chiave] ?? null,
    regola: file ? { file, forma: formaDaAzione(r) } : null
  };
}

export const righeDaCarte = (carte, mappa = {}) => righeDa(carte, mappa, { azioniDi, chiave });
export const precompila = (righe, mappa) => precompilaCon(righe, mappa, proposta);
