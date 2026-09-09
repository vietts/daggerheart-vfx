/*
 * Le costanti che tutto il resto condivide. Stanno in un file loro perche' il manifest e i
 * test devono poterle leggere senza tirarsi dietro logica.
 */

export const MODULE_ID = "daggerheart-vfx";

/* Le quattro geometrie di una giocata. `auto` non arriva mai fino a scena.mjs: la risolve
   decisione.mjs guardando i bersagli veri, perche' 163 azioni su 284 non hanno un `range`
   da cui dedurla in fase di configurazione. */
export const FORME = Object.freeze(["proiettile", "bersaglio", "lanciatore", "auto"]);

export const SETTING_MAPPA = "mappa";
export const SETTING_ATTIVO = "attivo";
