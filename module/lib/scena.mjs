/*
 * Le tre geometrie, e nient'altro. Sequencer arriva come parametro invece che dal globale,
 * cosi' anche questo file si prova fuori da Foundry con una Sequence finta.
 *
 * Nota su `proiettile`: i file ranged di JB2A esistono in cinque distanze (05ft…90ft) e non
 * vanno scelti a mano. Sequencer ha `rangeFind` dentro: gli si passa il ramo padre
 * (jb2a.magic_missile.purple) e sceglie lui il file giusto per la distanza fra i due token.
 */

export function costruisci({ file, forma, origine, bersagli }, Sequence) {
  const s = new Sequence();

  if (forma === "proiettile") {
    for (const b of bersagli) s.effect().file(file).atLocation(origine).stretchTo(b);
  } else if (forma === "bersaglio") {
    for (const b of bersagli) s.effect().file(file).atLocation(b).scaleToObject(2);
  } else {
    s.effect().file(file).atLocation(origine).scaleToObject(1.6);
  }

  return s;
}
