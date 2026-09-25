/*
 * Quale adattatore per quale system. Un system che non c'e' qui lascia il modulo spento:
 * niente hook, niente preload, e l'API risponde sempre false.
 */

import daggerheart from "./daggerheart/index.mjs";

const ADATTATORI = Object.freeze({ daggerheart });

export function adattatorePer(systemId) {
  return ADATTATORI[systemId] ?? null;
}
