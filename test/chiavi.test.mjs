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
