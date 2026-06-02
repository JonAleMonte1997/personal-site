---
description: "Task list for UI Polish, Responsive Hardening & SEO"
---

# Tasks: UI Polish, Responsive Hardening & SEO

**Input**: Design documents from `/specs/002-ui-responsive-seo/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/metadata-contract.md, quickstart.md

**Tests**: No automated test suite exists for this project (manual verification per quickstart.md). No test tasks are generated.

**Organization**: Tasks grouped by user story (priority order from spec.md) so each can be implemented, verified, and shipped independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: US1=Previews, US2=Responsive, US3=Crawlable/Fast, US4=Visual Polish
- All paths are repo-relative from `personal-site/`

## Path Conventions

Single Next.js project. App Router under `src/app/`, components under `src/components/`, content/config under `src/data/`.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish a known-good baseline before changes.

- [X] T001 Confirm baseline `npm run build` passes with zero errors on the current branch; note any existing warnings
- [ ] T002 [P] Record current SEO/perf baseline: run a Lighthouse/SEO audit on `npm run dev` and note missing metadata (informs SC-006 before/after)
- [X] T003 [P] Decide JSON-LD typing approach — add dev-only `schema-dts` OR hand-type the Person object (optional; record choice in `research.md` R3 note)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Single source of truth that US1 (metadata/JSON-LD) and US3 (sitemap/robots) both derive from.

**⚠️ CRITICAL**: T004 blocks US1 and US3. US2 and US4 do not depend on it.

- [X] T004 Create `src/data/site.ts` exporting `SiteConfig` per data-model.md: `url: "https://www.jmontenegro.dev"` (no trailing slash, www canonical), `name`, `title`, `description`, `jobTitle: "AI Engineer"`, `locale: "en_US"`, `ogImage: "/opengraph-image.png"`, `profiles { linkedin, github, email }` (absolute https URLs / mailto). Enforce validation rules (absolute url, no trailing slash, non-empty title/description)

**Checkpoint**: Site config ready — US1 and US3 can begin.

---

## Phase 3: User Story 1 - Rich Social & Search Previews (Priority: P1) 🎯 MVP

**Goal**: Site URL unfurls into a complete preview card (title, description, branded image) on LinkedIn/Slack/X, and search engines get accurate title/description plus Person structured data.

**Independent Test**: Build, then inspect `/` head for all required tags (contracts §1) and paste the deployed URL into social-card debuggers — complete card, no missing fields.

### Implementation for User Story 1

- [X] T005 [US1] Expand `metadata` in `src/app/layout.tsx`: add `metadataBase: new URL(site.url)`, `alternates: { canonical: "/" }`, and update `title`/`description` to read from `site.ts` (depends on T004)
- [X] T006 [US1] Add `openGraph` to `src/app/layout.tsx` metadata: `type: "website"`, `url`, `siteName`, `locale`, `title`, `description`, `images: [site.ogImage]` (depends on T005)
- [X] T007 [US1] Add `twitter` to `src/app/layout.tsx` metadata: `card: "summary_large_image"`, `title`, `description`, `images: [site.ogImage]` consistent with OG (depends on T005)
- [X] T008 [P] [US1] Create branded `src/app/opengraph-image.png` (1200×630, dark bg, cyan #06b6d4 accent, Geist type, name + title); verify Next auto-emits `og:image` + width/height tags
- [X] T009 [US1] Add JSON-LD `Person` schema as a static `<script type="application/ld+json">` in `src/app/page.tsx`, built from `site.ts` (`name`, `jobTitle`, `url`, `sameAs: [linkedin, github]`), serialized with `JSON.stringify(...).replace(/</g, "\\u003c")` (depends on T004)
- [X] T010 [US1] Verify against contracts §1: `npm run build && npm start`, view source of `/`, confirm title, description, canonical, lang, viewport, all OG tags, all twitter tags, and valid Person JSON-LD are present

**Checkpoint**: US1 fully functional — previews and structured data verifiable independently.

---

## Phase 4: User Story 2 - Reliable Experience Across Devices (Priority: P2)

**Goal**: Every section adapts cleanly from 320px to ultra-wide — no overflow, legible text, reachable tap targets, clean reflow.

**Independent Test**: Load each section at 320/375/768/1024/1440/≥2560px — no horizontal scroll, no clipping/overlap, legible type, comfortable tap targets (contracts §5).

### Implementation for User Story 2

- [X] T011 [US2] Audit all 7 sections + Header/Footer at 320/375/768/1024/1440/≥2560px; log every overflow, clipped/overlapping element, cramped area, and small tap target (covers `src/components/sections/*`, `src/components/layout/*`)
- [X] T012 [US2] Fix horizontal overflow and clipping at 320px across affected section components; ensure tool-tag flex-wrap and avatar scaling hold (FR-010)
- [X] T013 [US2] Enforce comfortable tap-target sizing on `src/components/layout/Header.tsx` nav, `src/components/sections/Contact.tsx` links, and `src/components/ui/ToolTag.tsx` (FR-011)
- [X] T014 [US2] Verify body/heading legibility without zoom across breakpoints; adjust responsive type scale where needed (FR-012)
- [X] T015 [US2] Constrain content to a max reading width on ultra-wide and verify portrait↔landscape reflow has no breakage (FR-013, FR-014)

**Checkpoint**: US2 verifiable — no overflow/clipping at any tested width.

---

## Phase 5: User Story 3 - Fast, Crawlable Site (Priority: P3)

**Goal**: Crawlers find robots + sitemap and can index all content; the page loads fast with no layout shift.

**Independent Test**: Request `/robots.txt` and `/sitemap.xml` from the build (contracts §2–§3); measure LCP < 2.5s and CLS < 0.1 on throttled mobile (contracts §6).

### Implementation for User Story 3

- [X] T016 [P] [US3] Create `src/app/robots.ts` → `MetadataRoute.Robots`: `rules: { userAgent: "*", allow: "/" }`, `sitemap: ${site.url}/sitemap.xml` (depends on T004)
- [X] T017 [P] [US3] Create `src/app/sitemap.ts` → `MetadataRoute.Sitemap`: single entry `{ url: site.url, lastModified: new Date() }` (depends on T004)
- [X] T018 [US3] Run `npm run build` and confirm static `/robots.txt`, `/sitemap.xml`, and `/opengraph-image` are emitted with no server runtime (FR-017)
- [X] T019 [US3] Ensure avatar and OG image have explicit dimensions to prevent CLS; keep above-the-fold free of render-blocking JS (FR-015, FR-016)
- [ ] T020 [US3] Measure deployed/preview build: confirm LCP < 2.5s and CLS < 0.1 on a throttled mobile profile (SC-004)

**Checkpoint**: US3 verifiable — robots/sitemap served statically, CWV thresholds met.

---

## Phase 6: User Story 4 - Polished Visual Presentation (Priority: P4)

**Goal**: Cohesive spacing rhythm, consistent typographic hierarchy, and subtle interactive feedback — strictly within the existing design system.

**Independent Test**: Review all 7 sections against the consistency rubric (contracts §8); confirm no new colors/fonts and no light mode.

### Implementation for User Story 4

- [X] T021 [US4] Add spacing/rhythm tokens to `src/app/globals.css` `@theme` (`--space-section`, `--space-block`, `--measure`); no new color/font tokens (FR-018, FR-021)
- [X] T022 [US4] Apply consistent vertical section rhythm using the new tokens across `src/components/sections/*` (FR-018)
- [X] T023 [US4] Normalize typographic hierarchy in `src/components/ui/SectionHeading.tsx` (mono eyebrow + sans title) and section bodies (FR-019)
- [X] T024 [US4] Add consistent `:focus-visible` and hover feedback (reusing `--color-accent`) in `src/app/globals.css` and interactive components (FR-020)
- [X] T025 [US4] Design-system fidelity check: grep for hardcoded hex / inline styles / extra fonts; confirm dark-only, Geist Sans+Mono, single cyan accent (FR-021, SC-007)

**Checkpoint**: US4 verifiable — uniform rhythm/hierarchy, zero design-system drift.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility, cleanup, and full-build verification spanning all stories.

- [X] T026 [P] Add descriptive `alt` to all meaningful images (avatar in `src/components/sections/Hero.tsx`); confirm semantic landmarks and logical heading order across `src/app/page.tsx` and sections (FR-022, FR-023)
- [X] T027 [P] Verify text/interactive contrast on the dark background meets legibility expectations (FR-025)
- [X] T028 [US2] Keyboard-only pass: every interactive element reachable with visible focus, no traps (FR-024, SC-005)
- [X] T029 [P] Remove unused default scaffolding assets from `public/` (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`) and the duplicate `public/images/jonathan.JPG` if unreferenced
- [ ] T030 Run full `npm run build` — zero errors (SC-008); run an SEO/Lighthouse audit confirming no missing critical metadata (SC-006)
- [ ] T031 Run quickstart.md verification checklist end-to-end: social-card debuggers (SC-001), search snippet preview (SC-002), breakpoint pass 320→1440 (SC-003)
- [ ] T032 Configure Vercel apex→www redirect (`jmontenegro.dev` → `www.jmontenegro.dev`) so canonical is unambiguous, then push to `main` to deploy

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately.
- **Foundational (Phase 2)**: T004 blocks US1 and US3.
- **User Stories (Phase 3–6)**: After Foundational. US1 and US3 require T004; US2 and US4 do not.
- **Polish (Phase 7)**: After the desired user stories are complete.

### User Story Dependencies

- **US1 (P1)**: Requires T004. Independent of US2/US3/US4.
- **US2 (P2)**: No dependency on T004. Independent.
- **US3 (P3)**: Requires T004. JSON-LD/OG image (US1) and sitemap/robots (US3) are separate files — no cross-dependency.
- **US4 (P4)**: No dependency on T004. **Shares section files with US2** — sequence US2 → US4 (or coordinate) to avoid edit conflicts in `src/components/sections/*`.

### Within Each User Story

- US1: T005 before T006/T007 (same file, metadata object); T008 and T009 parallel to each other; T010 last.
- US3: T016 and T017 parallel; T018 after both; T019–T020 after build.
- US4: T021 (tokens) before T022/T024 that consume them.

### Parallel Opportunities

- Setup: T002, T003 in parallel.
- US1: T008 (image) ∥ T009 (JSON-LD) while T005→T006→T007 proceed on `layout.tsx`.
- US3: T016 (robots.ts) ∥ T017 (sitemap.ts).
- Cross-story: once T004 is done, US1 and US3 can run fully parallel to US2; US4 should follow US2 (shared section files).
- Polish: T026, T027, T029 in parallel.

---

## Parallel Example: User Story 1

```bash
# After T005 sets up metadataBase/canonical, run in parallel:
Task: "Create branded opengraph-image.png (1200×630) in src/app/"   # T008
Task: "Add Person JSON-LD <script> in src/app/page.tsx"             # T009
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Phase 1 Setup → Phase 2 Foundational (T004).
2. Phase 3 US1 (metadata + OG image + JSON-LD).
3. **STOP and VALIDATE**: head tags + social-card debuggers.
4. Deploy — the site now shares correctly and is search-friendly (highest incremental value over MVP).

### Incremental Delivery

1. Setup + Foundational → ready.
2. US1 (P1) → validate → deploy (MVP!).
3. US2 (P2) → validate responsive → deploy.
4. US3 (P3) → validate crawl/perf → deploy.
5. US4 (P4) → validate polish → deploy.
6. Phase 7 polish + verification + Vercel redirect.

### Notes

- [P] = different files, no dependencies. [Story] label maps to spec.md user stories.
- US2 and US4 both touch `src/components/sections/*` — do not parallelize them.
- Commit after each task or logical group; stop at any checkpoint to validate independently.
- Guardrails (constitution): no new colors/fonts, no light mode, no server runtime, no inline styles/CSS Modules, no new sections.

## Implementation Notes (deviations from task text)

- **T008**: OG image implemented as `src/app/opengraph-image.tsx` (`ImageResponse`, generated at build) instead of a static `opengraph-image.png`. Still SSG, single branded image. See research.md R2 implementation note.
- **T004**: `site.ts` omits the `ogImage` field — the `opengraph-image.tsx` file convention auto-emits `og:image`/`twitter:image`, so no path is referenced in metadata. JSON-LD typed by hand (no `schema-dts`, per T003 decision).
- **Extra (out of original tasks)**: disabled `next/font` preload on Geist Sans + Mono with `display: "swap"` to fix a "preloaded but not used" console warning (CLS-safe via metric-adjusted fallback); added a `<noscript>` override (`[data-animate]{opacity:1!important}`) so Framer Motion's `whileInView` sections degrade visible without JS (spec edge case). Verified via Playwright (JS-off context, 320px overflow, keyboard focus).
