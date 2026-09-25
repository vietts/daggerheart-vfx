/*
 * Da dove la finestra legge, in un mondo dnd5e: tutti i compendi di Item (incantesimi, armi,
 * privilegi, consumabili) e gli oggetti dentro gli attori npc dei compendi di Actor.
 *
 * Prima i compendi di mondo, poi il PHB, poi il resto: con i doppioni vince la prima riga, e
 * cosi' il nome che si legge e' quello del libro che si usa.
 */

const TIPI = new Set(["spell", "weapon", "feat", "consumable"]);
const PHB = "dnd-players-handbook";

const ordine = p => p.metadata.packageType === "world" ? 0 : p.metadata.packageName === PHB ? 1 : 2;

export async function leggiDocumenti() {
  const packs = [...game.packs].sort((a, b) => ordine(a) - ordine(b));
  const documenti = [];
  for (const pack of packs) {
    if (pack.documentName === "Item") {
      if (!pack.index.some(e => TIPI.has(e.type))) continue;
      const items = await pack.getDocuments();
      documenti.push(...items.filter(i => TIPI.has(i.type)).map(i => i.toObject()));
    } else if (pack.documentName === "Actor" && pack.index.some(e => e.type === "npc")) {
      const attori = await pack.getDocuments({ type: "npc" });
      for (const attore of attori)
        documenti.push(...attore.items.filter(i => TIPI.has(i.type)).map(i => ({ ...i.toObject(), _daMostro: true })));
    }
  }
  return documenti;
}
