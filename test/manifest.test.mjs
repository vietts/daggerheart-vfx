import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { MODULE_ID, FORME } from "../module/lib/costanti.mjs";

const manifest = JSON.parse(
  readFileSync(fileURLToPath(new URL("../module/module.json", import.meta.url)), "utf8")
);

test("l'id del manifest coincide con MODULE_ID", () => {
  assert.equal(manifest.id, MODULE_ID);
});

test("l'entry point dichiarato esiste nel manifest", () => {
  assert.deepEqual(manifest.esmodules, ["daggerheart-vfx.mjs"]);
});

test("le dipendenze obbligatorie sono dichiarate", () => {
  const richiesti = manifest.relationships.requires.map(r => r.id).sort();
  assert.deepEqual(richiesti, ["JB2A_DnD5e", "sequencer"]);
});

test("la compatibilita' e' 13-14", () => {
  assert.equal(manifest.compatibility.minimum, "13");
  assert.equal(manifest.compatibility.verified, "14");
});

test("le quattro forme sono quelle previste", () => {
  assert.deepEqual([...FORME].sort(), ["auto", "bersaglio", "lanciatore", "proiettile"]);
});
