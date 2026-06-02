import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <SectionHeading label="About me" title="Who I am" />
          <div className="space-y-5 text-[var(--color-muted)] leading-relaxed text-base">
            <p>
              I build things. Drawn to problems where something&apos;s broken and needs
              fixing. I move without being pushed: find the gap, fill it. I&apos;ve worked
              where getting things wrong had real consequences — it made me more careful,
              not slower.
            </p>
            <p>
              <span className="text-[var(--color-text)] font-medium">
                What I&apos;m looking for:
              </span>{" "}
              AI-first teams building autonomous agents and LLM-powered systems in
              production. RAG pipelines, tool-calling, event-driven agent coordination.
              Remote, fast-moving, real engineering challenges where the AI layer has to
              survive messy real-world data.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
