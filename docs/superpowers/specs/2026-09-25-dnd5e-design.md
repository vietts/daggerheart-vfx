# daggerheart-vfx per D&D 5e, e un'API per il Phone Companion — design

Estende il modulo a D&D 5e (dnd5e 6.x, contenuti del PHB 2024) e gli dà un'API pubblica,
così che un altro modulo possa far partire un effetto senza che nessuno usi l'oggetto in
Foundry.

Data: 2026-09-25 · Stato: design approvato in conversazione, spec da rivedere

---

## 1. Perché

Al tavolo i dadi restano fisici. Il Phone Companion vuole chiudere il giro così: il
giocatore muove il token dal telefono, dice cosa fa, tira i dadi veri, il GM dice che è
riuscito, e il giocatore tocca il nome dell'incantesimo o dell'azione sul telefono. Sullo
schermo grande l'effetto parte dal suo token verso i bersagli scelti sul telefono.

Due cose mancano oggi:

1. **Un comando esterno.** L'effetto parte solo da `daggerheart.postUseAction`, cioè
   quando qualcuno usa l'azione in Foundry. Dal telefono non si usa niente: il tiro è
   fisico. Serve una porta che riceva "questo oggetto, da questo token, verso questi
   bersagli" e giochi l'effetto.
2. **D&D.** Il modulo conosce solo Daggerheart. Per D&D i moduli di terzi valutati non
   vanno bene: Automated Animations è archiviato da gennaio 2025 e verificato fino a v12;
   Make it Shiny è mantenuto ma protetto, senza un'API documentata, e il suo autocast
   scatta solo usando l'oggetto dalla scheda.

Il lato telefono (carosello dei bersagli, pulsante ▶, socket) è un secondo progetto, nel
repo del companion. Questa spec definisce solo l'API che quel progetto chiamerà.

## 2. Le decisioni

Prese con Francesco il 25/9/2026.

| | Decisione | Perché |
|---|---|---|
| **Perimetro D&D** | Incantesimi, armi, privilegi di classe con un'attivazione, azioni dei mostri | L'attacco con l'arma è l'azione più frequente al tavolo; i privilegi (Punizione divina, Attacco furtivo) sono il momento in cui un effetto si nota. |
| **Innesco** | L'effetto parte **anche** quando un oggetto viene usato in Foundry, come in Daggerheart. L'API è una seconda porta, non l'unica | Coerente con Daggerheart; i mostri del GM si animano senza lavoro in più. |
| **Identità del modulo** | L'id resta `daggerheart-vfx`; cambiano titolo ("Tavolo VFX") e descrizione | Le mappe già salvate nel mondo Daggerheart restano dove sono; `deploy.sh` e il link del manifest non cambiano. |
| **Architettura** | Un adattatore per sistema, il nucleo invariato | Vedi §3. |
| **Contenuti D&D** | PHB 2024 (`dnd-players-handbook` 2.2.0). I mostri vengono da `dnd5e.actors24` | È il libro che Francesco usa ed è completo. |

## 3. Architettura

Il nucleo di oggi non sa niente del sistema, tranne tre punti: come si riconosce
un'azione, quali righe mostra la finestra, come si precompila. Quei tre punti, più l'hook
da ascoltare, diventano un **adattatore**.

```
module/
  daggerheart-vfx.mjs        sceglie l'adattatore, registra hook e API
  api.mjs                    gioca() e haEffetto()                          ← nuovo
  lib/
    decisione.mjs            invariato, più la forma `area`
    scena.mjs                invariato, più la forma `area`
    preload.mjs              riceve la funzione chiave dall'adattatore
    costanti.mjs             FORME aggiunge "area"
    sistemi/
      index.mjs              adattatorePer(systemId) → adattatore | null   ← nuovo
      daggerheart/           chiavi, catalogo, regole, assegnazioni*, contesto — spostati
      dnd5e/                 chiavi, catalogo, regole, assegnazioni, contesto ← nuovo
  apps/configurazione.mjs    legge compendi e gruppi dall'adattatore
  monks.mjs                  invariato: non dipende dal sistema
```

### 3.1 Il contratto di un adattatore

Tutto puro: nessun globale di Foundry, come oggi in `lib/`.

```js
{
  id: "dnd5e",
  hook: "dnd5e.postUseActivity",
  /* Dagli argomenti dell'hook, più i bersagli dell'utente passati dal guscio. */
  daHook(args, bersagliUtente) → { item, azioneId, bersagli:[{id, colpito}], haTiro, area } | null,
  /* Identità. */
  datiAzione(item, azioneId) → dati,
  chiave(dati) → string | null,
  /* Le azioni animabili di un documento: finestra e preload. */
  azioniDi(doc) → dati[],
  /* Da quali compendi la finestra legge, e come raggruppa. */
  compendi: { Item: [tipi…], Actor: [tipi…] },
  /* Precompilazione. */
  proposta(dati) → { file, forma } | null
}
```

