/*
 * Le regole D&D precompilano la mappa, non la sostituiscono: a runtime gira sempre una mappa
 * esplicita. Qui c'e' solo la proposta per cio' che la tabella (assegnazioni.mjs) non copre.
 *
 * Ogni file e' verificato contro JB2A_DnD5e 0.9.3 gratuito (test/dnd5e-regole.test.mjs). I
 * proiettili si scrivono senza lunghezza: Sequencer sceglie da solo 05ft…90ft.
 */

/*
 * Tipo di danno × forma. La colonna e' la forma dedotta dall'oggetto (proiettile, area, o
 * bersaglio per tutto il resto). Una cella stringa prende la forma dedotta; una cella oggetto
 * impone la sua (il tuono non ha un proiettile: si appoggia sul bersaglio).
 */
export const DANNI = Object.freeze({
  fire:        { proiettile: "jb2a.fire_bolt.orange", area: "jb2a.fireball.explosion.orange", bersaglio: "jb2a.flames.01.orange" },
  cold:        { proiettile: "jb2a.ray_of_frost.blue", area: "jb2a.ice_spikes.radial.burst.white", bersaglio: "jb2a.ice_spikes.radial.burst.white" },
  lightning:   { proiettile: "jb2a.chain_lightning.primary.blue", area: "jb2a.lightning_ball.blue", bersaglio: "jb2a.lightning_strike.blue" },
  radiant:     { proiettile: "jb2a.guiding_bolt.01.blueyellow", area: "jb2a.sacred_flame.target.yellow", bersaglio: "jb2a.sacred_flame.target.yellow" },
  necrotic:    { proiettile: "jb2a.energy_strands.range.standard.purple.01", area: "jb2a.arms_of_hadar.dark_purple", bersaglio: "jb2a.toll_the_dead.green.complete" },
  force:       { proiettile: "jb2a.magic_missile.purple", area: "jb2a.explosion.02.blue", bersaglio: "jb2a.impact.003.blue" },
  thunder:     { proiettile: { file: "jb2a.shatter.blue", forma: "bersaglio" }, area: "jb2a.thunderwave.center.blue", bersaglio: "jb2a.shatter.blue" },
  acid:        { proiettile: "jb2a.arrow.poison.green.01", area: "jb2a.liquid.splash.blue", bersaglio: "jb2a.liquid.splash.blue" },
  poison:      { proiettile: "jb2a.arrow.poison.green.01", area: "jb2a.fumes.04.loop.grey", bersaglio: "jb2a.fumes.04.loop.grey" },
  psychic:     { proiettile: "jb2a.energy_strands.range.standard.purple.01", area: "jb2a.markers.fear.dark_purple.01", bersaglio: "jb2a.markers.fear.dark_purple.01" },
  bludgeoning: { proiettile: "jb2a.arrow.physical.white.01", area: "jb2a.impact.ground_crack.02.orange", bersaglio: "jb2a.impact.005.orange" },
  piercing:    { proiettile: "jb2a.arrow.physical.white.01", area: "jb2a.impact.ground_crack.02.orange", bersaglio: "jb2a.impact.005.orange" },
  slashing:    { proiettile: "jb2a.arrow.physical.white.01", area: "jb2a.impact.ground_crack.02.orange", bersaglio: "jb2a.melee_generic.slash.01.orange" }
});

/* Le armi per `system.type.baseItem` (gli id di CONFIG.DND5E.weaponIds). `distanza` solo per
   chi si lancia o tira davvero; un'arma da mischia lanciata senza file proprio usa il mischia. */
