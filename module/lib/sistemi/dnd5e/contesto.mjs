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
 * bersagli (o sul lanciatore, per un'emanazione) in scena.mjs.
 *
 * Il punto vero e' il centro, non l'angolo: per un cerchio x,y e' gia' il centro, ma per un
 * cubo o un rettangolo x,y e' lo spigolo. Si preferisce percio' il centro del placeable
 * (quello che Foundry calcola davvero per la forma), poi il centro di una forma rettangolare
 * dedotto da larghezza e altezza, e solo alla fine x,y cosi' come sono.
 */
export function puntoArea(results) {
  const candidati = [...(results?.templates ?? []), ...(results?.regions ?? [])];
  for (const c of candidati) {
    const d = c?.document ?? c;

    const centro = c?.object?.center ?? d?.object?.center;
    if (Number.isFinite(centro?.x) && Number.isFinite(centro?.y)) return { x: centro.x, y: centro.y };

    const forma = d?.shapes?.[0];
    if (forma && (forma.type === "rectangle" || (Number.isFinite(forma.width) && Number.isFinite(forma.height)))) {
      const x = Number.isFinite(forma.x) ? forma.x : d?.x;
      const y = Number.isFinite(forma.y) ? forma.y : d?.y;
      if (Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(forma.width) && Number.isFinite(forma.height))
        return { x: x + forma.width / 2, y: y + forma.height / 2 };
    }

    if (Number.isFinite(d?.x) && Number.isFinite(d?.y)) return { x: d.x, y: d.y };
    if (Number.isFinite(forma?.x) && Number.isFinite(forma?.y)) return { x: forma.x, y: forma.y };
  }
  return null;
}

/*
 * `centro` dice a scena.mjs dove appoggiare l'area quando non c'e' un punto piazzato: su se
 * stessi per un'emanazione (gittata "self", es. Spirit Guardians), sul centroide dei bersagli
 * per tutto il resto (es. Fireball lanciata a distanza).
 */
export function area(dati, punto = null) {
  return {
    diametro: diametro(dati?.sagoma),
    unita: dati?.sagoma?.unita ?? null,
    punto: punto ?? null,
    centro: dati?.gittata === "self" ? "lanciatore" : "bersagli"
  };
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
