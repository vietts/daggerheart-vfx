# Verifiche da fare dentro Foundry — daggerheart-vfx

Il modulo (branch `feat/modulo-vfx`) è stato scritto per intero da agenti: dieci task,
dodici cicli di review, 65 test automatici verdi. Nessuno l'ha mai visto girare dentro
Foundry — il server è l'installazione viva su cui giochi, e il deploy lo decidi tu.

Ogni revisore, lungo il lavoro, ha segnato le cose che solo una prova a video può
smascherare. Questo documento le raccoglie tutte in un solo posto, tolte quelle già
richiuse fuori da Foundry (le chiavi JB2A contro il database installato, la forma di
`config.targets`, l'assunzione sui `_id` delle azioni — tutte verificate a mano dal
controller e registrate nel ledger di lavoro). Sono ordinate per importanza: in cima le
prove che possono costringere a cambiare codice, in fondo le rifiniture.

## D&D 5e e API (branch `feature/dnd5e`)

Serve un mondo di prova con dnd5e 6.0.3, il PHB (`dnd-players-handbook`), Sequencer e JB2A.

1. **Identifier del PHB.** In console: `(await fromUuid("<uuid di Magic Missile del PHB>")).identifier`
   → `magic-missile`. Stessa prova per `fireball`, per la *Scimitar* e per tre privilegi della
   tabella (`sneak-attack`, `second-wind`, `bardic-inspiration`). Se un privilegio ha un
   identifier diverso, correggere la chiave in `lib/sistemi/dnd5e/assegnazioni.mjs`.
2. **Tipo d'attacco di un'arma a distanza del PHB**: `item.system.activities.contents[0].attack.type.value`
   su un arco. Se è vuoto, `tipoAttacco` lo ricava da `system.type.value` (deve finire in `R`).
3. **Area piazzata.** Usare *Fireball* da desktop piazzando l'area. In console, con un hook
   temporaneo `Hooks.once("dnd5e.postUseActivity", (a, u, r) => console.log(r))`, guardare se
   l'area è in `r.templates` o in `r.regions` e con quali campi. L'esplosione deve stare
   sull'area e coprire 40 ft. Se il punto è altrove, correggere `puntoArea`.
4. *Fire Bolt* da desktop con un bersaglio: il proiettile parte dal lanciatore al bersaglio.
5. *Burning Hands* e un soffio: il cono si tende dal lanciatore verso i bersagli senza deformarsi male.
6. L'arma di un mostro di `actors24`, usata dal GM su un PG: l'effetto parte.
7. La finestra in un mondo dnd5e: i gruppi, *Precompila*, *Prova*; il tempo di apertura (legge
   tutti i compendi: se supera qualche secondo, annotarlo).
8. `game.modules.get("daggerheart-vfx").api.gioca({ item, origine, bersagli })` dalla console del
   GM con id veri, in dnd5e e in Daggerheart; `api.haEffetto(item)` dalla console di un giocatore.
9. **Il mondo Daggerheart dopo il refactor**: una carta e un avversario si animano come prima,
   la finestra mostra le stesse righe e *Precompila* non cambia niente.
10. Il titolo del modulo in *Gestisci moduli* è *Tavolo VFX*.

## Come installare il modulo sul server

`deploy.sh` copia `module/` dentro la cartella `modules/` di un'installazione Foundry.
Da qualche commit non ha più valori di default: senza le tre variabili d'ambiente si
ferma prima di toccare la rete. Invocazione esatta (dalla radice del repo):

```sh
FOUNDRY_HOST=utente@host \
FOUNDRY_MODULES_DIR=/percorso/a/Data/modules \
FOUNDRY_CONTAINER=nome-container \
./deploy.sh
```

Lo script fa `rsync` di `module/` dentro `$FOUNDRY_MODULES_DIR/daggerheart-vfx/`, sistema
i permessi (il container gira come uid 1000) e stampa un promemoria.

