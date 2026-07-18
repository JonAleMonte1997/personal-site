# personal-site

Sitio personal de Jonathan Montenegro — [www.jmontenegro.dev](https://www.jmontenegro.dev).

Cuenta la historia de mi marca personal (reinvención y fe: dejo todo y me mudo a Bariloche en agosto de 2026) y aloja las páginas públicas de [LibreFit](https://github.com/JonAleMonte1997/libre-fit):

- `/` — la historia, dónde seguirla (YouTube/Instagram) y contacto.
- `/libre-fit` — seguimiento público del desarrollo de la app.
- `/libre-fit/privacidad` — política de privacidad de LibreFit (URL usada por las tiendas).

## Stack

Next.js (App Router) · Tailwind CSS v4 · Framer Motion · TypeScript. Deploy automático en [Vercel](https://vercel.com) al pushear a `main`.

## Desarrollo

```bash
npm install
npm run dev    # http://localhost:3000
npm run check  # lint + typecheck
```

El contenido editable vive en `src/data/` (`site.ts` para metadata y links, `libre-fit.ts` para el estado del proyecto) — para actualizar el sitio casi nunca hace falta tocar componentes.
