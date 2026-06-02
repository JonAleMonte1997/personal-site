# Feature Specification: UI Polish, Responsive Hardening & SEO

**Feature Branch**: `002-ui-responsive-seo`

**Created**: 2026-06-02

**Status**: Draft

**Input**: User description: "Mejorar la UI del personal-site, agregar diseño responsive (mobile/tablet/desktop) y optimización SEO (meta tags, Open Graph, structured data, sitemap, performance)."

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Rich Social & Search Previews (Priority: P1)

A recruiter shares Jonathan's site link on LinkedIn, Slack, or X, or finds it through a search engine. Instead of a bare URL, the link unfurls into a rich card with title, description, and a branded preview image, and the search result shows a clear, accurate title and description.

**Why this priority**: The MVP shipped with SEO and social metadata explicitly out of scope. Most traffic to a personal site arrives via shared links and search; without proper previews the site looks unfinished and loses clicks at the very first touchpoint. This is the highest incremental value over the existing MVP.

**Independent Test**: Can be fully tested by pasting the site URL into a link-preview debugger (LinkedIn Post Inspector, Slack, X card validator) and verifying a complete card renders, and by inspecting the served page metadata for title, description, canonical URL, and social tags.

**Acceptance Scenarios**:

1. **Given** the site URL is pasted into a social platform or chat app, **When** the link unfurls, **Then** a preview card shows a descriptive title, a one-line description, and a branded preview image with no broken or missing fields.
2. **Given** a search engine indexes the site, **When** the result is displayed, **Then** the title and meta description accurately describe Jonathan as an AI Engineer and match the page content.
3. **Given** any crawler or preview bot requests the page, **When** it reads the document head, **Then** it finds a unique page title, meta description, canonical URL, Open Graph tags, and Twitter/X card tags.

---

### User Story 2 — Reliable Experience Across Devices (Priority: P2)

A recruiter opens the site on whatever device is at hand — a phone between meetings, a tablet, or a desktop. Every section adapts to the screen: text is legible, spacing feels intentional, tap targets are reachable, and nothing overflows or overlaps at any width.

**Why this priority**: Recruiters frequently open links on mobile first. The MVP claims baseline responsiveness, but this story hardens behavior across the full breakpoint range and removes any overflow, cramped spacing, or unreachable tap targets so the site never feels broken on a given device.

**Independent Test**: Can be tested by loading every section at representative widths (320px, 375px, 768px, 1024px, 1440px) and verifying no horizontal scroll, no clipped or overlapping content, legible type, and comfortably sized interactive targets.

**Acceptance Scenarios**:

1. **Given** the site is viewed at any width from 320px upward, **When** the visitor scrolls through all sections, **Then** there is no horizontal overflow and no content is clipped or overlapping.
2. **Given** the site is viewed on a phone, **When** the visitor reads each section, **Then** body text remains legible without zooming and interactive elements are large enough to tap accurately.
3. **Given** the site is viewed on tablet and desktop, **When** sections render, **Then** layouts use the available width with intentional spacing rather than stretched or orphaned content.
4. **Given** the device orientation changes (portrait ↔ landscape), **When** the layout reflows, **Then** no section breaks or introduces overflow.

---

### User Story 3 — Fast, Crawlable Site (Priority: P3)

A search engine crawler and a first-time visitor both reach the site. The crawler finds a sitemap and crawl directives and can index all content; the visitor sees the page load quickly and become interactive without layout jumps.

**Why this priority**: Crawlability and performance compound the value of US1 — good metadata only helps if engines can discover and rank the page, and a slow or janky load undermines the first impression regardless of content quality.

**Independent Test**: Can be tested by requesting the sitemap and crawl-directive files and confirming they list the canonical site URL, and by measuring load and stability metrics on a representative connection.

**Acceptance Scenarios**:

1. **Given** a crawler requests the site's crawl-directives file, **When** it reads it, **Then** it finds a reference to a sitemap and no rules that block indexing of public content.
2. **Given** a crawler requests the sitemap, **When** it parses it, **Then** the canonical site URL is listed with a valid structure.
3. **Given** a visitor on a typical mobile connection loads the page, **When** the page renders, **Then** the largest content element appears quickly and the layout does not shift as assets finish loading.

