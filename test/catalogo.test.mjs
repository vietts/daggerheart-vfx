import { test } from "node:test";
import assert from "node:assert/strict";
import { azioniDiCarta, azioniDiAvversario, righeDaCarte, precompila, righeCambiate, rigaValida, righeImportabili } from "../module/lib/catalogo.mjs";
import { ASSEGNAZIONI } from "../module/lib/assegnazioni.mjs";

const F = "Compendium.daggerheart.domains.Item.AAA";
const carta = (nome, dominio, azioni) => ({
  name: nome, type: "domainCard",
  system: { domain: dominio, actions: azioni },
  _stats: { compendiumSource: F }
});
const carte = [
  carta("Book of Illiat", "arcana", {
    a1: { _id: "a1", name: "Arcane Barrage", type: "damage", range: "close", target: { type: "any" } },
    a2: { _id: "a2", name: "Telepathy", type: "effect", range: null, target: { type: "any" } }
  }),
  carta("Mending Touch", "splendor", {
    b1: { _id: "b1", name: "Heal Two", type: "healing", range: null, target: { type: "any" } }
  })
];

test("una riga per ogni azione di ogni carta", () => {
  const righe = righeDaCarte(carte);
  assert.equal(righe.length, 3);
  assert.deepEqual(righe.map(r => r.nomeAzione), ["Arcane Barrage", "Telepathy", "Heal Two"]);
  assert.equal(righe[0].chiave, `${F}::a1`);
  assert.equal(righe[0].dominio, "arcana");
});

test("una riga nasce vuota se la mappa non la conosce", () => {
  const righe = righeDaCarte(carte, {});
  assert.equal(righe[0].file, null);
  assert.equal(righe[0].forma, null);
});

test("una riga si riempie da quello che c'e' nella mappa", () => {
  const mappa = { [`${F}::a1`]: { file: "jb2a.scelto", forma: "lanciatore" } };
  const righe = righeDaCarte(carte, mappa);
  assert.equal(righe[0].file, "jb2a.scelto");
  assert.equal(righe[0].forma, "lanciatore");
});

test("precompila riempie le vuote usando le regole", () => {
  const nuova = precompila(righeDaCarte(carte, {}), {});
  assert.equal(nuova[`${F}::a1`].file, "jb2a.explosion.02.blue");   // arcana + damage
  assert.equal(nuova[`${F}::a1`].forma, "proiettile");              // damage + range close
  assert.equal(nuova[`${F}::a2`].forma, "auto");                    // effect senza range
  assert.equal(nuova[`${F}::b1`].file, "jb2a.healing_generic.400px.blue"); // splendor + healing
});

test("precompila non tocca cio' che hai gia' scelto", () => {
  const mappa = { [`${F}::a1`]: { file: "jb2a.mio", forma: "lanciatore" } };
  const nuova = precompila(righeDaCarte(carte, mappa), mappa);
  assert.deepEqual(nuova[`${F}::a1`], { file: "jb2a.mio", forma: "lanciatore" });
});

/* Una carta vera del compendio (Book of Illiat, Arcane Barrage): la tabella la conosce. */
const VERA = "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw";
const ID_VERO = "tOHoeUFjdPw2TGrw";
const cartaVera = [{ ...carta("Book of Illiat", "codex", {
  [ID_VERO]: { _id: ID_VERO, name: "Arcane Barrage", type: "damage", range: "close", target: { type: "any" } }
}), _stats: { compendiumSource: VERA } }];
const K = `${VERA}::${ID_VERO}`;

test("precompila preferisce la scelta per azione alla regola del dominio", () => {
  const nuova = precompila(righeDaCarte(cartaVera, {}), {});
  assert.deepEqual(nuova[K], ASSEGNAZIONI[K]);
  assert.notEqual(nuova[K].file, "jb2a.explosion.03.blueyellow");   // codex + damage
});

