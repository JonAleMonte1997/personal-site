import { experience } from "@/data/experience";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ToolTag } from "@/components/ui/ToolTag";

function formatDate(iso: string): string {
  const [year, month] = iso.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <SectionHeading label="Experience" title="Work history" />
        </AnimatedSection>
        <div className="space-y-12">
          {experience.map((entry) => (
            <AnimatedSection key={`${entry.company}-${entry.startDate}`}>
              <div className="border-l-2 border-[var(--color-surface)] pl-6">
                <div className="mb-1 flex flex-wrap items-baseline gap-x-2">
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {entry.role}
                  </h3>
                  <span className="text-[var(--color-accent)]">@ {entry.company}</span>
                </div>
                <p className="mb-4 font-mono text-xs text-[var(--color-muted)]">
                  {formatDate(entry.startDate)} —{" "}
                  {entry.endDate ? formatDate(entry.endDate) : "Present"}
                </p>
                <ul className="mb-4 space-y-2">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-[var(--color-muted)] leading-relaxed"
                    >
                      <span className="mt-1 shrink-0 text-[var(--color-accent)]">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {entry.tools.map((tool) => (
                    <ToolTag key={tool} label={tool} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
