# daggerheart-vfx Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Un modulo Foundry che gioca un effetto visivo quando un personaggio usa un'azione di una carta di dominio Daggerheart.

**Architecture:** Un hook su `daggerheart.postUseAction` legge una mappa esplicita `chiave azione → {file, forma}`, produce un *descrittore* con una funzione pura, e solo all'ultimo passo lo traduce in una `Sequence` di Sequencer. Tutta la catena decisionale sta in `module/lib/` senza toccare globali di Foundry, quindi si prova con `node --test`. Una finestra ApplicationV2 compila la mappa, precompilandola da 37 regole `dominio+tipoAzione`.

**Tech Stack:** JavaScript ES modules, Foundry VTT v13/v14, system `daggerheart` 2.9.3, moduli `sequencer` 4.2.3 e `JB2A_DnD5e` 0.9.3, `node --test`.

**Spec:** `docs/superpowers/specs/2026-09-08-daggerheart-vfx-design.md`

## Global Constraints

- Module id: `daggerheart-vfx`. Ovunque compaia, viene da `MODULE_ID`, mai scritto a mano.
- Compatibilità dichiarata: `minimum: "13"`, `verified: "14"`.
- Dipendenze obbligatorie in `relationships.requires`: `sequencer` e `JB2A_DnD5e`.
- Tutto ciò che sta in `module/lib/` è **puro**: nessun `game`, `canvas`, `ui`, `Hooks`, `Sequence`. Se una funzione ne ha bisogno, il valore le viene passato. È questo che rende i test eseguibili fuori da Foundry.
- L'handler dell'hook non solleva mai: corpo dentro `try/catch`, errore loggato con prefisso `[daggerheart-vfx]`, e si tace. `Hooks.call` gira **dentro** il workflow del system: un'eccezione lì ferma la giocata.
- Le quattro forme sono `proiettile`, `bersaglio`, `lanciatore`, `auto`. `auto` si risolve dentro `decisione.mjs`: il descrittore che esce porta sempre una delle tre concrete.
- Commenti e nomi in italiano, senza lettere accentate nel codice (`perche'`), come in `arte-token`.
- Il system e i moduli si leggono **dalla VPS** (`ssh root@IL-TUO-SERVER`, `/opt/foundry/data/Data/`). La copia sul Mac è ferma a daggerheart 2.6.5 e dà numeri sbagliati.

---

## Struttura dei file

| file | responsabilità |
|---|---|
| `module/module.json` | manifest: id, compatibilità, dipendenze, lingue |
| `module/daggerheart-vfx.mjs` | entry point: settings, hook, preload, apertura finestra |
| `module/lib/costanti.mjs` | `MODULE_ID`, `FORME`, nomi dei settings |
| `module/lib/chiavi.mjs` | identità di un'azione: estrazione dati + chiave della mappa |
| `module/lib/regole.mjs` | le 37 regole `dominio+tipo → file`, e la forma dedotta dall'azione |
| `module/lib/contesto.mjs` | il `config` di Daggerheart → forma minima e neutra |
| `module/lib/decisione.mjs` | contesto + mappa → descrittore, o `null` |
| `module/lib/scena.mjs` | descrittore con token risolti → `Sequence` |
| `module/lib/catalogo.mjs` | elenco delle azioni di un compendio → righe per la finestra |
| `module/apps/configurazione.mjs` | la finestra ApplicationV2 |
| `module/apps/configurazione.hbs` | il template |
| `module/lang/it.json`, `en.json` | stringhe |
| `test/*.test.mjs` | `node --test` |
| `deploy.sh` | rsync sulla VPS + chown 1000:1000 |

---

### Task 1: Impalcatura e manifest

**Files:**
- Create: `package.json`
- Create: `module/module.json`
- Create: `module/lib/costanti.mjs`
- Create: `module/lang/it.json`, `module/lang/en.json`
- Create: `deploy.sh`
- Test: `test/manifest.test.mjs`

**Interfaces:**
- Consumes: niente.
- Produces: `MODULE_ID: string`, `FORME: readonly string[]`, `SETTING_MAPPA: string`, `SETTING_ATTIVO: string` da `module/lib/costanti.mjs`.

- [ ] **Step 1: Scrivi il test che fallisce**

`test/manifest.test.mjs`:

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { MODULE_ID, FORME } from "../module/lib/costanti.mjs";

const manifest = JSON.parse(
  readFileSync(fileURLToPath(new URL("../module/module.json", import.meta.url)), "utf8")
);

test("l'id del manifest coincide con MODULE_ID", () => {
  assert.equal(manifest.id, MODULE_ID);
});

test("l'entry point dichiarato esiste nel manifest", () => {
  assert.deepEqual(manifest.esmodules, ["daggerheart-vfx.mjs"]);
});

test("le dipendenze obbligatorie sono dichiarate", () => {
  const richiesti = manifest.relationships.requires.map(r => r.id).sort();
  assert.deepEqual(richiesti, ["JB2A_DnD5e", "sequencer"]);
});

test("la compatibilita' e' 13-14", () => {
  assert.equal(manifest.compatibility.minimum, "13");
  assert.equal(manifest.compatibility.verified, "14");
});

test("le quattro forme sono quelle previste", () => {
  assert.deepEqual([...FORME].sort(), ["auto", "bersaglio", "lanciatore", "proiettile"]);
});
```

- [ ] **Step 2: Esegui il test e verifica che fallisca**

Run: `npm test`
Expected: FAIL — `Cannot find module '../module/lib/costanti.mjs'`

- [ ] **Step 3: Scrivi i file**

`package.json`:

```json
{
  "name": "daggerheart-vfx",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "node --test"
  }
}
```

`module/lib/costanti.mjs`:

```js
/*
 * Le costanti che tutto il resto condivide. Stanno in un file loro perche' il manifest e i
 * test devono poterle leggere senza tirarsi dietro logica.
 */

export const MODULE_ID = "daggerheart-vfx";

/* Le quattro geometrie di una giocata. `auto` non arriva mai fino a scena.mjs: la risolve
   decisione.mjs guardando i bersagli veri, perche' 163 azioni su 284 non hanno un `range`
   da cui dedurla in fase di configurazione. */
export const FORME = Object.freeze(["proiettile", "bersaglio", "lanciatore", "auto"]);

export const SETTING_MAPPA = "mappa";
export const SETTING_ATTIVO = "attivo";
```

`module/module.json`:

```json
{
  "id": "daggerheart-vfx",
  "title": "Daggerheart VFX",
  "description": "Effetti visivi per le carte di dominio di Daggerheart.",
  "version": "0.1.0",
  "compatibility": { "minimum": "13", "verified": "14" },
  "authors": [{ "name": "Francesco Nguyen" }],
  "esmodules": ["daggerheart-vfx.mjs"],
  "languages": [
    { "lang": "it", "name": "Italiano", "path": "lang/it.json" },
    { "lang": "en", "name": "English", "path": "lang/en.json" }
  ],
  "relationships": {
    "systems": [
      { "id": "daggerheart", "type": "system", "compatibility": { "minimum": "2.9.0" } }
    ],
    "requires": [
      { "id": "sequencer", "type": "module" },
      { "id": "JB2A_DnD5e", "type": "module" }
    ]
  }
}
```

`module/lang/it.json`:

```json
{
  "DHVFX.settings.attivo.name": "Effetti visivi attivi",
  "DHVFX.settings.attivo.hint": "Quando un personaggio usa un'azione di una carta di dominio, gioca l'effetto assegnato."
}
```

`module/lang/en.json`:

```json
{
  "DHVFX.settings.attivo.name": "Visual effects enabled",
  "DHVFX.settings.attivo.hint": "When a character uses a domain card action, play the assigned effect."
}
```

`deploy.sh`:

```bash
#!/usr/bin/env bash
# Copia il modulo sul VPS e sistema i permessi. Il container gira come uid 1000.
set -euo pipefail

