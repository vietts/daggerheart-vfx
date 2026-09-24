# Daggerheart VFX

Effetti visivi per le carte di dominio di Daggerheart su Foundry VTT.

Quando un personaggio usa un'azione di una carta di dominio, il modulo gioca l'effetto che
gli hai assegnato: un proiettile teso dal lanciatore al bersaglio, un'esplosione appoggiata
sul bersaglio, o un effetto su chi lancia.

## Cosa serve

- Foundry VTT 13 o 14
- Il system [Daggerheart](https://github.com/Foundryborne/daggerheart) 2.9.0 o più recente
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

- Copre le **carte di dominio**, non le armi e non gli attacchi degli avversari.
- Le carte aggiunte dal system dopo l'ultima precompilazione nascono senza effetto: va
  ripremuto *Precompila*.
- Hope e Fear non cambiano l'effetto: si gioca sui bersagli non mancati.

`docs/verifiche-in-foundry.md` elenca le prove da fare a video, in ordine di importanza.
