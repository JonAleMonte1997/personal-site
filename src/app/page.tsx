import type { Metadata } from "next";
import Image from "next/image";
import { redes, site } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// El sitio entero: quién soy, dónde seguirme y la app que construí. No hay
// secciones ni navegación porque no hay segunda pantalla — un header con links
// a anclas de la misma vista es mueble, no orientación.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  description: site.description,
  url: site.url,
  sameAs: redes.map((red) => red.url),
};

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full ring-2 ring-brand ring-offset-4 ring-offset-bg">
            <Image
              src="/images/jonathan-avatar.jpg"
              alt="Retrato de Jonathan Montenegro"
              width={128}
              height={128}
              priority
              className="h-28 w-28 rounded-full object-cover"
            />
          </div>

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-content">
            {site.name}
          </h1>

          {/* Las dos líneas: lo que hice y a quién le sirve. Nada más. */}
          <p className="mt-4 text-lg text-content">
            Bajé de 144 a 74 kilos, sin dieta de revista ni farmacia.
          </p>
          <p className="mt-2 text-content-secondary">
            Cuento cómo para el que ya probó todo y volvió a subir: por qué
            comés, no cuántas calorías.
          </p>
        </div>

        <nav aria-label="Mis canales" className="mt-10 flex flex-col gap-3">
          {redes.map((red) => (
            <a
              key={red.id}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-between gap-4 rounded-xl bg-surface p-4 transition-colors hover:bg-surface-selected"
            >
              <span>
                <span className="block font-semibold text-content">
                  {red.etiqueta}
                </span>
                <span className="block text-sm text-content-secondary">
                  {red.detalle}
                </span>
              </span>
              <span aria-hidden className="font-mono text-sm text-brand">
                →
              </span>
            </a>
          ))}
        </nav>

        {/* LibreFit vive en su propio sitio: acá solo queda la card que linkea
            afuera, nunca una copia de su contenido ni de su política. */}
        <a
          href="https://www.librefit.app"
          className="mt-6 flex items-center gap-3 rounded-xl bg-surface p-4 transition-colors hover:bg-surface-selected"
        >
          <Image
            src="/images/librefit-logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0"
          />
          <span>
            <span className="block font-semibold text-content">LibreFit</span>
            <span className="block text-sm text-content-secondary">
              La app gratis donde llevo mis macros. La hice yo.
            </span>
          </span>
          <span aria-hidden className="ml-auto font-mono text-sm text-brand">
            →
          </span>
        </a>
      </div>
    </main>
  );
}
