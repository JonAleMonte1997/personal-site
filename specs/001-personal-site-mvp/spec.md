# Feature Specification: Personal Site MVP

**Feature Branch**: `001-personal-site-mvp`

**Created**: 2026-06-01

**Status**: Ready for planning

**Input**: Single-page personal website acting as an interactive CV and portfolio, targeting technical recruiters and hiring managers at AI-first startups.

## User Scenarios & Testing *(mandatory)*

### User Story 1 — First Impression (Priority: P1)

A technical recruiter lands on the site from a LinkedIn profile or job application link. Within seconds they need to understand who Jonathan is, what he does, and whether it's worth reading further.

**Why this priority**: This is the entry point for every visitor. If this fails, none of the other sections matter.

**Independent Test**: Can be fully tested by visiting the landing page and verifying that name, professional title, and a short positioning statement are immediately visible above the fold without scrolling.

**Acceptance Scenarios**:

1. **Given** a visitor opens the site, **When** the page loads, **Then** the visitor sees full name, professional title, and a short tagline without scrolling.
2. **Given** a visitor is on mobile, **When** the page loads, **Then** all above-the-fold content is readable and not truncated.
3. **Given** a visitor arrives, **When** the page finishes loading, **Then** content appears with a smooth entrance animation that does not delay readability.

---

### User Story 2 — Understanding the Profile (Priority: P2)

A recruiter who wants to know more scrolls past the hero and reads a personal statement explaining who Jonathan is and what kind of work he's looking for.

**Why this priority**: This converts initial curiosity into genuine interest. It's the first text-heavy section and must hold attention.

**Independent Test**: Can be tested independently by rendering only the About section and verifying both the personal statement and job-seeking intent are present and readable.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to the About section, **When** the section enters the viewport, **Then** a personal statement and a "what I'm looking for" paragraph are both visible.
2. **Given** a visitor reads the About section, **When** they finish, **Then** they understand Jonathan's values, working style, and the type of role he's seeking.

---

### User Story 3 — Reviewing Work History (Priority: P3)

A recruiter evaluates Jonathan's professional background by reading his experience timeline. They need to see roles, companies, timeframes, responsibilities, and tools used.

**Why this priority**: For technical roles, work history is the primary evaluation criteria. This section must convey depth and relevance quickly.

**Independent Test**: Can be tested independently by rendering only the Experience section and verifying all entries are complete and ordered chronologically (most recent first).

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to the Experience section, **When** it loads, **Then** all roles are displayed in reverse-chronological order with company, title, dates, bullet points, and tool tags.
2. **Given** a visitor is on mobile, **When** viewing the experience entries, **Then** entries are readable without horizontal scrolling and tool tags do not overflow.
3. **Given** a visitor scrolls through the section, **When** each entry enters the viewport, **Then** it animates in smoothly.

---

### User Story 4 — Discovering the Tech Stack (Priority: P4)

A technical recruiter scans the Stack section to quickly assess whether Jonathan's skill set matches their requirements, grouped by domain.

**Why this priority**: Stack is a fast filter for technical fit. Recruiters often scan it before reading experience in detail.

**Independent Test**: Can be tested independently by rendering only the Stack section and verifying technologies are grouped by category and each has a proficiency level.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to the Stack section, **When** it loads, **Then** technologies are visible grouped into categories (AI/ML, Backend, Frontend, Infra).
2. **Given** a visitor scans the section, **When** reading each item, **Then** a proficiency level is shown alongside each technology.

---

### User Story 5 — Making Contact (Priority: P5)

A recruiter who wants to reach out finds all necessary contact links in one place without searching the page.

**Why this priority**: Contact is the conversion goal. It must be frictionless and always reachable.

**Independent Test**: Can be tested independently by rendering only the Contact section and verifying all three links are present and functional.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to the Contact section, **When** it loads, **Then** email, LinkedIn, and GitHub links are all visible.
2. **Given** a visitor clicks any contact link, **When** the click is registered, **Then** the link opens correctly (email opens mail client, social links open in new tab).
3. **Given** a visitor is on mobile, **When** tapping the email link, **Then** the device mail client opens with the address pre-filled.

