import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DANNI, ARMI, NATURALI, SOFFI, SCUOLE, CURA, GENERICO, regolaDnd } from "../module/lib/sistemi/dnd5e/regole.mjs";
import { ASSEGNAZIONI_DND } from "../module/lib/sistemi/dnd5e/assegnazioni.mjs";
import { FORME } from "../module/lib/costanti.mjs";

const FOGLIE = readFileSync(new URL("./fixtures/jb2a-free-0.9.3.txt", import.meta.url), "utf8").trim().split("\n");
const LUNGHEZZA = /\.(05|15|30|60|90)ft$/;
const PROIETTILI = new Set(FOGLIE.filter(f => LUNGHEZZA.test(f)).map(f => f.replace(LUNGHEZZA, "")));
const esiste = k => FOGLIE.some(f => f === k || f.startsWith(k + "."));

const SPELLS24 = new Set(readFileSync(new URL("./fixtures/dnd5e-spells24-6.0.3.txt", import.meta.url), "utf8").trim().split("\n"));
/* Incantesimi del PHB 2024 che l'SRD non ha: la tabella li puo' nominare, dichiarandoli qui. */
const SOLO_PHB = new Set(["witch-bolt", "arms-of-hadar", "toll-the-dead"]);

test("il fixture degli incantesimi e' l'SRD 2024 di dnd5e 6.0.3", () => {
  assert.equal(SPELLS24.size, 341);
  for (const k of ["magic-missile", "fireball", "hunters-mark"]) assert.ok(SPELLS24.has(k), k);
});

/* Tutti i file citati da regole e tabella, con dove stanno. */
function fileCitati() {
  const out = [];
  for (const [danno, riga] of Object.entries(DANNI))
    for (const [col, cella] of Object.entries(riga)) out.push([`DANNI.${danno}.${col}`, typeof cella === "string" ? cella : cella.file]);
  for (const [b, { mischia, distanza }] of Object.entries(ARMI)) {
    if (mischia) out.push([`ARMI.${b}.mischia`, mischia]);
    if (distanza) out.push([`ARMI.${b}.distanza`, distanza]);
  }
  for (const [k, f] of Object.entries(NATURALI)) out.push([`NATURALI.${k}`, f]);
  for (const [k, { cone, line }] of Object.entries(SOFFI)) out.push([`SOFFI.${k}.cone`, cone], [`SOFFI.${k}.line`, line]);
  for (const [k, f] of Object.entries(SCUOLE)) out.push([`SCUOLE.${k}`, f]);
  out.push(["CURA", CURA], ["GENERICO.mischia", GENERICO.mischia], ["GENERICO.distanza", GENERICO.distanza]);
  for (const [k, { file }] of Object.entries(ASSEGNAZIONI_DND)) out.push([k, file]);
  return out;
}

test("ogni file di regole e tabella esiste in JB2A gratuito, senza la lunghezza", () => {
  for (const [dove, file] of fileCitati()) {
    assert.ok(esiste(file), `${dove}: ${file}`);
    assert.doesNotMatch(file, LUNGHEZZA, dove);
  }
});

test("le colonne proiettile hanno proiettili, le altre no", () => {
  for (const [danno, riga] of Object.entries(DANNI)) {
    for (const [col, cella] of Object.entries(riga)) {
      if (typeof cella !== "string") { assert.ok(FORME.includes(cella.forma), `${danno}.${col}`); continue; }
      assert.equal(PROIETTILI.has(cella), col === "proiettile", `DANNI.${danno}.${col}: ${cella}`);
    }
  }
  for (const [b, { distanza }] of Object.entries(ARMI)) if (distanza) assert.ok(PROIETTILI.has(distanza), `ARMI.${b}`);
});

/*
 * Qui non vale "proiettile se e solo se ha le lunghezze" come in Daggerheart: coni e linee
 * (Mani brucianti, i soffi) sono file tesi dal lanciatore senza lunghezze. Vale la meta' che
 * resta vera: un file con le lunghezze e' sempre un proiettile.
 */
test("tabella: forma valida, chiave ben fatta, un file con le lunghezze e' sempre proiettile", () => {
  for (const [k, { file, forma }] of Object.entries(ASSEGNAZIONI_DND)) {
    assert.match(k, /^dnd5e\.(spell|weapon|feat|consumable)\.[a-z0-9-]+$/, k);
    assert.ok(FORME.includes(forma), `${k}: ${forma}`);
    if (PROIETTILI.has(file)) assert.equal(forma, "proiettile", `${k}: ${file}`);
  }
});