**Alla prima installazione serve un riavvio del container perché il modulo compaia in
Manage Modules.** Lo script stesso lo ricorda in fondo all'output, con l'avviso che
conta: **non usare `docker restart`** — lascia un lock e il server sembra morto per
320 secondi. Ma il lock non si rilascia da solo nemmeno con `docker stop`, e aspettare non
serve (provato con 5 e con 15 secondi): va **rimosso fra lo stop e lo start, sempre**. Usare invece:

```sh
ssh utente@host 'docker stop nome-container; rmdir /opt/foundry/data/Config/options.json.lock 2>/dev/null; docker start nome-container'
```

Dopo il riavvio, attiva il modulo da Configuration → Manage Modules e vai alla sezione
"Come si usa" del README per il flusso Precompila → Prova.

---

## Le verifiche

### 1. Un solo lancio con più client connessi: l'effetto parte una volta sola?

Questa è la verifica più importante di tutte, e va fatta per prima perché **un client
solo non può rivelarla**. `daggerheart.postUseAction` è agganciato su ogni client
connesso. Se il system del gioco fa scattare l'hook solo sul client di chi ha agito, va
tutto bene: Sequencer trasmette da solo l'effetto a tutti. Ma se l'hook scatta anche sui
client degli altri giocatori, ognuno costruisce la propria `Sequence` e la trasmette a
sua volta — con quattro giocatori collegati si vedrebbero quattro missili sovrapposti
sullo stesso lancio.

**Come si fa:** apri due sessioni browser sullo stesso mondo (GM + un giocatore, o due
account), lancia una carta con effetto assegnato (es. Arcane Barrage) e conta quanti
effetti compaiono.

**Se va bene:** un solo effetto, indipendentemente da quanti client sono collegati.

**Se va male:** è l'unico difetto di questa lista che obbliga a cambiare la *forma*
dell'hook — serve una guardia che lasci costruire la Sequence solo al client di chi ha
giocato l'azione (es. confrontare l'utente che agisce con `game.user`).

### 2. L'hook si aggancia davvero, e `action.actor` esiste

Se l'oggetto `action` che il system passa all'hook non espone `.actor` (o `.actor` non
ha `getActiveTokens`), l'origine resta `null`, la decisione si ferma e **nessun
effetto parte mai, senza un solo messaggio in console**. È il modo più probabile in cui
il modulo può risultare completamente muto pur essendo corretto.

**Come si fa:** in console, temporaneamente:
`Hooks.on("daggerheart.postUseAction", (a, c) => console.log(a.actor, a.actor?.getActiveTokens?.()))`,
poi gioca una carta di dominio.

**Se va bene:** compaiono un attore e un array di token non vuoto.

**Se va male:** verifica anche l'ordine degli argomenti — se il system passa
`(config, action)` invece di `(action, config)`, o un solo argomento, l'handler legge
il campo sbagliato ed esce in silenzio. In quel caso l'entry point va corretto per
riflettere la firma vera dell'hook.

### 3. Il preload (ora limitato al GM) non duplica barre di progresso

Il preload al cambio scena chiamava `Sequencer.Preloader.preloadForClients` su ogni
client — con cinque persone collegate, 25 richieste e 5 barre di progresso per ogni
cambio scena. È stato corretto condizionando la chiamata a `game.user.isGM`: solo il GM
la innesca, ma continua a trasmettere a tutti (il meccanismo di `preloadForClients`
resta quello previsto dalla specifica).

**Come si fa:** con almeno due client collegati, cambia scena. Poi prova a far cambiare
scena a un giocatore mentre il GM resta altrove.

**Se va bene:** una sola barra di progresso per cambio scena (o nessuna, se non è il GM
a cambiarla), e i file arrivano comunque a tutti.

**Se va male / costo accettato:** se un giocatore apre da solo una scena diversa da
quella del GM, nessuno precarica per lui: torna lo scatto a bassi fps al primo lancio.
Non è un bug — è il costo esplicito della scelta "solo GM" — ma vale la pena misurare
se al tavolo capita abbastanza spesso da preferire un preload locale per client.

