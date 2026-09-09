# Daggerheart VFX

Effetti visivi per le carte di dominio di Daggerheart su Foundry VTT.

Quando un personaggio usa un'azione di una carta di dominio, il modulo gioca l'effetto che
gli hai assegnato: un proiettile teso dal lanciatore al bersaglio, un'esplosione appoggiata
sul bersaglio, o un effetto sul lanciatore.

## Cosa serve

- Foundry VTT 13 o 14
- Il system [Daggerheart](https://github.com/Foundryborne/daggerheart) 2.9.0 o più recente
- I moduli **Sequencer** e **JB2A** (la versione free basta: 1693 effetti)

## Come si usa

Configurazione → Impostazioni modulo → *Effetti delle carte di dominio*.

Il bottone **Precompila** assegna un effetto a tutte le azioni usando 37 regole per
dominio e tipo. Sono una prima passata: correggile col bottone **▶ Prova**, che gioca
l'effetto sul token selezionato senza passare dalla scheda.

Le assegnazioni fatte a mano vincono sempre: *Precompila* non sovrascrive mai una riga che
ha già un effetto.

## Copiare il modulo su un server di prova

`deploy.sh` copia `module/` dentro la cartella dei moduli di un'installazione Foundry. Il
server non è scritto nel repo: le tre variabili sono obbligatorie e senza di loro lo script
si ferma prima di toccare la rete.

```sh
FOUNDRY_HOST=utente@host \
FOUNDRY_MODULES_DIR=/percorso/a/Data/modules \
FOUNDRY_CONTAINER=nome-container \
./deploy.sh
```

## Limiti dichiarati

- Copre le **carte di dominio**, non le armi e non gli attacchi degli avversari.
- Le carte aggiunte dal system dopo l'ultima precompilazione nascono senza effetto.
- Hope e Fear non cambiano l'effetto: si gioca sui bersagli non mancati.
