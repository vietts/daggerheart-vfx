/*
 * L'API pubblica: game.modules.get("daggerheart-vfx").api. La usa il Phone Companion dal
 * client del GM, dopo aver controllato che il giocatore possieda l'attore: quel controllo e'
 * di chi chiama.
 *
 * Non solleva mai: chi chiama da un socket non ha modo di recuperare un'eccezione, e un
 * effetto mancato non deve rompere niente.
 */

import { MODULE_ID } from "./lib/costanti.mjs";
import { preparaGiocata, haEffetto } from "./lib/giocata.mjs";

export function creaApi({ adattatore, mappa, attivo, suona }) {
  return Object.freeze({
    /* Senza canvas: la mappa e' un setting di mondo, il telefono la legge per mostrare il ▶. */
    haEffetto(item, azioneId = null) {
      try {
        return !!adattatore && attivo() && haEffetto({ adattatore, mappa: mappa(), item, azioneId });
      } catch (e) {
        console.error(`[${MODULE_ID}] haEffetto fallito:`, e);
        return false;
      }
    },

    /* Solo su un client con il canvas sulla scena dei token: lo schermo del GM. */
    async gioca({ item, azioneId = null, origine, bersagli = [] } = {}) {
      try {
        if (!adattatore || !attivo() || !globalThis.canvas?.ready) return false;
        const descrittore = preparaGiocata({ adattatore, mappa: mappa(), item, azioneId, origine, bersagli });
        if (!descrittore) return false;
        return await suona(descrittore);
      } catch (e) {
        console.error(`[${MODULE_ID}] gioca fallito:`, e);
        return false;
      }
    }
  });
}
