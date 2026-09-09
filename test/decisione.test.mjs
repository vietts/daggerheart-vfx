import { test } from "node:test";
import assert from "node:assert/strict";
import { decidi, risolviForma } from "../module/lib/decisione.mjs";

const FONTE = "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw";
const DATI = { compendiumSource: FONTE, idAzione: "a1", nomeCarta: "Book of Illiat", nomeAzione: "Arcane Barrage" };
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
  assert.deepEqual(decidi(DATI, mappa, ctx()), {
    file: "jb2a.magic_missile.purple", forma: "proiettile", origine: "src", bersagli: ["t1"]
  });
});

test("i bersagli mancati non ricevono l'effetto, ma solo se c'era un tiro", () => {
  const mappa = { [K]: { file: "f", forma: "bersaglio" } };
  const bersagli = [{ id: "t1", colpito: true }, { id: "t2", colpito: false }];
  assert.deepEqual(decidi(DATI, mappa, ctx({ bersagli, haTiro: true })).bersagli, ["t1"]);
  assert.deepEqual(decidi(DATI, mappa, ctx({ bersagli, haTiro: false })).bersagli, ["t1", "t2"]);
});

test("niente riga nella mappa, niente effetto", () => {
  assert.equal(decidi(DATI, {}, ctx()), null);
});

test("una riga senza file non e' una riga", () => {
  assert.equal(decidi(DATI, { [K]: { forma: "bersaglio" } }, ctx()), null);
});

test("senza token di origine non si gioca niente", () => {
  const mappa = { [K]: { file: "f", forma: "bersaglio" } };
  assert.equal(decidi(DATI, mappa, ctx({ origine: null })), null);
});

test("un proiettile senza bersagli non ha dove andare", () => {
  const mappa = { [K]: { file: "f", forma: "proiettile" } };
  assert.equal(decidi(DATI, mappa, ctx({ bersagli: [] })), null);
});

test("una riga senza forma vale auto", () => {
  const mappa = { [K]: { file: "f" } };
  assert.equal(decidi(DATI, mappa, ctx({ bersagli: [] })).forma, "lanciatore");
});

test("un'azione senza chiave non trova mai una riga", () => {
  const vuoto = { compendiumSource: null, idAzione: null, nomeCarta: null, nomeAzione: null };
  assert.equal(decidi(vuoto, { [K]: { file: "f" } }, ctx()), null);
});