test("precompila aggiorna una riga rimasta alla vecchia regola", () => {
  const mappa = { [K]: { file: "jb2a.explosion.03.blueyellow", forma: "proiettile" } };
  const nuova = precompila(righeDaCarte(cartaVera, mappa), mappa);
  assert.deepEqual(nuova[K], ASSEGNAZIONI[K]);
  assert.equal(righeCambiate(mappa, nuova), 1);
});

test("precompila non tocca una scelta a mano anche se la tabella la conosce", () => {
  const mappa = { [K]: { file: "jb2a.mio", forma: "lanciatore" } };
  const nuova = precompila(righeDaCarte(cartaVera, mappa), mappa);
  assert.deepEqual(nuova[K], { file: "jb2a.mio", forma: "lanciatore" });
  assert.equal(righeCambiate(mappa, nuova), 0);
});

test("una coppia dominio+tipo senza regola resta vuota", () => {
  const strana = [carta("X", "dominio-inventato", { z: { _id: "z", name: "Z", type: "attack", target: {} } })];
  const nuova = precompila(righeDaCarte(strana, {}), {});
  assert.equal(Object.keys(nuova).length, 0);
});

/*
 * azioniDiCarta e' l'unico punto in cui il modulo legge system.actions, e i due cammini che
 * lo usano vedono strutture diverse: oggetti sorgente nella finestra, documenti vivi nel
 * preload. Questi test fissano le forme che deve reggere, perche' quando non le regge il
 * sintomo e' il silenzio: zero effetti precaricati e nessun errore.
 */
test("le azioni si leggono da un oggetto semplice", () => {
  const dati = azioniDiCarta(carte[0]);
  assert.equal(dati.length, 2);
  assert.deepEqual(dati.map(d => d.nomeAzione), ["Arcane Barrage", "Telepathy"]);
  assert.equal(dati[0].dominio, "arcana");
  assert.equal(dati[0].range, "close");
  assert.equal(dati[0].targetType, "any");
});

test("le azioni si leggono anche da una Collection e da un array", () => {
  const voci = Object.values(carte[0].system.actions);
  const collezione = { ...carte[0], system: { ...carte[0].system, actions: new Map(voci.map(a => [a._id, a])) } };
  const array = { ...carte[0], system: { ...carte[0].system, actions: voci } };
  const attese = azioniDiCarta(carte[0]);
  assert.deepEqual(azioniDiCarta(collezione), attese);
  assert.deepEqual(azioniDiCarta(array), attese);
});

test("i campi si leggono uno per uno, cosi' i getter di prototipo non si perdono", () => {
  class Azione {
    constructor(id) { this._id = id; }
    get name() { return "Arcane Barrage"; }
    get type() { return "damage"; }
    get range() { return "close"; }
    get target() { return { type: "any" }; }
  }
  const viva = { ...carte[0], system: { ...carte[0].system, actions: { a1: new Azione("a1") } } };
  const [dati] = azioniDiCarta(viva);
  assert.equal(dati.nomeAzione, "Arcane Barrage");
  assert.equal(dati.tipo, "damage");
  assert.equal(dati.range, "close");
  assert.equal(dati.targetType, "any");
});

test("una carta senza azioni, o con azioni di forma impensata, da' una lista vuota", () => {
  assert.deepEqual(azioniDiCarta({ system: {} }), []);
  assert.deepEqual(azioniDiCarta({ system: { actions: null } }), []);
  assert.deepEqual(azioniDiCarta({ system: { actions: "niente" } }), []);
  assert.deepEqual(azioniDiCarta(null), []);
  assert.deepEqual(azioniDiCarta({ system: { actions: { a: null, b: 42 } } }), []);
});

/* La mappa importata e' l'unico ingresso non fidato del modulo: qui si guarda il contenuto. */
test("una riga importata vale se ha un file non vuoto e una forma nota, o nessuna forma", () => {
  assert.equal(rigaValida({ file: "jb2a.x", forma: "proiettile" }), true);
  assert.equal(rigaValida({ file: "jb2a.x" }), true);
  assert.equal(rigaValida({ file: "jb2a.x", forma: null }), true);
});

