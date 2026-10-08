# Tavolo VFX

Effetti visivi per Daggerheart e D&D 5e su Foundry VTT. L'id del modulo resta `daggerheart-vfx`.

Quando un personaggio usa un'azione di una carta di dominio, o un avversario usa il suo
attacco o una sua feature, il modulo gioca l'effetto che gli hai assegnato: un proiettile teso dal lanciatore al bersaglio, un'esplosione appoggiata
sul bersaglio, o un effetto su chi lancia.

> **Beta.** Provato al tavolo su Foundry 14 con Daggerheart 2.10 e dnd5e 6.0. Segnala i
> problemi, e gli effetti che non ti convincono, nelle [Issues](https://github.com/vietts/daggerheart-vfx/issues).

## Installazione

In Foundry: *Moduli aggiuntivi → Installa modulo*, incolla nel campo **URL del manifest**:

```
https://github.com/vietts/daggerheart-vfx/releases/latest/download/module.json
```

Foundry propone di installare anche Sequencer e JB2A se mancano. Gli aggiornamenti arrivano
da Foundry come per gli altri moduli.

## Cosa serve

- Foundry VTT 13 o 14
- Il system [Daggerheart](https://github.com/Foundryborne/daggerheart) 2.9.0 o più recente,
  oppure il system **dnd5e** 6.0 o più recente
- I moduli **Sequencer** e **JB2A** (la versione gratuita basta: 1693 effetti)

## Primo avvio

1. Installa il modulo e accendilo nel mondo, insieme a Sequencer e JB2A.
2. Apri la finestra: icona **ingranaggio** nella barra laterale → **Configura impostazioni**
   → scheda **Impostazioni dei moduli** → sezione *Daggerheart VFX* → **Apri la finestra**.
   È un pulsante dentro quella scheda, non una voce di menù: è la parte che si salta con
   l'occhio.
3. Premi **Precompila**. Assegna un effetto a tutte le 284 azioni del compendio, scelto carta
   per carta dal suo testo: il muro di fuoco brucia, il teletrasporto sparisce, la cura cura.
4. Correggi quelle che non ti convincono, col metodo qui sotto.

Le scelte sono fatte leggendo le carte, non guardando gli effetti a video: aspettati di dover
ritoccare qualche riga. Le carte che la tabella non conosce (homebrew, uscite dopo) ricevono
l'effetto generico del loro dominio.

Le assegnazioni fatte a mano vincono sempre — *Precompila* non sovrascrive una riga che hai
cambiato tu, quindi lo puoi ripremere senza paura. Aggiorna invece le righe rimaste
all'effetto generico del dominio: se avevi precompilato con una versione vecchia del modulo,
ripremilo e ottieni le scelte per carta senza perdere le tue correzioni.

## Gli avversari

La finestra elenca, dopo le carte, gli avversari di tutti i compendi di attori: quello del
system e le copie di mondo, per esempio un compendio con i token già disegnati. Lo stesso
avversario in due compendi è una riga sola, e la sua assegnazione vale per i token presi da
uno qualunque dei due: la riga si riconosce dall'id dell'attore d'origine, non dal compendio.
Il filtro in alto li raggruppa per tier (*avversari T1*… *T4*).

## D&D 5e

In un mondo dnd5e la finestra elenca incantesimi, armi, privilegi, consumabili e le azioni
dei mostri, raggruppati (*trucchetti*, *incantesimi 1°…9°*, *armi*, *privilegi*, *mostri*,
*consumabili*). Una riga vale per l'oggetto, non per chi lo usa: la *Scimitarra* è una sola
per tutti i goblin e tutti i PG. La chiave è `dnd5e.<tipo>.<identifier>`.

**Precompila** usa prima una tabella scelta oggetto per oggetto (Palla di fuoco, Dardo
incantato, Cura ferite, Attacco furtivo…), poi regole per tipo di danno e forma, per arma e
per scuola.

La forma **area** gioca un effetto solo: sull'area piazzata se l'incantesimo ne ha
piazzata una, altrimenti al centro dei bersagli, grande quanto la sagoma dell'incantesimo.

L'effetto parte quando l'oggetto viene usato, prima del tiro: i mancati non si filtrano.

La finestra legge solo i compendi: un incantesimo, un'arma o un mostro homebrew che vive solo
nelle cartelle di mondo (non in un compendio) non ha una riga in finestra, e *Precompila* non
lo tocca. Si anima comunque in gioco se gli si assegna una riga con la sua chiave a mano —
per esempio importando una mappa da un altro mondo dove quell'oggetto è stato importato in
un compendio.

Un'arma da mischia lanciabile (pugnale, giavellotto) attaccata con l'activity da mischia
mostra l'effetto da mischia: la chiave è per oggetto, e l'activity "principale" che sceglie
tipo e sagoma è la prima fra quelle animabili, di solito quella da mischia.

## Cambiare un effetto

Ogni riga ha due comandi: **🔍** apre il navigatore del database di Sequencer, dove cerchi e
vedi l'anteprima, e **▶** gioca l'effetto sul token che hai selezionato, senza salvare nulla.
Prova prima di tenere: è l'unico modo sensato di scegliere fra 1693 effetti.

### La stringa dell'effetto

Il navigatore ti copia la chiave esatta. Una sola avvertenza, ma è quella che morde.

Gli effetti "da qui a lì" esistono in cinque lunghezze:

```
jb2a.magic_missile.purple.05ft
jb2a.magic_missile.purple.15ft
jb2a.magic_missile.purple.30ft   ← copiando questa, il missile sarà sempre lungo 30 piedi
```

**Togli l'ultimo pezzo** e scrivi `jb2a.magic_missile.purple`: così Sequencer misura la
distanza reale fra i due token e sceglie da solo il file giusto. Sono 87 rami su 1693, e li
riconosci perché finiscono in `05ft`, `15ft`, `30ft`, `60ft`, `90ft`. Tutto il resto —
esplosioni, aure, cure — si copia intero.

Per cercare senza aprire il navigatore, da console:

```js
Sequencer.Database.searchFor("jb2a.lightning")
```

### La forma

Il menù accanto al campo dice *come* va reso il file. Sbagliarlo è il motivo più comune per
cui un effetto sembra non funzionare o esce deformato — un'esplosione con forma
`proiettile` viene stirata fra due token.

| Se il file è… | forma |
|---|---|
| un proiettile (quelli con le lunghezze) | `proiettile` |
| un'esplosione, una nube, qualcosa che avviene **sul nemico** | `bersaglio` |
| uno scudo, un'aura, una cura, qualcosa che avviene **su chi lancia** | `lanciatore` |
| non sei sicuro | `auto` — se c'è un bersaglio ci va sopra, altrimenti resta sul lanciatore |

### Portare via la tua mappa

**Esporta** scarica un JSON con tutte le assegnazioni, **Importa** lo rimette. È il modo per
spostarla fra mondi o passarla a qualcun altro.

## Effetti sulle tile di Monk's

Con **Monk's Active Tile Triggers** attivo, fra le azioni di una tile compare il gruppo
*Daggerheart VFX* con l'azione **Effetto JB2A**:

- **Effetto**: la chiave Sequencer, come nella finestra (proiettili senza la lunghezza).
- **Su chi**: i token scelti col selettore di Monk's (cliccati sulla mappa, chi ha attivato
  la tile, i selezionati, i risultati dell'azione prima) oppure **i bersagli** (tasto T) di
  chi attiva la tile.
- **Forma**: *sopra i token*, oppure *proiettile verso* altri token o i bersagli.
- **Tinta** e **scala**, facoltative.

L'azione passa i suoi token a quella dopo, quindi "fumo nero sui cultisti, poi mostrali con
dissolvenza" sono due azioni in fila: *Effetto JB2A* sui token scelti, poi *Mostra/Nascondi*
sui risultati precedenti.

## API

Per far partire un effetto da un altro modulo (il Phone Companion lo fa dal client del GM):

```js
const api = game.modules.get("daggerheart-vfx").api;
api.haEffetto(item, azioneId);                        // c'è un effetto? funziona senza canvas
await api.gioca({ item, azioneId, origine, bersagli }); // true se l'ha giocato
```

`origine` e `bersagli` sono id di token della scena. `azioneId` serve solo in Daggerheart
(l'azione della carta); senza, vale la prima che ha un effetto. Tutti i bersagli contano
come colpiti. `gioca` va chiamata su un client con il canvas aperto sulla scena; il
controllo su chi può chiamarla è di chi chiama. Nessuna delle due solleva: un problema
diventa `false` e un messaggio in console.

Per un avversario Daggerheart, `item` è l'attore dell'avversario, non una sua feature presa
da sola: una feature senza l'attore intorno non viene riconosciuta. `azioneId` sceglie fra
l'attacco base e le sue feature.

## Copiare il modulo su un server

`deploy.sh` copia `module/` dentro la cartella dei moduli di un'installazione Foundry. Il
server non è scritto nel repo: le tre variabili sono obbligatorie e senza di loro lo script
si ferma prima di toccare la rete.

```sh
FOUNDRY_HOST=utente@host \
FOUNDRY_MODULES_DIR=/percorso/a/Data/modules \
FOUNDRY_CONTAINER=nome-container \
./deploy.sh
```

**Quando serve un riavvio di Foundry.** Per il codice no: basta un F5. Serve invece la prima
volta che installi il modulo, e ogni volta che cambiano le voci `esmodules` o `styles` del
manifest — Foundry legge i manifest all'avvio, quindi un foglio di stile aggiunto a caldo
non viene nemmeno richiesto dalla pagina.

Su un'installazione in Docker, **il lock di Foundry non si rilascia da solo** e aspettare non
serve: va rimosso fra lo stop e lo start, altrimenti il server riparte, trova la directory
occupata e muore in silenzio.

```sh
docker stop foundry
rmdir /percorso/a/Config/options.json.lock 2>/dev/null
docker start foundry
```

## Limiti dichiarati

- Copre le **carte di dominio** e gli **avversari** (attacco base e feature con un'azione),
  non le armi dei personaggi, non gli ambienti.
- Le carte e gli avversari aggiunti dopo l'ultima precompilazione nascono senza effetto: va
  ripremuto *Precompila*. Un avversario homebrew non ha una scelta pronta: la sua riga
  resta vuota finché non gliela dai tu.
- Hope e Fear non cambiano l'effetto: si gioca sui bersagli non mancati.

`docs/verifiche-in-foundry.md` elenca le prove da fare a video, in ordine di importanza.

## Licenza

MIT.
