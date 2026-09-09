import { MODULE_ID, SETTING_MAPPA, FORME } from "../lib/costanti.mjs";
import { righeDaCarte, precompila } from "../lib/catalogo.mjs";
import { costruisci } from "../lib/scena.mjs";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

export class ConfigurazioneVFX extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS = {
    id: "daggerheart-vfx-configurazione",
    tag: "div",
    window: { title: "DHVFX.finestra.titolo", resizable: true },
    position: { width: 780, height: 640 },
    actions: {}
  };

  /* Una PART, una radice. Vedi test/template.test.mjs. */
  static PARTS = { corpo: { template: `modules/${MODULE_ID}/apps/configurazione.hbs` } };

  async _prepareContext() {
    const mappa = game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {};
    const carte = await this.#carteDelCompendio();
    const righe = righeDaCarte(carte, mappa);
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

  async #carteDelCompendio() {
    const pack = game.packs.get("daggerheart.domains");
    if (!pack) return [];
    const documenti = await pack.getDocuments();
    return documenti.map(d => d.toObject());
  }

  _onRender(context, options) {
    super._onRender(context, options);
    const radice = this.element;

    radice.addEventListener("click", async ev => {
      const bottone = ev.target.closest("button[data-azione]");
      if (!bottone) return;
      const riga = bottone.closest(".dhvfx-riga");
      const azione = bottone.dataset.azione;

      if (azione === "precompila") return this.#precompila();
      if (azione === "esporta") return this.#esporta();
      if (azione === "importa") return this.#importa();
      if (azione === "sfoglia") return Sequencer.DatabaseViewer.show();
      if (azione === "prova") return this.#prova(riga);
    });

    /* Il salvataggio e' immediato: una finestra con 284 righe e un bottone Salva in fondo e'
       un modo per perdere il lavoro. */
    radice.addEventListener("change", ev => {
      const riga = ev.target.closest(".dhvfx-riga");
      if (riga) this.#salvaRiga(riga);
    });

    radice.querySelector("[name=dominio]").addEventListener("change", () => this.#filtra());
    radice.querySelector("[name=cerca]").addEventListener("input", () => this.#filtra());
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

  async #salvaRiga(riga) {
    const mappa = { ...(game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {}) };
    const file = riga.querySelector("[name=file]").value.trim();
    const forma = riga.querySelector("[name=forma]").value;
    if (file) mappa[riga.dataset.chiave] = { file, forma: forma || "auto" };
    else delete mappa[riga.dataset.chiave];
    await game.settings.set(MODULE_ID, SETTING_MAPPA, mappa);
  }

  async #precompila() {
    const mappa = game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {};
    const righe = righeDaCarte(await this.#carteDelCompendio(), mappa);
    const nuova = precompila(righe, mappa);
    const aggiunte = Object.keys(nuova).length - Object.keys(mappa).length;
    await game.settings.set(MODULE_ID, SETTING_MAPPA, nuova);
    ui.notifications.info(game.i18n.format("DHVFX.finestra.precompilate", { n: aggiunte }));
    this.render();
  }

  /*
   * Prova: gioca l'effetto della riga sul token selezionato, senza passare dalla scheda.
   * E' il modo in cui si sceglie un effetto — assegnarlo alla cieca e scoprirlo al tavolo
   * non e' un modo.
   */
  async #prova(riga) {
    const file = riga.querySelector("[name=file]").value.trim();
    if (!file) return ui.notifications.warn(game.i18n.localize("DHVFX.finestra.senzaFile"));
    const origine = canvas.tokens.controlled[0];
    if (!origine) return ui.notifications.warn(game.i18n.localize("DHVFX.finestra.senzaToken"));

    const bersagli = Array.from(game.user.targets);
    let forma = riga.querySelector("[name=forma]").value || "auto";
    if (forma === "auto") forma = bersagli.length ? "bersaglio" : "lanciatore";
    if (forma === "proiettile" && !bersagli.length)
      return ui.notifications.warn(game.i18n.localize("DHVFX.finestra.senzaBersaglio"));

    await costruisci({ file, forma, origine, bersagli }, Sequence).play();
  }

  async #esporta() {
    const mappa = game.settings.get(MODULE_ID, SETTING_MAPPA) ?? {};
    foundry.utils.saveDataToFile(JSON.stringify(mappa, null, 2), "application/json",
      `${MODULE_ID}-mappa.json`);
  }

  async #importa() {
    const contenuto = await foundry.applications.api.DialogV2.prompt({
      window: { title: game.i18n.localize("DHVFX.finestra.importa") },
      content: `<textarea name="json" rows="12" style="width:100%"></textarea>`,
      ok: { callback: (ev, bottone) => bottone.form.elements.json.value }
    });
    if (!contenuto) return;
    await game.settings.set(MODULE_ID, SETTING_MAPPA, JSON.parse(contenuto));
    ui.notifications.info(game.i18n.localize("DHVFX.finestra.importata"));
    this.render();
  }
}
