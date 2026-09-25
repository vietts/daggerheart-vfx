/*
 * L'adattatore Daggerheart: il contratto che il nucleo usa senza sapere quale sistema gira.
 * Vedi il piano (docs/superpowers/plans/2026-09-25-dnd5e.md) per l'elenco dei membri.
 */

import { chiave, datiAzione } from "./chiavi.mjs";
import { contesto } from "./contesto.mjs";
import { azioniDi, azioniDiCarta, azioniDiAvversario, righeDaCarte, precompila } from "./catalogo.mjs";
import { leggiDocumenti } from "./finestra.mjs";

/*
 * Le azioni delle carte di dominio di un personaggio, o l'attacco e le feature di un
 * avversario. Si guarda l'attore, non il token: le carte stanno sull'attore, e per un token
 * non collegato l'attore sintetico porta feature e attacco.
 */
function azioniDiAttore(attore) {
  if (attore?.type === "adversary") return azioniDiAvversario(attore);
  return [...(attore?.items ?? [])].filter(i => i?.type === "domainCard").flatMap(i => azioniDiCarta(i));
}

/*
 * `daggerheart.postUseAction(action, config)`. I bersagli e l'esito vengono dal config del
 * system (config.targets): quelli dell'utente non servono, il system li ha gia' letti.
 */
function daHook([action, config]) {
  const dati = datiAzione(action);
  if (!dati.categoria) return null;
  const { bersagli, haTiro } = contesto(config, null);
  return { dati, attore: action?.actor ?? null, bersagli, haTiro, area: null };
}

export default Object.freeze({
  id: "daggerheart",
  hook: "daggerheart.postUseAction",
  chiave,
  azioniDi,
  azioniDiAttore,
  daHook,
  /* Le carte non dichiarano un'area: una riga messa ad `area` gioca alla dimensione di ripiego. */
  area: () => null,
  righe: righeDaCarte,
  precompila,
  leggiDocumenti
});
