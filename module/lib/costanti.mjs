/*
 * Le costanti che tutto il resto condivide. Stanno in un file loro perche' il manifest e i
 * test devono poterle leggere senza tirarsi dietro logica.
 */

export const MODULE_ID = "daggerheart-vfx";

/* Le geometrie di una giocata. `auto` non arriva mai fino a scena.mjs: la risolve
   decisione.mjs guardando i bersagli veri. `area` gioca un effetto solo, sull'area piazzata o
   al centro dei bersagli (Palla di fuoco: un'esplosione, non tre). */
export const FORME = Object.freeze(["proiettile", "bersaglio", "lanciatore", "area", "auto"]);

export const SETTING_MAPPA = "mappa";
export const SETTING_ATTIVO = "attivo";
