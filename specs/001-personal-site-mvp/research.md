# Research: Personal Site MVP

## Decision 1 — Framework: Next.js 15 (App Router, SSG)

**Decision**: Next.js 15 with App Router, statically exported via Vercel.
**Rationale**: Constitution requires SSG with no server runtime in production. Next.js on Vercel achieves this with zero config — pages with no `dynamic` export are statically rendered at build time. App Router is the current default.
**Alternatives considered**: Astro (considered in jmontenegro-site, now deleted). Dropped in favor of Next.js for alignment with AI-startup ecosystem familiarity and Vercel-native experience.

## Decision 2 — Styling: Tailwind CSS v4

**Decision**: Tailwind CSS v4 with CSS custom properties for all design tokens.
**Rationale**: Constitution mandates Tailwind v4 as the only styling system. v4 uses a CSS-first config (no `tailwind.config.js`) — tokens declared in `globals.css` via `@theme`. This also satisfies the "all colors via CSS custom properties" requirement natively.
**Key change from v3**: Config moved to CSS. `@tailwind` directives replaced by `@import "tailwindcss"`. Utility classes generated from CSS variables defined under `@theme`.
**Alternatives considered**: None — constitution is non-negotiable on this.

## Decision 3 — Animation: Framer Motion `whileInView`

**Decision**: Framer Motion with `whileInView` + `viewport={{ once: true }}` for all section entrance animations.
**Rationale**: Constitution explicitly names Framer Motion as the only animation library. `whileInView` handles scroll-triggered entrance without manual IntersectionObserver setup. `once: true` prevents re-triggering on scroll-up.
**Variants to use**:
```ts
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}
```
Duration ≤ 0.6s as required by SC-005.

## Decision 4 — Typography: Geist Sans via `next/font`

**Decision**: Load Geist Sans using `next/font/google` (or `next/font/local` if using the Vercel Geist package).
**Rationale**: Constitution mandates Geist Sans. `next/font` self-hosts fonts automatically, zero layout shift, no external request at runtime.
**Implementation**: Apply as CSS variable `--font-geist-sans` on `<html>`, reference in Tailwind via `@theme { --font-sans: var(--font-geist-sans); }`.

## Decision 5 — Content: TypeScript data files

**Decision**: All content (experience entries, stack entries, contact links) lives in `src/data/` as typed TypeScript constants.
**Rationale**: Constitution prohibits CMS, database, or external API calls. TypeScript constants are type-safe, zero-dependency, and directly consumed by Server Components with no client JS needed.
**Structure**:
- `src/data/experience.ts` — array of `ExperienceEntry`
- `src/data/stack.ts` — array of `StackEntry` grouped by category
- `src/data/contact.ts` — array of `ContactLink`

## Decision 6 — Component boundaries (Server vs Client)

**Decision**: All section components are React Server Components by default. Only components using Framer Motion are `'use client'`.
**Rationale**: Constitution requires minimizing client JS. Framer Motion requires the browser DOM, so animated wrappers must be client components. Static content (rendered HTML) stays server-side.
**Pattern**:
```
SectionWrapper (client — Framer Motion whileInView)
  └── SectionContent (server — static HTML + data)
```

## Decision 7 — Project initialization

**Decision**: `npx create-next-app@latest` with TypeScript, Tailwind, App Router, no src directory alias complications — use `src/` explicitly.
**Flags**: `--typescript --tailwind --app --src-dir --no-import-alias`
**Post-init**: Install `framer-motion`, configure Geist font, set up CSS tokens.
