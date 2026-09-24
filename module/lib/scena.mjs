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

/*
 * La variante per le tile di Monk's: li' non c'e' una carta che dice la forma, la sceglie chi
 * prepara la tile. Con delle destinazioni e' un proiettile da ogni origine a ognuna di esse;
 * senza, l'effetto si appoggia su ogni origine. Tinta e scala sono facoltative.
 */
export function costruisciLibero({ file, origini, destinazioni = [], tinta = null, scala = 1 }, Sequence) {
  const s = new Sequence();
  const rifinisci = e => (tinta ? e.tint(tinta) : e);

  for (const o of origini) {
    if (destinazioni.length) {
      for (const d of destinazioni) rifinisci(s.effect().file(file).atLocation(o).stretchTo(d));
    } else {
      rifinisci(s.effect().file(file).atLocation(o).scaleToObject(scala));
    }
  }

  return s;
}
