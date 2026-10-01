# WI NOU KAPAB ù Website Design Spec

**Date:** 2026-09-24  
**Status:** Approved for planning (awaiting user review of this file)  
**Source brief:** `Projet_WI_NOU_KAPAB_Reconstruction_2026_2027.pdf`  
**Brand assets:** WhatsApp images in project root (crest, photos, flag motif)

---

## 1. Goal

Public website presenting the full **2026ù2027 reconstruction programme** of the political party **WI NOU KAPAB**, structured from the project PDF, in **French (default)** and **English**.

Primary user jobs:

1. Understand vision, values, and the four pillars (FORMER / ORGANISER / SERVIR / RECONSTRUIRE).
2. Read detailed programme axes (economy, citizenship, solidarity, partnerships, implementation).
3. Contact the organisation via **WhatsApp / phone** (primary) and a **simple contact form** (secondary).

Out of scope for v1: CMS, member auth, donations backend, Kreyùl locale, live news feed.

---

## 2. Approach

**Next.js App Router + TypeScript + CSS variables**, static content from local files, deployed on Railway (builds `main` on push).

Rationale: matches stack preference; enough structure for i18n and routes; no CMS until content editors need it.

---

## 3. Information architecture

| Route (FR default) | EN route | Content |
|--------------------|----------|---------|
| `/` | `/en` | Home: brand hero, slogan, four pillars teaser, CTAs |
| `/programme` | `/en/programme` | Executive summary + guiding principles |
| `/contexte` | `/en/contexte` | Context & justification (ù1) |
| `/vision` | `/en/vision` | Vision & values (ù2) |
| `/actions` | `/en/actions` | Four pillars (ù3) |
| `/economie` | `/en/economie` | Financial inclusion + entrepreneurship (ù4ù5) |
| `/citoyennete` | `/en/citoyennete` | Training, organisation, citizenship (ù6) |
| `/solidarite` | `/en/solidarite` | Social emergency priorities (ù7) |
| `/partenariats` | `/en/partenariats` | Strategic partnerships (ù8) |
| `/mise-en-oeuvre` | `/en/mise-en-oeuvre` | Resources + 2026ù2027 phases (ù9ù10) |
| `/contact` | `/en/contact` | Form + WhatsApp/phone/address |

**Main nav:** Accueil ù Programme ù Actions ù ùconomie ù Solidaritù ù Contact  
**Secondary:** remaining pages via Programme hub + footer.  
**Lang switch:** FR ? EN on every page (same path under `/en`).

---

## 4. Visual design

- **Logo:** party crest from project assets (lions, crown, rooster; ùWI NOU KAPABù).
- **Palette:** black, red, gold/yellow, white. Optional green accent from crest only if needed for secondary UI.
- **Typography:** distinctive serif for brand/display; clean sans for body (not Inter/Roboto/Arial/system default stacks).
- **Home hero:** one composition ù full-bleed photo, dominant brand name, one headline, one short line, CTA group (WhatsApp + Contact). No cards, stats, or overlays in the hero.
- **Interior pages:** one job per section ù title, short lead, body from PDF (FR) / translation (EN).
- **Interior page banners:** one AI-generated photo per page in `public/banners/<slug>.jpg` (Higgsfield), always captioned as AI-generated (messages `media.aiImage`, FR + EN). No real people, no party symbols, no text in the image.
- **Motion:** 2ù3 subtle motions (e.g. hero fade-in, nav lang switch, CTA hover) ù presence, not noise.

Avoid: purple gradients, cream+terracotta ùAI defaultù, broadsheet newspaper chrome, emoji decoration.

---

## 5. Content rules

- FR copy derived from the PDF; EN is a faithful translation (not marketing rewrite).
- Content stored as local modules or MDX under something like `content/fr/` and `content/en/`.
- Taglines on materials: *Ensemble pour rebùtir Haùtiù* / *NAP AVANSE ANSANM, WI NOU KAPAB* / *Ensemble, nous pouvons !*
- Coordinator list PDF and organigramme: **not** full site pages in v1; optional later ùOrganisationù page.

---

## 6. Contact & CTAs

| Channel | Value (v1) |
|---------|------------|
| Phone | `+509 4630-5094` (secondary number from flyer optional: `3920-7806`) |
| WhatsApp | Deep link to primary phone |
| Email | Placeholder `contact@winoukapab.org` (replace when real) |
| Address | `# 21 Rue Gabart, Pùtion-Ville` (confirm if needed) |
| Form | Name, email, message ? `mailto:` or client-side Formspree-ready endpoint later; no custom backend in v1 |

WhatsApp + phone are the **primary** conversion actions site-wide (header/footer + contact page).

---

## 7. Technical sketch

```
app/
  [locale]/   layout, page, programme, contexte, vision, actions,
               economie, citoyennete, solidarite, partenariats,
               mise-en-oeuvre, contact
  components/  Header, Footer, Hero, CtaWhatsApp, ContactForm, LangSwitch
  content/     fr/*.ts|mdx, en/*.ts|mdx
  public/      logo, selected photos
```

- Locale convention (fixed): French at `/Ö` (no `/fr` prefix); English at `/en/Ö`. Middleware or `app/[locale]` with `defaultLocale = fr` and `localePrefix = 'as-needed'`.
- No database. No auth.
- Images: optimize via `next/image`; only curated assets in `public/`.

---

## 8. Success criteria

- [ ] All PDF programme sections reachable as pages in FR and EN
- [ ] Brand crest + black/red/gold look consistent
- [ ] WhatsApp and phone CTAs work on mobile
- [ ] Contact form usable with placeholder email
- [ ] Lighthouse-reasonable mobile layout (readable, no horizontal overflow)
- [ ] Deploys as a standard Next.js app on Railway

---

## 9. Explicit non-goals (v1)

CMS, member portal, donation payments, Creole locale, blog/news, embedding full organigramme/coordinator roster, video homepage autoplay.

---

## 10. Next step

After user approves this spec ? write implementation plan (`writing-plans`) ? build.
