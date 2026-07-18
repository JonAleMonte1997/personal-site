import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { libreFit } from "@/data/libre-fit";

export function Proyectos() {
  return (
    <section id="proyectos" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <SectionHeading
            label="Proyectos"
            title="Lo que construyo en el camino"
          />
          <p className="mb-10 text-[var(--color-muted)]">
            Empezar de nuevo no es solo mudarme: también es elegir en qué
            trabajo. Esto es lo que estoy construyendo, en público.
          </p>
          <Link
            href="/libre-fit"
            className="block rounded border border-[var(--color-surface)] bg-[var(--color-surface)]/50 p-6 transition-colors hover:border-[var(--color-accent)]"
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <h3 className="font-semibold text-[var(--color-text)]">
                {libreFit.nombre}
              </h3>
              <span className="font-mono text-xs text-[var(--color-accent)]">
                seguimiento →
              </span>
            </div>
            <p className="text-sm text-[var(--color-muted)]">
              {libreFit.resumen}
            </p>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
