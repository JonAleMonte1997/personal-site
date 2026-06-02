# Phase 0 Research: UI Polish, Responsive Hardening & SEO

All decisions verified against Next.js v16.2 App Router documentation (matches installed 16.2.6).

## R1 — Page metadata (title, description, canonical, OG, Twitter)

**Decision**: Extend the static `metadata` export in `src/app/layout.tsx`. Set `metadataBase: new URL(site.url)` so relative `alternates.canonical: "/"` and OG image paths resolve to absolute URLs. Add `openGraph` (type `website`, url, siteName, locale `en_US`, title, description, images) and `twitter` (`card: "summary_large_image"`, title, description, images).

**Rationale**: It is the framework-native, SSG-safe path — Next renders these tags into the static HTML head at build with no runtime. A single source page means one static `metadata` object is sufficient; `generateMetadata` (async/dynamic) is unnecessary.

**Alternatives considered**: Hand-written `<meta>` tags in the head (loses type-safety and Next's URL composition); `generateMetadata` (only needed for dynamic/param-driven routes — over-engineered here).

## R2 — Social preview image

**Decision**: Ship a single static `src/app/opengraph-image.png` at 1200×630, designed in the dark theme with the cyan accent and Geist. Next's `opengraph-image` file convention auto-emits `og:image`, `og:image:type`, `og:image:width`, `og:image:height`.

**Rationale**: A static file is the simplest SSG-compatible option, satisfies the "single branded image" assumption, and renders correctly on LinkedIn, Slack, and X (which all consume `summary_large_image` / 1.91:1). 1200×630 is the cross-platform safe size.

**Alternatives considered**: Dynamic `ImageResponse` from `next/og` (generates at build for static routes, but adds JSX/CSS image code and a dependency surface for zero benefit on a one-page site — rejected per "no premature abstractions"). Per-section images (out of scope per spec).

**Implementation note (reconciled)**: Implemented as `src/app/opengraph-image.tsx` using `ImageResponse` (`next/og`), not a hand-authored static `.png`. A binary PNG could not be produced without design tooling, and `ImageResponse` is generated at build time — still SSG-safe, still a single branded image (dark + cyan, system sans). Geist in the image is a future nicety (would require loading the font file into `ImageResponse`). Trade-off accepted over R2's original static-file decision.

## R3 — Structured data (JSON-LD)

**Decision**: Inject a `Person` schema as a static `<script type="application/ld+json">` in `src/app/page.tsx`, built from `site.ts` (`name`, `jobTitle: "AI Engineer"`, `url`, `sameAs: [linkedin, github]`). Serialize with `JSON.stringify(...).replace(/</g, "\\u003c")` for XSS safety, per Next docs.

**Rationale**: `Person` is the correct schema.org type for a personal/CV site and powers richer search understanding. The script is static HTML — fully SSG-compatible, no client JS.

**Alternatives considered**: `ProfilePage` schema (heavier, less universally consumed); injecting via a metadata field (Next has no first-class JSON-LD metadata key — script tag is the documented approach). `schema-dts` types are optional and dev-only.

## R4 — robots.txt

**Decision**: `src/app/robots.ts` exporting a `MetadataRoute.Robots` with `rules: { userAgent: "*", allow: "/" }` and `sitemap: ${site.url}/sitemap.xml`.

**Rationale**: Documented file convention; generated as a static `/robots.txt` at build. Allowing all and pointing to the sitemap is correct for a public personal site.

**Alternatives considered**: Static `public/robots.txt` (works, but duplicates the site URL and loses the typed link to sitemap — `robots.ts` keeps it programmatic and DRY).

## R5 — sitemap.xml

**Decision**: `src/app/sitemap.ts` exporting `MetadataRoute.Sitemap` with one entry: `{ url: site.url, lastModified: new Date() }`.

**Rationale**: Single-page site → single canonical entry. Generated statically at build. `lastModified` aids recrawl scheduling.

**Alternatives considered**: Multi-entry sitemap with section anchors (anchors are not separate documents; not valid sitemap URLs — rejected).

## R6 — Static generation safety

**Decision**: Keep `next.config.ts` as-is (no `output: "export"`). Rely on Vercel's default static prerendering.

**Rationale**: With no dynamic params and no runtime data fetching, Next prerenders `page.tsx` and the metadata routes (`sitemap`, `robots`, `opengraph-image`) to static assets at build. Forcing `output: "export"` is unnecessary and could complicate the metadata-route image generation. This satisfies Constitution Principle II (SSG, no server runtime).

**Alternatives considered**: `output: "export"` (adds constraints with no benefit here); SSR/ISR (violates the no-runtime principle).

## R7 — Responsive strategy

**Decision**: Mobile-first Tailwind v4 utilities. Verification breakpoints: 320, 375, 768, 1024, 1440, and ≥2560px. Enforce a max content width on ultra-wide; guarantee no horizontal overflow at 320px; ensure tool-tag flex-wrap and avatar scaling.

**Rationale**: Matches the constitution's mobile-first responsive mandate and the spec's full-breakpoint coverage. These widths represent small phones, common phones, tablets, small laptops, desktops, and ultra-wide.

**Alternatives considered**: Container queries (useful but unnecessary for a single-column layout; adds complexity). Fixed desktop-first design (contradicts mobile-first constitution rule).

## R8 — Visual polish within the design system

**Decision**: Introduce a spacing/rhythm scale in `globals.css` `@theme` (consistent section vertical padding + intra-section spacing tokens). Normalize typographic hierarchy through `SectionHeading` (mono eyebrow + sans title) and section body text. Add a global `:focus-visible` treatment using the existing accent token.

**Rationale**: Polish must be measurable and bounded (FR-018…FR-021, SC-007). Encoding spacing as tokens makes "consistent rhythm" verifiable and keeps everything within Tailwind v4 + existing color tokens — no new colors, fonts, or light mode.

**Alternatives considered**: Ad-hoc per-section spacing (the current state; not verifiably consistent). Adding a UI component library (violates Principle V).

## R9 — Performance / Core Web Vitals

**Decision**: Treat LCP < 2.5s and CLS < 0.1 as acceptance targets (SC-004). Reserve explicit dimensions for the avatar and any imagery to avoid shift; keep above-the-fold free of render-blocking client JS (Framer Motion wrappers stay below-the-fold-friendly with `whileInView`).

**Rationale**: These are the standard user-facing Core Web Vitals thresholds and are measurable on the deployed build. The MVP already favors Server Components; this feature must not regress that.

**Alternatives considered**: Tool-specific score targets (e.g., "Lighthouse 100") — rejected as technology-specific per Success Criteria guidance; CWV thresholds are user-facing proxies.

## Open questions

None. All Technical Context items resolved.