SERVER="root@IL-TUO-SERVER"
DEST="/opt/foundry/data/Data/modules/daggerheart-vfx"
HERE="$(cd "$(dirname "$0")" && pwd)"

rsync -av --delete -e ssh "$HERE/module/" "$SERVER:$DEST/"
ssh "$SERVER" "chown -R 1000:1000 $DEST && ls -la $DEST"

echo
echo "Copiato. Alla prima installazione serve un riavvio perche' compaia in Manage Modules:"
echo "  ssh $SERVER 'docker stop foundry && sleep 5 && docker start foundry'"
echo "Non usare 'docker restart': lascia un lock e il server sembra morto per 320s."
```

- [ ] **Step 4: Esegui i test e verifica che passino**

Run: `chmod +x deploy.sh && npm test`
Expected: PASS, 5 test

- [ ] **Step 5: Commit**

```bash
git add package.json module deploy.sh test
git commit -m "feat: impalcatura del modulo, manifest e costanti"
```

---

### Task 2: L'identità di un'azione

**Files:**
- Create: `module/lib/chiavi.mjs`
- Test: `test/chiavi.test.mjs`

**Interfaces:**
- Consumes: `MODULE_ID` da `costanti.mjs`.
- Produces:
  - `datiAzione(action) -> {compendiumSource, nomeCarta, idAzione, nomeAzione, dominio, tipo, range, targetType, tipoItem}` — legge solo l'oggetto ricevuto, nessun globale.
  - `chiave(dati) -> string | null`

- [ ] **Step 1: Scrivi il test che fallisce**

`test/chiavi.test.mjs`:

```js
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
```

- [ ] **Step 2: Esegui il test e verifica che fallisca**

Run: `node --test test/chiavi.test.mjs`
Expected: FAIL — `Cannot find module '../module/lib/chiavi.mjs'`

- [ ] **Step 3: Scrivi l'implementazione minima**

`module/lib/chiavi.mjs`:

```js
/*
 * Come si chiama un'azione, per una mappa che deve sopravvivere ai rinomini.
 *
 * Il fatto che regge tutto, verificato sui dati veri: quando una carta passa dal compendio
 * alla scheda di un personaggio, il documento e' una copia con un _id nuovo, ma gli id
 * delle azioni dentro system.actions restano identici, e la copia porta
 * _stats.compendiumSource. Quindi la coppia (fonte, id azione) e' stabile, e non dipende dal
 * nome — che invece cambia con la lingua e con l'homebrew.
 */

export function datiAzione(action) {
  const carta = action?.item ?? null;
  return {
    compendiumSource: carta?._stats?.compendiumSource ?? null,
    nomeCarta: carta?.name ?? null,
    idAzione: action?._id ?? null,
    nomeAzione: action?.name ?? null,
    dominio: carta?.system?.domain ?? null,
    tipo: action?.type ?? null,
    range: action?.range ?? null,
    targetType: action?.target?.type ?? null,
    tipoItem: carta?.type ?? null
  };
}

/*
 * Il ripiego sui nomi serve alle carte homebrew, che non vengono da un compendio e quindi
 * non hanno una fonte. E' piu' fragile per costruzione: se rinomini la carta, perdi
 * l'assegnazione. E' un caso raro e dichiarato, non il caso normale.
 */
export function chiave({ compendiumSource, nomeCarta, idAzione, nomeAzione }) {
  if (compendiumSource && idAzione) return `${compendiumSource}::${idAzione}`;
  if (nomeCarta && nomeAzione) return `${nomeCarta}::${nomeAzione}`;
  return null;
}
```

- [ ] **Step 4: Esegui i test e verifica che passino**

Run: `npm test`
Expected: PASS, 10 test

- [ ] **Step 5: Commit**

```bash
git add module/lib/chiavi.mjs test/chiavi.test.mjs
git commit -m "feat: identita' stabile di un'azione di carta di dominio"
```

---

### Task 3: Le 37 regole e la forma

**Files:**
- Create: `module/lib/regole.mjs`
- Test: `test/regole.test.mjs`

**Interfaces:**
- Consumes: niente.
- Produces:
  - `REGOLE: Readonly<Record<string, string>>` — chiave `"<dominio>+<tipo>"`, valore chiave Sequencer.
  - `fileDaRegola(dominio, tipo) -> string | null`
  - `formaDaAzione({tipo, range, targetType}) -> "proiettile" | "bersaglio" | "lanciatore" | "auto"`

- [ ] **Step 1: Scrivi il test che fallisce**

`test/regole.test.mjs`:

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { REGOLE, fileDaRegola, formaDaAzione } from "../module/lib/regole.mjs";

test("ci sono 37 regole, una per coppia dominio+tipo del compendio 2.9.3", () => {
  assert.equal(Object.keys(REGOLE).length, 37);
});

test("tutte e dieci i domini sono coperti", () => {
  const domini = new Set(Object.keys(REGOLE).map(k => k.split("+")[0]));
  assert.deepEqual([...domini].sort(),
    ["arcana", "blade", "bone", "codex", "dread", "grace", "midnight", "sage", "splendor", "valor"]);
});

test("ogni regola punta a una chiave del database jb2a", () => {
  for (const [coppia, file] of Object.entries(REGOLE)) {
    assert.ok(file.startsWith("jb2a."), `${coppia} non punta a jb2a: ${file}`);
  }
});

test("fileDaRegola trova le coppie note e tace sulle altre", () => {
  assert.equal(fileDaRegola("arcana", "attack"), "jb2a.magic_missile.purple");
  assert.equal(fileDaRegola("arcana", "inesistente"), null);
});

test("un attacco a distanza e' un proiettile", () => {
  assert.equal(formaDaAzione({ tipo: "attack", range: "far", targetType: "any" }), "proiettile");
  assert.equal(formaDaAzione({ tipo: "damage", range: "close", targetType: "any" }), "proiettile");
});

test("un attacco in mischia si appoggia sul bersaglio", () => {
  assert.equal(formaDaAzione({ tipo: "attack", range: "melee", targetType: "any" }), "bersaglio");
  assert.equal(formaDaAzione({ tipo: "attack", range: "veryClose", targetType: "any" }), "bersaglio");
});

test("cio' che punta a se stessi sta sul lanciatore", () => {
  assert.equal(formaDaAzione({ tipo: "effect", range: null, targetType: "self" }), "lanciatore");
  assert.equal(formaDaAzione({ tipo: "healing", range: "self", targetType: "any" }), "lanciatore");
});

test("senza range la forma resta auto: e' il caso maggioritario", () => {
  assert.equal(formaDaAzione({ tipo: "effect", range: null, targetType: "any" }), "auto");
  assert.equal(formaDaAzione({ tipo: "healing", range: "", targetType: "any" }), "auto");
  assert.equal(formaDaAzione({ tipo: "attack", range: null, targetType: "any" }), "auto");
});
```

- [ ] **Step 2: Esegui il test e verifica che fallisca**

Run: `node --test test/regole.test.mjs`
Expected: FAIL — `Cannot find module '../module/lib/regole.mjs'`

- [ ] **Step 3: Scrivi l'implementazione**

`module/lib/regole.mjs`:

```js
/*
 * Le regole precompilano la mappa, non la sostituiscono: quello che gira a runtime e'
 * sempre una mappa esplicita. Qui c'e' solo la proposta.
 *
 * Il compendio daggerheart.domains 2.9.3 ha 210 carte e 284 azioni, ma solo 37 combinazioni
 * distinte di dominio+tipo. E' il fattore sette che rende sensato precompilare.
 *
 * Tutte e 37 le chiavi sono state verificate contro JB2A_DnD5e 0.9.3 installato sulla VPS
 * (1693 effetti). Sono una prima passata plausibile, da correggere col bottone Prova davanti
 * al canvas: nessuno puo' scegliere fra 1693 effetti senza guardarli.
 */

export const REGOLE = Object.freeze({
  "arcana+attack":    "jb2a.magic_missile.purple",
  "arcana+damage":    "jb2a.explosion.02.blue",
  "arcana+effect":    "jb2a.energy_field.01.blue",
  "arcana+healing":   "jb2a.particle_burst.01.circle.bluepurple",

  "blade+attack":     "jb2a.greatsword.melee.standard.white",
  "blade+damage":     "jb2a.shortsword.melee.01.white",
  "blade+effect":     "jb2a.on_token_buff.001.001.blue",
  "blade+healing":    "jb2a.bless.400px.intro.yellow",

  "bone+attack":      "jb2a.arrow.physical.blue",
  "bone+effect":      "jb2a.condition.boon.01.001.green",
  "bone+healing":     "jb2a.healing_generic.400px.green",

  "codex+attack":     "jb2a.eldritch_blast.purple",
  "codex+damage":     "jb2a.explosion.03.blueyellow",
  "codex+effect":     "jb2a.cast_generic.02.blue",

  "dread+attack":     "jb2a.witch_bolt.blue",
  "dread+damage":     "jb2a.arms_of_hadar.dark_purple",
  "dread+effect":     "jb2a.eyes.01.dark_green.few",
  "dread+healing":    "jb2a.energy_strands.in.green.01",

  "grace+attack":     "jb2a.dancing_light.blueyellow",
  "grace+damage":     "jb2a.shatter.blue",
  "grace+effect":     "jb2a.bardic_inspiration.greenorange",
  "grace+healing":    "jb2a.healing_generic.400px.yellow",

  "midnight+attack":    "jb2a.toll_the_dead.green.complete",
  "midnight+damage":    "jb2a.black_tentacles.dark_purple",
  "midnight+effect":    "jb2a.darkness.black",
  "midnight+healing":   "jb2a.healing_generic.400px.purple",
  "midnight+countdown": "jb2a.fumes.04.loop.grey",

  "sage+attack":      "jb2a.entangle.green",
  "sage+effect":      "jb2a.plant_growth.03.square.2x2.complete.greenyellow",
  "sage+healing":     "jb2a.aura_themed.01.inward.complete.nature.01.green",

  "splendor+attack":  "jb2a.sacred_flame.target.yellow",
  "splendor+damage":  "jb2a.divine_smite.target.blueyellow",
  "splendor+effect":  "jb2a.bless.400px.loop.yellow",
  "splendor+healing": "jb2a.healing_generic.400px.blue",

  "valor+attack":     "jb2a.melee_attack.06.shield.01",
  "valor+effect":     "jb2a.shield.01.intro.blue",
  "valor+healing":    "jb2a.healing_generic.200px.blue"
});

export function fileDaRegola(dominio, tipo) {
  return REGOLE[`${dominio}+${tipo}`] ?? null;
}

const TESI = new Set(["close", "far", "veryFar"]);
const APPOGGIATI = new Set(["melee", "veryClose"]);

/*
 * La forma non sta nella regola: la stessa regola serve carte con geometrie diverse, quindi
 * si deduce dall'azione.
 *
 * Il conteggio spiega perche' esiste `auto`: sulle 284 azioni del compendio, il range decide
 * 78 casi (43 tesi + 15 appoggiati + 20 su di se'), e 163 non hanno range affatto. Dedurre
 * la geometria in configurazione coprirebbe meno della meta' dei casi; `auto` la rimanda al
 * momento della giocata, dove i bersagli si vedono.
 */
export function formaDaAzione({ tipo, range, targetType }) {
  if (targetType === "self" || range === "self") return "lanciatore";
  if (TESI.has(range) && (tipo === "attack" || tipo === "damage")) return "proiettile";
  if (APPOGGIATI.has(range)) return "bersaglio";
  return "auto";
}
```

- [ ] **Step 4: Esegui i test e verifica che passino**

Run: `npm test`
Expected: PASS, 18 test

- [ ] **Step 5: Commit**

```bash
git add module/lib/regole.mjs test/regole.test.mjs
git commit -m "feat: le 37 regole dominio+tipo e la forma dedotta dall'azione"
```

---

### Task 4: Il contesto neutro

**Files:**
- Create: `module/lib/contesto.mjs`
- Test: `test/contesto.test.mjs`

**Interfaces:**
- Consumes: niente.
- Produces: `contesto(config, idTokenOrigine) -> {origine: string|null, bersagli: [{id: string, colpito: boolean}], haTiro: boolean}`

`idTokenOrigine` arriva da fuori perche' ricavarlo richiede `actor.getActiveTokens()`, che e' un globale di Foundry: tenerlo fuori e' cio' che rende questo file provabile.

- [ ] **Step 1: Scrivi il test che fallisce**

`test/contesto.test.mjs`:

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { contesto } from "../module/lib/contesto.mjs";

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
```

- [ ] **Step 2: Esegui il test e verifica che fallisca**

Run: `node --test test/contesto.test.mjs`
Expected: FAIL — `Cannot find module '../module/lib/contesto.mjs'`

- [ ] **Step 3: Scrivi l'implementazione**

`module/lib/contesto.mjs`:

```js
/*
 * Il config che il system passa all'hook e' ricco: source, dialog, resourceUpdates, effects.
 * Qui si tiene solo cio' che decide un effetto visivo, in una forma che i test possono
 * costruire a mano.
 *
 * `config.targets` e' un array di oggetti prodotti da TargetField.formatTarget: il campo `id`
 * e' l'id del token sul canvas, non dell'attore. `hitResult.success` esiste solo dopo un tiro:
 * assente significa che non c'era niente da mancare, quindi colpito.
 */