---

### User Story 4 — Polished Visual Presentation (Priority: P4)

A visitor moves through the page and perceives a cohesive, considered design: consistent vertical rhythm between sections, clear visual hierarchy, aligned elements, and subtle interactive feedback — all within the existing dark, single-accent aesthetic.

**Why this priority**: Visual polish raises perceived quality and credibility, but it builds on top of content and responsiveness that already exist. It is refinement, not new capability, so it ranks below discoverability and cross-device reliability.

**Independent Test**: Can be tested by reviewing each section against a consistency rubric (spacing scale, heading hierarchy, alignment, hover/focus feedback) and verifying adherence without any change to the established color, typography, or layout system.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls the full page, **When** moving between sections, **Then** spacing and rhythm are consistent and no section feels cramped or arbitrarily spaced.
2. **Given** a visitor views headings and body text, **When** scanning the page, **Then** a clear and consistent typographic hierarchy distinguishes section titles, subheadings, and body copy.
3. **Given** a visitor hovers or focuses an interactive element (link, contact item), **When** the interaction occurs, **Then** the element gives subtle, consistent visual feedback.
4. **Given** any visual refinement is applied, **When** the page renders, **Then** it still uses only the established dark theme, the Geist type system, and the single cyan accent — no new colors, fonts, or light mode.

---

### Edge Cases

- What happens when a preview bot cannot load the preview image? The card MUST still render with title and description; the missing image MUST NOT break the card.
- What happens on ultra-wide screens (≥ 2560px)? Content MUST remain within a comfortable reading width and not stretch edge-to-edge.
- What happens at the narrowest supported width (320px)? No section, tag, or image may overflow or be clipped.
- What happens when a visitor uses keyboard-only navigation? Interactive elements MUST show a visible focus state and follow a logical order.
- What happens when JavaScript is disabled? Core content and metadata MUST still be present in the served HTML.
- What happens when the same page is shared on multiple platforms with different card requirements? The metadata MUST satisfy the common requirements (title, description, image dimensions) for all targeted platforms.

---

## Requirements *(mandatory)*

### Functional Requirements

#### SEO & Metadata

- **FR-001**: Each page MUST expose a unique, descriptive document title and a meta description that accurately reflect Jonathan's profile as an AI Engineer.
- **FR-002**: The page MUST declare a canonical URL pointing to the production domain.
- **FR-003**: The page MUST include Open Graph metadata (title, description, type, URL, image) sufficient to render a complete preview card on LinkedIn, Slack, and X.
- **FR-004**: The page MUST include Twitter/X card metadata consistent with the Open Graph values.
- **FR-005**: The page MUST provide a branded social preview image that adheres to the established design system (dark theme, cyan accent, Geist typography) and meets the dimensions expected by major platforms.
- **FR-006**: The page MUST include structured data describing Jonathan as a person (name, job title, links to professional profiles) in a format consumable by search engines.
- **FR-007**: The site MUST serve a crawl-directives file that permits indexing of public content and references the sitemap.
- **FR-008**: The site MUST serve a sitemap listing the canonical site URL with a valid structure.
- **FR-009**: The document MUST declare its primary language and appropriate viewport configuration for mobile rendering.

#### Responsiveness

- **FR-010**: Every section MUST render without horizontal overflow or clipped content at all widths from 320px upward.
- **FR-011**: Interactive elements MUST present tap targets large enough for accurate touch interaction on mobile.
- **FR-012**: Body and heading text MUST remain legible without manual zoom across mobile, tablet, and desktop.
- **FR-013**: Layouts MUST adapt to make intentional use of available space at tablet and desktop widths, and MUST constrain content to a comfortable reading width on ultra-wide screens.
- **FR-014**: The layout MUST reflow without breakage on orientation change (portrait ↔ landscape).

#### Performance

