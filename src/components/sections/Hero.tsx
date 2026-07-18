import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left">
            <div className="shrink-0 rounded-full ring-2 ring-brand ring-offset-4 ring-offset-bg">
              <Image
                src="/images/jonathan-avatar.jpg"
                alt="Retrato de Jonathan Montenegro"
                width={140}
                height={140}
                priority
                className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36"
              />
            </div>
            <div>
              <p className="mb-3 font-mono text-sm text-brand">
                Soy Jonathan Montenegro
              </p>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-content sm:text-5xl">
                {site.tagline}
              </h1>
              <p className="mb-6 max-w-xl text-lg text-content-secondary">
                Dejo mi trabajo, mi departamento y mi ciudad, y me mudo solo a
                Bariloche con una mochila y una computadora. Esto no es una
                fórmula ni un curso: es mi proceso real, documentado mientras
                pasa.
              </p>
              <p className="font-mono text-sm text-content-secondary">
                Chivilcoy → Bariloche · agosto 2026
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
