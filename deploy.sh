#!/usr/bin/env bash
# Copia il modulo su un server Foundry e sistema i permessi. Il container gira come uid 1000.
#
# Il server non sta nel repo: questo file e' destinato a diventare pubblico insieme al resto,
# e l'indirizzo di un Foundry vivo piu' l'utente con cui ci si entra sono meta' del lavoro di
# chi cerca bersagli. Nessun default, quindi: senza le tre variabili lo script si ferma.
#
#   FOUNDRY_HOST=utente@host \
#   FOUNDRY_MODULES_DIR=/percorso/a/Data/modules \
#   FOUNDRY_CONTAINER=nome-container \
#   ./deploy.sh
set -euo pipefail

SERVER="${FOUNDRY_HOST:?serve FOUNDRY_HOST (utente@host del server Foundry)}"
MODULES_DIR="${FOUNDRY_MODULES_DIR:?serve FOUNDRY_MODULES_DIR (la cartella modules di Data)}"
CONTAINER="${FOUNDRY_CONTAINER:?serve FOUNDRY_CONTAINER (il nome del container Foundry)}"

DEST="$MODULES_DIR/daggerheart-vfx"
HERE="$(cd "$(dirname "$0")" && pwd)"

rsync -av --delete -e ssh "$HERE/module/" "$SERVER:$DEST/"
ssh "$SERVER" "chown -R 1000:1000 $DEST && ls -la $DEST"

echo
echo "Copiato. Alla prima installazione serve un riavvio perche' compaia in Manage Modules:"
echo "  ssh $SERVER 'docker stop $CONTAINER && sleep 15 && docker start $CONTAINER'"
echo "Non usare 'docker restart': lascia un lock e il server sembra morto per 320s."
