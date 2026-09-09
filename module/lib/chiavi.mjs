/*
 * Come si chiama un'azione, per una mappa che deve sopravvivere ai rinomini.
 *
 * Il fatto che regge tutto, verificato sui dati veri: quando una carta passa dal compendio
 * alla scheda di un personaggio, il documento e' una copia con un _id nuovo, ma gli id
 * delle azioni dentro system.actions restano identici, e la copia porta
 * _stats.compendiumSource. Quindi la coppia (fonte, id azione) e' stabile, e non dipende dal
 * nome — che invece cambia con la lingua e con l'homebrew.
 */

export function datiAzione(action) {
  const carta = action?.item ?? null;
  return {
    compendiumSource: carta?._stats?.compendiumSource ?? null,
    nomeCarta: carta?.name ?? null,
    idAzione: action?._id ?? null,
    nomeAzione: action?.name ?? null,
    dominio: carta?.system?.domain ?? null,
    tipo: action?.type ?? null,
    range: action?.range ?? null,
    targetType: action?.target?.type ?? null,
    tipoItem: carta?.type ?? null
  };
}

/*
 * Il ripiego sui nomi serve alle carte homebrew, che non vengono da un compendio e quindi
 * non hanno una fonte. E' piu' fragile per costruzione: se rinomini la carta, perdi
 * l'assegnazione. E' un caso raro e dichiarato, non il caso normale.
 */
export function chiave({ compendiumSource, nomeCarta, idAzione, nomeAzione }) {
  if (compendiumSource && idAzione) return `${compendiumSource}::${idAzione}`;
  if (nomeCarta && nomeAzione) return `${nomeCarta}::${nomeAzione}`;
  return null;
}
