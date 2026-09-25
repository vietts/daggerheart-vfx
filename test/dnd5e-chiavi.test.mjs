import { test } from "node:test";
import assert from "node:assert/strict";
import { identificatore, datiAzione, chiave, gruppo, diametro } from "../module/lib/sistemi/dnd5e/chiavi.mjs";

const incantesimo = (nome, identifier, sistema, attivita) => ({
  name: nome, type: "spell",
  system: { identifier, level: 1, school: "evo", range: { units: "ft", value: "120" }, target: { template: { type: "" } }, ...sistema, activities: attivita }
});

const MM_2024 = incantesimo("Magic Missile", "magic-missile", {}, {
  dnd5eactivity000: { _id: "dnd5eactivity000", type: "damage", damage: { parts: [{ types: ["force"] }] }, target: { override: false } }
});
const MM_2014 = incantesimo("Magic Missile", "magic-missile", {}, {
  rttaq2XQZpjYRPc8: { _id: "rttaq2XQZpjYRPc8", type: "damage", damage: { parts: [{ types: ["force"] }] }, target: { override: false } }
});
const FIREBALL = incantesimo("Fireball", "fireball", { level: 3, target: { template: { type: "sphere", size: "20" } } }, {
  a: { _id: "a", type: "save", damage: { parts: [{ types: ["fire"] }] }, target: { override: false } }
});
const THUNDERWAVE = incantesimo("Thunderwave", "thunderwave", { range: { units: "self" }, target: { template: { type: "cube", size: "15" } } }, {
  a: { _id: "a", type: "save", damage: { parts: [{ types: ["thunder"] }] }, target: { override: false } }
});
const BURNING_HANDS = incantesimo("Burning Hands", "burning-hands", { range: { units: "self" }, target: { template: { type: "cone", size: "15" } } }, {
  a: { _id: "a", type: "save", damage: { parts: [{ types: ["fire"] }] }, target: { override: false } }
});
const BLESS = incantesimo("Bless", "bless", { school: "enc" }, { a: { _id: "a", type: "utility", target: { override: false } } });
const SCIMITARRA = {
  name: "Scimitar", type: "weapon",
  system: { identifier: "scimitar", type: { value: "martialM", baseItem: "scimitar" }, range: { units: "ft" },
    activities: { a: { _id: "a", type: "attack", attack: { type: { value: "melee" } }, damage: { parts: [{ types: ["slashing"] }] } } } }
};
const ARCO = {
  name: "Shortbow", type: "weapon",
  system: { identifier: "shortbow", type: { value: "simpleR", baseItem: "shortbow" }, range: { units: "ft" },
    activities: { a: { _id: "a", type: "attack", attack: { type: { value: "" } }, damage: { parts: [{ types: ["piercing"] }] } } } }
};
const ARMATURA = { name: "Leather Armor", type: "equipment", system: { identifier: "leather-armor", activities: {} } };

test("la chiave e' tipo piu' identifier, uguale fra SRD 2014 e 2024", () => {
  assert.equal(chiave(datiAzione(MM_2024)), "dnd5e.spell.magic-missile");
  assert.equal(chiave(datiAzione(MM_2014)), chiave(datiAzione(MM_2024)));
  assert.equal(chiave(datiAzione(SCIMITARRA)), "dnd5e.weapon.scimitar");
});

test("senza system.identifier lo slug del nome e' quello di dnd5e", () => {
  assert.equal(identificatore({ name: "Hunter's Mark", system: {} }), "hunters-mark");
  assert.equal(identificatore({ name: "Bénédiction  Divine", system: {} }), "benediction-divine");
  assert.equal(identificatore({ name: "Blindness/Deafness", system: {} }), "blindness-deafness");
  assert.equal(identificatore({ system: {} }), null);
});

test("il getter identifier del documento vivo vince", () => {
  assert.equal(identificatore({ identifier: "dal-getter", name: "Altro", system: {} }), "dal-getter");
});

test("un oggetto senza activity animabili, o di un tipo escluso, non ha chiave", () => {
  assert.equal(chiave(datiAzione(ARMATURA)), null);
  assert.equal(chiave(datiAzione({ name: "Vuoto", type: "spell", system: { identifier: "vuoto", activities: {} } })), null);
  assert.equal(chiave(datiAzione(null)), null);
});

test("documento vivo (Collection e Set) e sorgente danno gli stessi dati", () => {
  const att = MM_2024.system.activities.dnd5eactivity000;
  const vivo = { ...MM_2024, system: { ...MM_2024.system,
    activities: new Map([["x", { ...att, damage: { parts: [{ types: new Set(["force"]) }] } }]]) } };
  assert.deepEqual(datiAzione(vivo), datiAzione(MM_2024));
});

test("i danni, la scuola e la gittata si leggono", () => {
  const d = datiAzione(FIREBALL);
  assert.deepEqual(d.danni, ["fire"]);
  assert.equal(d.scuola, "evo");
  assert.deepEqual(d.sagoma, { tipo: "sphere", size: 20 });
});

test("forma dedotta: sfera e cubo sono area, il cono e' proiettile", () => {
  assert.equal(datiAzione(FIREBALL).formaDedotta, "area");
  assert.equal(datiAzione(THUNDERWAVE).formaDedotta, "area");
  assert.equal(datiAzione(BURNING_HANDS).formaDedotta, "proiettile");
});

test("forma dedotta: mischia bersaglio, distanza proiettile, anche quando il tipo d'attacco e' vuoto", () => {
  assert.equal(datiAzione(SCIMITARRA).formaDedotta, "bersaglio");
  assert.equal(datiAzione(ARCO).attacco, "ranged");
  assert.equal(datiAzione(ARCO).formaDedotta, "proiettile");
});

test("forma dedotta: senza sagoma e senza attacco e' auto; su se stessi lanciatore", () => {
  assert.equal(datiAzione(MM_2024).formaDedotta, "auto");
  assert.equal(datiAzione(BLESS).formaDedotta, "auto");
  const scudo = incantesimo("Shield", "shield", { range: { units: "self" } }, { a: { _id: "a", type: "utility" } });
  assert.equal(datiAzione(scudo).formaDedotta, "lanciatore");
});

test("un'activity con override usa la sua sagoma", () => {
  const it = incantesimo("X", "x", {}, { a: { _id: "a", type: "save", damage: { parts: [{ types: ["cold"] }] },
    target: { override: true, template: { type: "cylinder", size: "10" } } } });
  assert.deepEqual(datiAzione(it).sagoma, { tipo: "cylinder", size: 10 });
});

test("i gruppi della finestra", () => {
  assert.equal(gruppo({ type: "spell", system: { level: 0 } }), "trucchetti");
  assert.equal(gruppo({ type: "spell", system: { level: 3 } }), "incantesimi 3°");
  assert.equal(gruppo({ type: "weapon" }), "armi");
  assert.equal(gruppo({ type: "feat" }), "privilegi");
  assert.equal(gruppo({ type: "feat", _daMostro: true }), "mostri");
  assert.equal(gruppo({ type: "feat", parent: { type: "npc" } }), "mostri");
  assert.equal(gruppo({ type: "consumable" }), "consumabili");
});

test("il diametro dalla sagoma", () => {
  assert.equal(diametro({ tipo: "sphere", size: 20 }), 40);
  assert.equal(diametro({ tipo: "radius", size: 10 }), 20);
  assert.equal(diametro({ tipo: "cube", size: 15 }), 15);
  assert.equal(diametro({ tipo: "cone", size: 15 }), null);
  assert.equal(diametro({ tipo: "sphere", size: null }), null);
  assert.equal(diametro(null), null);
});
