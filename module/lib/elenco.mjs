/*
 * L'unico modo di iterare le azioni (Daggerheart) o le activity (D&D) di un documento, per i
 * due cammini che ne hanno bisogno: la finestra (che vede oggetti sorgente, da toObject()) e
 * il gioco (che vede documenti vivi). Due cicli scritti separatamente avevano gia' smesso di
 * leggere la stessa cosa: se a runtime il campo fosse una Collection invece di un oggetto
 * semplice, `Object.values` darebbe [] e non si animerebbe niente, in silenzio.
 *
 * Quindi si accettano le tre forme plausibili (oggetto, array, qualunque cosa abbia values())
 * e chi legge poi va campo per campo invece di fare lo spread: se i campi fossero getter di
 * prototipo e non proprieta' proprie, `{ ...az }` li perderebbe.
 */
export function elencoAzioni(azioni) {
  if (!azioni || typeof azioni !== "object") return [];
  const elenco = Array.isArray(azioni) ? azioni
    : typeof azioni.values === "function" ? [...azioni.values()]
    : Object.values(azioni);
  return elenco.filter(az => az && typeof az === "object");
}
