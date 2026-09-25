/*
 * Una scelta per ogni azione degli avversari del compendio daggerheart.adversaries: l'attacco
 * base di ognuno e le azioni delle sue feature, 1031 righe su 264 avversari.
 *
 * Fatta come assegnazioni.mjs: dal testo di ogni feature, cercando nel database di JB2A
 * gratuito l'effetto che la racconta, con una convenzione fissa per le armi comuni (ogni
 * Longbow tira la stessa freccia). Le chiavi sono quelle di chiavi.mjs per gli avversari:
 * id dell'attore d'origine, quindi valgono per il compendio del system e per le sue copie.
 *
 * Ogni file e' verificato contro JB2A_DnD5e 0.9.3 (test/assegnazioni.test.mjs). Resta una
 * proposta: quello che conta e' come appare sul canvas, e quello lo dice solo Prova.
 *
 * Generata una volta dai sorgenti del system (Foundryborne/daggerheart 2.10.5).
 */

export const ASSEGNAZIONI_AVVERSARI = Object.freeze({
  // tier 1
  "Actor.89yAh30vaNQOALlz::TCKVaVweyJzhEArX": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Acid Burrower — Claws
  "Actor.89yAh30vaNQOALlz.Item.MFmGN6Tbf5GYxrQ9::3lGGgkxnzgUwHGIp": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Acid Burrower · Relentless (3) — Spotlight: Relentless
  "Actor.89yAh30vaNQOALlz.Item.ctXYwil2D1zfsekT::4ppSeiTdbqnMzWAs": { file: "jb2a.impact.ground_crack.orange.02", forma: "lanciatore" }, // Acid Burrower · Earth Eruption — Roll Save
  "Actor.89yAh30vaNQOALlz.Item.UpFsnlbZkyvM2Ftv::yd10HwK6Wa3OEvv2": { file: "jb2a.ranged.04.projectile.01.green", forma: "proiettile" }, // Acid Burrower · Spit Acid — Attack
  "Actor.89yAh30vaNQOALlz.Item.aNIVT5LKhwLyjKpI::XbtTzOBvlTaxOKTy": { file: "jb2a.liquid.splash02.red", forma: "lanciatore" }, // Acid Burrower · Acid Bath — Splash
  "Actor.89yAh30vaNQOALlz.Item.aNIVT5LKhwLyjKpI::xpcp1ECTWF20kxve": { file: "jb2a.fumes.steam.white", forma: "bersaglio" }, // Acid Burrower · Acid Bath — Acid Ground
  "Actor.C9vt09lsAa6AeXeg::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Ahuizotl — Bite
  "Actor.C9vt09lsAa6AeXeg.Item.Jbilkk39lMYwU67g::yIaeZYX21Ib2sC0v": { file: "jb2a.impact.water.02.blue", forma: "bersaglio" }, // Ahuizotl · Aquatic Attacker — Attack
  "Actor.C9vt09lsAa6AeXeg.Item.rIILi3ExswAZbv5C::2WisXlMdSgjoRWMe": { file: "jb2a.melee_attack.01.trail.01.orangered", forma: "bersaglio" }, // Ahuizotl · Tail Swat — Mark Stress
  "Actor.C9vt09lsAa6AeXeg.Item.dqwQS5ZsTMHWUEPL::R7tcGeQrmUSXunfD": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Ahuizotl · Drag and Bag — Spend Fear
  "Actor.JRhrrEg5UroURiAD::eeYqzFqOLlYgzgj0": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Archer Guard — Longbow
  "Actor.JRhrrEg5UroURiAD.Item.DMtd1EXQPlPaoRmV::84rwldOFvTPrrHJJ": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Archer Guard · Hobbling Shot — Attack
  "Actor.bXuRtHS6diPWAJKA::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Atototl — Talons
  "Actor.bXuRtHS6diPWAJKA.Item.lkBmArrMEvBpaKYQ::I5Zk1KDeIh7DWLzR": { file: "jb2a.whirlwind.bluegrey", forma: "lanciatore" }, // Atototl · Archer's Bane — Spend Fear
  "Actor.71qKDLKO3CsrNkdy::ma2apTUYocC9xwH8": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Bear — Claws
  "Actor.71qKDLKO3CsrNkdy.Item.zgR0MEqyobKp2yXr::PXL3e51eBYZ4O2lb": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Bear · Bite — Attack
  "Actor.71qKDLKO3CsrNkdy.Item.4hJbq9WCwJn78frt::ZQHGR0IweeWBLokB": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Bear · Momentum — Gain Fear
  "Actor.B4LZcGuBAHzyVdzy::Q8oyDdZs8CNheZ4q": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Bladed Guard — Longsword
  "Actor.B4LZcGuBAHzyVdzy.Item.qEn4baWgkjKtmILp::3lbeEeJdjzPn0MoG": { file: "jb2a.markers.shield_rampart.complete.01.orange", forma: "lanciatore" }, // Bladed Guard · Shield Wall — Block
  "Actor.B4LZcGuBAHzyVdzy.Item.9gizFt9ovKL05DXu::TK5R00afB1RIA6gp": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Bladed Guard · Detain — Attack
  "Actor.2UeZ0tEe7AzgSJNd::pAO91QZjuog2fWLW": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Brawny Zombie — Slam
  "Actor.2UeZ0tEe7AzgSJNd.Item.LP7xVLMTkJsmiIvl::qCcWw60cPZnEWbpG": { file: "jb2a.melee_generic.creature_attack.claw.002.red", forma: "bersaglio" }, // Brawny Zombie · Rend Asunder — Attack
  "Actor.2UeZ0tEe7AzgSJNd.Item.69reUZ5tv3splqyO::xV1z3dk9c7jIkk7v": { file: "jb2a.liquid.splash02.red", forma: "bersaglio" }, // Brawny Zombie · Rip and Tear — Damage
  "Actor.IwliIAsSth5pKGU4::qHEFFbkvLvbm9VmI": { file: "jb2a.mace.melee.01.white", forma: "bersaglio" }, // Bugboar — Spiked Mace
  "Actor.IwliIAsSth5pKGU4.Item.1NsdEyGbRIVsyUtw::dBGvHWLAmODHYX3e": { file: "jb2a.impact.007.orange", forma: "bersaglio" }, // Bugboar · Surprise! — Attack
  "Actor.IwliIAsSth5pKGU4.Item.kk2cwy2BB3qVqEYK::zkXJOtVStH9iXwPu": { file: "jb2a.impact.005.orange", forma: "bersaglio" }, // Bugboar · Brutal — Mark Stress
  "Actor.IwliIAsSth5pKGU4.Item.iIv8oE9H4wuyg0Jy::eRUcVhryNIBg9ZZq": { file: "jb2a.on_token_buff.001.001.purplered", forma: "lanciatore" }, // Bugboar · Warheart — Spend Fear
  "Actor.8Zkqk1jU09nKL2fy::cw0kV0qLPZmL7cpu": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Cave Ogre — Club
  "Actor.8Zkqk1jU09nKL2fy.Item.ynuyMl1sMQYINfcQ::UoZ6vXRXvWYjpJpZ": { file: "jb2a.on_token_buff.001.001.orangeyellow", forma: "lanciatore" }, // Cave Ogre · Ramp Up — Spend Fear
  "Actor.8Zkqk1jU09nKL2fy.Item.zGvaBYJPOOnQVQEn::3p1qfHy5uHe4H2hB": { file: "jb2a.boulder.toss.02.01.stone.brown", forma: "proiettile" }, // Cave Ogre · Hail of Boulders — Throw
  "Actor.8Zkqk1jU09nKL2fy.Item.zGvaBYJPOOnQVQEn::pmeromzI4eQOilbp": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Cave Ogre · Hail of Boulders — Gain Fear
  "Actor.8Zkqk1jU09nKL2fy.Item.Qxkddj6nQc4RDExW::PtTu9bnCJKMySBSV": { file: "jb2a.impact.ground_crack.01.orange", forma: "bersaglio" }, // Cave Ogre · Rampaging Fury — Damage
  "Actor.JQN5j1AB0VwV0AWN::qHEFFbkvLvbm9VmI": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Common Ruffian — Improvised Weapon
  "Actor.JQN5j1AB0VwV0AWN.Item.sLpf8vqxOlxYUHZN::3jD9o4jVcwkmFiLm": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Common Ruffian · Group Attack — Spend Fear
  "Actor.JQN5j1AB0VwV0AWN.Item.itwtcnEMaOpl4T8K::RqGsL4UK1ITsR6ZF": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Common Ruffian · Survival Instinct — Flee Check
  "Actor.uOP5oT9QzXPlnf3p::CunN7A4VWteBWl5p": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Construct — Fist Slam
  "Actor.uOP5oT9QzXPlnf3p.Item.y3oUmDLGkcSjOO5Q::bay0pyPsCyDEZKuk": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Construct · Relentless (2) — Spotlight: Relentless
  "Actor.uOP5oT9QzXPlnf3p.Item.93m085bEaKFzvEWT::OswphW4Z1B5oa4ts": { file: "jb2a.impact.ground_crack.01.orange", forma: "bersaglio" }, // Construct · Trample — Attack
  "Actor.uOP5oT9QzXPlnf3p.Item.EF6YIDjQ0liFubGA::xYACTiZzApmCXXmf": { file: "jb2a.static_electricity.01.blue", forma: "lanciatore" }, // Construct · Overload — Mark Stress
  "Actor.uOP5oT9QzXPlnf3p.Item.UlGLuV1L33tDWkli::fkIWRdcGPgHgm6VC": { file: "jb2a.explosion.04.blue", forma: "lanciatore" }, // Construct · Death Quake — Attack
  "Actor.CBBuEXAlLKFMJdjg::6qKQpByqqYSMzy2X": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Courtier — Daggers
  "Actor.CBBuEXAlLKFMJdjg.Item.LYNaKEYcYMgvF4Rf::Yi3rvjj0Umqt5Z8j": { file: "jb2a.icon.stun.purple", forma: "bersaglio" }, // Courtier · Mockery — Mark Stress
  "Actor.CBBuEXAlLKFMJdjg.Item.Ux42ELBBuSYwm4yW::IwuFowlcXyjvfOxp": { file: "jb2a.hunters_mark.pulse.01.green", forma: "bersaglio" }, // Courtier · Scapegoat — Spend Fear
  "Actor.Z16fYvCNRlD4XZij::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Darkweave Crawler — Bite
  "Actor.Z16fYvCNRlD4XZij.Item.M4AppGMZivFZ4Dya::RNpG65GAYvvq0aPP": { file: "jb2a.icon.horror.purple", forma: "bersaglio" }, // Darkweave Crawler · Skin-Crawling — Spend Fear
  "Actor.Z16fYvCNRlD4XZij.Item.TNGpMcO2qZduHGlU::Txi5mJhUEZUHQ5KW": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Darkweave Crawler · Group Attack — Spend Fear
  "Actor.Z16fYvCNRlD4XZij.Item.OgB9BlmNPURWYzMI::8g2JmKlfw4qD6wfW": { file: "jb2a.icon.poison.dark_green", forma: "bersaglio" }, // Darkweave Crawler · Darkweave Venom — Mark Stress
  "Actor.PcBt4ggimibM7DCp::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Darkweave Queen — Spider Bite
  "Actor.PcBt4ggimibM7DCp.Item.X7Fa0Ur0otImyKGP::Evpfh4Phbsiqv6wN": { file: "jb2a.eyes.01.dark_green.many", forma: "lanciatore" }, // Darkweave Queen · Den Mother — Spend Fear
  "Actor.PcBt4ggimibM7DCp.Item.UMGKSgbSSypytyKF::zYpsGhG4WRjmPKEi": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Darkweave Queen · Quicker Than She Looks — Spend Fear
  "Actor.PcBt4ggimibM7DCp.Item.71yNHGcvRHBXWKVe::TaPyMVENOhVwlndu": { file: "jb2a.web.02", forma: "bersaglio" }, // Darkweave Queen · Darkfang Envenomation — Spend Fear
  "Actor.YdGTyYI6bBXh5lgV::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Darkweave Spinner — Fangs
  "Actor.YdGTyYI6bBXh5lgV.Item.15egsMZB5SaStcBh::6FouYRsQeLENa8Ze": { file: "jb2a.web.complete.002.white", forma: "bersaglio" }, // Darkweave Spinner · Wrap in Shadow-Silk — Mark Stress
  "Actor.YdGTyYI6bBXh5lgV.Item.c4cCwB00RC5qrOSN::eKgjkfkYtrbsZqBk": { file: "jb2a.markers.horror.purple.01", forma: "bersaglio" }, // Darkweave Spinner · Shadow Fang — Spend Fear
  "Actor.ADiUlCE0woMcvnzv::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.200px.red", forma: "bersaglio" }, // Darkweave Swarmlings — Nibble
  "Actor.ADiUlCE0woMcvnzv.Item.ca15rqxQtas4Lx6v::IwfNYUpw38Uiox6M": { file: "jb2a.web.01", forma: "bersaglio" }, // Darkweave Swarmlings · "Get 'em Off , Get 'em Off !" — Mark Stress
  "Actor.9x2xY9zwc3xzbXo5::aZdnemQ6rcxAEImP": { file: "jb2a.vine.complete.nature.single.01.green", forma: "bersaglio" }, // Deeproot Defender — Vines
  "Actor.9x2xY9zwc3xzbXo5.Item.0DSCzAFXy0hV4afJ::55hCZsJQhJNcZ0lX": { file: "jb2a.impact.ground_crack.03.orange", forma: "lanciatore" }, // Deeproot Defender · Ground Slam — Stress Damage
  "Actor.9x2xY9zwc3xzbXo5.Item.rreGFW5TbhUoZf2T::nQ3vXrrKBizZoaDt": { file: "jb2a.entangle.02.complete.02.green", forma: "bersaglio" }, // Deeproot Defender · Grab and Drag — Attack
  "Actor.wNzeuQLfLUMvgHlQ::t7Gi4FhuHRH5sk0c": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Dire Wolf — Claws
  "Actor.wNzeuQLfLUMvgHlQ.Item.wQXEnMqrl2jo91oy::FFQvt3sMfuwXxIrf": { file: "jb2a.melee_generic.creature_attack.claw.001.red", forma: "bersaglio" }, // Dire Wolf · Pack tactics — Attack
  "Actor.wNzeuQLfLUMvgHlQ.Item.85XrqDvLP30YOO43::Tvizq1jEfG8FyfNc": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Dire Wolf · Hobbling Strike — Attack
  "Actor.VhPEpRkCZKOwK3me::qHEFFbkvLvbm9VmI": { file: "jb2a.impact.008.orange", forma: "bersaglio" }, // Elk — Antlers
  "Actor.VhPEpRkCZKOwK3me.Item.WxeMh4vOkER8kCLr::q2bat3jLmcpt1wKC": { file: "jb2a.impact.013.001.orangeyellow", forma: "bersaglio" }, // Elk · Headbutt — 
  "Actor.VhPEpRkCZKOwK3me.Item.ku7SWV1AXQ1d50sN::6Jfk9gDwaNsRgcWC": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Elk · Bolt — Flee Check
  "Actor.53xmu2ZYzjIOy4Td::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Falcon — Talons
  "Actor.53xmu2ZYzjIOy4Td.Item.UwmsJcqQXt9ZannY::hm2Xd74Rii7Qz6BJ": { file: "jb2a.swirling_feathers.outburst.01.textured", forma: "bersaglio" }, // Falcon · Dive Bomb — Mark Stress
  "Actor.IIWV4ysJPFPnTP7W::JLnQt0eeeZxbUjwB": { file: "jb2a.rapier.melee.01.white", forma: "bersaglio" }, // Giant Mosquitoes — Proboscis
  "Actor.IIWV4ysJPFPnTP7W.Item.BTlMLjG65KQs0Jk2::7ee6IhkKYDehjLmg": { file: "jb2a.icon.drop.red", forma: "lanciatore" }, // Giant Mosquitoes · Bloodsucker — Mark Stress
  "Actor.4PfLnaCrOcMdb4dK::qIkqMlJT9d2QuUx4": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Giant Rat — Claws
  "Actor.4PfLnaCrOcMdb4dK.Item.fsaBlCjTdq1jM23G::q8chow47nQLR9qeF": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Giant Rat · Group Attack — Spend Fear
  "Actor.fmfntuJ8mHRCAktP::eUkgLpljdidmySWd": { file: "jb2a.melee_generic.creature_attack.pincer.001.red", forma: "bersaglio" }, // Giant Scorpion — Pincers
  "Actor.fmfntuJ8mHRCAktP.Item.4ct6XEXiTBFQKvXW::PJbZ4ibLPle9BBRv": { file: "jb2a.melee_generic.creature_attack.pincer.001.red", forma: "bersaglio" }, // Giant Scorpion · Double Strike — Attack
  "Actor.fmfntuJ8mHRCAktP.Item.lANiDkxxth2sGacT::ZkcplnqoMP7dH9F4": { file: "jb2a.icon.poison.dark_green", forma: "bersaglio" }, // Giant Scorpion · Venomous Stinger — Attack
  "Actor.fmfntuJ8mHRCAktP.Item.TmDpAY5t3PjhEv9K::1Fn4rvhueQoMXqFc": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Giant Scorpion · Momentum — Gain Fear
  "Actor.8KWVLWXFhlY2kYx0::7kIw2Iz4ybrk5XD3": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Glass Snake — Glass Fangs
  "Actor.8KWVLWXFhlY2kYx0.Item.Efa6t9Ow8b1DRyZV::H1nUSOudbtha1lnC": { file: "jb2a.impact_themed.ice_shard.blue", forma: "bersaglio" }, // Glass Snake · Armor-Shredding Shards — Damage Armor
  "Actor.8KWVLWXFhlY2kYx0.Item.Ro9XCeXsTOT9SXyo::2UzeQYL5HeyF3zwh": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Glass Snake · Spinning Serpent — Attack
  "Actor.8KWVLWXFhlY2kYx0.Item.LR5XHauNtWcl18CY::yx5fjMLLwSnvSbqs": { file: "jb2a.markers.simple.001.complete.001.green", forma: "lanciatore" }, // Glass Snake · Spitter — Spend Fear
  "Actor.8KWVLWXFhlY2kYx0.Item.LR5XHauNtWcl18CY::Ds6KlQKZCOhh5OMT": { file: "jb2a.spell_projectile.ice_shard.blue", forma: "proiettile" }, // Glass Snake · Spitter — Spit Attack
  "Actor.8KWVLWXFhlY2kYx0.Item.LR5XHauNtWcl18CY::xccwknU2xHUwQSdn": { file: "jb2a.icosahedron.roll.blue", forma: "lanciatore" }, // Glass Snake · Spitter — Roll d6
  "Actor.SHXedd9zZPVfUgUa::J4esW35vkfqL09H2": { file: "jb2a.liquid.splash.blue", forma: "bersaglio" }, // Green Ooze — Ooze Appendage
  "Actor.SHXedd9zZPVfUgUa.Item.gJWoUSTGwVsJwPmK::nU4xpjruOvskcmiA": { file: "jb2a.markers.shield_cracked.purple.01", forma: "bersaglio" }, // Green Ooze · Acidic Form — Damage Armor
  "Actor.SHXedd9zZPVfUgUa.Item.Sm9Sk4mSvcq6PkmR::fSxq0AL6YwZs7OAH": { file: "jb2a.liquid.blob.blue", forma: "bersaglio" }, // Green Ooze · Envelop — Attack
  "Actor.SHXedd9zZPVfUgUa.Item.qNhrEK2YF8e3ljU6::J8U7dw3cDSsEirr5": { file: "jb2a.water_splash.circle.01.blue", forma: "lanciatore" }, // Green Ooze · Split — Spend Fear
  "Actor.lzu6TNdRtCLoo3fN::qHEFFbkvLvbm9VmI": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Grimmling Warband — Tailor's Shears
  "Actor.lzu6TNdRtCLoo3fN.Item.zScKH0UIU2MiV0FC::ChMeJVtF5Jt1hfpr": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Grimmling Warband · Cowardly — Flee Check
  "Actor.c6WgrpzgbgSpEiyA::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Harpy — Talons
  "Actor.c6WgrpzgbgSpEiyA.Item.Lx1ZNmwu5BfS48AD::dmvF8Xl8trtYxVYA": { file: "jb2a.fumes.04.complete.grey", forma: "lanciatore" }, // Harpy · Toxic Aura — Activate Stench
  "Actor.c6WgrpzgbgSpEiyA.Item.L4R7Hwu3YKS0ySfl::ppHoKGu7ZZRPg8K1": { file: "jb2a.swirling_feathers.outburst.01.textured", forma: "bersaglio" }, // Harpy · Swooping Attack — Mark Stress
  "Actor.uRtghKE9mHlII4rs::XYt7hhTxfQzwaeSV": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Harrier — Javelin
  "Actor.uRtghKE9mHlII4rs.Item.v8TMp5ATyAjrmJJM::FiuiLUbNUL0YKq7w": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Harrier · Fall Back — Attack
  "Actor.mK3A5FTx6k8iPU3F::0dFioP22kNlGFnNG": { file: "jb2a.mace.melee.01.white", forma: "bersaglio" }, // Head Guard — Mace
  "Actor.mK3A5FTx6k8iPU3F.Item.SsgN2qSYpQLR43Cz::lI0lnRb3xrUjqIYX": { file: "jb2a.bless.400px.intro.yellow", forma: "lanciatore" }, // Head Guard · Rally Guards — Rally
  "Actor.mK3A5FTx6k8iPU3F.Item.YeJ7eJVCKsRxG8mk::xyhaCmPGiVMsTViH": { file: "jb2a.extras.tmfx.radar.circle.pulse.01.normal", forma: "lanciatore" }, // Head Guard · On My Signal — Start Countdown
  "Actor.mK3A5FTx6k8iPU3F.Item.sd2OlhLchyoqeKke::tD1hAwP6scxXrouw": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Head Guard · Momentum — Gain Fear
  "Actor.5Lh1T0zaT8Pkr2U2::i2eLbXs9xAhNKIE2": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Jagged Knife Bandit — Daggers
  "Actor.5Lh1T0zaT8Pkr2U2.Item.V7haVmSLm6vTeffc::X7xdCLY7ySMpaTHe": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Jagged Knife Bandit · From Above — Damage
  "Actor.MbBPIOxaxXYNApXz::lrxaLCDvwAbw9x66": { file: "jb2a.eldritch_blast.purple", forma: "proiettile" }, // Jagged Knife Hexer — Staff
  "Actor.MbBPIOxaxXYNApXz.Item.Bl8L0RCGOgVUzuXo::yzjCJyfGzZrEd0G3": { file: "jb2a.condition.curse.01.001.red", forma: "bersaglio" }, // Jagged Knife Hexer · Curse — Use
  "Actor.MbBPIOxaxXYNApXz.Item.d8uVdKpTm9yw6TZS::HmvmqoMli6oC2y2a": { file: "jb2a.particle_burst.01.circle.bluepurple", forma: "bersaglio" }, // Jagged Knife Hexer · Chaotic Flux — Attack
  "Actor.CBKixLH3yhivZZuL::hhjyKNOnAUWNaM3J": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Jagged Knife Kneebreaker — Club
  "Actor.CBKixLH3yhivZZuL.Item.Sa4Nt0eoDjirBKGf::uMNSQzNPVPhHT34T": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Jagged Knife Kneebreaker · Hold Them Down — Attack
  "Actor.C0OMQqV7pN6t7ouR::5UcUySA6B00z6hDJ": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Jagged Knife Lackey — Daggers
  "Actor.C0OMQqV7pN6t7ouR.Item.1k5TmQIAunM7Bv32::ferZO3BuiP9zU46m": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Jagged Knife Lackey · Group Attack — Spend Fear
  "Actor.aTljstqteGoLpCBq::JUUvFdSqd0Z1cWKi": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Jagged Knife Lieutenant — Javelin
  "Actor.aTljstqteGoLpCBq.Item.LIAbel7pMzAHpgF3::IfMFU67g4sfhSYtm": { file: "jb2a.cast_generic.01.yellow", forma: "lanciatore" }, // Jagged Knife Lieutenant · Tactician — Mark Stress
  "Actor.aTljstqteGoLpCBq.Item.Mo91w4ccffcmBPt5::MCTBsw9lusUdubj0": { file: "jb2a.cast_generic.sound.01.pinkteal", forma: "lanciatore" }, // Jagged Knife Lieutenant · More Where That Came From — Summon
  "Actor.aTljstqteGoLpCBq.Item.qe94UdLZb0p3Gvxj::fzVyO0DUwIVEUCtg": { file: "jb2a.melee_attack.03.trail.01.orangered", forma: "bersaglio" }, // Jagged Knife Lieutenant · Coup de Grace — Attack
  "Actor.aTljstqteGoLpCBq.Item.uelnRgGStjJ27VtO::GSjfSgBzyhbVcpbt": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Jagged Knife Lieutenant · Momentum — Gain Fear
  "Actor.XF4tYTq9nPJAy2ox::pkJ3n8sSHFsmwp0i": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Jagged Knife Shadow — Daggers
  "Actor.XF4tYTq9nPJAy2ox.Item.dhycdSd4NYdPOYbP::6G5Dasl1pP8pfYkZ": { file: "jb2a.sneak_attack.dark_green", forma: "bersaglio" }, // Jagged Knife Shadow · Backstab — Attack
  "Actor.XF4tYTq9nPJAy2ox.Item.ILIogeKbYioPutRw::s0X44RPg5hA8lVax": { file: "jb2a.smoke.puff.ring.01.white", forma: "lanciatore" }, // Jagged Knife Shadow · Cloaked — Use
  "Actor.1zuyof1XuIfi3aMG::u6CzK0FpH5PiDmVx": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Jagged Knife Sniper — Shortbow
  "Actor.1zuyof1XuIfi3aMG.Item.adPXzpvLREjN3len::2eX7P0wSfbKKu8dJ": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Jagged Knife Sniper · Unseen Strike — Attack
  "Actor.Eii92UHVhFXh59kL::qHEFFbkvLvbm9VmI": { file: "jb2a.impact.009.orange", forma: "bersaglio" }, // Kelpie — Hooves
  "Actor.Eii92UHVhFXh59kL.Item.vJ9gupJ0Hmya1o47::ATfhAWkGm5zUpMkd": { file: "jb2a.shimmer.01.blue", forma: "lanciatore" }, // Kelpie · Shapeshifter — Mark Stress
  "Actor.Eii92UHVhFXh59kL.Item.c4uXzgVzI95IC7aR::MywzMhMrElgeWpQz": { file: "jb2a.icon.heart.pink", forma: "bersaglio" }, // Kelpie · Enchant — Spend Fear
  "Actor.DtpTGuzeLlcZ43ID::qHEFFbkvLvbm9VmI": { file: "jb2a.unarmed_strike.magical.01.blue", forma: "bersaglio" }, // Masque Muerte — Open-Handed Strike
  "Actor.DtpTGuzeLlcZ43ID.Item.6o1xTsu1ujGrfABq::1hKw91twBrueiMur": { file: "jb2a.icon.stun.purple", forma: "bersaglio" }, // Masque Muerte · Heel Turn — Mark Stress
  "Actor.DtpTGuzeLlcZ43ID.Item.lPJq72e93dc2ODK3::ohqoKm9BMxQaMMBK": { file: "jb2a.impact.ground_crack.frost.01.white", forma: "bersaglio" }, // Masque Muerte · Spectral Suplex — Spend Fear
  "Actor.DtpTGuzeLlcZ43ID.Item.NPoRVKRQzuLUw0mM::aeMK4h1D7u7g7C4Z": { file: "jb2a.toll_the_dead.green.skull_smoke", forma: "lanciatore" }, // Masque Muerte · Unmasking Death — Spend Fear
  "Actor.DtpTGuzeLlcZ43ID.Item.pR9baknxxTOr3Vbb::XEMbSiuz6HZFDY3F": { file: "jb2a.markers.chain.spectral_standard.complete.02.blue", forma: "bersaglio" }, // Masque Muerte · Tag Team — Spend Fear
  "Actor.MmK6Sn51uikou7wI::qHEFFbkvLvbm9VmI": { file: "jb2a.rapier.melee.01.white", forma: "bersaglio" }, // Mechanorb — Needle
  "Actor.Al3w2CgjfdT3p9ma::YcyLN5Omq8WlZVHZ": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Merchant — Club
  "Actor.Al3w2CgjfdT3p9ma.Item.Ksdgov6mYg7Og2ys::sTHDvAggf1nUX4Ai": { file: "jb2a.dizzy_stars.200px.blueorange", forma: "bersaglio" }, // Merchant · The Runaround — Stress Damage
  "Actor.sRn4bqerfARvhgSV::8JEdRwrTeVoBTaXq": { file: "jb2a.energy_strands.range.multiple.bluepink.02", forma: "proiettile" }, // Minor Chaos Elemental — Warp Blast
  "Actor.sRn4bqerfARvhgSV.Item.oAxhAawgcK7DAdpa::g4CVwjDeJgTJ2oCw": { file: "jb2a.thunderwave.center.blue", forma: "lanciatore" }, // Minor Chaos Elemental · Sickening Flux — Mark HP
  "Actor.sRn4bqerfARvhgSV.Item.updQuIK8sybf4YmW::QzuQIAtSrgz9Zd5V": { file: "jb2a.aura_themed.01.outward.complete.nature.01.green", forma: "lanciatore" }, // Minor Chaos Elemental · Remake Reality — Spend Fear
  "Actor.sRn4bqerfARvhgSV.Item.JqRfb0IZ3aJrVazI::zpQIB9z9kK2BlfqZ": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Minor Chaos Elemental · Momentum — Gain Fear
  "Actor.3tqCjDwJAQ7JKqMb::8AR8ECLALblK2CRG": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Minor Demon — Claws
  "Actor.3tqCjDwJAQ7JKqMb.Item.4xoydX3YwsLujuaI::lfYFbb71wWaR8DJs": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Minor Demon · Relentless (2) — Spotlight: Relentless
  "Actor.3tqCjDwJAQ7JKqMb.Item.kD9kO92V7t3IqZu8::XQ7QebA0iGvMti4A": { file: "jb2a.icon.horror.purple", forma: "bersaglio" }, // Minor Demon · All Must fall — Hope Damage
  "Actor.3tqCjDwJAQ7JKqMb.Item.lA7vcvS7oGT9NTSy::nOzLQ0NJzeB3vKiV": { file: "jb2a.fireball.explosion.orange", forma: "bersaglio" }, // Minor Demon · Hellfire — Spend Fear
  "Actor.3tqCjDwJAQ7JKqMb.Item.w400aHTlADxDihpt::Cmd4f2gfxgOZsN6f": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Minor Demon · Momentum — Gain Fear
  "Actor.3tqCjDwJAQ7JKqMb.Item.eLyKKVmRPE8yRwTx::wa3C0SNaa8lnPSXA": { file: "jb2a.markers.skull.dark_orange.01", forma: "lanciatore" }, // Minor Demon · Reaper — Mark Stress
  "Actor.DscWkNVoHak6P4hh::Y8P4cqrDNkOeTkEy": { file: "jb2a.fire_bolt.orange", forma: "proiettile" }, // Minor Fire Elemental — Elemental Blast
  "Actor.DscWkNVoHak6P4hh.Item.c1jcZZD616J5Y4Mb::oFsBEbdXCpX9XLQy": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Minor Fire Elemental · Relentless (2) — Spotlight: Relentless
  "Actor.DscWkNVoHak6P4hh.Item.7AXE86WNd68OySkD::x1VCkfcSYiPyg8fk": { file: "jb2a.eruption.orange.01", forma: "bersaglio" }, // Minor Fire Elemental · Scorched Earth — Attack
  "Actor.DscWkNVoHak6P4hh.Item.ESnu3I89BmUdBZEk::JQgqyW8H7fugR7F0": { file: "jb2a.explosion.01.orange", forma: "lanciatore" }, // Minor Fire Elemental · Explosion — Attack
  "Actor.DscWkNVoHak6P4hh.Item.3u6wvKPJAS2v5nWV::CTWSVVisdgJgF7pd": { file: "jb2a.cast_generic.fire.01.orange", forma: "lanciatore" }, // Minor Fire Elemental · Consume Kindling — Heal HP
  "Actor.DscWkNVoHak6P4hh.Item.3u6wvKPJAS2v5nWV::e0fG0xtj6hOUp66o": { file: "jb2a.cast_generic.fire.01.orange", forma: "lanciatore" }, // Minor Fire Elemental · Consume Kindling — Healing
  "Actor.DscWkNVoHak6P4hh.Item.kssnXljBaV31iX58::rPj1Wf22Kai3eBCv": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Minor Fire Elemental · Momentum — Gain Fear
  "Actor.G62k4oSkhkoXEs2D::j0GxfRYQvNWTCa4B": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Minor Treant — Clawed Branch
  "Actor.G62k4oSkhkoXEs2D.Item.K08WlZwGqzEo4idT::xFlhxnQWmVvDqQ55": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Minor Treant · Group Attack — Spend Fear
  "Actor.iwhTb5AUvNFV3dU5::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.01.flail.01", forma: "bersaglio" }, // Mountain Troll — Skull Flail
  "Actor.iwhTb5AUvNFV3dU5.Item.3xBKHT3vHPmXoIDH::CxueuYXnhqT4EP7l": { file: "jb2a.icon.shield.green", forma: "lanciatore" }, // Mountain Troll · Stolen Armor — Start Countdown
  "Actor.iwhTb5AUvNFV3dU5.Item.W0YS8rMhgEQQMFRF::E6AvUf6zPcTow6ah": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Mountain Troll · Flail Swipe — Mark Stress
  "Actor.iwhTb5AUvNFV3dU5.Item.c89I2BlpU2nQyWji::iIsMQLVWUFmpdZWb": { file: "jb2a.on_token_buff.001.001.purplered", forma: "lanciatore" }, // Mountain Troll · Enraged Mountain Troll — 
  "Actor.iwhTb5AUvNFV3dU5.Item.tOz9yigrsPXyrPiK::1BeKyLFvU7Dv77Cx": { file: "jb2a.melee_attack.01.flail.01", forma: "bersaglio" }, // Mountain Troll · Double Swipe — Spend Fear
  "Actor.ptWgFVRErxkPbYcs::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Octopus — Beak
  "Actor.ptWgFVRErxkPbYcs.Item.JEsOYtkNPrEjQp9A::yvbnxXT2tMjFuSCW": { file: "jb2a.black_tentacles.dark_purple", forma: "bersaglio" }, // Octopus · Grapple — 
  "Actor.ptWgFVRErxkPbYcs.Item.bw3GFtQ9rdOOmaNs::XLRJT8C61xhJVH7M": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Octopus · Squirt Ink — Mark Stress
  "Actor.ptWgFVRErxkPbYcs.Item.bw3GFtQ9rdOOmaNs::ah5Lwv3tDEcZGjmi": { file: "jb2a.smoke.puff.side.grey", forma: "bersaglio" }, // Octopus · Squirt Ink — Reaction Roll
  "Actor.fD6W32riWZbtakYc::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Panther — Teeth and Claws
  "Actor.fD6W32riWZbtakYc.Item.A9OTgQABHnrtpINC::9c178LlauifFVrIe": { file: "jb2a.melee_generic.creature_attack.claw.002.red", forma: "bersaglio" }, // Panther · Pouncing Strike — Mark Stress
  "Actor.EQTOAOUrkIvS2z88::0zNO6VGqxsyZvlrU": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Patchwork Zombie Hulk — Too Many Arms
  "Actor.EQTOAOUrkIvS2z88.Item.rEJ1kAfhHQZWhrZj::Y8LQe5TzbdK2mOG9": { file: "jb2a.markers.drop.red.01", forma: "lanciatore" }, // Patchwork Zombie Hulk · Destructible — Mark HP
  "Actor.EQTOAOUrkIvS2z88.Item.0fn7rVLwBnyCyvTA::ngl1xlJT4IOh3bkJ": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Patchwork Zombie Hulk · Flailing Limbs — 
  "Actor.EQTOAOUrkIvS2z88.Item.gw1Z2VazlRXYCiCK::PfaFRZKFnHGg6mU4": { file: "jb2a.energy_strands.in.green.01", forma: "lanciatore" }, // Patchwork Zombie Hulk · Another for the Pile — Heal
  "Actor.EQTOAOUrkIvS2z88.Item.uTtQwNg46NAjgzuD::2NYC0D7wkBNrUAKl": { file: "jb2a.toll_the_dead.green.shockwave", forma: "lanciatore" }, // Patchwork Zombie Hulk · Tormented Screams — Mark Stress
  "Actor.wycLpvebWdUqRhpP::l1uCYTOE0G4Zp9le": { file: "jb2a.rapier.melee.01.white", forma: "bersaglio" }, // Petty Noble — Rapier
  "Actor.wycLpvebWdUqRhpP.Item.ebdAPBso5ROmdFNO::tioTtYfIGFIXRITN": { file: "jb2a.footprints.shoe.black", forma: "lanciatore" }, // Petty Noble · Guards, Seize Them! — Summon Guards
  "Actor.wycLpvebWdUqRhpP.Item.xN09fSsg33nURqpk::dAHzRxf0iztyc1mI": { file: "jb2a.cast_generic.sound.01.pinkteal", forma: "lanciatore" }, // Petty Noble · Exile — Spend Fear
  "Actor.T2kyHFC68VKtIXir::qHEFFbkvLvbm9VmI": { file: "jb2a.impact.frost.white.01", forma: "bersaglio" }, // Phantom — Chill Touch
  "Actor.T2kyHFC68VKtIXir.Item.M8DGdeEjEqjiwhfs::YG80PvHf03ODXzDA": { file: "jb2a.template_circle.aura.01.complete.small.bluepurple", forma: "lanciatore" }, // Phantom · Fear Aura — Activate Aura
  "Actor.T2kyHFC68VKtIXir.Item.M8DGdeEjEqjiwhfs::TPaOLiW7sZpQAdDp": { file: "jb2a.markers.fear.dark_purple.01", forma: "bersaglio" }, // Phantom · Fear Aura — Reaction Roll
  "Actor.T2kyHFC68VKtIXir.Item.fjvRO8QadG5kFWV7::J60ZNcqyhHc3dFX6": { file: "jb2a.eyes.01.dark_green.few", forma: "lanciatore" }, // Phantom · Lingering Haunt — Spend Fear
  "Actor.T2kyHFC68VKtIXir.Item.fjvRO8QadG5kFWV7::eLEuZWbjMcwd1Zw5": { file: "jb2a.healing_generic.200px.purple", forma: "lanciatore" }, // Phantom · Lingering Haunt — Trigger Countdown
  "Actor.OROJbjsqagVh7ECV::NQR5d8orZgyJSRd5": { file: "jb2a.scimitar.melee.01.white", forma: "bersaglio" }, // Pirate Captain — Cutlass
  "Actor.OROJbjsqagVh7ECV.Item.PsMA3x6giL8tixbf::xYphrI8GtMHHuT9a": { file: "jb2a.markers.stun.purple.01", forma: "bersaglio" }, // Pirate Captain · Swashbuckler — Damage Stress
  "Actor.OROJbjsqagVh7ECV.Item.WGEGO0DSOs5cF0EL::nuYk5WeLLpIKa69q": { file: "jb2a.footprints.shoe.black", forma: "lanciatore" }, // Pirate Captain · Reinforcements — Mark Stress
  "Actor.OROJbjsqagVh7ECV.Item.brHnMc0TDiWVT4U6::h2vM7jDTeFttVJKN": { file: "jb2a.markers.skull.purple.01", forma: "bersaglio" }, // Pirate Captain · No Quarter — Spend Fear
  "Actor.OROJbjsqagVh7ECV.Item.V4EcsqMd70BTrDNu::78Qphxjbs7cOYsNf": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Pirate Captain · Momentum — Gain Fear
  "Actor.5YgEajn0wa4i85kC::cDbcnK1GisGjZYWY": { file: "jb2a.scimitar.melee.01.white", forma: "bersaglio" }, // Pirate Raiders — Cutlass
  "Actor.5YgEajn0wa4i85kC.Item.N401rF937fLXMuMA::ejadA9jjMnVNVczS": { file: "jb2a.markers.stun.purple.01", forma: "bersaglio" }, // Pirate Raiders · Swashbuckler — Damage Stress
  "Actor.mhcVkVFrzIJ18FDm::pR2I5ChLv7KTamcG": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Pirate Tough — Massive Fists
  "Actor.mhcVkVFrzIJ18FDm.Item.Zz5ITZOmPdtoLaUH::xg3K78wfOhg8oCd3": { file: "jb2a.markers.stun.purple.01", forma: "bersaglio" }, // Pirate Tough · Swashbuckler — Stress Damage
  "Actor.mhcVkVFrzIJ18FDm.Item.uzlxE1Cxm9GGmrNs::uJl1NJQ55yd9oCwz": { file: "jb2a.side_impact.part.shockwave.blue", forma: "bersaglio" }, // Pirate Tough · Clear the Decks — Attack
  "Actor.ytj3VDog4hrC4TkO::qHEFFbkvLvbm9VmI": { file: "jb2a.barrel.toss.wooden.01.01.brown", forma: "proiettile" }, // Poltergeist — Thrown Object
  "Actor.ytj3VDog4hrC4TkO.Item.46MnCFburOGkFfxC::rzekN1tGVLzsnrcZ": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Poltergeist · Specter — Mark Stress
  "Actor.ytj3VDog4hrC4TkO.Item.UugDye75RdeNZw37::uSQh4bvA9x1Zsod3": { file: "jb2a.shimmer.01.blue", forma: "lanciatore" }, // Poltergeist · Possessor — Mark Stress
  "Actor.ytj3VDog4hrC4TkO.Item.sQEVdFOtGR0EEjrM::E65jFd43Anfx0Td9": { file: "jb2a.whirlwind.bluegrey", forma: "lanciatore" }, // Poltergeist · Ghost Storm — Spend Fear
  "Actor.lKmBNV3Sgpq9sTtp::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Rabble Mawb — Chomp
  "Actor.lKmBNV3Sgpq9sTtp.Item.jC4ngCoNcUSTuJv9::BfxTYVkuJNrK9ola": { file: "jb2a.toll_the_dead.green.skull_smoke", forma: "lanciatore" }, // Rabble Mawb · Come Back Worse — Spend Fear
  "Actor.9rVlbJVrDNn1x7PS::dfQGukcaMYow08Ce": { file: "jb2a.liquid.splash02.red", forma: "bersaglio" }, // Red Ooze — Ooze Appendage
  "Actor.9rVlbJVrDNn1x7PS.Item.JU9uVwZSM0ItnZRq::b4g8XUIKLhxDlUPy": { file: "jb2a.impact.fire.01.orange", forma: "bersaglio" }, // Red Ooze · Ignite — Attack
  "Actor.9rVlbJVrDNn1x7PS.Item.JU9uVwZSM0ItnZRq::6xYE9Zi8ce6bYjV8": { file: "jb2a.flames.01.orange", forma: "bersaglio" }, // Red Ooze · Ignite — Ignited Damage
  "Actor.9rVlbJVrDNn1x7PS.Item.M9gAcPrgKfSg9Tjb::BMEr77hDxaQyYBna": { file: "jb2a.liquid.splash_side02.red", forma: "lanciatore" }, // Red Ooze · Split — Spend Fear
  "Actor.NWhnMXGWzAVUyelj::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Redcap Biters — Gnash
  "Actor.eTmojyT07ekYRAIV::qHEFFbkvLvbm9VmI": { file: "jb2a.hammer.melee.01.white", forma: "bersaglio" }, // Redcap Breaker — Wooden Mallet
  "Actor.eTmojyT07ekYRAIV.Item.7Hb61RwIDV2By15p::kUEd4TvOpuhBdc9f": { file: "jb2a.melee_attack.02.hammer.02", forma: "bersaglio" }, // Redcap Breaker · Backbreaker — Mark Stress
  "Actor.eTmojyT07ekYRAIV.Item.TLhieXiU5Sy4TOy1::bxiPWlfz7UtZJXSQ": { file: "jb2a.icon.shield_cracked.purple", forma: "bersaglio" }, // Redcap Breaker · Kneecapper — Spend Fear
  "Actor.w5ZBoxm8mq9wQz6l::qHEFFbkvLvbm9VmI": { file: "jb2a.handaxe.melee.standard.white", forma: "bersaglio" }, // Redcap Butcher — Meat Cleaver
  "Actor.w5ZBoxm8mq9wQz6l.Item.wsHCq553WEQTApjJ::gqR4kfAVs7PBIXxn": { file: "jb2a.melee_attack.02.handaxe.01", forma: "bersaglio" }, // Redcap Butcher · Chop Happy — Mark Stress
  "Actor.w5ZBoxm8mq9wQz6l.Item.gerrZLjFJnjkHGtu::OMFknuoKy4XaxKbJ": { file: "jb2a.dagger.throw.01.white", forma: "proiettile" }, // Redcap Butcher · Knife Thrower — Mark Stress
  "Actor.YDgorr8UO4uxptAC::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.02.trail.01.orangered", forma: "bersaglio" }, // Redcap Candlemaker — Burning Candlestick
  "Actor.YDgorr8UO4uxptAC.Item.oAQweBSYwOqJ3fEx::yeQnELsceYe7UrOI": { file: "jb2a.markers.on_token_mask.complete.01.orange", forma: "lanciatore" }, // Redcap Candlemaker · Torchbearer — Activate
  "Actor.YDgorr8UO4uxptAC.Item.tNNiTGb8aRB511zm::Tjld37xVSKIL6n0Q": { file: "jb2a.fireball.beam.orange", forma: "proiettile" }, // Redcap Candlemaker · Dance in the Flames — Reaction Roll
  "Actor.lbXcMWCYhsCVWYNO::qHEFFbkvLvbm9VmI": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Redcap Skinner — Razor
  "Actor.lbXcMWCYhsCVWYNO.Item.jaLGm9PxB6KvVTlI::RqwxpEhMvPEuONJQ": { file: "jb2a.icon.drop.red", forma: "bersaglio" }, // Redcap Skinner · Shallow Cuts — 
  "Actor.lbXcMWCYhsCVWYNO.Item.6nEBkyA013PMWpGj::3aasZd705KkfNLg9": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Redcap Skinner · Group Attack — Spend Fear
  "Actor.gP3fWTLzSFnpA8EJ::s47hfydhnXhLGhm5": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Rotted Zombie — Bite
  "Actor.gP3fWTLzSFnpA8EJ.Item.R9vrwFNl5BD1YXJo::8wRrAWHU0xHW4zuE": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Rotted Zombie · Group Attack — Spend Fear
  "Actor.6Js480Q5SOGRGySm::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Rugaru — Snapping Jaws
  "Actor.6Js480Q5SOGRGySm.Item.459aNwv1u6Z96MA8::NfNGK4EZ6remweQJ": { file: "jb2a.soundwave.02.blue", forma: "lanciatore" }, // Rugaru · Howl at the Moon — Mark Stress
  "Actor.6Js480Q5SOGRGySm.Item.DtkRr84ignZWz1yy::HAnFdxX8aAQC5LTA": { file: "jb2a.melee_generic.creature_attack.claw.001.red", forma: "bersaglio" }, // Rugaru · Flesh Ripper — Mark Stress
  "Actor.htdthg1pCYrovP0T::qHEFFbkvLvbm9VmI": { file: "jb2a.arrow.physical.blue", forma: "proiettile" }, // Sawtoothed Gillbeast — Waterlogged Weaponry
  "Actor.htdthg1pCYrovP0T.Item.yqbWInJewYL1UCg8::JTIH7ThfLBQMrnUz": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Sawtoothed Gillbeast · Ka-Chomp — Mark Stress
  "Actor.htdthg1pCYrovP0T.Item.ZBpUJaH6CBqiaJUV::KQAEsAgWHAtpNeec": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Sawtoothed Gillbeast · Feeding Frenzy — Spend Fear
  "Actor.htdthg1pCYrovP0T.Item.qufYjFc6S4uT7tkQ::XkIEJugE5JKNYNjt": { file: "jb2a.markers.shield.green.01", forma: "lanciatore" }, // Sawtoothed Gillbeast · Scaly — Roll D6
  "Actor.bgreCaQ6ap2DVpCr::ZeEBqRQ7wE1eclnY": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Sellsword — Longsword
  "Actor.bgreCaQ6ap2DVpCr.Item.CQZQiEiRH70Br5Ge::K3pF2DBnR9zJ90W8": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Sellsword · Group Attack — Spend Fear
  "Actor.2nXz4ilAY4xuhKLm::s5iseSpbiOLjetPY": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Shambling Zombie — Bite
  "Actor.2nXz4ilAY4xuhKLm.Item.iiOjamlZIuhpDC8W::JUw16Jag9uTfBmKZ": { file: "jb2a.markers.horror.purple.01", forma: "bersaglio" }, // Shambling Zombie · Horrifying — Mark Stress
  "Actor.7X5q7a6ueeHs5oA9::BT9vFHUJEUJUpmLP": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Skeleton Archer — Shortbow
  "Actor.7X5q7a6ueeHs5oA9.Item.4w20xpEo6L1fgro3::nKmxl3D7g4p7Zcub": { file: "jb2a.template_line_piercing.generic.01.orange", forma: "proiettile" }, // Skeleton Archer · Deadly Shot — Attack
  "Actor.6l1a3Fazq8BoKIcc::zXwAXLQyYEVMa4UX": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Skeleton Dredge — Bone Claws
  "Actor.6l1a3Fazq8BoKIcc.Item.wl9KKEpVWDBu62hU::6rdwJKwsSCO4R0Ty": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Skeleton Dredge · Group Attack — Spend Fear
  "Actor.Q9LaVTyXF9NF12C7::JCRXrbN2PaOGszOI": { file: "jb2a.greatsword.melee.standard.white", forma: "bersaglio" }, // Skeleton Knight — Rusty Greatsword
  "Actor.Q9LaVTyXF9NF12C7.Item.OZKEz4eK9h7zCbuf::9EiPNrGzwLtuf9g0": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Skeleton Knight · Terrifying — Damage Hope
  "Actor.Q9LaVTyXF9NF12C7.Item.WdVLwy9RNkVlZnCL::vMv4monku9LOSxUZ": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Skeleton Knight · Cut to the Bone — Attack
  "Actor.Q9LaVTyXF9NF12C7.Item.STesKV2KB61PlwCh::NtGhAVVOJF6ZGBRv": { file: "jb2a.melee_attack.03.greatsword.01", forma: "bersaglio" }, // Skeleton Knight · Dig Two Graves — Attack
  "Actor.10YIQl0lvCJXZLfX::oC4ztwJDpwhMMhf9": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Skeleton Warrior — Sword
  "Actor.10YIQl0lvCJXZLfX.Item.hYl31ThCmZdc0MFa::QnuFrptj8oARaA3i": { file: "jb2a.toll_the_dead.green.skull_smoke", forma: "lanciatore" }, // Skeleton Warrior · Won't Stay Dead — Use
  "Actor.QGtJtlNo0ACZUjE8::qHEFFbkvLvbm9VmI": { file: "jb2a.ranged.04.projectile.01.green", forma: "proiettile" }, // Soul-shattered Mage — Wormwood Staff
  "Actor.QGtJtlNo0ACZUjE8.Item.86ZXTdwwNOtDhkxp::gPSIHi1qLoEhOodY": { file: "jb2a.icosahedron.roll.blue", forma: "lanciatore" }, // Soul-shattered Mage · Broken Magic — Mark Stress
  "Actor.QGtJtlNo0ACZUjE8.Item.86ZXTdwwNOtDhkxp::JW4Q8WDDDRyUuSSv": { file: "jb2a.teleport.01.blue", forma: "bersaglio" }, // Soul-shattered Mage · Broken Magic — Dimension Rift
  "Actor.QGtJtlNo0ACZUjE8.Item.86ZXTdwwNOtDhkxp::4BsOL1UvlgCXCB5P": { file: "jb2a.template_circle.whirl.intro.blue", forma: "bersaglio" }, // Soul-shattered Mage · Broken Magic — Time Dilation
  "Actor.QGtJtlNo0ACZUjE8.Item.86ZXTdwwNOtDhkxp::dlfc8B2NMA8AX5NG": { file: "jb2a.magic_signs.circle.02.illusion.complete.purple", forma: "lanciatore" }, // Soul-shattered Mage · Broken Magic — Discordant Visions
  "Actor.QGtJtlNo0ACZUjE8.Item.z471ukb68Ffoza3k::ImLD2lQbTdzdgIpM": { file: "jb2a.arms_of_hadar.dark_purple", forma: "lanciatore" }, // Soul-shattered Mage · Feel My Pain — 
  "Actor.ldbWEL7uZs84vyrR::OXr06G0weuNZU34c": { file: "jb2a.melee_attack.01.magic_sword.yellow.01", forma: "bersaglio" }, // Spellblade — Empowered Longsword
  "Actor.ldbWEL7uZs84vyrR.Item.a76dNCrcoZOH1RRT::K4VnxigKTiu7hhZx": { file: "jb2a.explosion.02.blue", forma: "bersaglio" }, // Spellblade · Supressing Blast — Attack
  "Actor.ldbWEL7uZs84vyrR.Item.piyJhdHzztabmZ8I::N42NPEu7fcVDXEvl": { file: "jb2a.bless.200px.intro.yellow", forma: "lanciatore" }, // Spellblade · Move as a Unit — Spend Fear
  "Actor.ldbWEL7uZs84vyrR.Item.P9nD5K2ztkZGo2I8::f4AulN6MeMaEvqbk": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Spellblade · Momentum — Gain Fear
  "Actor.jTFawThYqDS5sOnH::qHEFFbkvLvbm9VmI": { file: "jb2a.greatsword.melee.standard.white", forma: "bersaglio" }, // Spellbound Armor — Zweihander
  "Actor.jTFawThYqDS5sOnH.Item.rioPJyaUZtTHWpa1::pkce7e98R6WHYw5f": { file: "jb2a.aura_themed.01.inward.complete.metal.01.grey", forma: "lanciatore" }, // Spellbound Armor · Clatter & Recombobulate — Spend Fear
  "Actor.qNgs3AbLyJrY19nt::VaLzUUH6s6jKhwRf": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Swarm of Rats — Claws
  "Actor.VtFBt9XBE0WrGGxP::hfrhWhfZYFazoJcW": { file: "jb2a.melee_attack.05.scythe.01", forma: "bersaglio" }, // Sylvan Soldier — Scythe
  "Actor.VtFBt9XBE0WrGGxP.Item.uo5DbPuQQ018Pyfd::dmlz83o2JOAoGiuK": { file: "jb2a.melee_attack.05.scythe.01", forma: "bersaglio" }, // Sylvan Soldier · Pack tactics — Attack
  "Actor.VtFBt9XBE0WrGGxP.Item.phtxvgptyvT3WoeK::UyL02IaAO3m8LgWI": { file: "jb2a.impact.ground_crack.02.orange", forma: "bersaglio" }, // Sylvan Soldier · Forest Control — Pull Tree
  "Actor.VtFBt9XBE0WrGGxP.Item.1dmKoSnV82sLc8xZ::l32BjO9J0jFvD0Zy": { file: "jb2a.swirling_leaves.complete.01.green", forma: "lanciatore" }, // Sylvan Soldier · Blend In — Mark Stress
  "Actor.XcAGOSmtCFLT1unN::LEgXds9kkshd2Ytq": { file: "jb2a.vine.complete.nature.single.01.green", forma: "bersaglio" }, // Tangle Bramble — Thorns
  "Actor.XcAGOSmtCFLT1unN.Item.WiobzuyvJ46zfsOv::V58Ry90tvIjvfDTZ": { file: "jb2a.vine.complete.nature.single.01.green", forma: "bersaglio" }, // Tangle Bramble · Group Attack — Spend Fear
  "Actor.XcAGOSmtCFLT1unN.Item.KBMf7oBfFSHoafKN::g1OQ5xlMHFWsoktd": { file: "jb2a.plant_growth.03.round.2x2.complete.greenyellow", forma: "lanciatore" }, // Tangle Bramble · Drain and Multiply — Summon
  "Actor.PKSXFuaIHUCoH63A::LEgXds9kkshd2Ytq": { file: "jb2a.vine.complete.nature.group.01.green", forma: "bersaglio" }, // Tangle Bramble Swarm — Thorns
  "Actor.PKSXFuaIHUCoH63A.Item.2HlelvCZA00izcQa::CiA4K6py0eW6eihU": { file: "jb2a.entangle.02.complete.02.green", forma: "bersaglio" }, // Tangle Bramble Swarm · Crush — Damage
  "Actor.PKSXFuaIHUCoH63A.Item.JRSGc3ozDnKCAvCj::Cdw2XxA5NhAQhQse": { file: "jb2a.entangle.green", forma: "bersaglio" }, // Tangle Bramble Swarm · Encumber — Give Token
  "Actor.aLkLFuVoKz2NLoBK::6NaTy3NiPx2EdWx0": { file: "jb2a.liquid.splash.blue", forma: "bersaglio" }, // Tiny Green Ooze — Ooze Appendage
  "Actor.aLkLFuVoKz2NLoBK.Item.WpOh5kHHx7lcTvEY::HfK0u0c7NRppuF1Q": { file: "jb2a.markers.shield_cracked.purple.01", forma: "bersaglio" }, // Tiny Green Ooze · Acidic Form — Damage Armor
  "Actor.1fkLQXVtmILqfJ44::NTBBYhgW7SgozEBe": { file: "jb2a.liquid.splash02.red", forma: "bersaglio" }, // Tiny Red Ooze — Ooze Appendage
  "Actor.1fkLQXVtmILqfJ44.Item.zsUMP2qNmNpVHwk0::cHaEnBwinVKmoS9s": { file: "jb2a.flames.02.orange", forma: "bersaglio" }, // Tiny Red Ooze · Burning — Damage
  "Actor.u5DJUhMewgOwfc3U::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Viper — Bite
  "Actor.u5DJUhMewgOwfc3U.Item.7aMURYBDlLuLigme::zPzUur2G8McCOr7m": { file: "jb2a.markers.poison.dark_green.01", forma: "bersaglio" }, // Viper · Venomous — Envenom
  "Actor.u5DJUhMewgOwfc3U.Item.jI2kPd7ivBDRArp7::aEeFuYgtie2b9VqQ": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Viper · Group Attack — Spend Fear
  "Actor.QPTR2clyJ30idX3c::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Waxwork Creation — Fists
  "Actor.QPTR2clyJ30idX3c.Item.UvSOP0XRfwNbb3AJ::0nhmVJUlN7m4Xf5N": { file: "jb2a.snowball_toss.white.01", forma: "proiettile" }, // Waxwork Creation · Wax Ball — Mark Stress
  "Actor.QPTR2clyJ30idX3c.Item.gHOZZ13hhgkfoZxT::2BjbQZBP2LSNcZdC": { file: "jb2a.liquid.blob.blue", forma: "bersaglio" }, // Waxwork Creation · Splutch! — Stuck Check
  "Actor.QPTR2clyJ30idX3c.Item.SHRHEhHe806ArGEl::ozPJSv8I8LWoYUHi": { file: "jb2a.bubble.001.001.complete.blue", forma: "bersaglio" }, // Waxwork Creation · Smothering Grapple — Spend Fear
  "Actor.ZNbQ2jg35LG4t9eH::rdkfdKmfjPv2QazK": { file: "jb2a.greatsword.melee.standard.white", forma: "bersaglio" }, // Weaponmaster — Claymore
  "Actor.ZNbQ2jg35LG4t9eH.Item.tyGgOqQzDSIypoMz::mlPgZJNL2TjykjUb": { file: "jb2a.melee_attack.03.greatsword.01", forma: "bersaglio" }, // Weaponmaster · Goading Strike — Attack
  "Actor.ZNbQ2jg35LG4t9eH.Item.UsC0vtOBbf9Kut4v::WQ067ZFiG2QMBo2n": { file: "jb2a.healing_generic.burst.greenorange", forma: "lanciatore" }, // Weaponmaster · Adrenaline Burst — Spend Fear
  "Actor.ZNbQ2jg35LG4t9eH.Item.oYNVPQOy5oQli5Il::jeKcXbdw8gPF4OQA": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Weaponmaster · Momentum — Gain Fear
  "Actor.XuGDFgTjn1vFQhyA::qHEFFbkvLvbm9VmI": { file: "jb2a.ranged.02.projectile.01.yellow", forma: "proiettile" }, // Will-o'-the-wisps — Flash
  "Actor.XuGDFgTjn1vFQhyA.Item.lKtZDU4j2FDWtF38::5cIdrU9CbFa7o9i4": { file: "jb2a.template_circle.aura.04.outward.001.complete.combined.refraction", forma: "lanciatore" }, // Will-o'-the-wisps · Kaleidoscopic — Activate
  "Actor.XuGDFgTjn1vFQhyA.Item.fPWnXgxGnlfZXyto::X9zCQTPqfQtYJXJI": { file: "jb2a.fairies.outward.01.bluepurple", forma: "lanciatore" }, // Will-o'-the-wisps · Fascinating — Spend Fear
  "Actor.8yUj2Mzvnifhxegm::N8oQAHnE34MtwbVA": { file: "jb2a.melee_attack.05.scythe.01", forma: "bersaglio" }, // Young Dryad — Scythe
  "Actor.8yUj2Mzvnifhxegm.Item.lXhVuh31S2N4NVPG::0VOUNQKNjwlLhnRW": { file: "jb2a.swirling_leaves.complete.01.green", forma: "lanciatore" }, // Young Dryad · Voice of the Forest — Spotlight Allies
  "Actor.8yUj2Mzvnifhxegm.Item.i8NoUGUTNY2C5NhC::cXOjhfMgKh2yD1mc": { file: "jb2a.entangle.02.complete.02.green", forma: "bersaglio" }, // Young Dryad · Thorny Cage — Spend Fear
  "Actor.8yUj2Mzvnifhxegm.Item.4f79icB7Dd1xLEZQ::9MGyAjWtLbDz8Znu": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Young Dryad · Momentum — Gain Fear
  "Actor.RIrQcvhlSmXTqFxr::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.slash.02.001.blue", forma: "bersaglio" }, // Yufo — Tentacle Lash
  "Actor.RIrQcvhlSmXTqFxr.Item.9nSzgCYB4d3gbvIj::ckfu1ssFzdZqoggv": { file: "jb2a.markers_scifi.001.complete.001.greenpurple", forma: "bersaglio" }, // Yufo · Glitch Wave — Spend Fear
  "Actor.RIrQcvhlSmXTqFxr.Item.k4M4bnm9yPPLqOfn::8pvEC8dqsmKmFo1o": { file: "jb2a.icon.poison.dark_green", forma: "bersaglio" }, // Yufo · Temporal Corrosion — Mark Stress
  "Actor.Nf0v43rtflV56V2T::S1PjCXPdluP0vZH7": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Zombie Pack — Bite
  "Actor.Nf0v43rtflV56V2T.Item.jQmltra0ovHE33Nx::0Im5AEgp8gJaVJHh": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Zombie Pack · Overwhelm — Mark Stress

  // tier 2
  "Actor.vNIbYQ4YSzNf0WPE::MtLbopbyx8Ih3gUK": { file: "jb2a.dagger.throw.01.white", forma: "proiettile" }, // Apprentice Assassin — Thrown Dagger
  "Actor.vNIbYQ4YSzNf0WPE.Item.4wT7CmM1DJEPcraF::SrNyZgPvCXMpbCLG": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Apprentice Assassin · Group Attack — Spend Fear
  "Actor.0ts6CGd93lLqGZI5::cvrXodyzOrduCdZx": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Archer Squadron — Longbow
  "Actor.0ts6CGd93lLqGZI5.Item.Wuf5y9tJ88BwzLv2::uG7Hl2DqaT69aNs1": { file: "jb2a.volley_of_projectiles_Circle.arrow.001.001.orangeyellow", forma: "proiettile" }, // Archer Squadron · Focused Volley — Attack
  "Actor.0ts6CGd93lLqGZI5.Item.ayGHTtyjSuIR4BrV::mH6mmJIMM1fwzePt": { file: "jb2a.volley_of_projectiles_ConePF2e.arrow.001.001.orangeyellow", forma: "proiettile" }, // Archer Squadron · Supressing Fire — Agility Roll
  "Actor.h5RuhzGL17dW5FBT::sCWI7KM5vNXEWTV1": { file: "jb2a.dagger.throw.01.white", forma: "proiettile" }, // Assassin Poisoner — Poisoned Throwing Dagger
  "Actor.h5RuhzGL17dW5FBT.Item.Fz2lnUEeBxsDpx0G::L83tU1TgmqoH9SSn": { file: "jb2a.markers.poison.dark_green.01", forma: "bersaglio" }, // Assassin Poisoner · Grindletooth Venom — Apply Venom
  "Actor.h5RuhzGL17dW5FBT.Item.lAmiK8wVxjyHwKlp::sp7RfJRQJsEUm09m": { file: "jb2a.smoke.plumes.01.grey", forma: "lanciatore" }, // Assassin Poisoner · Fumigation — Drop Bomb
  "Actor.4bUnTk3t4VuZZmc7::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.creature_attack.claw.001.red", forma: "bersaglio" }, // Banshee — Fingernails
  "Actor.4bUnTk3t4VuZZmc7.Item.4fRTRNsvtEP7ifYR::jE4mvZJSlHTfFzll": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Banshee · Specter — Mark Stress
  "Actor.4bUnTk3t4VuZZmc7.Item.dZ1bV7M6RckcT8Tr::rtkOGDXcnNhUZxZ1": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Banshee · Terrifying — 
  "Actor.4bUnTk3t4VuZZmc7.Item.eQiILqNE3mL82W3Z::UgN1W593CzVy6sQB": { file: "jb2a.markers.horror.purple.01", forma: "bersaglio" }, // Banshee · Scare Tactic — 
  "Actor.4bUnTk3t4VuZZmc7.Item.CSrzB2SNFXb3Y5b6::L8CnVkNm7GAshy1U": { file: "jb2a.toll_the_dead.green.shockwave", forma: "lanciatore" }, // Banshee · Wail of Despair — Mark Stress
  "Actor.SkSS7dNTebMaancS::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Basilisk — Jaws & Claws
  "Actor.SkSS7dNTebMaancS.Item.Ik7qhV4eOE9ZxWUT::NscIWIKztDCuXGCC": { file: "jb2a.aura_themed.01.inward.complete.metal.01.grey", forma: "bersaglio" }, // Basilisk · Petrify — Spend Fear
  "Actor.SkSS7dNTebMaancS.Item.Ik7qhV4eOE9ZxWUT::WXxNVW4vIPdICvzC": { file: "jb2a.aura_themed.01.inward.complete.metal.01.grey", forma: "bersaglio" }, // Basilisk · Petrify — Make Petrified
  "Actor.SkSS7dNTebMaancS.Item.0antvuNtKPuppXdr::YrU3MfpfBWLHgXKe": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Basilisk · CRONCH! — Mark Stress
  "Actor.dgH3fW9FTYLaIDvS::3t8BeXHuoIbBXuV2": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Battle Box — Slam
  "Actor.dgH3fW9FTYLaIDvS.Item.RSovCwuGrZ1mk5py::2JfPSV3pw6pv0BXd": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Battle Box · Relentless (2) — Spotlight: Relentless
  "Actor.dgH3fW9FTYLaIDvS.Item.ZqfLMjVkbUwDw4p6::Yr2e0A9SRWHhFv9u": { file: "jb2a.icosahedron.roll.blue", forma: "lanciatore" }, // Battle Box · Randomized Tactics — Mark Stress
  "Actor.dgH3fW9FTYLaIDvS.Item.ZqfLMjVkbUwDw4p6::emk5sdywXogqo1fM": { file: "jb2a.energy_beam.normal.blue.01", forma: "proiettile" }, // Battle Box · Randomized Tactics — Mana Beam
  "Actor.dgH3fW9FTYLaIDvS.Item.ZqfLMjVkbUwDw4p6::dgVOG9MX1jCQXZJi": { file: "jb2a.fire_ring.500px.red", forma: "lanciatore" }, // Battle Box · Randomized Tactics — Fire Jets
  "Actor.dgH3fW9FTYLaIDvS.Item.ZqfLMjVkbUwDw4p6::0TsDWkKRYZpJYhYp": { file: "jb2a.impact.ground_crack.01.orange", forma: "bersaglio" }, // Battle Box · Randomized Tactics — Trample
  "Actor.dgH3fW9FTYLaIDvS.Item.ZqfLMjVkbUwDw4p6::iwxBO9oQBAuBhTKK": { file: "jb2a.fumes.04.complete.grey", forma: "lanciatore" }, // Battle Box · Randomized Tactics — Shocking Gas
  "Actor.dgH3fW9FTYLaIDvS.Item.ZqfLMjVkbUwDw4p6::ey2man48zSlQ9pM5": { file: "jb2a.thunderwave.center.blue", forma: "lanciatore" }, // Battle Box · Randomized Tactics — Stunning Clap
  "Actor.dgH3fW9FTYLaIDvS.Item.ZqfLMjVkbUwDw4p6::Y2rycSVaupmnNAxc": { file: "jb2a.template_circle.out_pulse.02.burst.bluewhite", forma: "lanciatore" }, // Battle Box · Randomized Tactics — Psionic Whine
  "Actor.dgH3fW9FTYLaIDvS.Item.ITzpRJr2jWK0Ksmp::U6ND54T8GFzkOEOM": { file: "jb2a.static_electricity.01.blue", forma: "lanciatore" }, // Battle Box · Overcharge — Mark Stress
  "Actor.dgH3fW9FTYLaIDvS.Item.YvfzPyJbbv2ia6Yp::oCpv4zi9jtEpo0K1": { file: "jb2a.explosion.04.blue", forma: "lanciatore" }, // Battle Box · Death Quake — Roll Save
  "Actor.12TRnUh7RzLIn30r::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Berserker Alpha — Tooth & Claw
  "Actor.12TRnUh7RzLIn30r.Item.ky9NeQ55xa1TdP5j::4PI47ZKKRktAGlSA": { file: "jb2a.healing_generic.400px.blue", forma: "lanciatore" }, // Berserker Alpha · Bark at the Moon — Spend Fear
  "Actor.12TRnUh7RzLIn30r.Item.GmBst1S1DyM4gxZe::t667jPuEUjs5d6lu": { file: "jb2a.on_token_buff.001.001.purplered", forma: "lanciatore" }, // Berserker Alpha · Berserker Rage — Enter Rage
  "Actor.CaFmEX2ccQfgIRja::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Berserker Initiate — Tooth & Claw
  "Actor.CaFmEX2ccQfgIRja.Item.a3VYAXAv5BC6DgqG::HG7D0QAEtzY9FTAq": { file: "jb2a.on_token_buff.001.001.purplered", forma: "lanciatore" }, // Berserker Initiate · Berserker Rage — 
  "Actor.tGHjaLIGEUzFygN7::qHEFFbkvLvbm9VmI": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Centaur Warden — Recurved Bow
  "Actor.tGHjaLIGEUzFygN7.Item.UtxsNofV59V2WXSN::3QQCAmvmVVXKoAVc": { file: "jb2a.arrow.physical.blue", forma: "proiettile" }, // Centaur Warden · Eye of the Sage — Mark Stress
  "Actor.tGHjaLIGEUzFygN7.Item.bb0EOEX68WRKfr20::VA7XrkrIV6CVVTBa": { file: "jb2a.impact.ground_crack.01.orange", forma: "bersaglio" }, // Centaur Warden · Trample — Spend Fear
  "Actor.tGHjaLIGEUzFygN7.Item.iX7ofHjr4Cdk3PKE::ocFvxpgZGsfIEj8i": { file: "jb2a.volley_of_projectiles_Cone5e.arrow.001.001.orangeyellow", forma: "proiettile" }, // Centaur Warden · Quick Volley — Spend Stress
  "Actor.jDmHqGvzg5wjgmxE::P3obEpTCEREbtC0R": { file: "jb2a.magic_missile.purple", forma: "proiettile" }, // Chaos Skull — Energy Blast
  "Actor.jDmHqGvzg5wjgmxE.Item.Zn25zBr96y1hrmnr::iF0PD1t3yovKMTfy": { file: "jb2a.particle_burst.01.circle.bluepurple", forma: "lanciatore" }, // Chaos Skull · Magic Burst — Attack
  "Actor.jDmHqGvzg5wjgmxE.Item.urXRi4bdBfvl8U6K::872Fq88Hitwc6f3W": { file: "jb2a.energy_conduit.bluepurple.circle.01", forma: "proiettile" }, // Chaos Skull · Siphon Magic — Attack
  "Actor.pOtg2aQs8iI3GzMV::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Chicken-foot Hut — Clawed Feet
  "Actor.pOtg2aQs8iI3GzMV.Item.N9tz3fFJ5DFerV0u::1kH2FCO5AitgwBtF": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Chicken-foot Hut · Double Strike — Mark Stress
  "Actor.pOtg2aQs8iI3GzMV.Item.TAcEerFCrdmDvKHL::MrARhvjsWvXX0sn1": { file: "jb2a.melee_generic.creature_attack.claw.002.red", forma: "bersaglio" }, // Chicken-foot Hut · Pin — Mark Stress
  "Actor.99TqczuQipBmaB8i::fnaeDHmTA8f6TUEC": { file: "jb2a.spear.melee.01.white", forma: "bersaglio" }, // Conscript — Spears
  "Actor.99TqczuQipBmaB8i.Item.MWfKUGzT1YBmLvpn::FCeTuf71gCzRiO5N": { file: "jb2a.spear.melee.01.white", forma: "bersaglio" }, // Conscript · Group Attack — Spend Fear
  "Actor.ZxWaWPdzFIUPNC62::W3TBCgASM08oc3ZA": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Courtesan — Dagger
  "Actor.ZxWaWPdzFIUPNC62.Item.rSMUPC5GhR982ifg::dRtDCrAPLc1GYqBs": { file: "jb2a.markers.shield_cracked.purple.01", forma: "bersaglio" }, // Courtesan · Searing Glance — Spend Stress
  "Actor.0NxCSugvKQ4W8OYZ::CTPABmeRS5Djpv4N": { file: "jb2a.eldritch_blast.purple", forma: "proiettile" }, // Cult Adept — Rune-Covered Rod
  "Actor.0NxCSugvKQ4W8OYZ.Item.kCffzM8rX8NEr9d2::TQv3o9sRnlDNbPyu": { file: "jb2a.energy_strands.range.standard.purple.02", forma: "proiettile" }, // Cult Adept · Enervating Blast — Spend Fear
  "Actor.0NxCSugvKQ4W8OYZ.Item.IHWDn097sRgjlZXO::8yRj7EpEI4PlKNhl": { file: "jb2a.shield_themed.above.eldritch_web.01.dark_purple", forma: "bersaglio" }, // Cult Adept · Shroud of the Fallen — Protect
  "Actor.0NxCSugvKQ4W8OYZ.Item.JpSrduK3vjd9h098::g4RDHrY0AEYXjH52": { file: "jb2a.markers.chain.spectral_standard.complete.02.blue", forma: "bersaglio" }, // Cult Adept · Shadow Shackles — Spend Fear
  "Actor.0NxCSugvKQ4W8OYZ.Item.x6FbcrfOscb3er6P::3tibqB97ooJesxf0": { file: "jb2a.energy_strands.in.green.01", forma: "lanciatore" }, // Cult Adept · Fear Is Fuel — Clear Stress
  "Actor.tyBOpLfigAhI9bU3::tkltl7uvJWmguCA1": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Cult Fang — Long Knife
  "Actor.tyBOpLfigAhI9bU3.Item.vX5FHwLvFjuc4JC1::hjuqvsMB7KNLNvjg": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Cult Fang · Shadow's Embrace — Mark Stress
  "Actor.tyBOpLfigAhI9bU3.Item.ohASSruBxcvuItIK::QjQ04SAwfjrxliNI": { file: "jb2a.teleport.01.blue", forma: "bersaglio" }, // Cult Fang · Pick Off the Straggler — Roll Save
  "Actor.zx99sOGTXicP4SSD::NDg35NvLFBFBIr41": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Cult Initiate — Ritual Dagger
  "Actor.zx99sOGTXicP4SSD.Item.WP6xQtYzouPEFr82::4M2MvVzEgIQEQHBS": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Cult Initiate · Group Attack — Spend Fear
  "Actor.NoRZ1PqB8N5wcIw0::9dXtuRFooaa5710y": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Demonic Hound Pack — Claws and Fangs
  "Actor.NoRZ1PqB8N5wcIw0.Item.WEbHwamS5ZBphiKq::XyLlX9RWSxciZ7oV": { file: "jb2a.template_circle.symbol.normal.horror.purple", forma: "lanciatore" }, // Demonic Hound Pack · Dreadhowl — Lose Hope
  "Actor.NoRZ1PqB8N5wcIw0.Item.3mOBJE5c3cP2cGP1::BApDkAKPfyBkqrKY": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Demonic Hound Pack · Momentum — Gain Fear
  "Actor.BTapjzeIvySheRqF::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.02.trail.01.orangered", forma: "bersaglio" }, // Dire Pangolati — Tail Slash
  "Actor.BTapjzeIvySheRqF.Item.9smIQFmlsAxKwNgy::S5gN8ig6GKed9K33": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Dire Pangolati · Blade Spin — Spend Fear
  "Actor.BTapjzeIvySheRqF.Item.BqxLyMEDOq1Aqso7::xp53guUcIZPlq7SR": { file: "jb2a.shield_attack.ranged.throw.01.white.01", forma: "proiettile" }, // Dire Pangolati · Blade Fling — Mark Stress
  "Actor.BTapjzeIvySheRqF.Item.IenXLGFox3SHkU5j::CTwAUduCPI9QjWQO": { file: "jb2a.aura_themed.01.orbit.complete.metal.01.grey", forma: "lanciatore" }, // Dire Pangolati · Keratin Scales — Mark Stress
  "Actor.cQ3IQkxfRhmLMySF::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.04.trail.01.orangered", forma: "bersaglio" }, // Doppelhound — Barbed Tail Whip
  "Actor.cQ3IQkxfRhmLMySF.Item.O350tAtfEGyy1X4d::UpDVDPrzGFoJy1TT": { file: "jb2a.melee_attack.04.trail.01.orangered", forma: "bersaglio" }, // Doppelhound · Double Strike — Mark Stress
  "Actor.qmiZk8Q9DGibINem::qHEFFbkvLvbm9VmI": { file: "jb2a.spear.melee.01.white", forma: "bersaglio" }, // Dragon Knight — Lance
  "Actor.qmiZk8Q9DGibINem.Item.qDQbsNq0Rq4OcXoI::fdN6EmdKTopL54yz": { file: "jb2a.impact.ground_crack.orange.02", forma: "bersaglio" }, // Dragon Knight · Leaping Strike — Mark Stress
  "Actor.qmiZk8Q9DGibINem.Item.WSKl5y3UKAsQR9np::zFdn4gBNfqeKVGWI": { file: "jb2a.icosahedron.simple.blue", forma: "lanciatore" }, // Dragon Knight · Comeback — Spend Fear
  "Actor.TLzY1nDw0Bu9Ud40::sK5gZIYAzo4XmlsX": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Electric Eels — Shocking Bite
  "Actor.TLzY1nDw0Bu9Ud40.Item.u5NL1eUJeAkIEpgt::L4Rpg7fnFuxpD3im": { file: "jb2a.lightning_ball.blue", forma: "lanciatore" }, // Electric Eels · Paralyzing Shock — Mark Stress
  "Actor.y0bPXxZES9huK9f5::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.03.greatbone.01", forma: "bersaglio" }, // Elephant — Feet & Tusks
  "Actor.y0bPXxZES9huK9f5.Item.1VtSVY2AP3yzn9YA::1OyOXhfX9jfCasOJ": { file: "jb2a.impact.ground_crack.01.orange", forma: "bersaglio" }, // Elephant · Trample — Mark Stress
  "Actor.y0bPXxZES9huK9f5.Item.retlIReL4PyUzqhV::tnoGrqkVtZnJgNua": { file: "jb2a.impact.008.orange", forma: "bersaglio" }, // Elephant · Toss — Spend Fear
  "Actor.bfhVWMBUh61b9J6n::jmrgFi8AUL6LTbtU": { file: "jb2a.spear.melee.01.white", forma: "bersaglio" }, // Elite Soldier — Spear
  "Actor.bfhVWMBUh61b9J6n.Item.ojiIZHBd0sMLxSUE::XquYMA2xJZUKSmXQ": { file: "jb2a.spear.melee.01.white", forma: "bersaglio" }, // Elite Soldier · Reinforce — Mark Stress
  "Actor.bfhVWMBUh61b9J6n.Item.zcfyEY29yWqJtZbl::dwpQNx63V6hL1mXZ": { file: "jb2a.shield.01.complete.01.blue", forma: "lanciatore" }, // Elite Soldier · Vassal's Loyalty — Mark Stress
  "Actor.0QPn79SMU6C0b1qi::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Entombed Cat Beast — Razor Claws
  "Actor.0QPn79SMU6C0b1qi.Item.mmcZCBhR6W4vxXk2::hUUU4o5SrnfGmkkk": { file: "jb2a.soundwave.02.blue", forma: "lanciatore" }, // Entombed Cat Beast · Screeching Caterwaul — Mark Stress
  "Actor.0QPn79SMU6C0b1qi.Item.4zTQIHtxwYscyhOV::3JArYbYuz6XO75c2": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Entombed Cat Beast · Vicious Reprisal — Mark Stress
  "Actor.0QPn79SMU6C0b1qi.Item.Wzuxw7ICPQD2mYpr::Vln4OMBjRwT6EGlA": { file: "jb2a.markers.drop.red.01", forma: "bersaglio" }, // Entombed Cat Beast · Bloody Strike — 
  "Actor.etsuHXoRHqWBRI8N::qHEFFbkvLvbm9VmI": { file: "jb2a.scimitar.melee.01.white", forma: "bersaglio" }, // Entombed Elite Guard — Curved Blade
  "Actor.etsuHXoRHqWBRI8N.Item.NORqh5sgANVCarpA::BHjt3qTTFSDRN7vx": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Entombed Elite Guard · Javelin — 
  "Actor.L6QLw1rYK4qtdf1F::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.creature_attack.claw.001.red", forma: "bersaglio" }, // Entombed Empress — Swipe
  "Actor.L6QLw1rYK4qtdf1F.Item.DwTwdGCmAX88d9c7::BFLPGCCy3p1jI6Ut": { file: "jb2a.markers.skull.dark_orange.01", forma: "lanciatore" }, // Entombed Empress · Missing Organs — 
  "Actor.L6QLw1rYK4qtdf1F.Item.kaTCdf7p0SVNiW0u::s7HM2akN04QsMPAw": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Entombed Empress · Grasping Chains — Mark Stress
  "Actor.L6QLw1rYK4qtdf1F.Item.Puiqn6JXi12ZCmk2::iv8tgTHr95tn3yV0": { file: "jb2a.magic_signs.circle.02.necromancy.complete.dark_green", forma: "lanciatore" }, // Entombed Empress · Deathless Obedience — Spend Fear
  "Actor.L6QLw1rYK4qtdf1F.Item.Y1sKVn8QJGlRC5Uq::zrq7TXXPXOeYDwyr": { file: "jb2a.condition.curse.01.001.red", forma: "bersaglio" }, // Entombed Empress · Accursed Caress — Spend Fear
  "Actor.L6QLw1rYK4qtdf1F.Item.GWeW9yte8xuvLfZ3::uqNbo4S4IXMQxofr": { file: "jb2a.magic_signs.circle.02.transmutation.complete.dark_yellow", forma: "lanciatore" }, // Entombed Empress · Final Transformation (Phase Change) — undefined
  "Actor.BUjYC5kDjBoqNrC3::qHEFFbkvLvbm9VmI": { file: "jb2a.ranged.04.projectile.01.green", forma: "proiettile" }, // Entombed Necropriest — Death Bolt
  "Actor.BUjYC5kDjBoqNrC3.Item.fRSuNo1Rvley8TrZ::wjAK5nJRjv6mQJYZ": { file: "jb2a.on_token_buff.001.001.greenpurple", forma: "bersaglio" }, // Entombed Necropriest · Invigorate — Mark Stress
  "Actor.BUjYC5kDjBoqNrC3.Item.VtcEIeb2QJUBtChC::TQp9dbp1V7RG2jZk": { file: "jb2a.arcane_hand.green", forma: "bersaglio" }, // Entombed Necropriest · Last Grasp — Spend Fear
  "Actor.BUjYC5kDjBoqNrC3.Item.dJWi6afZPOGT7ucX::Ag0TDk4tP8bSJUln": { file: "jb2a.unarmed_strike.magical.01.blue", forma: "bersaglio" }, // Entombed Necropriest · Chill Touch — Mark Stress
  "Actor.BSLBG7hQ9K1HGlU6::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.creature_attack.pincer.001.red", forma: "bersaglio" }, // Entombed Skin Beetles — Pincers
  "Actor.BSLBG7hQ9K1HGlU6.Item.TO8FKfEWHZ29FQh8::eo6a5gAsDl7xhQyv": { file: "jb2a.markers.poison.dark_green.02", forma: "bersaglio" }, // Entombed Skin Beetles · Omophagous — 
  "Actor.cugsaVxMi9UCUNku::qHEFFbkvLvbm9VmI": { file: "jb2a.hammer.melee.01.white", forma: "bersaglio" }, // Entombed Stonemason — Hammer and Chisel
  "Actor.cugsaVxMi9UCUNku.Item.SLFSJAPmV9LzxgmJ::Q89aAChmuGGsGjxt": { file: "jb2a.hammer.melee.01.white", forma: "bersaglio" }, // Entombed Stonemason · Group Attack — Spend Fear
  "Actor.cugsaVxMi9UCUNku.Item.gf5FRQd9eVjuVlMB::76WAmsO9THiGRB1u": { file: "jb2a.healing_generic.400px.green", forma: "lanciatore" }, // Entombed Stonemason · The Work Never Ends — Spend Fear
  "Actor.ChwwVqowFw8hJQwT::dXCZn3btEl7pm4XO": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Failed Experiment — Bite and Claw
  "Actor.ChwwVqowFw8hJQwT.Item.g0h3Zo6xqgfSlyxi::i3FANnO1t9AzJdTp": { file: "jb2a.extras.tmfx.outpulse.circle.02.normal", forma: "lanciatore" }, // Failed Experiment · Lurching Lunge — Mark Stress
  "Actor.vWHynB75iGfOhTjn::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Flock Of Feather Fiends — Peck and Claw
  "Actor.vWHynB75iGfOhTjn.Item.7QZXOe4FMQDIdKhP::4UexHAqjSKVQ4xET": { file: "jb2a.swirling_feathers.outburst.01.textured", forma: "lanciatore" }, // Flock Of Feather Fiends · Maddening Cacophony — Mark Stress
  "Actor.diyNjiVzyZEwYg1V::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Fowlbear — Goose Teeth & Bear Claws
  "Actor.diyNjiVzyZEwYg1V.Item.dvI3a8cyvSu7f4FE::OSkZ1lVh20HsOBIG": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Fowlbear · Double Strike — Mark Stress
  "Actor.diyNjiVzyZEwYg1V.Item.XgFxbNdlfIhPkfuo::1C5RPriP5Jj8FCcY": { file: "jb2a.soundwave.01.blue", forma: "lanciatore" }, // Fowlbear · Dread Honk — Spend Fear
  "Actor.55oYzFQRmrXCqNxn::qHEFFbkvLvbm9VmI": { file: "jb2a.particles.outward.greenyellow.01.01", forma: "bersaglio" }, // Fungispunj Sporeling — Neuro Spore
  "Actor.55oYzFQRmrXCqNxn.Item.WYVSRLqN5A9eZykm::NHaqB3FTHCRZ42Te": { file: "jb2a.particles.outward.greenyellow.01.01", forma: "bersaglio" }, // Fungispunj Sporeling · Group Attack — Spend Fear
  "Actor.55oYzFQRmrXCqNxn.Item.KjDHgxHRNrSov4e8::61vmnHULWdWkOyZY": { file: "jb2a.particles.inward.greenyellow.01.01", forma: "lanciatore" }, // Fungispunj Sporeling · Form Up — Spend Fear
  "Actor.5BKK7pDRjRAgN3Nm::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Fungispunj Sporophore — Spongy Fist
  "Actor.5BKK7pDRjRAgN3Nm.Item.raqERxpdxTa2On8F::4CzUo4eCgBxLoTSm": { file: "jb2a.template_circle.smoke.001.complete.800px.001.greenpurple", forma: "lanciatore" }, // Fungispunj Sporophore · Neurotoxic Spore Cloud — Mark Stress
  "Actor.5BKK7pDRjRAgN3Nm.Item.Ff7a0Meknufbkby8::X0mMXXT7jsDQuPt8": { file: "jb2a.particles.swirl.greenyellow.01.01", forma: "bersaglio" }, // Fungispunj Sporophore · Reanimator — Spend Fear
  "Actor.5BKK7pDRjRAgN3Nm.Item.CqMQsFGQ1GR6Auii::jPc8q0SPDQeBL7fx": { file: "jb2a.plant_growth.03.round.2x2.complete.greenyellow", forma: "lanciatore" }, // Fungispunj Sporophore · Colony — Mark Stress
  "Actor.rTdLnKnuI8lu0kfv::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Gargoyle — Stone Claws
  "Actor.rTdLnKnuI8lu0kfv.Item.WLqbQcas7nK0lmWT::RowtiYHWofvLpNm4": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Gargoyle · Swooping Strike — 
  "Actor.rTdLnKnuI8lu0kfv.Item.tg3JWGZTcJKYUNyz::1bt0eRoNsc84J3Gv": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Gargoyle · Petrifying Slash — Reaction Roll
  "Actor.8VZIgU12cB3cvlyH::h2LQ2Xc1iJ1uIImW": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Giant Beastmaster — Longbow
  "Actor.8VZIgU12cB3cvlyH.Item.6ZrDjgnWufJohkp1::ErwQgU4dwBcmZIBX": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Giant Beastmaster · Pinning Strike — Attack
  "Actor.8VZIgU12cB3cvlyH.Item.w1oHm0NoEavQgUzl::eSRUMqpQDPRG9leg": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Giant Beastmaster · Deadly Companion — Summon
  "Actor.YnObCleGjPT7yqEc::0FeP6wr9LCno7ouZ": { file: "jb2a.hammer.melee.01.white", forma: "bersaglio" }, // Giant Brawler — Warhammer
  "Actor.YnObCleGjPT7yqEc.Item.ro8AtBdgklyyuydK::zns57MqnZ6M1d4r0": { file: "jb2a.impact.ground_crack.orange.01", forma: "bersaglio" }, // Giant Brawler · Battering Ram — Roll Save
  "Actor.YnObCleGjPT7yqEc.Item.kKBbEAffbHxmHo15::D53yjFXoP5uFXe9M": { file: "jb2a.hammer.melee.01.white", forma: "bersaglio" }, // Giant Brawler · Bloody Reprisal — Attack
  "Actor.YnObCleGjPT7yqEc.Item.B0EniYxyLvjJSqYb::U2AfyadkJluHXA4r": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Giant Brawler · Momentum — Gain Fear
  "Actor.OMQ0v6PE8s1mSU0K::W2KpXQNCg6Nnorbz": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Giant Eagle — Claws and Beak
  "Actor.OMQ0v6PE8s1mSU0K.Item.MabIQE1Kjn60j08J::KwsxjI3jBzmxgkPu": { file: "jb2a.impact.ground_crack.01.orange", forma: "bersaglio" }, // Giant Eagle · Deadly Dive — Attack
  "Actor.OMQ0v6PE8s1mSU0K.Item.NEOQ0E9AGSSIDm4v::NtgA9EQPF2Rdb9KK": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Giant Eagle · Take Off — Attack
  "Actor.OMQ0v6PE8s1mSU0K.Item.jY0ynjYvbS6E3NgJ::1tO018UgL0VG51ti": { file: "jb2a.impact.009.orange", forma: "bersaglio" }, // Giant Eagle · Deadly Drop — Damage
  "Actor.TqL5DLSbGFI8RsLd::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.creature_attack.claw.002.red", forma: "bersaglio" }, // Giant Octopus — Arm Whip
  "Actor.TqL5DLSbGFI8RsLd.Item.7Eiy4PoehsyoMQU2::jPORgfoit1Dysm11": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Giant Octopus · Grapple — Spend Fear
  "Actor.TqL5DLSbGFI8RsLd.Item.nfRNTiPwhuAq7J0J::cqRJPvzRXrMgpyAs": { file: "jb2a.impact.007.orange", forma: "bersaglio" }, // Giant Octopus · Crush — Mark Stress
  "Actor.5s8wSvpyC5rxY5aD::tEtYhhFDjwqBDFwF": { file: "jb2a.hammer.melee.01.white", forma: "bersaglio" }, // Giant Recruit — Warhammer
  "Actor.5s8wSvpyC5rxY5aD.Item.FMgB28X1LammRInU::wez1xgy9vScux9wi": { file: "jb2a.hammer.melee.01.white", forma: "bersaglio" }, // Giant Recruit · Group Attack — Spend Fear
  "Actor.Nx7LCcitOvQvXb8X::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.creature_attack.claw.001.red", forma: "bersaglio" }, // Gobstalker — Mouth Tentacles
  "Actor.Nx7LCcitOvQvXb8X.Item.nKENFMC5m8D9eJDr::bB9OQCo3txQVGMx1": { file: "jb2a.energy_strands.range.multiple.purple.01", forma: "proiettile" }, // Gobstalker · Tentacle Rays — Mark Stress
  "Actor.Nx7LCcitOvQvXb8X.Item.nKENFMC5m8D9eJDr::xbIrVGcxJ5oV8GtB": { file: "jb2a.energy_beam.normal.bluepink.02", forma: "proiettile" }, // Gobstalker · Tentacle Rays — Beguile
  "Actor.Nx7LCcitOvQvXb8X.Item.nKENFMC5m8D9eJDr::ZyxIPJy3JgSO5YIO": { file: "jb2a.ranged.04.projectile.01.green", forma: "proiettile" }, // Gobstalker · Tentacle Rays — Corrode
  "Actor.Nx7LCcitOvQvXb8X.Item.nKENFMC5m8D9eJDr::wbuNKs16501PjbL3": { file: "jb2a.eldritch_blast.purple", forma: "proiettile" }, // Gobstalker · Tentacle Rays — Doom
  "Actor.Nx7LCcitOvQvXb8X.Item.nKENFMC5m8D9eJDr::YDZos8t1JHP3cNrI": { file: "jb2a.energy_beam.normal.bluepink.03", forma: "proiettile" }, // Gobstalker · Tentacle Rays — Hypnosis
  "Actor.Nx7LCcitOvQvXb8X.Item.nKENFMC5m8D9eJDr::Dp2L5no3WC9tyBMD": { file: "jb2a.ray_of_frost.blue", forma: "proiettile" }, // Gobstalker · Tentacle Rays — Paralyze
  "Actor.Nx7LCcitOvQvXb8X.Item.nKENFMC5m8D9eJDr::hoHrbWAxlH3eViNQ": { file: "jb2a.scorching_ray.01.orange", forma: "proiettile" }, // Gobstalker · Tentacle Rays — Sear
  "Actor.Nx7LCcitOvQvXb8X.Item.nKENFMC5m8D9eJDr::NCA81X9nYbkhqLUV": { file: "jb2a.energy_strands.range.standard.purple.01", forma: "proiettile" }, // Gobstalker · Tentacle Rays — Scare
  "Actor.Nx7LCcitOvQvXb8X.Item.nKENFMC5m8D9eJDr::fypEGxOvd0kj8VxM": { file: "jb2a.witch_bolt.blue", forma: "proiettile" }, // Gobstalker · Tentacle Rays — Slow
  "Actor.Nx7LCcitOvQvXb8X.Item.HmMc6W0fwO6slIVG::SsVfjYLxVvu69zkJ": { file: "jb2a.healing_generic.200px.purple", forma: "lanciatore" }, // Gobstalker · Leech Lick — Spend Fear
  "Actor.8mJYMpbLTb8qIOrr::95jJfnRhnX89SiCe": { file: "jb2a.fire_bolt.orange", forma: "proiettile" }, // Gorgon — Sunsear Shortbow
  "Actor.8mJYMpbLTb8qIOrr.Item.OqE6hBijxAkn5gIm::GSYD7y0ywAqyKUfm": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Gorgon · Relentless (2) — Spotlight: Relentless
  "Actor.8mJYMpbLTb8qIOrr.Item.NepVGKOo1lHYjA1F::fnTd5BjBAK46vRRk": { file: "jb2a.sacred_flame.target.yellow", forma: "bersaglio" }, // Gorgon · Sunsear Arrows — Glow
  "Actor.8mJYMpbLTb8qIOrr.Item.9SO2ov36lFH2YV0S::ryfj8eiYYNGJPtBg": { file: "jb2a.melee_generic.creature_attack.claw.002.red", forma: "bersaglio" }, // Gorgon · Crown of Serpents — Attack
  "Actor.8mJYMpbLTb8qIOrr.Item.047o6OtNlUwLG1H1::ySkX0wOpEFqtgeD9": { file: "jb2a.markers.stun.purple.02", forma: "bersaglio" }, // Gorgon · Petrifying Gaze — Spend Fear
  "Actor.8mJYMpbLTb8qIOrr.Item.047o6OtNlUwLG1H1::ywZTs3D8ClT7tAsa": { file: "jb2a.markers.stun.purple.01", forma: "bersaglio" }, // Gorgon · Petrifying Gaze — Start Countdown
  "Actor.8mJYMpbLTb8qIOrr.Item.IRIaFxFughjXVu0Y::V6tkBYSjOt1LZCkp": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Gorgon · Momentum — Gain Fear
  "Actor.AagRRy7uZr9k7tDH::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Guahalan Alebrujo — Tooth & Claw
  "Actor.AagRRy7uZr9k7tDH.Item.dEI9ygpdwMr8lijU::kuQUSh5LEqv0Bx9G": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Guahalan Alebrujo · Guahalan Sacrifice — Clear HP
  "Actor.AagRRy7uZr9k7tDH.Item.dEI9ygpdwMr8lijU::khHHskaARNgp0iVf": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Guahalan Alebrujo · Guahalan Sacrifice — Clear Stress
  "Actor.AagRRy7uZr9k7tDH.Item.UYKbaPpVUFhcuZRw::29EzB9hySo3ENaxz": { file: "jb2a.soundwave.02.blue", forma: "lanciatore" }, // Guahalan Alebrujo · Howl of the Guahala — Mark Stress
  "Actor.AagRRy7uZr9k7tDH.Item.YuGPhd2TzfgkQcUU::Ya7QHJy9ix2bxH1F": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Guahalan Alebrujo · Rip & Tear — Spend Fear
  "Actor.AagRRy7uZr9k7tDH.Item.YuGPhd2TzfgkQcUU::pKkPT8YCoYFOkIms": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Guahalan Alebrujo · Rip & Tear — Mark Stress
  "Actor.AagRRy7uZr9k7tDH.Item.MWKOMQKsRKY2Kk3Y::nyKqVvmXFQ9TvChE": { file: "jb2a.markers.horror.purple.02", forma: "bersaglio" }, // Guahalan Alebrujo · Brutal Spectacle — Spend Fear
  "Actor.YFPpMT6zZQwzIJIu::qHEFFbkvLvbm9VmI": { file: "jb2a.spear.melee.01.white", forma: "bersaglio" }, // Guahalan Fang Lord — Spear
  "Actor.YFPpMT6zZQwzIJIu.Item.rCBSR2N71oJ48cck::WIylcqyP0lrVHQB6": { file: "jb2a.markers.on_token_mask.complete.01.orange", forma: "lanciatore" }, // Guahalan Fang Lord · Unleash the Beast — Spend Fear
  "Actor.YFPpMT6zZQwzIJIu.Item.yQ5EicZ0Iug3HgOO::jGbqijMmZwZGmxin": { file: "jb2a.soundwave.01.blue", forma: "lanciatore" }, // Guahalan Fang Lord · Call of the Guahala — Spend Fear
  "Actor.YFPpMT6zZQwzIJIu.Item.bRC0lNqjPVIVMW1u::uSx3GC8d3W5DQV5L": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Guahalan Fang Lord · Feral Form (Phase Change) — undefined
  "Actor.cRujJUHzQvzwWZtj::qHEFFbkvLvbm9VmI": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Guahalan Shifter — Warclub
  "Actor.cRujJUHzQvzwWZtj.Item.hm59cVjpGREZwPQ8::TCb0zNkc1rx6Op4f": { file: "jb2a.markers.on_token_mask.complete.01.orange", forma: "lanciatore" }, // Guahalan Shifter · Unleash the Beast — Spend Fear
  "Actor.cRujJUHzQvzwWZtj.Item.bKQurrqEhequsRvi::lzlCBhfULidJL9qI": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Guahalan Shifter · Pack Attack — Mark Stress
  "Actor.PV0FTOWQWLw3PDlY::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Guahalan Spirit Beast — Bite & Claw
  "Actor.PV0FTOWQWLw3PDlY.Item.oYNpJeGv8B9kysC9::FotdEI3qC8wvaRYg": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Guahalan Spirit Beast · Group Attack — 
  "Actor.PV0FTOWQWLw3PDlY.Item.MsyovuEmk2sl1ZxU::nKOB7RlQSd795y7F": { file: "jb2a.explosion.03.blueyellow", forma: "lanciatore" }, // Guahalan Spirit Beast · Beast Bomb — Explode
  "Actor.9K39Wga6Lj5y0g8M::qHEFFbkvLvbm9VmI": { file: "jb2a.ranged.02.projectile.01.yellow", forma: "proiettile" }, // Guahalan Spirit Singer — Spirit Flame
  "Actor.9K39Wga6Lj5y0g8M.Item.Yrqv87f6puOCxm10::t9xXl4LL3AZi9jwd": { file: "jb2a.markers.on_token_mask.complete.01.orange", forma: "lanciatore" }, // Guahalan Spirit Singer · Unleash the Beast — Spend Fear
  "Actor.9K39Wga6Lj5y0g8M.Item.caJPsyCr135shtxb::RdekCPAM3sRbM7Vv": { file: "jb2a.particle_burst.01.circle.bluepurple", forma: "lanciatore" }, // Guahalan Spirit Singer · Beast-Caller — Spend Fear
  "Actor.9K39Wga6Lj5y0g8M.Item.7cdY7q2H3EknbG3A::p73h76x2G0lGMJpV": { file: "jb2a.cast_generic.sound.01.pinkteal", forma: "lanciatore" }, // Guahalan Spirit Singer · Rage of Spirits — Mark Stress
  "Actor.9K39Wga6Lj5y0g8M.Item.IXX7AivO001xb0DP::2AUWa9djQNaz85fL": { file: "jb2a.shield.01.outro_explode.blue", forma: "lanciatore" }, // Guahalan Spirit Singer · Spiritual Sacrifice — Spend Fear
  "Actor.321E0ZexRT4zjpKu::qHEFFbkvLvbm9VmI": { file: "jb2a.greatclub.standard.white", forma: "bersaglio" }, // Hill Titan — Tree Stump
  "Actor.321E0ZexRT4zjpKu.Item.kkVrD8dy2HAdNz3a::MWwpebNudgH13J0t": { file: "jb2a.fireflies.many.01.green", forma: "lanciatore" }, // Hill Titan · Bug Swarm — Activate
  "Actor.321E0ZexRT4zjpKu.Item.Xgwos3c1kvGSl9yu::UNgyT9aqPZKIvskW": { file: "jb2a.melee_attack.03.greatclub.01", forma: "lanciatore" }, // Hill Titan · Mighty Swing — Spend Fear
  "Actor.MydEcpmRKsHt1snu::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Hive Walker — Rotting Fist
  "Actor.MydEcpmRKsHt1snu.Item.h2aCJ7Beoel7DHW5::WspW0NENWuwhVUl7": { file: "jb2a.liquid.splash_side02.red", forma: "bersaglio" }, // Hive Walker · Blood Honey — Reaction Roll
  "Actor.qhMbIUVeD7BWuRKJ::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Jack-o'-lantern — Chomp
  "Actor.qhMbIUVeD7BWuRKJ.Item.Gs8ZHt8BGz7NHOwq::Jfrfrt2034uuEfnx": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Jack-o'-lantern · Group Attack — Spend Fear
  "Actor.qhMbIUVeD7BWuRKJ.Item.A4L1b024r7OrZvkx::73ZrmyuYdBQLyOLD": { file: "jb2a.markers.fear.dark_purple.02", forma: "lanciatore" }, // Jack-o'-lantern · Spine-Chilling Cackle — Mark Stress
  "Actor.MYXmTx2FHcIjdfYZ::Hd6KFo4oOPGiVkVt": { file: "jb2a.melee_generic.slash.01.orange", forma: "bersaglio" }, // Juvenile Flickerfly — Wing Slash
  "Actor.MYXmTx2FHcIjdfYZ.Item.6SnqNCeSEY7Q2tSI::FgoP6tlMUxnv5k4Z": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Juvenile Flickerfly · Relentless (3) — Spotlight: Relentless
  "Actor.MYXmTx2FHcIjdfYZ.Item.PHHEvM6IDFFZ8LSl::RrKQktP8MI4YQR5k": { file: "jb2a.hunters_mark.pulse.01.green", forma: "bersaglio" }, // Juvenile Flickerfly · Peerless Accuracy — Roll d6
  "Actor.MYXmTx2FHcIjdfYZ.Item.Bt7MqMkPpPpzWksK::0wL3ieMrXEb2gcxe": { file: "jb2a.butterflies.outward_burst.01.bluepurple", forma: "lanciatore" }, // Juvenile Flickerfly · Mind Dance — Roll Save
  "Actor.MYXmTx2FHcIjdfYZ.Item.EjfM83eVCdcVGC3c::USEkCakSzYcZbBwY": { file: "jb2a.breath_weapons.poison.cone.green", forma: "bersaglio" }, // Juvenile Flickerfly · Hallucinatory Breath — Roll Save
  "Actor.MYXmTx2FHcIjdfYZ.Item.EjfM83eVCdcVGC3c::n8ZuLjwTf2FJ7V6n": { file: "jb2a.fumes.04.complete.grey", forma: "lanciatore" }, // Juvenile Flickerfly · Hallucinatory Breath — Start Countdown
  "Actor.7ai2opemrclQe3VF::SjwuXCa2kFSA3MX5": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Knight of the Realm — Longsword
  "Actor.7ai2opemrclQe3VF.Item.djKDZawLnGF1zkbY::Mb079uPkaZgpo9y3": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Knight of the Realm · Cavalry Charge — Attack
  "Actor.7ai2opemrclQe3VF.Item.RoxNNIn0m9rHQDH8::V5fLHHdTOita6u9f": { file: "jb2a.bless.200px.intro.yellow", forma: "lanciatore" }, // Knight of the Realm · For the Realm! — Mark Stress
  "Actor.A9EuHHWa6UmN7khR::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Landshark — Toothy Maw
  "Actor.A9EuHHWa6UmN7khR.Item.JQcVefx6fpSoa9Rd::kxX8ajLV16wB6EgC": { file: "jb2a.shield_themed.above.molten_earth.01.orange", forma: "lanciatore" }, // Landshark · Thick-Skinned — Mark Stress
  "Actor.A9EuHHWa6UmN7khR.Item.BikRG1s59ZXky7V6::HtO75slrg3hdLTBf": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Landshark · Rending Chomp — Spend Fear
  "Actor.87vG6DpVjMuRMR8Q::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Landshark Behemoth — Toothy Maw
  "Actor.87vG6DpVjMuRMR8Q.Item.j1mUnngeA5NKBgnZ::JT0PNpmAqv2Sy0ej": { file: "jb2a.impact.ground_crack.orange.02", forma: "lanciatore" }, // Landshark Behemoth · Forceful Eruption — Reaction Roll
  "Actor.niBpVU7yeo5ccskE::7f88F85JDpxbchfc": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Masked Thief — Backsword
  "Actor.niBpVU7yeo5ccskE.Item.Cgk36WXthA9LwOYb::33xlM2ph77SSUfBs": { file: "jb2a.melee_attack.01.shortsword.01", forma: "bersaglio" }, // Masked Thief · Quick Hands — Attack
  "Actor.niBpVU7yeo5ccskE.Item.tP2DD751nOLxFVps::sq0q1l2Go4GduR3B": { file: "jb2a.caltrops.01.grey", forma: "bersaglio" }, // Masked Thief · Escape Plan — Roll Save
  "Actor.dNta0cUzr96xcFhf::lYNOvl0K4FSlMhYy": { file: "jb2a.dagger.throw.01.white", forma: "proiettile" }, // Master Assassin — Serrated Dagger
  "Actor.dNta0cUzr96xcFhf.Item.Pb3qWLBJmpOmoKq0::xFBE0jLf96fbCY7K": { file: "jb2a.sneak_attack.dark_green", forma: "bersaglio" }, // Master Assassin · Won't See it Coming — Hidden attack
  "Actor.dNta0cUzr96xcFhf.Item.za6Qr0CjI9Kb4I0U::vKRDbD07bqR317Zv": { file: "jb2a.ui.chevrons3.yellow", forma: "lanciatore" }, // Master Assassin · Strike as One — Mark Stress
  "Actor.dNta0cUzr96xcFhf.Item.s0WcpK43WN2ptqNc::tYkZ9BwjlOg61BhE": { file: "jb2a.sneak_attack_text.01.dark_red", forma: "bersaglio" }, // Master Assassin · The Subtle Blade — Spend Fear
  "Actor.dNta0cUzr96xcFhf.Item.PcNgHScmTd9l3exN::7EP5X5kodzMCBQZO": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Master Assassin · Momentum — Gain Fear
  "Actor.Vy02IhGhkJLuezu4::ftKFkPYbGg6EIAVi": { file: "jb2a.rapier.melee.01.white", forma: "bersaglio" }, // Merchant Baron — Rapier
  "Actor.Vy02IhGhkJLuezu4.Item.7dxToUpxOyISXXde::T7N9rDCaB5VOm6AY": { file: "jb2a.glint.yellow.many", forma: "bersaglio" }, // Merchant Baron · Everyone Has a Price — Roll Save
  "Actor.Vy02IhGhkJLuezu4.Item.QnDvERcyaq3XLCjF::9NA6vgfsv0y2tX9v": { file: "jb2a.markers.runes.orange.01", forma: "lanciatore" }, // Merchant Baron · The Best Muscle Money Can Buy — Mark Stress
  "Actor.rM9qCIYeWg9I0B4l::CV7G8WLs7GyHOFd0": { file: "jb2a.melee_attack.02.battleaxe.01", forma: "bersaglio" }, // Minotaur Wrecker — Battleaxe
  "Actor.rM9qCIYeWg9I0B4l.Item.RxTetAI1hmmxzJTg::oVGqHl82zSjnlym3": { file: "jb2a.markers.on_token_mask.complete.01.orange", forma: "lanciatore" }, // Minotaur Wrecker · Ramp Up — Spend Fear
  "Actor.rM9qCIYeWg9I0B4l.Item.b2QvDYOq1nreI2uD::8fgkb7U2pxNyiHrB": { file: "jb2a.gust_of_wind.veryfast", forma: "lanciatore" }, // Minotaur Wrecker · Charging Bull — Attack
  "Actor.rM9qCIYeWg9I0B4l.Item.b2QvDYOq1nreI2uD::fZ8jWUdMKBf5xSPO": { file: "jb2a.impact.008.orange", forma: "bersaglio" }, // Minotaur Wrecker · Charging Bull — Collision Damage
  "Actor.rM9qCIYeWg9I0B4l.Item.WxbHcbaeb6L7g8qN::3yqz7Gj34KBWMjwt": { file: "jb2a.melee_generic.creature_attack.claw.001.red", forma: "bersaglio" }, // Minotaur Wrecker · Gore — Attack
  "Actor.mVV7a7KQAORoPMgZ::GUkFHtbQt6T7g9MS": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Mortal Hunter — Tear at Flesh
  "Actor.mVV7a7KQAORoPMgZ.Item.cID8rYBYealYs7mO::9T1g3FH38cnCRG8k": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Mortal Hunter · Terrifying — Lose Hope
  "Actor.mVV7a7KQAORoPMgZ.Item.r1T70u9n3bRfUTX5::LUNsI29woLk4m2wo": { file: "jb2a.condition.curse.01.013.red", forma: "bersaglio" }, // Mortal Hunter · Deathlock — Curse
  "Actor.mVV7a7KQAORoPMgZ.Item.r1T70u9n3bRfUTX5::zLKfwa8a2YBRLKAF": { file: "jb2a.melee_generic.creature_attack.claw.002.red", forma: "bersaglio" }, // Mortal Hunter · Deathlock — Deathlocked attack
  "Actor.mVV7a7KQAORoPMgZ.Item.5AQTqW1GDidHfU3a::wxOfNoEogH1EU0Jb": { file: "jb2a.ui.chevrons3.yellow", forma: "lanciatore" }, // Mortal Hunter · Inevitable Death — Spotlight Allies
  "Actor.mVV7a7KQAORoPMgZ.Item.IOCG3J20wUHvyvvh::VjiFxuzfAaq5N1jy": { file: "jb2a.gust_of_wind.veryfast", forma: "lanciatore" }, // Mortal Hunter · Rampage — Attack
  "Actor.mVV7a7KQAORoPMgZ.Item.IOCG3J20wUHvyvvh::BhA3vxCuMs4UbbQU": { file: "jb2a.markers.skull.dark_orange.01", forma: "lanciatore" }, // Mortal Hunter · Rampage — Start Countdown
  "Actor.Nj9E7DLb7UakiKz6::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Ravenous Mockery — Gnashing Teeth
  "Actor.Nj9E7DLb7UakiKz6.Item.rn2adeYuqdaHFD0v::hIIs4Vn2ATC72SnO": { file: "jb2a.markers.chain.spectral_standard.complete.02.blue", forma: "bersaglio" }, // Ravenous Mockery · Tongue Attack — Mark Stress
  "Actor.Nj9E7DLb7UakiKz6.Item.G1qVvL0l6KKd7sTs::JWkNxCaR1aBUfeI3": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Ravenous Mockery · Devour — Swallow
  "Actor.Nj9E7DLb7UakiKz6.Item.G1qVvL0l6KKd7sTs::mEVR59fZyV4bUICm": { file: "jb2a.impact.water.02.blue", forma: "bersaglio" }, // Ravenous Mockery · Devour — Swallowed Damage
  "Actor.Nj9E7DLb7UakiKz6.Item.i2G6IPeYPxI5Yex6::94KPvNOPX3gbYYa3": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Ravenous Mockery · Never Just One — Spend Fear
  "Actor.EtLJiTsilPPZvLUX::D3emLHL1Lczy46Yu": { file: "jb2a.magic_missile.purple", forma: "proiettile" }, // Royal Advisor — Wand
  "Actor.EtLJiTsilPPZvLUX.Item.XFpF0FfTdqCjbHHF::gtM7UPq6xHgJHPPp": { file: "jb2a.markers.mute.dark_red.01", forma: "bersaglio" }, // Royal Advisor · Devastating Retort — Stress Damage
  "Actor.EtLJiTsilPPZvLUX.Item.lG6vMc0zUbijpvCM::JNFTnARlTAKermLx": { file: "jb2a.music_notations.beamed_quavers.blue", forma: "lanciatore" }, // Royal Advisor · Bend Ears — Mark Stress
  "Actor.EtLJiTsilPPZvLUX.Item.iwNrNBbvm3RMgSw5::6oaHwUVWTmF362vI": { file: "jb2a.markers.skull.purple.01", forma: "lanciatore" }, // Royal Advisor · Scapegoat — Spend Fear
  "Actor.y6dI50LstfCrlVfY::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Rust Eater — Bite
  "Actor.y6dI50LstfCrlVfY.Item.gxRaxj1KC5GCLHJh::ffLuf3wJVwxluJXT": { file: "jb2a.fumes.steam.white", forma: "lanciatore" }, // Rust Eater · Stifling Pheromones — Reaction Roll
  "Actor.lOIaoJscG3he5thc::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.01.sickle.01", forma: "bersaglio" }, // Scarecrow — Sickle
  "Actor.lOIaoJscG3he5thc.Item.26hUFK6A4zYMUO0y::4LBwcQxaOl03MaIs": { file: "jb2a.markers.horror.purple.03", forma: "bersaglio" }, // Scarecrow · Terror Vision — Spend Fear
  "Actor.sLAccjvCWfeedbpI::DfDJDZEliZaCPous": { file: "jb2a.ranged.03.projectile.01.bluegreen", forma: "proiettile" }, // Secret-Keeper — Sigil-laden Staff
  "Actor.sLAccjvCWfeedbpI.Item.WLnguxRo9egh2hfX::e6DmGF9vOv27BJ6f": { file: "jb2a.ui.chevrons3.yellow", forma: "lanciatore" }, // Secret-Keeper · Seize Your Moment — Spotlight Allies
  "Actor.sLAccjvCWfeedbpI.Item.O5Nn1Slv8RJJpNeT::MUdqLSRIpEEk1Ujc": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Secret-Keeper · Our Master's Will — Mark Stress
  "Actor.sLAccjvCWfeedbpI.Item.4L7aM9NDLbjvuwI3::ZVXHY2fpomoKV7jG": { file: "jb2a.magic_signs.circle.02.conjuration.complete.dark_yellow", forma: "lanciatore" }, // Secret-Keeper · Summoning Ritual — Start Countdown
  "Actor.sLAccjvCWfeedbpI.Item.4L7aM9NDLbjvuwI3::YReYG6DrWp4QGSij": { file: "jb2a.portals.horizontal.ring.bright_yellow", forma: "lanciatore" }, // Secret-Keeper · Summoning Ritual — Summon
  "Actor.sLAccjvCWfeedbpI.Item.Q28NPuSMccjzykib::tfmY6HYkkY27NBaF": { file: "jb2a.darkness.black", forma: "lanciatore" }, // Secret-Keeper · Fallen Hounds — Mark Stress
  "Actor.YmVAkdNsyuXWTtYp::o5euWtcJgfbarqYg": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Shark — Toothy Maw
  "Actor.YmVAkdNsyuXWTtYp.Item.w46d3D2gXUIJh2GH::NoEb6qR3ktIu9kRJ": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Shark · Terrifying — Lose Hope
  "Actor.YmVAkdNsyuXWTtYp.Item.zT4AOW20LPlDoncy::a0gC7uWycUB2NgKS": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Shark · Rending Bite — Attack
  "Actor.YmVAkdNsyuXWTtYp.Item.LBKPfi8XktBAwbrt::K8MhGxVJxLaNRqm1": { file: "jb2a.liquid.splash02.red", forma: "lanciatore" }, // Shark · Blood in the Water — Mark Stress
  "Actor.BK4jwyXSRx7IOQiO::HZQTzHWuqyXwWv14": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Siren — Distended Jaw Bite
  "Actor.BK4jwyXSRx7IOQiO.Item.Zc3PFPTgKRX03Fx6::FxWbdt0hRNv2k9Pm": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Siren · Captive Audience — Attack
  "Actor.BK4jwyXSRx7IOQiO.Item.Ks3HpB4W1l5FqR7p::FY8K8Nsg0TKAWok8": { file: "jb2a.music_notations.treble_clef.blue", forma: "lanciatore" }, // Siren · Enchanting Song — Roll Save
  "Actor.5tCkhnBByUIN5UdG::DscGhDq7dQsoABRq": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Spectral Archer — Longbow
  "Actor.5tCkhnBByUIN5UdG.Item.qvJRjKrdr6MG05iJ::kkKfo1gwetxB3tFQ": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Spectral Archer · Ghost — Mark Stress
  "Actor.5tCkhnBByUIN5UdG.Item.0h4IVmCgWXyQngAw::KahJnM94QQfy6oMK": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Spectral Archer · Pick Your Target — Attack
  "Actor.65cSO3EQEh6ZH6Xk::Kp0au0VmsQdgbANv": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Spectral Captain — Longbow
  "Actor.65cSO3EQEh6ZH6Xk.Item.JU93RyfAB5XhZ6FN::k7RuXErgCsEBmhmk": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Spectral Captain · Ghost — Mark Stress
  "Actor.65cSO3EQEh6ZH6Xk.Item.7YVe4DfEWMNLXNvu::eHmbN4aPLUuEoDQt": { file: "jb2a.magic_signs.circle.02.necromancy.complete.green", forma: "lanciatore" }, // Spectral Captain · Unending Battle — Spend Fear
  "Actor.65cSO3EQEh6ZH6Xk.Item.X0vtV30ACVVZ6NfF::aRg1bcPGUn69GPyB": { file: "jb2a.bless.400px.intro.yellow", forma: "lanciatore" }, // Spectral Captain · Hold Fast — Mark Stress
  "Actor.65cSO3EQEh6ZH6Xk.Item.b9wn9oVMne8E1OYx::tZKpqKdehnPxRsOc": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Spectral Captain · Momentum — Gain Fear
  "Actor.UFVGl1osOsJTneLf::bERS3hkcmwbCpMgz": { file: "jb2a.spear.melee.01.white", forma: "bersaglio" }, // Spectral Guardian — Spear
  "Actor.UFVGl1osOsJTneLf.Item.x3g1lM5S1W7DAKIc::X1JlwWqyYHjahbpA": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Spectral Guardian · Ghost — Mark Stress
  "Actor.UFVGl1osOsJTneLf.Item.L48tQmj5O3s2pjBn::AdfULyYsj9YPcCj6": { file: "jb2a.melee_attack.03.trail.01.blueyellow", forma: "bersaglio" }, // Spectral Guardian · Ghost Blade — Attack
  "Actor.iQL0zE7vRLZSZ2TI::qHEFFbkvLvbm9VmI": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Sprite — Needle-Sharp Arrows
  "Actor.iQL0zE7vRLZSZ2TI.Item.Uovw42uUT8p4fOub::8uGwunoXJxiNqC5B": { file: "jb2a.fairies.outward_burst.01.bluepurple", forma: "lanciatore" }, // Sprite · Art of Invisibility — Spend Fear
  "Actor.iQL0zE7vRLZSZ2TI.Item.BeEtOMk2QO2Mxloo::HwKdUshajXAPtEVE": { file: "jb2a.sleep.target.pink", forma: "bersaglio" }, // Sprite · Dream Petal Poison — Spend Fear
  "Actor.8zlynOhnVA59KpKT::MMwOWVZCGk4gUPnJ": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Spy — Dagger
  "Actor.8zlynOhnVA59KpKT.Item.csCWQuSqic5ckHeO::iq5KzP5hgA4377fO": { file: "jb2a.extras.tmfx.runes.circle.simple.divination", forma: "lanciatore" }, // Spy · Gathering Secrets — Spend Fear
  "Actor.8zlynOhnVA59KpKT.Item.UvgVDn0YjISLdKE4::Ml8nt7SPNFc2iQno": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Spy · Fly on the Wall — Mark Stress
  "Actor.8zlynOhnVA59KpKT.Item.UvgVDn0YjISLdKE4::qCA2hTMIYGW0FhGy": { file: "jb2a.icon.fear.dark_purple", forma: "lanciatore" }, // Spy · Fly on the Wall — Gain Fear
  "Actor.ufQMOWgcGspqyGln::qHEFFbkvLvbm9VmI": { file: "jb2a.hammer.melee.01.white", forma: "bersaglio" }, // Stone Titan — Stone Hammer
  "Actor.ufQMOWgcGspqyGln.Item.6Rcg7M3ntTPSqzjG::vetQO8oqCCKuPL1M": { file: "jb2a.hunters_mark.pulse.01.green", forma: "bersaglio" }, // Stone Titan · Skillful Strike — Mark Stress
  "Actor.ufQMOWgcGspqyGln.Item.Xoddbd1VoPNcLgE5::vQ3r6zzTPguNV3dL": { file: "jb2a.on_token_buff.001.001.orangeyellow", forma: "lanciatore" }, // Stone Titan · Sunlight Sickness — Mark Stress
  "Actor.ufQMOWgcGspqyGln.Item.L8NmHjefixhO07zx::Rt0IuvhgJOCU1Mpz": { file: "jb2a.icon.shield_cracked.purple", forma: "bersaglio" }, // Stone Titan · Hammer Smash — Spend Fear
  "Actor.3aAS2Qm3R6cgaYfE::YiA49REwba6lJsoy": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Stonewraith — Bite and Claws
  "Actor.3aAS2Qm3R6cgaYfE.Item.tQgxiSS48TJ3X1Dl::E8C2Nd4mwcGTXoXb": { file: "jb2a.impact.ground_crack.orange.01", forma: "bersaglio" }, // Stonewraith · Rocky Ambush — Attack
  "Actor.3aAS2Qm3R6cgaYfE.Item.9Z0i0uURfBMVIapJ::4UGEEuK9XY8leCBV": { file: "jb2a.falling_rocks.top.2x1.grey", forma: "bersaglio" }, // Stonewraith · Avalanche Roar — Roll Save
  "Actor.3aAS2Qm3R6cgaYfE.Item.9Z0i0uURfBMVIapJ::UurIzyyMRAJc2DUX": { file: "jb2a.smoke.plumes.01.grey", forma: "lanciatore" }, // Stonewraith · Avalanche Roar — Start Countdown
  "Actor.3aAS2Qm3R6cgaYfE.Item.faM1UzclP0X3ZrkJ::IIZPctjF4MJkWs4b": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Stonewraith · Momentum — Gain Fear
  "Actor.nbdEW8HTS25uEiWZ::qHEFFbkvLvbm9VmI": { file: "jb2a.impact.007.orange", forma: "bersaglio" }, // Triceratops — Horns
  "Actor.nbdEW8HTS25uEiWZ.Item.8Av06kAvwAE2WhSL::oewmJZJF7gu6f0kM": { file: "jb2a.aura_themed.01.orbit.complete.metal.01.grey", forma: "lanciatore" }, // Triceratops · Leathery Hide — Mark Stress
  "Actor.nbdEW8HTS25uEiWZ.Item.yN9PTYAX9BWUha61::jYrhRu55qtGTZgnO": { file: "jb2a.melee_attack.05.trail.01.orangered", forma: "bersaglio" }, // Triceratops · Tail Swipe — Mark Stress
  "Actor.nbdEW8HTS25uEiWZ.Item.4FCeQlt3ICzBmcgw::9y0R44wX6IEWXwT0": { file: "jb2a.impact.ground_crack.orange.02", forma: "bersaglio" }, // Triceratops · Bull Rush — Mark Stress
  "Actor.IrWRZcwshGOppa5K::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Tyrannosaurus — Mighty Jaws
  "Actor.IrWRZcwshGOppa5K.Item.VZcHBueL3e8hLcN4::jkXazS1pHYdOZKWL": { file: "jb2a.soundwave.01.blue", forma: "lanciatore" }, // Tyrannosaurus · Earth-Shaking Roar — Spend Fear
  "Actor.IrWRZcwshGOppa5K.Item.k1RdR8MHtgtN65RM::TgZY2f0G3r6EpHkI": { file: "jb2a.impact.ground_crack.01.orange", forma: "bersaglio" }, // Tyrannosaurus · Stomp — Mark Stress
  "Actor.IrWRZcwshGOppa5K.Item.spgPPiDI0yt1sqbP::vEjXDz67LDYPSkTc": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Tyrannosaurus · Crushing Bite — Spend Fear
  "Actor.6kvqeoKIIFEcEHNQ::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Urco — Black Fang
  "Actor.6kvqeoKIIFEcEHNQ.Item.2bWAUEaKjtBcIaeK::yqAxg6k6zUJvILYD": { file: "jb2a.icon.fear.dark_purple", forma: "lanciatore" }, // Urco · Fearmonger — Gain Fear
  "Actor.6kvqeoKIIFEcEHNQ.Item.rl4x4HKG3Rv6JdrD::CNXMESN9MKezm1iM": { file: "jb2a.healing_generic.400px.purple", forma: "lanciatore" }, // Urco · Fear Eater — Heal Stress
  "Actor.6kvqeoKIIFEcEHNQ.Item.rl4x4HKG3Rv6JdrD::DzZuI2zvuoKMYncT": { file: "jb2a.healing_generic.400px.purple", forma: "lanciatore" }, // Urco · Fear Eater — Heal HP
  "Actor.6kvqeoKIIFEcEHNQ.Item.YFUXAwiDBVneRFbU::IKEzdb8qLT1ifbTA": { file: "jb2a.condition.curse.01.001.red", forma: "bersaglio" }, // Urco · Baleful Gaze — Spend Fear
  "Actor.Xq00qigdsoB2b3gJ::qHEFFbkvLvbm9VmI": { file: "jb2a.greatclub.standard.white", forma: "bersaglio" }, // Valdenhax — Giant Stone Pestle
  "Actor.Xq00qigdsoB2b3gJ.Item.UHgt0y5mAjYNFkKj::r6cIIiBlorTe28Ol": { file: "jb2a.magic_signs.circle.02.conjuration.complete.yellow", forma: "lanciatore" }, // Valdenhax · To Me, My Pretties — Summon
  "Actor.Xq00qigdsoB2b3gJ.Item.AhT2ysWH9VJvvoZF::7GZJ2tyBWej0am16": { file: "jb2a.energy_strands.range.standard.purple.01", forma: "proiettile" }, // Valdenhax · Shadow Strangler — Mark Stress
  "Actor.Xq00qigdsoB2b3gJ.Item.p4Uo22O2XtQULFI3::orcsdJDjVJqY3lmI": { file: "jb2a.magic_signs.circle.02.necromancy.complete.dark_green", forma: "bersaglio" }, // Valdenhax · Corpse Whisperer — Spend Fear
  "Actor.Xq00qigdsoB2b3gJ.Item.dunAJ7TjJSBEyJHg::UKM1orlTG9com6sW": { file: "jb2a.icon.stun.purple", forma: "bersaglio" }, // Valdenhax · Vexing Word — Mark Stress
  "Actor.noDdT0tsN6FXSmC8::9TBhGTn99BxNFpTR": { file: "jb2a.ranged.01.projectile.01.dark_orange", forma: "proiettile" }, // War Wizard — Staff
  "Actor.noDdT0tsN6FXSmC8.Item.PUUz48dsObawcSgp::39zC1I5DYozI47lP": { file: "jb2a.teleport.01.blue", forma: "lanciatore" }, // War Wizard · Battle Teleport — Mark Stress
  "Actor.noDdT0tsN6FXSmC8.Item.dI2MGjC7NFAru1Gd::FCuksmAGRC4061zm": { file: "jb2a.shield.01.intro.blue", forma: "lanciatore" }, // War Wizard · Refresh Warding Sphere — Mark Stress
  "Actor.noDdT0tsN6FXSmC8.Item.PnQ0m0FLnpht7oE4::vnMq4NuQO6GYxWhM": { file: "jb2a.eruption.orange.01", forma: "bersaglio" }, // War Wizard · Eruption — Roll Save
  "Actor.noDdT0tsN6FXSmC8.Item.s2luvEVxJLZmOrdh::DFHR8LtvjZjHP6BL": { file: "jb2a.ranged_missile.001.blue", forma: "proiettile" }, // War Wizard · Arcane Artillery — Roll Save
  "Actor.noDdT0tsN6FXSmC8.Item.9cPigHRcUfJC9gD8::2fHrpaZW9toi6nin": { file: "jb2a.shield.01.outro_explode.blue", forma: "lanciatore" }, // War Wizard · Warding Sphere — Damage

  // tier 3
  "Actor.G7jiltRjgvVhZewm::uiERCQa7Lz2W8maT": { file: "jb2a.melee_generic.slash.01.orange", forma: "bersaglio" }, // Adult Flickerfly — Wing Slash
  "Actor.G7jiltRjgvVhZewm.Item.fFOhhMl4SDUnYNNO::poUhJdSkhjiVL2Vp": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Adult Flickerfly · Relentless (4) — Spotlight: Relentless
  "Actor.G7jiltRjgvVhZewm.Item.PrwC6RpsP12fPUwy::VRGPnDhDpReXUZZF": { file: "jb2a.hunters_mark.pulse.01.green", forma: "bersaglio" }, // Adult Flickerfly · Never Misses — Halve Evasion
  "Actor.G7jiltRjgvVhZewm.Item.BuL6ndgaiJtjaM2T::RV1wKufKrMPN6MOo": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Adult Flickerfly · Whirlwind — Attack
  "Actor.G7jiltRjgvVhZewm.Item.bOTsfXr9yNIGkIzK::GNwsDlCabx3fiG4g": { file: "jb2a.butterflies.outward_burst.01.bluepurple", forma: "lanciatore" }, // Adult Flickerfly · Mind Dance — Roll Save
  "Actor.G7jiltRjgvVhZewm.Item.49cIxZRFiAM6jDva::YOyKyKGTUEWkMmJe": { file: "jb2a.template_cone_5e.001.001.purplered", forma: "proiettile" }, // Adult Flickerfly · Hallucinatory Breath — Roll Save
  "Actor.G7jiltRjgvVhZewm.Item.49cIxZRFiAM6jDva::lBhmLc33pcXzJHT3": { file: "jb2a.smoke.puff.ring.01.white", forma: "lanciatore" }, // Adult Flickerfly · Hallucinatory Breath — Start Countdown
  "Actor.G7jiltRjgvVhZewm.Item.KLdLRKoJHBJlHwYe::FocbilGTpvUjlb7m": { file: "jb2a.shimmer.01.blue", forma: "lanciatore" }, // Adult Flickerfly · Uncanny Reflexes — Mark Stress
  "Actor.FNNt42hhwvuOc4XO::qHEFFbkvLvbm9VmI": { file: "jb2a.ranged_helix.001.blue", forma: "proiettile" }, // Archmage — Archmage's Greatstaff
  "Actor.FNNt42hhwvuOc4XO.Item.fz0G4in4qWFOpncD::jelFlcnlLnzydTae": { file: "jb2a.magic_missile.purple", forma: "proiettile" }, // Archmage · Force Salvo — Spend Fear
  "Actor.FNNt42hhwvuOc4XO.Item.r6du8H8vxnW0WDfb::dyGb0CQpxamvikPl": { file: "jb2a.fireball.explosion.orange", forma: "bersaglio" }, // Archmage · Fireball — Mark Stress
  "Actor.FNNt42hhwvuOc4XO.Item.1RWw0lwrq0Qpf8jH::rPmzn5W55IPDDutC": { file: "jb2a.extras.tmfx.runes.circle.simple.abjuration", forma: "lanciatore" }, // Archmage · Counterspell — Spend Fear
  "Actor.UxOoHSEzxIjTpZws::qHEFFbkvLvbm9VmI": { file: "jb2a.ranged.03.projectile.01.bluegreen", forma: "proiettile" }, // Catrin — Spirit Flame
  "Actor.UxOoHSEzxIjTpZws.Item.bO98mAUQq9W3rWrE::oD01L5IIX7DEjVlZ": { file: "jb2a.glint.yellow.many", forma: "bersaglio" }, // Catrin · The Weight of Opulence — Spend Fear
  "Actor.UxOoHSEzxIjTpZws.Item.xv5ezYG0YFD4nrIq::sf0EbTcIURgKJ3JV": { file: "jb2a.glint.yellow.few", forma: "bersaglio" }, // Catrin · Expensive Failure — Mark Stress
  "Actor.RV9j8V7CcuZYEhec::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Chimera — Claws
  "Actor.RV9j8V7CcuZYEhec.Item.pxSZYIsKirm5mjQc::Lt88asR9M5LfU840": { file: "jb2a.melee_generic.creature_attack.claw.002.red", forma: "bersaglio" }, // Chimera · Double Claw — 
  "Actor.RV9j8V7CcuZYEhec.Item.X8V3EFHkGm1G72w2::owsdkSOvPqtwCSkB": { file: "jb2a.fire_jet.orange", forma: "proiettile" }, // Chimera · Breath of Fire — Spend Fear
  "Actor.RV9j8V7CcuZYEhec.Item.dV6pQgDxmke0KpPH::sqQugqX8JTZTAew5": { file: "jb2a.bite.200px.red", forma: "bersaglio" }, // Chimera · Serpent Strike — Mark Stress
  "Actor.vpzDW0774xXJhNHy::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Crimson Lepus — Leaping Bite
  "Actor.vpzDW0774xXJhNHy.Item.gS3GnrlC4yBT6hz0::Flxho6WUGrHncyxf": { file: "jb2a.icon.heart.pink", forma: "lanciatore" }, // Crimson Lepus · "Awww..." — Reaction Roll
  "Actor.vpzDW0774xXJhNHy.Item.KNHB4gxzIj0S4pS6::loE7DjH8VFpcW1Hu": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Crimson Lepus · Terrifying — 
  "Actor.vpzDW0774xXJhNHy.Item.vF19a5N2S1OP9Tsr::UWAI1Ymlur9yBzJs": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Crimson Lepus · Leaping Jugular Strike — Spend Fear
  "Actor.vpzDW0774xXJhNHy.Item.DyFTHR3agasbQMcN::OeUHDRwr0JTkx8HD": { file: "jb2a.shimmer.01.blue", forma: "lanciatore" }, // Crimson Lepus · Evasive — Evade
  "Actor.vpzDW0774xXJhNHy.Item.4UAcwdFi0ek4DX5l::IoeokEQOzplhw6U5": { file: "jb2a.icon.horror.purple", forma: "bersaglio" }, // Crimson Lepus · "Run Away!" — Roll To Flee
  "Actor.nrcRGYmyMy2vBJXl::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Cryptimoth — Claws
  "Actor.nrcRGYmyMy2vBJXl.Item.bZcj7Ed3cbLxes8y::Loqs8pvuFM42Ajpv": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Cryptimoth · Terrifying — 
  "Actor.nrcRGYmyMy2vBJXl.Item.kQARtKcsiosM7sgA::7eYqphDlHc8PF3jn": { file: "jb2a.soundwave.02.blue", forma: "lanciatore" }, // Cryptimoth · Psychic Screech — Spend Fear
  "Actor.nrcRGYmyMy2vBJXl.Item.WsK2lZoOA7hyVARG::V38KKXLatO3jMoko": { file: "jb2a.darkness.black", forma: "bersaglio" }, // Cryptimoth · Shadow Swarm — Spend Fear
  "Actor.nrcRGYmyMy2vBJXl.Item.ibGMv1L6QT12LYL9::CQHXNZV0cTI4uisa": { file: "jb2a.eyes.01.dark_green.single", forma: "bersaglio" }, // Cryptimoth · Paranoia Glare — Spend Fear
  "Actor.vw7PTv0hdDRCXhus::qHEFFbkvLvbm9VmI": { file: "jb2a.template_line_piercing.generic.01.orange", forma: "proiettile" }, // Cursed Merfolk — Chained Trident
  "Actor.vw7PTv0hdDRCXhus.Item.eX0tAOy7TD4wVgEY::tx5Hm4RbVVgPTglq": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Cursed Merfolk · "Get Over Here!" — Mark Stress
  "Actor.vw7PTv0hdDRCXhus.Item.eX0tAOy7TD4wVgEY::FOBTbOiof2KTjY2d": { file: "jb2a.spear.melee.01.white", forma: "bersaglio" }, // Cursed Merfolk · "Get Over Here!" — Attack
  "Actor.Wy9Dx05ulqeybn4h::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Deep Dweller — Teeth & Tentacles
  "Actor.Wy9Dx05ulqeybn4h.Item.koabq82mtdwUm0J3::70yNKLiaNqZJaJQ0": { file: "jb2a.energy_strands.range.standard.purple.02", forma: "proiettile" }, // Deep Dweller · Psychic Blast — Spend Fear
  "Actor.Wy9Dx05ulqeybn4h.Item.EJSZFUchXzCQqGfn::VOEi2TIkP8Bqt5B9": { file: "jb2a.energy_strands.in.green.01", forma: "lanciatore" }, // Deep Dweller · Brain Drain — Mark Stress
  "Actor.Wy9Dx05ulqeybn4h.Item.x7WN5SgJGj1dv4W1::6OAsVYpUjfHC07ok": { file: "jb2a.water_splash.circle.01.blue", forma: "lanciatore" }, // Deep Dweller · Call of the Deep — 
  "Actor.Wy9Dx05ulqeybn4h.Item.grMlNQ3scZWgkui9::m3SXz2E9UZmw1ppj": { file: "jb2a.black_tentacles.dark_purple", forma: "bersaglio" }, // Deep Dweller · Mucosal Contamination — 
  "Actor.pnyjIGxxvurcWmTv::F7YJnZhuv7jNQ4Gd": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Demon of Avarice — Hungry Maw
  "Actor.kE4dfhqmIQpNd44e::vGjbOD0wlB68m2QT": { file: "jb2a.ranged.04.projectile.01.green", forma: "proiettile" }, // Demon of Despair — Miasma Bolt
  "Actor.kE4dfhqmIQpNd44e.Item.FC8PIf4BVkhmoJX8::n0RYO05pROFU6ov3": { file: "jb2a.toll_the_dead.green.bell", forma: "lanciatore" }, // Demon of Despair · Your Struggle is Pointless — Spend Fear
  "Actor.kE4dfhqmIQpNd44e.Item.dlMdfUjy2GaqgeOJ::urrp8SCFgqbmSTvm": { file: "jb2a.condition.curse.01.006.red", forma: "bersaglio" }, // Demon of Despair · Your Friends Will Fail You — Lose Hope
  "Actor.kE4dfhqmIQpNd44e.Item.7qjx1c4C1fUfvXnu::N0Xx6GnijLXIMGBw": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Demon of Despair · Momentum — Gain Fear
  "Actor.2VN3BftageoTTIzu::VL00HF273gGZzwK2": { file: "jb2a.spear.melee.01.white", forma: "bersaglio" }, // Demon of Hubris — Perfect Spear
  "Actor.2VN3BftageoTTIzu.Item.kgPZs8Vx1FpQi2g1::v3XbljQeHEyfuSXz": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Demon of Hubris · Terrifying — Lose Hope
  "Actor.2VN3BftageoTTIzu.Item.r5EvkhhvvfNv8wZe::nNfWqBgysVPtFh4w": { file: "jb2a.icosahedron.roll.blue", forma: "bersaglio" }, // Demon of Hubris · Double or Nothing — Mark Stress
  "Actor.2VN3BftageoTTIzu.Item.Y3W44ifKIcoYpONN::MYOD2VAfdVC6hMCs": { file: "jb2a.ranged_slash.instant.001.blue", forma: "proiettile" }, // Demon of Hubris · Unparalleled Skill — Mark Stress
  "Actor.2VN3BftageoTTIzu.Item.6BKWOTuxQWJd5RP5::ozGST8UY2MJnrd3w": { file: "jb2a.cast_generic.fire.01.orange", forma: "lanciatore" }, // Demon of Hubris · The Root of Villainy — Spotlight Demons
  "Actor.2VN3BftageoTTIzu.Item.FLp1dPSJz1ezY0gD::kuCPWb9cu3pZdAhh": { file: "jb2a.condition.curse.01.004.red", forma: "bersaglio" }, // Demon of Hubris · You Pale in Comparison — Mark Stress
  "Actor.SxSOkM4bcVOFyjbo::qc9VKppYpEZSDYi7": { file: "jb2a.eldritch_blast.purple", forma: "proiettile" }, // Demon of Jealousy — Psychic Assault
  "Actor.SxSOkM4bcVOFyjbo.Item.pSAupMWw1eYqm84z::UU3H5aPQejOSoFZw": { file: "jb2a.on_token_buff.001.001.purplered", forma: "lanciatore" }, // Demon of Jealousy · Rivalry — Mark Stress
  "Actor.SxSOkM4bcVOFyjbo.Item.589tCxFc8KZ3rdzP::3cGZ2CofM9HUlELH": { file: "jb2a.arcane_hand.purple", forma: "bersaglio" }, // Demon of Jealousy · What's Yours Is Mine — Roll Save
  "Actor.5lphJAgzoqZI3VoG::b4OdksCNCxN3HGPZ": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Demon of Wrath — Fists
  "Actor.5lphJAgzoqZI3VoG.Item.a33PW8UkziliowlR::jKvzbQT0vp66DDOH": { file: "jb2a.fire_ring.500px.red", forma: "lanciatore" }, // Demon of Wrath · Battle Lust — Spend Fear
  "Actor.5lphJAgzoqZI3VoG.Item.DjGydqLXT4rDa7Av::hxrdtBm4dYN7KGZm": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Demon of Wrath · Retalliation — Attack
  "Actor.5lphJAgzoqZI3VoG.Item.2F75BO0xEU8Zlj7T::szg3qA09aJUt9WKS": { file: "jb2a.icon.drop.red", forma: "lanciatore" }, // Demon of Wrath · Blood and Souls — Countdown
  "Actor.5lphJAgzoqZI3VoG.Item.2F75BO0xEU8Zlj7T::FlE6i0tbKEguF9wz": { file: "jb2a.impact.ground_crack.03.orange", forma: "lanciatore" }, // Demon of Wrath · Blood and Souls — Summon
  "Actor.tBWHW00epmMnkawe::Uph4RP3k261Y3Wu1": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Dire Bat — Claws and Teeth
  "Actor.tBWHW00epmMnkawe.Item.o69lipskvBwGVhe4::2ILfoiBoMyBCtBsL": { file: "jb2a.cast_generic.sound.01.pinkteal", forma: "lanciatore" }, // Dire Bat · Screech — Mark Stress
  "Actor.tBWHW00epmMnkawe.Item.BQPGgbNzKbNkGDJb::wW7WGisUBzyxjsH2": { file: "jb2a.bats.complete.01.red", forma: "bersaglio" }, // Dire Bat · Guardian — Mark Stress
  "Actor.VQjfu6GFyNlFSMgH::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Drake — Claws & Teeth
  "Actor.VQjfu6GFyNlFSMgH.Item.Bbr3ZrCKZVkOBA0G::VCqZXDcEJzs0vfLY": { file: "jb2a.shield.01.complete.01.blue", forma: "lanciatore" }, // Drake · Guard Dog — Mark Stress
  "Actor.wR7cFKrHvRzbzhBT::7nEa2i7BvvfO4O3l": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Dryad — Deadfall Shortbow
  "Actor.wR7cFKrHvRzbzhBT.Item.i9HbArl09dX2BvzY::iCJdIs57hfh5Cb0u": { file: "jb2a.entangle.02.complete.02.green", forma: "bersaglio" }, // Dryad · Bramble Patch — Mark Stress
  "Actor.wR7cFKrHvRzbzhBT.Item.i9HbArl09dX2BvzY::cpZ5c9d3opSA4BN9": { file: "jb2a.vine.complete.nature.single.01.green", forma: "bersaglio" }, // Dryad · Bramble Patch — Damage
  "Actor.wR7cFKrHvRzbzhBT.Item.yKWQLL3qsEZlQjyb::R84DdS0OIx2cUt1w": { file: "jb2a.plant_growth.03.round.2x2.complete.greenyellow", forma: "lanciatore" }, // Dryad · Grow Saplings — Spend Fear
  "Actor.wR7cFKrHvRzbzhBT.Item.z4JbqiHuxrWy6Cpu::SrhuW3mfOuqg1ys6": { file: "jb2a.aura_themed.01.inward.complete.nature.01.green", forma: "lanciatore" }, // Dryad · We Are All One — Spend Fear
  "Actor.ldbXoTbf1lnZzXjt::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.02.bone.01", forma: "bersaglio" }, // Dullahan — Spine Whip
  "Actor.ldbXoTbf1lnZzXjt.Item.BubX3LEWu7RkFj1x::DVi9tIKBYSYjnLRv": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Dullahan · Specter — Mark Stress
  "Actor.ldbXoTbf1lnZzXjt.Item.iQ4jwH7KU0BDLFqL::IREVgalskrlytiW4": { file: "jb2a.melee_attack.03.greatbone.01", forma: "bersaglio" }, // Dullahan · Bone Whip Strike — Mark Stress
  "Actor.ldbXoTbf1lnZzXjt.Item.7AqBPsOoK5KPCY2m::Xv9H64VnMd1bqNOl": { file: "jb2a.toll_the_dead.green.skull_smoke", forma: "bersaglio" }, // Dullahan · Death Glare — Spend Fear
  "Actor.ldbXoTbf1lnZzXjt.Item.7AqBPsOoK5KPCY2m::eqcmHs9mLhzxYPyG": { file: "jb2a.icon.skull.purple", forma: "auto" }, // Dullahan · Death Glare — Start Countdown
  "Actor.P7h54ZePFPHpYwvB::Sgjlao4AiadujfLF": { file: "jb2a.fire_bolt.orange", forma: "proiettile" }, // Elemental Spark — Bursts of Fire
  "Actor.P7h54ZePFPHpYwvB.Item.13OraSLq2YjpZqbm::S3dYxRclyhYINRi8": { file: "jb2a.fire_bolt.orange", forma: "proiettile" }, // Elemental Spark · Group Attack — Spend Fear
  "Actor.q3BOz4DSAIAvvJGK::qHEFFbkvLvbm9VmI": { file: "jb2a.energy_strands.range.standard.purple.04", forma: "proiettile" }, // Fellmounted Shadow King — Cursed Lance
  "Actor.q3BOz4DSAIAvvJGK.Item.c5tmMQ8XqlbWxg1E::FVfVrQa9IcADzRIN": { file: "jb2a.toll_the_dead.green.complete", forma: "lanciatore" }, // Fellmounted Shadow King · Hellsong — Spend Fear
  "Actor.q3BOz4DSAIAvvJGK.Item.I8yfiFN4YPX03wtX::WMA7N0kjuno2Qwp5": { file: "jb2a.bardic_inspiration.greenorange", forma: "bersaglio" }, // Fellmounted Shadow King · Air Support — Spend Fear
  "Actor.borKEokmyZ8gOkK3::qHEFFbkvLvbm9VmI": { file: "jb2a.greatsword.melee.standard.white", forma: "bersaglio" }, // Fire Titan — Greatsword
  "Actor.borKEokmyZ8gOkK3.Item.YUMQEamNAhygXnBu::OF01PgCtbYidpp9i": { file: "jb2a.extras.tmfx.runes.circle.simple.abjuration", forma: "lanciatore" }, // Fire Titan · Masterwork Armor — Start Countdown
  "Actor.borKEokmyZ8gOkK3.Item.YUMQEamNAhygXnBu::wjxg7DKqkTMMZQG6": { file: "jb2a.shield.01.outro_explode.blue", forma: "lanciatore" }, // Fire Titan · Masterwork Armor — Trigger Countdown
  "Actor.borKEokmyZ8gOkK3.Item.JtCBTVjwPIpVg5dO::gnx8dPKyobSiokfc": { file: "jb2a.boulder.toss.02.01.stone.brown", forma: "proiettile" }, // Fire Titan · Hurl Rock — Mark Stress
  "Actor.borKEokmyZ8gOkK3.Item.JU15za0bgkRuliRN::beZFL9AvGqIQ7oSo": { file: "jb2a.extras.tmfx.inpulse.circle.01.normal", forma: "lanciatore" }, // Fire Titan · Skull Splitter — Mark Stress
  "Actor.borKEokmyZ8gOkK3.Item.JU15za0bgkRuliRN::Fy3CLnChxJEjGNoK": { file: "jb2a.melee_attack.03.greatsword.01", forma: "bersaglio" }, // Fire Titan · Skull Splitter — 
  "Actor.borKEokmyZ8gOkK3.Item.HtRxbtqEC5NhueTi::C0ZOi3wElD7zOGfx": { file: "jb2a.flames.04.complete.orange", forma: "lanciatore" }, // Fire Titan · Blazing Heart — Heal
  "Actor.qdmY1ZJcnAaVvJQD::qHEFFbkvLvbm9VmI": { file: "jb2a.handaxe.melee.standard.white", forma: "bersaglio" }, // Frost Titan — Dual Axes
  "Actor.qdmY1ZJcnAaVvJQD.Item.UhGyp4zqdXYhXeQj::1AiT9G5RFyuMtfBu": { file: "jb2a.cast_generic.sound.01.pinkteal", forma: "lanciatore" }, // Frost Titan · War Horn — Mark Stress
  "Actor.qdmY1ZJcnAaVvJQD.Item.lxMzWFQOIpidX094::XfNzlNYwGNaIIdcg": { file: "jb2a.side_impact.part.shockwave.blue", forma: "bersaglio" }, // Frost Titan · Bull Rush — Mark Stress
  "Actor.qdmY1ZJcnAaVvJQD.Item.bpPjEZDSWM7hE6mt::Ox1aV96UwKOoTdtx": { file: "jb2a.melee_attack.02.battleaxe.01", forma: "bersaglio" }, // Frost Titan · Cleaving Strike — Mark Stress
  "Actor.mXXYdmgqAKKZD4tB::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Gargantuan Sea Turtle — Crushing Jaws
  "Actor.mXXYdmgqAKKZD4tB.Item.afz1zt0dMBQwanI0::bDZaQx5yi8byoosk": { file: "jb2a.melee_attack.03.greatclub.01", forma: "bersaglio" }, // Gargantuan Sea Turtle · Tail Bash — Mark Stress
  "Actor.mXXYdmgqAKKZD4tB.Item.3X0uVX5xsTcrpQ16::XYestHAfE51JMpnb": { file: "jb2a.water_splash.circle.01.blue", forma: "lanciatore" }, // Gargantuan Sea Turtle · Gigaton Splash — Spend Fear
  "Actor.mXXYdmgqAKKZD4tB.Item.XCVuJ4tJP152M5Pr::mBNpexpcn9Qko1N8": { file: "jb2a.fumes.steam.white", forma: "bersaglio" }, // Gargantuan Sea Turtle · Steam Breath — Spend Fear
  "Actor.dsfB3YhoL5SudvS2::xfatSI059TpQUpTC": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Greater Earth Elemental — Boulder Fist
  "Actor.dsfB3YhoL5SudvS2.Item.NnCkXIuATO0s3tSR::0sXciTiPc30v8czv": { file: "jb2a.markers.shield_cracked.purple.01", forma: "bersaglio" }, // Greater Earth Elemental · Crushing Blows — Damage Armor
  "Actor.dsfB3YhoL5SudvS2.Item.q45DiEFlXqcXZ5hv::eLGIC3kVjLo8FEvy": { file: "jb2a.falling_rocks.top.2x1.grey", forma: "bersaglio" }, // Greater Earth Elemental · Rockslide — Roll Save
  "Actor.dsfB3YhoL5SudvS2.Item.ag7t5EW358M0qiSL::FPIpslusIeVQGdnb": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Greater Earth Elemental · Momentum — Gain Fear
  "Actor.xIICT6tEdnA7dKDV::AWwrET5oomLGPoYs": { file: "jb2a.liquid.splash.blue", forma: "bersaglio" }, // Greater Water Elemental — Crashing Wave
  "Actor.xIICT6tEdnA7dKDV.Item.B8ZrtRCZrwwwWJOE::Gk5tcqshtwP4JsKS": { file: "jb2a.liquid.splash_side.blue", forma: "bersaglio" }, // Greater Water Elemental · Water Jet — Attack
  "Actor.xIICT6tEdnA7dKDV.Item.bcwFQeuU6ZfIGjau::ooYbiLrYjoWXIfe9": { file: "jb2a.bubble.001.001.complete.blue", forma: "bersaglio" }, // Greater Water Elemental · Drowning Embrace — Attack
  "Actor.xIICT6tEdnA7dKDV.Item.BGE42W1XPd0vpimR::MXSyEGbaHeFgyOsB": { file: "jb2a.impact.water.02.blue", forma: "bersaglio" }, // Greater Water Elemental · High Tide — Mark Stress
  "Actor.i2UNbRvgyoSs07M6::C17WZd87y7V9cgnh": { file: "jb2a.rapier.melee.01.white", forma: "bersaglio" }, // Head Vampire — Rapier
  "Actor.i2UNbRvgyoSs07M6.Item.c30Cc5mofs2arb9j::Rf2ZL3EjCzudonRb": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Head Vampire · Terrifying — Lose Hope
  "Actor.i2UNbRvgyoSs07M6.Item.1RfqKn7gYbWbSl0A::lOgkZTR1hybc6bnJ": { file: "jb2a.magic_signs.rune.enchantment.complete.pink", forma: "bersaglio" }, // Head Vampire · Look into My Eyes — Roll Save
  "Actor.i2UNbRvgyoSs07M6.Item.Oj6qkLG1N6uqQHcx::tM6TBTtmCXTnIzen": { file: "jb2a.energy_strands.in.green.01", forma: "lanciatore" }, // Head Vampire · Feed on Followers — Clear HP
  "Actor.i2UNbRvgyoSs07M6.Item.IWtpuQCuV82lOSry::jGFOnU6PNdWU6iF4": { file: "jb2a.bats.complete.01.red", forma: "lanciatore" }, // Head Vampire · The Hunt Is On — Spend Fear
  "Actor.i2UNbRvgyoSs07M6.Item.6FsQf339qGHnz3ZF::DA8qT2omBcG4oryX": { file: "jb2a.template_circle.symbol.normal.drop.red", forma: "lanciatore" }, // Head Vampire · Lifesuck — Roll d8
  "Actor.6hbqmxDXFOzZJDk4::BRzoNN6p8vW3De22": { file: "jb2a.sneak_attack.dark_green", forma: "bersaglio" }, // Huge Green Ooze — Ooze Appendage
  "Actor.6hbqmxDXFOzZJDk4.Item.BQsVuuwFYByKwesR::gtT2oHSyZg9OHHJD": { file: "jb2a.markers.shield_cracked.purple.01", forma: "bersaglio" }, // Huge Green Ooze · Acidic Form — Damage Armor
  "Actor.6hbqmxDXFOzZJDk4.Item.pfXYuH7rtsyVjSXh::hQBYPagz5yuTcCQq": { file: "jb2a.template_circle.smoke.001.complete.400px.001.greenpurple", forma: "bersaglio" }, // Huge Green Ooze · Envelop — Attack
  "Actor.6hbqmxDXFOzZJDk4.Item.Mq90kFBM5ix2pzzh::aeRdkiRsDNagTKhp": { file: "jb2a.particles.outward.greenyellow.01.03", forma: "lanciatore" }, // Huge Green Ooze · Split — Spend Fear
  "Actor.MI126iMOOobQ1Obn::diNJAbg19O77pivi": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Hydra — Bite
  "Actor.MI126iMOOobQ1Obn.Item.b2KflqWoOxHMQf97::SsRtZwee1mYlPLUy": { file: "jb2a.healing_generic.400px.green", forma: "lanciatore" }, // Hydra · Regeneration — Spend Fear
  "Actor.MI126iMOOobQ1Obn.Item.bCeCu8M25izOAsuY::nJxpFR4Ul0e2RrL4": { file: "jb2a.soundwave.01.blue", forma: "lanciatore" }, // Hydra · Terrifying Chorus — Lose Hope
  "Actor.MI126iMOOobQ1Obn.Item.sJzjcRBgYRp5f53E::heAkvOuQG1EJmVbb": { file: "jb2a.dizzy_stars.400px.blueorange", forma: "lanciatore" }, // Hydra · Magical Weakness — Become Dazed
  "Actor.pMZxHeu79iXFV9FR::qHEFFbkvLvbm9VmI": { file: "jb2a.dagger.melee.02.white", forma: "bersaglio" }, // Lamia — Curved Dagger
  "Actor.pMZxHeu79iXFV9FR.Item.bkNqFMvqT2qnOH9E::nqAx27AlDh9W8WYb": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Lamia · Constriction — Mark Stress
  "Actor.pMZxHeu79iXFV9FR.Item.NC3gWjQQFXqjCYrg::cBfwk5Lx3DR9QQy4": { file: "jb2a.markers.drop.red.01", forma: "bersaglio" }, // Lamia · Life Leech — Mark Stress
  "Actor.pMZxHeu79iXFV9FR.Item.PPji2Wiib7ixf30i::JXxrnAay8HGY335Q": { file: "jb2a.sleep.target.pink", forma: "bersaglio" }, // Lamia · Sleep Toxin — Spend Fear
  "Actor.Z94eIkkO3msHVU0R::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Lamplight Beguiler — Jaws
  "Actor.Z94eIkkO3msHVU0R.Item.rD4dK5rbkMggavMU::KvbWcXVmbbGj6ME2": { file: "jb2a.magic_signs.rune.illusion.complete.purple", forma: "lanciatore" }, // Lamplight Beguiler · Doppel-Dangler — Mark Stress
  "Actor.Z94eIkkO3msHVU0R.Item.nbzoUABWDwUdGkFE::3XHBN6VTG5ETbRRR": { file: "jb2a.markers.heart.pink.01", forma: "bersaglio" }, // Lamplight Beguiler · Entice — Spend Fear
  "Actor.Z94eIkkO3msHVU0R.Item.XDqv8pIUqp8LW0Sh::xyGKaGaFeYT1cmrv": { file: "jb2a.bite.200px.red", forma: "bersaglio" }, // Lamplight Beguiler · Gulp — Spend Fear
  "Actor.OoxQXYk6UDb5MNhx::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Manticore — Teeth & Claws
  "Actor.OoxQXYk6UDb5MNhx.Item.DtEHBkdcv6z3q7x9::t0YogyFQJ8maJEwl": { file: "jb2a.melee_generic.creature_attack.claw.001.red", forma: "bersaglio" }, // Manticore · Pouncing Attack — Spend Fear
  "Actor.OoxQXYk6UDb5MNhx.Item.JkAUCfodIaav6mp2::kzSuA1mEMpAuBpov": { file: "jb2a.arrow.poison.green.01", forma: "proiettile" }, // Manticore · Paralyzing Tail Spike — Mark Stress
  "Actor.OoxQXYk6UDb5MNhx.Item.jKieOD0PkBx38aQS::9qiwXs1p9YzIf5h0": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Manticore · Locking Jaws — Mark Stress
  "Actor.yx0vK2yfNVZKWUUi::AMeSByCnd9s24HtT": { file: "jb2a.hammer.melee.01.white", forma: "bersaglio" }, // Monarch — Warhammer
  "Actor.yx0vK2yfNVZKWUUi.Item.9K7C1PR4Q6QrUjjb::OJyqqCi0npye34y2": { file: "jb2a.magic_signs.circle.02.conjuration.complete.yellow", forma: "lanciatore" }, // Monarch · Crownsguard — Mark Stress
  "Actor.yx0vK2yfNVZKWUUi.Item.kA5NZTdiknsh7wxp::CNEOOdPI4xVJ2JeP": { file: "jb2a.markers.runes02.dark_orange.01", forma: "lanciatore" }, // Monarch · Casus Belli — Start Countdown
  "Actor.yx0vK2yfNVZKWUUi.Item.kA5NZTdiknsh7wxp::QnZoH9LjJvKl5YcF": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Monarch · Casus Belli — Gain Fear
  "Actor.woVws0rcFaedtW3g::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Night Children — Fangs & Claws
  "Actor.woVws0rcFaedtW3g.Item.SAbm4NER4YEtrGTG::ZUaxRXLMVpdgMmnu": { file: "jb2a.portals.vertical.ring.bright_yellow", forma: "lanciatore" }, // Night Children · Swell Ranks — Mark Stress
  "Actor.woVws0rcFaedtW3g.Item.eXVZweQ7AoZgWMbG::seZgS1at07DWvXe5": { file: "jb2a.claws.200px.red", forma: "bersaglio" }, // Night Children · Overwhelm — Mark Stress
  "Actor.XK78QUfY8c8Go8Uv::G9te257qckQlLt4E": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Oak Treant — Branch
  "Actor.XK78QUfY8c8Go8Uv.Item.Q2slH9qkBO5SPw43::cM5BBUSFxOHBsV2G": { file: "jb2a.swirling_leaves.ranged.greenorange", forma: "proiettile" }, // Oak Treant · Seed Barrage — Mark Stress
  "Actor.XK78QUfY8c8Go8Uv.Item.sqkgw26P2KiQVtXT::008EelRlcs6CKGvM": { file: "jb2a.entangle.02.complete.02.green", forma: "lanciatore" }, // Oak Treant · Take Root — Mark Stress
  "Actor.RKdp5SOjwx1CHtaZ::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.01.sickle.01", forma: "bersaglio" }, // Pain Priest — Torture Implements
  "Actor.RKdp5SOjwx1CHtaZ.Item.3OcaZ6mn5hJSqb4g::KDHanmfdvmbKciyT": { file: "jb2a.misty_step.02.blue", forma: "lanciatore" }, // Pain Priest · Walk Between Worlds — Mark Stress
  "Actor.RKdp5SOjwx1CHtaZ.Item.8Jbhoixqt3Bw1i2H::rkWDWLYON59jcdkw": { file: "jb2a.template_circle.vortex.intro.blue", forma: "lanciatore" }, // Pain Priest · Pleasure and Pain — Portal Flight
  "Actor.RKdp5SOjwx1CHtaZ.Item.8Jbhoixqt3Bw1i2H::x8HNi7N3q3JtKkTu": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Pain Priest · Pleasure and Pain — Gain Fear
  "Actor.OmhCH4TmAEiQx9he::qHEFFbkvLvbm9VmI": { file: "jb2a.fire_bolt.orange", forma: "proiettile" }, // Phoenix — Fire Bolt
  "Actor.OmhCH4TmAEiQx9he.Item.FlcR2XWYcCedfLnM::s1fquzRZAhLqY7VW": { file: "jb2a.eruption.orange.01", forma: "lanciatore" }, // Phoenix · Fireseed — 
  "Actor.OmhCH4TmAEiQx9he.Item.L1KzwZQAUDJzEFv0::rUiwxAYImXPoh2rG": { file: "jb2a.smoke.plumes.01.grey", forma: "lanciatore" }, // Phoenix · Resurrection — 
  "Actor.KUevwJakVF7byrgT::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Plesiosaurus — Bite
  "Actor.KUevwJakVF7byrgT.Item.iGIVBeuyJDKftzrs::e7TW0t39q43UTebY": { file: "jb2a.water_splash.cone.01.blue", forma: "lanciatore" }, // Plesiosaurus · Wall of Water — Mark Stress
  "Actor.c0ivcxYHIW2t1cXV::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Roc — Beak & Talons
  "Actor.c0ivcxYHIW2t1cXV.Item.JHpHvFvrJGI2Kwe1::Gpe0jznvJvDjA5YP": { file: "jb2a.lightning_strike.blue", forma: "bersaglio" }, // Roc · Here Comes the Boom — Spend Fear
  "Actor.c0ivcxYHIW2t1cXV.Item.JHpHvFvrJGI2Kwe1::glnoG8JVxdGxNoyJ": { file: "jb2a.soundwave.02.blue", forma: "lanciatore" }, // Roc · Here Comes the Boom — Reaction Roll
  "Actor.c0ivcxYHIW2t1cXV.Item.uYDndZAjve1MmeIh::VaFBiCepU95VcjGr": { file: "jb2a.melee_generic.creature_attack.claw.002.red", forma: "bersaglio" }, // Roc · Crushing Grasp — Mark Stress
  "Actor.c0ivcxYHIW2t1cXV.Item.nrUpskylAzI4yuyF::6BZzx8hgXBfPW7Sm": { file: "jb2a.static_electricity.02.blue", forma: "lanciatore" }, // Roc · Nest Warden — 
  "Actor.c0ivcxYHIW2t1cXV.Item.BWJJE4K7vnmEYyE5::NxwYBzXc90fO0RH7": { file: "jb2a.static_electricity.01.blue", forma: "lanciatore" }, // Roc · Electrifying Aura — 
  "Actor.GGljGjIJzx1WKLfD::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Sandwyrm — Bite
  "Actor.GGljGjIJzx1WKLfD.Item.LaD80Lyc7hjdTwjJ::ko7m9UWK9x2tGukQ": { file: "jb2a.arrow.poison.green.01", forma: "proiettile" }, // Sandwyrm · Venomous Tail Stinger — Mark Stress
  "Actor.GGljGjIJzx1WKLfD.Item.3p7DukovYy3xgCHW::WkI98OCySFGnZ3BJ": { file: "jb2a.bite.200px.red", forma: "bersaglio" }, // Sandwyrm · Devour — 
  "Actor.GGljGjIJzx1WKLfD.Item.mU73FWlSsvOOlvHk::TV6xcppk58x4d5Ty": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Sandwyrm · Hungry, Not Stupid — Flee Check
  "Actor.C652lQ56oZWBhdNz::qHEFFbkvLvbm9VmI": { file: "jb2a.shortsword.melee.01.white", forma: "bersaglio" }, // Shapeshifting Fiend — Hidden Blade
  "Actor.C652lQ56oZWBhdNz.Item.VrUFHMjVrWUc2JHd::0YbIsQx48hQrJM5o": { file: "jb2a.magic_signs.circle.02.illusion.complete.purple", forma: "lanciatore" }, // Shapeshifting Fiend · Impersonate — Spend Fear
  "Actor.C652lQ56oZWBhdNz.Item.VrUFHMjVrWUc2JHd::laPYDHfBKv4hKPpe": { file: "jb2a.markers.stun.purple.01", forma: "bersaglio" }, // Shapeshifting Fiend · Impersonate — Reaction Roll
  "Actor.C652lQ56oZWBhdNz.Item.MIvcup4AWUoqBMKq::dkMGDDE2ytkcF1qh": { file: "jb2a.shimmer.01.blue", forma: "lanciatore" }, // Shapeshifting Fiend · Turn Invisible — Mark Stress
  "Actor.C652lQ56oZWBhdNz.Item.DH3qyIQPoi3soxdU::YDNJMyOJX70CtcuJ": { file: "jb2a.markers.horror.purple.01", forma: "bersaglio" }, // Shapeshifting Fiend · Backhanded Guidance — Mark Stress
  "Actor.C652lQ56oZWBhdNz.Item.KejigtjcSGCBpGh3::MymVTgMNkwdkt2Ja": { file: "jb2a.magic_signs.circle.02.evocation.complete.dark_red", forma: "lanciatore" }, // Shapeshifting Fiend · Exposed! (Phase Change) — undefined
  "Actor.fa50qKab3hPt9gkV::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Shapeshifting Fiend Revealed — Mantis Claws
  "Actor.fa50qKab3hPt9gkV.Item.jQib1ToeFylSCIOj::jkPWsDVDdIRd0B78": { file: "jb2a.melee_attack.04.trail.01.orangered", forma: "bersaglio" }, // Shapeshifting Fiend Revealed · Demonic Rage — Spend Fear
  "Actor.fa50qKab3hPt9gkV.Item.vavYse3YdfnpjxaD::0We0RCwivLWIQ3OA": { file: "jb2a.template_circle.aura.04.outward.001.complete.combined.refraction", forma: "lanciatore" }, // Shapeshifting Fiend Revealed · Hall of Mirrors — Start Countdown
  "Actor.fa50qKab3hPt9gkV.Item.vavYse3YdfnpjxaD::WrFrqYo1ggWNCsa2": { file: "jb2a.condition.boon.02.001.refraction", forma: "lanciatore" }, // Shapeshifting Fiend Revealed · Hall of Mirrors — Duplicate Effect
  "Actor.fa50qKab3hPt9gkV.Item.HgYCE5gF4IbxD2ue::3ncWZTw5mfqhLF1L": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Shapeshifting Fiend Revealed · Flash Claw — Spend Fear
  "Actor.fa50qKab3hPt9gkV.Item.VoacJyH0xZfyolpc::mDk0vZGbOC7hx2rf": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Shapeshifting Fiend Revealed · Mind Games — Mark Stress
  "Actor.KGVwnLq85ywP9xvB::2pYQzY7YXhdyZLVg": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Stag Knight — Bramble Sword
  "Actor.KGVwnLq85ywP9xvB.Item.3Na2mDfKFB5Hqbqu::PZNJgyomR7MK2xUP": { file: "jb2a.impact.ground_crack.01.orange", forma: "bersaglio" }, // Stag Knight · From Above — Damage
  "Actor.KGVwnLq85ywP9xvB.Item.CYaSykD9BUxpiOxg::xPSVwVVOC5gc2KTi": { file: "jb2a.swirling_leaves.complete.01.green", forma: "lanciatore" }, // Stag Knight · Blade of the Forest — Attack
  "Actor.KGVwnLq85ywP9xvB.Item.1LHHdn4ToSwSznuP::b5KO7xpWspZS0swK": { file: "jb2a.vine.complete.nature.single.01.green", forma: "bersaglio" }, // Stag Knight · Thorny Armor — Damage
  "Actor.tLHNONmalytgnngv::qHEFFbkvLvbm9VmI": { file: "jb2a.chain_lightning.primary.blue", forma: "proiettile" }, // Storm Titan — Lightning Bolt
  "Actor.tLHNONmalytgnngv.Item.1GB6i2sPEdjhf4SE::0ygDf9v05hVcLnyu": { file: "jb2a.lightning_ball.blue", forma: "lanciatore" }, // Storm Titan · Ball Lightning — Spend Fear
  "Actor.tLHNONmalytgnngv.Item.1GB6i2sPEdjhf4SE::WoUKdIPiaC8jJZAB": { file: "jb2a.static_electricity.03.blue", forma: "bersaglio" }, // Storm Titan · Ball Lightning — 
  "Actor.tLHNONmalytgnngv.Item.eAHzRE18UJknHhzj::oRvHmC1znZF2SbzK": { file: "jb2a.call_lightning.high_res.blue", forma: "lanciatore" }, // Storm Titan · Storm Bringer — Mark Stress
  "Actor.tLHNONmalytgnngv.Item.wYagPWvyGOrwkc4s::kUZI7iNvCW5YR51i": { file: "jb2a.thunderwave.center.blue", forma: "bersaglio" }, // Storm Titan · Thunderclap — Spend Fear
  "Actor.o63nS0k3wHu6EgKP::4cNG1tagbU1s1HoY": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Treant Sapling — Branches
  "Actor.o63nS0k3wHu6EgKP.Item.fh8ehANkVOnxEKVa::Itubbr63irPJcbXG": { file: "jb2a.club.melee.01.white", forma: "bersaglio" }, // Treant Sapling · Group Attack — Spend Fear
  "Actor.GwEwP2FnWOT6ONZw::qHEFFbkvLvbm9VmI": { file: "jb2a.unarmed_strike.magical.02.blue", forma: "bersaglio" }, // Unicorn — Hoof & Horn
  "Actor.GwEwP2FnWOT6ONZw.Item.gMTKOvA2dNM5OAqG::oZlQsrEu9UOpXiLd": { file: "jb2a.cure_wounds.400px.blue", forma: "bersaglio" }, // Unicorn · Healing Touch — Mark Stress
  "Actor.GwEwP2FnWOT6ONZw.Item.Tzwuda3jxU2ueezY::Yl897q9AAa6EjqW7": { file: "jb2a.template_circle.aura.02.complete.small.bluepink", forma: "lanciatore" }, // Unicorn · Protective Aura — Mark Stress
  "Actor.GwEwP2FnWOT6ONZw.Item.IUcJ08ZA1Jb5QEGS::dRxQIedYwFddDdgo": { file: "jb2a.teleport.01.blue", forma: "lanciatore" }, // Unicorn · Teleport — Mark Stress
  "Actor.WWyUp6Mxl1S3KYUG::dvZkbZm6rjnCz2oZ": { file: "jb2a.rapier.melee.01.white", forma: "bersaglio" }, // Vampire — Rapier
  "Actor.WWyUp6Mxl1S3KYUG.Item.X0VgwJbK2n3mez0p::GxJ7oxrrFp7VsybV": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Vampire · Draining Bite — Attack
  "Actor.WWyUp6Mxl1S3KYUG.Item.DKVB4rbX2M1CCVM7::TDu6DplfPluwInhi": { file: "jb2a.ambient_fog.001.complete.small.white", forma: "lanciatore" }, // Vampire · Mistform — Spend Fear
  "Actor.2OjMAjcG3xbbsrIV::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Vampire Bat Swarm — Fangs
  "Actor.2OjMAjcG3xbbsrIV.Item.6nqgFiYulnF4LVKd::bFiiwNOBq8vgmIEI": { file: "jb2a.bats.complete.01.red", forma: "lanciatore" }, // Vampire Bat Swarm · Blinding Multitude — Activate
  "Actor.2OjMAjcG3xbbsrIV.Item.BkTf2P6CnWO7dr8d::Dxd22ejF9dZFSeAH": { file: "jb2a.markers.drop.red.01", forma: "bersaglio" }, // Vampire Bat Swarm · Bloodsuckers — Mark Stress
  "Actor.TVnr955huZCjXrHM::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Vampire Lord — Claws
  "Actor.TVnr955huZCjXrHM.Item.tbA1nP2Q8TPBWpQx::BUtoPUXMBzrKq1cJ": { file: "jb2a.markers.skull.purple.01", forma: "lanciatore" }, // Vampire Lord · Midnight Heart — Start Countdown
  "Actor.TVnr955huZCjXrHM.Item.5tLyDZrBxAVoz5Oi::LALCxc1Z3Vr5etcs": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Vampire Lord · Terrifying — 
  "Actor.TVnr955huZCjXrHM.Item.TUfESlsSadioy0Li::9pg09MxKckmvng6m": { file: "jb2a.fireball.explosion.orange", forma: "bersaglio" }, // Vampire Lord · Unleash Hellfire — Mark Stress
  "Actor.TVnr955huZCjXrHM.Item.PS6orMs3tvLUESN4::rsP15swwnywctUzx": { file: "jb2a.healing_generic.400px.purple", forma: "lanciatore" }, // Vampire Lord · Resurgence — Clear HP
  "Actor.TVnr955huZCjXrHM.Item.PS6orMs3tvLUESN4::l8fbHSdA5SasWwG8": { file: "jb2a.healing_generic.400px.purple", forma: "lanciatore" }, // Vampire Lord · Resurgence — Clear Stress
  "Actor.TVnr955huZCjXrHM.Item.SScolSUknYbi799B::wusZUfYm4mWaf21H": { file: "jb2a.darkness.black", forma: "lanciatore" }, // Vampire Lord · Melt into Shadow — Spend Fear
  "Actor.TVnr955huZCjXrHM.Item.UoKJYOQmLttCqn1v::wslydtWU8ADqeXWo": { file: "jb2a.fire_ring.500px.red", forma: "lanciatore" }, // Vampire Lord · Hellwing — Evolve
  "Actor.TVnr955huZCjXrHM.Item.EP1UikpG7sEXdcv1::7gk8icaFQhfat78F": { file: "jb2a.liquid.splash02.red", forma: "lanciatore" }, // Vampire Lord · Blood Bath — Initial Damage
  "Actor.TVnr955huZCjXrHM.Item.EP1UikpG7sEXdcv1::1LnUFjdkPBxd0l5e": { file: "jb2a.liquid.splash_side02.red", forma: "bersaglio" }, // Vampire Lord · Blood Bath — Continual Damage
  "Actor.JqYraOqNmmhHk4Yy::A9oZ5hBXTsb1pxbf": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Vault Guardian Gaoler — Body Bash
  "Actor.JqYraOqNmmhHk4Yy.Item.VlHp8RjHy7MK8rqC::NawX2Kuk4GXI5loW": { file: "jb2a.markers.chain.spectral_standard.complete.02.blue", forma: "bersaglio" }, // Vault Guardian Gaoler · Lock Up — Attack
  "Actor.FVgYb28fhxlVcGwA::2MCPtYQKvh1occeh": { file: "jb2a.mace.melee.01.white", forma: "bersaglio" }, // Vault Guardian Sentinel — Charged Mace
  "Actor.FVgYb28fhxlVcGwA.Item.DLspoIclNJcTB3YJ::4RQnBu4kcUs3PcPH": { file: "jb2a.hunters_mark.pulse.01.green", forma: "bersaglio" }, // Vault Guardian Sentinel · Box In — Mark
  "Actor.FVgYb28fhxlVcGwA.Item.LVFZ4AfVhS6Q9hRy::mI9i9iwrM48NjzeE": { file: "jb2a.explosion.02.blue", forma: "bersaglio" }, // Vault Guardian Sentinel · Mana Bolt — Roll Save
  "Actor.FVgYb28fhxlVcGwA.Item.N4446BxubUanUQHH::AtXg38fItOgiYUee": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Vault Guardian Sentinel · Momentum — Gain Fear
  "Actor.c5hGdvY5UnSjlHws::Qs0B0fxz56A4oWLU": { file: "jb2a.lasershot.blue", forma: "proiettile" }, // Vault Guardian Turret — Magitech Cannon
  "Actor.c5hGdvY5UnSjlHws.Item.uwAr6wR4k7ppI2cW::1SfYAIIr5znuHCKX": { file: "jb2a.hunters_mark.pulse.01.green", forma: "bersaglio" }, // Vault Guardian Turret · Mark Target — Spend Fear
  "Actor.c5hGdvY5UnSjlHws.Item.G7qZ9RHPyNns3axX::3cqPKBRtwxtLwDpN": { file: "jb2a.markers.simple.001.complete.001.red", forma: "bersaglio" }, // Vault Guardian Turret · Concentrate Fire — Mark Stress
  "Actor.c5hGdvY5UnSjlHws.Item.ALDtQci3ktq9cajU::i1PZ9ddYdOOs2xSb": { file: "jb2a.explosion.08.orange", forma: "lanciatore" }, // Vault Guardian Turret · Detonation — Roll Save
  "Actor.IQzeEU2nWWlBhBrX::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Viscera Sucker — Long Nails
  "Actor.IQzeEU2nWWlBhBrX.Item.JvUiFinQ8enXA8Pu::k9a7IFMGF4VvOuXr": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Viscera Sucker · Entangling Entrails — Spend Fear
  "Actor.IQzeEU2nWWlBhBrX.Item.KllqAajty0xJ3wGK::sy9Z02tpK4cPCrQ2": { file: "jb2a.markers.drop.red.01", forma: "bersaglio" }, // Viscera Sucker · Lifesuck — Mark Stress
  "Actor.iT3pDkKEtPTqM8kw::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.02.trail.01.pinkpurple", forma: "bersaglio" }, // Whisper Wraith — Shadow Touch
  "Actor.iT3pDkKEtPTqM8kw.Item.KUEN8QB4OPx654Uv::LhUozslUeT46KVKn": { file: "jb2a.template_circle.symbol.normal.horror.purple", forma: "lanciatore" }, // Whisper Wraith · Spooky — 
  "Actor.iT3pDkKEtPTqM8kw.Item.xv9RMHx3YZpoLg28::rIj9Yr0Z6kQ4sHZR": { file: "jb2a.markers.horror.purple.01", forma: "bersaglio" }, // Whisper Wraith · Nightmare Shroud — Spend Fear
  "Actor.h5SPwKivPFqMgOrW::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Wyvern — Teeth & Claws
  "Actor.h5SPwKivPFqMgOrW.Item.6FmuJDEwZ1Yq6Krt::FEcYj312fU0AFZ7G": { file: "jb2a.claws.200px.red", forma: "bersaglio" }, // Wyvern · Double Strike — Mark Stress
  "Actor.h5SPwKivPFqMgOrW.Item.3yZ5cnA8C3zknz1A::eF4xOnEEnpVQZIQu": { file: "jb2a.soundwave.01.blue", forma: "lanciatore" }, // Wyvern · Terrifying Shriek — Spend Fear
  "Actor.h5SPwKivPFqMgOrW.Item.ERw6SnOIhJA2wWdH::Cl5dsNGTOVsU7d5F": { file: "jb2a.melee_generic.creature_attack.claw.001.red", forma: "bersaglio" }, // Wyvern · Clutch — Spend Fear
  "Actor.qe2bhZCyVou4lTO5::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Young Fire Dragon — Bite & Claws
  "Actor.UGPiPLJsPvMTSKEF::lxXAo7dnBRVu6AwZ": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Young Ice Dragon — Bite and Claws
  "Actor.UGPiPLJsPvMTSKEF.Item.lsHoXHZ452axhyEr::cmZsrUJa9FJ8gZKP": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Young Ice Dragon · Relentless (3) — Spotlight: Relentless
  "Actor.UGPiPLJsPvMTSKEF.Item.UHptE40G4tLBvKTN::dHoMdLfAl6UKjXRP": { file: "jb2a.impact.010.orange", forma: "bersaglio" }, // Young Ice Dragon · Rend and Crush — Mark Stress
  "Actor.UGPiPLJsPvMTSKEF.Item.QV2ytK4b1VWF71OS::CBecTlgyUBFxgoi5": { file: "jb2a.template_line.ice.01.blue", forma: "proiettile" }, // Young Ice Dragon · Blizzard Breath — Roll Save
  "Actor.UGPiPLJsPvMTSKEF.Item.CcRTxCDCJskiu3fI::G9LjoXShkCcgx8EC": { file: "jb2a.falling_rocks.top.1x1.grey", forma: "bersaglio" }, // Young Ice Dragon · Avalanche — Attack
  "Actor.UGPiPLJsPvMTSKEF.Item.nXZHOfcYvjg3YMNU::QZMpj1qEWI6Er7q2": { file: "jb2a.impact.frost.white.01", forma: "bersaglio" }, // Young Ice Dragon · Frozen Scales — Damage
  "Actor.UGPiPLJsPvMTSKEF.Item.QHdJgT2fvwqquyf7::5V5SDnUBg9dQOkLW": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Young Ice Dragon · Momentum — Gain Fear

  // tier 4
  "Actor.WPEOIGfclNJxWb87::wYxkcGnDMo2k9L8R": { file: "jb2a.eldritch_blast.purple", forma: "proiettile" }, // Arch-Necromancer — Necrotic Blast
  "Actor.WPEOIGfclNJxWb87.Item.jNmMyq5QI2HNgffy::wi2DDvBhlg6sxQoc": { file: "jb2a.toll_the_dead.green.shockwave", forma: "lanciatore" }, // Arch-Necromancer · Dance Of Death — Spotlight Allies
  "Actor.WPEOIGfclNJxWb87.Item.4EECsXzHFG0RoIg0::vaXLESD4sRkQ3Ahn": { file: "jb2a.disintegrate.green", forma: "proiettile" }, // Arch-Necromancer · Beam Of Decay — Roll Save
  "Actor.WPEOIGfclNJxWb87.Item.4EECsXzHFG0RoIg0::ME8AMAjgTAChHa3C": { file: "jb2a.icon.fear.dark_purple", forma: "lanciatore" }, // Arch-Necromancer · Beam Of Decay — Gain Fear
  "Actor.WPEOIGfclNJxWb87.Item.XxXOrFovbCz9zFxR::qSuWxC8xQOhnbBx9": { file: "jb2a.magic_signs.circle.02.necromancy.complete.green", forma: "lanciatore" }, // Arch-Necromancer · Open the Gates of Death — Spend Fear
  "Actor.WPEOIGfclNJxWb87.Item.k4MSykLRoW3qp7Lk::DX8WPeLVrRBB2CdM": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Arch-Necromancer · Not Today, My Dears — Roll Save
  "Actor.WPEOIGfclNJxWb87.Item.FKcuCo0v2U7fVkqq::YzepYov9vEMcBPU1": { file: "jb2a.energy_strands.range.standard.purple.01", forma: "proiettile" }, // Arch-Necromancer · Your Life Is Mine — Damage
  "Actor.WPEOIGfclNJxWb87.Item.FKcuCo0v2U7fVkqq::LXhwkNCDFeUric8D": { file: "jb2a.extras.tmfx.runes.circle.simple.necromancy", forma: "lanciatore" }, // Arch-Necromancer · Your Life Is Mine — Start Countdown
  "Actor.XEZbNjjrhyioE7YP::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Cephilith Abomination — Meaty Fists
  "Actor.XEZbNjjrhyioE7YP.Item.MFkY0BD2EhKp9lTo::6AQOfcmdac8LuV6u": { file: "jb2a.markers.poison.dark_green.01", forma: "bersaglio" }, // Cephilith Abomination · Toxic Skin — Contact
  "Actor.XEZbNjjrhyioE7YP.Item.bSG0fOnMCgOFVdpP::uAd7ujcTtX7H4qZ3": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Cephilith Abomination · Bear Hug — Mark Stress
  "Actor.XEZbNjjrhyioE7YP.Item.eNlJcvDxqoyCPtW6::4viMPxjTK2hUyXpk": { file: "jb2a.impact.008.orange", forma: "bersaglio" }, // Cephilith Abomination · Crunch! — Spend Fear
  "Actor.XEZbNjjrhyioE7YP.Item.7DSC9gbRVC7j7nKh::ZiKxwdm8EyBvVOid": { file: "jb2a.energy_strands.range.standard.purple.02", forma: "proiettile" }, // Cephilith Abomination · Tongue Attack — Spend Fear
  "Actor.XEZbNjjrhyioE7YP.Item.EzVuIjxfpU0ySdyq::SGk7b2M6GYzVA1KC": { file: "jb2a.liquid.splash02.red", forma: "lanciatore" }, // Cephilith Abomination · Burrowing Leechpoles — Reaction Roll
  "Actor.I8ClqowcEUMUNVdn::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.200px.red", forma: "bersaglio" }, // Cephilith Hatchling — Barbed Suckers
  "Actor.I8ClqowcEUMUNVdn.Item.el7eTepwDBzJVJ2z::5p9hecdIVDlsJEcD": { file: "jb2a.sleep.target.pink", forma: "bersaglio" }, // Cephilith Hatchling · Comatize — Spend Fear
  "Actor.I8ClqowcEUMUNVdn.Item.0ys64jwVIc6yagjB::AFZn3x4gJevftvTS": { file: "jb2a.bite.200px.red", forma: "bersaglio" }, // Cephilith Hatchling · Group Attack — Spend Fear
  "Actor.kA7erU1gkzB84PDY::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.creature_attack.fist.002.blue", forma: "bersaglio" }, // Cephilith Novitiate — Eldritch Might
  "Actor.kA7erU1gkzB84PDY.Item.OpPYnhqeYotcyobD::rim1gdTzGtmlnYwN": { file: "jb2a.melee_generic.creature_attack.fist.002.blue", forma: "bersaglio" }, // Cephilith Novitiate · Group Attack — Spend Fear
  "Actor.kA7erU1gkzB84PDY.Item.bAxGTMuqrqkKcvZP::oFX7G8hcLCgW6UiX": { file: "jb2a.overcharged_sphere.01.01.dark_purple", forma: "proiettile" }, // Cephilith Novitiate · Sacrifice Self — Spend Fear
  "Actor.2G7IfajsxWczY04t::qHEFFbkvLvbm9VmI": { file: "jb2a.energy_beam.normal.bluepink.02", forma: "proiettile" }, // Cephilith Priest — Psychic Strike
  "Actor.2G7IfajsxWczY04t.Item.cVDi7HxrpgdaKIps::15jdZOaS3ejfhb6r": { file: "jb2a.energy_beam.normal.bluepink.03", forma: "proiettile" }, // Cephilith Priest · Psychic Blast — Spend Fear
  "Actor.2G7IfajsxWczY04t.Item.WXxRFMvq0LjWyNEj::9o3WlHvN9db1Aruv": { file: "jb2a.energy_strands.complete.blue.01", forma: "bersaglio" }, // Cephilith Priest · Cerebral Incursion — Spend Fear
  "Actor.2G7IfajsxWczY04t.Item.DD6c2yZwZGEh9dud::1fqaNFtUvzKlZ6h7": { file: "jb2a.arcane_hand.purple", forma: "bersaglio" }, // Cephilith Priest · Telekinetic Grasp — Mark Stress
  "Actor.702jiZPmXM5Hucwj::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Cephilith Titan — Pseudoclaw
  "Actor.702jiZPmXM5Hucwj.Item.YqANVDSnjcVCK5vm::QoeNuj825yKVQqbN": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Cephilith Titan · Terrifying — 
  "Actor.702jiZPmXM5Hucwj.Item.MXC78VtfVHw6pQ5e::yzrcBjVgD4PxIUpy": { file: "jb2a.soundwave.02.blue", forma: "lanciatore" }, // Cephilith Titan · Psychic Scream — Spend Fear
  "Actor.702jiZPmXM5Hucwj.Item.DKl9G56DwWpLVblv::g74MjOlwJaJiYvcn": { file: "jb2a.magic_signs.circle.02.conjuration.complete.dark_yellow", forma: "lanciatore" }, // Cephilith Titan · Summon Worshippers — Spend Fear
  "Actor.702jiZPmXM5Hucwj.Item.SGaUcNeQ3Y7F0Tlf::Y2qht1TORFJFgqx8": { file: "jb2a.arms_of_hadar.dark_purple", forma: "lanciatore" }, // Cephilith Titan · "It's Here…" — 
  "Actor.HFpYk4dxDMx9emHs::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Cipactli — Bite
  "Actor.HFpYk4dxDMx9emHs.Item.LW4JURcTsZzpC5Ay::A5jRCVOuw9Wfvfwk": { file: "jb2a.bite.200px.red", forma: "bersaglio" }, // Cipactli · Many Mouths — Mark Stress
  "Actor.HFpYk4dxDMx9emHs.Item.qkWS8NduN1NUBsg9::rSdl6SV58g5WGgN5": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Cipactli · Frenzied Feeding — Spend Fear
  "Actor.HFpYk4dxDMx9emHs.Item.UGMAHKqr6KGuKx0o::km5CfvdRMj6VVC8C": { file: "jb2a.impact.ground_crack.01.orange", forma: "lanciatore" }, // Cipactli · Quaking Footfalls — Mark Stress
  "Actor.HFpYk4dxDMx9emHs.Item.a4e7n4uzB7hHlVyW::vkJPyvxuhVINY5iD": { file: "jb2a.plant_growth.03.round.4x4.complete.greenyellow", forma: "lanciatore" }, // Cipactli · Lifeblooded — 
  "Actor.O9b1SOGmjhRszm75::qHEFFbkvLvbm9VmI": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Cloud Titan — Bejeweled Blade
  "Actor.O9b1SOGmjhRszm75.Item.Sp222OsLrxhKnqh6::qE5pQilUjZXIyXMt": { file: "jb2a.chain_lightning.primary.blue", forma: "proiettile" }, // Cloud Titan · Lightning Strike — Mark Stress
  "Actor.O9b1SOGmjhRszm75.Item.T5YGSmbgKztOSs2Z::TXpUIzZLHcb1VG2K": { file: "jb2a.fog_cloud.01.white", forma: "bersaglio" }, // Cloud Titan · Mist Weaver — Spend Fear
  "Actor.O9b1SOGmjhRszm75.Item.6X2CCDC4aZtXOovu::OKZGftQoMF3KgKcu": { file: "jb2a.ambient_fog.001.complete.small.white", forma: "lanciatore" }, // Cloud Titan · Nebulous Transformation — Mark Stress
  "Actor.O9b1SOGmjhRszm75.Item.i2PdaF37Qm1Xa6mL::B9GI7mCWdwxFdXvu": { file: "jb2a.swirling_feathers.outburst.01.textured", forma: "lanciatore" }, // Cloud Titan · Unleash the Menagerie — Mark Stress
  "Actor.O9b1SOGmjhRszm75.Item.HhuXSt7z9vfEQi8k::Oqu4Kzsewrrw9SWJ": { file: "jb2a.whirlwind.bluegrey", forma: "bersaglio" }, // Cloud Titan · Wind Worker — Spend Fear
  "Actor.O9b1SOGmjhRszm75.Item.wfgDF0F6enntq5mk::42DKn1KjHJadhVCZ": { file: "jb2a.icosahedron.roll.blue", forma: "lanciatore" }, // Cloud Titan · Double or Nothing — 
  "Actor.FeIMCgQ5ZMRRDo4d::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Demon Lord Berzug — Abyssal Claws
  "Actor.FeIMCgQ5ZMRRDo4d.Item.F7DSVj7HDXsWPq16::TldCgFZ8RIXPPDLM": { file: "jb2a.melee_attack.02.trail.01.orangered", forma: "bersaglio" }, // Demon Lord Berzug · Chaos Lash — Mark Stress
  "Actor.FeIMCgQ5ZMRRDo4d.Item.0INmBdLaQgZu5Q0V::FrkTuhvEV7Sg2wMm": { file: "jb2a.eyes.01.dark_green.single", forma: "bersaglio" }, // Demon Lord Berzug · Gaze into the Abyss — Spend Fear
  "Actor.FeIMCgQ5ZMRRDo4d.Item.0INmBdLaQgZu5Q0V::LBSEOVIyuStEJlfB": { file: "jb2a.magic_signs.rune.enchantment.complete.pink", forma: "bersaglio" }, // Demon Lord Berzug · Gaze into the Abyss — Mesmerized
  "Actor.FeIMCgQ5ZMRRDo4d.Item.0INmBdLaQgZu5Q0V::LI0rDbkjO3thrpBH": { file: "jb2a.dizzy_stars.400px.blueorange", forma: "bersaglio" }, // Demon Lord Berzug · Gaze into the Abyss — Confused
  "Actor.FeIMCgQ5ZMRRDo4d.Item.0INmBdLaQgZu5Q0V::ngwMiJqut6MZ4yZK": { file: "jb2a.markers.heart.pink.01", forma: "bersaglio" }, // Demon Lord Berzug · Gaze into the Abyss — Enthralled
  "Actor.FeIMCgQ5ZMRRDo4d.Item.0POrjNdggcbqg4qD::16Vhvr264lTkHt09": { file: "jb2a.icon.skull.purple", forma: "lanciatore" }, // Demon Lord Berzug · Crushing Strike — Mark Stress
  "Actor.FeIMCgQ5ZMRRDo4d.Item.Vt6yrotrzvjXcHUi::XdJrRAm58l3BYuTq": { file: "jb2a.icon.fear.dark_purple", forma: "lanciatore" }, // Demon Lord Berzug · Horrifying — Gain Fear
  "Actor.FGnHhvctM9bka3Zj::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Dragon Mother Mitera — Bite & Slash
  "Actor.FGnHhvctM9bka3Zj.Item.CBxzYJ6yIchg3igO::70Ppl0IZimDLZnxI": { file: "jb2a.condition.boon.02.001.refraction", forma: "lanciatore" }, // Dragon Mother Mitera · Diamond Hide — Start Countdown
  "Actor.FGnHhvctM9bka3Zj.Item.CBxzYJ6yIchg3igO::2cFgEjrpIVeFvHad": { file: "jb2a.template_circle.aura.04.outward.001.complete.combined.refraction", forma: "lanciatore" }, // Dragon Mother Mitera · Diamond Hide — Apply Effect
  "Actor.FGnHhvctM9bka3Zj.Item.CBxzYJ6yIchg3igO::eh0mvBS3xBn5c4VG": { file: "jb2a.shield.01.outro_explode.blue", forma: "lanciatore" }, // Dragon Mother Mitera · Diamond Hide — Trigger Countdown
  "Actor.FGnHhvctM9bka3Zj.Item.xeNAQKBgqiaKJgNR::iFtNtbVLnJD4t0FQ": { file: "jb2a.magic_signs.rune.evocation.complete.red", forma: "lanciatore" }, // Dragon Mother Mitera · Elemental Breath — Mark Stress
  "Actor.FGnHhvctM9bka3Zj.Item.xeNAQKBgqiaKJgNR::kwp7I9dNj43EU8Qx": { file: "jb2a.fire_jet.orange", forma: "proiettile" }, // Dragon Mother Mitera · Elemental Breath — Fire
  "Actor.FGnHhvctM9bka3Zj.Item.xeNAQKBgqiaKJgNR::2vMuQV24hmve5EnE": { file: "jb2a.witch_bolt.blue", forma: "proiettile" }, // Dragon Mother Mitera · Elemental Breath — Lightning
  "Actor.FGnHhvctM9bka3Zj.Item.xeNAQKBgqiaKJgNR::ZX6UflWMmO1X12Gg": { file: "jb2a.ranged.04.projectile.01.green", forma: "proiettile" }, // Dragon Mother Mitera · Elemental Breath — Acid
  "Actor.FGnHhvctM9bka3Zj.Item.xeNAQKBgqiaKJgNR::D4zXLc4cj1XnyX55": { file: "jb2a.template_circle.smoke.001.complete.400px.001.greenpurple", forma: "bersaglio" }, // Dragon Mother Mitera · Elemental Breath — Poison
  "Actor.FGnHhvctM9bka3Zj.Item.xeNAQKBgqiaKJgNR::o8yK8P0sIPGX37C4": { file: "jb2a.ray_of_frost.blue", forma: "proiettile" }, // Dragon Mother Mitera · Elemental Breath — Ice
  "Actor.FGnHhvctM9bka3Zj.Item.xeNAQKBgqiaKJgNR::yDGIB2KauwxaMrTl": { file: "jb2a.darkness.black", forma: "bersaglio" }, // Dragon Mother Mitera · Elemental Breath — Darkness
  "Actor.FGnHhvctM9bka3Zj.Item.xeNAQKBgqiaKJgNR::y0gUQyGD8oJE5z6B": { file: "jb2a.guiding_bolt.01.blueyellow", forma: "proiettile" }, // Dragon Mother Mitera · Elemental Breath — Light
  "Actor.FGnHhvctM9bka3Zj.Item.OCDeXZ8K5EbT8ywA::aZSQVMaQiOkrLPHB": { file: "jb2a.melee_attack.03.greatclub.01", forma: "bersaglio" }, // Dragon Mother Mitera · Tail Swipe — Spend Fear
  "Actor.FGnHhvctM9bka3Zj.Item.S5VDtif4FxRerSoD::Myxx8xKehb4I0mzs": { file: "jb2a.icon.fear.dark_purple", forma: "lanciatore" }, // Dragon Mother Mitera · Fearsome — Gain Fear
  "Actor.OsLG2BjaEdTZUJU9::pkNpXWn2gpFV5jWO": { file: "jb2a.melee_attack.02.battleaxe.01", forma: "bersaglio" }, // Fallen Shock Troop — Cursed Axe
  "Actor.OsLG2BjaEdTZUJU9.Item.eW1Z3TTGlgvbgdCD::HcGa2nD0WziA0lFP": { file: "jb2a.icon.horror.purple", forma: "bersaglio" }, // Fallen Shock Troop · Aura of Doom — Lose Hope
  "Actor.OsLG2BjaEdTZUJU9.Item.gC4whvt2r9Tfso9Y::G0DVft7h55pBnwJA": { file: "jb2a.melee_attack.02.battleaxe.01", forma: "bersaglio" }, // Fallen Shock Troop · Group Attack — Spend Fear
  "Actor.PELRry1vqjBzSAlr::hMLV7UDG2rYXYT0z": { file: "jb2a.magic_missile.purple", forma: "proiettile" }, // Fallen Sorcerer — Corrupted Staff
  "Actor.PELRry1vqjBzSAlr.Item.s15sNyb3JYMzBLIU::v7zZo52Dnj1e1i2G": { file: "jb2a.fireball.explosion.orange", forma: "lanciatore" }, // Fallen Sorcerer · Conflagration — Attack
  "Actor.PELRry1vqjBzSAlr.Item.ecp9o8t1dQFXGsse::mXWOpXcYALYqicTw": { file: "jb2a.magic_signs.rune.illusion.complete.purple", forma: "bersaglio" }, // Fallen Sorcerer · Nightmare Tableau — Generic
  "Actor.PELRry1vqjBzSAlr.Item.gwSgBhkcekCGvXxz::7b0FkpAnWz9a5EWx": { file: "jb2a.markers.chain.spectral_standard.complete.02.blue", forma: "bersaglio" }, // Fallen Sorcerer · Shackles of Guilt — Mark Stress
  "Actor.PELRry1vqjBzSAlr.Item.gwSgBhkcekCGvXxz::11PtfoxbgOXxNlkG": { file: "jb2a.extras.tmfx.runes.circle.simple.enchantment", forma: "lanciatore" }, // Fallen Sorcerer · Shackles of Guilt — Start Countdown
  "Actor.hxZ0sgoFJubh5aj6::bAM5u66XszRmjaT8": { file: "jb2a.melee_attack.01.trail.01.orangered", forma: "bersaglio" }, // Fallen Warlord: Realm-Breaker — Barbed Whip
  "Actor.hxZ0sgoFJubh5aj6.Item.feb6vTfDsi1yQLpn::9IHzeKjP35M5jj3b": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Fallen Warlord: Realm-Breaker · Relentless (2) — Spotlight: Relentless
  "Actor.hxZ0sgoFJubh5aj6.Item.onaJxgnUtf0ZDyD4::djEIhnCsuCUdwC0m": { file: "jb2a.shield_themed.above.fire.01.orange", forma: "lanciatore" }, // Fallen Warlord: Realm-Breaker · Firespite Plate Armor — Roll 2d10
  "Actor.hxZ0sgoFJubh5aj6.Item.PVLjJaQLH3LK3svk::zMVhUekP8pcyQGFR": { file: "jb2a.melee_attack.03.trail.01.orangered", forma: "bersaglio" }, // Fallen Warlord: Realm-Breaker · Tormenting Lash — Mark Stress
  "Actor.hxZ0sgoFJubh5aj6.Item.48tIwFQr64IQ5LaY::rgy5wXyXJWh6uWxC": { file: "jb2a.fire_ring.900px.red", forma: "lanciatore" }, // Fallen Warlord: Realm-Breaker · All-Consuming Rage — Roll Save
  "Actor.hxZ0sgoFJubh5aj6.Item.48tIwFQr64IQ5LaY::8e3BHmOFLvRwPbTW": { file: "jb2a.extras.tmfx.runes.circle.simple.evocation", forma: "lanciatore" }, // Fallen Warlord: Realm-Breaker · All-Consuming Rage — Start Countdown
  "Actor.hxZ0sgoFJubh5aj6.Item.v74W0MUqVi9vPUEw::WEBPJCbXfBeyHFJ4": { file: "jb2a.icon.horror.purple", forma: "bersaglio" }, // Fallen Warlord: Realm-Breaker · Doombringer — Lose Hope
  "Actor.hxZ0sgoFJubh5aj6.Item.RscRTl8U8u6WcwAB::gP426WmWbtrZEWCD": { file: "jb2a.eruption.orange.01", forma: "lanciatore" }, // Fallen Warlord: Realm-Breaker · I Have Never Known Defeat — undefined
  "Actor.RXkZTwBRi4dJ3JE5::bAM5u66XszRmjaT8": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Fallen Warlord: Undefeated Champion — Heart-Shattering Sword
  "Actor.RXkZTwBRi4dJ3JE5.Item.ct5vhSsNP25arggo::BoDTEH8Y6i9G1d4R": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Fallen Warlord: Undefeated Champion · Relentless (3) — Spotlight: Relentless
  "Actor.RXkZTwBRi4dJ3JE5.Item.zypNlBVfuaHVw1M4::REOzNvunSAU3UcEx": { file: "jb2a.markers.shield_cracked.purple.01", forma: "lanciatore" }, // Fallen Warlord: Undefeated Champion · Faltering Armor — Roll d10
  "Actor.RXkZTwBRi4dJ3JE5.Item.t8yOkGWmPgQ6EbIr::t1GhGnEhNYyJ7p2U": { file: "jb2a.melee_attack.03.greatsword.01", forma: "bersaglio" }, // Fallen Warlord: Undefeated Champion · Shattering Strike — Mark Stress
  "Actor.RXkZTwBRi4dJ3JE5.Item.AP7W9ruUCdTHO69S::SrU7qbh8LcOgfozT": { file: "jb2a.magic_signs.circle.02.evocation.complete.dark_red", forma: "lanciatore" }, // Fallen Warlord: Undefeated Champion · Endless Legions — Spend Fear
  "Actor.RXkZTwBRi4dJ3JE5.Item.55P7ZijSbQeVHCw4::mHeYZ8e8MbkGz22d": { file: "jb2a.magic_signs.circle.02.necromancy.complete.dark_green", forma: "lanciatore" }, // Fallen Warlord: Undefeated Champion · Circle of Defilement — Circle
  "Actor.RXkZTwBRi4dJ3JE5.Item.55P7ZijSbQeVHCw4::4x13WyksHU0u0j20": { file: "jb2a.extras.tmfx.runes.circle.simple.conjuration", forma: "lanciatore" }, // Fallen Warlord: Undefeated Champion · Circle of Defilement — Start Countdown
  "Actor.RXkZTwBRi4dJ3JE5.Item.ReWtcLE5akrSauI1::i1Wmh6Mok4Qsur00": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Fallen Warlord: Undefeated Champion · Momentum — Gain Fear
  "Actor.RXkZTwBRi4dJ3JE5.Item.tQRotPLi3eokgUdM::liwKSCTmQqZasAf6": { file: "jb2a.icon.horror.purple", forma: "bersaglio" }, // Fallen Warlord: Undefeated Champion · Doombringer — Lose Hope
  "Actor.PjkvJjlljFIg6Ae9::qHEFFbkvLvbm9VmI": { file: "jb2a.maul.melee.standard.white", forma: "bersaglio" }, // Fire Titan Warlord — Maul
  "Actor.PjkvJjlljFIg6Ae9.Item.y23ZdtLiSn0pN2g8::XCZQJSvp4yPO1rCh": { file: "jb2a.extras.tmfx.runes.circle.simple.transmutation", forma: "lanciatore" }, // Fire Titan Warlord · Colossus Crafter — Start Countdown
  "Actor.PjkvJjlljFIg6Ae9.Item.y23ZdtLiSn0pN2g8::nFtxBG44eEjAF9uk": { file: "jb2a.magic_signs.circle.02.transmutation.complete.dark_yellow", forma: "lanciatore" }, // Fire Titan Warlord · Colossus Crafter — Trigger Countdown
  "Actor.PjkvJjlljFIg6Ae9.Item.jxtN0zwQ0831Esty::ZBhZ4G32zHIuBELj": { file: "jb2a.cast_generic.fire.01.orange", forma: "lanciatore" }, // Fire Titan Warlord · Release the Hounds — Spend Fear
  "Actor.PjkvJjlljFIg6Ae9.Item.tkErESgXR79emSYb::yofgD5CBB3bnC8UJ": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Fire Titan Warlord · Spinning Strike — Mark Stress
  "Actor.PjkvJjlljFIg6Ae9.Item.vFO6Ikozm5LzM1eh::JEcOJzlgx0cjztWq": { file: "jb2a.impact.ground_crack.02.orange", forma: "bersaglio" }, // Fire Titan Warlord · Ground-Breaking — Spend Fear
  "Actor.iCiRtuBhVfojXOj5::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_generic.creature_attack.fist.001.red", forma: "bersaglio" }, // Gargantuan War Machine — Fists of Iron
  "Actor.iCiRtuBhVfojXOj5.Item.Dji8Hfl4evCsiAZv::ZU0aVpoUR7JilvAD": { file: "jb2a.extras.tmfx.outpulse.circle.03.normal", forma: "lanciatore" }, // Gargantuan War Machine · Awesome Size — 
  "Actor.iCiRtuBhVfojXOj5.Item.mqCuS2uMerHe5YoI::w06aL8MR6JOGA5Nm": { file: "jb2a.throwable.launch.missile.01.blue", forma: "proiettile" }, // Gargantuan War Machine · Rocket Punch — Mark Stress
  "Actor.iCiRtuBhVfojXOj5.Item.z780aZ858HHSiTLz::tIVAHRMrd5vUzo9k": { file: "jb2a.impact.ground_crack.03.orange", forma: "bersaglio" }, // Gargantuan War Machine · Ground-Breaking Stomp — Spend Fear
  "Actor.iCiRtuBhVfojXOj5.Item.SNc1Tf2WAUKRmVAu::xccE9F4ovCbuaaUd": { file: "jb2a.static_electricity.01.blue", forma: "lanciatore" }, // Gargantuan War Machine · Supercharged — Start Countdown
  "Actor.Tg1F1PthQWeKdLJT::qHEFFbkvLvbm9VmI": { file: "jb2a.lasersword.throw.blue", forma: "proiettile" }, // Ghastly Legion — Spectral Armaments
  "Actor.Tg1F1PthQWeKdLJT.Item.1yuuNfi8PkpCQC0U::4zOASNDIx1vD2kfU": { file: "jb2a.template_circle.out_pulse.01.burst.bluewhite", forma: "lanciatore" }, // Ghastly Legion · Final Act — 
  "Actor.CJtnIPvyAmv6PFsu::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Griffin — Beak & Talons
  "Actor.CJtnIPvyAmv6PFsu.Item.1Mu7OaOz2vtMovu7::2PKHPUF8uCPi0nOC": { file: "jb2a.melee_generic.creature_attack.claw.002.red", forma: "bersaglio" }, // Griffin · Swooping Slash — 
  "Actor.kabueAo6BALApWqp::8kIRUNV755dKNVqq": { file: "jb2a.arrow.physical.white.01", forma: "proiettile" }, // Hallowed Archer — Sanctified Longbow
  "Actor.kabueAo6BALApWqp.Item.Ye35DuZroQfeFoNw::pQLfy0I6sZhgAoIm": { file: "jb2a.volley_of_projectiles_Cone5e.arrow.001.001.orangeyellow", forma: "proiettile" }, // Hallowed Archer · Divine Volley — Mark Stress
  "Actor.68xDUa9Ls48O825Z::qHEFFbkvLvbm9VmI": { file: "jb2a.ranged.02.projectile.01.yellow", forma: "proiettile" }, // Hallowed Choir — Choral Blast
  "Actor.68xDUa9Ls48O825Z.Item.5oqRLicTNnITxlwx::TqM6TJH5SOvsh2yf": { file: "jb2a.music_notations.treble_clef.blue", forma: "lanciatore" }, // Hallowed Choir · Celestial Coda — Start Countdown
  "Actor.68xDUa9Ls48O825Z.Item.5oqRLicTNnITxlwx::bZlfk7RkpgKFKAnx": { file: "jb2a.bless.400px.intro.yellow", forma: "lanciatore" }, // Hallowed Choir · Celestial Coda — Trigger Countdown
  "Actor.VENwg7xEFcYObjmT::N6Ox38RmezTU4WQ7": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Hallowed Soldier — Sword and Shield
  "Actor.VENwg7xEFcYObjmT.Item.6CvDtMEazJ35y2AA::aCRmnQ5n7FrbQykj": { file: "jb2a.swirling_feathers.outburst.01.textured", forma: "lanciatore" }, // Hallowed Soldier · Divine Flight — Spend Fear
  "Actor.VENwg7xEFcYObjmT.Item.ZpypjDbaurs1YSFb::irZGPKPpGLA6sP2y": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // Hallowed Soldier · Group Attack — Spend Fear
  "Actor.unuX3PZSkhlNUdVF::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.05.scythe.01", forma: "bersaglio" }, // Harbinger Of Death — Great Scythe
  "Actor.unuX3PZSkhlNUdVF.Item.vI14KIZ1C0GnyQpR::Qa6H0mZULkyHuQ63": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Harbinger Of Death · Mount — Resummon Mount
  "Actor.unuX3PZSkhlNUdVF.Item.C7cdkWta8kLGaqXn::IbYvD1hyED6iFRUY": { file: "jb2a.markers.skull.purple.01", forma: "lanciatore" }, // Harbinger Of Death · Fear the Reaper — 
  "Actor.unuX3PZSkhlNUdVF.Item.Dq0jQoARqtYf1drc::gpU4E159CzF9IZUG": { file: "jb2a.spiritual_weapon.scythe.01.spectral.02.green", forma: "bersaglio" }, // Harbinger Of Death · Decapitate — Spend Fear
  "Actor.unuX3PZSkhlNUdVF.Item.FHxhsBvJfrWsKGx5::nVtYyL07rje4kAw4": { file: "jb2a.magic_signs.circle.02.necromancy.complete.green", forma: "bersaglio" }, // Harbinger Of Death · Wake the Fallen — Resurrect Ally
  "Actor.unuX3PZSkhlNUdVF.Item.N2eKN7QmOdB1ZBat::ERKcJSjuYXLL7lwI": { file: "jb2a.energy_strands.range.standard.purple.01", forma: "proiettile" }, // Harbinger Of Death · Ashes to Ashes, Dust to Dust — Mark Stress
  "Actor.2dmAOdPMFN6e4BV6::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.01.flail.01", forma: "bersaglio" }, // Harbinger Of Famine — Barbed Lash
  "Actor.2dmAOdPMFN6e4BV6.Item.jALBcE8dCmRLWsfW::bGu2SoZLSdOKsAjm": { file: "jb2a.extras.tmfx.runes.circle.simple.necromancy", forma: "lanciatore" }, // Harbinger Of Famine · Hunger Pangs — Start Countdown
  "Actor.2dmAOdPMFN6e4BV6.Item.jALBcE8dCmRLWsfW::Phr1b8nJrEXZlnjS": { file: "jb2a.condition.curse.01.012.red", forma: "bersaglio" }, // Harbinger Of Famine · Hunger Pangs — Trigger Countdown
  "Actor.2dmAOdPMFN6e4BV6.Item.4skXuiYVQGCEGyfP::batSgpaGtySlWx5H": { file: "jb2a.energy_strands.range.multiple.purple.01", forma: "proiettile" }, // Harbinger Of Famine · Drain Essence — Spend Fear
  "Actor.2dmAOdPMFN6e4BV6.Item.0BirBknShzjOvSdz::eZUzkDgdSJWwlO3F": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Harbinger Of Famine · Too Many Mouths — Mark Stress
  "Actor.2dmAOdPMFN6e4BV6.Item.lbwK2we0LKpFP7mx::hWpjEQlwOjx9Tvel": { file: "jb2a.toll_the_dead.green.skull_smoke", forma: "bersaglio" }, // Harbinger Of Famine · Withering Touch — Spend Fear
  "Actor.2dmAOdPMFN6e4BV6.Item.9xewwwqEe0SRH5zR::Qa6H0mZULkyHuQ63": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Harbinger Of Famine · Mount — Resummon Mount
  "Actor.PwAVKf3IhLYD8JTJ::qHEFFbkvLvbm9VmI": { file: "jb2a.sneak_attack.dark_green", forma: "bersaglio" }, // Harbinger Of Pestilence — Touch of Corruption
  "Actor.PwAVKf3IhLYD8JTJ.Item.JIjSpCGXzAyayyGP::LaPHSgoEFRB22LRV": { file: "jb2a.template_circle.smoke.001.complete.400px.001.greenpurple", forma: "lanciatore" }, // Harbinger Of Pestilence · Halo of Contagion — Activate
  "Actor.PwAVKf3IhLYD8JTJ.Item.JIjSpCGXzAyayyGP::MaE2uIQSufLqgPIM": { file: "jb2a.markers.poison.dark_green.01", forma: "bersaglio" }, // Harbinger Of Pestilence · Halo of Contagion — Apply Contagion
  "Actor.PwAVKf3IhLYD8JTJ.Item.i5rQALLMNFdptbVX::uqFrkVImp9aSUGAc": { file: "jb2a.bats.complete.01.red", forma: "bersaglio" }, // Harbinger Of Pestilence · Locust Swarm — Spend Fear
  "Actor.PwAVKf3IhLYD8JTJ.Item.2BcaxW4N8lAM3rqF::gB1P87TqFmlBVKrb": { file: "jb2a.ranged.04.projectile.01.green", forma: "proiettile" }, // Harbinger Of Pestilence · Frog Spawn — Spend Fear
  "Actor.PwAVKf3IhLYD8JTJ.Item.aQQZlLwA8OOXCJPW::pXOB1GZh2FwvU4hS": { file: "jb2a.magic_signs.circle.02.necromancy.complete.dark_green", forma: "lanciatore" }, // Harbinger Of Pestilence · Plague Bringer — Mark Stress
  "Actor.PwAVKf3IhLYD8JTJ.Item.obZh9m7dZIXyIkub::Qa6H0mZULkyHuQ63": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Harbinger Of Pestilence · Mount — Resummon Mount
  "Actor.G7LS7f4StFvtPPG7::qHEFFbkvLvbm9VmI": { file: "jb2a.melee_attack.02.battleaxe.01", forma: "bersaglio" }, // Harbinger Of War — Battle Axe
  "Actor.G7LS7f4StFvtPPG7.Item.l6LkfJH42kh3P2hm::7AyuRjYxGqMeNakU": { file: "jb2a.greataxe.melee.standard.white", forma: "bersaglio" }, // Harbinger Of War · Iron Dice — Mark Stress
  "Actor.G7LS7f4StFvtPPG7.Item.l6LkfJH42kh3P2hm::s81xphhZ8KLSCibS": { file: "jb2a.markers.shield_cracked.purple.01", forma: "lanciatore" }, // Harbinger Of War · Iron Dice — Become Vulnerable
  "Actor.G7LS7f4StFvtPPG7.Item.TCJ1CG5eNfGuxrsG::lVMwHvsuX6Gn2PRl": { file: "jb2a.magic_signs.circle.02.conjuration.complete.yellow", forma: "lanciatore" }, // Harbinger Of War · Supreme Commander — Spend Fear
  "Actor.G7LS7f4StFvtPPG7.Item.yZG0sINlKXLMaYlB::tWHtWiFPG1twBJBo": { file: "jb2a.impact.008.orange", forma: "bersaglio" }, // Harbinger Of War · Battering Ram — Spend Fear
  "Actor.G7LS7f4StFvtPPG7.Item.DfogFjl1t860BDII::Qa6H0mZULkyHuQ63": { file: "jb2a.smoke.puff.centered.grey", forma: "lanciatore" }, // Harbinger Of War · Mount — Resummon Mount
  "Actor.r1mbfSSwKWdcFdAU::y1Ixg2uoryu5fMqz": { file: "jb2a.sword.melee.01.white", forma: "bersaglio" }, // High Seraph — Holy Sword
  "Actor.r1mbfSSwKWdcFdAU.Item.jUu058IZwt4u2goM::7oqXSF66R2GlB17O": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // High Seraph · Relentless (3) — Spotlight: Relentless
  "Actor.r1mbfSSwKWdcFdAU.Item.2AB3ouMpy2wWnGQm::ZgspQLiGhuKURA1T": { file: "jb2a.swirling_feathers.outburst.01.textured", forma: "lanciatore" }, // High Seraph · Divine Flight — Spend Fear
  "Actor.r1mbfSSwKWdcFdAU.Item.FilEB21L5q9XxKE1::ErGJWtFIXFPgKtek": { file: "jb2a.ward.rune.yellow.01", forma: "bersaglio" }, // High Seraph · Judgement — Make Guilty
  "Actor.r1mbfSSwKWdcFdAU.Item.Vrb8dIJcOJ3ClwO5::HwC75gazlN0k30AL": { file: "jb2a.sacred_flame.target.yellow", forma: "bersaglio" }, // High Seraph · God Rays — Roll Save
  "Actor.r1mbfSSwKWdcFdAU.Item.9LpLXpQBfQryJA60::j6DmU9dtob5QStxY": { file: "jb2a.bless.400px.intro.yellow", forma: "lanciatore" }, // High Seraph · We Are One — Spend Fear
  "Actor.4nqv3ZwJGjnmic8j::TmFvEayOgGkUPvLc": { file: "jb2a.arms_of_hadar.dark_purple", forma: "bersaglio" }, // Kraken — Tentacles
  "Actor.4nqv3ZwJGjnmic8j.Item.1YxbPc8C0X64w1JN::420LQBs27zQTAXfY": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Kraken · Relentless (3) — Spotlight: Relentless
  "Actor.4nqv3ZwJGjnmic8j.Item.vz2BWhispgR7mSWF::SX2Y4OapGEawl17j": { file: "jb2a.water_splash.circle.01.blue", forma: "bersaglio" }, // Kraken · Grapple and Drown — Attack
  "Actor.4nqv3ZwJGjnmic8j.Item.eksa3E2ecBgdib6h::pHZUiZRSj4FuG0uK": { file: "jb2a.impact.water.02.blue", forma: "bersaglio" }, // Kraken · Boiling Blast — Attack
  "Actor.4nqv3ZwJGjnmic8j.Item.m4aybzb8tXWHelDU::hXQtIGmSaWKMOuFB": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Kraken · Momentum — Gain Fear
  "Actor.befIqd5IYKg6eUz2::h6c5w6Hfuw7rZ87I": { file: "jb2a.energy_strands.range.standard.purple.02", forma: "proiettile" }, // Oracle of Doom — Psychic Attack
  "Actor.befIqd5IYKg6eUz2.Item.mKSk2GBYLoATQlVT::VjdSO1lAdTIAlofM": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Oracle of Doom · Terrifying — Lose Hope
  "Actor.befIqd5IYKg6eUz2.Item.8xbzF3kIC6vPF9ya::u9iEsvV5ktvOxNp5": { file: "jb2a.markers.stun.purple.01", forma: "bersaglio" }, // Oracle of Doom · Walls Closing In — Mark Stress
  "Actor.befIqd5IYKg6eUz2.Item.QoFecwKWBFzrk4Wp::IiSgpy6Axfqo9f9V": { file: "jb2a.icon.horror.purple", forma: "bersaglio" }, // Oracle of Doom · Pronounce Fate — Roll Save
  "Actor.befIqd5IYKg6eUz2.Item.A4yI2RENCuLk6mg9::71UnFo3CBBPtbao3": { file: "jb2a.magic_signs.circle.02.illusion.complete.dark_purple", forma: "bersaglio" }, // Oracle of Doom · Summon Tormentors — Roll 2d4
  "Actor.befIqd5IYKg6eUz2.Item.kuxTMjy8lOmNSa8e::vJ7kARKL5H87T1BY": { file: "jb2a.side_impact.part.shockwave.blue", forma: "bersaglio" }, // Oracle of Doom · Vengeful Fate — Damage
  "Actor.A0SeeDzwjvqOsyof::RVZdDKJHyBH3fI4t": { file: "jb2a.melee_generic.creature_attack.fist.002.blue", forma: "bersaglio" }, // Outer Realms Abomination — Massive Pseudopod
  "Actor.A0SeeDzwjvqOsyof.Item.CoWjh12FkhDGYIie::4diIu0AzPjitQ94k": { file: "jb2a.dizzy_stars.400px.blueorange", forma: "bersaglio" }, // Outer Realms Abomination · Disorienting Presence — Roll Save
  "Actor.A0SeeDzwjvqOsyof.Item.K3MQO1I42nmfM2F2::7apNSLz8m7sxyLhU": { file: "jb2a.template_circle.aura.04.outward.001.complete.combined.refraction", forma: "lanciatore" }, // Outer Realms Abomination · Reality Quake — Roll Save
  "Actor.A0SeeDzwjvqOsyof.Item.u9dR2Qh3swHZalXj::ohpbyDEgSTVJ7qaF": { file: "jb2a.shimmer.01.blue", forma: "lanciatore" }, // Outer Realms Abomination · Unreal Form — Roll d20
  "Actor.ms6nuOl3NFkhPj1k::kOIJT1fdvWCZAuLl": { file: "jb2a.arcane_hand.green", forma: "bersaglio" }, // Outer Realms Corrupter — Corroding Pseudopod
  "Actor.ms6nuOl3NFkhPj1k.Item.Z4R768thOzKWzqOo::q2PUiGoUQqsMghtW": { file: "jb2a.icon.fear.dark_purple", forma: "bersaglio" }, // Outer Realms Corrupter · Will-Shattering Touch — Lose Hope
  "Actor.ms6nuOl3NFkhPj1k.Item.gBLVvHbyekmIUITD::6vX6VHpXX7OiGSWH": { file: "jb2a.particles.outward.greenyellow.01.05", forma: "lanciatore" }, // Outer Realms Corrupter · Disgorge Realiy Flotsam — Roll Save
  "Actor.moJhHgKqTKPS2WYS::ojbalvW3ulstQEBK": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Outer Realms Thrall — Claws and Teeth
  "Actor.moJhHgKqTKPS2WYS.Item.7DWNmxZvp1Fm3aq3::6VKv71tPUIGGIfkZ": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Outer Realms Thrall · Group Attack — Spend Fear
  "Actor.DJTVWE5AuWKsAdLZ::qHEFFbkvLvbm9VmI": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Owl Witch — Razor Talons
  "Actor.DJTVWE5AuWKsAdLZ.Item.SDq4QlTBkrX0v5mZ::AulWyPHAEWpkfk2P": { file: "jb2a.markers.heart.pink.01", forma: "bersaglio" }, // Owl Witch · Voice Mimicry — Spend Fear
  "Actor.DJTVWE5AuWKsAdLZ.Item.JQ0bdv1Gnb0VD4Gm::yFU9cxd1Rho0sqrB": { file: "jb2a.eyes.01.dark_green.single", forma: "bersaglio" }, // Owl Witch · Nightmare Stare — Spend Fear
  "Actor.DJTVWE5AuWKsAdLZ.Item.0gsas3oxit5vgG8C::6MPGu2MhhTMZyUEQ": { file: "jb2a.markers.horror.purple.01", forma: "bersaglio" }, // Owl Witch · Visions of a Violent End — Spend Fear
  "Actor.CP6iRfHdyFWniTHY::ThvfgVfn5Kle9ABF": { file: "jb2a.greataxe.melee.standard.white", forma: "bersaglio" }, // Perfected Zombie — Greataxe
  "Actor.CP6iRfHdyFWniTHY.Item.xyz5d7QISdB5X5ey::dquYnt5qiHZfnyD9": { file: "jb2a.template_circle.symbol.normal.fear.dark_purple", forma: "lanciatore" }, // Perfected Zombie · Terrifying — Lose Hope
  "Actor.CP6iRfHdyFWniTHY.Item.CKy2r6FguyTSO9Fm::un9btM1mN53JHIgV": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Perfected Zombie · Perfect Strike — Mark Stress
  "Actor.CP6iRfHdyFWniTHY.Item.hWxjmdc1O5J1otLM::To2z7XQItxcMxKBp": { file: "jb2a.melee_attack.03.greataxe.01", forma: "bersaglio" }, // Perfected Zombie · Skilled Opportunist — Spend Fear
  "Actor.trcxftEx6fFKDNk0::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Ruby Dragon — Tooth & Claw
  "Actor.trcxftEx6fFKDNk0.Item.NlEFjJYQUwupXAdc::ax25A4WHqh3KQcOA": { file: "jb2a.markers.fear.dark_purple.01", forma: "lanciatore" }, // Ruby Dragon · Fearsome — 
  "Actor.trcxftEx6fFKDNk0.Item.V1Ccn0Hi2lKYYGUt::wAX4UMu4SSF7oMFn": { file: "jb2a.fire_jet.orange", forma: "proiettile" }, // Ruby Dragon · Melting Breath — Mark Stress
  "Actor.trcxftEx6fFKDNk0.Item.yE763wnIGXDZv0vp::f4JL2PsuT44tBlls": { file: "jb2a.impact.ground_crack.orange.02", forma: "lanciatore" }, // Ruby Dragon · Volcanic Fissure — Spend Fear
  "Actor.trcxftEx6fFKDNk0.Item.yE763wnIGXDZv0vp::IXSJXWOWHQoP3XWg": { file: "jb2a.lava_spout.001.001.complete.orangeyellow", forma: "bersaglio" }, // Ruby Dragon · Volcanic Fissure — Lava Damage
  "Actor.trcxftEx6fFKDNk0.Item.lrZBrdcwa2uBZFn4::M9uSzXavJEy8nqTx": { file: "jb2a.impact.fire.01.orange", forma: "bersaglio" }, // Ruby Dragon · Hot-Blooded — 
  "Actor.k70HuYjjFhd2L9Dg::qHEFFbkvLvbm9VmI": { file: "jb2a.energy_strands.range.standard.purple.03", forma: "proiettile" }, // Severed Shadow — Strangle
  "Actor.k70HuYjjFhd2L9Dg.Item.hI0tXM7hL3Tf3oLs::nIBoa0wGpuhVOXw5": { file: "jb2a.markers.chain.spectral_standard.complete.02.blue", forma: "bersaglio" }, // Severed Shadow · Shadow Grapple — Mark Stress
  "Actor.k70HuYjjFhd2L9Dg.Item.FWGH5sUYmjPAyESD::EKjThIkQwtjphHCJ": { file: "jb2a.energy_strands.range.standard.purple.03", forma: "proiettile" }, // Severed Shadow · Group Attack — Spend Fear
  "Actor.cARWKseJwjskn23n::qHEFFbkvLvbm9VmI": { file: "jb2a.swirling_feathers.outburst.01.textured", forma: "bersaglio" }, // Supreme Demiurge Adonix — Wing Strike
  "Actor.cARWKseJwjskn23n.Item.vFcVQJIwxf5zPjeo::zviLPA0DMX15aEPl": { file: "jb2a.icosahedron.roll.blue", forma: "lanciatore" }, // Supreme Demiurge Adonix · Elemental Archon — Mark Stress
  "Actor.cARWKseJwjskn23n.Item.vFcVQJIwxf5zPjeo::ProfY1AYwmSMGXVb": { file: "jb2a.fireball.beam.orange", forma: "proiettile" }, // Supreme Demiurge Adonix · Elemental Archon — Fire Beam
  "Actor.cARWKseJwjskn23n.Item.vFcVQJIwxf5zPjeo::GSbT8eCnIsID2JGK": { file: "jb2a.thunderwave.center.blue", forma: "lanciatore" }, // Supreme Demiurge Adonix · Elemental Archon — Thunderclap
  "Actor.cARWKseJwjskn23n.Item.vFcVQJIwxf5zPjeo::fKsYjDiecMyUQktG": { file: "jb2a.chain_lightning.primary.blue", forma: "proiettile" }, // Supreme Demiurge Adonix · Elemental Archon — Lightning Bolt
  "Actor.cARWKseJwjskn23n.Item.vFcVQJIwxf5zPjeo::ySBV3ba8vqjFFp7R": { file: "jb2a.chain_lightning.primary.blue", forma: "proiettile" }, // Supreme Demiurge Adonix · Elemental Archon — Lightning Bolt
  "Actor.cARWKseJwjskn23n.Item.vFcVQJIwxf5zPjeo::Sr4U9JQeLe1E652H": { file: "jb2a.ice_spikes.radial.burst.white", forma: "bersaglio" }, // Supreme Demiurge Adonix · Elemental Archon — Ice Storm
  "Actor.cARWKseJwjskn23n.Item.RQvkIhWDLNf1nruQ::bhcAz9W4hd5fky6l": { file: "jb2a.magic_signs.circle.02.transmutation.complete.yellow", forma: "lanciatore" }, // Supreme Demiurge Adonix · Alpha to Omega — 
  "Actor.cARWKseJwjskn23n.Item.RQvkIhWDLNf1nruQ::bYTI3aiRNSi6puZh": { file: "jb2a.template_circle.out_pulse.02.burst.bluewhite", forma: "lanciatore" }, // Supreme Demiurge Adonix · Alpha to Omega — Reaction Roll
  "Actor.cARWKseJwjskn23n.Item.AJicsX6t4G8r6pX9::T5bCqspBR1tmCUVi": { file: "jb2a.extras.tmfx.runes.circle.simple.divination", forma: "lanciatore" }, // Supreme Demiurge Adonix · Forsaken — Start Countdown
  "Actor.cARWKseJwjskn23n.Item.D56q8j9zqjTlkCPy::P2EJERCMegGEMBmz": { file: "jb2a.sphere_of_annihilation.600px.purple", forma: "lanciatore" }, // Supreme Demiurge Adonix · Armageddon — Armageddon
  "Actor.VSdS3N5Kh6uratv9::qHEFFbkvLvbm9VmI": { file: "jb2a.hammer.melee.01.white", forma: "bersaglio" }, // Temporal Enforcer — Adamantine Hammer
  "Actor.VSdS3N5Kh6uratv9.Item.wBfRwWNwBkJALC5s::1Z0OyqCIS705TEIr": { file: "jb2a.extras.tmfx.runes.circle.simple.transmutation", forma: "lanciatore" }, // Temporal Enforcer · Time Looper — Start Countdown
  "Actor.VSdS3N5Kh6uratv9.Item.SZKbrbzW9ITQuELW::HgV00O2iDEOZYZDe": { file: "jb2a.misty_step.01.blue", forma: "lanciatore" }, // Temporal Enforcer · Move Between Moments — Mark Stress
  "Actor.VSdS3N5Kh6uratv9.Item.TubY8u9hJy8MbDEK::AZMtZ5kqFTcXBZ2N": { file: "jb2a.template_circle.vortex.intro.blue", forma: "lanciatore" }, // Temporal Enforcer · Instant Rewind — Spend Fear
  "Actor.VSdS3N5Kh6uratv9.Item.VUmRd6qE30M7wy7v::aDM9B189dj0PFVhK": { file: "jb2a.icosahedron.rune.above.blueyellow", forma: "lanciatore" }, // Temporal Enforcer · Invert Polarity — Spend Fear
  "Actor.pMuXGCSOQaxpi5tb::bAM5u66XszRmjaT8": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Volcanic Dragon: Ashen Tyrant — Claws and Teeth
  "Actor.pMuXGCSOQaxpi5tb.Item.saz3Vr0xgfAl10tU::cvhKUhLycuEeloKH": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Volcanic Dragon: Ashen Tyrant · Relentless (4) — Spotlight: Relentless
  "Actor.pMuXGCSOQaxpi5tb.Item.8d4bCyFvNq3NymUK::nIBoqkOFWx0vpbnj": { file: "jb2a.markers.drop.red.01", forma: "lanciatore" }, // Volcanic Dragon: Ashen Tyrant · Cornered — Mark Stress
  "Actor.pMuXGCSOQaxpi5tb.Item.LeOYwp1GhN59NIHa::q6gbeIrGMII6IeiM": { file: "jb2a.fumes.04.complete.grey", forma: "bersaglio" }, // Volcanic Dragon: Ashen Tyrant · Ashes to Ashes — Lose Hope
  "Actor.pMuXGCSOQaxpi5tb.Item.AXhSVGL33i0j6DAw::3glUQAcsLBcCumnS": { file: "jb2a.melee_generic.whirlwind.01.orange", forma: "lanciatore" }, // Volcanic Dragon: Ashen Tyrant · Desperate Rampage — Attack
  "Actor.pMuXGCSOQaxpi5tb.Item.ggCol5LQ2ZpeQjly::UrD4A68IBJgyfvvt": { file: "jb2a.smoke.plumes.01.grey", forma: "lanciatore" }, // Volcanic Dragon: Ashen Tyrant · Ashen Cloud — Spend Fear
  "Actor.pMuXGCSOQaxpi5tb.Item.uWiyaJPXcoW06pOM::OznXxmwiPwzuFPQZ": { file: "jb2a.falling_rocks.top.2x1.grey", forma: "bersaglio" }, // Volcanic Dragon: Ashen Tyrant · Apocalyptic Thrasing — Roll Save
  "Actor.pMuXGCSOQaxpi5tb.Item.uWiyaJPXcoW06pOM::rZ7IwBnDzw7VmBT6": { file: "jb2a.extras.tmfx.runes.circle.simple.evocation", forma: "lanciatore" }, // Volcanic Dragon: Ashen Tyrant · Apocalyptic Thrasing — Start Countdown
  "Actor.eArAPuB38CNR0ZIM::bAM5u66XszRmjaT8": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Volcanic Dragon: Molten Scourge — Lava-Coated Claws
  "Actor.eArAPuB38CNR0ZIM.Item.DVtxHnbvNDz2POSD::ngzXlah4Lv3eK6i5": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Volcanic Dragon: Molten Scourge · Relentless (3) — Spotlight: Relentless
  "Actor.eArAPuB38CNR0ZIM.Item.bpjpHxf6tj4i3H4r::YNw3E6309te5JPoM": { file: "jb2a.impact.010.orange", forma: "bersaglio" }, // Volcanic Dragon: Molten Scourge · Shattering Might — Attack
  "Actor.eArAPuB38CNR0ZIM.Item.NuksKUrbf4yj4vR2::OpwKa8tQQoaEIZiS": { file: "jb2a.eruption.orange.01", forma: "lanciatore" }, // Volcanic Dragon: Molten Scourge · Eruption — Roll Save
  "Actor.eArAPuB38CNR0ZIM.Item.2mK8kxfp2WBUeBri::OhrssSQhmciZt1Rm": { file: "jb2a.cast_generic.fire.01.orange", forma: "lanciatore" }, // Volcanic Dragon: Molten Scourge · Volcanic Breath — Roll d10
  "Actor.eArAPuB38CNR0ZIM.Item.2mK8kxfp2WBUeBri::LBNvfABGWcrygpQM": { file: "jb2a.template_line.lava-spout.001.001.complete.orangeyellow", forma: "proiettile" }, // Volcanic Dragon: Molten Scourge · Volcanic Breath — Roll Save
  "Actor.eArAPuB38CNR0ZIM.Item.3VdQdUDULZCQPvLZ::WtrAv8peQ71OBoO1": { file: "jb2a.impact.fire.01.orange", forma: "bersaglio" }, // Volcanic Dragon: Molten Scourge · Lava Splash — Damage
  "Actor.eArAPuB38CNR0ZIM.Item.qYFoyDSdZ5X2h245::cFqFjemAfAjB0OB0": { file: "jb2a.fireball.explosion.orange", forma: "lanciatore" }, // Volcanic Dragon: Molten Scourge · Ashen Vengeance — Transform
  "Actor.ladm7wykhZczYzrQ::bAM5u66XszRmjaT8": { file: "jb2a.claws.400px.red", forma: "bersaglio" }, // Volcanic Dragon: Obsidian Predator — Obsidian Claws
  "Actor.ladm7wykhZczYzrQ.Item.hnr2drwGFJAXRJLo::XuhmupOVJj8ae6q0": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Volcanic Dragon: Obsidian Predator · Relentless (2) — Spotlight: Relentless
  "Actor.ladm7wykhZczYzrQ.Item.8bMOItTuL7PfAYcJ::23y0BoufIgNq62j9": { file: "jb2a.impact.ground_crack.02.orange", forma: "lanciatore" }, // Volcanic Dragon: Obsidian Predator · Avalanche Tail — Attack
  "Actor.ladm7wykhZczYzrQ.Item.5wLxyaWJuUhkx1EX::OpAT9nxlbgvnhdBg": { file: "jb2a.impact.ground_crack.orange.01", forma: "bersaglio" }, // Volcanic Dragon: Obsidian Predator · Dive-Bomb — Attack
  "Actor.ladm7wykhZczYzrQ.Item.5llfnRwO7mfzDFgT::OxGkCGgIl4vGFufD": { file: "jb2a.flames.04.complete.orange", forma: "lanciatore" }, // Volcanic Dragon: Obsidian Predator · Erupting Rage — Transform
  "Actor.vXYRAVdCo7812o1g::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Water Mother — Bite
  "Actor.vXYRAVdCo7812o1g.Item.3R0HRksFmQaKyLk4::dMFcOcfg2FPs0yTJ": { file: "jb2a.template_circle.aura.03.inward.003.complete.combined.blue", forma: "lanciatore" }, // Water Mother · Eat the World — Spend Fear
  "Actor.vXYRAVdCo7812o1g.Item.2jD66IGYZIZF385K::SazYQVwEPYDJQwse": { file: "jb2a.markers.chain.standard.complete.02.red", forma: "bersaglio" }, // Water Mother · Constrict — Mark Stress
  "Actor.vXYRAVdCo7812o1g.Item.2jD66IGYZIZF385K::ETaF5f5bWNjbNXy1": { file: "jb2a.liquid.splash02.red", forma: "bersaglio" }, // Water Mother · Constrict — Constrict Damage
  "Actor.vXYRAVdCo7812o1g.Item.zL85SlJ9d11PI9mu::afWkvNCdshLHitfm": { file: "jb2a.markers.poison.dark_green.02", forma: "bersaglio" }, // Water Mother · Venom Surge — Spend Fear
  "Actor.wZA5KQUjIRhnUFrl::qHEFFbkvLvbm9VmI": { file: "jb2a.shortsword.melee.01.white", forma: "bersaglio" }, // Wyrmfiend — Weapons from the Hoard
  "Actor.wZA5KQUjIRhnUFrl.Item.6pSw0TNcqS5hRJz3::BRa8Urat5JwUGcet": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Wyrmfiend · Venomous Bite — Spend Fear
  "Actor.wZA5KQUjIRhnUFrl.Item.8sEbqLIwwCPYj6Oo::3u2uiXYRufuM5Kmr": { file: "jb2a.shortsword.melee.01.white", forma: "bersaglio" }, // Wyrmfiend · Group Attack — Spend Fear
  "Actor.qEzuNntzQ1fRInTm::qHEFFbkvLvbm9VmI": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Wyrmlings — Tiny Jaws & Claws
  "Actor.qEzuNntzQ1fRInTm.Item.0V472TOtSicWIeo5::kqihDddZhb4VH6iO": { file: "jb2a.markers.drop.red.02", forma: "lanciatore" }, // Wyrmlings · Ravenous — Spend Fear
  "Actor.qEzuNntzQ1fRInTm.Item.4YHJFU5RYQJqHK7a::88Z2Jw944EIKjuG2": { file: "jb2a.bite.400px.red", forma: "bersaglio" }, // Wyrmlings · Overwhelm — Mark Stress
  "Actor.K0VZLi95DzTfdfso::qHEFFbkvLvbm9VmI": { file: "jb2a.greatclub.standard.white", forma: "bersaglio" }, // Xero The Castle Killer — Tail Swipe
  "Actor.K0VZLi95DzTfdfso.Item.fIwOU4wmQqE7ftDy::MgNpvDKZpcnPombb": { file: "jb2a.impact.ground_crack.orange.03", forma: "lanciatore" }, // Xero The Castle Killer · Gigaton Stomp — Spend Fear
  "Actor.K0VZLi95DzTfdfso.Item.csNQFwxN8PQH14lT::BVDbck6vUhYUz8Bx": { file: "jb2a.smoke.puff.side.grey", forma: "lanciatore" }, // Xero The Castle Killer · Power Slide — Mark Stress
  "Actor.K0VZLi95DzTfdfso.Item.ZfCW3kRWg5bXFDes::ExvMjIBxdm4FY7LJ": { file: "jb2a.energy_strands.in.green.01", forma: "lanciatore" }, // Xero The Castle Killer · Radioactive Breath — Charge
  "Actor.K0VZLi95DzTfdfso.Item.ZfCW3kRWg5bXFDes::ulyNsxBBqLTslNSJ": { file: "jb2a.disintegrate.green", forma: "proiettile" }, // Xero The Castle Killer · Radioactive Breath — Unleash
  "Actor.K0VZLi95DzTfdfso.Item.fi9EpIvWbWdOy0Cx::uO3rqVPX2ZmkApYi": { file: "jb2a.healing_generic.400px.green", forma: "lanciatore" }, // Xero The Castle Killer · Regeneration — Spend Fear
  "Actor.YhJrP7rTBiRdX5Fp::sCB2ScV3lu5cLgeI": { file: "jb2a.melee_generic.creature_attack.claw.001.red", forma: "bersaglio" }, // Zombie Legion — Undead Hands
  "Actor.YhJrP7rTBiRdX5Fp.Item.fCYLZKeTn0YSpVDI::IACoLeO6VmnK0qkW": { file: "jb2a.extras.tmfx.outpulse.circle.01.normal", forma: "lanciatore" }, // Zombie Legion · Relentless (2) — Spotlight: Relentless
  "Actor.YhJrP7rTBiRdX5Fp.Item.d5Vilu9cUub1O6TD::TJ9DhHRuqK5X5Zx5": { file: "jb2a.melee_generic.creature_attack.claw.001.red", forma: "auto" }, // Zombie Legion · Overwhelm — Mark Stress
});
