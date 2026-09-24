import { test } from "node:test";
import assert from "node:assert/strict";
import { datiAzione, chiave } from "../module/lib/chiavi.mjs";

const FONTE = "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw";

/* La forma minima di un'azione del system: l'azione conosce il suo item genitore. */
const azione = (extra = {}, carta = {}) => ({
  _id: "tOHoeUFjdPw2TGrw",
  name: "Arcane Barrage",
  type: "damage",
  range: "close",
  target: { type: "any", amount: 1 },
  ...extra,
  item: {
    name: "Book of Illiat",
    type: "domainCard",
    system: { domain: "arcana" },
    _stats: { compendiumSource: FONTE },
    ...carta
  }
});

test("una carta di compendio si identifica con fonte e id dell'azione", () => {
  assert.equal(chiave(datiAzione(azione())), `${FONTE}::tOHoeUFjdPw2TGrw`);
});

test("una carta homebrew ripiega sui nomi", () => {
  const dati = datiAzione(azione({}, { _stats: {} }));
  assert.equal(chiave(dati), "Book of Illiat::Arcane Barrage");
});

test("senza nome ne' fonte non c'e' chiave", () => {
  assert.equal(chiave({ compendiumSource: null, nomeCarta: null, idAzione: null, nomeAzione: null }), null);
});

test("datiAzione riporta cio' che serve alle regole", () => {
  const d = datiAzione(azione());
  assert.equal(d.dominio, "arcana");
  assert.equal(d.tipo, "damage");
  assert.equal(d.range, "close");
  assert.equal(d.targetType, "any");
  assert.equal(d.tipoItem, "domainCard");
});

test("un'azione senza item non esplode", () => {
  const d = datiAzione({ _id: "x", name: "y" });
  assert.equal(d.nomeCarta, null);
  assert.equal(chiave(d), null);
});

/*
 * La regressione che ha morso al tavolo il 9/9/2026: la finestra leggeva la carta dentro il
 * compendio, il gioco leggeva la copia sulla scheda, e le due producevano chiavi diverse.
 * Risultato: 284 righe salvate e nessun effetto che parte. I test di prima non lo prendevano
 * perche' passavano _stats.compendiumSource anche alla carta "di compendio", che nella
 * realta' non ce l'ha.
 */
const FONTE_VERA = "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw";

/* Come si presenta l'originale dentro il compendio: niente compendiumSource, ma un uuid. */
const nelCompendio = {
  _id: "tOHoeUFjdPw2TGrw", name: "Arcane Barrage", type: "damage",
  item: { name: "Book of Illiat", type: "domainCard", system: { domain: "arcana" },
          _stats: {}, uuid: FONTE_VERA }
};

/* Come si presenta la copia su una scheda: compendiumSource valorizzato, nessun uuid utile. */
const sullaScheda = {
  _id: "tOHoeUFjdPw2TGrw", name: "Arcane Barrage", type: "damage",
  item: { name: "Book of Illiat", type: "domainCard", system: { domain: "arcana" },
          _stats: { compendiumSource: FONTE_VERA } }
};

test("la stessa azione da' la stessa chiave dal compendio e dalla scheda", () => {
  assert.equal(chiave(datiAzione(nelCompendio)), chiave(datiAzione(sullaScheda)));
});

test("dal compendio la chiave e' quella della fonte, non il ripiego sui nomi", () => {
  const k = chiave(datiAzione(nelCompendio));
  assert.equal(k, `${FONTE_VERA}::tOHoeUFjdPw2TGrw`);
  assert.ok(!k.includes("Book of Illiat"), "non deve ripiegare sui nomi");
});

test("compendiumSource vince sull'uuid quando ci sono entrambi", () => {
  const misto = { _id: "a1", name: "X",
    item: { name: "C", _stats: { compendiumSource: "Compendium.vera.Item.aaa" }, uuid: "Compendium.altra.Item.bbb" } };
  assert.equal(chiave(datiAzione(misto)), "Compendium.vera.Item.aaa::a1");
});

/*
 * Gli avversari, con i dati veri dell'Archmage visti in Foundry il 24/9/2026: token non
 * collegato su una scena, attore importato da un compendio di mondo che ha gli stessi id di
 * daggerheart.adversaries.
 */
const ARCHMAGE = "FNNt42hhwvuOc4XO";
const attoreInScena = (extra = {}) => ({
  documentName: "Actor", type: "adversary", name: "Archmage", id: "uEGOaK3e0O1lI4eD",
  uuid: "Scene.LPCc1NtTT8mSAJoS.Token.06NCIXX27oY2FK6e.Actor.uEGOaK3e0O1lI4eD",
  system: { tier: 3 },
  _stats: { compendiumSource: `Compendium.world.avversari-con-token.Actor.${ARCHMAGE}` },
  ...extra
});
const fireball = attore => ({
  _id: "dyGb0CQpxamvikPl", name: "Mark Stress", type: "attack", range: "far", target: { type: "any" },
  item: { documentName: "Item", type: "feature", name: "Fireball", id: "r6du8H8vxnW0WDfb", parent: attore }
});

test("la feature di un avversario in scena si identifica con l'attore d'origine", () => {
  const d = datiAzione(fireball(attoreInScena()));
  assert.equal(d.categoria, "avversario");
  assert.equal(chiave(d), `Actor.${ARCHMAGE}.Item.r6du8H8vxnW0WDfb::dyGb0CQpxamvikPl`);
  assert.equal(d.nomeCarta, "Archmage · Fireball");
  assert.equal(d.dominio, "avversari T3");
});

test("l'attacco base ha per item l'attore stesso", () => {
  const attore = attoreInScena();
  const d = datiAzione({ _id: "qHEFFbkvLvbm9VmI", name: "Archmage's Greatstaff", type: "attack", range: "far", item: attore });
  assert.equal(chiave(d), `Actor.${ARCHMAGE}::qHEFFbkvLvbm9VmI`);
  assert.equal(d.tipoItem, "attack");
});

test("la chiave non dipende dal compendio da cui e' stato importato l'avversario", () => {
  const dalSystem = attoreInScena({ _stats: { compendiumSource: `Compendium.daggerheart.adversaries.Actor.${ARCHMAGE}` } });
  assert.equal(chiave(datiAzione(fireball(dalSystem))), chiave(datiAzione(fireball(attoreInScena()))));
});

test("un avversario homebrew senza fonte usa il proprio id", () => {
  const d = datiAzione(fireball(attoreInScena({ _stats: {} })));
  assert.equal(chiave(d), "Actor.uEGOaK3e0O1lI4eD.Item.r6du8H8vxnW0WDfb::dyGb0CQpxamvikPl");
});

test("la feature di un personaggio non e' ne' carta ne' avversario", () => {
  const pg = { documentName: "Actor", type: "character", name: "Eroe" };
  const d = datiAzione({ _id: "a", name: "X", item: { documentName: "Item", type: "feature", name: "F", parent: pg } });
  assert.equal(d.categoria, null);
});
