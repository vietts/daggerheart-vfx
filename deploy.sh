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
echo "  ssh $SERVER \\"
echo "    'docker stop $CONTAINER; rmdir /opt/foundry/data/Config/options.json.lock 2>/dev/null; docker start $CONTAINER'"
echo
echo "Il lock NON si rilascia da solo allo stop, e aspettare non serve (provato con 5s e 15s):"
echo "va rimosso fra lo stop e lo start, sempre. Se resta, Foundry riparte, trova la directory"
echo "occupata e muore; l'entrypoint ritenta allungando l'attesa fino a 640s, e nel frattempo"
echo "il reverse proxy risponde 404 - non 502 - perche' dietro non c'e' alcun server."
echo "Per lo stesso motivo non usare 'docker restart'."
