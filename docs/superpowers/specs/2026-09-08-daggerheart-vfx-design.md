# daggerheart-vfx — design

Modulo Foundry VTT che dà un effetto visivo alle carte di dominio di Daggerheart.

Data: 2026-09-08 · Stato: design approvato, implementazione da pianificare

---

## 1. Il problema

Il system Daggerheart (Foundryborne) risolve le carte di dominio senza alcun effetto
visivo: una `Spellcast Roll` produce un messaggio in chat e nient'altro. Sul canvas non
succede niente, e la differenza fra un incantesimo e un'azione qualsiasi la fa solo il
testo.

## 2. Cosa esiste già, e perché non basta

- **Automated Animations** è lo standard del settore. Supporta 22 sistemi, verificato su
  Foundry v14. **Daggerheart non è fra questi.** Esiste una richiesta aperta
  ([Foundryborne/daggerheart#1036](https://github.com/Foundryborne/daggerheart/issues/1036))
  perché il system esponga gli hook necessari.
- **Ionrift: Daggerheart Animator** riempie una fetta del buco con un trucco — crea
  un'arma temporanea col nome dell'attacco perché AA la veda. Copre **solo gli attacchi
  dei mostri**, non le azioni dei PG, ed è verificato fino a **Foundry v13**.

La nicchia delle carte di dominio dei personaggi giocanti è scoperta.

## 3. Le quattro decisioni

Prese con Francesco l'8/9/2026, dopo uno spike che ha misurato fatica, resa e peso.

| | Decisione | Perché |
|---|---|---|
| **Confine** | Modulo indipendente, generico e configurabile | Vale in ogni mondo Daggerheart, non solo in *Five Banners Burning*. Stessa scelta fatta a suo tempo separando `arte-token` da `fbb-atlante`. |
| **Mappatura** | Le regole sono un **precompilatore**, non un motore | Quello che gira a runtime è sempre una mappa esplicita. Più controllo, niente comportamenti impliciti da spiegare. |
| **Vocabolario** | Chiavi Sequencer **dirette**, nessuna astrazione sugli asset | Una riga si legge e si corregge senza passare da un catalogo. Il prezzo è la dipendenza da JB2A — la stessa che ha Automated Animations. |
| **Copertura** | Solo le carte di dominio | 284 azioni. Armi e avversari si aggiungono dopo senza riscrivere niente: stesso hook, un filtro diverso. |

## 4. Modello dei dati

### 4.1 L'identità di un'azione

Le carte di dominio sono documenti annidati: quando una carta passa dal compendio alla
scheda di un personaggio, il documento è una copia con un `_id` nuovo. Ma — verificato
sui dati veri, vedi §11 — **gli id delle azioni dentro `system.actions` sopravvivono alla
copia**, e la carta si porta dietro `_stats.compendiumSource`.

Quindi la chiave di una riga è la coppia:

```
<compendiumSource>::<idAzione>

Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw::tOHoeUFjdPw2TGrw
  → Book of Illiat / Arcane Barrage
```

Immune ai rinomini, alle traduzioni e alle copie homebrew della stessa carta di compendio.

**Ripiego per le carte homebrew**, che non hanno `compendiumSource`:
`<nomeCarta>::<nomeAzione>`. Due modi di identificare, il secondo dichiarato come caso
raro e più fragile.

### 4.2 Il contenuto di una riga

```js
{ file: "jb2a.magic_missile.purple", forma: "proiettile" }
```

`file` è una chiave del database di Sequencer, senza traduzioni intermedie.

`forma` è la **geometria della giocata**, non un'astrazione sull'asset: dice se il file va
teso da lanciatore a bersaglio o appoggiato sul bersaglio. Serve perché lo stesso file
reso nel modo sbagliato si vede come una macchia ferma. Quattro valori: `proiettile`,
`bersaglio`, `lanciatore`, `auto`.

`auto` non è pigrizia: **163 azioni su 284 (il 57%) non hanno `range`**, quindi in fase di
precompilazione non c'è nulla da cui dedurre la geometria. `auto` la decide al momento
della giocata guardando i bersagli reali — se ce ne sono, `bersaglio`; se no,
`lanciatore`. Resta sempre correggibile a mano in uno dei tre valori espliciti.

### 4.3 Dove vive

Un world setting unico, oggetto `chiave → riga`. Per mondo, non per attore: una carta
cambia effetto una volta sola per tutti. Con esporta/importa in JSON, che per un modulo
pubblicato è il modo in cui la gente si scambia le mappe già fatte.

## 5. Architettura

Segue le convenzioni di `arte-token`: la logica pura sta in `lib/` e non tocca mai un
globale di Foundry; un guscio sottile la collega al mondo.

```
daggerheart-vfx/
  module/
    module.json              relationships.requires: sequencer, JB2A_DnD5e
    daggerheart-vfx.mjs      hook, settings, preload
    lib/
      chiavi.mjs             identità di un'azione (compendiumSource::id, ripiego sui nomi)
      regole.mjs             le 37 regole dominio+tipo → file; forma dall'azione
      contesto.mjs           il config di Daggerheart → forma minima e neutra
      decisione.mjs          contesto + mappa → descrittore, o niente
      scena.mjs              descrittore → Sequence      ← l'unico pezzo impuro
    apps/
      configurazione.mjs     ApplicationV2 + Handlebars
      configurazione.hbs
    lang/
      it.json  en.json
  test/
  deploy.sh
  .github/workflows/release.yml
```

### 5.1 Il descrittore è il perno

`decisione.mjs` non costruisce una `Sequence`: restituisce un oggetto semplice.

```js
{ file: "jb2a.magic_missile.purple", forma: "proiettile",
  origine: "aB3...", bersagli: ["cD4...", "eF5..."] }
```

Da lì `scena.mjs` fa tre chiamate a Sequencer. Il vantaggio è che **tutta la catena
decisionale si prova con `node --test` fuori da Foundry**, come `decideTokenArt` in
`arte-token`: dato un contesto finto e una mappa finta, esce il descrittore giusto o
`null`.

### 5.2 Il flusso

```
daggerheart.postUseAction(action, config)
  └─ l'item non è una domainCard?   → esci
  └─ chiave(action) → riga, o       → esci
  └─ contesto(config) → { origine, bersagli:[{id, colpito}], haTiro }
  └─ decidi(...) → descrittore, o   → esci
  └─ suona(descrittore)
```

### 5.3 Le forme

```js
proiettile  → .effect().file(f).atLocation(origine).stretchTo(bersaglio)
bersaglio   → .effect().file(f).atLocation(bersaglio).scaleToObject(2)
lanciatore  → .effect().file(f).atLocation(origine).scaleToObject(1.6)
auto        → bersaglio se ci sono bersagli, altrimenti lanciatore
```

`auto` si risolve dentro `decisione.mjs`, che è puro: il descrittore che esce porta sempre
una delle tre forme concrete, e `scena.mjs` non sa nemmeno che `auto` esista.

Sequencer sceglie **da solo** la lunghezza del file per i proiettili JB2A, che esistono in
cinque distanze (`05ft`…`90ft`): la logica `rangeFind` è dentro Sequencer 4.2.3. Si punta
al ramo padre (`jb2a.magic_missile.purple`) e il resto lo fa lui.

### 5.4 L'hook non solleva mai

Tutto il corpo dell'handler sta dentro un `try/catch` che logga col prefisso del modulo e
tace. `Hooks.call` viene invocato **dentro** il workflow del system: un'eccezione lì
ferma la giocata. Un modulo di effetti che impedisce a un incantesimo di risolversi è
peggio di un modulo che non anima niente.

### 5.5 Sincronizzazione fra client

Nessuna. Sequencer trasmette gli effetti a tutti i client per conto suo; il modulo non
apre socket e non gestisce broadcast.

## 6. La finestra di configurazione

Non costruisce un navigatore di asset: `Sequencer.DatabaseViewer` esiste già, con ricerca
e anteprima. Il bottone *Sfoglia* apre il loro.

```
┌ Effetti delle carte di dominio ──────────────────────────────┐
│ dominio [tutti ▾]  stato [tutti ▾]   cerca [        ]        │
│ 284 azioni · 190 assegnate · 94 vuote    [Precompila]  [⇅]   │
├──────────────────────────────────────────────────────────────┤
│ arcana                                                        │
│  Book of Illiat  Arcane Barrage                               │
│    jb2a.magic_missile.purple        [proiettile ▾] 🔍 ▶      │
│  Chain Lightning  Cast                                        │
│    (vuoto)                          [—          ▾] 🔍 ▶      │
└──────────────────────────────────────────────────────────────┘
```

**Il bottone ▶ Prova è la funzione che conta.** Gioca l'effetto sul token selezionato,
subito, senza salvare. Senza, si assegna alla cieca e si scopre l'errore al tavolo. Nello
spike è stato l'unico modo per giudicare la resa.

**Trappola nota** (costata mezz'ora di diagnosi in `fbb-atlante`):
`HandlebarsApplicationMixin` pretende che ogni PART renda **un solo elemento radice**. Due
`<div>` fratelli in cima al template e la finestra non si apre, con un errore visibile
solo in console. Va ripreso il `template-check.mjs` di `fbb-atlante`, che legge il
template da disco e conta le radici.

## 7. Le 37 regole

Il compendio `daggerheart.domains` di daggerheart 2.9.3 contiene **210 carte**
(10 domini × 21), di cui 190 con almeno un'azione, per **284 azioni** totali. Ma le
combinazioni distinte di `dominio + tipoAzione` sono solo **37**. È il fattore sette che
rende la precompilazione sensata.

I dieci domini sono `arcana`, `blade`, `bone`, `codex`, `dread`, `grace`, `midnight`,
`sage`, `splendor`, `valor`. **`dread` — il dominio dell'espansione *Hope & Fear* — è già
nel compendio installato**, non è roba futura.

Una regola produce il solo `file`. La `forma` la ricava l'azione:

| condizione sull'azione | forma | quante azioni |
|---|---|---|
| `range` ∈ {`close`, `far`, `veryFar`} e tipo `attack`/`damage` | `proiettile` | 43 |
| `range` ∈ {`melee`, `veryClose`} | `bersaglio` | 15 |
| `target.type = self`, oppure `range = self` | `lanciatore` | 20 |
| **`range` assente** — il caso maggioritario | **`auto`** | **163** |

Così una stessa regola serve carte con geometrie diverse. Ma il conteggio dice la cosa
che conta: **il range da solo non basta**, decide meno della metà dei casi. Il grosso lo
risolve `auto` a runtime, dove i bersagli si vedono davvero.

Nove regole vere e una da scegliere, una per dominio, con chiavi verificate sul JB2A installato:

```
arcana   + attack   jb2a.magic_missile.purple
codex    + attack   jb2a.eldritch_blast.purple
bone     + attack   jb2a.arrow.physical.blue
sage     + attack   jb2a.entangle.green
splendor + attack   jb2a.sacred_flame.target.yellow
midnight + attack   jb2a.toll_the_dead.green.complete
dread    + attack   (da scegliere: il dominio nuovo, 10 azioni di attacco)
splendor + healing  jb2a.healing_generic.400px.blue
valor    + effect   jb2a.shield.01.intro.blue
grace    + effect   jb2a.bardic_inspiration.greenorange
```

**Le altre 27 sono curatela, non programmazione.** Il codice che le applica sono venti
righe; scegliere quale dei 1693 effetti rappresenta "blade + attack" richiede di
guardarli. Il piano è: prima versione completa scritta in implementazione, con chiavi
tutte verificate contro il database installato, poi correzione col bottone *Prova* davanti
al canvas.

## 8. Preload e prestazioni

Lo spike ha misurato, sui dati veri:

| lancio | fps min | fps medio | ms per costruire la sequenza |
|---|---|---|---|
| primo, asset non in cache | **13** | 60 | 6 |
| sei lanci successivi | 40 | 59 | 4–8 |
| 20 effetti simultanei | 40 | 59 | — |

I sei lanci dopo il preload hanno dato tutti **esattamente `40/59`**: valori identici a
quel punto non descrivono l'effetto, descrivono il canvas fermo a 60 Hz. Il `40` è il
primo tick dopo l'aggancio del contatore, non un calo.

**Conclusione: non esiste un costo di rendering. Esiste un costo di primo caricamento**,
una volta per asset — il `.webm` va scaricato dal server e decodificato.

Perciò su `canvasReady` il modulo raccoglie i file delle carte possedute dagli attori che
hanno un token nella scena — non tutti e 284 — e li passa a
`Sequencer.Preloader.preloadForClients`.

## 9. Test

`node --test`, sulla logica pura, senza Foundry:

- **`chiavi`** — la chiave da un'azione di compendio, il ripiego per l'homebrew, e il caso
  di una carta senza `compendiumSource`.
- **`regole`** — le 37 coppie danno un file; la forma esce giusta da `range` e `target`.
- **`decisione`** — contesto + mappa → descrittore; e i tre modi di non fare niente
  (nessuna riga, nessun bersaglio, nessuna origine).
- **`manifest`** — l'id di `module.json` coincide con `MODULE_ID` e gli `esmodules`
  puntano al file giusto. Lo stesso test che ha `arte-token`.
- **`template`** — ogni PART Handlebars ha una sola radice.

Il **multi-bersaglio ha un test suo**, perché è l'unica strada che lo spike non ha mai
percorso (§10.3).

## 10. Limiti dichiarati

Sono scelte, non difetti da riscoprire.

1. **Le carte nuove nascono mute.** È il prezzo delle regole-come-proposta: quando il
   system aggiunge carte, la mappa va rigenerata e le nuove restano vuote finché non si
   assegnano. Che succeda davvero è dimostrato: fra daggerheart 2.6.5 e 2.9.3 il compendio
   è passato da 189 a **210 carte** e da 9 a **10 domini** (`dread`), cioè +29 azioni e
   +5 coppie di regole, in tre versioni minori.
2. **Dipendenza da JB2A.** Chiavi dirette significa che senza `JB2A_DnD5e` la mappa non
   risolve nulla. Dichiarata in `relationships.requires`, così Foundry la impone
   all'installazione invece di lasciarla fallire in silenzio.
3. **Il multi-bersaglio non è mai stato provato.** Nello spike `bersagli` è rimasto **1 in
   tutti e sette i lanci**. Il descrittore è puro e un test lo copre subito, ma va anche
   visto con gli occhi prima di dichiararlo funzionante.
4. **Hope e Fear non cambiano l'effetto.** La v1 gioca sui bersagli non mancati e basta.
   Differenziare l'esito della duality è la prima estensione naturale — e sarebbe la cosa
   *daggerheart* che nessun altro modulo fa — ma non è di adesso.
5. **Armi e avversari restano fuori.** Stesso hook, filtro diverso: si aggiungono senza
   riscrivere niente.
6. **Si costruisce la macchina di pubblicazione, non si pubblica.** i18n `it`+`en` e
   workflow di release dal primo giorno, ma il registro foundryvtt.com si valuta dopo
   qualche settimana d'uso reale — stessa decisione presa per `arte-token`, e per la
   stessa ragione. La disponibilità dell'id `daggerheart-vfx` sull'anagrafe va verificata
   prima di pubblicare, non prima di scrivere.

## 11. Fatti verificati

Letti dal sorgente e dai dati veri l'8/9/2026, non dalla documentazione. Servono a non
riscoprirli.

**Gli hook del system** (daggerheart 2.9.3, prefisso `CONFIG.DH.id` = `daggerheart`;
identici anche in 2.6.5):

```
preUseAction / postUseAction          (action, config)
pre<Passo>Action / post<Passo>Action  un passo per campo del workflow
preTakeDamage / postCalculateDamage / postTakeDamage
preTakeHealing / postTakeHealing
```

**`config` contiene già tutto:** `source.actor` (uuid), `targetUuid`, `actionType`,
`hasRoll`, e soprattutto `config.targets` — array di
`{id, actorId, name, img, difficulty, evasion, saveResult, hitResult}` dove **`id` è l'id
del token sul canvas** e `hitResult.success` dice colpito o mancato. Origine, bersagli ed
esito arrivano pronti: non c'è niente da ricostruire.

**Gli id delle azioni sopravvivono alla copia dal compendio.** Verificato su Book of
Illiat e Mending Touch: identici fra pack 2.9.3 e schede del mondo
`five-banners-burning`. La carta copiata porta `_stats.compendiumSource`.

**`formatTarget` è identico fra 2.6.5 e 2.9.3**, quindi la forma di `config.targets` su cui
si regge tutto non si è mossa in tre versioni minori.

**Ma lo schema delle azioni sì.** In 2.9.3 un'azione ha tre campi in più — `baseAction`,
`originItem`, `triggers` — e il percorso del tipo di danno è cambiato: la lettura che in
2.6.5 dava `magical`/`physical` in 2.9.3 non trova niente. Il modulo non usa il tipo di
danno, quindi non ne è toccato, ma la lezione vale: **ogni fatto qui va riletto sul system
davvero installato**, non su una copia locale.

**Le API di Sequencer 4.2.3** (tutte presenti nel `dist`): `Database.entryExists`,
`Database.getEntry`, `Database.getPathsUnder`, `Database.searchFor`,
`Database.publicFlattenedEntries`, `Preloader.preloadForClients`,
`EffectManager.getEffects`, `DatabaseViewer`. E `rangeFind`/`isRangeFind` con la scala
`05ft…90ft`, che è ciò che rende automatica la lunghezza dei proiettili.

**JB2A_DnD5e 0.9.3** (versione free, 1,6 GB): **1693 effetti**. `scripts/jb2a_sequencer.js`
è un modulo ES puro, senza dipendenze da Foundry: si importa in Node e si elencano tutte
le chiavi vere. È il modo per verificare una chiave senza aprire Foundry.

**Versioni installate sulla VPS al 8/9/2026:** Foundry 14.367 · daggerheart **2.9.3** ·
sequencer 4.2.3 (verified 14) · JB2A_DnD5e 0.9.3 (verified 14). Compatibilità del modulo:
minimum 13, verified 14.

⚠️ Il Mac ha una copia ferma a daggerheart **2.6.5**, rimasta indietro da quando Foundry è
passato sulla VPS. Leggere il system da lì porta a numeri sbagliati: è già successo
scrivendo questa spec.

## 12. Fuori ambito

Armi, avversari, oggetti consumabili; differenziazione Hope/Fear; effetti persistenti
sugli attori; suoni; pubblicazione sul registro.
