/*
 * Quale adattatore per quale system. Un system che non c'e' qui lascia il modulo spento:
 * niente hook, niente preload, e l'API risponde sempre false.
 */

import daggerheart from "./daggerheart/index.mjs";
import dnd5e from "./dnd5e/index.mjs";

const ADATTATORI = Object.freeze({ daggerheart, dnd5e });

export function adattatorePer(systemId) {
  return ADATTATORI[systemId] ?? null;
}
