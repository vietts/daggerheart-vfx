/*
 * Lo spike ha misurato che non esiste un costo di rendering: 20 effetti insieme tengono
 * come uno. Esiste un costo di primo caricamento, una volta per asset — 13 fps contro 40,
 * perche' il .webm va scaricato dal server e decodificato.
 *
 * Quindi si precarica. Ma non tutti e 284 i file: solo quelli delle carte che qualcuno in
 * questa scena puo' davvero usare.
 */

import { chiave } from "./chiavi.mjs";

export function fileDaPrecaricare(cartePerAttore, mappa) {
  const file = new Set();
  for (const azioni of cartePerAttore) {
    for (const dati of azioni) {
      const riga = mappa?.[chiave(dati)];
      if (riga?.file) file.add(riga.file);
    }
  }
  return [...file];
}
