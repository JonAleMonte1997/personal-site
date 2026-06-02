# Quickstart: Personal Site MVP

## Prerequisites

- Node.js 20+
- npm 10+
- Vercel account (for deploy)

## Initial setup (first time only)

```bash
cd workspace/repos/personal-site

# Initialize Next.js project
npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-import-alias --eslint

# Install additional dependencies
npm install framer-motion
npm install geist
```

## Dev workflow

```bash
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve production build locally
```

## Project structure (post-init)

```
personal-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # root layout: font, metadata, dark mode
│   │   ├── page.tsx         # single page: all 6 sections in order
│   │   └── globals.css      # Tailwind v4 tokens + base styles
│   ├── components/
│   │   ├── sections/        # Hero, About, Experience, Projects, Stack, Contact
│   │   ├── ui/              # reusable primitives (AnimatedSection, ToolTag, etc.)
│   │   └── layout/          # Header (nav anchors), Footer
│   └── data/
│       ├── experience.ts    # ExperienceEntry[]
│       ├── stack.ts         # StackEntry[]
│       └── contact.ts       # ContactLink[]
├── public/
│   └── images/
├── specs/
└── .specify/
```

## Tailwind v4 token setup (globals.css)

```css
@import "tailwindcss";

@theme {
  --color-bg: #0d1117;
  --color-surface: #161b22;
  --color-text: #e6edf3;
  --color-muted: #8b949e;
  --color-accent: #06b6d4;
  --font-sans: var(--font-geist-sans);
}

:root {
  color-scheme: dark;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
}
```

## Framer Motion animation pattern

```tsx
// src/components/ui/AnimatedSection.tsx
'use client'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
```

## Deploy

Production deploys automatically on push to `main` via Vercel GitHub integration. No manual build step needed.
