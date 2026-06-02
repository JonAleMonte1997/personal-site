// Single source of truth for SEO/metadata. Consumed by layout.tsx (metadata),
// page.tsx (JSON-LD), sitemap.ts, robots.ts, and opengraph-image.tsx.
// Production domain: www host is canonical, no trailing slash.

export const site = {
  url: "https://www.jmontenegro.dev",
  name: "Jonathan Montenegro",
  title: "Jonathan Montenegro — AI Engineer",
  description:
    "AI Engineer building autonomous agents, LLM-powered systems, and RAG pipelines in production. I build AI systems that survive the real world.",
  jobTitle: "AI Engineer",
  locale: "en_US",
  profiles: {
    linkedin: "https://linkedin.com/in/jonathan-alexis-montenegro",
    github: "https://github.com/JonAleMonte1997",
    email: "jona.ch.dev@gmail.com",
  },
} as const;
