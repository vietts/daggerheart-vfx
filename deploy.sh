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