export function contesto(config, idTokenOrigine) {
  const bersagli = (config?.targets ?? []).map(t => ({
    id: t.id,
    colpito: t.hitResult?.success !== false
  }));

  return {
    origine: idTokenOrigine ?? null,
    bersagli,
    haTiro: Boolean(config?.hasRoll)
  };
}
```

- [ ] **Step 4: Esegui i test e verifica che passino**

Run: `npm test`
Expected: PASS, 22 test

- [ ] **Step 5: Commit**

```bash
git add module/lib/contesto.mjs test/contesto.test.mjs
git commit -m "feat: il config di Daggerheart ridotto a contesto neutro"
```

---

### Task 5: La decisione

**Files:**
- Create: `module/lib/decisione.mjs`
- Test: `test/decisione.test.mjs`

**Interfaces:**
- Consumes: `chiave` da `chiavi.mjs`.
- Produces:
  - `risolviForma(forma, bersagli) -> "proiettile"|"bersaglio"|"lanciatore"`
  - `decidi(dati, mappa, ctx) -> {file, forma, origine, bersagli} | null` — `origine` è un id token, `bersagli` un array di id token.

- [ ] **Step 1: Scrivi il test che fallisce**

`test/decisione.test.mjs`:

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { decidi, risolviForma } from "../module/lib/decisione.mjs";

const FONTE = "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw";
const DATI = { compendiumSource: FONTE, idAzione: "a1", nomeCarta: "Book of Illiat", nomeAzione: "Arcane Barrage" };
const K = `${FONTE}::a1`;
const ctx = (extra = {}) => ({ origine: "src", bersagli: [{ id: "t1", colpito: true }], haTiro: false, ...extra });

test("auto diventa bersaglio se ci sono bersagli", () => {
  assert.equal(risolviForma("auto", ["t1"]), "bersaglio");
});

test("auto diventa lanciatore se non ce ne sono", () => {
  assert.equal(risolviForma("auto", []), "lanciatore");
});

test("una forma esplicita non viene toccata", () => {
  assert.equal(risolviForma("proiettile", []), "proiettile");
});

test("il descrittore porta file, forma risolta, origine e bersagli", () => {
  const mappa = { [K]: { file: "jb2a.magic_missile.purple", forma: "proiettile" } };
  assert.deepEqual(decidi(DATI, mappa, ctx()), {
    file: "jb2a.magic_missile.purple", forma: "proiettile", origine: "src", bersagli: ["t1"]
  });
});

test("i bersagli mancati non ricevono l'effetto, ma solo se c'era un tiro", () => {
  const mappa = { [K]: { file: "f", forma: "bersaglio" } };
  const bersagli = [{ id: "t1", colpito: true }, { id: "t2", colpito: false }];
  assert.deepEqual(decidi(DATI, mappa, ctx({ bersagli, haTiro: true })).bersagli, ["t1"]);
  assert.deepEqual(decidi(DATI, mappa, ctx({ bersagli, haTiro: false })).bersagli, ["t1", "t2"]);
});

test("niente riga nella mappa, niente effetto", () => {
  assert.equal(decidi(DATI, {}, ctx()), null);
});

test("una riga senza file non e' una riga", () => {
  assert.equal(decidi(DATI, { [K]: { forma: "bersaglio" } }, ctx()), null);
});

test("senza token di origine non si gioca niente", () => {
  const mappa = { [K]: { file: "f", forma: "bersaglio" } };
  assert.equal(decidi(DATI, mappa, ctx({ origine: null })), null);
});

test("un proiettile senza bersagli non ha dove andare", () => {
  const mappa = { [K]: { file: "f", forma: "proiettile" } };
  assert.equal(decidi(DATI, mappa, ctx({ bersagli: [] })), null);
});

test("una riga senza forma vale auto", () => {
  const mappa = { [K]: { file: "f" } };
  assert.equal(decidi(DATI, mappa, ctx({ bersagli: [] })).forma, "lanciatore");
});

test("un'azione senza chiave non trova mai una riga", () => {
  const vuoto = { compendiumSource: null, idAzione: null, nomeCarta: null, nomeAzione: null };
  assert.equal(decidi(vuoto, { [K]: { file: "f" } }, ctx()), null);
});
```

- [ ] **Step 2: Esegui il test e verifica che fallisca**

Run: `node --test test/decisione.test.mjs`
Expected: FAIL — `Cannot find module '../module/lib/decisione.mjs'`

- [ ] **Step 3: Scrivi l'implementazione**

`module/lib/decisione.mjs`:

```js
/*
 * Il perno del modulo: da un contesto e una mappa esce un descrittore, cioe' un oggetto
 * semplice che dice cosa giocare e dove. Nessuna Sequence, nessun canvas: e' per questo che
 * tutta la catena decisionale si prova con node --test.
 *
 * I quattro modi di non fare niente sono espliciti e restituiscono null, non un descrittore
 * vuoto: chi chiama deve poter uscire senza controllare campi.
 */

import { chiave } from "./chiavi.mjs";

export function risolviForma(forma, bersagli) {
  if (forma !== "auto") return forma;
  return bersagli.length ? "bersaglio" : "lanciatore";
}

export function decidi(dati, mappa, ctx) {
  const k = chiave(dati);
  if (!k) return null;

  const riga = mappa?.[k];
  if (!riga?.file) return null;

  if (!ctx.origine) return null;

  /* Il filtro sui mancati vale solo se c'e' stato un tiro: un'azione senza tiro non ha
     bersagli mancati, ha solo bersagli. */
  const bersagli = ctx.bersagli
    .filter(b => !ctx.haTiro || b.colpito)
    .map(b => b.id);

  const forma = risolviForma(riga.forma ?? "auto", bersagli);

  /* Un proiettile e' definito dai suoi due capi. Senza bersaglio non e' un effetto brutto:
     e' un effetto che Sequencer non sa dove tendere. */
  if (forma === "proiettile" && bersagli.length === 0) return null;

  return { file: riga.file, forma, origine: ctx.origine, bersagli };
}
```

- [ ] **Step 4: Esegui i test e verifica che passino**

Run: `npm test`
Expected: PASS, 33 test

- [ ] **Step 5: Commit**

```bash
git add module/lib/decisione.mjs test/decisione.test.mjs
git commit -m "feat: dal contesto al descrittore, con auto risolto sui bersagli veri"
```

---

### Task 6: La scena e l'aggancio a Foundry

**Files:**
- Create: `module/lib/scena.mjs`
- Create: `module/daggerheart-vfx.mjs`
- Test: `test/scena.test.mjs`

**Interfaces:**
- Consumes: `decidi`, `datiAzione`, `contesto`, `MODULE_ID`, `SETTING_MAPPA`, `SETTING_ATTIVO`.
- Produces: `costruisci(descrittoreRisolto, Sequence) -> Sequence` dove `descrittoreRisolto` ha `origine` e `bersagli` già trasformati da id a oggetti Token.

`Sequence` arriva come parametro invece che dal globale: è ciò che permette di provare `scena.mjs` con una finta.

- [ ] **Step 1: Scrivi il test che fallisce**

`test/scena.test.mjs`:

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { costruisci } from "../module/lib/scena.mjs";

/* Una Sequence finta che registra le chiamate invece di disegnare. */
function SequenceFinta() {
  const chiamate = [];
  const effetto = {
    file: f => (chiamate.push(["file", f]), effetto),
    atLocation: l => (chiamate.push(["atLocation", l]), effetto),
    stretchTo: t => (chiamate.push(["stretchTo", t]), effetto),
    scaleToObject: n => (chiamate.push(["scaleToObject", n]), effetto)
  };
  this.effect = () => effetto;
  this.chiamate = chiamate;
}

const desc = (forma, bersagli) => ({ file: "jb2a.x", forma, origine: "SRC", bersagli });

test("un proiettile si tende da origine a ogni bersaglio", () => {
  const s = costruisci(desc("proiettile", ["T1", "T2"]), SequenceFinta);
  assert.deepEqual(s.chiamate, [
    ["file", "jb2a.x"], ["atLocation", "SRC"], ["stretchTo", "T1"],
    ["file", "jb2a.x"], ["atLocation", "SRC"], ["stretchTo", "T2"]
  ]);
});

test("la forma bersaglio si appoggia su ogni bersaglio", () => {
  const s = costruisci(desc("bersaglio", ["T1"]), SequenceFinta);
  assert.deepEqual(s.chiamate, [["file", "jb2a.x"], ["atLocation", "T1"], ["scaleToObject", 2]]);
});

test("la forma lanciatore ignora i bersagli e sta sull'origine", () => {
  const s = costruisci(desc("lanciatore", ["T1", "T2"]), SequenceFinta);
  assert.deepEqual(s.chiamate, [["file", "jb2a.x"], ["atLocation", "SRC"], ["scaleToObject", 1.6]]);
});