export const ARMI = Object.freeze({
  battleaxe:     { mischia: "jb2a.greataxe.melee.standard.white", distanza: null },
  blowgun:       { mischia: null, distanza: "jb2a.arrow.physical.white.01" },
  club:          { mischia: "jb2a.club.melee.01.white", distanza: null },
  dagger:        { mischia: "jb2a.dagger.melee.02.white", distanza: "jb2a.dagger.throw.01.white" },
  dart:          { mischia: null, distanza: "jb2a.dagger.throw.01.white" },
  flail:         { mischia: "jb2a.mace.melee.01.white", distanza: null },
  glaive:        { mischia: "jb2a.glaive.melee.01.white", distanza: null },
  greataxe:      { mischia: "jb2a.greataxe.melee.standard.white", distanza: null },
  greatclub:     { mischia: "jb2a.greatclub.standard.white", distanza: null },
  greatsword:    { mischia: "jb2a.greatsword.melee.standard.white", distanza: null },
  halberd:       { mischia: "jb2a.halberd.melee.01.white", distanza: null },
  handaxe:       { mischia: "jb2a.handaxe.melee.standard.white", distanza: null },
  handcrossbow:  { mischia: null, distanza: "jb2a.bolt.physical.orange" },
  heavycrossbow: { mischia: null, distanza: "jb2a.bolt.physical.orange" },
  javelin:       { mischia: "jb2a.spear.melee.01.white", distanza: "jb2a.arrow.physical.white.01" },
  lance:         { mischia: "jb2a.spear.melee.01.white", distanza: null },
  lightcrossbow: { mischia: null, distanza: "jb2a.bolt.physical.orange" },
  lighthammer:   { mischia: "jb2a.hammer.melee.01.white", distanza: null },
  longbow:       { mischia: null, distanza: "jb2a.arrow.physical.white.01" },
  longsword:     { mischia: "jb2a.sword.melee.01.white", distanza: null },
  mace:          { mischia: "jb2a.mace.melee.01.white", distanza: null },
  maul:          { mischia: "jb2a.maul.melee.standard.white", distanza: null },
  morningstar:   { mischia: "jb2a.mace.melee.01.white", distanza: null },
  musket:        { mischia: null, distanza: "jb2a.bullet.01.orange" },
  pike:          { mischia: "jb2a.spear.melee.01.white", distanza: null },
  pistol:        { mischia: null, distanza: "jb2a.bullet.01.orange" },
  quarterstaff:  { mischia: "jb2a.quarterstaff.melee.01.white", distanza: null },
  rapier:        { mischia: "jb2a.rapier.melee.01.white", distanza: null },
  scimitar:      { mischia: "jb2a.scimitar.melee.01.white", distanza: null },
  shortbow:      { mischia: null, distanza: "jb2a.arrow.physical.white.01" },
  shortsword:    { mischia: "jb2a.shortsword.melee.01.white", distanza: null },
  sickle:        { mischia: "jb2a.scimitar.melee.01.white", distanza: null },
  sling:         { mischia: null, distanza: "jb2a.bullet.01.orange" },
  spear:         { mischia: "jb2a.spear.melee.01.white", distanza: "jb2a.arrow.physical.white.01" },
  trident:       { mischia: "jb2a.spear.melee.01.white", distanza: null },
  warhammer:     { mischia: "jb2a.warhammer.melee.01.white", distanza: null },
  warpick:       { mischia: "jb2a.hammer.melee.01.white", distanza: null },
  whip:          { mischia: "jb2a.melee_generic.slash.01.orange", distanza: null }
});

/* Gli attacchi naturali dei mostri non hanno baseItem: si riconoscono dall'identifier. */
export const NATURALI = Object.freeze({
  bite: "jb2a.bite.200px.red",
  claw: "jb2a.claws.200px.red",
  claws: "jb2a.claws.200px.red",
  talons: "jb2a.claws.200px.red",
  slam: "jb2a.melee_generic.creature_attack.fist.001.red",
  fist: "jb2a.melee_generic.creature_attack.fist.001.red",
  pincer: "jb2a.melee_generic.creature_attack.pincer.001.red",
  pincers: "jb2a.melee_generic.creature_attack.pincer.001.red",
  tail: "jb2a.melee_generic.slash.01.orange",
  "unarmed-strike": "jb2a.unarmed_strike.physical.01.blue"
});

