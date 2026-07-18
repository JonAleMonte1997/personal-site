import Image from "next/image";
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
          <p className="mb-10 text-content-secondary">
            Empezar de nuevo no es solo mudarme: también es elegir en qué
            trabajo. Esto es lo que estoy construyendo en el camino.
          </p>
          <Link
            href="/libre-fit"
            className="block rounded-xl bg-surface p-4 transition-colors hover:bg-surface-selected"
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/librefit-logo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
                <h3 className="font-semibold text-content">
                  {libreFit.nombre}
                </h3>
              </div>
              <span className="font-mono text-xs text-brand">
                seguimiento →
              </span>
            </div>
            <p className="text-sm text-content-secondary">
              {libreFit.resumen}
            </p>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
