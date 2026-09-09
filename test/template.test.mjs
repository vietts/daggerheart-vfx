import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

/*
 * HandlebarsApplicationMixin pretende che ogni PART renda UN SOLO elemento radice. Due <div>
 * fratelli in cima al template e la finestra non si apre, con un errore visibile solo in
 * console. E' costato mezz'ora di diagnosi al buio in fbb-atlante; qui lo prende un test.
 */
function contaRadici(html) {
  const senzaCommenti = html.replace(/<!--[\s\S]*?-->/g, "").trim();
  let profondita = 0, radici = 0;
  const tag = /<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>/g;
  let m;
  while ((m = tag.exec(senzaCommenti))) {
    const [, chiusura, nome, , autochiusura] = m;
    const vuoto = autochiusura === "/" || ["br", "hr", "img", "input"].includes(nome.toLowerCase());
    if (chiusura) { profondita--; continue; }
    if (profondita === 0) radici++;
    if (!vuoto) profondita++;
  }
  return radici;
}

/*
 * Il caso negativo prima di quello vero: senza, `contaRadici` passerebbe anche se restituisse
 * sempre 1, cioe' il presidio non presidierebbe niente. E il guasto che protegge si manifesta
 * come "la finestra non si apre", con l'errore solo in console.
 */
test("contaRadici sa contare piu' di una radice", () => {
  assert.equal(contaRadici("<div>uno</div><div>due</div>"), 2);
  assert.equal(contaRadici("<div><p>solo annidati</p><p>qui</p></div>"), 1);
  assert.equal(contaRadici("<div>uno</div><input name=\"due\"><br>"), 3);
  assert.equal(contaRadici("<!-- un commento non e' una radice --><div>uno</div>"), 1);
});

test("il template della finestra ha una sola radice", () => {
  const html = readFileSync(
    fileURLToPath(new URL("../module/apps/configurazione.hbs", import.meta.url)), "utf8");
  assert.equal(contaRadici(html), 1);
});
