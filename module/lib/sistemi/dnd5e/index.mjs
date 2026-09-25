/*
 * L'adattatore D&D 5e (dnd5e 6.x). Stesso contratto di quello Daggerheart.
 */

import { chiave } from "./chiavi.mjs";
import { daHook, area } from "./contesto.mjs";
import { azioniDi, azioniDiAttore, righe, precompila } from "./catalogo.mjs";
import { leggiDocumenti } from "./finestra.mjs";

export default Object.freeze({
  id: "dnd5e",
  hook: "dnd5e.postUseActivity",
  chiave,
  azioniDi,
  azioniDiAttore,
  daHook,
  area,
  righe,
  precompila,
  leggiDocumenti
});
