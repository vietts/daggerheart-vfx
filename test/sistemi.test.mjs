import { test } from "node:test";
import assert from "node:assert/strict";
import { adattatorePer } from "../module/lib/sistemi/index.mjs";

const FONTE = "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw";
const carta = {
  name: "Book of Illiat", type: "domainCard", uuid: FONTE,
  system: { domain: "arcana", actions: { a1: { _id: "a1", name: "Arcane Barrage", type: "damage", range: "close", target: { type: "any" } } } },
  _stats: { compendiumSource: FONTE }
};

test("il registro conosce daggerheart e nient'altro, per ora", () => {
  assert.equal(adattatorePer("daggerheart").id, "daggerheart");
  assert.equal(adattatorePer("pf2e"), null);
  assert.equal(adattatorePer(undefined), null);
});

test("l'adattatore daggerheart ha tutto il contratto", () => {
  const a = adattatorePer("daggerheart");
  for (const m of ["chiave", "azioniDi", "azioniDiAttore", "daHook", "area", "righe", "precompila", "leggiDocumenti"])
    assert.equal(typeof a[m], "function", m);
  assert.equal(a.hook, "daggerheart.postUseAction");
  assert.ok(Object.isFrozen(a));
});

test("daHook di daggerheart: dati, attore e bersagli dal config", () => {
  const a = adattatorePer("daggerheart");
  const attore = { id: "pg" };
  const action = { _id: "a1", name: "Arcane Barrage", type: "damage", range: "close", target: { type: "any" }, item: carta, actor: attore };
  const config = { hasRoll: true, targets: [{ id: "t1", hitResult: { success: true } }, { id: "t2", hitResult: { success: false } }] };
  const ev = a.daHook([action, config], { bersagliUtente: ["ignorato"] });
  assert.equal(a.chiave(ev.dati), `${FONTE}::a1`);
  assert.equal(ev.attore, attore);
  assert.deepEqual(ev.bersagli, [{ id: "t1", colpito: true }, { id: "t2", colpito: false }]);
  assert.equal(ev.haTiro, true);
  assert.equal(ev.area, null);
});

test("daHook di daggerheart ignora cio' che non e' una carta o un avversario", () => {
  const a = adattatorePer("daggerheart");
  const action = { _id: "x", name: "Arma", type: "attack", item: { type: "weapon", name: "Spada" } };
  assert.equal(a.daHook([action, {}], { bersagliUtente: [] }), null);
});

test("azioniDiAttore: le carte di un personaggio, l'attacco e le feature di un avversario", () => {
  const a = adattatorePer("daggerheart");
  const pg = { type: "character", items: [carta, { type: "weapon", name: "Spada", system: {} }] };
  assert.equal(a.azioniDiAttore(pg).length, 1);
  const avversario = { type: "adversary", _id: "AVV", name: "Goblin", system: { tier: 1, attack: { _id: "att", name: "Colpo", type: "attack" } }, items: [] };
  assert.equal(a.azioniDiAttore(avversario).length, 1);
});