### 4. `azioniDiCarta` sui documenti vivi: il preload trova davvero dei file

La finestra di configurazione legge le azioni da oggetti "sorgente" (`toObject()`), il
preload le legge dai documenti vivi di scena. Un helper comune (`azioniDiCarta`) è
stato scritto apposta per unificare i due cammini, con rami per array, `Map`/
`Collection` e oggetto semplice — ma nessun test in Node può dire quale ramo scatta
davvero su un documento vivo di Foundry.

**Come si fa:** con la mappa configurata e almeno un personaggio con carte di dominio
in scena, ricarica la scena e guarda la console. In parallelo, per capire *quale* ramo
scatta: `game.actors.get(id).items.find(i => i.type === "domainCard").system.actions`
— controlla se è un oggetto semplice, un array o una `Collection`, e se `_id`/`type`/
`range`/`target` sono proprietà proprie (`Object.hasOwn`) o ereditate dal prototipo.

**Se va bene:** compare `[daggerheart-vfx] precaricati N effetti per questa scena` con
`N > 0`.

**Se va male:** `N` è 0 pur con la mappa piena — significa che il ramo scelto da
`azioniDiCarta` non è quello giusto per i documenti vivi di questo system, e va corretto
in `module/lib/catalogo.mjs`.

### 5. La chiave della mappa combacia davvero

La mappa che assegna gli effetti usa chiavi del tipo
`Compendium.daggerheart.domains.Item.xxxx::yyyy`. Se `_stats.compendiumSource` non è
presente sulla carta effettivamente in gioco (ad esempio perché è stata trascinata sulla
scheda invece che dal compendio), il codice ricade su un confronto per nome — un
ripiego più fragile.

**Come si fa:** in console, su una carta con effetto assegnato:
`chiave(datiAzione(action))` dentro l'handler dell'hook (o un log temporaneo), e
confrontala con la chiave salvata nel setting `mappa`.

**Se va bene:** le due chiavi combaciano carattere per carattere.

**Se va male:** la carta non troverà mai la sua riga nella mappa — l'effetto assegnato
in finestra non parte mai in gioco, mentre in finestra sembra tutto a posto.

### 6. Il world setting sopravvive a un F5 con le chiavi `::` intatte

Questo è il primo codice che *scrive* la mappa (le chiavi contengono punti e `::`). Va
confermato che dopo un `set`/`get` — e dopo un ricaricamento — le chiavi tornino
identiche, e non vengano espanse in oggetti annidati da qualche normalizzazione
automatica di Foundry.

**Come si fa:** assegna un effetto a una riga, salva, ricarica la pagina (F5), riapri la
finestra di configurazione e controlla che la riga sia ancora assegnata.

**Se va bene:** la riga mostra ancora file e forma salvati.

**Se va male:** ogni riga assegnata sparisce a ogni ricaricamento — il problema è nella
serializzazione delle chiavi, non nella logica di salvataggio, e va risolto prima di
qualunque altra correzione sulla finestra.

### 7. `rangeFind` sceglie la variante di distanza giusta

Passare il ramo padre di un percorso JB2A (invece di un file preciso) a `.file()` con
`.stretchTo()` deve far scegliere a Sequencer la variante corretta in base alla distanza
reale fra i due token.

**Come si fa:** lancia lo stesso effetto fra due token vicini e fra due token lontani
sulla stessa scena.

**Se va bene:** il missile/effetto ha lunghezza coerente in entrambi i casi, non appare
tronco né stirato.

**Se va male:** serve forzare un file preciso invece del ramo padre, oppure controllare
i parametri passati a `.stretchTo()`.

### 8. Le impostazioni si registrano, si vedono e si scrivono come previsto

Diversi comportamenti dell'API Foundry usata qui non sono mai stati eseguiti:

- `attivo` compare in Configure Settings con l'etichetta tradotta (non la chiave grezza
  `DHVFX.settings.attivo.name`); `mappa` **non** compare (è un setting nascosto).
