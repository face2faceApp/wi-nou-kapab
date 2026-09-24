# WI NOU KAPAB Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a bilingual (FR default / EN) Next.js public site that presents the full WI NOU KAPAB 2026?2027 programme from the PDF, with WhatsApp/phone CTAs and a simple contact form.

**Architecture:** Next.js App Router with `next-intl` (or equivalent lightweight locale routing): French at `/?`, English at `/en/?`. Programme copy lives in typed content modules under `content/fr` and `content/en`. Shared shell (Header, Footer, Hero, CTAs) wraps page content. No database, no CMS, no auth.

**Tech Stack:** Next.js 15 (App Router), TypeScript, CSS Modules + CSS variables, `next/image`, `next-intl` for locale routing, deploy target Vercel.

**Spec:** `docs/superpowers/specs/2026-09-24-wi-nou-kapab-website-design.md`

## Global Constraints

- Locales: `fr` (default, no prefix), `en` (`/en` prefix) ? localePrefix `as-needed`
- Brand palette: black / red / gold / white (optional green accent only from crest)
- Typography: distinctive serif display + non-default sans body (not Inter, Roboto, Arial, system-ui alone)
- Hero: one composition ? brand dominant, one headline, one line, WhatsApp + Contact CTAs; no cards/stats/overlays
- Contact: placeholder email `contact@winoukapab.org`; phone `+509 4630-5094`; WhatsApp deep link to that number; address `# 21 Rue Gabart, Pétion-Ville`
- Content: faithful to PDF (FR); EN = faithful translation
- Out of scope v1: CMS, auth, donations, Krey?l, blog, organigramme/coordinator pages, video autoplay
- Project root already contains PDFs/images ? put app code in repo root; move brand assets into `public/` (do not delete originals)

---

## File structure (target)

```
package.json
next.config.ts
middleware.ts
messages/fr.json          # UI chrome strings only
messages/en.json
content/
  types.ts               # PageContent, Pillar, NavItem
  fr/*.ts                # one file per page slug
  en/*.ts
src/
  i18n/routing.ts
  i18n/request.ts
  app/
    globals.css
    layout.tsx           # root html
    [locale]/
      layout.tsx
      page.tsx           # home
      programme/page.tsx
      contexte/page.tsx
      vision/page.tsx
      actions/page.tsx
      economie/page.tsx
      citoyennete/page.tsx
      solidarite/page.tsx
      partenariats/page.tsx
      mise-en-oeuvre/page.tsx
      contact/page.tsx
  components/
    Header.tsx
    Footer.tsx
    Hero.tsx
    CtaWhatsApp.tsx
    CtaPhone.tsx
    ContactForm.tsx
    LangSwitch.tsx
    ProgrammeSection.tsx
    PillarGrid.tsx
  lib/
    contact.ts           # PHONE, WHATSAPP_URL, EMAIL, ADDRESS
    content.ts           # getPage(locale, slug)
public/
  logo-crest.png         # curated from WhatsApp assets
  hero.jpg
tests/
  smoke.test.ts          # route + content presence checks (node)
```

---

### Task 1: Scaffold Next.js + tooling

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `middleware.ts`, `src/app/layout.tsx`, `src/app/globals.css`, `.gitignore`
- Test: `tests/smoke.test.ts` (created empty assertion that `package.json` name is set)

**Interfaces:**
- Consumes: none
- Produces: runnable `npm run dev`; Next app at project root

- [ ] **Step 1: Init git (optional but recommended) and scaffold**

```bash
cd "C:\Users\Levelt\Desktop\WorkING_Projetcs\WI NOU KAPAB"
git init
npx create-next-app@latest . --typescript --eslint --app --src-dir --no-tailwind --import-alias "@/*" --turbopack --yes
```

If create-next-app refuses non-empty dir: scaffold in temp folder and move `package.json`, `src`, configs into root (keep existing PDFs/images).

- [ ] **Step 2: Install i18n**

```bash
npm install next-intl
```

- [ ] **Step 3: Write failing smoke test**