`daggerheart-vfx.mjs` fa `adattatorePer(game.system.id)`. Con un sistema non supportato
il modulo non registra hook né preload e l'API restituisce sempre `false`.

**Lo spostamento del codice Daggerheart non cambia comportamento.** I test esistenti
passano invariati, a parte i percorsi di import. È il controllo che il refactor non ha
rotto niente, e va fatto prima di scrivere una riga di D&D.

## 4. D&D: identità e righe

### 4.1 La chiave

```
dnd5e.<tipo>.<identifier>

dnd5e.spell.magic-missile
dnd5e.weapon.scimitar
dnd5e.feat.divine-smite
```

`identifier` è il getter `item.identifier` di dnd5e 6.0.3: `system.identifier`, o lo slug
del nome se manca. Verificato sui sorgenti del system (§9): *Magic Missile* ha
`identifier: magic-missile` sia nell'SRD 2014 sia nell'SRD 2024, anche se gli `_id` del
documento e dell'activity sono diversi; la *Scimitar* del Goblin Warrior ha `identifier:
scimitar` e `type.baseItem: scimitar`.

La chiave è **per oggetto, non per activity**, perché gli id delle activity cambiano fra
SRD 2014, PHB e copie di mondo. Conseguenze accettate:

- la *Scimitarra* è una riga sola per ogni PG e mostro che la impugna;
- il *Morso* è una riga sola per lupo, drago e ratto;
- un oggetto con più activity (*Arma spirituale*: evoca e attacca) ha un effetto solo.

Un oggetto homebrew senza `system.identifier` usa lo slug del nome: rinominarlo fa perdere
l'assegnazione, come le carte homebrew di Daggerheart.

### 4.2 Cosa è animabile

Un oggetto di tipo `spell`, `weapon`, `feat` o `consumable` con almeno un'activity di tipo
`attack`, `damage`, `heal`, `save`, `cast`, `summon` o `utility`. Armature, strumenti e
oggetti senza activity restano fuori.

### 4.3 Le righe della finestra

Da tutti i compendi di Item (PHB, SRD, copie di mondo) e dagli oggetti dentro gli attori
`npc` dei compendi di Actor. Le righe con la stessa chiave si fondono: vince la prima, e i
compendi di mondo e del PHB vengono prima di quelli del system.

Il campo `dominio`, che oggi raggruppa per dominio e tier, per D&D vale:
*Trucchetti*, *Incantesimi 1°…9°*, *Armi*, *Privilegi*, *Mostri*, *Consumabili*.

## 5. D&D: precompilazione e forme

### 5.1 Tre livelli

Stesso principio di Daggerheart: la tabella vince sulla regola, le scelte a mano vincono
su tutto, Precompila non sovrascrive.

1. **Tabella per chiave**, scelta oggetto per oggetto dal testo, come `assegnazioni.mjs`.
   Copre gli incantesimi e i privilegi del PHB con un effetto dedicato o vicino in JB2A
   Free: *Fire Bolt, Fireball, Magic Missile, Guiding Bolt, Cure Wounds, Bless, Sleep,
   Shatter, Misty Step, Thunderwave, Eldritch Blast, Ray of Frost, Sacred Flame, Toll the
   Dead, Burning Hands, Cone of Cold, Lightning Bolt, Chain Lightning, Call Lightning,
   Moonbeam, Spirit Guardians, Spiritual Weapon, Arms of Hadar, Black Tentacles, Darkness,
   Web, Wall of Fire, Flaming Sphere, Scorching Ray, Hunter's Mark, Divine Smite, Sneak
   Attack, Flurry of Blows, Bardic Inspiration* e gli altri che la ricerca nel database
   trova. L'elenco degli identifier si prende dai sorgenti SRD 2024 del system; gli
   incantesimi solo-PHB ricadono sulle regole.
2. **Regole per gli incantesimi fuori tabella**, da tipo di danno × forma:

   | Danno | proiettile | area | bersaglio |
   |---|---|---|---|
   | fire | `fire_bolt` | `fireball` | `flames` |
   | cold | `ray_of_frost` | `cone_of_cold` | `ice_spikes` |
   | lightning | `lightning_bolt` | `lightning_ball` | `lightning_strike` |
   | radiant | `guiding_bolt` | `sacred_flame` | `sacred_flame` |
   | necrotic | `toll_the_dead` | `arms_of_hadar` | `toll_the_dead` |
   | force | `magic_missile` | `explosion` | `eldritch_blast` |
   | thunder | `soundwave` | `thunderwave` | `shatter` |
   | … | | | |

   La cura va su `cure_wounds` / `healing_generic`. Senza danno né cura, per scuola:
   `magic_signs.rune.<scuola>`. La tabella completa e le varianti di colore le fissa il
   piano, cercando nel database; qui conta il meccanismo.
3. **Armi per `baseItem`** (scimitarra → `scimitar`, arco → `arrow`, balestra → `bolt`,
   fionda → `bullet`, …), e per nome gli attacchi naturali dei mostri: *Bite* → `bite`,
   *Claw* → `claws`, *Unarmed Strike* → `unarmed_strike`, *Breath* → `breath_weapons`.

Ogni file di tabella e regole è verificato contro `test/fixtures/jb2a-free-0.9.3.txt`,
come oggi.

### 5.2 La forma `area`

*Palla di fuoco* resa come proiettile verso tre goblin sono tre esplosioni sbagliate.
`area` gioca **un** effetto:

- sull'area piazzata, se l'oggetto è stato usato in Foundry e ne ha piazzata una;
- altrimenti al **centro dei bersagli** (il caso del telefono);
- altrimenti sul lanciatore (*Onda tonante* senza bersagli).

La dimensione viene dalla sagoma dell'incantesimo: sfera, cilindro e raggio → diametro
`2 × size`; cubo → `size`. Si converte in caselle con la `distance` della griglia della
scena.

Il descrittore porta i dati che servono, restando puro:

```js
{ file, forma: "area", origine, bersagli, area: { diametro: 40, unita: "ft", punto: {x, y} | null } }
```

Il centro dei bersagli si calcola in `scena.mjs`, che ha i token veri. `area` si aggiunge
anche a `FORME`, e quindi è sceglibile nella finestra anche per Daggerheart.

### 5.3 La forma dedotta per D&D

In ordine, la prima che si applica:

| Condizione | Forma |
|---|---|
| sagoma cono o linea | `proiettile` (il file va teso dal lanciatore verso i bersagli) |
| sagoma sfera, cilindro, cubo, raggio | `area` |
| gittata `self` | `lanciatore` |
| activity `attack` a distanza | `proiettile` |
| activity `attack` in mischia | `bersaglio` |
| altrimenti | `auto` |

Campi letti: `system.target.template.type` e `.size`, `system.range.units`,
`activity.type`, `activity.attack.type.value` (`melee` / `ranged`),
`activity.damage.parts[].types`, `system.school`, `system.type.baseItem`.

## 6. L'hook D&D

`dnd5e.postUseActivity(activity, usageConfig, results)` scatta quando l'oggetto viene
usato, prima del tiro per colpire. L'effetto parte subito, con i bersagli di chi lo usa
(`game.user.targets`, passati dal guscio all'adattatore) e **tutti contano come colpiti**.

Filtrare i mancati vorrebbe dire aspettare il tiro d'attacco e confrontarlo con la CA. Si
rimanda: al tavolo di Francesco anche il GM tira spesso con i dadi veri.

L'area piazzata, se c'è, viene da `results`. In dnd5e 6 su Foundry v14 va verificato se
arriva come template o come region (§9): l'adattatore legge il centro da quello che trova,
e se non trova niente si ricade sul centro dei bersagli.

## 7. L'API

Esposta in `game.modules.get("daggerheart-vfx").api` al `ready`.

```js
api.gioca({ item, azioneId, origine, bersagli })  → Promise<boolean>
api.haEffetto(item, azioneId)                      → boolean
```

- `item`: il documento (carta di dominio, incantesimo, arma, privilegio). `azioneId` è
  l'id dell'azione Daggerheart; in D&D si ignora (la riga è per oggetto). In Daggerheart,
  se manca, vale la prima azione della carta che ha una riga.
- `origine`: id del token di chi agisce. `bersagli`: id dei token bersaglio.
- `gioca` segue la stessa catena dell'hook, con `haTiro: false`: tutti i bersagli contano
  come colpiti, cioè il caso "il GM ha detto che sei riuscito". Va chiamata su un client
  che ha il canvas sulla scena dei token (lo schermo del GM). Senza canvas, senza riga,
  senza token d'origine in scena, restituisce `false` e non gioca niente.
- `haEffetto` non ha bisogno del canvas: la mappa è un setting di mondo, leggibile da ogni
  client. Serve al telefono per mostrare il ▶ solo dove c'è un effetto.

Chi chiama l'API è responsabile di chi può farlo: il companion controlla sul client del
GM che l'utente possieda l'attore, prima di chiamare `gioca`.

## 8. Errori e test

**Errori.** La regola di oggi resta: un effetto non blocca mai il gioco. L'hook e `gioca`
catturano tutto e lo scrivono in console col prefisso del modulo.

**Test** (`node --test`, senza Foundry):

- tutti i test Daggerheart esistenti, invariati salvo i percorsi di import;
- adattatore D&D su oggetti costruiti dai sorgenti di dnd5e 6.0.3 (Magic Missile SRD 2014 e
  2024, Fireball, Goblin Warrior con Scimitar e Shortbow): chiave, animabile sì/no, gruppo,
  forma dedotta;
- regole e tabella D&D: ogni file esiste in JB2A Free; ogni chiave di tabella ha la forma
  `dnd5e.<tipo>.<identifier>`;
- forma `area`: diametro dalla sagoma, ripieghi (area piazzata → centro bersagli →
  lanciatore);
- `adattatorePer`: dnd5e, daggerheart, e `null` per un altro sistema;
- manifest: entrambi i sistemi dichiarati.

**Verifiche dentro Foundry**, aggiunte a `docs/verifiche-in-foundry.md`:

1. Gli oggetti del PHB hanno l'identifier atteso (`magic-missile`, `fireball`, `scimitar`).
2. Usare *Fire Bolt* da desktop con un bersaglio: il proiettile parte.
3. Usare *Fireball* da desktop piazzando l'area: l'esplosione è sull'area e grande 40 ft.
4. L'arma di un mostro di `actors24`, usata dal GM: l'effetto parte.
5. La finestra in un mondo dnd5e: gruppi, Precompila, Prova.
6. `api.gioca(...)` dalla console del GM con id di token veri, per D&D e Daggerheart.
7. Il mondo Daggerheart dopo il refactor: le carte e gli avversari si animano come prima.

Serve un Foundry di prova con dnd5e 6.0.3 e il PHB. Quello locale sul Mac al 25/9 si ferma
sulla verifica della licenza: va sistemato, oppure si usa un mondo di prova separato sul
VPS.

## 9. Fatti verificati e da verificare

Verificati il 25/9/2026 sui sorgenti `foundryvtt/dnd5e` al tag `release-6.0.3`:

- `Item5e#identifier` restituisce `system.identifier` o `formatIdentifier(name)`.
- `packs/_source/spells/1st-level/magic-missile.yml` e `spells24/…/magic-missile.yml`:
  `identifier: magic-missile` in entrambi; `_id` e id dell'activity diversi.