test("una riga importata non vale se il file manca, non e' una stringa o e' vuoto", () => {
  assert.equal(rigaValida({ file: 42, forma: "auto" }), false);
  assert.equal(rigaValida({ forma: "auto" }), false);
  assert.equal(rigaValida({ file: "   " }), false);
  assert.equal(rigaValida("stringa"), false);
  assert.equal(rigaValida(null), false);
  assert.equal(rigaValida(["jb2a.x"]), false);
});

test("una forma inventata non entra: diventerebbe un lanciatore in silenzio", () => {
  assert.equal(rigaValida({ file: "jb2a.x", forma: "pippo" }), false);
});

test("righeImportabili tiene le buone e dice quante ne ha scartate", () => {
  const { mappa, scartate } = righeImportabili({
    buona: { file: "jb2a.x", forma: "bersaglio" },
    senzaForma: { file: "jb2a.y" },
    fileNumero: { file: 42 },
    formaInventata: { file: "jb2a.z", forma: "pippo" },
    nulla: null
  });
  assert.deepEqual(Object.keys(mappa).sort(), ["buona", "senzaForma"]);
  assert.equal(scartate, 3);
});

test("una mappa tutta malformata non lascia niente: chi chiama non deve scrivere", () => {
  assert.deepEqual(righeImportabili({ a: null, b: 1 }), { mappa: {}, scartate: 2 });
  assert.deepEqual(righeImportabili({}), { mappa: {}, scartate: 0 });
});

/* L'Archmage come lo vede la finestra: un oggetto sorgente (toObject) dentro un compendio. */
const archmage = {
  _id: "FNNt42hhwvuOc4XO", name: "Archmage", type: "adversary", system: {
    tier: 3,
    attack: { _id: "qHEFFbkvLvbm9VmI", name: "Archmage's Greatstaff", type: "attack", range: "far", target: { type: "any" } }
  },
  _stats: { compendiumSource: null },
  items: [
    { _id: "ptauqaFcMVrpE1wi", name: "Relentless (3)", type: "feature", system: { actions: {} } },
    { _id: "r6du8H8vxnW0WDfb", name: "Fireball", type: "feature", system: { actions: {
      dyGb0CQpxamvikPl: { _id: "dyGb0CQpxamvikPl", name: "Mark Stress", type: "attack", range: "far", target: { type: "any" } }
    } } }
  ]
};

test("un avversario da' l'attacco base e le azioni delle feature, non le feature senza azioni", () => {
  const righe = righeDaCarte([archmage]);
  assert.deepEqual(righe.map(r => r.chiave), [
    "Actor.FNNt42hhwvuOc4XO::qHEFFbkvLvbm9VmI",
    "Actor.FNNt42hhwvuOc4XO.Item.r6du8H8vxnW0WDfb::dyGb0CQpxamvikPl"
  ]);
  assert.ok(righe.every(r => r.categoria === "avversario"));
});

test("lo stesso avversario da due compendi da' una riga sola", () => {
  const copia = { ...archmage, _stats: { compendiumSource: "Compendium.daggerheart.adversaries.Actor.FNNt42hhwvuOc4XO" } };
  assert.equal(righeDaCarte([archmage, copia]).length, 2);
});

test("le feature dell'attore vivo arrivano anche da una Collection", () => {
  const vivo = { ...archmage, items: new Map(archmage.items.map(i => [i._id, i])).values() };
  assert.equal(azioniDiAvversario(vivo).length, 2);
});

test("un avversario fuori tabella resta vuoto: non ha regola di dominio", () => {
  const homebrew = { ...archmage, _id: "homebrew00000000" };
  assert.equal(Object.keys(precompila(righeDaCarte([homebrew]), {})).length, 0);
});
