import { MODULE_ID, SETTING_MAPPA, FORME } from "../lib/costanti.mjs";
import { righeDaCarte, precompila, righeImportabili } from "../lib/catalogo.mjs";
import { risolviForma } from "../lib/decisione.mjs";
import { costruisci } from "../lib/scena.mjs";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

/* Il compendio delle carte di dominio del system. La finestra non ha altra fonte. */
const COMPENDIO = "daggerheart.domains";

export class ConfigurazioneVFX extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS = {
    id: `${MODULE_ID}-configurazione`,
    tag: "div",
    window: { title: "DHVFX.finestra.titolo", resizable: true },
    position: { width: 780, height: 640 }
  };

  /* Una PART, una radice. Vedi test/template.test.mjs. */
  static PARTS = { corpo: { template: `modules/${MODULE_ID}/apps/configurazione.hbs` } };

  /* Coda delle scritture sulla mappa: due `change` ravvicinati su righe diverse leggerebbero
     altrimenti la stessa mappa e il secondo sovrascriverebbe il primo. Un fallimento non blocca
     le scritture successive: la coda si "ripulisce" prima di mettersi in fila di nuovo. */
  #codaScritture = Promise.resolve();

  /* Le 210 carte del compendio si leggono una volta sola per finestra: un Precompila ne
     faceva tre letture (contesto iniziale, precompila, render finale). */
  #carte = null;

  /*
   * L'UNICA porta sulla mappa. Ci passano tutte e tre le scritture — una riga, Precompila,
   * Importa — perche' altrimenti si perdono dati sulla sequenza di click piu' naturale che
   * esista: cliccare un bottone della barra mentre un <input name=file> ha una modifica non
   * committata fa scattare `change` sul blur PRIMA del click. La #salvaRiga si accoda e resta
   * in attesa del round-trip di settings.set, durante il quale settings.get restituisce ancora
   * il valore vecchio; il click leggerebbe stantio e riscriverebbe, e siccome poi si fa
   * render() l'utente vedrebbe la riga appena digitata sparire sotto i propri occhi.
   *
   * La regola che rende la fila sufficiente, e che vale per ogni funzione passata di qui:
   * fra il `get` e il `set` della mappa non ci deve mai essere un `await` che non sia il
   * `set` stesso. Tutto il resto (leggere il compendio, aprire un dialogo, fare il parse di
   * un JSON) si fa PRIMA, fuori dalla coda.
   */
  #inCoda(fn) {
    const p = this.#codaScritture.then(() => {}, () => {}).then(fn);
    this.#codaScritture = p;
    return p;
  }

  #mappa() {
    return game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {};
  }

  async _prepareContext() {
    const righe = righeDaCarte(await this.#carteDelCompendio(), this.#mappa());
    return {
      righe,
      forme: FORME,
      domini: [...new Set(righe.map(r => r.dominio))].sort(),
      conteggio: {
        totale: righe.length,
        assegnate: righe.filter(r => r.file).length,
        vuote: righe.filter(r => !r.file).length
      }
    };
  }

  /*
   * Se il compendio non c'e' (system aggiornato, pack rinominato, mondo sbagliato) la finestra
   * si apriva vuota e muta: `0 · 0 · 0` e nient'altro, che si legge come "il modulo e' rotto".
   * La cache tiene anche l'assenza, cosi' la notifica non si ripete a ogni render.
   */
  async #carteDelCompendio() {
    if (this.#carte) return this.#carte;
    const pack = game.packs.get(COMPENDIO);
    if (!pack) {
      ui.notifications.error(game.i18n.format("DHVFX.finestra.compendioAssente", { pack: COMPENDIO }));
      return (this.#carte = []);
    }
    const documenti = await pack.getDocuments();
    return (this.#carte = documenti.map(d => d.toObject()));
  }

  /*
   * Gli ascoltatori si agganciano una volta sola, non a ogni render: il mixin non sostituisce
   * la radice fra un render e l'altro, solo il contenuto della PART, quindi la delega su
   * `radice` sopravvive a `this.render()`. Agganciarli in _onRender (chiamato a ogni render)
   * li raddoppierebbe ogni volta che Precompila o Importa richiamano render(): il primo Prova
   * dopo un Precompila giocherebbe l'effetto due volte, il secondo Precompila ne aggiungerebbe
   * altri due, e cosi' via.
   */
  _onFirstRender(context, options) {
    super._onFirstRender(context, options);
    const radice = this.element;

    radice.addEventListener("click", ev => {
      const bottone = ev.target.closest("button[data-azione]");
      if (!bottone) return;
      const riga = bottone.closest(".dhvfx-riga");
      const azione = bottone.dataset.azione;

      if (azione === "precompila") return this.#eseguire(this.#precompila());
      if (azione === "esporta") return this.#eseguire(this.#esporta());
      if (azione === "importa") return this.#eseguire(this.#importa());
      if (azione === "sfoglia") return Sequencer.DatabaseViewer.show();
      if (azione === "prova") return this.#eseguire(this.#prova(riga));
    });

    /* Il salvataggio e' immediato: una finestra con 284 righe e un bottone Salva in fondo e'
       un modo per perdere il lavoro. */
    radice.addEventListener("change", ev => {
      if (ev.target.matches("[name=dominio]")) return this.#filtra();
      const riga = ev.target.closest(".dhvfx-riga");
      if (riga) this.#eseguire(this.#salvaRiga(riga));
    });

    radice.addEventListener("input", ev => {
      if (ev.target.matches("[name=cerca]")) this.#filtra();
    });
  }

  /*
   * Ogni azione della finestra parte da un handler di evento, quindi nessuno la aspetta: senza
   * questo, una `game.settings.set` che cade sparisce senza che l'utente se ne accorga, e il
   * campo continua a mostrare un valore che in realta' non e' stato salvato.
   */
  #eseguire(promessa) {
    Promise.resolve(promessa).catch(e => {
      console.error(`[${MODULE_ID}] azione fallita:`, e);
      ui.notifications.error(game.i18n.localize("DHVFX.finestra.azioneFallita"));
    });
  }

  #filtra() {
    const dominio = this.element.querySelector("[name=dominio]").value;
    const cerca = this.element.querySelector("[name=cerca]").value.toLowerCase();
    for (const riga of this.element.querySelectorAll(".dhvfx-riga")) {
      const testo = riga.querySelector(".dhvfx-titolo").textContent.toLowerCase();
      const ok = (!dominio || riga.dataset.dominio === dominio) && (!cerca || testo.includes(cerca));
      riga.hidden = !ok;
    }
  }

  /*
   * I valori si leggono subito (sincroni, prima di mettersi in coda): la riga potrebbe non
   * esistere piu' se nel frattempo arriva un render, e la coda serializza solo la scrittura,
   * non la lettura del DOM.
   */
  #salvaRiga(riga) {
    const chiave = riga.dataset.chiave;
    const file = riga.querySelector("[name=file]").value.trim();
    const forma = riga.querySelector("[name=forma]").value;

    return this.#inCoda(() => {
      const mappa = { ...this.#mappa() };
      if (file) mappa[chiave] = { file, forma: forma || "auto" };
      else delete mappa[chiave];
      return game.settings.set(MODULE_ID, SETTING_MAPPA, mappa);
    });
  }

  async #precompila() {
    /* La lettura del compendio sta fuori dalla coda: e' una lettura, e sono centinaia di ms
       durante i quali la mappa non deve restare "prenotata" da nessuno. */
    const carte = await this.#carteDelCompendio();

    const aggiunte = await this.#inCoda(() => {
      const mappa = this.#mappa();
      const nuova = precompila(righeDaCarte(carte, mappa), mappa);
      const n = Object.keys(nuova).length - Object.keys(mappa).length;
      return game.settings.set(MODULE_ID, SETTING_MAPPA, nuova).then(() => n);
    });

    ui.notifications.info(game.i18n.format("DHVFX.finestra.precompilate", { n: aggiunte }));
    this.render();
  }

  /*
   * Prova: gioca l'effetto della riga sul token selezionato, senza passare dalla scheda.
   * E' il modo in cui si sceglie un effetto — assegnarlo alla cieca e scoprirlo al tavolo
   * non e' un modo.
   *
   * La forma si risolve con la stessa funzione pura che usa il flusso di gioco vero
   * (decisione.mjs): due copie della stessa regola potrebbero divergere, e allora Prova
   * mostrerebbe una cosa diversa da quello che succede al tavolo.
   */
  async #prova(riga) {
    const file = riga.querySelector("[name=file]").value.trim();
    if (!file) return ui.notifications.warn(game.i18n.localize("DHVFX.finestra.senzaFile"));
    const origine = canvas.tokens.controlled[0];
    if (!origine) return ui.notifications.warn(game.i18n.localize("DHVFX.finestra.senzaToken"));

    /* Senza bersagli, `proiettile` e `bersaglio` costruirebbero una Sequence vuota: premi
       Prova e non succede niente, che sul bottone che la spec chiama "la funzione che conta"
       e' il peggior esito possibile — non distingui "file sbagliato" da "manca il bersaglio".
       `auto` non arriva mai qui senza bersagli: risolviForma lo fa diventare `lanciatore`. */
    const bersagli = Array.from(game.user.targets);
    const forma = risolviForma(riga.querySelector("[name=forma]").value || "auto", bersagli);
    if (forma !== "lanciatore" && !bersagli.length)
      return ui.notifications.warn(game.i18n.localize("DHVFX.finestra.senzaBersaglio"));

    await costruisci({ file, forma, origine, bersagli }, Sequence).play();
  }

  async #esporta() {
    foundry.utils.saveDataToFile(JSON.stringify(this.#mappa(), null, 2), "application/json",
      `${MODULE_ID}-mappa.json`);
  }

  /*
   * L'import sostituisce l'intera mappa: un fallimento muto qui costerebbe tutte le righe
   * gia' assegnate. DialogV2.prompt rigetta la promessa quando l'utente annulla (non e' un
   * errore), e un JSON malformato o di forma sbagliata deve fermarsi con un messaggio, non
   * con un'eccezione persa o una mappa corrotta.
   *
   * Il dialogo e il parse stanno fuori dalla coda: dentro ci va la sola scrittura.
   */
  async #importa() {
    let contenuto;
    try {
      contenuto = await foundry.applications.api.DialogV2.prompt({
        window: { title: game.i18n.localize("DHVFX.finestra.importa") },
        content: `<textarea name="json" rows="12" style="width:100%"></textarea>`,
        ok: { callback: (ev, bottone) => bottone.form.elements.json.value }
      });
    } catch {
      return; // annullato dall'utente
    }
    if (!contenuto) return;

    let mappa;
    try {
      mappa = JSON.parse(contenuto);
    } catch {
      return ui.notifications.error(game.i18n.localize("DHVFX.finestra.importoNonValido"));
    }
    if (typeof mappa !== "object" || mappa === null || Array.isArray(mappa))
      return ui.notifications.error(game.i18n.localize("DHVFX.finestra.importoNonValido"));

    /* Il contenitore non basta: le righe si guardano una per una (lib/catalogo.mjs), e se
       non ne resta nessuna non si scrive niente. L'import sostituisce l'intera mappa e non
       c'e' annulla: un incolla sbagliato non deve poter cancellare tutte le assegnazioni. */
    const { mappa: buone, scartate } = righeImportabili(mappa);
    const n = Object.keys(buone).length;
    if (!n) return ui.notifications.error(game.i18n.localize("DHVFX.finestra.importoNonValido"));

    await this.#inCoda(() => game.settings.set(MODULE_ID, SETTING_MAPPA, buone));
    ui.notifications.info(scartate
      ? game.i18n.format("DHVFX.finestra.importataConScarti", { n, scartate })
      : game.i18n.localize("DHVFX.finestra.importata"));
    this.render();
  }
}