- **FR-015**: The largest visible content element MUST appear quickly on a typical mobile connection, with no layout shift as remaining assets load.
- **FR-016**: Images (including the profile avatar and preview image) MUST be served at appropriate dimensions and MUST NOT cause layout shift on load.
- **FR-017**: The site MUST remain statically generated with no server-side runtime in production, preserving the constitution's performance-by-default principle.

#### Visual Polish (within existing design system)

- **FR-018**: Spacing between and within sections MUST follow a consistent scale, eliminating cramped or arbitrarily spaced sections.
- **FR-019**: A consistent typographic hierarchy MUST distinguish section titles, subheadings, and body text across all sections.
- **FR-020**: Interactive elements MUST provide consistent, subtle hover and focus feedback.
- **FR-021**: All visual refinements MUST stay within the established design system — dark mode only, Geist Sans + Geist Mono, single cyan accent (#06b6d4), Tailwind-based styling — introducing no new colors, typefaces, or a light mode.

#### Accessibility (supports SEO and UX)

- **FR-022**: All meaningful images MUST have descriptive alternative text.
- **FR-023**: The page MUST use semantic landmarks and a logical heading order so assistive technology and crawlers can interpret structure.
- **FR-024**: Interactive elements MUST be reachable and operable via keyboard with a visible focus indicator.
- **FR-025**: Text and interactive elements MUST meet legibility contrast expectations against the dark background.

### Key Entities

- **Page Metadata**: The set of head-level descriptors for a page — title, description, canonical URL, language, Open Graph tags, Twitter/X card tags.
- **Social Preview Image**: A branded image used by platforms to render link cards, conforming to the design system and platform dimension requirements.
- **Structured Data Record**: A machine-readable description of Jonathan as a person, including name, role, and professional profile links.
- **Crawl Directives**: Instructions to search-engine crawlers governing indexing and referencing the sitemap.
- **Sitemap**: A machine-readable listing of the site's canonical URL(s).
- **Breakpoint**: A representative screen width (e.g., 320, 375, 768, 1024, 1440px) at which layout behavior is verified.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Pasting the site URL into LinkedIn, Slack, and X produces a complete preview card (title, description, image) with zero missing or broken fields on all three platforms.
- **SC-002**: A search engine result for the site shows a title and description that accurately describe Jonathan as an AI Engineer.
- **SC-003**: The site renders with no horizontal overflow and no clipped or overlapping content at every tested width from 320px to 1440px.
- **SC-004**: On a typical mobile connection, the largest visible content element appears within 2.5 seconds and cumulative layout shift stays below 0.1.
- **SC-005**: Every interactive element is reachable and operable by keyboard with a visible focus state, and a full keyboard pass completes without traps.
- **SC-006**: A search-engine/SEO audit of the deployed site reports no missing critical metadata (title, description, canonical, Open Graph, structured data, sitemap, crawl directives).
- **SC-007**: A visual consistency review confirms uniform spacing rhythm and typographic hierarchy across all seven sections with no design-system violations (no new colors, fonts, or light mode).
- **SC-008**: The site builds and deploys to production as a static build with zero build errors.

---

## Assumptions

- This feature builds on the shipped MVP (`specs/001-personal-site-mvp/`); all seven sections and their content already exist and are not being redefined here.
- "Improving the UI" means polish and consistency **within** the existing design system, not a redesign. The constitution's NON-NEGOTIABLE design principles (dark-only, Geist Sans + Geist Mono, single cyan accent, Tailwind v4, SSG) remain binding.
- The production domain is `https://www.jmontenegro.dev` (registered and stable), used as the canonical URL, the base for absolute Open Graph image references, and the sitemap entry. The `www` host is treated as canonical.
- A single branded social preview image (one design) is sufficient for all platforms; per-section or dynamically generated images are out of scope.
- The site remains a single page in English; SEO scope covers that one page (no multi-page sitemap, no i18n metadata).
- Web analytics / tracking is out of scope for this feature — it covers discoverability metadata and performance, not visitor measurement.
- Performance targets reference widely used Core Web Vitals thresholds as user-facing proxies, not a specific measurement tool.
- The existing MVP responsiveness is a starting point; this feature hardens and verifies it across the full breakpoint range rather than introducing responsiveness from zero.
