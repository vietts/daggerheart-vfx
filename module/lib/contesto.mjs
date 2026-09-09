/*
 * Il config che il system passa all'hook e' ricco: source, dialog, resourceUpdates, effects.
 * Qui si tiene solo cio' che decide un effetto visivo, in una forma che i test possono
 * costruire a mano.
 *
 * `config.targets` e' un array di oggetti prodotti da TargetField.formatTarget: il campo `id`
 * e' l'id del token sul canvas, non dell'attore. `hitResult.success` esiste solo dopo un tiro:
 * assente significa che non c'era niente da mancare, quindi colpito.
 */

export function contesto(config, idTokenOrigine) {
  const bersagli = (config?.targets ?? []).map(t => ({
    id: t.id,
    colpito: t.hitResult?.success !== false
  }));

  return {
    origine: idTokenOrigine ?? null,
    bersagli,
    haTiro: Boolean(config?.hasRoll)
  };
}
