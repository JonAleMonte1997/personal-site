import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { libreFit } from "@/data/libre-fit";

export const metadata: Metadata = {
  title: "LibreFit",
  description: `${libreFit.resumen} Seguimiento público del desarrollo.`,
  alternates: { canonical: "/libre-fit" },
};

export default function LibreFitPage() {
  return (
    <main className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl space-y-20">
        <AnimatedSection>
          <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">
            Proyecto
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            {libreFit.nombre}
          </h1>
          <p className="mb-6 max-w-xl text-lg text-[var(--color-muted)]">
            {libreFit.resumen}
          </p>
          <p className="mb-8 inline-block rounded border border-[var(--color-surface)] px-3 py-1.5 font-mono text-xs text-[var(--color-muted)]">
            {libreFit.estado}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={libreFit.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded border border-[var(--color-accent)] px-5 py-3 font-mono text-sm text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
            >
              Código en GitHub
            </a>
            <Link
              href="/libre-fit/privacidad"
              className="inline-flex min-h-11 items-center rounded border border-[var(--color-surface)] px-5 py-3 font-mono text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
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
                className="rounded border border-[var(--color-surface)] bg-[var(--color-surface)]/50 p-5"
              >
                <h3 className="mb-2 text-sm font-semibold text-[var(--color-text)]">
                  {p.titulo}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">{p.detalle}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading label="Estado" title="Qué hay y qué viene" />
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
                Ya funciona
              </h3>
              <ul className="space-y-3">
                {libreFit.hecho.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[var(--color-accent)] pl-4 text-sm text-[var(--color-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                En camino
              </h3>
              <ul className="space-y-3">
                {libreFit.enCamino.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[var(--color-surface)] pl-4 text-sm text-[var(--color-muted)]"
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
                <p className="mb-1 font-mono text-xs text-[var(--color-accent)]">
                  {entrada.fecha}
                </p>
                <p className="text-[var(--color-muted)]">{entrada.nota}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
