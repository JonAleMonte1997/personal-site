# Data Model: Personal Site MVP

All entities live in `src/data/` as TypeScript constants. No runtime storage.

## ExperienceEntry

```ts
type ExperienceEntry = {
  company: string        // e.g. "Klang"
  role: string           // e.g. "Backend Developer"
  startDate: string      // ISO month: "2024-03"
  endDate: string | null // null = present
  bullets: string[]      // responsibility bullets (English)
  tools: string[]        // technology tags shown as pills
}
```

**Ordering**: Array declared in reverse-chronological order (most recent first). No runtime sorting.

**Validation rules**: All fields required except `endDate`. `bullets` min length 1. `tools` min length 1.

## StackEntry

```ts
type StackCategory = 'AI/ML' | 'Backend' | 'Frontend' | 'Infra'

type StackEntry = {
  name: string
  category: StackCategory
}
```

**Grouping**: Computed at render time by filtering `src/data/stack.ts` per category. Render order: AI/ML → Backend → Frontend → Infra.

## EducationEntry

```ts
type EducationEntry = {
  institution: string
  degree: string
  startYear: number
  endYear: number | null  // null = ongoing
}
```

**Ordering**: Array declared most-recent first.

## Language

```ts
type Language = {
  name: string   // e.g. "Spanish", "English"
  level: string  // e.g. "Native", "Professional"
}
```

## ContactLink

```ts
type ContactLink = {
  label: string   // e.g. "Email", "LinkedIn", "GitHub"
  href: string    // full URL or mailto:
  external: boolean  // true = open in new tab
}
```

**Constraints**: Exactly 3 entries (email, LinkedIn, GitHub). Email `href` starts with `mailto:`. External links have `external: true`.

## Section ordering (UI contract)

Sections render in this fixed order — enforced by layout, not by data:

```
1. Hero
2. About
3. Experience
4. Projects (empty state)
5. Stack
6. Education & Languages
7. Contact
```

No data entity drives this order. It is hardcoded in `src/app/page.tsx`.
