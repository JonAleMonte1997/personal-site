<!-- Sync Impact Report
Version change: 0.0.0 (template) → 1.0.0 (initial ratification)
Added sections: Core Principles (I–V), Design System, Development Workflow, Governance
Templates requiring updates:
  ✅ .specify/memory/constitution.md (this file)
  ⚠ .specify/templates/plan-template.md (verify on next /speckit-plan run)
  ⚠ .specify/templates/spec-template.md (verify on next /speckit-specify run)
  ⚠ .specify/templates/tasks-template.md (verify on next /speckit-tasks run)
Deferred: TODO(ACCENT_COLOR), TODO(TYPOGRAPHY), TODO(TAGLINE)
-->

# personal-site Constitution

## Core Principles

### I. Content-First (NON-NEGOTIABLE)
All design and implementation decisions MUST serve the content, not the other way around.
The source of truth for copy is the CV "AI Engineer · Startups" stored in the job-tracker API.
No placeholder text ships to production — every section MUST have real content before deploy.
Deferred items (tagline, typography, accent color) MUST be resolved before the first production deploy.

### II. Performance by Default
The site MUST be statically generated (SSG) — no server-side runtime, no API calls in production.
No unnecessary JavaScript. Client components MUST be explicitly justified; prefer Server Components.
Animations MUST NOT block rendering or cause layout shifts (CLS > 0 is a bug).
Framer Motion is the only animation library allowed — no mixing with CSS keyframes for entrance effects.

### III. Design System Consistency (NON-NEGOTIABLE)
Dark mode only — no light mode, no system-preference toggle, no `prefers-color-scheme` switching.
All colors MUST use CSS custom properties (tokens) — no hardcoded hex values anywhere in the codebase.
Typography: one modern sans-serif font. TODO(TYPOGRAPHY): to be defined before implementation starts.
Accent: one color only. TODO(ACCENT_COLOR): to be defined before implementation starts.
Tailwind CSS v4 is the only styling system — no inline styles, no CSS Modules, no styled-components.

### IV. Spec-Driven Changes
Every new section, component, or visual change MUST start with an update to `docs/spec.md`.
No implementation without a corresponding spec entry.
All items under "Pendiente de definir" in `docs/spec.md` MUST be resolved in spec before coding begins.

### V. Simplicity — No Premature Abstractions
Three similar elements are better than a premature abstraction.
No utility wrappers or component libraries beyond what the project explicitly requires.
The Projects section ships as an empty state — no architecture for future cards until cards are needed.
No backend, no CMS, no database. All content lives in TypeScript constants or data files.

## Design System

Canonical design decisions that all implementation MUST follow:

- **Layout**: Single page, vertical scroll. Six sections in fixed order: Hero → About → Experience → Projects → Stack → Contact.
- **Container**: Full-width sections with a centered max-width container.
- **Animations**: Framer Motion `whileInView` with `fadeInUp` / `fadeIn` variants. Each section animates on scroll entry. Duration MUST be ≤ 0.6s with ease-out easing.
- **Responsive**: Mobile-first. MUST render correctly on mobile, tablet, and desktop.
- **Language**: English only. No i18n, no language switcher.
- **TODO(TAGLINE)**: Hero tagline — one short line — to be defined before Hero implementation.
- **TODO(TYPOGRAPHY)**: Font family to be confirmed before any implementation begins.
- **TODO(ACCENT_COLOR)**: Single accent color to be confirmed before any implementation begins.

## Development Workflow

- Changes follow: spec update → implementation → acceptance criteria verification.
- Acceptance criteria live in `docs/spec.md` and MUST be checked off before marking a section complete.
- Deploy target: Vercel. Production deploys trigger on push to `main`.
- No commits directly to `main` during active development — use feature branches.
- Before any implementation session: read `docs/spec.md` and this constitution.

## Governance

This constitution supersedes any conflicting ad-hoc decisions made during implementation.
Amendments require updating this file with a version bump and a Sync Impact Report entry.
Version semantics:
- MAJOR: removal or redefinition of a NON-NEGOTIABLE principle.
- MINOR: new principle or section added.
- PATCH: wording clarification or typo fix.

All TODOs in this constitution MUST be resolved before the v1.0.0 production deploy.

**Version**: 1.0.0 | **Ratified**: 2026-06-01 | **Last Amended**: 2026-06-01