test("costruisci non gioca: restituisce la sequenza, e' chi chiama a decidere quando", () => {
  const s = costruisci(desc("lanciatore", []), SequenceFinta);
  assert.ok(s instanceof SequenceFinta);
});
```

- [ ] **Step 2: Esegui il test e verifica che fallisca**

Run: `node --test test/scena.test.mjs`
Expected: FAIL — `Cannot find module '../module/lib/scena.mjs'`

- [ ] **Step 3: Scrivi scena.mjs**

`module/lib/scena.mjs`:

```js
/*
 * Le tre geometrie, e nient'altro. Sequencer arriva come parametro invece che dal globale,
 * cosi' anche questo file si prova fuori da Foundry con una Sequence finta.
 *
 * Nota su `proiettile`: i file ranged di JB2A esistono in cinque distanze (05ft…90ft) e non
 * vanno scelti a mano. Sequencer ha `rangeFind` dentro: gli si passa il ramo padre
 * (jb2a.magic_missile.purple) e sceglie lui il file giusto per la distanza fra i due token.
 */

export function costruisci({ file, forma, origine, bersagli }, Sequence) {
  const s = new Sequence();

  if (forma === "proiettile") {
    for (const b of bersagli) s.effect().file(file).atLocation(origine).stretchTo(b);
  } else if (forma === "bersaglio") {
    for (const b of bersagli) s.effect().file(file).atLocation(b).scaleToObject(2);
  } else {
    s.effect().file(file).atLocation(origine).scaleToObject(1.6);
  }

  return s;
}
```

- [ ] **Step 4: Esegui i test e verifica che passino**

Run: `npm test`
Expected: PASS, 37 test

- [ ] **Step 5: Scrivi l'entry point**

`module/daggerheart-vfx.mjs`:

```js
import { MODULE_ID, SETTING_MAPPA, SETTING_ATTIVO } from "./lib/costanti.mjs";
import { datiAzione } from "./lib/chiavi.mjs";
import { contesto } from "./lib/contesto.mjs";
import { decidi } from "./lib/decisione.mjs";
import { costruisci } from "./lib/scena.mjs";

const mappa = () => game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {};
const attivo = () => game.settings.get(MODULE_ID, SETTING_ATTIVO);

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, SETTING_ATTIVO, {
    name: "DHVFX.settings.attivo.name",
    hint: "DHVFX.settings.attivo.hint",
    scope: "world", config: true, type: Boolean, default: true
  });

  /* La mappa non si modifica dal pannello dei settings: e' un oggetto di centinaia di righe
     e ha una finestra sua. config: false la tiene fuori dall'elenco. */
  game.settings.register(MODULE_ID, SETTING_MAPPA, {
    scope: "world", config: false, type: Object, default: {}
  });
});

/*
 * Trasforma il descrittore (che porta id di token, perche' e' puro) in oggetti del canvas.
 * Un bersaglio sparito nel frattempo viene semplicemente lasciato fuori.
 */
function risolviToken({ origine, bersagli, ...resto }) {
  const src = canvas.tokens.get(origine);
  if (!src) return null;
  return { ...resto, origine: src, bersagli: bersagli.map(id => canvas.tokens.get(id)).filter(Boolean) };
}

/*
 * L'hook gira DENTRO il workflow del system: se solleva, la giocata si ferma. Un modulo di
 * effetti che impedisce a un incantesimo di risolversi e' peggio di un modulo muto, quindi
 * qui si tace e si logga.
 */
Hooks.on("daggerheart.postUseAction", async (action, config) => {
  try {
    if (!attivo()) return;

    const dati = datiAzione(action);
    if (dati.tipoItem !== "domainCard") return;

    const src = action.actor?.getActiveTokens?.()?.[0];
    const ctx = contesto(config, src?.id ?? null);

    const descrittore = decidi(dati, mappa(), ctx);
    if (!descrittore) return;

    const risolto = risolviToken(descrittore);
    if (!risolto) return;

    await costruisci(risolto, Sequence).play();
  } catch (e) {
    console.error(`[${MODULE_ID}] errore giocando l'effetto, la giocata prosegue:`, e);
  }
});
```

- [ ] **Step 6: Esegui i test, poi verifica a mano in Foundry**

Run: `npm test`
Expected: PASS, 37 test

Poi:

```bash
./deploy.sh
ssh root@IL-TUO-SERVER 'docker stop foundry && sleep 5 && docker start foundry'
```

In Foundry, mondo `five-banners-burning`: accendi il modulo in Manage Modules. Poi in console, per popolare la mappa con la sola riga che serve alla prova:

```js
const FONTE = "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw";
await game.settings.set("daggerheart-vfx", "mappa", {
  [`${FONTE}::tOHoeUFjdPw2TGrw`]: { file: "jb2a.magic_missile.purple", forma: "proiettile" }
});
```

Seleziona **Balthazar Thalsiah**, bersaglia un nemico con **T**, e lancia **Arcane Barrage** da Book of Illiat. Atteso: il missile viola parte dal lanciatore e arriva sul bersaglio.

**Poi la prova che lo spike non ha mai fatto:** bersaglia **tre** nemici e lancia **Wild Flame** (Book of Tyfar), dopo aver aggiunto la sua riga con `forma: "bersaglio"`. Atteso: tre esplosioni, una per token. È l'unico modo di verificare il multi-bersaglio, che nessun test copre davvero.

- [ ] **Step 7: Commit**

```bash
git add module/lib/scena.mjs module/daggerheart-vfx.mjs test/scena.test.mjs
git commit -m "feat: le tre geometrie e l'aggancio a postUseAction"
```

---

### Task 7: Preload sulla scena

**Files:**
- Create: `module/lib/preload.mjs`
- Modify: `module/daggerheart-vfx.mjs` (aggiunta di un hook `canvasReady`)
- Test: `test/preload.test.mjs`

**Interfaces:**
- Consumes: `chiave` da `chiavi.mjs`.
- Produces: `fileDaPrecaricare(cartePerAttore, mappa) -> string[]` — `cartePerAttore` è un array di array di dati-azione (uno per attore in scena), il ritorno è la lista di file distinti.

- [ ] **Step 1: Scrivi il test che fallisce**

`test/preload.test.mjs`:

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { fileDaPrecaricare } from "../module/lib/preload.mjs";

const dati = (fonte, id) => ({ compendiumSource: fonte, idAzione: id, nomeCarta: null, nomeAzione: null });
const F = "Compendium.daggerheart.domains.Item.AAA";
const mappa = {
  [`${F}::a1`]: { file: "jb2a.uno" },
  [`${F}::a2`]: { file: "jb2a.due" },
  [`${F}::a3`]: { file: "jb2a.uno" }
};

test("raccoglie i file delle azioni presenti, senza ripetizioni", () => {
  const out = fileDaPrecaricare([[dati(F, "a1"), dati(F, "a2")], [dati(F, "a3")]], mappa);
  assert.deepEqual(out.sort(), ["jb2a.due", "jb2a.uno"]);
});

test("le azioni senza riga non aggiungono niente", () => {
  assert.deepEqual(fileDaPrecaricare([[dati(F, "ignota")]], mappa), []);
});

test("nessun attore in scena, niente da precaricare", () => {
  assert.deepEqual(fileDaPrecaricare([], mappa), []);
});
```

- [ ] **Step 2: Esegui il test e verifica che fallisca**

Run: `node --test test/preload.test.mjs`
Expected: FAIL — `Cannot find module '../module/lib/preload.mjs'`

- [ ] **Step 3: Scrivi l'implementazione**

`module/lib/preload.mjs`:

