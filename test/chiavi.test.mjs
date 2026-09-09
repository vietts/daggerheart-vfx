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
