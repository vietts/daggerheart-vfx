import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { ASSEGNAZIONI } from "../module/lib/assegnazioni.mjs";
import { REGOLE } from "../module/lib/regole.mjs";
import { FORME } from "../module/lib/costanti.mjs";

/*
 * Le foglie del database che JB2A_DnD5e 0.9.3 (la versione gratuita) registra in Sequencer,
 * estratte da scripts/jb2a_sequencer.js. Una chiave sbagliata qui non da' errore da nessuna
 * parte: l'effetto semplicemente non parte al tavolo. Per questo si controllano tutte.
 */
const FOGLIE = readFileSync(new URL("./fixtures/jb2a-free-0.9.3.txt", import.meta.url), "utf8")
  .trim().split("\n");
const LUNGHEZZA = /\.(05|15|30|60|90)ft$/;
const PROIETTILI = new Set(FOGLIE.filter(f => LUNGHEZZA.test(f)).map(f => f.replace(LUNGHEZZA, "")));
const esiste = k => FOGLIE.some(f => f === k || f.startsWith(k + "."));

test("il fixture e' il database gratuito intero", () => {
  assert.equal(FOGLIE.length, 1693);
  assert.equal(PROIETTILI.size, 87);
});

test("la tabella copre tutte le 284 azioni del compendio", () => {
  assert.equal(Object.keys(ASSEGNAZIONI).length, 284);
  for (const k of Object.keys(ASSEGNAZIONI)) {
    assert.match(k, /^Compendium\.daggerheart\.domains\.Item\.\w{16}::\w{16}$/, k);
  }
});

test("ogni effetto della tabella esiste in JB2A gratuito", () => {
  for (const [k, { file }] of Object.entries(ASSEGNAZIONI)) assert.ok(esiste(file), `${k}: ${file}`);
});

test("anche le regole di dominio esistono in JB2A gratuito", () => {
  for (const [coppia, file] of Object.entries(REGOLE)) assert.ok(esiste(file), `${coppia}: ${file}`);
});

test("proiettile se e solo se il file ha le lunghezze", () => {
  for (const [k, { file, forma }] of Object.entries(ASSEGNAZIONI)) {
    assert.ok(FORME.includes(forma), `${k}: forma ${forma}`);
    assert.equal(forma === "proiettile", PROIETTILI.has(file), `${k}: ${file} come ${forma}`);
  }
});

test("una proiettile non porta la lunghezza nella chiave", () => {
  for (const [k, { file }] of Object.entries(ASSEGNAZIONI)) assert.doesNotMatch(file, LUNGHEZZA, k);
});

test("la tabella distingue davvero: molti piu' effetti delle 37 regole", () => {
  const distinti = new Set(Object.values(ASSEGNAZIONI).map(a => a.file));
  assert.ok(distinti.size > 100, `solo ${distinti.size} effetti distinti`);
});
