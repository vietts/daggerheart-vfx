/*
 * Dall'hook di dnd5e a un evento neutro. `dnd5e.postUseActivity(activity, usageConfig,
 * results)` scatta all'uso, prima del tiro per colpire: i bersagli sono quelli dell'utente
 * (passati dal guscio, perche' game.user e' un globale) e contano tutti come colpiti.
 */

import { datiAzione, chiave, diametro } from "./chiavi.mjs";

/*
 * Dove e' stata piazzata l'area, se l'uso ne ha piazzata una. In dnd5e 6 su Foundry v14 va
 * verificato se `results` porta template o region (docs/verifiche-in-foundry.md): si
 * accettano entrambi, e un documento o il suo oggetto. Senza, null: si ripiega sul centro dei
 * bersagli in scena.mjs.
 */
export function puntoArea(results) {
  const candidati = [...(results?.templates ?? []), ...(results?.regions ?? [])];
  for (const c of candidati) {
    const d = c?.document ?? c;
    if (Number.isFinite(d?.x) && Number.isFinite(d?.y)) return { x: d.x, y: d.y };
    const forma = d?.shapes?.[0];
    if (Number.isFinite(forma?.x) && Number.isFinite(forma?.y)) return { x: forma.x, y: forma.y };
  }
  return null;
}

export function area(dati, punto = null) {
  return { diametro: diametro(dati?.sagoma), punto: punto ?? null };
}

export function daHook([activity, , results], { bersagliUtente = [] } = {}) {
  const item = activity?.item ?? null;
  if (!item) return null;
  const dati = datiAzione(item);
  if (!chiave(dati)) return null;
  return {
    dati,
    attore: item.actor ?? null,
    bersagli: bersagliUtente.map(id => ({ id, colpito: true })),
    haTiro: false,
    area: area(dati, puntoArea(results))
  };
}
