import { test } from "node:test";
import assert from "node:assert/strict";
import { costruisci } from "../module/lib/scena.mjs";

/* Una Sequence finta che registra le chiamate invece di disegnare. */
function SequenceFinta() {
  const chiamate = [];
  const effetto = {
    file: f => (chiamate.push(["file", f]), effetto),
    atLocation: l => (chiamate.push(["atLocation", l]), effetto),
    stretchTo: t => (chiamate.push(["stretchTo", t]), effetto),
    scaleToObject: n => (chiamate.push(["scaleToObject", n]), effetto)
  };
  this.effect = () => effetto;
  this.chiamate = chiamate;
}

const desc = (forma, bersagli) => ({ file: "jb2a.x", forma, origine: "SRC", bersagli });

test("un proiettile si tende da origine a ogni bersaglio", () => {
  const s = costruisci(desc("proiettile", ["T1", "T2"]), SequenceFinta);
  assert.deepEqual(s.chiamate, [
    ["file", "jb2a.x"], ["atLocation", "SRC"], ["stretchTo", "T1"],
    ["file", "jb2a.x"], ["atLocation", "SRC"], ["stretchTo", "T2"]
  ]);
});

test("la forma bersaglio si appoggia su ogni bersaglio", () => {
  const s = costruisci(desc("bersaglio", ["T1"]), SequenceFinta);
  assert.deepEqual(s.chiamate, [["file", "jb2a.x"], ["atLocation", "T1"], ["scaleToObject", 2]]);
});

test("la forma lanciatore ignora i bersagli e sta sull'origine", () => {
  const s = costruisci(desc("lanciatore", ["T1", "T2"]), SequenceFinta);
  assert.deepEqual(s.chiamate, [["file", "jb2a.x"], ["atLocation", "SRC"], ["scaleToObject", 1.6]]);
});

test("costruisci non gioca: restituisce la sequenza, e' chi chiama a decidere quando", () => {
  const s = costruisci(desc("lanciatore", []), SequenceFinta);
  assert.ok(s instanceof SequenceFinta);
});
