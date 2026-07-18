// Única fuente de verdad para SEO/metadata y links públicos. La consumen
// layout.tsx (metadata), page.tsx (JSON-LD), sitemap.ts, robots.ts y
// opengraph-image.tsx.
// Dominio de producción: el host www es el canónico, sin trailing slash.

export const site = {
  url: "https://www.jmontenegro.dev",
  name: "Jonathan Montenegro",
  title: "Jonathan Montenegro — Reinvención y fe",
  description:
    "Pago con mi vida actual una vida nueva: dejo mi trabajo, mi departamento y mi ciudad, y me mudo solo a Bariloche con una mochila y una computadora. Documento todo el proceso.",
  tagline: "Pago con mi vida actual una vida nueva",
  locale: "es_AR",
  profiles: {
    // Handle heredado de la etapa anterior; si la marca cambia de handle,
    // actualizar solo acá.
    instagram: "https://www.instagram.com/jmontenegro.dev",
    youtube: "https://www.youtube.com/@jmontenegro.dev.1997" as string | null,
    github: "https://github.com/JonAleMonte1997",
    email: "jona.ch.dev@gmail.com",
  },
} as const;
