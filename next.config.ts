import type { NextConfig } from "next";

// El sitio dejó de alojar las páginas públicas de LibreFit: ahora viven en
// www.librefit.app, que es el único lugar donde se editan.
//
// ⛔ LAS URLS VIEJAS NO SE BORRAN, SE REDIRIGEN. `/libre-fit/privacidad` es la
// URL de la política que quedó publicada afuera —fichas de tienda, pantalla de
// consentimiento de Google, links en videos—, y un 404 ahí no es un link roto
// más: es una app sin política de privacidad alcanzable. El catch-all cubre
// cualquier otra que haya quedado indexada.
//
// `permanent: true` emite 308 y no 301: Next usa 307/308 a propósito para que
// el método de la request se preserve. Para un buscador o para el CDN de Apple
// significa lo mismo que un 301 — permanente y cacheable.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/libre-fit/privacidad",
        destination: "https://www.librefit.app/privacidad",
        permanent: true,
      },
      {
        source: "/libre-fit",
        destination: "https://www.librefit.app",
        permanent: true,
      },
      {
        source: "/libre-fit/:path*",
        destination: "https://www.librefit.app",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
