/*
 * Da dove la finestra legge, in un mondo Daggerheart. E' l'unico file impuro dell'adattatore:
 * usa game.packs e ui.notifications, e nessun test lo importa per chiamarlo.
 */

/* Il compendio delle carte di dominio del system. */
const COMPENDIO = "daggerheart.domains";

/*
 * Gli avversari si cercano in tutti i compendi di attori, non in uno solo: c'e' quello del
 * system e spesso una copia di mondo con i token gia' disegnati, e le chiavi (che usano l'id
 * dell'attore, non il nome del pack) sono le stesse. righeDaCarte scarta i doppioni.
 * I compendi di mondo vengono prima, cosi' e' la loro copia a dare il nome alla riga.
 */
async function avversariDaiCompendi() {
  const packs = game.packs
    .filter(p => p.documentName === "Actor" && p.index.some(e => e.type === "adversary"))
    .sort((a, b) => (a.metadata.packageType === "world" ? 0 : 1) - (b.metadata.packageType === "world" ? 0 : 1));
  const avversari = [];
  for (const pack of packs) {
    const documenti = await pack.getDocuments({ type: "adversary" });
    avversari.push(...documenti.map(d => d.toObject()));
  }
  return avversari;
}

/*
 * Se il compendio non c'e' (system aggiornato, pack rinominato, mondo sbagliato) la finestra
 * si apriva vuota e muta. Qui lo si dice, e si mostrano almeno gli avversari.
 *
 * `uuid` va tenuto a mano perche' toObject() lo butta via, e senza di lui questo cammino
 * non sa da dove viene la carta (vedi chiavi.mjs: l'originale nel compendio non ha
 * _stats.compendiumSource).
 */
export async function leggiDocumenti() {
  const avversari = await avversariDaiCompendi();
  const pack = game.packs.get(COMPENDIO);
  if (!pack) {
    ui.notifications.error(game.i18n.format("DHVFX.finestra.compendioAssente", { pack: COMPENDIO }));
    return avversari;
  }
  const documenti = await pack.getDocuments();
  return [...documenti.map(d => ({ ...d.toObject(), uuid: d.uuid })), ...avversari];
}
