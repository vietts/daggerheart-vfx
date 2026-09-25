/*
 * Come si chiama un oggetto D&D, per una mappa che deve sopravvivere a compendi diversi.
 *
 * Il fatto che regge tutto, verificato sui sorgenti di dnd5e 6.0.3: Magic Missile dell'SRD
 * 2014 e quello del 2024 hanno _id e id di activity diversi, ma lo stesso `identifier`
 * (magic-missile). E la Scimitar di un goblin ha identifier `scimitar` come quella del PHB.
 * Quindi la chiave e' per oggetto, non per activity: `dnd5e.<tipo>.<identifier>`.
 *
 * Accetta documenti vivi (dall'hook, dall'API) e oggetti sorgente (dalla finestra, via
 * toObject): per questo legge le activity con elencoAzioni e i tipi di danno con Array.from.
 */

import { elencoAzioni } from "../../elenco.mjs";

const TIPI = new Set(["spell", "weapon", "feat", "consumable"]);
/* In ordine di importanza: l'activity "principale" e' la prima di questo elenco che c'e'. */
const ORDINE = ["attack", "save", "damage", "heal", "cast", "summon", "utility"];
const ANIMABILI = new Set(ORDINE);
const AREE = new Set(["sphere", "cylinder", "radius", "circle", "cube", "square"]);
const TESE = new Set(["cone", "line"]);
const RAGGIO = new Set(["sphere", "cylinder", "radius", "circle"]);

/*
 * Lo slug che dnd5e usa quando un oggetto non ha identifier (formatIdentifier: "a/b" diventa
 * "a-b", poi slugify strict). Le lettere accentate si spogliano dell'accento, come fa la
 * CHAR_MAP di Foundry per quelle latine.
 */
export function identificatore(item) {
  if (typeof item?.identifier === "string" && item.identifier) return item.identifier;
  if (item?.system?.identifier) return item.system.identifier;
  const nome = item?.name;
  if (!nome) return null;
  return nome.replaceAll(/(\w+)([\\|/])(\w+)/g, "$1-$3")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .trim().toLowerCase()
    .replace(/[\s-]+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function gruppo(item) {
  switch (item?.type) {
    case "spell": {
      const livello = Number(item?.system?.level ?? 0);
      return livello === 0 ? "trucchetti" : `incantesimi ${livello}°`;
    }
    case "weapon": return "armi";
    case "consumable": return "consumabili";
    case "feat": return (item?._daMostro || item?.parent?.type === "npc") ? "mostri" : "privilegi";
    default: return null;
  }
}

const tipiDanno = attivita => (attivita?.damage?.parts ?? []).flatMap(p => Array.from(p?.types ?? []));

/* Un'activity che non fa override eredita la sagoma dall'oggetto. */
function sagomaDi(item, attivita) {
  const t = attivita?.target?.override ? attivita.target.template : item?.system?.target?.template;
  if (!t?.type) return null;
  const size = Number(t.size);
  return { tipo: t.type, size: Number.isFinite(size) && size > 0 ? size : null };
}

/*
 * Le armi del PHB lasciano spesso vuoto attack.type.value e lo ricavano dall'arma: il tipo
 * che finisce in R (simpleR, martialR) e' a distanza.
 */
function tipoAttacco(item, attivita) {
  if (attivita?.type !== "attack") return null;
  const v = attivita?.attack?.type?.value;
  if (v === "melee" || v === "ranged") return v;
  const arma = item?.system?.type?.value;
  if (typeof arma === "string" && arma.endsWith("R")) return "ranged";
  if (typeof arma === "string" && arma.endsWith("M")) return "melee";
  return null;
}

export function formaDedotta({ sagoma, gittata, attacco }) {
  if (sagoma && TESE.has(sagoma.tipo)) return "proiettile";
  if (sagoma && AREE.has(sagoma.tipo)) return "area";
  if (gittata === "self") return "lanciatore";
  if (attacco === "ranged") return "proiettile";
  if (attacco === "melee") return "bersaglio";
  return "auto";
}

export function diametro(sagoma) {
  if (!sagoma?.size) return null;
  if (RAGGIO.has(sagoma.tipo)) return 2 * sagoma.size;
  if (sagoma.tipo === "cube" || sagoma.tipo === "square") return sagoma.size;
  return null;
}

export function datiAzione(item) {
  const attivita = elencoAzioni(item?.system?.activities).filter(a => ANIMABILI.has(a.type));
  const principale = ORDINE.map(t => attivita.find(a => a.type === t)).find(Boolean) ?? null;
  const conDanno = attivita.find(a => tipiDanno(a).length) ?? null;
  const identifier = identificatore(item);

  const dati = {
    categoria: "dnd5e",
    tipoItem: item?.type ?? null,
    identifier,
    idAzione: null,
    nomeCarta: item?.name ?? null,
    nomeAzione: null,
    dominio: gruppo(item),
    tipo: principale?.type ?? null,
    animabile: TIPI.has(item?.type) && attivita.length > 0 && !!identifier,
    danni: conDanno ? tipiDanno(conDanno) : [],
    cura: attivita.some(a => a.type === "heal"),
    scuola: item?.system?.school ?? null,
    baseItem: item?.system?.type?.baseItem || null,
    naturale: item?.system?.type?.value === "natural",
    sagoma: sagomaDi(item, principale),
    gittata: item?.system?.range?.units ?? null,
    attacco: tipoAttacco(item, principale)
  };
  dati.formaDedotta = formaDedotta(dati);
  return dati;
}

export function chiave(dati) {
  if (!dati?.animabile || !dati.tipoItem || !dati.identifier) return null;
  return `dnd5e.${dati.tipoItem}.${dati.identifier}`;
}
