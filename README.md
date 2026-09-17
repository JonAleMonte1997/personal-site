# personal-site

Sitio personal de Jonathan Montenegro — [www.jmontenegro.dev](https://www.jmontenegro.dev).

**Es una sola página**: quién soy en dos líneas, los links a mis canales y la card de LibreFit. Nada más, a propósito.

## Stack

Next.js (App Router) · Tailwind CSS v4 · TypeScript. Deploy automático en [Vercel](https://vercel.com) al pushear a `main`.

## Desarrollo

```bash
npm install
npm run dev    # http://localhost:3000
npm run check  # lint + typecheck
```

Todo el contenido editable vive en `src/data/site.ts` — metadata, dominio y links. Para actualizar el sitio casi nunca hace falta tocar componentes.
