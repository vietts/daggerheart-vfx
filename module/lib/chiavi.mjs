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

  /* Le azioni di un avversario arrivano in due forme: l'attacco base, il cui "item" e' l'attore
     stesso (vive in actor.system.attack), e le feature, item dentro l'attore. */
  if (carta?.documentName === "Actor" && carta.type === "adversary")
    return datiAzioneAvversario(carta, null, action);
  if (carta?.parent?.documentName === "Actor" && carta.parent.type === "adversary")
    return datiAzioneAvversario(carta.parent, carta, action);

  return {
    categoria: carta?.type === "domainCard" ? "carta" : null,
    /*
     * Due cammini arrivano qui e vedono la stessa carta in due stati diversi. La copia su una
     * scheda porta _stats.compendiumSource; l'originale dentro il compendio NO — quel campo
     * dice "da dove sono stata copiata", e l'originale non e' copia di nessuno. Il suo uuid
     * pero' ha esattamente la stessa forma. Senza questo ripiego i due cammini producono
     * chiavi diverse per la stessa azione, e nessuna riga viene mai ritrovata.
     */
    compendiumSource: carta?._stats?.compendiumSource ?? carta?.uuid ?? null,
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
 * Un avversario in scena e' quasi sempre un token non collegato: un attore sintetico il cui
 * uuid e' Scene.….Token.….Actor.…, diverso a ogni scena. Quello che resta fermo, verificato
 * sull'Archmage il 24/9/2026, e' l'attore d'origine: _stats.compendiumSource punta al
 * compendio da cui e' stato importato, e gli id di feature e azioni sono quelli del compendio.
 *
 * Della fonte si tiene solo l'id, non il nome del pack. Lo stesso Archmage vive in
 * daggerheart.adversaries e in qualunque copia di mondo (un compendio con i token gia'
 * disegnati, per esempio) con lo stesso id: legare la chiave al pack renderebbe la mappa
 * inutile a chi importa dall'altro.
 *
 * Un avversario homebrew, mai passato da un compendio, non ha fonte: vale il suo id, che
 * i token non collegati condividono con l'attore del mondo.
 *
 * Accetta documenti vivi (dall'hook) e oggetti sorgente (dalla finestra, via toObject):
 * per questo legge `_id ?? id` e non si fida di getter.
 */
export function datiAzioneAvversario(attore, feature, azione) {
  const fonte = attore?._stats?.compendiumSource;
  return {
    categoria: "avversario",
    compendiumSource: null,
    fonteAttore: (fonte ? fonte.split(".").pop() : null) ?? attore?._id ?? attore?.id ?? null,
    idItem: feature ? (feature._id ?? feature.id ?? null) : null,
    nomeCarta: feature ? `${attore?.name} · ${feature.name}` : (attore?.name ?? null),
    idAzione: azione?._id ?? azione?.id ?? null,
    nomeAzione: azione?.name ?? null,
    /* Gli avversari non hanno dominio: il campo serve al filtro della finestra, e il tier e'
       il modo in cui li si cerca al tavolo. Nessuna regola di dominio li riconosce. */
    dominio: `avversari T${attore?.system?.tier ?? "?"}`,
    tipo: azione?.type ?? null,
    range: azione?.range ?? null,
    targetType: azione?.target?.type ?? null,
    tipoItem: feature ? (feature.type ?? null) : "attack"
  };
}

/*
 * Il ripiego sui nomi serve alle carte homebrew, che non vengono da un compendio e quindi
 * non hanno una fonte. E' piu' fragile per costruzione: se rinomini la carta, perdi
 * l'assegnazione. E' un caso raro e dichiarato, non il caso normale.
 */
export function chiave({ categoria, fonteAttore, idItem, compendiumSource, nomeCarta, idAzione, nomeAzione }) {
  if (categoria === "avversario") {
    if (!fonteAttore || !idAzione) return null;
    return idItem ? `Actor.${fonteAttore}.Item.${idItem}::${idAzione}` : `Actor.${fonteAttore}::${idAzione}`;
  }
  if (compendiumSource && idAzione) return `${compendiumSource}::${idAzione}`;
  if (nomeCarta && nomeAzione) return `${nomeCarta}::${nomeAzione}`;
  return null;
}
