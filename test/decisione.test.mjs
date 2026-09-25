import { test } from "node:test";
import assert from "node:assert/strict";
import { decidi, risolviForma } from "../module/lib/decisione.mjs";

const FONTE = "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw";
const K = `${FONTE}::a1`;
const ctx = (extra = {}) => ({ origine: "src", bersagli: [{ id: "t1", colpito: true }], haTiro: false, ...extra });

test("auto diventa bersaglio se ci sono bersagli", () => {
  assert.equal(risolviForma("auto", ["t1"]), "bersaglio");
});

test("auto diventa lanciatore se non ce ne sono", () => {
  assert.equal(risolviForma("auto", []), "lanciatore");
});

test("una forma esplicita non viene toccata", () => {
  assert.equal(risolviForma("proiettile", []), "proiettile");
});

test("il descrittore porta file, forma risolta, origine e bersagli", () => {
  const mappa = { [K]: { file: "jb2a.magic_missile.purple", forma: "proiettile" } };
  assert.deepEqual(decidi(K, mappa, ctx()), {
    file: "jb2a.magic_missile.purple", forma: "proiettile", origine: "src", bersagli: ["t1"]
  });
});

test("i bersagli mancati non ricevono l'effetto, ma solo se c'era un tiro", () => {
  const mappa = { [K]: { file: "f", forma: "bersaglio" } };
  const bersagli = [{ id: "t1", colpito: true }, { id: "t2", colpito: false }];
  assert.deepEqual(decidi(K, mappa, ctx({ bersagli, haTiro: true })).bersagli, ["t1"]);
  assert.deepEqual(decidi(K, mappa, ctx({ bersagli, haTiro: false })).bersagli, ["t1", "t2"]);
});

test("niente riga nella mappa, niente effetto", () => {
  assert.equal(decidi(K, {}, ctx()), null);
});

test("una riga senza file non e' una riga", () => {
  assert.equal(decidi(K, { [K]: { forma: "bersaglio" } }, ctx()), null);
});

test("senza token di origine non si gioca niente", () => {
  const mappa = { [K]: { file: "f", forma: "bersaglio" } };
  assert.equal(decidi(K, mappa, ctx({ origine: null })), null);
});

test("un proiettile senza bersagli non ha dove andare", () => {
  const mappa = { [K]: { file: "f", forma: "proiettile" } };
  assert.equal(decidi(K, mappa, ctx({ bersagli: [] })), null);
});

test("una riga senza forma vale auto", () => {
  const mappa = { [K]: { file: "f" } };
  assert.equal(decidi(K, mappa, ctx({ bersagli: [] })).forma, "lanciatore");
});

test("un'azione senza chiave non trova mai una riga", () => {
  assert.equal(decidi(null, { [K]: { file: "f" } }, ctx()), null);
});

test("una riga area porta l'area del contesto nel descrittore", () => {
  const mappa = { [K]: { file: "jb2a.fireball.explosion.orange", forma: "area" } };
  const area = { diametro: 40, punto: { x: 100, y: 200 } };
  assert.deepEqual(decidi(K, mappa, ctx({ area })), {
    file: "jb2a.fireball.explosion.orange", forma: "area", origine: "src", bersagli: ["t1"], area
  });
});

test("un'area senza bersagli si gioca lo stesso, e senza area nel contesto ha un'area vuota", () => {
  const mappa = { [K]: { file: "f", forma: "area" } };
  assert.deepEqual(decidi(K, mappa, ctx({ bersagli: [] })).area, { diametro: null, unita: null, punto: null });
});

test("un'area porta il centroide di tutti i bersagli, anche i mancati", () => {
  const mappa = { [K]: { file: "f", forma: "area" } };
  const bersagli = [{ id: "t1", colpito: true }, { id: "t2", colpito: false }];
  assert.deepEqual(decidi(K, mappa, ctx({ bersagli, haTiro: true })).bersagli, ["t1", "t2"]);
});

test("solo la forma area aggiunge il campo area", () => {
  const mappa = { [K]: { file: "f", forma: "bersaglio" } };
  assert.equal("area" in decidi(K, mappa, ctx({ area: { diametro: 40, punto: null } })), false);
});