```ts
// tests/smoke.test.ts
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import assert from "node:assert/strict";

const pkg = JSON.parse(
  readFileSync(resolve("package.json"), "utf8")
);
assert.equal(pkg.name, "wi-nou-kapab");
console.log("smoke: package name ok");
```

Set `"name": "wi-nou-kapab"` in `package.json`. Add script: `"test": "tsx tests/smoke.test.ts"` (or `npx tsx`).

- [ ] **Step 4: Run test**

```bash
npm install -D tsx
npm test
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js app for WI NOU KAPAB"
```

---

### Task 2: Locale routing + contact constants

**Files:**
- Create: `src/i18n/routing.ts`, `src/i18n/request.ts`, `src/middleware.ts` (or root `middleware.ts`), `src/lib/contact.ts`, `messages/fr.json`, `messages/en.json`
- Modify: `next.config.ts` (next-intl plugin)
- Test: extend `tests/smoke.test.ts`

**Interfaces:**
- Consumes: next-intl
- Produces:
  - `routing` with `locales: ['fr','en']`, `defaultLocale: 'fr'`, `localePrefix: 'as-needed'`
  - `contact.ts`:
    ```ts
    export const PHONE_E164 = "+50946305094";
    export const PHONE_DISPLAY = "+509 4630-5094";
    export const WHATSAPP_URL = `https://wa.me/50946305094`;
    export const EMAIL = "contact@winoukapab.org";
    export const ADDRESS = "# 21 Rue Gabart, Pétion-Ville";
    ```

- [ ] **Step 1: Add `src/lib/contact.ts`** with the exports above.

- [ ] **Step 2: Add routing**

```ts
// src/i18n/routing.ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/programme": "/programme",
    "/contexte": "/contexte",
    "/vision": "/vision",
    "/actions": "/actions",
    "/economie": "/economie",
    "/citoyennete": "/citoyennete",
    "/solidarite": "/solidarite",
    "/partenariats": "/partenariats",
    "/mise-en-oeuvre": "/mise-en-oeuvre",
    "/contact": "/contact",
  },
});
```

- [ ] **Step 3: Wire middleware + `[locale]` layout** per next-intl App Router docs (create `src/app/[locale]/layout.tsx` that calls `setRequestLocale` / `NextIntlClientProvider`).

- [ ] **Step 4: UI message files**

`messages/fr.json` keys: `nav.home`, `nav.programme`, `nav.actions`, `nav.economie`, `nav.solidarite`, `nav.contact`, `cta.whatsapp`, `cta.contact`, `cta.call`, `footer.rights`, `lang.fr`, `lang.en`.

Mirror in `messages/en.json` (English labels).

- [ ] **Step 5: Extend smoke test**

```ts
import { PHONE_E164, EMAIL } from "../src/lib/contact";
assert.equal(PHONE_E164, "+50946305094");
assert.equal(EMAIL, "contact@winoukapab.org");
```

Run `npm test` ? Expected: PASS

- [ ] **Step 6: Commit**

```bash
git commit -am "feat: add locale routing and contact constants"
```

---

### Task 3: Design tokens, shell, brand assets

**Files:**
- Modify: `src/app/globals.css`
- Create: `src/components/Header.tsx`, `Footer.tsx`, `LangSwitch.tsx`, `CtaWhatsApp.tsx`, `CtaPhone.tsx`
- Create: `public/logo-crest.png`, `public/hero.jpg` (copy/convert best crest + photo from WhatsApp images)

**Interfaces:**
- Consumes: `contact.ts`, next-intl `Link` / `useTranslations`
- Produces: Header with main nav + LangSwitch; Footer with phone/WhatsApp/address; CTA components

- [ ] **Step 1: CSS variables in `globals.css`**

```css
:root {
  --color-black: #0a0a0a;
  --color-red: #c8102e;
  --color-gold: #c5a028;
  --color-white: #ffffff;
  --font-display: "Source Serif 4", "Libre Baskerville", Georgia, serif;
  --font-body: "Source Sans 3", "DM Sans", sans-serif;
}
```

Load fonts via `next/font/google` (Source Serif 4 + Source Sans 3) in `[locale]/layout.tsx`.

- [ ] **Step 2: Curate assets** ? pick clearest crest crop ? `public/logo-crest.png`; strongest event photo ? `public/hero.jpg`.

- [ ] **Step 3: Implement `CtaWhatsApp` / `CtaPhone`** ? anchor to `WHATSAPP_URL` / `tel:+50946305094`, visible labels from messages.

- [ ] **Step 4: Header** ? logo image + wordmark ?WI NOU KAPAB?, main nav links (home, programme, actions, economie, solidarite, contact), LangSwitch, WhatsApp CTA.

- [ ] **Step 5: Footer** ? slogan, secondary links to all programme pages, contact block (phone, WhatsApp, email placeholder, address).

- [ ] **Step 6: Manual check** ? `npm run dev`, open `/` and `/en`, switch language, verify nav links.

- [ ] **Step 7: Commit**

```bash
git commit -am "feat: brand shell, tokens, and CTAs"
```

---

### Task 4: Content model + FR/EN programme copy

**Files:**
- Create: `content/types.ts`, `src/lib/content.ts`
- Create: `content/fr/{home,programme,contexte,vision,actions,economie,citoyennete,solidarite,partenariats,mise-en-oeuvre,contact}.ts`
- Create: matching `content/en/*.ts`

**Interfaces:**
- Consumes: PDF text (already extracted in design session)
- Produces:
  ```ts
  // content/types.ts
  export type Locale = "fr" | "en";
  export type PageSlug =
    | "home" | "programme" | "contexte" | "vision" | "actions"
    | "economie" | "citoyennete" | "solidarite" | "partenariats"
    | "mise-en-oeuvre" | "contact";

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
  ```
  ```ts
  // src/lib/content.ts
  export function getPage(locale: Locale, slug: PageSlug): PageContent;
  export function getPillars(locale: Locale): Pillar[];
  ```

- [ ] **Step 1: Add types + `getPage` / `getPillars` loaders** that import from `content/[locale]/[slug].ts`.

- [ ] **Step 2: Fill FR pages** from PDF sections (faithful paraphrase/structure ? keep meaning; split into `blocks`).

- [ ] **Step 3: Fill EN pages** ? faithful translation of the FR modules (same structure/slugs).

- [ ] **Step 4: Test**

```ts
import { getPage, getPillars } from "../src/lib/content";
assert.equal(getPage("fr", "actions").blocks.length > 0, true);
assert.equal(getPillars("en").length, 4);
assert.match(getPage("fr", "programme").title, /programme|reconstruction/i);
```

Run `npm test` ? Expected: PASS

- [ ] **Step 5: Commit**

```bash
git commit -am "feat: add FR/EN programme content modules"
```

---

### Task 5: Home page (Hero + pillars)

**Files:**
- Create: `src/components/Hero.tsx`, `src/components/PillarGrid.tsx`
- Create/Modify: `src/app/[locale]/page.tsx`

**Interfaces:**
- Consumes: `getPage(locale,'home')`, `getPillars(locale)`, `Hero` props `{ title, lead, imageSrc }`
- Produces: home matching spec hero budget

- [ ] **Step 1: `Hero`** ? full-bleed `next/image` background, brand name, one headline, one supporting sentence, CTA group (`CtaWhatsApp` + link to `/contact`). No cards/badges on media.

- [ ] **Step 2: `PillarGrid`** ? four pillars below fold; each links to `/actions` (or anchor `#former` etc. on actions page).

- [ ] **Step 3: Home page** composes Hero + short programme teaser + PillarGrid + contact strip.

- [ ] **Step 4: Manual check** ? `/` and `/en` hero reads as one composition; brand dominant.

- [ ] **Step 5: Commit**

```bash
git commit -am "feat: home hero and four pillars"
```

---

### Task 6: Interior programme pages

**Files:**
- Create: `src/components/ProgrammeSection.tsx`
- Create: `src/app/[locale]/{programme,contexte,vision,actions,economie,citoyennete,solidarite,partenariats,mise-en-oeuvre}/page.tsx`

**Interfaces:**
- Consumes: `getPage(locale, slug)`
- Produces: shared layout ? page title, lead, mapped `blocks` as sections

- [ ] **Step 1: `ProgrammeSection`** ? renders `heading` + paragraphs from `body`.

- [ ] **Step 2: Create each route page** ? thin wrapper:

```tsx
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const page = getPage(locale as Locale, "programme");
  return (
    <article>
      <h1>{page.title}</h1>
      <p>{page.lead}</p>
      {page.blocks.map((b, i) => (
        <ProgrammeSection key={i} heading={b.heading} body={b.body} />
      ))}
    </article>
  );
}
```

Repeat for each slug (change slug string only).

- [ ] **Step 3: Actions page** ? include pillar ids as section anchors `id="former"` etc. matching `PillarGrid` links.

- [ ] **Step 4: Smoke test** ? assert every slug returns non-empty title for `fr` and `en`.

- [ ] **Step 5: Manual** ? click each main nav + footer link in FR and EN.

- [ ] **Step 6: Commit**

```bash
git commit -am "feat: programme interior pages FR/EN"
```

---

### Task 7: Contact page + form

**Files:**
- Create: `src/components/ContactForm.tsx`
- Create: `src/app/[locale]/contact/page.tsx`

**Interfaces:**
- Consumes: `EMAIL`, `PHONE_*`, `WHATSAPP_URL`, `ADDRESS`
- Produces: client form posting via `mailto:` with subject/body from fields

- [ ] **Step 1: `ContactForm`** (client component) ? fields: name, email, message; on submit build:

```ts
const href = `mailto:${EMAIL}?subject=${encodeURIComponent("Contact WI NOU KAPAB ? " + name)}&body=${encodeURIComponent(body)}`;
window.location.href = href;
```

Validate non-empty name/email/message before submit.

- [ ] **Step 2: Contact page** ? show form + WhatsApp button + `tel:` link + address + placeholder email text.

- [ ] **Step 3: Manual** ? submit form opens mail client; WhatsApp opens wa.me on mobile/desktop.

- [ ] **Step 4: Commit**

```bash
git commit -am "feat: contact page with mailto form and WhatsApp"
```

---

### Task 8: Polish, metadata, verify success criteria

**Files:**
- Modify: `[locale]/layout.tsx` metadata (`title`, `description` per locale)
- Modify: any spacing/motion CSS (2?3 subtle transitions)
- Test: `tests/smoke.test.ts` final assertions

**Interfaces:**
- Consumes: all prior
- Produces: deploy-ready app meeting spec success checklist

- [ ] **Step 1: Metadata** ? FR title `WI NOU KAPAB ? Reconstruction 2026?2027`; EN equivalent.

- [ ] **Step 2: Motion** ? hero fade-in, CTA hover, lang switch opacity ? keep subtle.

- [ ] **Step 3: Final smoke test**

```ts
const slugs = [
  "home","programme","contexte","vision","actions","economie",
  "citoyennete","solidarite","partenariats","mise-en-oeuvre","contact",
] as const;
for (const locale of ["fr", "en"] as const) {
  for (const slug of slugs) {
    const p = getPage(locale, slug);
    assert.ok(p.title.length > 0, `${locale}/${slug}`);
  }
}
```

- [ ] **Step 4: `npm run build`** ? Expected: success, no type errors.

- [ ] **Step 5: Checklist vs spec** ? all programme pages; crest+palette; WhatsApp/phone; form; no horizontal overflow on narrow viewport.

- [ ] **Step 6: Commit**

```bash
git commit -am "chore: metadata, motion polish, verify build"
```

---

## Spec coverage self-check

| Spec requirement | Task |
|------------------|------|
| Programme pages from PDF | 4, 6 |
| FR default + EN `/en` | 2 |
| Next.js stack | 1 |
| Brand crest + black/red/gold | 3 |
| Hero rules | 5 |
| WhatsApp + phone primary CTAs | 3, 7 |
| Contact form + placeholder email | 7 |
| No CMS/auth/Krey?l v1 | respected (no tasks) |
| Vercel-ready build | 8 |

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-09-24-wi-nou-kapab-website.md`.

**Two execution options:**

1. **Subagent-Driven (recommended)** ? fresh subagent per task, review between tasks  
2. **Inline Execution** ? execute tasks in this session with checkpoints  

Which approach?