/* Un soffio (identifier che contiene "breath") per tipo di danno e sagoma. */
export const SOFFI = Object.freeze({
  fire:      { cone: "jb2a.breath_weapons.fire.cone.orange.01", line: "jb2a.breath_weapons.fire.line.orange" },
  cold:      { cone: "jb2a.breath_weapons.cold.cone.blue", line: "jb2a.breath_weapons.cold.cone.blue" },
  lightning: { cone: "jb2a.breath_weapons.lightning.line.blue", line: "jb2a.breath_weapons.lightning.line.blue" },
  acid:      { cone: "jb2a.breath_weapons.acid.line.green", line: "jb2a.breath_weapons.acid.line.green" },
  poison:    { cone: "jb2a.breath_weapons.poison.cone.green", line: "jb2a.breath_weapons.poison.cone.green" }
});

/* Gli incantesimi senza danno ne' cura: la runa della loro scuola (id di CONFIG.DND5E.spellSchools). */
export const SCUOLE = Object.freeze({
  abj: "jb2a.magic_signs.rune.abjuration.complete.blue",
  con: "jb2a.magic_signs.rune.conjuration.complete.yellow",
  div: "jb2a.magic_signs.rune.divination.complete.blue",
  enc: "jb2a.magic_signs.rune.enchantment.complete.pink",
  evo: "jb2a.magic_signs.rune.evocation.complete.red",
  ill: "jb2a.magic_signs.rune.illusion.complete.purple",
  nec: "jb2a.magic_signs.rune.necromancy.complete.green",
  trs: "jb2a.magic_signs.rune.transmutation.complete.yellow"
});

export const CURA = "jb2a.cure_wounds.400px.blue";

/* Un'arma che non si riconosce: un fendente, o una freccia. */
export const GENERICO = Object.freeze({
  mischia: "jb2a.melee_generic.slash.01.orange",
  distanza: "jb2a.arrow.physical.white.01"
});

const colonna = forma => (forma === "proiettile" || forma === "area") ? forma : "bersaglio";

function regolaArma(r) {
  const arma = ARMI[r.baseItem] ?? null;
  if (r.attacco === "ranged") {
    if (arma?.distanza) return { file: arma.distanza, forma: "proiettile" };
    if (arma?.mischia) return { file: arma.mischia, forma: "bersaglio" };
    return { file: GENERICO.distanza, forma: "proiettile" };
  }
  if (arma?.mischia) return { file: arma.mischia, forma: "bersaglio" };
  if (NATURALI[r.identifier]) return { file: NATURALI[r.identifier], forma: "bersaglio" };
  return { file: GENERICO.mischia, forma: "bersaglio" };
}

/*
 * L'ordine conta: arma, poi attacco naturale fuori dalle armi (una feature "Bite"), poi
 * soffio, poi danno, poi cura, poi la scuola per gli incantesimi. Un privilegio o un
 * consumabile senza danno ne' cura non riceve niente: meglio vuoto che una runa a caso.
 */
export function regolaDnd(r) {
  if (r.tipoItem === "weapon") return regolaArma(r);
  if (NATURALI[r.identifier]) return { file: NATURALI[r.identifier], forma: "bersaglio" };

  const danno = r.danni?.[0];
  if (danno && r.identifier?.includes("breath") && SOFFI[danno])
    return { file: SOFFI[danno][r.sagoma?.tipo === "line" ? "line" : "cone"], forma: "proiettile" };

  const cella = danno ? DANNI[danno]?.[colonna(r.formaDedotta)] : null;
  if (cella) return typeof cella === "string" ? { file: cella, forma: r.formaDedotta } : { ...cella };

  if (r.cura) return { file: CURA, forma: r.formaDedotta === "lanciatore" ? "lanciatore" : "auto" };
  if (r.tipoItem === "spell" && SCUOLE[r.scuola])
    return { file: SCUOLE[r.scuola], forma: r.formaDedotta === "area" ? "area" : "auto" };
  return null;
}