```js
/*
 * Lo spike ha misurato che non esiste un costo di rendering: 20 effetti insieme tengono
 * come uno. Esiste un costo di primo caricamento, una volta per asset — 13 fps contro 40,
 * perche' il .webm va scaricato dal server e decodificato.
 *
 * Quindi si precarica. Ma non tutti e 284 i file: solo quelli delle carte che qualcuno in
 * questa scena puo' davvero usare.
 */

import { chiave } from "./chiavi.mjs";

export function fileDaPrecaricare(cartePerAttore, mappa) {
  const file = new Set();
  for (const azioni of cartePerAttore) {
    for (const dati of azioni) {
      const riga = mappa?.[chiave(dati)];
      if (riga?.file) file.add(riga.file);
    }
  }
  return [...file];
}
```

- [ ] **Step 4: Esegui i test e verifica che passino**

Run: `npm test`
Expected: PASS, 40 test

- [ ] **Step 5: Aggancia il preload all'entry point**

In `module/daggerheart-vfx.mjs`, aggiungi l'import e l'hook in fondo al file:

```js
import { fileDaPrecaricare } from "./lib/preload.mjs";

/*
 * Le azioni delle carte di dominio possedute da chi ha un token in questa scena. Si guarda
 * l'attore del token, non il token: le carte stanno sull'attore.
 */
function azioniInScena() {
  const attori = new Set(canvas.tokens.placeables.map(t => t.actor).filter(Boolean));
  return [...attori].map(a => a.items
    .filter(i => i.type === "domainCard")
    .flatMap(i => Object.values(i.system?.actions ?? {}).map(az => datiAzione({ ...az, item: i })))
  );
}

Hooks.on("canvasReady", async () => {
  try {
    if (!attivo()) return;
    const file = fileDaPrecaricare(azioniInScena(), mappa());
    if (!file.length) return;
    await Sequencer.Preloader.preloadForClients(file, true);
    console.log(`[${MODULE_ID}] precaricati ${file.length} effetti per questa scena`);
  } catch (e) {
    console.error(`[${MODULE_ID}] preload fallito, si gioca lo stesso:`, e);
  }
});
```

- [ ] **Step 6: Verifica a mano**

```bash
./deploy.sh
```

Ricarica il mondo (F5). In console deve comparire `[daggerheart-vfx] precaricati N effetti per questa scena`. Poi lancia **Arcane Barrage**: al primo lancio non deve esserci lo scatto che lo spike misurava a 13 fps.

- [ ] **Step 7: Commit**

```bash
git add module/lib/preload.mjs module/daggerheart-vfx.mjs test/preload.test.mjs
git commit -m "feat: precarica gli effetti delle carte presenti in scena"
```

---

### Task 8: Il catalogo delle azioni

**Files:**
- Create: `module/lib/catalogo.mjs`
- Test: `test/catalogo.test.mjs`

**Interfaces:**
- Consumes: `chiave`, `datiAzione` da `chiavi.mjs`; `fileDaRegola`, `formaDaAzione` da `regole.mjs`.
- Produces:
  - `righeDaCarte(carte) -> [{chiave, dominio, nomeCarta, nomeAzione, tipo, file, forma}]` — `file` e `forma` sono `null` finché non li riempie la mappa o la precompilazione.
  - `precompila(righe, mappa) -> mappa nuova` — riempie solo le righe che nella mappa non hanno già un `file`.

- [ ] **Step 1: Scrivi il test che fallisce**

`test/catalogo.test.mjs`:

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { righeDaCarte, precompila } from "../module/lib/catalogo.mjs";

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

test("una coppia dominio+tipo senza regola resta vuota", () => {
  const strana = [carta("X", "dominio-inventato", { z: { _id: "z", name: "Z", type: "attack", target: {} } })];
  const nuova = precompila(righeDaCarte(strana, {}), {});
  assert.equal(Object.keys(nuova).length, 0);
});
```

- [ ] **Step 2: Esegui il test e verifica che fallisca**

Run: `node --test test/catalogo.test.mjs`
Expected: FAIL — `Cannot find module '../module/lib/catalogo.mjs'`

- [ ] **Step 3: Scrivi l'implementazione**

`module/lib/catalogo.mjs`:

```js
/*
 * L'elenco che la finestra mostra, e la precompilazione.
 *
 * Riceve le carte gia' lette da fuori (il compendio si apre con game.packs, che e' un
 * globale): qui dentro sono solo oggetti, e i test le costruiscono a mano.
 */

import { chiave, datiAzione } from "./chiavi.mjs";
import { fileDaRegola, formaDaAzione } from "./regole.mjs";

export function righeDaCarte(carte, mappa = {}) {
  const righe = [];
  for (const carta of carte) {
    for (const azione of Object.values(carta.system?.actions ?? {})) {
      const dati = datiAzione({ ...azione, item: carta });
      const k = chiave(dati);
      if (!k) continue;
      const riga = mappa[k] ?? {};
      righe.push({
        chiave: k,
        dominio: dati.dominio,
        nomeCarta: dati.nomeCarta,
        nomeAzione: dati.nomeAzione,
        tipo: dati.tipo,
        range: dati.range,
        targetType: dati.targetType,
        file: riga.file ?? null,
        forma: riga.forma ?? null
      });
    }
  }
  return righe;
}

/*
 * Le regole sono una proposta, non un motore: precompila scrive dentro la mappa esplicita e
 * poi non conta piu' niente. E non sovrascrive: una scelta fatta a mano vince sempre sulla
 * regola, altrimenti il bottone diventerebbe un modo per perdere il proprio lavoro.
 */
export function precompila(righe, mappa) {
  const nuova = { ...mappa };
  for (const r of righe) {
    if (nuova[r.chiave]?.file) continue;
    const file = fileDaRegola(r.dominio, r.tipo);
    if (!file) continue;
    nuova[r.chiave] = { file, forma: formaDaAzione(r) };
  }
  return nuova;
}
```

- [ ] **Step 4: Esegui i test e verifica che passino**

Run: `npm test`
Expected: PASS, 46 test

- [ ] **Step 5: Commit**

```bash
git add module/lib/catalogo.mjs test/catalogo.test.mjs
git commit -m "feat: catalogo delle azioni e precompilazione dalle regole"
```

---

### Task 9: La finestra di configurazione

**Files:**
- Create: `module/apps/configurazione.mjs`
- Create: `module/apps/configurazione.hbs`
- Modify: `module/daggerheart-vfx.mjs` (registrazione del menu nei settings)
- Modify: `module/lang/it.json`, `module/lang/en.json`
- Test: `test/template.test.mjs`

**Interfaces:**
- Consumes: `righeDaCarte`, `precompila` da `catalogo.mjs`; `costruisci` da `scena.mjs`; `FORME` da `costanti.mjs`.
- Produces: `class ConfigurazioneVFX extends HandlebarsApplicationMixin(ApplicationV2)` con `static PARTS = { corpo: { template: "modules/daggerheart-vfx/apps/configurazione.hbs" } }`.

- [ ] **Step 1: Scrivi il test che fallisce**

`test/template.test.mjs`:

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

/*
 * HandlebarsApplicationMixin pretende che ogni PART renda UN SOLO elemento radice. Due <div>
 * fratelli in cima al template e la finestra non si apre, con un errore visibile solo in
 * console. E' costato mezz'ora di diagnosi al buio in fbb-atlante; qui lo prende un test.
 */
function contaRadici(html) {
  const senzaCommenti = html.replace(/<!--[\s\S]*?-->/g, "").trim();
  let profondita = 0, radici = 0;
  const tag = /<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>/g;
  let m;
  while ((m = tag.exec(senzaCommenti))) {
    const [, chiusura, nome, , autochiusura] = m;
    const vuoto = autochiusura === "/" || ["br", "hr", "img", "input"].includes(nome.toLowerCase());
    if (chiusura) { profondita--; continue; }
    if (profondita === 0) radici++;
    if (!vuoto) profondita++;
  }
  return radici;
}

test("il template della finestra ha una sola radice", () => {
  const html = readFileSync(
    fileURLToPath(new URL("../module/apps/configurazione.hbs", import.meta.url)), "utf8");
  assert.equal(contaRadici(html), 1);
});
```

