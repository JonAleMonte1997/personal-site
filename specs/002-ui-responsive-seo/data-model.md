# Phase 1 Data Model: UI Polish, Responsive Hardening & SEO

This feature adds no content entities. It introduces one configuration constant and the shapes of the SEO outputs derived from it. All values are static TypeScript — no storage, no runtime.

## New: Site Config (`src/data/site.ts`)

Single source of truth for everything SEO/metadata derives from.

| Field | Type | Example | Used by |
|-------|------|---------|---------|
| `url` | `string` (absolute, no trailing slash) | `https://www.jmontenegro.dev` | `metadataBase`, canonical, sitemap, robots, JSON-LD `url` |
| `name` | `string` | `Jonathan Montenegro` | title, OG, JSON-LD `name` |
| `title` | `string` | `Jonathan Montenegro — AI Engineer` | `<title>`, OG/Twitter title |
| `description` | `string` | `I build AI systems that survive the real world.` | meta description, OG/Twitter description |
| `jobTitle` | `string` | `AI Engineer` | JSON-LD `jobTitle` |
| `locale` | `string` | `en_US` | OG `locale` |
| ~~`ogImage`~~ | — | — | Omitted: handled by the `opengraph-image.tsx` file convention (Next auto-emits og:image + twitter:image), so no path field is needed in `site.ts` |
| `profiles` | `{ linkedin: string; github: string; email: string }` | absolute URLs / `mailto:` | JSON-LD `sameAs`, reused by Contact if desired |

**Validation rules**:
- `url` MUST be absolute and MUST NOT end in `/` (canonical/sitemap composition depends on it).
- `profiles.linkedin` / `profiles.github` MUST be absolute `https://` URLs (schema.org `sameAs` requires absolute URIs).
- `title` and `description` MUST be non-empty (FR-001).

## Derived: Page Metadata object (`layout.tsx`)

Shape produced from `site.ts`, consumed by Next's `Metadata` API.

```text
metadataBase: URL(site.url)
title: site.title
description: site.description
alternates.canonical: "/"
openGraph: { type: "website", url: site.url, siteName: site.name,
             locale: site.locale, title: site.title,
             description: site.description, images: [site.ogImage] }
twitter: { card: "summary_large_image", title: site.title,
           description: site.description, images: [site.ogImage] }
```

## Derived: Structured Data — `Person` (`page.tsx`)

```text
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": site.name,
  "jobTitle": site.jobTitle,
  "url": site.url,
  "sameAs": [ site.profiles.linkedin, site.profiles.github ]
}
```

**Validation**: serialized with `JSON.stringify(...).replace(/</g, "\\u003c")`; emitted in a `<script type="application/ld+json">`.

## Derived: Sitemap entry (`sitemap.ts`)

```text
[ { url: site.url, lastModified: <build date> } ]
```

## Derived: Robots rules (`robots.ts`)

```text
{ rules: { userAgent: "*", allow: "/" }, sitemap: site.url + "/sitemap.xml" }
```

## New: Design tokens (`globals.css` `@theme`)

Additive only — no existing color tokens change.

| Token (proposed) | Purpose |
|------------------|---------|
| `--space-section` | consistent vertical padding between sections (FR-018) |
| `--space-block` | intra-section block rhythm |
| `--measure` | max content/reading width for ultra-wide constraint (FR-013) |

> No new color or font tokens. Focus/hover states reuse `--color-accent`.

## Entity impact summary

- **Added**: `SiteConfig` (config constant).
- **Unchanged**: `ExperienceEntry`, `StackEntry`, `EducationEntry`, `Language`, `ContactLink` (from MVP `src/data/types.ts`).
- **Removed**: none.
