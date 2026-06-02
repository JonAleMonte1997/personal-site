# Tasks: Personal Site MVP

**Input**: Design documents from `specs/001-personal-site-mvp/`

**Prerequisites**: plan.md ✅ | spec.md ✅ | research.md ✅ | data-model.md ✅ | quickstart.md ✅

**Tests**: No test suite configured. Test tasks omitted per constitution.

**Organization**: Tasks grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no shared dependency)
- **[Story]**: User story this task belongs to (US1–US7)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Next.js project, install dependencies, wire base configuration.

- [x] T001 Initialize Next.js 15 project at repo root with TypeScript, Tailwind, App Router, src/ dir
- [x] T002 Install additional dependencies: `npm install framer-motion geist`
- [x] T003 Replace generated `src/app/globals.css` with Tailwind v4 `@import "tailwindcss"` and full `@theme` token block (bg, surface, text, muted, accent, font-sans)
- [x] T004 Rewrite `src/app/layout.tsx` to load Geist Sans via `next/font`, apply font CSS variable to `<html>`, set `color-scheme: dark`, add basic metadata (title, description)
- [x] T005 Replace generated `src/app/page.tsx` with empty scaffold
- [x] T006 [P] Create directory structure: `src/components/sections/`, `src/components/ui/`, `src/components/layout/`, `src/data/`, `public/images/`
- [x] T007 Verify `npm run build` exits with zero errors on empty scaffold

**Checkpoint**: `npm run dev` serves a blank dark page with correct font and accent color.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared types, data constants, and UI primitives used by ≥2 user story phases.

- [x] T008 [P] Define TypeScript types in `src/data/types.ts`: `ExperienceEntry`, `StackEntry`, `StackCategory`, `ContactLink` (per data-model.md)
- [x] T009 [P] Populate `src/data/experience.ts` with all `ExperienceEntry[]` — reverse-chronological order
- [x] T010 [P] Populate `src/data/stack.ts` with all `StackEntry[]` grouped across AI/ML, Backend, Frontend, Infra
- [x] T011 [P] Populate `src/data/contact.ts` with `ContactLink[]` — email (mailto), LinkedIn (external), GitHub (external)
- [x] T012 Build `src/components/ui/AnimatedSection.tsx` (`'use client'`, Framer Motion `whileInView`, `viewport={{ once: true, margin: '-80px' }}`, `fadeInUp` variant, duration 0.5s ease-out)
- [x] T013 [P] Build `src/components/ui/ToolTag.tsx` — cyan-bordered pill badge
- [x] T014 [P] Build `src/components/ui/SectionHeading.tsx` — consistent `<h2>` with mono-font section label

**Checkpoint**: `src/data/` populated; primitives render correctly.

---

## Phase 3: User Story 1 — First Impression / Hero (Priority: P1) 🎯 MVP

**Goal**: Visitor sees name, professional title, and tagline above the fold on desktop and mobile.

**Independent Test**: Open the page — without scrolling, name, title, and tagline are visible on 375px and 1280px. Animation completes within 0.6s.

- [x] T015 [US1] Build `src/components/sections/Hero.tsx` — name, title, tagline, wrapped in `AnimatedSection`, full-viewport-height layout
- [x] T016 [US1] Wire `Hero` into `src/app/page.tsx` as first section
- [x] T017 [US1] Verify above-the-fold layout at 375px and 1280px

**Checkpoint**: US1 acceptance scenarios 1–3 pass.

---

## Phase 4: User Story 2 — Understanding the Profile / About (Priority: P2)

**Goal**: Visitor reads a personal statement and Jonathan's professional intent.

**Independent Test**: Render only About and verify both paragraphs are present and readable.

- [x] T018 [US2] Build `src/components/sections/About.tsx` — personal statement + "what I'm looking for", wrapped in `AnimatedSection`, uses `SectionHeading`
- [x] T019 [US2] Wire `About` into `src/app/page.tsx` after Hero
- [x] T020 [US2] Verify section enters viewport with animation

**Checkpoint**: US2 acceptance scenarios 1–2 pass.

---

## Phase 5: User Story 3 — Work History / Experience (Priority: P3)

**Goal**: Recruiter sees all roles in reverse-chronological order with company, role, dates, bullets, tool tags.

**Independent Test**: Render only Experience and verify all entries display in correct order with no horizontal scroll on 375px.

- [x] T021 [US3] Build `src/components/sections/Experience.tsx` — maps over `experience`, renders each entry with `ToolTag` pills; wrapped in `AnimatedSection`; uses `SectionHeading`
- [x] T022 [US3] Wire `Experience` into `src/app/page.tsx` after About
- [x] T023 [US3] Verify mobile layout at 375px — no horizontal overflow

**Checkpoint**: US3 acceptance scenarios 1–3 pass.

---

## Phase 6: User Story 4 — Tech Stack (Priority: P4)

**Goal**: Recruiter scans technologies grouped by category (AI/ML, Backend, Frontend, Infra).

**Independent Test**: Render only Stack and verify all four category groups are visible.

- [x] T024 [US4] Build `src/components/sections/Stack.tsx` — groups `stack` by `StackCategory`, renders each group with label + entries; wrapped in `AnimatedSection`; uses `SectionHeading`
- [x] T025 [US4] Wire `Stack` into `src/app/page.tsx`
- [x] T026 [US4] Verify all four categories render with correct entries

**Checkpoint**: US4 acceptance scenarios pass.

---

## Phase 7: User Story 6 — Projects Placeholder (Priority: P6)

**Goal**: Projects section shows a clear, intentional empty state.

**Independent Test**: Render only Projects and verify a purposeful message with no broken layout.

