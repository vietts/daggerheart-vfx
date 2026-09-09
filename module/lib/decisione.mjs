/*
 * Il perno del modulo: da un contesto e una mappa esce un descrittore, cioe' un oggetto
 * semplice che dice cosa giocare e dove. Nessuna Sequence, nessun canvas: e' per questo che
 * tutta la catena decisionale si prova con node --test.
 *
 * I quattro modi di non fare niente sono espliciti e restituiscono null, non un descrittore
 * vuoto: chi chiama deve poter uscire senza controllare campi.
 */

import { chiave } from "./chiavi.mjs";

export function risolviForma(forma, bersagli) {
  if (forma !== "auto") return forma;
  return bersagli.length ? "bersaglio" : "lanciatore";
}

export function decidi(dati, mappa, ctx) {
  const k = chiave(dati);
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

  return { file: riga.file, forma, origine: ctx.origine, bersagli };
}
