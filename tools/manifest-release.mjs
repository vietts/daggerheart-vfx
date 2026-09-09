/*
 * Allinea module.json al tag che si sta rilasciando: versione, download e manifest.
 *
 * Perche' e' un file e non tre righe dentro il workflow: la stessa logica, scritta inline in
 * un `node -e`, ha gia' prodotto un bug vero (una destrutturazione sbagliata di process.argv)
 * che nessun test poteva prendere, in un repo che ha una cinquantina di test su funzioni pure.
 * Ed e' il posto peggiore dove sbagliare, perche' l'errore si vede solo dopo aver pubblicato.
 *
 * `manifest` va riscritto come `download`, non lasciato a mano: e' il campo che Foundry
 * ricontrolla per gli aggiornamenti automatici e il primo che guarda il registro di
 * foundryvtt.com. Se il repo nasce sotto un owner diverso da quello scritto nel file, una
 * release con `download` giusto e `manifest` sbagliato si installa e poi non si aggiorna mai
 * piu', per nessuno.
 *
 * Sta fuori da module/, quindi non finisce nel pacchetto .zip.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const PERCORSO_PREDEFINITO = "module/module.json";

/* Il tag e' `v0.1.0`, la versione del manifest e' `0.1.0`: una sola `v` iniziale. */
export function versioneDaTag(tag) {
  if (typeof tag !== "string" || !tag.trim()) throw new Error("serve un tag, per esempio v0.1.0");
  const versione = tag.trim().replace(/^v/, "");
  if (!/^\d+\.\d+\.\d+/.test(versione)) throw new Error(`tag non riconosciuto: ${tag}`);
  return versione;
}

export function manifestDiRilascio(manifest, tag, repo) {
  const versione = versioneDaTag(tag);
  if (typeof repo !== "string" || !/^[^/\s]+\/[^/\s]+$/.test(repo))
    throw new Error(`serve il repo nella forma owner/nome, ricevuto: ${repo}`);

  return {
    ...manifest,
    version: versione,
    manifest: `https://github.com/${repo}/releases/latest/download/module.json`,
    download: `https://github.com/${repo}/releases/download/v${versione}/module.zip`
  };
}

export function riscrivi(percorso, tag, repo) {
  const manifest = JSON.parse(readFileSync(percorso, "utf8"));
  const nuovo = manifestDiRilascio(manifest, tag, repo);
  writeFileSync(percorso, `${JSON.stringify(nuovo, null, 2)}\n`);
  return nuovo;
}

/* argv[0] e' node, argv[1] e' questo file: gli argomenti veri cominciano da 2. E' esattamente
   il punto in cui il `node -e` di prima sbagliava. */
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [tag, repo, percorso = PERCORSO_PREDEFINITO] = process.argv.slice(2);
  try {
    const nuovo = riscrivi(percorso, tag, repo);
    console.log(`${percorso}: version ${nuovo.version}`);
    console.log(`  manifest ${nuovo.manifest}`);
    console.log(`  download ${nuovo.download}`);
  } catch (e) {
    console.error(`manifest-release: ${e.message}`);
    console.error("uso: node tools/manifest-release.mjs <tag> <owner/repo> [percorso]");
    process.exit(1);
  }
}
