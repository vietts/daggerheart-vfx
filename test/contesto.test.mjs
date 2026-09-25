import { test } from "node:test";
import assert from "node:assert/strict";
import { contesto } from "../module/lib/sistemi/daggerheart/contesto.mjs";

/* La forma vera di config.targets nel system, verificata sul sorgente di formatTarget. */
const bersaglio = (id, success) => ({
  id, actorId: `Actor.${id}`, name: id, img: "x.webp",
  difficulty: 12, evasion: 10, saveResult: { success: false },
  ...(success === undefined ? {} : { hitResult: { success } })
});

test("i bersagli diventano id e un booleano", () => {
  const c = contesto({ hasRoll: true, targets: [bersaglio("t1", true), bersaglio("t2", false)] }, "src");
  assert.deepEqual(c.bersagli, [{ id: "t1", colpito: true }, { id: "t2", colpito: false }]);
  assert.equal(c.origine, "src");
  assert.equal(c.haTiro, true);
});

test("senza hitResult il bersaglio conta come colpito", () => {
  const c = contesto({ hasRoll: false, targets: [bersaglio("t1")] }, "src");
  assert.deepEqual(c.bersagli, [{ id: "t1", colpito: true }]);
  assert.equal(c.haTiro, false);
});

test("un config senza bersagli da' una lista vuota, non un errore", () => {
  assert.deepEqual(contesto({}, "src").bersagli, []);
  assert.deepEqual(contesto(null, "src").bersagli, []);
});

test("senza token di origine l'origine e' null", () => {
  assert.equal(contesto({ targets: [] }, null).origine, null);
  assert.equal(contesto({ targets: [] }, undefined).origine, null);
});