---

### User Story 6 — Projects Placeholder (Priority: P6)

A visitor navigates to the Projects section and sees a clean placeholder indicating projects will be available in the future.

**Why this priority**: Lowest priority — ships empty. The placeholder must not feel broken or unfinished.

**Independent Test**: Can be tested by rendering only the Projects section and verifying it shows a clear, intentional empty state rather than a blank or broken layout.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to the Projects section, **When** it loads, **Then** a clear and intentional empty state is shown with no broken layout.

---

### Edge Cases

- What happens when a visitor has JavaScript disabled? Content must still be readable — no blank page.
- What happens on very small screens (320px width)? No content should overflow or be cut off.
- What happens when a visitor scrolls very fast? Animations must not stack or glitch.
- What happens when a contact link is clicked on a device without a configured mail client? The behavior is browser-default and acceptable.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST present all six sections in fixed order: Hero, About, Experience, Projects, Stack, Contact.
- **FR-002**: The site MUST be navigable via vertical scroll from a single page — no routing between separate pages.
- **FR-003**: The Hero section MUST display name, professional title, and the tagline "I build AI systems that survive the real world" above the fold on both desktop and mobile.
- **FR-004**: The About section MUST contain a personal statement and a statement of professional intent (what Jonathan is looking for).
- **FR-005**: The Experience section MUST display all work entries in reverse-chronological order, each with company, role, date range, responsibility bullets, and tool tags.
- **FR-006**: The Projects section MUST display an intentional empty state — no broken or blank appearance.
- **FR-007**: The Stack section MUST group technologies by category and show a proficiency level for each entry.
- **FR-008**: The Contact section MUST provide working links for email, LinkedIn, and GitHub. The email link MUST open a mail client. External links MUST open in a new tab.
- **FR-009**: Every section MUST animate into view when entering the viewport during scroll. Animations MUST be subtle and MUST NOT delay content readability.
- **FR-010**: The site MUST be fully responsive and usable on screens ≥ 320px wide (mobile, tablet, desktop).
- **FR-011**: The site MUST render in dark mode only. No light mode is provided.
- **FR-012**: All visible content MUST be in English.
- **FR-013**: The site MUST be deployable as a static build with no server-side runtime dependency in production.

### Key Entities

- **Visitor**: Any person arriving at the site — primarily technical recruiters and hiring managers at AI-first startups.
- **Section**: A discrete content block within the single page (Hero, About, Experience, Projects, Stack, Contact). Each is independently scrollable and independently testable.
- **Experience Entry**: A single job record with company, role, date range, bullet points, and a list of tools used.
- **Stack Entry**: A single technology with name, category (AI/ML, Backend, Frontend, Infra), and proficiency level.
- **Contact Link**: A clickable item pointing to an external channel (email, LinkedIn, GitHub).

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can identify Jonathan's name, title, and primary positioning within 5 seconds of the page loading.
- **SC-002**: All six sections are reachable by scrolling from top to bottom without page navigation or additional interaction.
- **SC-003**: All contact links open their intended destination on the first tap or click, on both desktop and mobile.
- **SC-004**: The site renders without horizontal overflow on screens as narrow as 320px.
- **SC-005**: Every section entrance animation completes within 0.6 seconds and does not block reading the section content.
- **SC-006**: The site builds and deploys to production with zero build errors.
- **SC-007**: The site has no broken layouts, missing text, or non-functional links at the time of the first production deploy.

---

## Assumptions

- The visitor has a modern browser with JavaScript enabled. Graceful degradation for JS-disabled environments is best-effort, not a hard requirement for MVP.
- Content (personal statement, experience, stack) is finalized before production deploy. Placeholder content is acceptable only in the Projects section.
- Design system is fully resolved: Geist Sans (typography), Cyan #06b6d4 (accent), "I build AI systems that survive the real world" (tagline).
- The site is a personal project — no multi-user access, CMS, or content editing interface is needed.
- Analytics and SEO optimization are out of scope for MVP.
- The domain is already registered and connected to the deployment platform.
