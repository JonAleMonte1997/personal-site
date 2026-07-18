import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const etapas = [
  {
    titulo: "Soltar",
    detalle:
      "Renunciar al trabajo, cerrar el departamento en Chivilcoy y despedirme de la vida que venía llevando. Es la etapa en la que estoy ahora, y es la más difícil.",
    actual: true,
  },
  {
    titulo: "El viaje",
    detalle:
      "En agosto de 2026 me subo a un micro con una mochila y una computadora. Nada de plan B ni red de contención armada de antemano.",
    actual: false,
  },
  {
    titulo: "Empezar de nuevo",
    detalle:
      "La vida en Bariloche desde cero: dónde vivir, de qué trabajar, con quién compartir. Lo que venga, lo voy a estar contando.",
    actual: false,
  },
];

export function Historia() {
  return (
    <section id="historia" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <SectionHeading label="La historia" title="Por qué dejo todo" />
          <div className="space-y-4 text-content-secondary">
            <p>
              Durante años construí una vida que se veía bien de afuera:
              trabajo estable, departamento propio, rutina conocida. Pero
              llegó un punto en el que sostener todo eso me estaba costando
              más de lo que me daba.
            </p>
            <p>
              Pago con mi vida actual una vida nueva. No es una frase
              inspiradora: es una decisión concreta, con fecha y con costos
              reales. Acá no vas a encontrar una versión ya resuelta de nada —
              muestro el proceso mientras pasa, con los miedos y los errores
              incluidos.
            </p>
          </div>
          <div className="mt-12 space-y-8">
            {etapas.map((etapa) => (
              <div
                key={etapa.titulo}
                className="border-l-2 pl-6"
                style={{
                  borderColor: etapa.actual
                    ? "var(--color-brand)"
                    : "var(--color-border)",
                }}
              >
                <h3 className="mb-1 flex items-center gap-3 font-semibold text-content">
                  {etapa.titulo}
                  {etapa.actual && (
                    <span className="rounded-full border border-brand px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-brand">
                      ahora
                    </span>
                  )}
                </h3>
                <p className="text-content-secondary">{etapa.detalle}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
