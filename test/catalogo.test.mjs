import { test } from "node:test";
import assert from "node:assert/strict";
import { righeDaCarte, precompila } from "../module/lib/catalogo.mjs";

const F = "Compendium.daggerheart.domains.Item.AAA";
const carta = (nome, dominio, azioni) => ({
  name: nome, type: "domainCard",
  system: { domain: dominio, actions: azioni },
  _stats: { compendiumSource: F }
});
const carte = [
  carta("Book of Illiat", "arcana", {
    a1: { _id: "a1", name: "Arcane Barrage", type: "damage", range: "close", target: { type: "any" } },
    a2: { _id: "a2", name: "Telepathy", type: "effect", range: null, target: { type: "any" } }
  }),
  carta("Mending Touch", "splendor", {
    b1: { _id: "b1", name: "Heal Two", type: "healing", range: null, target: { type: "any" } }
  })
];

test("una riga per ogni azione di ogni carta", () => {
  const righe = righeDaCarte(carte);
  assert.equal(righe.length, 3);
  assert.deepEqual(righe.map(r => r.nomeAzione), ["Arcane Barrage", "Telepathy", "Heal Two"]);
  assert.equal(righe[0].chiave, `${F}::a1`);
  assert.equal(righe[0].dominio, "arcana");
});

test("una riga nasce vuota se la mappa non la conosce", () => {
  const righe = righeDaCarte(carte, {});
  assert.equal(righe[0].file, null);
  assert.equal(righe[0].forma, null);
});

test("una riga si riempie da quello che c'e' nella mappa", () => {
  const mappa = { [`${F}::a1`]: { file: "jb2a.scelto", forma: "lanciatore" } };
  const righe = righeDaCarte(carte, mappa);
  assert.equal(righe[0].file, "jb2a.scelto");
  assert.equal(righe[0].forma, "lanciatore");
});

test("precompila riempie le vuote usando le regole", () => {
  const nuova = precompila(righeDaCarte(carte, {}), {});
  assert.equal(nuova[`${F}::a1`].file, "jb2a.explosion.02.blue");   // arcana + damage
  assert.equal(nuova[`${F}::a1`].forma, "proiettile");              // damage + range close
  assert.equal(nuova[`${F}::a2`].forma, "auto");                    // effect senza range
  assert.equal(nuova[`${F}::b1`].file, "jb2a.healing_generic.400px.blue"); // splendor + healing
});

test("precompila non tocca cio' che hai gia' scelto", () => {
  const mappa = { [`${F}::a1`]: { file: "jb2a.mio", forma: "lanciatore" } };
  const nuova = precompila(righeDaCarte(carte, mappa), mappa);
  assert.deepEqual(nuova[`${F}::a1`], { file: "jb2a.mio", forma: "lanciatore" });
});

test("una coppia dominio+tipo senza regola resta vuota", () => {
  const strana = [carta("X", "dominio-inventato", { z: { _id: "z", name: "Z", type: "attack", target: {} } })];
  const nuova = precompila(righeDaCarte(strana, {}), {});
  assert.equal(Object.keys(nuova).length, 0);
});
