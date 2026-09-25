/*
 * Righe della finestra e precompilazione per D&D. Un oggetto e' una riga (vedi chiavi.mjs):
 * azioniDi restituisce al piu' un dato.
 */

import { datiAzione, chiave } from "./chiavi.mjs";
import { regolaDnd } from "./regole.mjs";
import { ASSEGNAZIONI_DND } from "./assegnazioni.mjs";
import { righeDa, precompilaCon } from "../../catalogo.mjs";

export function azioniDi(doc) {
  const dati = datiAzione(doc);
  return chiave(dati) ? [dati] : [];
}

export function azioniDiAttore(attore) {
  return [...(attore?.items ?? [])].flatMap(azioniDi);
}

export function proposta(r) {
  return { specifica: ASSEGNAZIONI_DND[r.chiave] ?? null, regola: regolaDnd(r) };
}

export const righe = (documenti, mappa = {}) => righeDa(documenti, mappa, { azioniDi, chiave });
export const precompila = (righeDaPrecompilare, mappa) => precompilaCon(righeDaPrecompilare, mappa, proposta);
