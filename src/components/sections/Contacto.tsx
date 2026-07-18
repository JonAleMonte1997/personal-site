import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

const canales = [
  { label: "Email", href: `mailto:${site.profiles.email}`, external: false },
  { label: "Instagram", href: site.profiles.instagram, external: true },
  { label: "GitHub", href: site.profiles.github, external: true },
];

export function Contacto() {
  return (
    <section id="contacto" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <SectionHeading label="Contacto" title="Escribime" />
          <p className="mb-8 text-[var(--color-muted)]">
            Si mi historia te tocó, estás en un proceso parecido o querés
            decirme algo sobre LibreFit, me podés escribir por cualquiera de
            estos canales. Leo todo.
          </p>
          <div className="flex flex-wrap gap-4">
            {canales.map((canal) => (
              <a
                key={canal.label}
                href={canal.href}
                {...(canal.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex min-h-11 items-center gap-2 rounded border border-[var(--color-accent)] px-5 py-3 text-sm font-mono text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
              >
                {canal.label}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