test("ogni incantesimo della tabella esiste nell'SRD 2024, o e' dichiarato solo-PHB", () => {
  for (const k of Object.keys(ASSEGNAZIONI_DND)) {
    if (!k.startsWith("dnd5e.spell.")) continue;
    const id = k.slice("dnd5e.spell.".length);
    assert.ok(SPELLS24.has(id) || SOLO_PHB.has(id), k);
  }
});

const riga = extra => ({ tipoItem: "spell", identifier: "x", danni: [], cura: false, scuola: null, baseItem: null,
  naturale: false, sagoma: null, attacco: null, formaDedotta: "auto", ...extra });

test("regola: danno per forma", () => {
  assert.deepEqual(regolaDnd(riga({ danni: ["fire"], formaDedotta: "proiettile" })), { file: DANNI.fire.proiettile, forma: "proiettile" });
  assert.deepEqual(regolaDnd(riga({ danni: ["fire"], formaDedotta: "area" })), { file: DANNI.fire.area, forma: "area" });
  assert.deepEqual(regolaDnd(riga({ danni: ["fire"], formaDedotta: "auto" })), { file: DANNI.fire.bersaglio, forma: "auto" });
});

test("regola: una cella con forma propria la impone", () => {
  assert.deepEqual(regolaDnd(riga({ danni: ["thunder"], formaDedotta: "proiettile" })), DANNI.thunder.proiettile);
});

test("regola: un incantesimo a danno con raggio 'lanciatore' gioca il file bersaglio su chi lancia", () => {
  assert.deepEqual(regolaDnd(riga({ danni: ["fire"], formaDedotta: "lanciatore" })), { file: DANNI.fire.bersaglio, forma: "lanciatore" });
});

test("regola: cura, poi scuola, poi niente", () => {
  assert.deepEqual(regolaDnd(riga({ cura: true })), { file: CURA, forma: "auto" });
  assert.deepEqual(regolaDnd(riga({ scuola: "enc" })), { file: SCUOLE.enc, forma: "auto" });
  assert.equal(regolaDnd(riga({ tipoItem: "feat" })), null);
});

test("regola: armi per baseItem e tipo d'attacco", () => {
  assert.deepEqual(regolaDnd(riga({ tipoItem: "weapon", baseItem: "scimitar", attacco: "melee", formaDedotta: "bersaglio" })),
    { file: ARMI.scimitar.mischia, forma: "bersaglio" });
  assert.deepEqual(regolaDnd(riga({ tipoItem: "weapon", baseItem: "longbow", attacco: "ranged", formaDedotta: "proiettile" })),
    { file: ARMI.longbow.distanza, forma: "proiettile" });
  assert.deepEqual(regolaDnd(riga({ tipoItem: "weapon", baseItem: "dagger", attacco: "ranged" })),
    { file: ARMI.dagger.distanza, forma: "proiettile" });
});

test("regola: un'arma solo a distanza senza attacco 'ranged' usa comunque il suo file a distanza", () => {
  assert.deepEqual(regolaDnd(riga({ tipoItem: "weapon", baseItem: "longbow", attacco: null })),
    { file: ARMI.longbow.distanza, forma: "proiettile" });
});

test("regola: armi naturali per identifier, e un'arma sconosciuta ha il generico", () => {
  assert.deepEqual(regolaDnd(riga({ tipoItem: "weapon", identifier: "bite", naturale: true, attacco: "melee" })),
    { file: NATURALI.bite, forma: "bersaglio" });
  assert.deepEqual(regolaDnd(riga({ tipoItem: "weapon", identifier: "tentacolo", attacco: "melee" })),
    { file: GENERICO.mischia, forma: "bersaglio" });
  assert.deepEqual(regolaDnd(riga({ tipoItem: "weapon", identifier: "fionda-strana", attacco: "ranged" })),
    { file: GENERICO.distanza, forma: "proiettile" });
});

test("regola: un soffio segue danno e sagoma", () => {
  assert.deepEqual(regolaDnd(riga({ tipoItem: "feat", identifier: "fire-breath", danni: ["fire"], sagoma: { tipo: "line", size: 30 } })),
    { file: SOFFI.fire.line, forma: "proiettile" });
  assert.deepEqual(regolaDnd(riga({ tipoItem: "feat", identifier: "cold-breath", danni: ["cold"], sagoma: { tipo: "cone", size: 30 } })),
    { file: SOFFI.cold.cone, forma: "proiettile" });
});
