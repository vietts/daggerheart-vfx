/*
 * Il perno del modulo: da un contesto e una mappa esce un descrittore, cioe' un oggetto
 * semplice che dice cosa giocare e dove. Nessuna Sequence, nessun canvas: e' per questo che
 * tutta la catena decisionale si prova con node --test.
 *
 * I quattro modi di non fare niente sono espliciti e restituiscono null, non un descrittore
 * vuoto: chi chiama deve poter uscire senza controllare campi.
 */

export function risolviForma(forma, bersagli) {
  if (forma !== "auto") return forma;
  return bersagli.length ? "bersaglio" : "lanciatore";
}

export function decidi(k, mappa, ctx) {
  if (!k) return null;

  const riga = mappa?.[k];
  if (!riga?.file) return null;

  if (!ctx.origine) return null;

  /* Il filtro sui mancati vale solo se c'e' stato un tiro: un'azione senza tiro non ha
     bersagli mancati, ha solo bersagli. */
  const bersagli = ctx.bersagli
    .filter(b => !ctx.haTiro || b.colpito)
    .map(b => b.id);

  const forma = risolviForma(riga.forma ?? "auto", bersagli);

  /* Un proiettile e' definito dai suoi due capi. Senza bersaglio non e' un effetto brutto:
     e' un effetto che Sequencer non sa dove tendere. */
  if (forma === "proiettile" && bersagli.length === 0) return null;

  const descrittore = { file: riga.file, forma, origine: ctx.origine, bersagli };
  /* L'area la sa solo il contesto (la sagoma dell'incantesimo, il punto piazzato). Una riga
     messa ad `area` a mano su un sistema che non ne dichiara porta un'area vuota: scena.mjs
     sa ripiegare. */
  if (forma === "area") descrittore.area = ctx.area ?? { diametro: null, punto: null };
  return descrittore;
}
