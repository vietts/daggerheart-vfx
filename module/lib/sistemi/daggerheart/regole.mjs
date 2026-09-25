/*
 * Le regole precompilano la mappa, non la sostituiscono: quello che gira a runtime e'
 * sempre una mappa esplicita. Qui c'e' solo la proposta.
 *
 * Il compendio daggerheart.domains 2.9.3 ha 210 carte e 284 azioni, ma solo 37 combinazioni
 * distinte di dominio+tipo. E' il fattore sette che rende sensato precompilare.
 *
 * Tutte e 37 le chiavi sono state verificate contro JB2A_DnD5e 0.9.3 installato sulla VPS
 * (1693 effetti). Sono una prima passata plausibile, da correggere col bottone Prova davanti
 * al canvas: nessuno puo' scegliere fra 1693 effetti senza guardarli.
 */

export const REGOLE = Object.freeze({
  "arcana+attack":    "jb2a.magic_missile.purple",
  "arcana+damage":    "jb2a.explosion.02.blue",
  "arcana+effect":    "jb2a.energy_field.01.blue",
  "arcana+healing":   "jb2a.particle_burst.01.circle.bluepurple",

  "blade+attack":     "jb2a.greatsword.melee.standard.white",
  "blade+damage":     "jb2a.shortsword.melee.01.white",
  "blade+effect":     "jb2a.on_token_buff.001.001.blue",
  "blade+healing":    "jb2a.bless.400px.intro.yellow",

  "bone+attack":      "jb2a.arrow.physical.blue",
  "bone+effect":      "jb2a.condition.boon.01.001.green",
  "bone+healing":     "jb2a.healing_generic.400px.green",

  "codex+attack":     "jb2a.eldritch_blast.purple",
  "codex+damage":     "jb2a.explosion.03.blueyellow",
  "codex+effect":     "jb2a.cast_generic.02.blue",

  "dread+attack":     "jb2a.witch_bolt.blue",
  "dread+damage":     "jb2a.arms_of_hadar.dark_purple",
  "dread+effect":     "jb2a.eyes.01.dark_green.few",
  "dread+healing":    "jb2a.energy_strands.in.green.01",

  "grace+attack":     "jb2a.dancing_light.blueyellow",
  "grace+damage":     "jb2a.shatter.blue",
  "grace+effect":     "jb2a.bardic_inspiration.greenorange",
  "grace+healing":    "jb2a.healing_generic.400px.yellow",

  "midnight+attack":    "jb2a.toll_the_dead.green.complete",
  "midnight+damage":    "jb2a.black_tentacles.dark_purple",
  "midnight+effect":    "jb2a.darkness.black",
  "midnight+healing":   "jb2a.healing_generic.400px.purple",
  "midnight+countdown": "jb2a.fumes.04.loop.grey",

  "sage+attack":      "jb2a.entangle.green",
  "sage+effect":      "jb2a.plant_growth.03.square.2x2.complete.greenyellow",
  "sage+healing":     "jb2a.aura_themed.01.inward.complete.nature.01.green",

  "splendor+attack":  "jb2a.sacred_flame.target.yellow",
  "splendor+damage":  "jb2a.divine_smite.target.blueyellow",
  "splendor+effect":  "jb2a.bless.400px.loop.yellow",
  "splendor+healing": "jb2a.healing_generic.400px.blue",

  "valor+attack":     "jb2a.melee_attack.06.shield.01",
  "valor+effect":     "jb2a.shield.01.intro.blue",
  "valor+healing":    "jb2a.healing_generic.200px.blue"
});

export function fileDaRegola(dominio, tipo) {
  return REGOLE[`${dominio}+${tipo}`] ?? null;
}

const TESI = new Set(["close", "far", "veryFar"]);
const APPOGGIATI = new Set(["melee", "veryClose"]);

/*
 * La forma non sta nella regola: la stessa regola serve carte con geometrie diverse, quindi
 * si deduce dall'azione.
 *
 * Il conteggio spiega perche' esiste `auto`: sulle 284 azioni del compendio, il range decide
 * 78 casi (43 tesi + 15 appoggiati + 20 su di se'), e 163 non hanno range affatto. Dedurre
 * la geometria in configurazione coprirebbe meno della meta' dei casi; `auto` la rimanda al
 * momento della giocata, dove i bersagli si vedono.
 */
export function formaDaAzione({ tipo, range, targetType }) {
  if (targetType === "self" || range === "self") return "lanciatore";
  if (TESI.has(range) && (tipo === "attack" || tipo === "damage")) return "proiettile";
  if (APPOGGIATI.has(range)) return "bersaglio";
  return "auto";
}