- `game.settings.set(MODULE_ID, "mappa", {...})` sopravvive a un ricarico, e solo il GM
  può scriverlo (world scope, tipo Object).
- `game.settings.registerMenu` accetta una sottoclasse di `ApplicationV2` come `type`
  nella versione di Foundry installata (in versioni vecchie pretendeva una
  `FormApplication`), e il menu di configurazione compare solo al GM.

**Come si fa:** apri Configure Settings da GM e da un account giocatore; prova a
scrivere il setting `mappa` da console come giocatore.

**Se va bene:** tutto sopra si verifica com'è descritto.

**Se va male:** se `registerMenu` rifiuta il `type`, la finestra di configurazione non
si apre affatto — è il tipo di rottura che si vede subito, non silenziosa.

### 9. Il multi-bersaglio con forma "bersaglio" non è mai stato visto

Il ramo `bersaglio` di `costruisci` (una carta come Wild Flame su più nemici) è provato
nei test solo con un bersaglio; il multi-bersaglio è stato provato via test solo per la
forma `proiettile`. È l'unico percorso che nessuno spike ha mai eseguito davvero.

**Come si fa:** bersaglia tre nemici con una carta a forma `bersaglio` e lancia.

**Se va bene:** tre esplosioni (o effetto assegnato), una per token, senza sovrapporsi
sul primo bersaglio.

**Se va male:** probabile problema nel ciclo di `costruisci` per questo ramo specifico
— da correggere in `module/lib/scena.mjs`.

### 10. Bersaglio sparito durante la risoluzione: nessun effetto, nessun errore

