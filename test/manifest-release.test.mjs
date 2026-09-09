import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { manifestDiRilascio, versioneDaTag } from "../tools/manifest-release.mjs";

/*
 * Questa logica viveva dentro il workflow di release, dove nessun test poteva arrivarci, e
 * ci aveva gia' lasciato un bug vero sulla lettura di process.argv. Qui la si prova, incluso
 * il passaggio dalla riga di comando che era il pezzo sbagliato.
 */

const SCRIPT = fileURLToPath(new URL("../tools/manifest-release.mjs", import.meta.url));
const base = { id: "daggerheart-vfx", version: "0.0.0", esmodules: ["daggerheart-vfx.mjs"] };

test("dal tag esce la versione, con o senza la v iniziale", () => {
  assert.equal(versioneDaTag("v1.2.3"), "1.2.3");
  assert.equal(versioneDaTag("1.2.3"), "1.2.3");
  assert.equal(versioneDaTag("v1.2.3-beta.1"), "1.2.3-beta.1");
});

test("un tag che non e' una versione si ferma subito", () => {
  assert.throws(() => versioneDaTag("vattelapesca"), /tag non riconosciuto/);
  assert.throws(() => versioneDaTag(""), /serve un tag/);
  assert.throws(() => versioneDaTag(undefined), /serve un tag/);
});

test("versione, download E manifest si allineano al repo vero", () => {
  const m = manifestDiRilascio(base, "v0.2.0", "unaltroowner/daggerheart-vfx");
  assert.equal(m.version, "0.2.0");
  assert.equal(m.download,
    "https://github.com/unaltroowner/daggerheart-vfx/releases/download/v0.2.0/module.zip");
  assert.equal(m.manifest,
    "https://github.com/unaltroowner/daggerheart-vfx/releases/latest/download/module.json");
});

test("il resto del manifest non si tocca", () => {
  const m = manifestDiRilascio(base, "v0.2.0", "owner/repo");
  assert.equal(m.id, "daggerheart-vfx");
  assert.deepEqual(m.esmodules, ["daggerheart-vfx.mjs"]);
});

test("un repo che non e' owner/nome si ferma invece di scrivere un url rotto", () => {
  assert.throws(() => manifestDiRilascio(base, "v1.0.0", "soloilnome"), /owner\/nome/);
  assert.throws(() => manifestDiRilascio(base, "v1.0.0", undefined), /owner\/nome/);
});

test("dalla riga di comando: gli argomenti arrivano dove devono", () => {
  const percorso = join(mkdtempSync(join(tmpdir(), "dhvfx-")), "module.json");
  writeFileSync(percorso, JSON.stringify(base, null, 2));

  execFileSync(process.execPath, [SCRIPT, "v9.9.9", "owner/repo", percorso]);

  const m = JSON.parse(readFileSync(percorso, "utf8"));
  assert.equal(m.version, "9.9.9");
  assert.equal(m.download, "https://github.com/owner/repo/releases/download/v9.9.9/module.zip");
  assert.equal(m.manifest, "https://github.com/owner/repo/releases/latest/download/module.json");
  assert.equal(m.id, "daggerheart-vfx");
});

test("dalla riga di comando senza argomenti esce con errore, non a meta' lavoro", () => {
  assert.throws(() => execFileSync(process.execPath, [SCRIPT], { stdio: "pipe" }));
});