- `spells24/3rd-level/fireball.yml`: `target.template` `{ type: sphere, size: '20' }`,
  activity `save` con `damage.parts[].types: [fire]`, `school: evo`.
- `actors24/fey/goblin-warrior.yml`: *Scimitar* con `identifier: scimitar`,
  `baseItem: scimitar`, activity `attack`.
- L'hook è `Hooks.call("dnd5e.postUseActivity", activity, usageConfig, results)`.
- Sul VPS: `dnd-players-handbook` 2.2.0 (compendi `spells`, `equipment`, `feats`,
  `classes`, `actors`), dnd5e 6.0.3, Sequencer 4.2.3, JB2A Free 0.9.3.

Da verificare dentro Foundry, prima di contarci:

- che gli oggetti del PHB portino `system.identifier` (i pacchetti sono compressi e non si
  leggono da fuori; se manca, lo slug del nome inglese dà lo stesso valore);
- in che forma `results` di `postUseActivity` porta l'area piazzata su v14;
- `activity.attack.type.value` su un'arma a distanza del PHB.

## 10. Limiti dichiarati

1. **Mancati non filtrati in D&D.** L'effetto parte all'uso, prima del tiro.
2. **Un effetto per oggetto.** Stessa scimitarra per tutti, stesso morso per il drago e il
   ratto. Un override per mostro si aggiunge dopo, se serve.
3. **Incantesimi solo-PHB sulle regole.** La tabella si costruisce sull'SRD 2024; il resto
   riceve l'effetto del suo tipo di danno o della sua scuola, da ritoccare con Prova.
4. **JB2A Free.** Alcuni incantesimi avranno un effetto di famiglia invece di uno dedicato.

## 11. Fuori ambito

- Il lato telefono: carosello, marcatore del bersaglio sullo schermo grande, ▶, socket,
  consumo di slot e Speranza. È il progetto successivo, nel repo del companion.
- Filtrare i mancati in D&D aspettando il tiro d'attacco.
- Override per singolo mostro o per singola activity.
- Pubblicazione su foundryvtt.com.
