import { test } from "node:test";
import assert from "node:assert/strict";
import { costruisci, costruisciLibero, risolviToken } from "../module/lib/scena.mjs";

/* Una Sequence finta che registra le chiamate invece di disegnare. */
function SequenceFinta() {
  const chiamate = [];
  const effetto = {
    file: f => (chiamate.push(["file", f]), effetto),
    atLocation: l => (chiamate.push(["atLocation", l]), effetto),
    stretchTo: t => (chiamate.push(["stretchTo", t]), effetto),
    scaleToObject: n => (chiamate.push(["scaleToObject", n]), effetto),
    size: (n, o) => (chiamate.push(["size", n, o]), effetto)
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

/* costruisciLibero: la finta registra anche la tinta. */
function SequenceTinta() {
  SequenceFinta.call(this);
  const effetto = this.effect();
  effetto.tint = c => (this.chiamate.push(["tint", c]), effetto);
}

test("libero senza destinazioni si appoggia su ogni origine, alla scala scelta", () => {
  const s = costruisciLibero({ file: "jb2a.x", origini: ["A", "B"], scala: 1.5 }, SequenceTinta);
  assert.deepEqual(s.chiamate, [
    ["file", "jb2a.x"], ["atLocation", "A"], ["scaleToObject", 1.5],
    ["file", "jb2a.x"], ["atLocation", "B"], ["scaleToObject", 1.5]
  ]);
});

test("libero con destinazioni tende un proiettile per ogni coppia", () => {
  const s = costruisciLibero({ file: "jb2a.x", origini: ["A"], destinazioni: ["T1", "T2"] }, SequenceTinta);
  assert.deepEqual(s.chiamate, [
    ["file", "jb2a.x"], ["atLocation", "A"], ["stretchTo", "T1"],
    ["file", "jb2a.x"], ["atLocation", "A"], ["stretchTo", "T2"]
  ]);
});

test("la tinta si aggiunge solo se c'e'", () => {
  const s = costruisciLibero({ file: "jb2a.x", origini: ["A"], tinta: "#1a1a1a" }, SequenceTinta);
  assert.deepEqual(s.chiamate.at(-1), ["tint", "#1a1a1a"]);
  const senza = costruisciLibero({ file: "jb2a.x", origini: ["A"] }, SequenceTinta);
  assert.ok(!senza.chiamate.some(c => c[0] === "tint"));
});

const token = id => ({ id, center: { x: 0, y: 0 } });
const trova = id => (id === "sparito" ? null : token(id));

test("risolviToken sostituisce gli id con i token", () => {
  const r = risolviToken({ file: "f", forma: "proiettile", origine: "SRC", bersagli: ["T1"] }, trova);
  assert.equal(r.origine.id, "SRC");
  assert.deepEqual(r.bersagli.map(b => b.id), ["T1"]);
});

test("risolviToken: senza token d'origine non si gioca", () => {
  assert.equal(risolviToken({ file: "f", forma: "lanciatore", origine: "sparito", bersagli: [] }, trova), null);
});

test("risolviToken: un bersaglio sparito resta fuori, e se non ne resta nessuno il proiettile non parte", () => {
  assert.equal(risolviToken({ file: "f", forma: "proiettile", origine: "SRC", bersagli: ["sparito"] }, trova), null);
  assert.equal(risolviToken({ file: "f", forma: "bersaglio", origine: "SRC", bersagli: ["sparito"] }, trova), null);
  assert.ok(risolviToken({ file: "f", forma: "lanciatore", origine: "SRC", bersagli: ["sparito"] }, trova));
});

const tk = (id, x, y) => ({ id, center: { x, y } });

test("area: sul punto piazzato, grande quanto il diametro in caselle", () => {
  const s = costruisci({ file: "jb2a.x", forma: "area", origine: tk("S", 0, 0), bersagli: [tk("T", 50, 50)],
    area: { diametro: 40, unita: "ft", punto: { x: 10, y: 20 } } }, SequenceFinta, { distanzaCasella: 5, unitaCasella: "ft" });
  assert.deepEqual(s.chiamate, [["file", "jb2a.x"], ["atLocation", { x: 10, y: 20 }], ["size", 8, { gridUnits: true }]]);
});

test("area senza punto: al centro dei bersagli", () => {
  const s = costruisci({ file: "jb2a.x", forma: "area", origine: tk("S", 0, 0),
    bersagli: [tk("A", 0, 0), tk("B", 100, 200)], area: { diametro: 20, unita: "ft", punto: null } },
    SequenceFinta, { distanzaCasella: 5, unitaCasella: "ft" });
  assert.deepEqual(s.chiamate[1], ["atLocation", { x: 50, y: 100 }]);
  assert.deepEqual(s.chiamate[2], ["size", 4, { gridUnits: true }]);
});

test("area senza punto ma con centro lanciatore (emanazione su se stessi): sul lanciatore", () => {
  const origine = tk("S", 0, 0);
  const s = costruisci({ file: "jb2a.x", forma: "area", origine, bersagli: [tk("A", 100, 100)],
    area: { diametro: 20, unita: "ft", punto: null, centro: "lanciatore" } }, SequenceFinta, { distanzaCasella: 5, unitaCasella: "ft" });
  assert.deepEqual(s.chiamate[1], ["atLocation", origine]);
});

test("area senza punto ne' bersagli: sul lanciatore; senza diametro: la misura di ripiego", () => {
  const origine = tk("S", 0, 0);
  const s = costruisci({ file: "jb2a.x", forma: "area", origine, bersagli: [], area: { diametro: null, unita: null, punto: null } },
    SequenceFinta, { distanzaCasella: 5, unitaCasella: "ft" });
  assert.deepEqual(s.chiamate, [["file", "jb2a.x"], ["atLocation", origine], ["size", 3, { gridUnits: true }]]);
});

test("area senza distanza della griglia: la misura di ripiego", () => {
  const s = costruisci({ file: "jb2a.x", forma: "area", origine: tk("S", 0, 0), bersagli: [],
    area: { diametro: 40, unita: "ft", punto: null } }, SequenceFinta, {});
  assert.deepEqual(s.chiamate[2], ["size", 3, { gridUnits: true }]);
});

test("area: 40 piedi convertiti su una griglia in metri", () => {
  const s = costruisci({ file: "jb2a.x", forma: "area", origine: tk("S", 0, 0), bersagli: [],
    area: { diametro: 40, unita: "ft", punto: { x: 0, y: 0 } } }, SequenceFinta, { distanzaCasella: 1.5, unitaCasella: "m" });
  assert.deepEqual(s.chiamate[2], ["size", 8, { gridUnits: true }]);
});

test("area: 12 metri convertiti su una griglia in piedi", () => {
  const s = costruisci({ file: "jb2a.x", forma: "area", origine: tk("S", 0, 0), bersagli: [],
    area: { diametro: 12, unita: "m", punto: { x: 0, y: 0 } } }, SequenceFinta, { distanzaCasella: 5, unitaCasella: "ft" });
  assert.deepEqual(s.chiamate[2], ["size", 8, { gridUnits: true }]);
});

test("area: un abbinamento di unita' sconosciuto ricade sulla misura di ripiego", () => {
  const s = costruisci({ file: "jb2a.x", forma: "area", origine: tk("S", 0, 0), bersagli: [],
    area: { diametro: 40, unita: "mi", punto: { x: 0, y: 0 } } }, SequenceFinta, { distanzaCasella: 5, unitaCasella: "ft" });
  assert.deepEqual(s.chiamate[2], ["size", 3, { gridUnits: true }]);
});

test("risolviToken: un'area si gioca anche senza bersagli", () => {
  const r = risolviToken({ file: "f", forma: "area", origine: "SRC", bersagli: ["sparito"], area: { diametro: null, unita: null, punto: null } }, trova);
  assert.deepEqual(r.bersagli, []);
});
