/*
 * Da dove la finestra legge, in un mondo dnd5e: tutti i compendi di Item (incantesimi, armi,
 * privilegi, consumabili) e gli oggetti dentro gli attori npc dei compendi di Actor.
 *
 * Prima i compendi di mondo, poi il PHB, poi il resto: con i doppioni vince la prima riga, e
 * cosi' il nome che si legge e' quello del libro che si usa.
 *
 * Un compendio di Item ha spesso centinaia di voci che non animiamo mai (equipaggiamento,
 * tool, background...): si leggono dall'indice (gia' in memoria, gratis) solo gli id dei tipi
 * in TIPI, e si caricano dal disco solo quelli con getDocuments({ _id__in }) — non l'intero
 * compendio.
 */

import { TIPI } from "./chiavi.mjs";

const PHB = "dnd-players-handbook";

const ordine = p => p.metadata.packageType === "world" ? 0 : p.metadata.packageName === PHB ? 1 : 2;

export async function leggiDocumenti() {
  const packs = [...game.packs].sort((a, b) => ordine(a) - ordine(b));
  const documenti = [];
  for (const pack of packs) {
    try {
      if (pack.documentName === "Item") {
        const ids = pack.index.filter(e => TIPI.has(e.type)).map(e => e._id);
        if (!ids.length) continue;
        const items = await pack.getDocuments({ _id__in: ids });
        documenti.push(...items.map(i => i.toObject()));
      } else if (pack.documentName === "Actor" && pack.index.some(e => e.type === "npc")) {
        const attori = await pack.getDocuments({ type: "npc" });
        for (const attore of attori)
          documenti.push(...attore.items.filter(i => TIPI.has(i.type)).map(i => ({ ...i.toObject(), _daMostro: true })));
      }
    } catch (e) {
      /* Un compendio malformato o irraggiungibile non deve svuotare la finestra: si salta e si
         va avanti con gli altri, con un avviso in console per chi deve indagare. */
      console.warn(`[daggerheart-vfx] compendio ${pack.collection} saltato:`, e);
    }
  }
  return documenti;
}
