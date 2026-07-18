import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export function Seguime() {
  return (
    <section id="seguime" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <SectionHeading
            label="Seguime"
            title="El proceso, documentado completo"
          />
          <p className="mb-10 text-[var(--color-muted)]">
            Sin guiones, sin edición y sin filtros: grabo con el celular y lo
            que sale, queda. Los errores en vivo también son parte de la
            historia.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded border border-[var(--color-surface)] bg-[var(--color-surface)]/50 p-6">
              <h3 className="mb-2 font-semibold text-[var(--color-text)]">
                YouTube
              </h3>
              <p className="mb-4 text-sm text-[var(--color-muted)]">
                Tres videos por semana contando el proceso a fondo: lo que
                decido, lo que me cuesta y lo que va pasando en el camino a
                Bariloche.
              </p>
              {site.profiles.youtube ? (
                <a
                  href={site.profiles.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-[var(--color-accent)] hover:opacity-80"
                >
                  Ir al canal →
                </a>
              ) : (
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                  El canal arranca muy pronto
                </p>
              )}
            </div>
            <div className="rounded border border-[var(--color-surface)] bg-[var(--color-surface)]/50 p-6">
              <h3 className="mb-2 font-semibold text-[var(--color-text)]">
                Instagram
              </h3>
              <p className="mb-4 text-sm text-[var(--color-muted)]">
                El día a día en stories y un post diario: la parte chica y
                real del proceso, mientras está pasando.
              </p>
              <a
                href={site.profiles.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-[var(--color-accent)] hover:opacity-80"
              >
                @jmontenegro.dev →
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