- [ ] **Step 2: Esegui il test e verifica che fallisca**

Run: `node --test test/template.test.mjs`
Expected: FAIL — `ENOENT ... configurazione.hbs`

- [ ] **Step 3: Scrivi il template**

`module/apps/configurazione.hbs`:

```handlebars
<div class="dhvfx">
  <header class="dhvfx-barra">
    <select name="dominio">
      <option value="">{{localize "DHVFX.finestra.tuttiIDomini"}}</option>
      {{#each domini}}<option value="{{this}}">{{this}}</option>{{/each}}
    </select>
    <input type="search" name="cerca" placeholder="{{localize "DHVFX.finestra.cerca"}}">
    <span class="dhvfx-conteggio">{{conteggio.totale}} · {{conteggio.assegnate}} · {{conteggio.vuote}}</span>
    <button type="button" data-azione="precompila">{{localize "DHVFX.finestra.precompila"}}</button>
    <button type="button" data-azione="esporta">{{localize "DHVFX.finestra.esporta"}}</button>
    <button type="button" data-azione="importa">{{localize "DHVFX.finestra.importa"}}</button>
  </header>

  <ol class="dhvfx-righe">
    {{#each righe}}
    <li class="dhvfx-riga" data-chiave="{{this.chiave}}" data-dominio="{{this.dominio}}">
      <span class="dhvfx-titolo">{{this.nomeCarta}} — {{this.nomeAzione}}</span>
      <input type="text" name="file" value="{{this.file}}" placeholder="jb2a...">
      <select name="forma">
        <option value="">—</option>
        {{#each ../forme}}<option value="{{this}}">{{this}}</option>{{/each}}
      </select>
      <button type="button" data-azione="sfoglia">🔍</button>
      <button type="button" data-azione="prova">▶</button>
    </li>
    {{/each}}
  </ol>
</div>
```

- [ ] **Step 4: Esegui il test e verifica che passi**

Run: `node --test test/template.test.mjs`
Expected: PASS, 1 test

- [ ] **Step 5: Scrivi la finestra**

`module/apps/configurazione.mjs`:

```js
import { MODULE_ID, SETTING_MAPPA, FORME } from "../lib/costanti.mjs";
import { righeDaCarte, precompila } from "../lib/catalogo.mjs";
import { costruisci } from "../lib/scena.mjs";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

export class ConfigurazioneVFX extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS = {
    id: "daggerheart-vfx-configurazione",
    tag: "div",
    window: { title: "DHVFX.finestra.titolo", resizable: true },
    position: { width: 780, height: 640 },
    actions: {}
  };

  /* Una PART, una radice. Vedi test/template.test.mjs. */
  static PARTS = { corpo: { template: `modules/${MODULE_ID}/apps/configurazione.hbs` } };

  async _prepareContext() {
    const mappa = game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {};
    const carte = await this.#carteDelCompendio();
    const righe = righeDaCarte(carte, mappa);
    return {
      righe,
      forme: FORME,
      domini: [...new Set(righe.map(r => r.dominio))].sort(),
      conteggio: {
        totale: righe.length,
        assegnate: righe.filter(r => r.file).length,
        vuote: righe.filter(r => !r.file).length
      }
    };
  }

  async #carteDelCompendio() {
    const pack = game.packs.get("daggerheart.domains");
    if (!pack) return [];
    const documenti = await pack.getDocuments();
    return documenti.map(d => d.toObject());
  }

  _onRender(context, options) {
    super._onRender(context, options);
    const radice = this.element;

    radice.addEventListener("click", async ev => {
      const bottone = ev.target.closest("button[data-azione]");
      if (!bottone) return;
      const riga = bottone.closest(".dhvfx-riga");
      const azione = bottone.dataset.azione;

      if (azione === "precompila") return this.#precompila();
      if (azione === "esporta") return this.#esporta();
      if (azione === "importa") return this.#importa();
      if (azione === "sfoglia") return Sequencer.DatabaseViewer.show();
      if (azione === "prova") return this.#prova(riga);
    });

    /* Il salvataggio e' immediato: una finestra con 284 righe e un bottone Salva in fondo e'
       un modo per perdere il lavoro. */
    radice.addEventListener("change", ev => {
      const riga = ev.target.closest(".dhvfx-riga");
      if (riga) this.#salvaRiga(riga);
    });

    radice.querySelector("[name=dominio]").addEventListener("change", () => this.#filtra());
    radice.querySelector("[name=cerca]").addEventListener("input", () => this.#filtra());
  }

  #filtra() {
    const dominio = this.element.querySelector("[name=dominio]").value;
    const cerca = this.element.querySelector("[name=cerca]").value.toLowerCase();
    for (const riga of this.element.querySelectorAll(".dhvfx-riga")) {
      const testo = riga.querySelector(".dhvfx-titolo").textContent.toLowerCase();
      const ok = (!dominio || riga.dataset.dominio === dominio) && (!cerca || testo.includes(cerca));
      riga.hidden = !ok;
    }
  }

  async #salvaRiga(riga) {
    const mappa = { ...(game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {}) };
    const file = riga.querySelector("[name=file]").value.trim();
    const forma = riga.querySelector("[name=forma]").value;
    if (file) mappa[riga.dataset.chiave] = { file, forma: forma || "auto" };
    else delete mappa[riga.dataset.chiave];
    await game.settings.set(MODULE_ID, SETTING_MAPPA, mappa);
  }

  async #precompila() {
    const mappa = game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {};
    const righe = righeDaCarte(await this.#carteDelCompendio(), mappa);
    const nuova = precompila(righe, mappa);
    const aggiunte = Object.keys(nuova).length - Object.keys(mappa).length;
    await game.settings.set(MODULE_ID, SETTING_MAPPA, nuova);
    ui.notifications.info(game.i18n.format("DHVFX.finestra.precompilate", { n: aggiunte }));
    this.render();
  }

  /*
   * Prova: gioca l'effetto della riga sul token selezionato, senza passare dalla scheda.
   * E' il modo in cui si sceglie un effetto — assegnarlo alla cieca e scoprirlo al tavolo
   * non e' un modo.
   */
  async #prova(riga) {
    const file = riga.querySelector("[name=file]").value.trim();
    if (!file) return ui.notifications.warn(game.i18n.localize("DHVFX.finestra.senzaFile"));
    const origine = canvas.tokens.controlled[0];
    if (!origine) return ui.notifications.warn(game.i18n.localize("DHVFX.finestra.senzaToken"));

    const bersagli = Array.from(game.user.targets);
    let forma = riga.querySelector("[name=forma]").value || "auto";
    if (forma === "auto") forma = bersagli.length ? "bersaglio" : "lanciatore";
    if (forma === "proiettile" && !bersagli.length)
      return ui.notifications.warn(game.i18n.localize("DHVFX.finestra.senzaBersaglio"));

    await costruisci({ file, forma, origine, bersagli }, Sequence).play();
  }

  async #esporta() {
    const mappa = game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {};
    foundry.utils.saveDataToFile(JSON.stringify(mappa, null, 2), "application/json",
      `${MODULE_ID}-mappa.json`);
  }

  async #importa() {
    const contenuto = await foundry.applications.api.DialogV2.prompt({
      window: { title: game.i18n.localize("DHVFX.finestra.importa") },
      content: `<textarea name="json" rows="12" style="width:100%"></textarea>`,
      ok: { callback: (ev, bottone) => bottone.form.elements.json.value }
    });
    if (!contenuto) return;
    await game.settings.set(MODULE_ID, SETTING_MAPPA, JSON.parse(contenuto));
    ui.notifications.info(game.i18n.localize("DHVFX.finestra.importata"));
    this.render();
  }
}
```

