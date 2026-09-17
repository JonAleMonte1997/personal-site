<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# personal-site

Sitio personal de Jonathan Montenegro (`www.jmontenegro.dev`), en español. **Es una sola página**: quién es en dos líneas, los links a sus canales y la card que lleva a LibreFit. Next.js (App Router) + Tailwind v4, deploy automático en Vercel al pushear a `main`.

El eje de marca —quién habla, a quién le habla y con qué diferencial— vive en `~/Desktop/marca-personal/contenido/nicho.yml`, bloque `quien`, y los canales en `contenido/redes.yml` del mismo repo. **Leer eso antes de escribir o reescribir cualquier copy**: acá se refleja una decisión que se toma allá. `~/Desktop/personal-brand/` está desactualizado y no se usa. El código de LibreFit vive en `~/Desktop/libre-fit/` y su sitio es `www.librefit.app`.

## Comandos

- `npm run dev` — servidor de desarrollo.
- `npm run check` — lint + typecheck. Correr antes de dar por terminada cualquier tarea.
- `npm run build` — build de producción; correrlo ante cambios estructurales (rutas nuevas, metadata, redirects) para detectar errores que el lint no ve.

## Estructura

- `src/app/` — `page.tsx` es el sitio entero. Al lado, solo SEO: `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.svg`.
- `src/data/site.ts` — todo el contenido editable: metadata, dominio y la lista de canales. No hay carpeta de componentes, y mientras haya una sola página no tiene que haberla.
- `next.config.ts` — los redirects de las URLs viejas de LibreFit.

## Convenciones

- Todo el contenido visible es en español (voseo argentino, primera persona, directo). Sin emojis, sin hashtags, sin frases motivacionales de plantilla ni preguntas de engagement. Nunca contra la persona con sobrepeso, siempre contra la creencia, y desde la experiencia propia. Código, identificadores y commits en inglés.
- Colores solo vía los tokens semánticos de `globals.css` (`bg-bg`, `bg-surface`, `bg-surface-selected`, `text-content`, `text-content-secondary`, `border-border`, `bg-brand`/`text-on-brand`, `bg-brand-pressed`) — espejo del design system de LibreFit (`~/Desktop/libre-fit/docs/design-system.md`). No introducir hex nuevos ni clases de paleta cruda.
- Formas LibreFit: cards `rounded-xl bg-surface p-4` (sin borde), botones `rounded-xl` (`bg-brand text-on-brand font-semibold` el primario, `border border-border bg-surface` el secundario), pills `rounded-full`.
- El repo de LibreFit es privado: no linkearlo ni afirmar en el sitio que el código es abierto/público.
- Contenido nuevo va en `src/data/site.ts` como datos tipados; la página solo renderiza.

## Contratos que no se rompen

- **El sitio es una sola página.** Sin header, sin footer, sin secciones y sin navegación: no hay segunda pantalla que navegar, y un header con anclas a la misma vista es mueble. Agregar una sección es deshacer la decisión, no mejorarla — lo que crece va a su propio sitio, como LibreFit.
- **Las URLs viejas de LibreFit se redirigen, nunca se borran.** `/libre-fit/privacidad` es la política que quedó publicada afuera (fichas de tienda, pantalla de consentimiento de Google, links en videos). Un 404 ahí es una app sin política alcanzable, no un link roto más. Los redirects están en `next.config.ts` y apuntan a `www.librefit.app`.
- **Ningún contenido de LibreFit se copia acá.** Ni el estado del proyecto, ni la política, ni el roadmap. Tener dos verdades sobre el mismo producto fue exactamente lo que dejó una política de julio de 2026 publicada durante meses diciendo que la app no tenía backend cuando ya sincronizaba con una cuenta.
- **Los links de `src/data/site.ts` son un espejo de `marca-personal/contenido/redes.yml`.** Si uno cambia, se cambia en los dos, y el de allá manda.
- El dominio canónico es `https://www.jmontenegro.dev` (host www, sin trailing slash), centralizado en `src/data/site.ts`. Si algún día cambia el dominio de la marca, se cambia solo ahí.
