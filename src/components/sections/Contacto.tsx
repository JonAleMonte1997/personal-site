import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

const canales = [
  {
    label: "Email",
    href: `mailto:${site.profiles.email}`,
    external: false,
    primario: true,
  },
  {
    label: "Instagram",
    href: site.profiles.instagram,
    external: true,
    primario: false,
  },
  {
    label: "GitHub",
    href: site.profiles.github,
    external: true,
    primario: false,
  },
];

export function Contacto() {
  return (
    <section id="contacto" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <SectionHeading label="Contacto" title="Escribime" />
          <p className="mb-8 text-content-secondary">
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
                className={
                  canal.primario
                    ? "inline-flex min-h-11 items-center rounded-xl bg-brand px-6 py-3 text-base font-semibold text-on-brand transition-colors hover:bg-brand-pressed"
                    : "inline-flex min-h-11 items-center rounded-xl border border-border bg-surface px-6 py-3 text-base font-semibold text-content transition-colors hover:bg-surface-selected"
                }
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
