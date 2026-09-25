import { test } from "node:test";
import assert from "node:assert/strict";
import { REGOLE, fileDaRegola, formaDaAzione } from "../module/lib/sistemi/daggerheart/regole.mjs";

test("ci sono 37 regole, una per coppia dominio+tipo del compendio 2.9.3", () => {
  assert.equal(Object.keys(REGOLE).length, 37);
});

test("tutte e dieci i domini sono coperti", () => {
  const domini = new Set(Object.keys(REGOLE).map(k => k.split("+")[0]));
  assert.deepEqual([...domini].sort(),
    ["arcana", "blade", "bone", "codex", "dread", "grace", "midnight", "sage", "splendor", "valor"]);
});

test("ogni regola punta a una chiave del database jb2a", () => {
  for (const [coppia, file] of Object.entries(REGOLE)) {
    assert.ok(file.startsWith("jb2a."), `${coppia} non punta a jb2a: ${file}`);
  }
});

test("fileDaRegola trova le coppie note e tace sulle altre", () => {
  assert.equal(fileDaRegola("arcana", "attack"), "jb2a.magic_missile.purple");
  assert.equal(fileDaRegola("arcana", "inesistente"), null);
});

test("un attacco a distanza e' un proiettile", () => {
  assert.equal(formaDaAzione({ tipo: "attack", range: "far", targetType: "any" }), "proiettile");
  assert.equal(formaDaAzione({ tipo: "damage", range: "close", targetType: "any" }), "proiettile");
});

test("un attacco in mischia si appoggia sul bersaglio", () => {
  assert.equal(formaDaAzione({ tipo: "attack", range: "melee", targetType: "any" }), "bersaglio");
  assert.equal(formaDaAzione({ tipo: "attack", range: "veryClose", targetType: "any" }), "bersaglio");
});

test("cio' che punta a se stessi sta sul lanciatore", () => {
  assert.equal(formaDaAzione({ tipo: "effect", range: null, targetType: "self" }), "lanciatore");
  assert.equal(formaDaAzione({ tipo: "healing", range: "self", targetType: "any" }), "lanciatore");
});

test("senza range la forma resta auto: e' il caso maggioritario", () => {
  assert.equal(formaDaAzione({ tipo: "effect", range: null, targetType: "any" }), "auto");
  assert.equal(formaDaAzione({ tipo: "healing", range: "", targetType: "any" }), "auto");
  assert.equal(formaDaAzione({ tipo: "attack", range: null, targetType: "any" }), "auto");
});
