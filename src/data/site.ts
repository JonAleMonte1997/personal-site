// Única fuente de verdad del sitio: metadata, dominio y links públicos. La
// consumen layout.tsx (metadata), page.tsx (JSON-LD y los links), sitemap.ts,
// robots.ts y opengraph-image.tsx.
//
// Dominio de producción: el host www es el canónico, sin trailing slash.
//
// El EJE y las dos líneas de abajo no se inventan acá: salen de
// `~/Desktop/marca-personal/contenido/nicho.yml` (bloque `quien`), que es la
// fuente vigente de los cimientos de marca. Si el eje cambia, se cambia allá
// primero y acá después — nunca al revés, porque este sitio es la vidriera y
// aquél es la decisión.

export const site = {
  url: "https://www.jmontenegro.dev",
  name: "Jonathan Montenegro",
  title: "Jonathan Montenegro — Bajé de 144 a 74 kilos",
  description:
    "Bajé de 144 a 74 kilos, sin dieta de revista ni farmacia. Cuento cómo para el que ya probó todo y volvió a subir: por qué comés, no cuántas calorías.",
  tagline: "Bajé de 144 a 74 kilos y cuento cómo",
  locale: "es_AR",
} as const;

export interface Red {
  id: string;
  etiqueta: string;
  /** Lo que se lee debajo del nombre. Una línea, sin promesas. */
  detalle: string;
  url: string;
}

/**
 * Mis canales, en el orden en que quiero que se aprieten.
 *
 * Espejo de `~/Desktop/marca-personal/contenido/redes.yml`, que es donde
 * también los lee el dashboard de contenido. Son dos copias de la misma verdad
 * y hay que saberlo: **si un link cambia, se cambia en los dos**. El de allá
 * manda.
 *
 * ⚠️ El canal de YouTube es `@jonathan.montenegro.librefit`. El sitio publicó
 * durante meses `@jmontenegro.dev.1997`, que devuelve 404: era el handle de la
 * etapa anterior y nadie lo volvió a apretar.
 */
export const redes: Red[] = [
  {
    id: "youtube",
    etiqueta: "YouTube",
    detalle: "Cómo bajé de peso desde la obesidad, contado entero",
    url: "https://www.youtube.com/@jonathan.montenegro.librefit",
  },
  {
    id: "instagram",
    etiqueta: "Instagram",
    detalle: "El día a día",
    url: "https://www.instagram.com/jmontenegro.dev",
  },
  {
    id: "tiktok",
    etiqueta: "TikTok",
    detalle: "Lo mismo, más corto",
    url: "https://www.tiktok.com/@jmontenegro.dev",
  },
  {
    id: "facebook",
    etiqueta: "Facebook",
    detalle: "Por si me seguís de acá",
    url: "https://www.facebook.com/profile.php?id=61558634022838",
  },
];
