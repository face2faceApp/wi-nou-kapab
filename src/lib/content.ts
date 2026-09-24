import type { Locale, PageContent, PageSlug, Pillar } from "../../content/types";
import * as fr from "../../content/fr/pages";
import * as en from "../../content/en/pages";

const byLocale = { fr, en } as const;

export function getPage(locale: Locale, slug: PageSlug): PageContent {
  return byLocale[locale].pages[slug];
}

export function getPillars(locale: Locale): Pillar[] {
  return byLocale[locale].pillars;
}

export const ALL_SLUGS: PageSlug[] = [
  "home",
  "programme",
  "contexte",
  "vision",
  "actions",
  "economie",
  "citoyennete",
  "solidarite",
  "partenariats",
  "mise-en-oeuvre",
  "contact",
];
