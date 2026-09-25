/*
 * Il cuore puro dell'API: da (oggetto, azione, token) al descrittore. E' la stessa catena
 * dell'hook, con una differenza sola: nessun tiro, quindi ogni bersaglio conta come colpito.
 * E' il caso "il GM ha detto che sei riuscito" del Phone Companion.
 */

import { decidi } from "./decisione.mjs";

/*
 * Quale azione dell'oggetto. In Daggerheart una carta ne ha piu' d'una e l'id la sceglie; se
 * manca, vale la prima che ha una riga nella mappa. In D&D la riga e' per oggetto, i dati non
 * hanno idAzione, e un azioneId passato si ignora.
 */
function datiPer(adattatore, mappa, item, azioneId) {
  const candidati = adattatore.azioniDi(item);
  const conId = candidati.some(d => d.idAzione);
  if (azioneId && conId) return candidati.find(d => d.idAzione === azioneId) ?? null;
  return candidati.find(d => mappa[adattatore.chiave(d)]?.file) ?? null;
}

export function haEffetto({ adattatore, mappa, item, azioneId = null }) {
  if (!adattatore || !item) return false;
  const dati = datiPer(adattatore, mappa, item, azioneId);
  return !!(dati && mappa[adattatore.chiave(dati)]?.file);
}

export function preparaGiocata({ adattatore, mappa, item, azioneId = null, origine, bersagli = [] }) {
  if (!adattatore || !item || !origine) return null;
  const dati = datiPer(adattatore, mappa, item, azioneId);
  if (!dati) return null;
  return decidi(adattatore.chiave(dati), mappa, {
    origine,
    bersagli: bersagli.map(id => ({ id, colpito: true })),
    haTiro: false,
    area: adattatore.area(dati, null)
  });
}
