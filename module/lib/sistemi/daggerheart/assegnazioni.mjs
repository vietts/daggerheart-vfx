/*
 * Una scelta per ogni azione del compendio daggerheart.domains: 284 azioni su 190 carte.
 *
 * Le regole di dominio danno lo stesso effetto a tutta una famiglia (ogni attacco di Arcana e'
 * lo stesso missile); questa tabella e' stata fatta leggendo il testo di ogni carta e cercando
 * nel database di JB2A gratuito l'effetto che racconta quella carta. Le chiavi sono la stessa
 * coppia (fonte, id azione) di chiavi.mjs, quindi reggono la copia sulla scheda e la lingua.
 *
 * Ogni file e' verificato contro JB2A_DnD5e 0.9.3 (test/assegnazioni.test.mjs). Resta una
 * proposta: quello che conta e' come appare sul canvas, e quello lo dice solo Prova.
 *
 * Generata una volta dai sorgenti del system (Foundryborne/daggerheart 2.10.5); i commenti
 * sono carta — azione, per potersi orientare senza aprire il compendio.
 */

export const ASSEGNAZIONI = Object.freeze({
  // arcana
  "Compendium.daggerheart.domains.Item.Zp2S2EnLS5Iv3XuT::3Aiqds9jVXdlWmfm": { file: "jb2a.icosahedron.roll.blue", forma: "auto" }, // Adjust Reality — Spend Hope
  "Compendium.daggerheart.domains.Item.5PvMQKCjrgSxzstn::hBh4Lt0Bdd9CtJY7": { file: "jb2a.icosahedron.star.above.blueyellow", forma: "lanciatore" }, // Arcana-Touched — Switch Duality Results
  "Compendium.daggerheart.domains.Item.JzSvxy9Mu3RJp1jV::45ywf6Juwz4mmn9j": { file: "jb2a.shield_themed.above.eldritch_web.01.dark_purple", forma: "lanciatore" }, // Arcane Reflection — Reflect Back
  "Compendium.daggerheart.domains.Item.Qu0iA4s3Xov10Erd::LsAdmSinOiNr9jH8": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Blink Out — Teleport
  "Compendium.daggerheart.domains.Item.0kAVO6rordCfZqYP::2jjOspoj5HGgUBmE": { file: "jb2a.chain_lightning.primary.blue", forma: "proiettile" }, // Chain Lightning — Cast
  "Compendium.daggerheart.domains.Item.0kAVO6rordCfZqYP::tRJNO3DVvVYwW3tt": { file: "jb2a.chain_lightning.secondary.blue", forma: "proiettile" }, // Chain Lightning — Chain Damage
  "Compendium.daggerheart.domains.Item.5EP2Lgf7ojfrc0Is::9qebkHgxdWVFhIqd": { file: "jb2a.impact.fire.01.orange", forma: "bersaglio" }, // Cinder Grasp — Cast
  "Compendium.daggerheart.domains.Item.5EP2Lgf7ojfrc0Is::z9vUmnLXfskowwsc": { file: "jb2a.flames.01.orange", forma: "bersaglio" }, // Cinder Grasp — On Fire: Damage
  "Compendium.daggerheart.domains.Item.Zhw7PtK8nMPlsOqD::A12J0jyQrOaQoLf7": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Cloaking Blast — Become Cloaked
  "Compendium.daggerheart.domains.Item.R8NDiJXJWmC48WSr::oB5tyd2a7bmcJJmm": { file: "jb2a.condition.boon.02.001.refraction", forma: "lanciatore" }, // Confusing Aura — Create Extra Layers
  "Compendium.daggerheart.domains.Item.R8NDiJXJWmC48WSr::L2hCs7xXO6sD4tUa": { file: "jb2a.magic_signs.circle.02.illusion.complete.purple", forma: "lanciatore" }, // Confusing Aura — Create First Layer
  "Compendium.daggerheart.domains.Item.6dhqo1kzGxejCjHa::SeOcGdKAc7egwg9H": { file: "jb2a.magic_signs.rune.abjuration.complete.blue", forma: "lanciatore" }, // Counterspell — Interrupt
  "Compendium.daggerheart.domains.Item.C0qLOwSSvZ6PG3Ws::h9PMdatB6EPvJx9N": { file: "jb2a.impact.ground_crack.02.orange", forma: "bersaglio" }, // Earthquake — Cast
  "Compendium.daggerheart.domains.Item.hZJp9mdkMnqKDROe::xJfXJDVsBayGaqkr": { file: "jb2a.particle_burst.01.star.bluepurple", forma: "bersaglio" }, // Falling Sky — Attack
  "Compendium.daggerheart.domains.Item.54GUjNuBEy7xdzMz::sAE4ZDLyU9CmNzES": { file: "jb2a.swirling_feathers.outburst.01.textured", forma: "lanciatore" }, // Flight — Cast
  "Compendium.daggerheart.domains.Item.54GUjNuBEy7xdzMz::2wzlrOPefdowBtRr": { file: "jb2a.wind_lines.01.01.white", forma: "lanciatore" }, // Flight — Spend Token
  "Compendium.daggerheart.domains.Item.wOQLu7nLMQ7v6Ogw::pO8E1Bf4GDAU0efI": { file: "jb2a.markers.light_orb.complete.blue", forma: "lanciatore" }, // Floating Eye — Create Orb
  "Compendium.daggerheart.domains.Item.aC43NiFQLpOADyjO::OR0EkGeqY25BhO1h": { file: "jb2a.magic_signs.rune.divination.complete.blue", forma: "lanciatore" }, // Premonition — Rescind Move
  "Compendium.daggerheart.domains.Item.1p1cOmbnRd5CoKBp::QiUrqjOnvkzIymzC": { file: "jb2a.thunderwave.center.blue", forma: "lanciatore" }, // Preservation Blast — Cast
  "Compendium.daggerheart.domains.Item.vd5STqX29RpYbGxa::KV6Vt4prS15q2UV9": { file: "jb2a.portals.vertical.ring.bright_yellow", forma: "lanciatore" }, // Rift Walker — Cast
  "Compendium.daggerheart.domains.Item.GEhBUmv9Bj7oJfHk::VwtkvnNeU9tZQMDT": { file: "jb2a.ward.rune.yellow.01", forma: "auto" }, // Rune Ward — Reduce Damage
  "Compendium.daggerheart.domains.Item.gZOMzskSOfeiXn54::DAM8Q4vezuUsz8xG": { file: "jb2a.magic_signs.circle.02.divination.complete.dark_blue", forma: "lanciatore" }, // Sensory Projection — Cast
  "Compendium.daggerheart.domains.Item.FgzBppvLjXr0UbUI::IPtULQVFaBoeWDfz": { file: "jb2a.arcane_hand.purple", forma: "bersaglio" }, // Telekinesis — Move Target
  "Compendium.daggerheart.domains.Item.FgzBppvLjXr0UbUI::rgDZzUg8ivTTctsM": { file: "jb2a.side_impact.part.shockwave.blue", forma: "bersaglio" }, // Telekinesis — Throw Target
  "Compendium.daggerheart.domains.Item.o62i0QdbUDIiAhSq::MWvrKuwejWcQm7N1": { file: "jb2a.overcharged_sphere.01.01.dark_purple", forma: "proiettile" }, // Unleash Chaos — Cast
  "Compendium.daggerheart.domains.Item.o62i0QdbUDIiAhSq::OOMICXFmXqlPy80J": { file: "jb2a.on_token_buff.001.001.bluepurple", forma: "lanciatore" }, // Unleash Chaos — Replenish Tokens
  "Compendium.daggerheart.domains.Item.1ROT08E1UVBwHLAS::iqFrWFRVPnR1fYf4": { file: "jb2a.footprints.shoe.grey", forma: "bersaglio" }, // Wall Walk — Cast

  // blade
  "Compendium.daggerheart.domains.Item.Y08dLFuPXsgeRrHi::7Tcn3wYxEIGEfbJ5": { file: "jb2a.markers.heart.pink.01", forma: "auto" }, // A Soldier's Bond — Gain 3 Hope
  "Compendium.daggerheart.domains.Item.Ef1JsUG50LIoKx2F::jakoB9n8KSgvYVZv": { file: "jb2a.soundwave.01.blue", forma: "lanciatore" }, // Battle Cry — Clear Stress & Gain Hope
  "Compendium.daggerheart.domains.Item.P0ezScyQ5t8ruByf::Zztzsl3sPdss7xDe": { file: "jb2a.melee_attack.03.maul.01", forma: "bersaglio" }, // Battle Monster — Mark Stress
  "Compendium.daggerheart.domains.Item.NeEOghgfyDUBTwBG::iucXKML1P8Q7nmcp": { file: "jb2a.healing_generic.200px.yellow", forma: "lanciatore" }, // Battle-Hardened — Spend a Hope
  "Compendium.daggerheart.domains.Item.rnejRbUQsNGX1GMC::hsI4QDa6Br52P2mc": { file: "jb2a.aura_themed.01.inward.complete.metal.01.grey", forma: "lanciatore" }, // Champion's Edge — Clear 1 Armor Slot
  "Compendium.daggerheart.domains.Item.rnejRbUQsNGX1GMC::CbKKgf1TboGPZitf": { file: "jb2a.cure_wounds.200px.blue", forma: "lanciatore" }, // Champion's Edge — Clear 1 HP
  "Compendium.daggerheart.domains.Item.rnejRbUQsNGX1GMC::IqLoK4KHMpoTGQIM": { file: "jb2a.markers.drop.red.01", forma: "bersaglio" }, // Champion's Edge — Deal 1 HP Damage
  "Compendium.daggerheart.domains.Item.xxZOXC4tiZQ6kg1e::xdNbP1ggDxpXZ1HP": { file: "jb2a.hunters_mark.pulse.01.green", forma: "lanciatore" }, // Deadly Focus — Focus
  "Compendium.daggerheart.domains.Item.MMl7abdGRLl7TJLO::xEpwnkNppHe3aoEs": { file: "jb2a.on_token_buff.001.001.purplered", forma: "lanciatore" }, // Frenzy — Frenzy
  "Compendium.daggerheart.domains.Item.nCNCqSH7UgW4O3To::DUojhK0OtvsotiE6": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Glancing Blow — Mark a Stress
  "Compendium.daggerheart.domains.Item.3zvjgZ5Od343wHzx::crvDbD8V8linpzeg": { file: "jb2a.glint.yellow.few", forma: "lanciatore" }, // Gore and Glory — Clear Stress
  "Compendium.daggerheart.domains.Item.3zvjgZ5Od343wHzx::r7MFU8khXqsEpx16": { file: "jb2a.twinkling_stars.points05.white", forma: "lanciatore" }, // Gore and Glory — Gain Hope
  "Compendium.daggerheart.domains.Item.I7pNsQ9Yx6mRJX4V::MxaqNvY9IfWnFe5P": { file: "jb2a.greataxe.melee.standard.white", forma: "bersaglio" }, // Onslaught — Mark a Stress
  "Compendium.daggerheart.domains.Item.GRL0cvs96vrTDckZ::LmjwPg03xLnoGTHm": { file: "jb2a.markers.on_token_mask.complete.01.orange", forma: "lanciatore" }, // Rage Up — Mark Stress
  "Compendium.daggerheart.domains.Item.MCgNRlh0s5XUPCfl::bFW8Qgv6fUswbA6s": { file: "jb2a.melee_attack.05.scythe.01", forma: "bersaglio" }, // Reaper's Strike — Spend a Hope
  "Compendium.daggerheart.domains.Item.2ooUo2yoilGifY81::1vOYZjiUbRBmLcVr": { file: "jb2a.on_token_buff.001.001.orangeyellow", forma: "lanciatore" }, // Reckless — Mark a Stress
  "Compendium.daggerheart.domains.Item.5bBU9jWHOuOY12lR::lcEmS1XXO5wH54cQ": { file: "jb2a.smoke.puff.side.02.white", forma: "lanciatore" }, // Scramble — Avoid
  "Compendium.daggerheart.domains.Item.wQ53ImDswEHv5SGQ::XAaygVE635axvBX7": { file: "jb2a.melee_attack.03.greatsword.01", forma: "bersaglio" }, // Versatile Fighter — Mark a Stress
  "Compendium.daggerheart.domains.Item.sWUlSPOJEaXyQLCj::W8nmboZ41sij2ybT": { file: "jb2a.on_token_buff.001.001.white", forma: "lanciatore" }, // Vitality — Apply Effect
  "Compendium.daggerheart.domains.Item.anO0arioUy7I5zBg::g9X0wRuCtAYzF576": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Whirlwind — Spend a Hope

  // bone
  "Compendium.daggerheart.domains.Item.ON5bvnoQBy0SYc9Y::pRSiIoh4Bzk5I9ej": { file: "jb2a.markers.shield.green.02", forma: "lanciatore" }, // Bone-Touched — Spend Hope
  "Compendium.daggerheart.domains.Item.VKAHS6eWz28ukcDs::EA3lGjFhJAX1xoT4": { file: "jb2a.impact.ground_crack.orange.02", forma: "bersaglio" }, // Boost — Mark Stress
  "Compendium.daggerheart.domains.Item.8UANBgSdhMZ0sqfO::aL83OMkU7hSQRlOA": { file: "jb2a.hunters_mark.pulse.01.green", forma: "bersaglio" }, // Breaking Blow — Mark Stress
  "Compendium.daggerheart.domains.Item.xFOSn8IVVNizgHFq::Eo4z2ns80222m7lO": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Deathrun — Spend Hope
  "Compendium.daggerheart.domains.Item.dc4rAXlv95srZUct::AKexQGjS5HwPTo19": { file: "jb2a.wind_lines.01.leaves.01.green", forma: "lanciatore" }, // Deft Maneuvers — Mark Stress
  "Compendium.daggerheart.domains.Item.jSQsSP61CX4MhSN7::2X4CqDTpEQjfSE8r": { file: "jb2a.particles.outward.greenyellow.01.03", forma: "lanciatore" }, // Ferocity — Spend Hope
  "Compendium.daggerheart.domains.Item.Kp6RejHGimnuoBom::lVyTDd44pGJgF3w7": { file: "jb2a.ui.miss.white", forma: "lanciatore" }, // I See It Coming — Roll d4
  "Compendium.daggerheart.domains.Item.O38MQMhJWdZnXi6b::CTIjJn5xFME0DCWm": { file: "jb2a.eyes.01.dark_green.single", forma: "bersaglio" }, // Know Thy Enemy — Instinct Roll
  "Compendium.daggerheart.domains.Item.O38MQMhJWdZnXi6b::ADRUe0WJktpHFz1o": { file: "jb2a.icon.fear.dark_purple", forma: "lanciatore" }, // Know Thy Enemy — Mark Stress
  "Compendium.daggerheart.domains.Item.tceJDcCUefrMS2Ov::4mdm2rcPDfm8tEIA": { file: "jb2a.rapier.melee.01.white", forma: "bersaglio" }, // Rapid Riposte — Mark Stress
  "Compendium.daggerheart.domains.Item.gsiQFT6q3WOgqerJ::ASZpyf3WqjgbjBl6": { file: "jb2a.campfire.03.01.complete.orange", forma: "lanciatore" }, // Recovery — Spend Hope
  "Compendium.daggerheart.domains.Item.faU0XkJCbar69PiN::DRluINMGyhCR84ok": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Redirect — Mark Stress
  "Compendium.daggerheart.domains.Item.TYKfM3H9vBXyWiH4::yjEcSlzsWGX79gpB": { file: "jb2a.melee_attack.03.greatbone.01", forma: "bersaglio" }, // Splintering Strike — Spend Hope
  "Compendium.daggerheart.domains.Item.5b1awkgTmMp3FVrm::jTC0GbsBpGmaQLi7": { file: "jb2a.ui.chevrons3.yellow", forma: "lanciatore" }, // Strategic Approach — Spend Token
  "Compendium.daggerheart.domains.Item.H6TqCJBaa1eWEQ1z::Yqyfl459M3q3TACB": { file: "jb2a.particles.inward.greenyellow.01.02", forma: "lanciatore" }, // Swift Step — Clear Stress
  "Compendium.daggerheart.domains.Item.H6TqCJBaa1eWEQ1z::Py9Mx4nMfCRr4tpk": { file: "jb2a.particles.swirl.greenyellow.01.01", forma: "lanciatore" }, // Swift Step — Gain Hope
  "Compendium.daggerheart.domains.Item.9DwSxHoUwl8Kxj3n::XKY0LJYmvuILmNNU": { file: "jb2a.wind_lines.01.01.white", forma: "bersaglio" }, // Wrangle — Agility Roll

  // codex
  "Compendium.daggerheart.domains.Item.AIbHfryMA2Rvs1ut::pgBalKb5NeRFQ9rt": { file: "jb2a.template_circle.vortex.intro.blue", forma: "bersaglio" }, // Banish — Spellcast Roll
  "Compendium.daggerheart.domains.Item.YtZzYBtR0yLPPA93::XU1joyIDFZrQiToF": { file: "jb2a.ice_spikes.radial.burst.white", forma: "bersaglio" }, // Book of Ava — Ice Spike
  "Compendium.daggerheart.domains.Item.YtZzYBtR0yLPPA93::enit3ZkPp0nY5lN1": { file: "jb2a.spell_projectile.ice_shard.blue", forma: "proiettile" }, // Book of Ava — Ice Spike (Attack)
  "Compendium.daggerheart.domains.Item.YtZzYBtR0yLPPA93::jX4wg2HR2xkdtbIU": { file: "jb2a.side_impact.part.shockwave.blue", forma: "bersaglio" }, // Book of Ava — Power Push
  "Compendium.daggerheart.domains.Item.YtZzYBtR0yLPPA93::4N7ViDYt9Na3zwzi": { file: "jb2a.shield.01.complete.01.blue", forma: "bersaglio" }, // Book of Ava — Tava's Armor
  "Compendium.daggerheart.domains.Item.oVs2MSC6Uf5GbgEG::MGVKJ8wVac1v8eJv": { file: "jb2a.melee_generic.creature_attack.fist.002.blue", forma: "bersaglio" }, // Book of Exota — Construct (Take Action)
  "Compendium.daggerheart.domains.Item.oVs2MSC6Uf5GbgEG::6JWhxevxbL0sOcbv": { file: "jb2a.magic_signs.rune.conjuration.complete.yellow", forma: "lanciatore" }, // Book of Exota — Create Construct
  "Compendium.daggerheart.domains.Item.oVs2MSC6Uf5GbgEG::6eioK8CoAPfObBP2": { file: "jb2a.shatter.blue", forma: "lanciatore" }, // Book of Exota — Repudiate
  "Compendium.daggerheart.domains.Item.R0LNheiZycZlZzV3::2pyqgdVZDCUQPYaj": { file: "jb2a.shield.01.outro_explode.blue", forma: "auto" }, // Book of Grynn — Arcane Deflection
  "Compendium.daggerheart.domains.Item.R0LNheiZycZlZzV3::0vUkyQiGHTFS3Api": { file: "jb2a.bubble.001.002.complete.blue", forma: "bersaglio" }, // Book of Grynn — Time Lock
  "Compendium.daggerheart.domains.Item.R0LNheiZycZlZzV3::K26kfjmTEH9zPMMO": { file: "jb2a.wall_of_fire.300x100.yellow", forma: "bersaglio" }, // Book of Grynn — Wall Of Flame
  "Compendium.daggerheart.domains.Item.gFMx08ogQ8hS2Obi::4cKqwH2jWsYylzI7": { file: "jb2a.shimmer.01.blue", forma: "lanciatore" }, // Book of Homet — Pass Through
  "Compendium.daggerheart.domains.Item.gFMx08ogQ8hS2Obi::RTUxVXUyRM6mNwUX": { file: "jb2a.portals.vertical.ring.bright_yellow", forma: "lanciatore" }, // Book of Homet — Plane Gate
  "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw::tOHoeUFjdPw2TGrw": { file: "jb2a.ranged_missile.001.blue", forma: "proiettile" }, // Book of Illiat — Arcane Barrage
  "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw::gd4zjBV1UvXhgAid": { file: "jb2a.sleep.symbol.pink", forma: "bersaglio" }, // Book of Illiat — Slumber
  "Compendium.daggerheart.domains.Item.df4iRqQzRntrF6Qw::Ya1vttriJRLbuyhk": { file: "jb2a.energy_strands.range.multiple.bluepink.02", forma: "proiettile" }, // Book of Illiat — Telepathy
  "Compendium.daggerheart.domains.Item.cWRFHJdxEZ0M1dAg::fgBLkAtuv9okxUd4": { file: "jb2a.energy_field.02.below.blue", forma: "bersaglio" }, // Book of Korvax — Levitation
  "Compendium.daggerheart.domains.Item.cWRFHJdxEZ0M1dAg::m4y7KXhjVNT30wUT": { file: "jb2a.dizzy_stars.200px.blueorange", forma: "bersaglio" }, // Book of Korvax — Recant
  "Compendium.daggerheart.domains.Item.cWRFHJdxEZ0M1dAg::fb2HYD9J759nHKhV": { file: "jb2a.magic_signs.circle.02.abjuration.complete.blue", forma: "lanciatore" }, // Book of Korvax — Rune Circle
  "Compendium.daggerheart.domains.Item.WtwSWXTRZa7QVvmo::GI2VkIcGDOjFRxpT": { file: "jb2a.fireball.beam.orange", forma: "proiettile" }, // Book of Norai — Fireball - Cast
  "Compendium.daggerheart.domains.Item.WtwSWXTRZa7QVvmo::HJ749c2a8WTjkSHY": { file: "jb2a.fireball.explosion.orange", forma: "bersaglio" }, // Book of Norai — Fireball - Explosion
  "Compendium.daggerheart.domains.Item.WtwSWXTRZa7QVvmo::ywBVT5mbDKr485Jg": { file: "jb2a.markers.chain.spectral_standard.complete.02.blue", forma: "bersaglio" }, // Book of Norai — Mystic Tether
  "Compendium.daggerheart.domains.Item.SZMNR3uGNinJcN4N::h7i4ZuDYuYLnjze6": { file: "jb2a.markers.shield_cracked.purple.01", forma: "bersaglio" }, // Book of Ronin — Eternal Enervation
  "Compendium.daggerheart.domains.Item.SZMNR3uGNinJcN4N::etnR1OKzpLWrx2os": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Book of Ronin — Transform
  "Compendium.daggerheart.domains.Item.eq8VNqYMRHhF9xw9::cc1ahwawL16OEu2r": { file: "jb2a.swirling_sparkles.01.blue", forma: "lanciatore" }, // Book of Sitil — Adjust Appearance
  "Compendium.daggerheart.domains.Item.eq8VNqYMRHhF9xw9::rsyxORrTH5oU2DkV": { file: "jb2a.magic_signs.rune.illusion.complete.purple", forma: "auto" }, // Book of Sitil — Illusion
  "Compendium.daggerheart.domains.Item.eq8VNqYMRHhF9xw9::wBQkw3P4Esj6kOx2": { file: "jb2a.on_token_buff.001.001.blueteal", forma: "bersaglio" }, // Book of Sitil — Parallela
  "Compendium.daggerheart.domains.Item.1VXzwRbvbBj5bd5V::MYZWoU0clYEcsYDb": { file: "jb2a.arcane_hand.blue", forma: "auto" }, // Book of Tyfar — Magic Hand
  "Compendium.daggerheart.domains.Item.1VXzwRbvbBj5bd5V::WQ9XzpbtXl4SmVet": { file: "jb2a.ambient_fog.001.complete.small.white", forma: "auto" }, // Book of Tyfar — Mysterious Mist
  "Compendium.daggerheart.domains.Item.1VXzwRbvbBj5bd5V::E3AnyfI7LDL0z9tT": { file: "jb2a.impact.fire.01.orange", forma: "bersaglio" }, // Book of Tyfar — Wild Flame
  "Compendium.daggerheart.domains.Item.aknDDYtN7EObv94t::Da3zkKkOljZfu5Xb": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Book of Vagras — Arcane Door
  "Compendium.daggerheart.domains.Item.aknDDYtN7EObv94t::VOOND5icbz1WxUUD": { file: "jb2a.detect_magic.circle.blue", forma: "lanciatore" }, // Book of Vagras — Reveal
  "Compendium.daggerheart.domains.Item.aknDDYtN7EObv94t::kfJZdT3F4SH1h1dc": { file: "jb2a.magic_signs.rune.abjuration.complete.blue", forma: "auto" }, // Book of Vagras — Runic Lock
  "Compendium.daggerheart.domains.Item.VOIgm2j2Ijszwc5m::gV6i6Nn6Qolc6PuF": { file: "jb2a.magic_signs.rune.divination.complete.blue", forma: "bersaglio" }, // Book of Vyola — Memory Delve
  "Compendium.daggerheart.domains.Item.VOIgm2j2Ijszwc5m::djZ0hQamdwzvYeKc": { file: "jb2a.energy_conduit.bluepurple.circle.01", forma: "proiettile" }, // Book of Vyola — Shared Clarity
  "Compendium.daggerheart.domains.Item.J1ovx2FpNDvPq1o6::ZcQfbtGet0KQWjWS": { file: "jb2a.markers.bubble.complete.blue", forma: "lanciatore" }, // Book of Yarrow — Magic Immunity
  "Compendium.daggerheart.domains.Item.J1ovx2FpNDvPq1o6::IxoglRervMx9YdVn": { file: "jb2a.template_circle.out_pulse.02.burst.bluewhite", forma: "lanciatore" }, // Book of Yarrow — Timejammer
  "Compendium.daggerheart.domains.Item.7Pu83ABdMukTxu3e::OV23p0uWuzmrQsZi": { file: "jb2a.on_token_cast.initiate.001.instant.combined.blue", forma: "lanciatore" }, // Codex-Touched — Mark Stress
  "Compendium.daggerheart.domains.Item.7Pu83ABdMukTxu3e::TGOGkEzH3HluH6YK": { file: "jb2a.particle_burst.01.rune.bluepurple", forma: "lanciatore" }, // Codex-Touched — Replace Card
  "Compendium.daggerheart.domains.Item.kja5qvh4rdeDBB96::38A4Q7WVvGCFlRpc": { file: "jb2a.disintegrate.green", forma: "proiettile" }, // Disintegration Wave — Spellcast Roll
  "Compendium.daggerheart.domains.Item.TtGOtWkbr23VhHfH::nFzMCrW7wuXCCmJW": { file: "jb2a.wall_of_force.vertical.grey", forma: "auto" }, // Manifest Wall — Spend Hope
  "Compendium.daggerheart.domains.Item.lmBLMPuR8qLbuzNf::Q4397FZe96rIto0m": { file: "jb2a.magic_signs.circle.02.conjuration.complete.yellow", forma: "lanciatore" }, // Safe Haven — Spend Hope
  "Compendium.daggerheart.domains.Item.RiuN0lMlfoTAhLJz::Nhp93LBwnBg5DyY9": { file: "jb2a.magic_signs.rune.evocation.complete.red", forma: "bersaglio" }, // Sigil of Retribution — Mark
  "Compendium.daggerheart.domains.Item.HnPwVrWblYa9hwSt::Fc38nN8i4z2VYW2T": { file: "jb2a.teleport.01.blue", forma: "lanciatore" }, // Teleport — Spellcast Roll
  "Compendium.daggerheart.domains.Item.kVkoCLBXLAIifqpz::FhpWZpXoyXxB13BM": { file: "jb2a.energy_beam.normal.bluepink.03", forma: "proiettile" }, // Transcendent Union — Spend Hope

  // dread
  "Compendium.daggerheart.domains.Item.r6NekgZkMcHz2OUq::4ypEFJVq5grqKg5q": { file: "jb2a.markers.horror.purple.01", forma: "lanciatore" }, // Avatar of Terror — Mark Stress
  "Compendium.daggerheart.domains.Item.CEOM585jIX8V9PHz::bwqmvRSWdnkxaHLl": { file: "jb2a.eldritch_blast.purple", forma: "proiettile" }, // Blighting Strike — Spellcast Roll
  "Compendium.daggerheart.domains.Item.CEOM585jIX8V9PHz::w1tVBhrsmCEmAiSD": { file: "jb2a.toll_the_dead.green.skull_smoke", forma: "bersaglio" }, // Blighting Strike — With Fear
  "Compendium.daggerheart.domains.Item.CEOM585jIX8V9PHz::LM5NdHVJ4fL8jtQQ": { file: "jb2a.markers.poison.dark_green.01", forma: "bersaglio" }, // Blighting Strike — With Hope
  "Compendium.daggerheart.domains.Item.2hIpGAAbwDZ9MA95::8eeHL6FEqPe5pito": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Chains of Affliction — Mark Stress
  "Compendium.daggerheart.domains.Item.3QxwpPmDsD5vPKbH::oKoNtypnM5rie0rx": { file: "jb2a.overcharged_sphere.01.01.dark_purple", forma: "proiettile" }, // Damnation — Spellcast Roll
  "Compendium.daggerheart.domains.Item.3QxwpPmDsD5vPKbH::84fdyQS28Xi3Kvhi": { file: "jb2a.toll_the_dead.green.shockwave", forma: "bersaglio" }, // Damnation — Stress Damage
  "Compendium.daggerheart.domains.Item.MxgSUsmCxZkMp37U::XljvfpVuTZgMGviJ": { file: "jb2a.claws.200px.red", forma: "bersaglio" }, // Dark Army — Deal Damage
  "Compendium.daggerheart.domains.Item.MxgSUsmCxZkMp37U::040T1iKcp84YM2mp": { file: "jb2a.magic_signs.circle.02.necromancy.complete.dark_green", forma: "lanciatore" }, // Dark Army — Spellcast Roll
  "Compendium.daggerheart.domains.Item.CfxaFKF0ISwzSYsu::5mPAuTVUlzVS4MmN": { file: "jb2a.flaming_sphere.200px.purple", forma: "bersaglio" }, // Darkfire — Spend Hope
  "Compendium.daggerheart.domains.Item.tTExFWUt2DoImpat::OEqCPBY0AG6SFiTJ": { file: "jb2a.energy_strands.in.green.01", forma: "bersaglio" }, // Dire Strike — Spend Hope
  "Compendium.daggerheart.domains.Item.umRWvKMoyzLPL64a::nxnoXhs5CFtxOD8L": { file: "jb2a.on_token_buff.001.001.purplered", forma: "lanciatore" }, // Dread-Touched — Gain Bonus
  "Compendium.daggerheart.domains.Item.umRWvKMoyzLPL64a::6F4onMsQxuwdimYh": { file: "jb2a.icon.fear.dark_purple", forma: "lanciatore" }, // Dread-Touched — Mark Stress
  "Compendium.daggerheart.domains.Item.T4rScs8WlliDzuzV::oC0J0jSeimxm01Fx": { file: "jb2a.on_token_buff.001.001.greenpurple", forma: "lanciatore" }, // Eldritch Flesh — Spend Hope
  "Compendium.daggerheart.domains.Item.PM0kAvB1lRMiZujr::9pclL7t5Tq5XQAGO": { file: "jb2a.energy_strands.range.standard.purple.02", forma: "proiettile" }, // Hideous Retribution — Reaction Roll
  "Compendium.daggerheart.domains.Item.6r2TrUgJAXLSbmCO::3fABewYlBBP80OiK": { file: "jb2a.markers.simple.001.complete.001.purple", forma: "lanciatore" }, // Invoke Torment — Gain Hope
  "Compendium.daggerheart.domains.Item.lG0OJTYWZGsCcKVw::PxEbi94Hv9SoVxbY": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Jump Scare — Mark Stress
  "Compendium.daggerheart.domains.Item.ZPTdjTT7JAq6R4qw::rUzJRn673vfn5VY1": { file: "jb2a.particles.inward.greenyellow.01.01", forma: "lanciatore" }, // Savor the Anguish — Clear Stress
  "Compendium.daggerheart.domains.Item.9ccH1Hwjvpz3iYpb::LpppPAHrouTkHDyZ": { file: "jb2a.markers.drop.red.01", forma: "bersaglio" }, // Shared Trauma — Transfer Suffering
  "Compendium.daggerheart.domains.Item.21mofokzGa4yryRZ::atYHfdIRwhIVLVt3": { file: "jb2a.disintegrate.green", forma: "proiettile" }, // Siphon Essence — Spellcast Roll
  "Compendium.daggerheart.domains.Item.21mofokzGa4yryRZ::2WSDK7psPlgjOnSG": { file: "jb2a.sneak_attack.dark_green", forma: "bersaglio" }, // Siphon Essence — With Fear
  "Compendium.daggerheart.domains.Item.h2AmRjGVtVGOMsB4::Fw0PoX73vPZiDTqT": { file: "jb2a.template_circle.smoke.001.complete.400px.001.greenpurple", forma: "lanciatore" }, // Spectral Mist — Spend Hope
  "Compendium.daggerheart.domains.Item.UHL661KR49EgSKHR::7ymu0WU0EHsyeIDi": { file: "jb2a.black_tentacles.dark_purple", forma: "bersaglio" }, // Summon Horror — Mark Stress
  "Compendium.daggerheart.domains.Item.eoC2NFqLs9llBdxC::LL51Prm1G0qJzgdJ": { file: "jb2a.markers.fear.dark_purple.01", forma: "bersaglio" }, // Terrify — Spellcast Roll
  "Compendium.daggerheart.domains.Item.SZS0WYAdFBPuzOrh::I2Ifm2A6C1fkcQJS": { file: "jb2a.shield_themed.above.eldritch_web.01.dark_purple", forma: "lanciatore" }, // Umbral Veil — Mark Stress
  "Compendium.daggerheart.domains.Item.SZS0WYAdFBPuzOrh::oeuSyzRQ7Qtg6JaT": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Umbral Veil — Spend Tokens
  "Compendium.daggerheart.domains.Item.IK56Jod0jLrpHu0V::NEnfKz6ZHlexeLWd": { file: "jb2a.markers.stun.purple.01", forma: "bersaglio" }, // Voice of Dread — Spellcast Roll
  "Compendium.daggerheart.domains.Item.297LR0Ww7QiUwRyL::J0gVHF0IqvuwsTtt": { file: "jb2a.darkness.green", forma: "bersaglio" }, // Wall of Hunger — Spellcast Roll
  "Compendium.daggerheart.domains.Item.297LR0Ww7QiUwRyL::kleemC4p5DTs3YTp": { file: "jb2a.markers.skull.purple.01", forma: "bersaglio" }, // Wall of Hunger — Wall Damage

  // grace
  "Compendium.daggerheart.domains.Item.YNOCNmZ96sCp9NEr::jhEOXtmSiwm4AX1R": { file: "jb2a.misty_step.02.blue", forma: "lanciatore" }, // Astral Projection — Project
  "Compendium.daggerheart.domains.Item.3A7LZ1xmDEMGa165::RKEceNKiQirYwN45": { file: "jb2a.magic_signs.rune.transmutation.complete.yellow", forma: "lanciatore" }, // Copycat — Mimic
  "Compendium.daggerheart.domains.Item.38znCh6kHTkaPwYi::8upofDpPl8wqSl77": { file: "jb2a.magic_signs.rune.illusion.complete.purple", forma: "lanciatore" }, // Deft Deceiver — Gain Advantage
  "Compendium.daggerheart.domains.Item.klahWDFwihqqEhXP::raz0BnldcCkMrKfn": { file: "jb2a.energy_strands.range.multiple.bluepink.02", forma: "proiettile" }, // Encore — Repeat Attack
  "Compendium.daggerheart.domains.Item.tNzFNlVHghloKsFi::EPhd2d8lHEnBd1pO": { file: "jb2a.glint.yellow.many", forma: "lanciatore" }, // Endless Charisma — Spend Hope to Reroll
  "Compendium.daggerheart.domains.Item.a8lFiKX1o8T924ze::G6RBFMbCuHlM45t0": { file: "jb2a.markers.heart.pink.01", forma: "bersaglio" }, // Enrapture — Enrapture
  "Compendium.daggerheart.domains.Item.a8lFiKX1o8T924ze::oJDiE9egDyfdLbR7": { file: "jb2a.icon.heart.pink", forma: "bersaglio" }, // Enrapture — Mark Stress
  "Compendium.daggerheart.domains.Item.KAuNb51AwhD8KEXk::YzrQmUhNZoDYawo0": { file: "jb2a.impact.006.yellow", forma: "bersaglio" }, // Grace-Touched — Mark 1 Stress
  "Compendium.daggerheart.domains.Item.KAuNb51AwhD8KEXk::VkPMSuoowd7hnsR5": { file: "jb2a.on_token_buff.001.001.orangeyellow", forma: "lanciatore" }, // Grace-Touched — Mark Armor Slot
  "Compendium.daggerheart.domains.Item.2ZeuCGVatQdPOVC6::kLMAuyZktmohOSXa": { file: "jb2a.dizzy_stars.200px.blueorange", forma: "bersaglio" }, // Hypnotic Shimmer — Cast
  "Compendium.daggerheart.domains.Item.cWu1o82ZF7GvnbXc::QKS3vo3Nf5CK8rkF": { file: "jb2a.cure_wounds.200px.blue", forma: "bersaglio" }, // Inspirational Words — Clear Hitpoint
  "Compendium.daggerheart.domains.Item.cWu1o82ZF7GvnbXc::5sGMd6m6Ltahit4h": { file: "jb2a.bardic_inspiration.greenorange", forma: "bersaglio" }, // Inspirational Words — Clear Stress
  "Compendium.daggerheart.domains.Item.cWu1o82ZF7GvnbXc::5xn70wYZW7k9aiVl": { file: "jb2a.twinkling_stars.points05.orange", forma: "bersaglio" }, // Inspirational Words — Give Hope
  "Compendium.daggerheart.domains.Item.KHkzA4Zrw8EWN1CH::jD03JDo0H9Q9QV2E": { file: "jb2a.condition.boon.02.001.refraction", forma: "auto" }, // Invisibility — Spellcast Roll
  "Compendium.daggerheart.domains.Item.ubpixIgZrJXKyM3b::r5eA3tAH7EplOQCP": { file: "jb2a.markers.heart.pink.03", forma: "bersaglio" }, // Mass Enrapture — Enrapture
  "Compendium.daggerheart.domains.Item.ubpixIgZrJXKyM3b::QhBaM0LU9tmSI3IO": { file: "jb2a.markers.heart.pink.02", forma: "bersaglio" }, // Mass Enrapture — Mark Stress
  "Compendium.daggerheart.domains.Item.McdncxmO9K1YNP7Y::R5wGBhMUcnhCsfH2": { file: "jb2a.markers_scifi.001.complete.001.pinkyellow", forma: "lanciatore" }, // Never Upstaged — Mark Stress (1 token)
  "Compendium.daggerheart.domains.Item.McdncxmO9K1YNP7Y::Mne0mqkibrTGwPYR": { file: "jb2a.markers_scifi.001.complete.001.pinkyellow", forma: "lanciatore" }, // Never Upstaged — Mark Stress (2 tokens)
  "Compendium.daggerheart.domains.Item.McdncxmO9K1YNP7Y::En7AF3g51P9ud9qj": { file: "jb2a.markers_scifi.001.complete.001.pinkyellow", forma: "lanciatore" }, // Never Upstaged — Mark Stress (3 tokens)
  "Compendium.daggerheart.domains.Item.McdncxmO9K1YNP7Y::WuPJlQ0wSRlGGIkh": { file: "jb2a.markers_scifi.001.complete.001.pinkyellow", forma: "lanciatore" }, // Never Upstaged — Mark Stress (4 tokens)
  "Compendium.daggerheart.domains.Item.IqxzvvjZiYbgx21A::Cb39VXOUPVWl3ea4": { file: "jb2a.ui.chevrons3.yellow", forma: "lanciatore" }, // Notorious — Gain Bonus
  "Compendium.daggerheart.domains.Item.8nRle10pw1HO8QVu::MjSx44ovuKBGVKGs": { file: "jb2a.energy_beam.normal.bluepink.02", forma: "proiettile" }, // Share the Burden — Take Stress
  "Compendium.daggerheart.domains.Item.QED2PDYePOSTbLtC::r9mQqwdwL6J15IEf": { file: "jb2a.healing_generic.burst.greenorange", forma: "bersaglio" }, // Soothing Speech — Heal Another
  "Compendium.daggerheart.domains.Item.QED2PDYePOSTbLtC::s4KRqnNHNrSsOoNi": { file: "jb2a.healing_generic.200px.yellow", forma: "lanciatore" }, // Soothing Speech — Heal Self
  "Compendium.daggerheart.domains.Item.HTv9QEPS466WsstP::Et9JXoAULa2EAZfa": { file: "jb2a.magic_signs.rune.enchantment.complete.pink", forma: "bersaglio" }, // Tell No Lies — Cast
  "Compendium.daggerheart.domains.Item.B4choj481tqajWb9::nuYCkANsYDtZJO6f": { file: "jb2a.energy_beam.normal.bluepink.03", forma: "proiettile" }, // Thought Delver — Delve Deeper
  "Compendium.daggerheart.domains.Item.B4choj481tqajWb9::7ilDNYo2nfRZF1cj": { file: "jb2a.magic_signs.rune.divination.complete.blue", forma: "bersaglio" }, // Thought Delver — Read Surface Thoughts
  "Compendium.daggerheart.domains.Item.7b0mzV5QMPjVPT4o::8ACwa5tqAGyNZ0sR": { file: "jb2a.magic_signs.circle.02.divination.complete.dark_blue", forma: "bersaglio" }, // Through Your Eyes — Cast
  "Compendium.daggerheart.domains.Item.JrdZedm1BFKeV7Yb::8fv9Rk2Nq6kalkEQ": { file: "jb2a.cast_generic.sound.01.pinkteal", forma: "bersaglio" }, // Troublemaker — Provoke
  "Compendium.daggerheart.domains.Item.ZjAdi1FSNCDDHI3X::8BKvS2s0IPMA8wF9": { file: "jb2a.condition.curse.01.010.red", forma: "bersaglio" }, // Words of Discord — Cast

  // midnight
  "Compendium.daggerheart.domains.Item.R5GYUalYXLLFRlNl::IwiUBldoDTUgT6mh": { file: "jb2a.sneak_attack.dark_green", forma: "bersaglio" }, // Chokehold — Damage
  "Compendium.daggerheart.domains.Item.R5GYUalYXLLFRlNl::QCMkze8rU0VB1VYL": { file: "jb2a.markers.stun.purple.01", forma: "bersaglio" }, // Chokehold — Pull into Chokehold
  "Compendium.daggerheart.domains.Item.yL2qrSWmTwXVOySH::3F2zSCsdMMeztQye": { file: "jb2a.toll_the_dead.green.skull_smoke", forma: "bersaglio" }, // Dark Whispers — Ask a question
  "Compendium.daggerheart.domains.Item.62Sj67PdPFzwWVe3::7vU2EBQ1bp3OF3G3": { file: "jb2a.darkness.black", forma: "lanciatore" }, // Eclipse — Cast
  "Compendium.daggerheart.domains.Item.62Sj67PdPFzwWVe3::rvkNiqCr8N6t6KPo": { file: "jb2a.markers.fear.dark_purple.03", forma: "bersaglio" }, // Eclipse — Target Marks Stress
  "Compendium.daggerheart.domains.Item.B5HXqYRJiL3xMNKT::9jzYsHQc8vlPOL3o": { file: "jb2a.magic_signs.rune.illusion.complete.purple", forma: "bersaglio" }, // Glyph of Nightfall — Cast
  "Compendium.daggerheart.domains.Item.gwmYasmfgXZ7tFS6::GrblHtCL5fOD2OQ7": { file: "jb2a.markers.mute.dark_red.01", forma: "bersaglio" }, // Hush — Cast
  "Compendium.daggerheart.domains.Item.dT95m0Jam8sWbeuC::Gl41dsOBTG2p8qwo": { file: "jb2a.smoke.puff.ring.01.white", forma: "lanciatore" }, // Mass Disguise — Cast
  "Compendium.daggerheart.domains.Item.dT95m0Jam8sWbeuC::ZM96wFu3YuAeUXel": { file: "jb2a.markers.simple.001.complete.001.purple", forma: "lanciatore" }, // Mass Disguise — Start Countdown
  "Compendium.daggerheart.domains.Item.FXLsB3QbQvTtqX5B::YVSMa2Igxp6DhNpG": { file: "jb2a.energy_strands.range.multiple.purple.01", forma: "proiettile" }, // Midnight Spirit — Attack Adversary
  "Compendium.daggerheart.domains.Item.FXLsB3QbQvTtqX5B::BDKCP4FvntHkYqXp": { file: "jb2a.smoke.plumes.01.grey", forma: "lanciatore" }, // Midnight Spirit — Summon Spirit
  "Compendium.daggerheart.domains.Item.uSyGKVxOJcnp28po::ksl1CcxcuwYxObiS": { file: "jb2a.on_token_buff.001.001.bluepurple", forma: "lanciatore" }, // Midnight-Touched — Gain Hope
  "Compendium.daggerheart.domains.Item.uSyGKVxOJcnp28po::Ky5wcwBqgm5bJCK1": { file: "jb2a.particle_burst.01.star.bluepurple", forma: "bersaglio" }, // Midnight-Touched — Mark Stress
  "Compendium.daggerheart.domains.Item.zcldCuqOg3dphUVI::e4A6GQERsn08IBby": { file: "jb2a.markers.horror.purple.01", forma: "bersaglio" }, // Night Terror — Horrify
  "Compendium.daggerheart.domains.Item.zcldCuqOg3dphUVI::ELzQvftGxZigPkBH": { file: "jb2a.markers.fear.dark_purple.02", forma: "bersaglio" }, // Night Terror — Steal Fear
  "Compendium.daggerheart.domains.Item.0vdpIn06ifF3xxqZ::SE2C9Andtlw3OQLL": { file: "jb2a.magic_signs.rune.illusion.intro.purple", forma: "lanciatore" }, // Phantom Retreat — Activate
  "Compendium.daggerheart.domains.Item.0vdpIn06ifF3xxqZ::1AJRAbFtDx8Pm26q": { file: "jb2a.misty_step.02.blue", forma: "lanciatore" }, // Phantom Retreat — Retreat
  "Compendium.daggerheart.domains.Item.Ucenef6JpjQxwXni::WTnjKQs2uI1TuF9r": { file: "jb2a.cloud_of_daggers.daggers.purple", forma: "bersaglio" }, // Rain of Blades — Cast
  "Compendium.daggerheart.domains.Item.kguhWlidhxe2GbT0::Llr9uIDUCrfsiZNn": { file: "jb2a.arms_of_hadar.dark_purple", forma: "lanciatore" }, // Shadowbind — Cast
  "Compendium.daggerheart.domains.Item.iQhgqmLwhcSTYnvr::K91pB8O1ak8fikUj": { file: "jb2a.shimmer.01.blue", forma: "lanciatore" }, // Specter of the Dark — Become Spectral
  "Compendium.daggerheart.domains.Item.ewhIzXQ2h9fS9I8c::jCgZ0yCoIhSAVEw3": { file: "jb2a.impact.011.blue", forma: "bersaglio" }, // Spellcharge — Spend Tokens
  "Compendium.daggerheart.domains.Item.NIUhmuQGwbb3UClZ::Auocpi3okFJyXRS5": { file: "jb2a.twinkling_stars.points05.white", forma: "lanciatore" }, // Stealth Expertise — Change Fear to Hope
  "Compendium.daggerheart.domains.Item.SDjjV61TC1NceV1m::hdMFgH17KyxENDAJ": { file: "jb2a.toll_the_dead.green.bell", forma: "bersaglio" }, // Twilight Toll — Spend Tokens
  "Compendium.daggerheart.domains.Item.TV56wSysbU5xAlOa::gMdD6cTmUU4qbwq7": { file: "jb2a.markers.on_token_mask.complete.01.orange", forma: "lanciatore" }, // Uncanny Disguise — Don Facade
  "Compendium.daggerheart.domains.Item.TV56wSysbU5xAlOa::OoNND7VcWoBQdtFK": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Uncanny Disguise — Spend Token
  "Compendium.daggerheart.domains.Item.GBMIElIpk4cvk1Bd::sKF4yJISBeOX8gGH": { file: "jb2a.teleport.01.blue", forma: "lanciatore" }, // Vanishing Dodge — Vanish
  "Compendium.daggerheart.domains.Item.gV4L5ZZmfPrEbIDh::br6UQ0toK4ZYpP2s": { file: "jb2a.wall_of_force.vertical.grey", forma: "lanciatore" }, // Veil of Night — Cast

  // sage
  "Compendium.daggerheart.domains.Item.rZPH0BY8Sznc9sFG::nugW0yPOG08pqBAT": { file: "jb2a.fireflies.many.02.green", forma: "bersaglio" }, // Conjure Swarm — Fire Flies: Cast
  "Compendium.daggerheart.domains.Item.rZPH0BY8Sznc9sFG::533qzPIjcccpiMey": { file: "jb2a.markers.shield.green.01", forma: "lanciatore" }, // Conjure Swarm — Keep Beetles
  "Compendium.daggerheart.domains.Item.rZPH0BY8Sznc9sFG::qygTUSNldYNbP7vN": { file: "jb2a.aura_themed.01.orbit.complete.metal.01.grey", forma: "lanciatore" }, // Conjure Swarm — Tekaira's Armored Beetles: Stress
  "Compendium.daggerheart.domains.Item.Jkp6cMDiHHaBZQRS::xMIMyRto9jgYLN3S": { file: "jb2a.swirling_leaves.complete.01.green", forma: "lanciatore" }, // Conjured Steeds — Conjure
  "Compendium.daggerheart.domains.Item.qJaSNTuDfbPVr8Lb::WqHLiHxP2enmJaHx": { file: "jb2a.ranged.04.projectile.01.green", forma: "proiettile" }, // Corrosive Projectile — Cast
  "Compendium.daggerheart.domains.Item.qJaSNTuDfbPVr8Lb::maf0whws7wgRnFsH": { file: "jb2a.markers.poison.dark_green.01", forma: "bersaglio" }, // Corrosive Projectile — Corrode
  "Compendium.daggerheart.domains.Item.x0FVGE1YbfXalJiw::x62SXSpT9bjIEP5e": { file: "jb2a.vine.complete.nature.single.02.green", forma: "bersaglio" }, // Death Grip — Constrict
  "Compendium.daggerheart.domains.Item.x0FVGE1YbfXalJiw::9416a3EogNFLRdUX": { file: "jb2a.vine.complete.nature.group.01.green", forma: "bersaglio" }, // Death Grip — Hit All Adversaries Between
  "Compendium.daggerheart.domains.Item.x0FVGE1YbfXalJiw::wsXZCKqGKfOUHE1M": { file: "jb2a.vine.complete.nature.single.01.green", forma: "bersaglio" }, // Death Grip — Pull
  "Compendium.daggerheart.domains.Item.06UapZuaA5S6fAKl::bOjFayylsEZmRhmX": { file: "jb2a.particles.outward.greenyellow.01.02", forma: "lanciatore" }, // Forager — 1. Unique Food (Stress)
  "Compendium.daggerheart.domains.Item.06UapZuaA5S6fAKl::gNjJLRtEvKB9SCS2": { file: "jb2a.glint.yellow.few", forma: "lanciatore" }, // Forager — 2. Beautiful Relic (Hope)
  "Compendium.daggerheart.domains.Item.06UapZuaA5S6fAKl::mZGaBlk8JBcXVCrw": { file: "jb2a.markers.runes.orange.01", forma: "lanciatore" }, // Forager — 3. Arcane Rune (Spellcast Roll)
  "Compendium.daggerheart.domains.Item.06UapZuaA5S6fAKl::8RE4q25nr2SJii0W": { file: "jb2a.healing_generic.200px.green", forma: "auto" }, // Forager — 4. Healing Vial (HP)
  "Compendium.daggerheart.domains.Item.LzVpMkD5I4QeaIHf::1rLoYS90AZizJujS": { file: "jb2a.particles.inward.greenyellow.01.03", forma: "lanciatore" }, // Force of Nature — Spend Hope for Action
  "Compendium.daggerheart.domains.Item.LzVpMkD5I4QeaIHf::Yf4L0fo5vq4dIZFM": { file: "jb2a.aura_themed.01.outward.complete.nature.01.green", forma: "lanciatore" }, // Force of Nature — Transform
  "Compendium.daggerheart.domains.Item.JrkUMTzaFmQNBHVm::TVepLgRNQLhZWDu6": { file: "jb2a.fairies.outward_burst.01.bluepurple", forma: "lanciatore" }, // Forest Sprites — Cast
  "Compendium.daggerheart.domains.Item.VZ2b4zfRzV73XTuT::7rHfF3ck1FuixcIC": { file: "jb2a.footprints.shoe.grey", forma: "auto" }, // Gifted Tracker — Ask Questions
  "Compendium.daggerheart.domains.Item.GlRm1Dxlc0Z1b04o::oQ4nCYdwCXqd7NWt": { file: "jb2a.healing_generic.200px.green", forma: "bersaglio" }, // Healing Field — Heal 1 Hit Point
  "Compendium.daggerheart.domains.Item.GlRm1Dxlc0Z1b04o::EqamWsxO86ZjY8WV": { file: "jb2a.healing_generic.400px.green", forma: "bersaglio" }, // Healing Field — Heal 2 Hit Points
  "Compendium.daggerheart.domains.Item.Tag303LoRNC5zGgl::kHAwq8lfsEPd9Qga": { file: "jb2a.butterflies.single.orange", forma: "auto" }, // Natural Familiar — Perform Task
  "Compendium.daggerheart.domains.Item.Tag303LoRNC5zGgl::8Y03LcPgXF30DfzZ": { file: "jb2a.eyes.01.dark_green.single", forma: "lanciatore" }, // Natural Familiar — See Through Eyes
  "Compendium.daggerheart.domains.Item.Tag303LoRNC5zGgl::BhVDgty2nqoOhn97": { file: "jb2a.butterflies.few.orange", forma: "lanciatore" }, // Natural Familiar — Summon Familiar
  "Compendium.daggerheart.domains.Item.atWLorlCOxcrq8WB::IIJC4HGdilVv3YMo": { file: "jb2a.particles.swirl.greenyellow.01.01", forma: "lanciatore" }, // Nature's Tongue — Gain Bonus
  "Compendium.daggerheart.domains.Item.atWLorlCOxcrq8WB::qQEeyIGs0wKjW3a1": { file: "jb2a.wind_lines.01.leaves.01.green", forma: "lanciatore" }, // Nature's Tongue — Speak with Nature
  "Compendium.daggerheart.domains.Item.9a6xP5pxhVvdugk9::7yUMXSJVnDBB25jP": { file: "jb2a.plant_growth.03.round.2x2.complete.greenyellow", forma: "bersaglio" }, // Plant Dominion — Reshape Natural World
  "Compendium.daggerheart.domains.Item.HtWx5IIemCoorMj2::XdAwXl2uWNinInFe": { file: "jb2a.healing_generic.03.burst.bluegreen", forma: "lanciatore" }, // Rejuvenation Barrier — Cast
  "Compendium.daggerheart.domains.Item.VOSFaQHZbmhMyXwi::JVrYhunJ2qr5uOcx": { file: "jb2a.ioun_stones.01.red.agility", forma: "lanciatore" }, // Sage-Touched — Double Agility
  "Compendium.daggerheart.domains.Item.VOSFaQHZbmhMyXwi::zdu8GkVWby3nz8Pa": { file: "jb2a.ioun_stones.01.blue.insight", forma: "lanciatore" }, // Sage-Touched — Double Instinct
  "Compendium.daggerheart.domains.Item.X7YaZgFieBlqaPdZ::ZqnziDBlh5Re7SKs": { file: "jb2a.sleet_storm.01.blue", forma: "bersaglio" }, // Tempest — Blizzard
  "Compendium.daggerheart.domains.Item.X7YaZgFieBlqaPdZ::FEPhujGa5lvu5fXr": { file: "jb2a.whirlwind.bluegrey", forma: "bersaglio" }, // Tempest — Hurricane
  "Compendium.daggerheart.domains.Item.X7YaZgFieBlqaPdZ::CzMlqo91kuTgg1As": { file: "jb2a.fumes.04.complete.grey", forma: "bersaglio" }, // Tempest — Sandstorm
  "Compendium.daggerheart.domains.Item.oUipGK84E2KjoKqh::zuiLXexIzTvLmoKF": { file: "jb2a.aura_themed.01.outward.complete.wood.01.green", forma: "lanciatore" }, // Thorn Skin — Gain Tokens
  "Compendium.daggerheart.domains.Item.oUipGK84E2KjoKqh::IVAyyVf8gqFWB7bP": { file: "jb2a.aura_themed.01.inward.complete.wood.01.green", forma: "lanciatore" }, // Thorn Skin — Use Tokens
  "Compendium.daggerheart.domains.Item.n0P3VS1WfxvmXbB6::I6eSBTpuYDU1nEgr": { file: "jb2a.plant_growth.03.square.2x2.complete.greenyellow", forma: "auto" }, // Towering Stalk — Conjure Stalk
  "Compendium.daggerheart.domains.Item.n0P3VS1WfxvmXbB6::KzEDeofyjxeg3pV5": { file: "jb2a.vine.complete.nature.single.03.green", forma: "bersaglio" }, // Towering Stalk — Use as attack
  "Compendium.daggerheart.domains.Item.qvpvTnkAoRn9vYO4::lrA95PnD2vOwwmgN": { file: "jb2a.entangle.02.complete.02.green", forma: "bersaglio" }, // Vicious Entangle — Cast
  "Compendium.daggerheart.domains.Item.qvpvTnkAoRn9vYO4::vh1IKRvsU4w57lBt": { file: "jb2a.entangle.green", forma: "bersaglio" }, // Vicious Entangle — Restrain Another
  "Compendium.daggerheart.domains.Item.9dFvcM1i3bxG3BSA::WlcAj8f6THUudbWp": { file: "jb2a.plant_growth.03.ring.4x4.complete.greenyellow", forma: "lanciatore" }, // Wild Fortress — Cast
  "Compendium.daggerheart.domains.Item.DjnKlZQYaWdQGKcK::nYu6LRNVDKfWUJhx": { file: "jb2a.aura_themed.01.orbit.complete.nature.01.green", forma: "lanciatore" }, // Wild Surge — Channel Nature

  // splendor
  "Compendium.daggerheart.domains.Item.BNevJyGk7hmN7XOY::zrGLlwmpuUIBrSXy": { file: "jb2a.guiding_bolt.01.blueyellow", forma: "proiettile" }, // Bolt Beacon — Cast
  "Compendium.daggerheart.domains.Item.K8oFepK24UVsAX8B::wKwNncd5XKH312Lz": { file: "jb2a.magic_signs.rune.divination.complete.blue", forma: "lanciatore" }, // Divination — Ask one Question
  "Compendium.daggerheart.domains.Item.Nbw6Jnh1vRZzwHQI::XQD9kHORVBowly4H": { file: "jb2a.magic_signs.circle.02.necromancy.complete.green", forma: "bersaglio" }, // Final Words — Infuse Corpse
  "Compendium.daggerheart.domains.Item.WTlhnQMajc1r8i50::PjXt807MYg1JbAfO": { file: "jb2a.cast_generic.01.yellow", forma: "lanciatore" }, // Healing Hands — Cast
  "Compendium.daggerheart.domains.Item.WTlhnQMajc1r8i50::vmWku5XYmakLdwX2": { file: "jb2a.healing_generic.200px.yellow", forma: "bersaglio" }, // Healing Hands — Heal One Hit Point
  "Compendium.daggerheart.domains.Item.WTlhnQMajc1r8i50::8ElTYMjIM7YI6Kb8": { file: "jb2a.on_token_buff.001.001.white", forma: "bersaglio" }, // Healing Hands — Heal One Stress
  "Compendium.daggerheart.domains.Item.WTlhnQMajc1r8i50::FYHLuVtFCR9A6Nvt": { file: "jb2a.healing_generic.400px.yellow", forma: "bersaglio" }, // Healing Hands — Heal Two Hit Points
  "Compendium.daggerheart.domains.Item.WTlhnQMajc1r8i50::lQMhidLodJn9Nj7e": { file: "jb2a.on_token_buff.001.001.orangeyellow", forma: "bersaglio" }, // Healing Hands — Heal Two Stress
  "Compendium.daggerheart.domains.Item.XtSc0jIJLOoMTMYS::ECYp5SeXDAQzRTgC": { file: "jb2a.healing_generic.burst.greenorange", forma: "bersaglio" }, // Healing Strike — Clear Hit Point
  "Compendium.daggerheart.domains.Item.X8OfkEoI5gLTRf1B::bbWofyWTChZVuW60": { file: "jb2a.icosahedron.rune.above.blueyellow", forma: "lanciatore" }, // Invigoration — Roll Dice Pool
  "Compendium.daggerheart.domains.Item.OszbCj0jTqq2ADx9::i99aNWZqVC8PHAIx": { file: "jb2a.ward.rune.yellow.01", forma: "bersaglio" }, // Life Ward — Mark with Sigil
  "Compendium.daggerheart.domains.Item.TGjR4vJVNbQRV8zr::sDoL9p1cpIx8Vdbb": { file: "jb2a.cure_wounds.200px.blue", forma: "bersaglio" }, // Mending Touch — Heal One Hitpoint
  "Compendium.daggerheart.domains.Item.TGjR4vJVNbQRV8zr::NCDSgZBLoq9fQvku": { file: "jb2a.swirling_sparkles.01.blue", forma: "bersaglio" }, // Mending Touch — Heal One Stress
  "Compendium.daggerheart.domains.Item.TGjR4vJVNbQRV8zr::FsbOSV8eR2PEb1aS": { file: "jb2a.cure_wounds.400px.blue", forma: "bersaglio" }, // Mending Touch — Heal Two Hit Points
  "Compendium.daggerheart.domains.Item.TGjR4vJVNbQRV8zr::mqDV9s6oMRQjJF4U": { file: "jb2a.markers.light_orb.complete.blue", forma: "bersaglio" }, // Mending Touch — Heal Two Stress
  "Compendium.daggerheart.domains.Item.iEBLySZD9z8CLdz7::r2XblKJyZyamOOXq": { file: "jb2a.bless.400px.intro.yellow", forma: "lanciatore" }, // Overwhelming Aura — Cast
  "Compendium.daggerheart.domains.Item.iYNVTB7uAD1FTCZu::QZGSuYgLE6BMbFsD": { file: "jb2a.markers.simple.001.complete.001.yellow", forma: "bersaglio" }, // Reassurance — Reassure
  "Compendium.daggerheart.domains.Item.wUQFsRtww18naYaq::udmHKUtCDClxeB4h": { file: "jb2a.healing_generic.03.burst.bluegreen", forma: "bersaglio" }, // Restoration — Heal Hitpoints
  "Compendium.daggerheart.domains.Item.wUQFsRtww18naYaq::TvF88tS5x3Yof8Q1": { file: "jb2a.on_token_buff.001.001.pinkyellow", forma: "bersaglio" }, // Restoration — Reduce Stress
  "Compendium.daggerheart.domains.Item.wUQFsRtww18naYaq::LFDgLQ2CjnBEoTH9": { file: "jb2a.markers.light.complete.blue", forma: "bersaglio" }, // Restoration — Remove Condition
  "Compendium.daggerheart.domains.Item.z30ciOwQI7g3tHla::znSDInMjOlFZn7Vp": { file: "jb2a.magic_signs.circle.02.conjuration.complete.yellow", forma: "bersaglio" }, // Resurrection — Cast
  "Compendium.daggerheart.domains.Item.z30ciOwQI7g3tHla::NurXUfoPDSVptejR": { file: "jb2a.glint.yellow.few", forma: "lanciatore" }, // Resurrection — Keep Card
  "Compendium.daggerheart.domains.Item.4uAFGp3LxiC07woC::dmnB4ZMSk8lsB8Lg": { file: "jb2a.ranged.beam.001.01.orange", forma: "proiettile" }, // Salvation Beam — Cast
  "Compendium.daggerheart.domains.Item.ffPbSEvLuFrFsMxl::OIrSjtVdt4b2yJ2t": { file: "jb2a.healing_generic.200px.green", forma: "bersaglio" }, // Second Wind — Clear Hit Point
  "Compendium.daggerheart.domains.Item.ffPbSEvLuFrFsMxl::1w6rcNGdI6H9wVIz": { file: "jb2a.particles.inward.greenyellow.01.01", forma: "lanciatore" }, // Second Wind — Clear Three Stress
  "Compendium.daggerheart.domains.Item.db4xV3YErHRslbVE::TQ830KcZOKCdTFuD": { file: "jb2a.cast_generic.earth.01.browngreen", forma: "lanciatore" }, // Shape Material — Shape
  "Compendium.daggerheart.domains.Item.rfIv6lln40Fh6EIl::vox5fIIFsOnraXgK": { file: "jb2a.bubble.001.001.complete.blue", forma: "bersaglio" }, // Shield Aura — Cast Protective Aura
  "Compendium.daggerheart.domains.Item.U1uWJE94HZVudujz::GYEbUY5m30Uw8yf5": { file: "jb2a.divine_smite.caster.blueyellow", forma: "lanciatore" }, // Smite — Charge Smite
  "Compendium.daggerheart.domains.Item.lRHo6ZkK1zybeEoG::eiUQZbHvPkEV03c1": { file: "jb2a.sacred_flame.target.yellow", forma: "bersaglio" }, // Stunning Sunlight — Cast
  "Compendium.daggerheart.domains.Item.lRHo6ZkK1zybeEoG::AI8sGbUXLw4gG8mW": { file: "jb2a.explosion.03.blueyellow", forma: "bersaglio" }, // Stunning Sunlight — Damage on Successful Save
  "Compendium.daggerheart.domains.Item.lOZaRb4fCVgQsWB5::U4faKrfbdN797zJm": { file: "jb2a.magic_signs.circle.02.abjuration.complete.blue", forma: "bersaglio" }, // Zone of Protection — Cast

  // valor
  "Compendium.daggerheart.domains.Item.cy8GjBPGc9w9RaGO::Z864RtY6fR5Cnrx9": { file: "jb2a.aura_themed.01.inward.complete.metal.01.grey", forma: "lanciatore" }, // Armorer — Repair Armor
  "Compendium.daggerheart.domains.Item.tdsL00yTSLNgZWs6::OdRTXMOXhZFiZHES": { file: "jb2a.markers.simple.001.complete.001.blue", forma: "lanciatore" }, // Bold Presence — Avoid Condition
  "Compendium.daggerheart.domains.Item.tdsL00yTSLNgZWs6::GYXo5c2OYS3v1UBA": { file: "jb2a.on_token_buff.001.001.blue", forma: "lanciatore" }, // Bold Presence — Spend Hope
  "Compendium.daggerheart.domains.Item.ABp9pUfBS69NomTD::kyPCNwzwrbb3LhWm": { file: "jb2a.bless.200px.intro.yellow", forma: "lanciatore" }, // Critical Inspiration — Critically Succeed
  "Compendium.daggerheart.domains.Item.z8FFPhDh2SdFkFfS::LT5173FgPoF81v7o": { file: "jb2a.side_impact.part.shockwave.blue", forma: "bersaglio" }, // Forceful Push — Spend Hope
  "Compendium.daggerheart.domains.Item.SgvjJfMyubZowPxS::GB1MKw1nnkSgDhBd": { file: "jb2a.energy_strands.complete.blue.01", forma: "lanciatore" }, // Full Surge — Mark Stress
  "Compendium.daggerheart.domains.Item.HufF5KzuNfEb9RTi::kiKrK30UMopx3izN": { file: "jb2a.markers.simple.001.complete.001.red", forma: "bersaglio" }, // Goad Them On — Goad
  "Compendium.daggerheart.domains.Item.WnGldYhJPDhx8v9X::FOrohOCnzfdBl4sM": { file: "jb2a.impact.ground_crack.02.orange", forma: "lanciatore" }, // Ground Pound — Strike Ground
  "Compendium.daggerheart.domains.Item.kdFoLo3KXwn4LqTG::SKG6Gu0uJZxtYTnz": { file: "jb2a.markers.chain.spectral_standard.complete.02.blue", forma: "bersaglio" }, // Hold the Line — Restrain
  "Compendium.daggerheart.domains.Item.kdFoLo3KXwn4LqTG::hxupFx3czFHz3xfG": { file: "jb2a.markers.shield_rampart.complete.01.orange", forma: "lanciatore" }, // Hold the Line — Spend Hope
  "Compendium.daggerheart.domains.Item.KOf6LLpMRNwjezDx::0rLdATV71dviB2MG": { file: "jb2a.shield.01.complete.01.blue", forma: "lanciatore" }, // I Am Your Shield — Mark Stress
  "Compendium.daggerheart.domains.Item.YWCRplmtwpCjpq5i::h5j4TcmhwtAhPScT": { file: "jb2a.markers.01.blueyellow", forma: "bersaglio" }, // Lead by Example — Mark Stress
  "Compendium.daggerheart.domains.Item.BdePs1ZWpZTZvY1Z::ByT4FdZX9YSLmKcL": { file: "jb2a.markers.heart.pink.01", forma: "bersaglio" }, // Lean on Me — Healing
  "Compendium.daggerheart.domains.Item.oDIZoC4l19Nli0Fj::DAsnjDomrlupo1aw": { file: "jb2a.on_token_buff.001.001.blueteal", forma: "lanciatore" }, // Rise Up — Clear Stress
  "Compendium.daggerheart.domains.Item.pcbYD33rBBdAo5f9::rnt24R8xyeyBrJS0": { file: "jb2a.healing_generic.200px.blue", forma: "lanciatore" }, // Rousing Strike — Critically Succeed
  "Compendium.daggerheart.domains.Item.JwfhtgmmuRxg4zhI::h9odg7Tk94O0M5l1": { file: "jb2a.shield.01.outro_explode.blue", forma: "lanciatore" }, // Shrug It Off — Roll d6
  "Compendium.daggerheart.domains.Item.stId5syX7YpP2JGz::YEzqOIIV4HqzCKx4": { file: "jb2a.icosahedron.rune.below.blueyellow", forma: "bersaglio" }, // Support Tank — Spend Hope
  "Compendium.daggerheart.domains.Item.CUIQmrPjf9VCHmwJ::NXWbijHKKgqgcAMB": { file: "jb2a.healing_generic.400px.blue", forma: "lanciatore" }, // Unbreakable — Roll d6
  "Compendium.daggerheart.domains.Item.k1AtYd3lSchIymBr::F04596OgMgpnhpQp": { file: "jb2a.aura_themed.01.orbit.complete.metal.01.grey", forma: "lanciatore" }, // Valor-Touched — Clear Armor
});