- [x] T027 [US6] Build `src/components/sections/Projects.tsx` — intentional empty state with styled container; uses `SectionHeading`; wrapped in `AnimatedSection`
- [x] T028 [US6] Insert `Projects` into `src/app/page.tsx` between Experience and Stack

**Checkpoint**: US6 acceptance scenario 1 passes.

---

## Phase 8: User Story 5 — Contact (Priority: P5)

**Goal**: Recruiter finds email, LinkedIn, GitHub in one place. Email opens mail client; external links open in new tab.

**Independent Test**: Render only Contact and verify all three links present and functional.

- [x] T029 [US5] Build `src/components/sections/Contact.tsx` — maps over `contact`; `mailto:` no target, external links `target="_blank" rel="noopener noreferrer"`; uses `SectionHeading`; wrapped in `AnimatedSection`
- [x] T030 [US5] Wire `Contact` into `src/app/page.tsx` as final section
- [x] T031 [US5] Verify all three links manually

**Checkpoint**: US5 acceptance scenarios 1–3 pass.

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Header/footer, responsive audit, build validation.

- [x] T032 [P] Add sticky `Header` in `src/components/layout/Header.tsx` with anchor links to each section id
- [x] T033 [P] Add `Footer` in `src/components/layout/Footer.tsx` — minimal, name + year
- [x] T034 Wire Header and Footer into `src/app/layout.tsx`
- [x] T035 Add `id` props to each section's root element matching Header anchors
- [x] T036 [P] Responsive audit at 320px — verify zero horizontal overflow across all sections (SC-004)
- [x] T037 [P] Responsive audit at 768px and 1280px
- [x] T038 Animation audit — each entrance animation ≤ 0.6s, does not block reading (SC-005)
- [x] T039 Run `npm run build` — verify zero errors (SC-006)
- [x] T040 Final link audit — all contact links functional, no broken anchors (SC-007)

**Checkpoint**: All MVP sections complete, build clean.

---

## Phase 10: CV Alignment (post-MVP)

**Purpose**: Align all site content with the canonical "AI Engineer · Startups" CV in the job-tracker API (constitution Principle I).

- [x] T041 Replace `src/data/experience.ts` with real CV experience (Interbanking — AI Engineer, Full Stack Developer)
- [x] T042 Replace `src/data/stack.ts` with real CV tools
- [x] T043 Fix LinkedIn URL in `src/data/contact.ts` to `/jonathan-alexis-montenegro`
- [x] T044 Update `About.tsx` with real CV `about` + `looking_for` copy
- [x] T045 Update `Hero.tsx` title to "AI Engineer · Fullstack" and add location

**Checkpoint**: Site content matches the CV source of truth.

---

## Phase 11: User Story 7 — Education & Languages (Priority: P7)

**Goal**: Combined section showing formal education and spoken languages. Also removes proficiency levels from the Stack (spec amendment, constitution v1.2.0).

**Independent Test**: Render only Education & Languages and verify the education entry (institution, degree, years) and both languages (name + level) are present.

- [x] T046 Remove `ProficiencyLevel` and `proficiency` field from `src/data/types.ts`, `stack.ts`, and `Stack.tsx`
- [x] T047 [P] Add `EducationEntry` and `Language` types in `src/data/types.ts`
- [x] T048 [P] Create `src/data/education.ts` (UNLZ — Computer Programming Technician, 2018–2020)
- [x] T049 [P] Create `src/data/languages.ts` (Spanish Native, English Professional)
- [x] T050 [US7] Build `src/components/sections/EducationLanguages.tsx` — two-column grid; uses `SectionHeading`; wrapped in `AnimatedSection`
- [x] T051 [US7] Wire `EducationLanguages` into `src/app/page.tsx` between Stack and Contact
- [x] T052 [US7] Add "Education" anchor link to Header

**Checkpoint**: US7 acceptance scenarios 1–2 pass. Seven sections in fixed order.

---

## Phase 12: Profile Photo

**Purpose**: Add a personal headshot avatar to the Hero.

- [x] T053 Crop and optimize source photo to 640×640 → `public/images/jonathan-avatar.jpg`
- [x] T054 Integrate avatar into `Hero.tsx` as a circular image (left of text) with cyan ring, using `next/image` with `priority`

**Checkpoint**: Avatar renders, build clean, no layout shift.

---

## Phase 13: Favicon & Pre-Deploy

**Purpose**: Branding and production readiness before deploy.

- [x] T055 Create `src/app/icon.svg` — "jm" monogram in cyan on dark, remove default `favicon.ico`
- [x] T056 Run `/speckit-analyze` — cross-artifact consistency check (spec ↔ plan ↔ tasks ↔ constitution); remediated C1 (Geist Mono token, constitution v1.3.0), C2 (FR-015/FR-016), I1 (plan to 7 sections), I2 (entity list)
- [x] T057 Final `npm run build` (zero errors) — content aligned to CV (B2 English, tools reordered by priority, education "Graduated")
- [x] T058a Push to GitHub `main` (origin: JonAleMonte1997/personal-site)
- [x] T058b Deploy on Vercel + custom domain → live at https://www.jmontenegro.dev (apex redirects, SSL active)

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** → **Phase 2 (Foundational)** → **Phases 3–8 (User Stories)** → **Phase 9 (Polish)**
- **Phases 10–13** are post-MVP increments, each independently shippable.
- Phase 13 (T056–T058) is the spec-closing sequence: analyze → verify → deploy.

---

## Notes

- No test tasks — no test suite configured per constitution
- `[P]` = safe to parallelize, different files, no shared mutable state
- Proficiency levels were removed in Phase 11 per constitution v1.2.0 (spec amendment)
- Constitution violations are build errors — stop and fix before continuing
