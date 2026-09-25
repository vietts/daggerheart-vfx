/*
 * Da un descrittore alla Sequence che parte. Impuro: canvas e Sequence sono globali. Lo usano
 * l'hook e l'API, cosi' le due porte giocano nello stesso identico modo.
 *
 * Sequencer trasmette l'effetto a tutti i client: basta giocarlo qui.
 */

import { costruisci, risolviToken } from "./lib/scena.mjs";

export async function suona(descrittore) {
  if (!descrittore || !canvas?.ready) return false;
  const risolto = risolviToken(descrittore, id => canvas.tokens.get(id) ?? null);
  if (!risolto) return false;
  await costruisci(risolto, Sequence,
    { distanzaCasella: canvas.scene?.grid?.distance ?? null, unitaCasella: canvas.scene?.grid?.units ?? null }).play();
  return true;
}
