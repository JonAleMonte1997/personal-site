import type { Metadata } from "next";
import { site } from "@/data/site";

// URL pública y estable: las fichas de Google Play y App Store apuntan acá.
// No renombrar la ruta sin actualizar las fichas de las tiendas.

export const metadata: Metadata = {
  title: "Política de privacidad de LibreFit",
  description:
    "LibreFit no recolecta, almacena ni comparte datos personales. Toda tu información vive únicamente en tu dispositivo.",
  alternates: { canonical: "/libre-fit/privacidad" },
};

const ULTIMA_ACTUALIZACION = "18 de julio de 2026";

export default function PrivacidadPage() {
  return (
    <main className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">
          LibreFit
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Política de privacidad
        </h1>
        <p className="mb-12 font-mono text-xs text-[var(--color-muted)]">
          Última actualización: {ULTIMA_ACTUALIZACION}
        </p>

        <div className="space-y-10 text-[var(--color-muted)]">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
              Lo esencial
            </h2>
            <p>
              LibreFit no recolecta, almacena ni comparte datos personales.
              Toda la información que ingresás en la app vive únicamente en tu
              dispositivo y nunca sale de él.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
              Qué datos maneja la app
            </h2>
            <p className="mb-3">
              Para calcular tus macros, LibreFit te pide algunos datos: peso,
              altura, edad, sexo, tu objetivo (mantener, bajar o subir) y, si
              los editás a mano, tus valores de macros.
            </p>
            <p>
              Estos datos se guardan exclusivamente en el almacenamiento local
              de tu teléfono. No se transmiten a ningún servidor: la app no
              tiene backend, no requiere conexión a internet para funcionar y
              no crea cuentas de usuario.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
              Qué no hacemos
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>No pedimos registro ni creamos cuentas.</li>
              <li>No usamos herramientas de analytics ni de rastreo.</li>
              <li>No mostramos publicidad.</li>
              <li>No compartimos ni vendemos información a terceros.</li>
              <li>
                No integramos SDKs de terceros que recolecten datos
                personales.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
              Cómo borrar tus datos
            </h2>
            <p>
              Como todo vive en tu dispositivo, vos tenés el control total.
              Podés borrar tu perfil desde la propia app, o directamente
              desinstalarla: al hacerlo, todos los datos se eliminan de forma
              permanente. No queda ninguna copia en ningún lado, porque nunca
              existió.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
              Menores de edad
            </h2>
            <p>
              LibreFit no recolecta datos de nadie, incluidos los menores de
              edad. La app está pensada para personas de 13 años o más, en
              línea con los rangos de datos corporales que acepta.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
              Cambios a esta política
            </h2>
            <p>
              Si en el futuro la app incorpora funciones que cambien este
              esquema (por ejemplo, sincronización opcional), esta política se
              actualizará antes de publicar esos cambios y la fecha de arriba
              lo va a reflejar. El código de la app es abierto, así que
              cualquiera puede verificar lo que acá se afirma en{" "}
              <a
                href="https://github.com/JonAleMonte1997/libre-fit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:opacity-80"
              >
                github.com/JonAleMonte1997/libre-fit
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
              Contacto
            </h2>
            <p>
              Ante cualquier duda sobre esta política, escribime a{" "}
              <a
                href={`mailto:${site.profiles.email}`}
                className="text-[var(--color-accent)] hover:opacity-80"
              >
                {site.profiles.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
