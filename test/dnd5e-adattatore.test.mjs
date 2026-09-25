import { test } from "node:test";
import assert from "node:assert/strict";
import { adattatorePer } from "../module/lib/sistemi/index.mjs";
import { puntoArea } from "../module/lib/sistemi/dnd5e/contesto.mjs";
import { ASSEGNAZIONI_DND } from "../module/lib/sistemi/dnd5e/assegnazioni.mjs";
import { DANNI, ARMI } from "../module/lib/sistemi/dnd5e/regole.mjs";

const a = adattatorePer("dnd5e");

const FIREBALL = { name: "Fireball", type: "spell",
  system: { identifier: "fireball", level: 3, school: "evo", range: { units: "ft" }, target: { template: { type: "sphere", size: "20" } },
    activities: { x: { _id: "x", type: "save", damage: { parts: [{ types: ["fire"] }] } } } } };
const FUOCO_IGNOTO = { name: "Fiammata Strana", type: "spell",
  system: { level: 2, school: "evo", range: { units: "ft" }, target: { template: { type: "" } },
    activities: { x: { _id: "x", type: "attack", attack: { type: { value: "ranged" } }, damage: { parts: [{ types: ["fire"] }] } } } } };
const SCIMITARRA = { name: "Scimitar", type: "weapon",
  system: { identifier: "scimitar", type: { value: "martialM", baseItem: "scimitar" },
    activities: { x: { _id: "x", type: "attack", attack: { type: { value: "melee" } }, damage: { parts: [{ types: ["slashing"] }] } } } } };
const ARMATURA = { name: "Leather", type: "equipment", system: { identifier: "leather", activities: {} } };

test("azioniDi: un dato per oggetto animabile, niente per gli altri", () => {
  assert.equal(a.azioniDi(FIREBALL).length, 1);
  assert.deepEqual(a.azioniDi(ARMATURA), []);
});

test("azioniDiAttore: gli oggetti animabili dell'attore", () => {
  assert.equal(a.azioniDiAttore({ items: [FIREBALL, SCIMITARRA, ARMATURA] }).length, 2);
  assert.equal(a.azioniDiAttore({ items: new Map([["f", FIREBALL]]).values() }).length, 1);
});

test("righe: la stessa scimitarra da due fonti e' una riga sola, nel gruppo armi", () => {
  const dalMostro = { ...SCIMITARRA, _daMostro: true };
  const righe = a.righe([SCIMITARRA, dalMostro, FIREBALL], {});
  assert.deepEqual(righe.map(r => r.chiave), ["dnd5e.weapon.scimitar", "dnd5e.spell.fireball"]);
  assert.equal(righe[0].dominio, "armi");
  assert.equal(righe[1].dominio, "incantesimi 3°");
});

test("precompila: tabella, poi regola di danno, poi arma", () => {
  const nuova = a.precompila(a.righe([FIREBALL, FUOCO_IGNOTO, SCIMITARRA], {}), {});
  assert.deepEqual(nuova["dnd5e.spell.fireball"], ASSEGNAZIONI_DND["dnd5e.spell.fireball"]);
  assert.deepEqual(nuova["dnd5e.spell.fiammata-strana"], { file: DANNI.fire.proiettile, forma: "proiettile" });
  assert.deepEqual(nuova["dnd5e.weapon.scimitar"], { file: ARMI.scimitar.mischia, forma: "bersaglio" });
});

test("precompila non tocca una scelta fatta a mano", () => {
  const mappa = { "dnd5e.spell.fireball": { file: "jb2a.mio", forma: "bersaglio" } };
  assert.deepEqual(a.precompila(a.righe([FIREBALL], mappa), mappa)["dnd5e.spell.fireball"], { file: "jb2a.mio", forma: "bersaglio" });
});

test("daHook: i bersagli dell'utente contano tutti come colpiti, e l'area viene dalla sagoma", () => {
  const attore = { id: "pg" };
  const activity = { item: { ...FIREBALL, actor: attore } };
  const results = { templates: [{ x: 300, y: 400 }] };
  const ev = a.daHook([activity, {}, results], { bersagliUtente: ["t1", "t2"] });
  assert.equal(a.chiave(ev.dati), "dnd5e.spell.fireball");
  assert.equal(ev.attore, attore);
  assert.deepEqual(ev.bersagli, [{ id: "t1", colpito: true }, { id: "t2", colpito: true }]);
  assert.equal(ev.haTiro, false);
  assert.deepEqual(ev.area, { diametro: 40, unita: "ft", punto: { x: 300, y: 400 }, centro: "bersagli" });
});

test("daHook ignora cio' che non si anima", () => {
  assert.equal(a.daHook([{ item: ARMATURA }, {}, {}], { bersagliUtente: [] }), null);
  assert.equal(a.daHook([null, {}, {}], { bersagliUtente: [] }), null);
});

test("puntoArea: template, region con una forma, oppure niente", () => {
  assert.deepEqual(puntoArea({ templates: [{ document: { x: 1, y: 2 } }] }), { x: 1, y: 2 });
  assert.deepEqual(puntoArea({ regions: [{ shapes: [{ x: 5, y: 6 }] }] }), { x: 5, y: 6 });
  assert.equal(puntoArea({ templates: [] }), null);
  assert.equal(puntoArea(undefined), null);
});

test("puntoArea: il centro del placeable, se c'e', vince su tutto il resto", () => {
  assert.deepEqual(
    puntoArea({ templates: [{ document: { x: 1, y: 1 }, object: { center: { x: 15, y: 25 } } }] }),
    { x: 15, y: 25 });
  assert.deepEqual(
    puntoArea({ regions: [{ x: 1, y: 1, object: { center: { x: 30, y: 40 } } }] }),
    { x: 30, y: 40 });
});

test("puntoArea: una forma rettangolare si centra con la meta' di larghezza e altezza", () => {
  assert.deepEqual(
    puntoArea({ regions: [{ shapes: [{ type: "rectangle", x: 0, y: 0, width: 100, height: 50 }] }] }),
    { x: 50, y: 25 });
  assert.deepEqual(
    puntoArea({ regions: [{ shapes: [{ x: 10, y: 10, width: 20, height: 40 }] }] }),
    { x: 20, y: 30 });
});

test("area: diametro dalla sagoma, null per un cono", () => {
  const cono = { ...FIREBALL, system: { ...FIREBALL.system, target: { template: { type: "cone", size: "15" } } } };
  assert.deepEqual(a.area(a.azioniDi(FIREBALL)[0], null), { diametro: 40, unita: "ft", punto: null, centro: "bersagli" });
  assert.deepEqual(a.area(a.azioniDi(cono)[0], { x: 1, y: 1 }), { diametro: null, unita: "ft", punto: { x: 1, y: 1 }, centro: "bersagli" });
});

test("area: un'emanazione su se stessi ha centro lanciatore, il resto centro bersagli", () => {
  const scudo = { name: "Shield Aura", type: "spell",
    system: { identifier: "shield-aura", level: 1, school: "abj", range: { units: "self" },
      target: { template: { type: "radius", size: "10" } },
      activities: { x: { _id: "x", type: "utility" } } } };
  assert.equal(a.area(a.azioniDi(scudo)[0], null).centro, "lanciatore");
  assert.equal(a.area(a.azioniDi(FIREBALL)[0], null).centro, "bersagli");
});
