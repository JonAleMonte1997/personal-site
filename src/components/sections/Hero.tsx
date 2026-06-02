import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left">
            <div className="shrink-0 rounded-full ring-2 ring-[var(--color-accent)] ring-offset-4 ring-offset-[var(--color-bg)]">
              <Image
                src="/images/jonathan-avatar.jpg"
                alt="Jonathan Montenegro"
                width={140}
                height={140}
                priority
                className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36"
              />
            </div>
            <div>
              <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">
                Hi, my name is
              </p>
              <h1 className="mb-4 text-5xl font-bold tracking-tight text-[var(--color-text)] sm:text-6xl">
                Jonathan Montenegro
              </h1>
              <p className="mb-6 text-2xl font-semibold text-[var(--color-muted)] sm:text-3xl">
                AI Engineer · Fullstack
              </p>
              <p className="mb-4 max-w-xl text-lg text-[var(--color-muted)]">
                I build AI systems that survive the real world.
              </p>
              <p className="font-mono text-sm text-[var(--color-muted)]">
                Buenos Aires, Argentina
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
