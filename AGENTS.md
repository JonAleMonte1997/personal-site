<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# personal-site

Sitio personal de Jonathan Montenegro (`www.jmontenegro.dev`), en español. Cuenta la historia de su marca personal (reinvención y fe: mudanza a Bariloche en agosto 2026) y aloja las páginas públicas de LibreFit: seguimiento del proyecto y su política de privacidad. Next.js (App Router) + Tailwind v4 + Framer Motion, deploy automático en Vercel al pushear a `main`.

El contexto de la marca (historia, voz, pilares) vive en `~/Desktop/personal-brand/` — leer `marca/identidad.md` antes de escribir o reescribir copy del sitio. El código de LibreFit vive en `~/Desktop/libre-fit/`.

## Comandos

- `npm run dev` — servidor de desarrollo.
- `npm run check` — lint + typecheck. Correr antes de dar por terminada cualquier tarea.
- `npm run build` — build de producción; correrlo ante cambios estructurales (rutas nuevas, metadata) para detectar errores que el lint no ve.

## Estructura

- `src/app/` — rutas: home (`page.tsx`), `/libre-fit` (seguimiento) y `/libre-fit/privacidad`, más SEO (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`).
- `src/components/sections/` — secciones de la home; `layout/` header y footer; `ui/` primitivas reutilizables.
- `src/data/` — todo el contenido editable vive acá, no en los componentes:
  - `site.ts` — única fuente de verdad de URL, metadata y links públicos (Instagram, YouTube, email). El canal de YouTube está en `null` hasta que exista; al completarlo, la sección "Seguime" lo muestra sola.
  - `libre-fit.ts` — estado público de LibreFit (hecho / en camino / bitácora). Actualizar este archivo cuando avance el proyecto.

## Convenciones

- Todo el contenido visible es en español (voseo argentino, directo, sin relleno). Código, identificadores y commits en inglés.
- Colores solo vía los tokens de `globals.css` (`--color-bg`, `--color-surface`, `--color-text`, `--color-muted`, `--color-accent`) — no introducir hex nuevos ni más acentos.
- Contenido nuevo va en `src/data/` como datos tipados; los componentes solo renderizan.
- Animaciones de aparición: envolver en `AnimatedSection` (ya maneja `prefers-reduced-motion` implícito vía Framer y el fallback `<noscript>`).

## Contratos que no se rompen

- **`/libre-fit/privacidad` es la URL de política de privacidad que usan las fichas de Google Play y App Store.** No renombrar ni eliminar esa ruta; si cambia el esquema de datos de la app, actualizar el texto y la fecha de "Última actualización".
- El dominio canónico es `https://www.jmontenegro.dev` (host www, sin trailing slash), centralizado en `src/data/site.ts`. Si algún día cambia el dominio de la marca, se cambia solo ahí.
