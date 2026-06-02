# Quickstart: UI Polish, Responsive Hardening & SEO

## Prerequisites

- Node 20, repo installed (`npm install` already done in MVP).
- On branch `002-ui-responsive-seo`.
- Read `spec.md`, `plan.md`, and `.specify/memory/constitution.md` before implementing.

## Dev loop

```bash
npm run dev      # local dev server
npm run build    # MUST be zero errors (SC-008) — also generates sitemap/robots/og-image
npm start        # serve the production build locally to inspect generated SEO routes
```

## Where things live

| Concern | File |
|---------|------|
| Site URL, profiles, OG defaults | `src/data/site.ts` (new) |
| Page metadata (title, OG, twitter, canonical) | `src/app/layout.tsx` |
| JSON-LD Person schema | `src/app/page.tsx` |
| Social preview image | `src/app/opengraph-image.png` (new) |
| robots.txt | `src/app/robots.ts` (new) |
| sitemap.xml | `src/app/sitemap.ts` (new) |
| Spacing/rhythm tokens, focus styles | `src/app/globals.css` |
| Section refinements | `src/components/sections/*`, `src/components/ui/*`, `src/components/layout/*` |

## Key patterns (Next.js 16 App Router, verified against v16.2 docs)

**Metadata (`layout.tsx`)** — relative paths resolve against `metadataBase`:
```ts
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: site.url, siteName: site.name,
               locale: site.locale, title: site.title,
               description: site.description, images: [site.ogImage] },
  twitter: { card: "summary_large_image", title: site.title,
             description: site.description, images: [site.ogImage] },
};
```

**robots (`robots.ts`)**:
```ts
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" },
           sitemap: `${site.url}/sitemap.xml` };
}
```

**sitemap (`sitemap.ts`)**:
```ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: new Date() }];
}
```

**JSON-LD (`page.tsx`)** — XSS-escaped static script:
```tsx
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd).replace(/</g, "\\u003c") }} />
```

**opengraph-image** — just drop a `1200×630` `opengraph-image.png` into `src/app/`; Next auto-emits the tags. No code needed.

## Verification checklist (maps to Success Criteria)

1. `npm run build` → zero errors. **SC-008**
2. `npm start`, then open `/robots.txt`, `/sitemap.xml`, `/opengraph-image` — all serve correctly. **SC-006**
3. View source of `/` → confirm every tag in `contracts/metadata-contract.md §1`. **SC-006**
4. Paste deployed URL into LinkedIn Post Inspector, Slack, X card validator → complete cards. **SC-001**
5. Google Rich Results Test / search snippet preview → title + description correct. **SC-002**
6. Resize from 320 → 1440px (and ≥2560) → no overflow/clipping at any width. **SC-003**
7. Throttled mobile profile → LCP < 2.5s, CLS < 0.1. **SC-004**
8. Tab through the page → visible focus on every interactive element, no traps. **SC-005**
9. Visual consistency pass across all 7 sections → uniform rhythm/hierarchy, no design-system drift. **SC-007**

## Guardrails (constitution)

- No new colors, fonts, or light mode. Dark-only stays.
- No server runtime — everything must remain statically generated.
- No inline styles / CSS Modules — Tailwind v4 + `@theme` tokens only.
- No new sections or content — this feature is polish + SEO, not redesign.
