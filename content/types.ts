export type Locale = "fr" | "en";

export type PageSlug =
  | "home"
  | "programme"
  | "contexte"
  | "vision"
  | "actions"
  | "economie"
  | "citoyennete"
  | "solidarite"
  | "partenariats"
  | "mise-en-oeuvre"
  | "contact";

export type ContentBlock = { heading?: string; body: string[] };

export type PageContent = {
  slug: PageSlug;
  title: string;
  lead: string;
  blocks: ContentBlock[];
};

export type Pillar = {
  id: "former" | "organiser" | "servir" | "reconstruire";
  title: string;
  summary: string;
};
