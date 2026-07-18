import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { libreFit } from "@/data/libre-fit";

export const metadata: Metadata = {
  title: "LibreFit",
  description: `${libreFit.resumen} Seguimiento del desarrollo.`,
  alternates: { canonical: "/libre-fit" },
};

export default function LibreFitPage() {
  return (
    <main className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl space-y-20">
        <AnimatedSection>
          <p className="mb-3 font-mono text-sm text-brand">
            Proyecto
          </p>
          <div className="mb-4 flex items-center gap-4">
            <Image
              src="/images/librefit-logo.png"
              alt=""
              width={72}
              height={72}
              priority
              className="h-14 w-14 sm:h-[72px] sm:w-[72px]"
            />
            <h1 className="text-4xl font-bold tracking-tight text-content sm:text-5xl">
              {libreFit.nombre}
            </h1>
          </div>
          <p className="mb-6 max-w-xl text-lg text-content-secondary">
            {libreFit.resumen}
          </p>
          <p className="mb-8 inline-block rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-content-secondary">
            {libreFit.estado}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/libre-fit/privacidad"
              className="inline-flex min-h-11 items-center rounded-xl border border-border bg-surface px-6 py-3 text-base font-semibold text-content transition-colors hover:bg-surface-selected"
            >
              Política de privacidad
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading label="Principios" title="Cómo está pensada" />
          <div className="grid gap-6 sm:grid-cols-3">
            {libreFit.principios.map((p) => (
              <div
                key={p.titulo}
                className="rounded-xl bg-surface p-4"
              >
                <h3 className="mb-2 text-sm font-semibold text-content">
                  {p.titulo}
                </h3>
                <p className="text-sm text-content-secondary">{p.detalle}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading label="Estado" title="Qué hay y qué viene" />
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-brand">
                Ya funciona
              </h3>
              <ul className="space-y-3">
                {libreFit.hecho.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-brand pl-4 text-sm text-content-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-content-secondary">
                En camino
              </h3>
              <ul className="space-y-3">
                {libreFit.enCamino.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-border pl-4 text-sm text-content-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading label="Bitácora" title="Últimas novedades" />
          <div className="space-y-6">
            {libreFit.bitacora.map((entrada) => (
              <div key={entrada.fecha}>
                <p className="mb-1 font-mono text-xs text-brand">
                  {entrada.fecha}
                </p>
                <p className="text-content-secondary">{entrada.nota}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
