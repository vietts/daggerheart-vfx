import { test } from "node:test";
import assert from "node:assert/strict";
import { fileDaPrecaricare } from "../module/lib/preload.mjs";

const dati = (fonte, id) => ({ compendiumSource: fonte, idAzione: id, nomeCarta: null, nomeAzione: null });
const F = "Compendium.daggerheart.domains.Item.AAA";
const mappa = {
  [`${F}::a1`]: { file: "jb2a.uno" },
  [`${F}::a2`]: { file: "jb2a.due" },
  [`${F}::a3`]: { file: "jb2a.uno" }
};

test("raccoglie i file delle azioni presenti, senza ripetizioni", () => {
  const out = fileDaPrecaricare([[dati(F, "a1"), dati(F, "a2")], [dati(F, "a3")]], mappa);
  assert.deepEqual(out.sort(), ["jb2a.due", "jb2a.uno"]);
});

test("le azioni senza riga non aggiungono niente", () => {
  assert.deepEqual(fileDaPrecaricare([[dati(F, "ignota")]], mappa), []);
});

test("nessun attore in scena, niente da precaricare", () => {
  assert.deepEqual(fileDaPrecaricare([], mappa), []);
});
