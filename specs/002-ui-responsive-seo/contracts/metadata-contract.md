# UI Contract: SEO Outputs & Responsive/Visual Acceptance

The "interface" this feature exposes is the document head, the metadata routes, and the rendered responsive layout. This contract defines what MUST be present and verifiable.

## 1. Document `<head>` — required tags

| Tag | Requirement | Source FR |
|-----|-------------|-----------|
| `<title>` | Unique, non-empty, describes Jonathan as AI Engineer | FR-001 |
| `<meta name="description">` | Non-empty, matches page content | FR-001 |
| `<link rel="canonical">` | Absolute production URL | FR-002 |
| `<html lang>` | `en` | FR-009 |
| `<meta name="viewport">` | width=device-width, initial-scale=1 (Next default) | FR-009 |
| `<meta property="og:title">` | Present | FR-003 |
| `<meta property="og:description">` | Present | FR-003 |
| `<meta property="og:type">` | `website` | FR-003 |
| `<meta property="og:url">` | Absolute production URL | FR-003 |
| `<meta property="og:image">` | Absolute URL to preview image | FR-003, FR-005 |
| `<meta property="og:image:width/height">` | `1200` / `630` (auto from file convention) | FR-005 |
| `<meta name="twitter:card">` | `summary_large_image` | FR-004 |
| `<meta name="twitter:title/description/image">` | Consistent with OG | FR-004 |
| `<script type="application/ld+json">` | Valid `Person` schema, XSS-escaped | FR-006 |

## 2. `/robots.txt` (generated)

```
User-Agent: *
Allow: /

Sitemap: https://<production-url>/sitemap.xml
```

- MUST NOT disallow public content. FR-007.

## 3. `/sitemap.xml` (generated)

- Valid XML `<urlset>`.
- Contains exactly one `<url>` with `<loc>` = canonical production URL. FR-008.

## 4. Social preview image (`/opengraph-image.png`)

- 1200×630, dark theme, cyan accent, Geist typography. FR-005.
- If it fails to load, the card still renders title + description (graceful). Edge case.

## 5. Responsive acceptance (verified per breakpoint)

Verified at **320, 375, 768, 1024, 1440, ≥2560px**:

| Check | Pass condition | FR / SC |
|-------|----------------|---------|
| Horizontal overflow | none at any width | FR-010 / SC-003 |
| Content clipping/overlap | none | FR-010 / SC-003 |
| Tap targets | comfortably tappable on touch | FR-011 |
| Text legibility | readable without zoom | FR-012 |
| Tablet/desktop layout | intentional use of width | FR-013 |
| Ultra-wide | content constrained to reading width | FR-013 |
| Orientation change | reflows without breakage | FR-014 |

## 6. Performance acceptance (deployed build)

| Metric | Threshold | FR / SC |
|--------|-----------|---------|
| LCP (typical mobile) | < 2.5s | FR-015 / SC-004 |
| CLS | < 0.1 | FR-015, FR-016 / SC-004 |
| Server runtime | none (static build) | FR-017 / SC-008 |

## 7. Accessibility acceptance

| Check | Pass condition | FR / SC |
|-------|----------------|---------|
| Image alt text | all meaningful images have descriptive alt | FR-022 |
| Semantic structure | landmarks + logical heading order | FR-023 |
| Keyboard operability | all interactive elements reachable, visible focus, no traps | FR-024 / SC-005 |
| Contrast | text/interactive meet legibility on dark bg | FR-025 |

## 8. Visual-system acceptance

| Check | Pass condition | FR / SC |
|-------|----------------|---------|
| Spacing rhythm | consistent across all 7 sections | FR-018 / SC-007 |
| Typographic hierarchy | consistent title/eyebrow/body | FR-019 / SC-007 |
| Hover/focus feedback | consistent on all interactive elements | FR-020 |
| Design-system fidelity | no new colors/fonts, no light mode | FR-021 / SC-007 |