- [ ] **Step 6: Aggiungi le stringhe e il menu**

In `module/lang/it.json`, aggiungi:

```json
{
  "DHVFX.finestra.titolo": "Effetti delle carte di dominio",
  "DHVFX.finestra.tuttiIDomini": "tutti i domini",
  "DHVFX.finestra.cerca": "cerca una carta",
  "DHVFX.finestra.precompila": "Precompila",
  "DHVFX.finestra.esporta": "Esporta",
  "DHVFX.finestra.importa": "Importa",
  "DHVFX.finestra.precompilate": "{n} righe precompilate dalle regole.",
  "DHVFX.finestra.senzaFile": "Questa riga non ha ancora un effetto.",
  "DHVFX.finestra.senzaToken": "Seleziona il token che lancia.",
  "DHVFX.finestra.senzaBersaglio": "Un proiettile ha bisogno di un bersaglio (tasto T).",
  "DHVFX.finestra.importata": "Mappa importata.",
  "DHVFX.settings.menu.name": "Effetti delle carte di dominio",
  "DHVFX.settings.menu.label": "Apri la finestra",
  "DHVFX.settings.menu.hint": "Assegna un effetto visivo a ogni azione delle carte di dominio."
}
```

In `module/lang/en.json`, le stesse chiavi tradotte.

In `module/daggerheart-vfx.mjs`, dentro `Hooks.once("init", ...)`:

```js
game.settings.registerMenu(MODULE_ID, "configurazione", {
  name: "DHVFX.settings.menu.name",
  label: "DHVFX.settings.menu.label",
  hint: "DHVFX.settings.menu.hint",
  icon: "fas fa-wand-sparkles",
  type: ConfigurazioneVFX,
  restricted: true
});
```

con `import { ConfigurazioneVFX } from "./apps/configurazione.mjs";` in cima.

- [ ] **Step 7: Esegui i test, poi verifica a mano**

Run: `npm test`
Expected: PASS, 47 test

```bash
./deploy.sh
```

In Foundry (F5), Configurazione → Impostazioni modulo → *Apri la finestra*. Verifica in ordine:

1. La finestra si apre e mostra **284 righe** raggruppabili per dominio.
2. Il filtro per dominio e la ricerca nascondono le righe giuste.
3. *Precompila* riempie le vuote e notifica quante. Rilanciandolo, la seconda volta ne aggiunge **zero**.
4. Cambi un `file` a mano, chiudi e riapri: il valore è ancora lì.
5. Selezioni un token, premi **▶** su una riga: l'effetto parte.
6. *Precompila* dopo la modifica manuale **non** sovrascrive la riga che hai cambiato.
7. *Esporta* scarica un JSON; *Importa* lo rimette.

- [ ] **Step 8: Commit**

```bash
git add module/apps module/lang module/daggerheart-vfx.mjs test/template.test.mjs
git commit -m "feat: finestra di configurazione con precompilazione e prova"
```

---

### Task 10: Release

**Files:**
- Create: `.github/workflows/release.yml`
- Create: `README.md`
- Modify: `module/module.json` (campi `manifest` e `download`)

**Interfaces:**
- Consumes: niente.
- Produces: un tag `vX.Y.Z` produce una release con `module.json` e `module.zip`.

- [ ] **Step 1: Aggiungi manifest e download al module.json**

```json
  "manifest": "https://github.com/vietts/daggerheart-vfx/releases/latest/download/module.json",
  "download": "https://github.com/vietts/daggerheart-vfx/releases/download/v0.1.0/module.zip"
```

- [ ] **Step 2: Scrivi il workflow**

`.github/workflows/release.yml`:

```yaml
name: release
on:
  push:
    tags: ["v*"]

jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: I test devono passare prima di pubblicare
        run: npm test

      - name: Allinea versione e download del manifest al tag
        env:
          TAG: ${{ github.ref_name }}
          REPO: ${{ github.repository }}
        run: |
          V="${TAG#v}"
          node -e '
            const fs = require("fs");
            const [, , versione, repo] = process.argv;
            const p = "module/module.json";
            const m = JSON.parse(fs.readFileSync(p, "utf8"));
            m.version = versione;
            m.download = `https://github.com/${repo}/releases/download/v${versione}/module.zip`;
            fs.writeFileSync(p, JSON.stringify(m, null, 2));
          ' "$V" "$REPO"

      - name: Impacchetta
        run: cd module && zip -r ../module.zip .

      - uses: softprops/action-gh-release@v2
        with:
          files: |
            module/module.json
            module.zip
```

- [ ] **Step 3: Scrivi il README**

`README.md`:

```markdown
# Daggerheart VFX

Effetti visivi per le carte di dominio di Daggerheart su Foundry VTT.

Quando un personaggio usa un'azione di una carta di dominio, il modulo gioca l'effetto che
gli hai assegnato: un proiettile teso dal lanciatore al bersaglio, un'esplosione appoggiata
sul bersaglio, o un effetto sul lanciatore.

## Cosa serve

- Foundry VTT 13 o 14
- Il system [Daggerheart](https://github.com/Foundryborne/daggerheart) 2.9.0 o piu' recente
- I moduli **Sequencer** e **JB2A** (la versione free basta: 1693 effetti)

## Come si usa

Configurazione → Impostazioni modulo → *Effetti delle carte di dominio*.

Il bottone **Precompila** assegna un effetto a tutte le azioni usando 37 regole per
dominio e tipo. Sono una prima passata: correggile col bottone **▶ Prova**, che gioca
l'effetto sul token selezionato senza passare dalla scheda.

Le assegnazioni fatte a mano vincono sempre: *Precompila* non sovrascrive mai una riga che
ha gia' un effetto.

## Limiti dichiarati

- Copre le **carte di dominio**, non le armi e non gli attacchi degli avversari.
- Le carte aggiunte dal system dopo l'ultima precompilazione nascono senza effetto.
- Hope e Fear non cambiano l'effetto: si gioca sui bersagli non mancati.
```

- [ ] **Step 4: Verifica che i test passino e commit**

Run: `npm test`
Expected: PASS, 47 test

```bash
git add .github README.md module/module.json
git commit -m "chore: workflow di release e README"
```

- [ ] **Step 5: Non pubblicare**

Il registro foundryvtt.com si valuta dopo qualche settimana d'uso reale, come deciso per
`arte-token`. Prima di allora va verificata la disponibilita' dell'id `daggerheart-vfx`
sull'anagrafe. La macchina c'e', il bottone lo si preme dopo.

---

## Verifica finale

- [ ] `npm test` — 47 test verdi
- [ ] `./deploy.sh` e il modulo compare in Manage Modules
- [ ] Le tre azioni di Balthazar giocano l'effetto giusto dalla scheda
- [ ] **Wild Flame su tre bersagli produce tre effetti** — l'unica strada che lo spike non ha mai percorso
- [ ] Al primo lancio dopo un F5 non c'e' lo scatto: il preload ha funzionato
- [ ] Spegnere il modulo lo zittisce senza rompere le giocate
- [ ] Un `file` inesistente nella mappa logga un errore e **non** ferma l'incantesimo
