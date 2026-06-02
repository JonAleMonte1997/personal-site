import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <SectionHeading label="Projects" title="Things I've built" />
          <div className="rounded-lg border border-[var(--color-surface)] p-10 text-center">
            <p className="font-mono text-sm text-[var(--color-muted)]">
              Case studies coming soon.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
