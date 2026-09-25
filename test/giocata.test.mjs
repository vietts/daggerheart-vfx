import { test } from "node:test";
import assert from "node:assert/strict";
import { preparaGiocata, haEffetto } from "../module/lib/giocata.mjs";
import { creaApi } from "../module/api.mjs";
import { adattatorePer } from "../module/lib/sistemi/index.mjs";

const dh = adattatorePer("daggerheart");
const dnd = adattatorePer("dnd5e");

const FONTE = "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw";
const CARTA = { name: "Book of Illiat", type: "domainCard", uuid: FONTE, _stats: { compendiumSource: FONTE },
  system: { domain: "arcana", actions: {
    a1: { _id: "a1", name: "Arcane Barrage", type: "damage", range: "close", target: { type: "any" } },
    a2: { _id: "a2", name: "Telepathy", type: "effect", range: null, target: { type: "any" } } } } };
const MM = { name: "Magic Missile", type: "spell", system: { identifier: "magic-missile", level: 1, school: "evo",
  range: { units: "ft" }, target: { template: { type: "" } },
  activities: { x: { _id: "x", type: "damage", damage: { parts: [{ types: ["force"] }] } } } } };

const MAPPA = {
  [`${FONTE}::a2`]: { file: "jb2a.telepatia", forma: "lanciatore" },
  "dnd5e.spell.magic-missile": { file: "jb2a.magic_missile.purple", forma: "proiettile" }
};

test("D&D: un descrittore dal token d'origine ai bersagli, tutti colpiti", () => {
  assert.deepEqual(preparaGiocata({ adattatore: dnd, mappa: MAPPA, item: MM, origine: "pg", bersagli: ["g1", "g2"] }), {
    file: "jb2a.magic_missile.purple", forma: "proiettile", origine: "pg", bersagli: ["g1", "g2"]
  });
});

test("D&D: azioneId si ignora", () => {
  const d = preparaGiocata({ adattatore: dnd, mappa: MAPPA, item: MM, azioneId: "qualunque", origine: "pg", bersagli: ["g1"] });
  assert.equal(d.file, "jb2a.magic_missile.purple");
  assert.equal(haEffetto({ adattatore: dnd, mappa: MAPPA, item: MM, azioneId: "qualunque" }), true);
});

test("Daggerheart: con azioneId quella azione; senza, la prima che ha una riga", () => {
  assert.equal(preparaGiocata({ adattatore: dh, mappa: MAPPA, item: CARTA, origine: "pg", bersagli: [] }).file, "jb2a.telepatia");
  assert.equal(preparaGiocata({ adattatore: dh, mappa: MAPPA, item: CARTA, azioneId: "a1", origine: "pg", bersagli: [] }), null);
  assert.equal(preparaGiocata({ adattatore: dh, mappa: MAPPA, item: CARTA, azioneId: "inesistente", origine: "pg", bersagli: [] }), null);
});

test("haEffetto: c'e' una riga con un file, o no", () => {
  assert.equal(haEffetto({ adattatore: dh, mappa: MAPPA, item: CARTA }), true);
  assert.equal(haEffetto({ adattatore: dh, mappa: MAPPA, item: CARTA, azioneId: "a1" }), false);
  assert.equal(haEffetto({ adattatore: dnd, mappa: {}, item: MM }), false);
  assert.equal(haEffetto({ adattatore: null, mappa: MAPPA, item: MM }), false);
  assert.equal(haEffetto({ adattatore: dnd, mappa: MAPPA, item: null }), false);
});

test("niente origine, niente giocata", () => {
  assert.equal(preparaGiocata({ adattatore: dnd, mappa: MAPPA, item: MM, origine: null, bersagli: ["g1"] }), null);
});

/* creaApi e' il guscio: lo si prova con un canvas finto e una suona finta. */
test("gioca: senza canvas pronto non chiama suona e risponde false", async () => {
  let chiamate = 0;
  const api = creaApi({ adattatore: dnd, mappa: () => MAPPA, attivo: () => true, suona: async () => (chiamate++, true) });
  globalThis.canvas = { ready: false };
  assert.equal(await api.gioca({ item: MM, origine: "pg", bersagli: ["g1"] }), false);
  globalThis.canvas = { ready: true };
  assert.equal(await api.gioca({ item: MM, origine: "pg", bersagli: ["g1"] }), true);
  assert.equal(chiamate, 1);
  delete globalThis.canvas;
});

test("gioca e haEffetto con il modulo spento, o senza adattatore: false", async () => {
  globalThis.canvas = { ready: true };
  const spento = creaApi({ adattatore: dnd, mappa: () => MAPPA, attivo: () => false, suona: async () => true });
  assert.equal(await spento.gioca({ item: MM, origine: "pg", bersagli: ["g1"] }), false);
  assert.equal(spento.haEffetto(MM), false);
  const senza = creaApi({ adattatore: null, mappa: () => MAPPA, attivo: () => true, suona: async () => true });
  assert.equal(await senza.gioca({ item: MM, origine: "pg", bersagli: ["g1"] }), false);
  delete globalThis.canvas;
});

test("gioca non solleva mai: un errore diventa false", async () => {
  globalThis.canvas = { ready: true };
  const api = creaApi({ adattatore: dnd, mappa: () => { throw new Error("rotto"); }, attivo: () => true, suona: async () => true });
  const errore = console.error;
  console.error = () => {};
  try {
    assert.equal(await api.gioca({ item: MM, origine: "pg", bersagli: [] }), false);
    assert.equal(api.haEffetto(MM), false);
  } finally {
    console.error = errore;
    delete globalThis.canvas;
  }
});