Il codice ha una guardia esplicita ("niente Sequence vuote, né in gioco né sul bottone
Prova") aggiunta apposta per il caso in cui tutti i bersagli spariscono fra la decisione
e la risoluzione (token cancellato, scena cambiata a metà).

**Come si fa:** bersaglia un nemico con una carta a forma `bersaglio` o `proiettile`,
lancia la carta e cancella il token bersaglio nell'istante della risoluzione.

**Se va bene:** nessun effetto parte e nessun errore rosso compare in console.

**Se va male:** la guardia in `risolviToken` (`daggerheart-vfx.mjs`) non copre il caso
reale — probabilmente un timing diverso da quello previsto dal codice.

### 11. Il modulo non deve mai rompere la giocata

È la prova che conta di più per la fiducia nel modulo: anche quando qualcosa nella
mappa è configurato male, la carta deve risolversi normalmente (danni, messaggio in
chat) e il solo sintomo deve essere un log.

**Come si fa:** metti di proposito nella mappa una riga con un `file` inesistente e
lancia quella carta.

**Se va bene:** compare un `console.error` con prefisso `[daggerheart-vfx]`, e la carta
si risolve come se il modulo non ci fosse — danni applicati, messaggio in chat.

**Se va male:** un errore rosso non gestito interrompe la risoluzione della carta — vuol
dire che un cammino dell'handler è sfuggito al `try/catch`, il difetto più grave
possibile per questo modulo.

### 12. Il menu a tendina "forma" mostra il valore salvato

Era un difetto reale (la `<select>` non marcava mai l'opzione salvata, e la prima
modifica di una riga la riscriveva silenziosamente su `auto`), corretto con
`{{selectOptions ../forme selected=this.forma blank="—"}}`. Non è mai stato visto
renderizzato davvero.

**Come si fa:** premi Precompila, apri una riga con forma assegnata (es.
`proiettile`), poi modifica solo il campo `file` di quella riga e riapri la finestra.

**Se va bene:** la tendina mostra sempre la forma vera, prima e dopo la modifica.

**Se va male:** la tendina torna a mostrare `—` o `auto` dopo la modifica — vuol dire che
l'helper `selectOptions` non si comporta come documentato in questa versione di Foundry,
o che `righeDaCarte` non passa più `forma` come atteso.

### 13. Precompila non raddoppia l'effetto né le notifiche

Era un secondo difetto reale (i listener della finestra si riattaccavano a ogni
render, raddoppiando dopo ogni Precompila/Importa), corretto spostando l'aggancio a
`_onFirstRender`. Da confermare che la correzione tenga davvero nel ciclo di vita reale
dell'applicazione.

**Come si fa:** premi Precompila, poi premi ▶ su una riga: l'effetto parte una volta o
due? Premi Precompila una seconda volta: le notifiche sono una o due?

**Se va bene:** un solo effetto per clic, una sola notifica per Precompila, anche dopo
più aperture della finestra.

**Se va male:** ogni Precompila aggiunge un ascoltatore in più — sintomo di crescita
esponenziale dei listener, da correggere spostando l'aggancio a un punto che gira una
volta sola per istanza.

### 14. Il bottone ▶ Prova senza bersaglio mostra l'avviso giusto

Corretto per coprire sia `proiettile` sia `bersaglio`. Il messaggio ora è generico
("Questa forma ha bisogno di almeno un bersaglio (tasto T)"), non più specifico ai
proiettili.

**Come si fa:** senza bersagliare nulla, premi ▶ su una riga con forma `proiettile`, poi
su una con forma `bersaglio`, poi su una con forma `lanciatore` (o vuota/`auto`).

**Se va bene:** le prime due mostrano l'avviso; l'ultima gioca comunque l'effetto senza
bersagli.

**Se va male:** il bottone tace del tutto su una delle due forme — la guardia non copre
tutti i rami previsti.

### 15. Importare un JSON: tre scenari, non uno solo

`#importa` valida ora il contenuto (non solo che sia un oggetto), ma tre percorsi
diversi vanno provati separatamente:

**Come si fa e cosa aspettarsi:**
- **Annulla il dialogo** senza incollare nulla: nessun errore in console, la mappa resta
  intatta.
- **Incolla JSON del tutto malformato** o con tutte le righe invalide, es.
  `{"a": null, "b": 1}`: compare un messaggio di errore e **la mappa esistente non
  viene toccata** (riapri la finestra e riconta le righe assegnate per esserne sicuro).
- **Incolla un JSON misto** (righe valide e non): la notifica deve dire quante righe
  sono state scartate, e solo quelle valide entrano nella mappa.

**Se va male su uno qualunque dei tre:** vuol dire che la validazione in
`lib/catalogo.mjs` (`rigaValida`/`righeImportabili`) o il controllo `if (!n) return` in
`configurazione.mjs` non intercettano quel caso — rischio concreto: un incolla
sbagliato che cancella il lavoro fatto a mano.

### 16. Modifiche in rapida successione su righe diverse non si perdono

La corsa più probabile ("digiti un file, e senza premere Invio clicchi Precompila") è
stata chiusa mettendo tutte le scritture sulla mappa in un'unica coda seriale. Da
confermare col vero round-trip di rete di Foundry, non solo a livello di codice.

**Come si fa:** modifica il campo `file` di due righe diverse in rapida successione
(tab da un campo all'altro senza aspettare), poi chiudi e riapri la finestra. In
parallelo: digita un valore e, senza premere Invio, clicca subito Precompila.

**Se va bene:** entrambe le modifiche sono presenti, e la riga appena digitata non
sparisce dopo Precompila.

**Se va male:** una delle due scritture si perde — la coda (`#inCoda` in
`configurazione.mjs`) non sta serializzando come previsto, oppure `#esporta` (che legge
la mappa fuori dalla coda) sta esportando uno stato vecchio: prova anche a esportare
subito dopo aver digitato un valore senza premere Invio, e controlla che il file
scaricato contenga la riga appena scritta.

### 17. Modificare un campo e chiudere con Esc senza uscire dal campo

L'evento `change` che salva una riga non scatta se il campo con il fuoco viene rimosso
dal DOM prima che perda il fuoco — è il caso in cui l'utente preme Esc mentre sta ancora
scrivendo, invece di uscire dal campo con Tab o click altrove.

**Come si fa:** modifica un campo `file` o `forma`, poi chiudi la finestra con Esc senza
prima cliccare altrove o premere Tab.

**Se va bene:** la modifica è comunque salvata (o almeno un avviso dice che non lo è).

**Se va male:** la modifica sparisce senza nessun avviso — comportamento noto e non
corretto, da tenere a mente più che da riportare come sorpresa.

### 18. Token non collegati che condividono lo stesso attore base

Il preload deduplica le azioni per identità di riferimento dell'oggetto attore. Per
token collegati funziona sempre; per token *non* collegati che clonano lo stesso attore,
Foundry potrebbe restituire istanze distinte per ogni token.

**Come si fa:** in una scena con due o più token non collegati che condividono lo stesso
attore base, ricarica la scena.

**Se va bene:** il log di preload conta comunque i file corretti (anche se il lavoro di
raccolta si ripete internamente, la deduplica finale sui file assorbe la ridondanza).

**Se va male:** improbabile che rompa qualcosa — al massimo un preload leggermente più
lento del necessario. Da annotare, non da bloccare su questo.

### 19. La notifica di compendio assente non spamma

Se il compendio `daggerheart.domains` non esiste (system disattivato, pack rinominato,
mondo sbagliato), la finestra deve dirlo una volta sola, non ripetere l'errore a ogni
apertura o clic.

**Come si fa:** in un mondo senza quel compendio (o rinominandolo temporaneamente), apri
la finestra e premi Precompila e Importa più volte.

**Se va bene:** un solo errore, la finestra resta usabile (mostra 0 righe senza
esplodere).

**Se va male:** la notifica si ripete a ogni interazione — segno che la cache
dell'assenza del compendio non tiene.

### 20. Aspetto della finestra senza foglio di stile

Il modulo non spedisce nessun CSS e il manifest non ha una chiave `styles`. Il template
è scritto attorno a classi `dhvfx-*` che non esistono in nessun foglio di stile.

**Come si fa:** apri la finestra di configurazione con le 284 righe reali, prova il
filtro per dominio e il campo di ricerca.

**Se va bene:** la barra dei filtri sta su una riga leggibile, l'elenco scorre dentro la
finestra, e nascondere righe col filtro/ricerca funziona visivamente (non solo nel DOM).

**Se va male:** se la finestra è illeggibile o inutilizzabile senza stile, serve un
piccolo `.css` più una riga `styles` nel manifest — meglio deciderlo prima della prima
release che dopo, quando altre persone potrebbero già aver installato il modulo.

### 21. Due chiamate API di Foundry/Sequencer mai eseguite

Due punti del codice si affidano ad API che nessun test automatico può toccare:

- `Sequencer.DatabaseViewer.show()` (bottone 🔍 Sfoglia) — verifica che esista con quella
  firma nella versione di Sequencer installata (4.2.3 dichiarata).
- `foundry.utils.saveDataToFile` (bottone Esporta) — verifica che esista sotto quel
  namespace nella versione di Foundry installata (in v12 era un globale diretto).

**Come si fa:** clicca 🔍 su una riga e Esporta sulla finestra.

**Se va bene:** il primo apre il navigatore di Sequencer, il secondo scarica un file
JSON che si riapre.

**Se va male:** se 🔍 non fa niente, l'errore resta solo in console (è l'unica chiamata
del modulo fuori dalla rete di log/notifiche); se Esporta fallisce, va aggiornato il
riferimento all'API nella versione di Foundry in uso.

### 22. Il workflow di release non è mai stato eseguito (non è dentro Foundry, ma va fatto prima di pubblicare)

Lo script che riscrive `version`/`manifest`/`download` nel manifest (`tools/manifest-release.mjs`)
ha un bug noto ma non corretto: il controllo che decide se lo script gira da riga di
comando confronta un percorso "reale" (`import.meta.url`) con uno che può non esserlo
(`process.argv[1]`) — se il checkout vive sotto un symlink, lo script esce senza
riscrivere nulla e la release parte con un manifest non aggiornato, senza errori. Sui
runner GitHub standard non dovrebbe succedere, ma non è mai stato verificato con un tag
vero.

**Come si fa:** prima del primo rilascio reale, crea un tag di prova (`v0.0.1-test` o
simile) su un repository usa-e-getta, lascia girare `.github/workflows/release.yml`,
poi apri `module.zip` e il `module/module.json` dell'artefatto pubblicato.

**Se va bene:** `version` è quella del tag, `manifest` e `download` puntano al repository
vero.

**Se va male:** il manifest nell'artefatto ha ancora `version: "0.1.0"` o l'owner
sbagliato — significa che il guard del ramo CLI ha fallito in silenzio, e va sostituito
con `realpathSync(process.argv[1])` o `import.meta.filename`.

---

## Limiti noti e non risolti

Cose lasciate deliberatamente così, registrate nel ledger di lavoro. Non richiedono
un'azione prima della prova in Foundry, ma vale la pena saperle:

- **L'indirizzo del server resta nella storia di git e nel documento di piano.**
  `deploy.sh` oggi non contiene più nessun host (viene da variabili d'ambiente), ma
  `docs/superpowers/plans/2026-09-08-daggerheart-vfx.md` cita ancora l'IP e l'utente
  root del server Foundry in tre punti, e la storia dei commit precedenti alla
  parametrizzazione lo porta comunque in `git log -p`. Oggi non espone nulla perché il
  repo non ha un remote pubblico: va risolto (pulizia del documento, eventuale riscrittura
  della storia) **prima**, non dopo, di dare al repository un remote pubblico su GitHub.
- **Importare `{}` è ora rifiutato.** È l'effetto collaterale voluto della validazione
  aggiunta contro gli incolla malformati: non si può più azzerare la mappa dalla
  finestra con un import vuoto, e il messaggio d'errore non lo spiega. Per svuotare la
  mappa serve la console (`game.settings.set(...)`). Da rivedere al primo uso vero se
  serve un modo esplicito di azzerarla.
- **`getActiveTokens()?.[0]` prende un token qualunque dell'attore.** Sbagliato solo per
  un attore *collegato* con più token piazzati nella stessa scena — caso raro per i
  personaggi giocanti. Per gli attori non collegati (NPC, evocazioni) il problema non
  esiste, perché l'attore sintetico appartiene già al suo token. Lasciato apposta:
  nessuna fonte migliore del token giusto è disponibile nei dati che l'hook riceve.
- **Cinque uscite silenziose indistinguibili.** L'handler dell'azione ha più punti in
  cui "non fa niente" (modulo disattivato, non è una carta di dominio, nessuna riga
  trovata, origine non risolta, bersagli svuotati) e nessuno logga quale sia scattato.
  Il rimedio giusto è un `console.debug` dietro un interruttore, ma si decide dopo la
  prima serata al tavolo, con il sintomo reale in mano — non prima.
- **La stringa `"domainCard"` è scritta a mano in più punti** invece di vivere in una
  costante unica in `costanti.mjs`. Cosmetico, non un rischio di comportamento.
- **Tre casi limite di `lib/catalogo.mjs` sono gestiti dal codice ma non coperti da
  test** (carta senza azioni, azione senza chiave ricavabile, riga con `file` ma senza
  `forma` davanti alla guardia di precompila). Il comportamento è corretto; manca solo
  la prova scritta.
- **Filtro, ricerca e posizione di scorrimento si perdono dopo Precompila o Importa.**
  Sono gli unici due momenti in cui la finestra si ridisegna da zero, e in entrambi i
  casi l'utente si aspetta comunque che la lista si ricostruisca: lasciato così.
- **Cambiare solo la forma su una riga senza `file` non salva nulla e non lo dice.** La
  riga resta vuota al render successivo senza un avviso. Economico da correggere in
  futuro, non urgente.
- **Il guard del ramo a riga di comando di `tools/manifest-release.mjs` non regge sotto
  un checkout con symlink** (vedi verifica 22): non morde sui runner GitHub standard, ma
  è lo stesso genere di guasto silenzioso che il resto del lavoro ha cercato di
  eliminare altrove. Segnalato, non corretto.
