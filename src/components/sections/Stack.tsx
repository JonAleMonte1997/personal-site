import { stack } from "@/data/stack";
import { type StackCategory } from "@/data/types";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories: StackCategory[] = ["AI/ML", "Backend", "Frontend", "Infra"];

export function Stack() {
  return (
    <section id="stack" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <SectionHeading label="Tech stack" title="What I work with" />
        </AnimatedSection>
        <div className="grid gap-10 sm:grid-cols-2">
          {categories.map((category) => {
            const entries = stack.filter((e) => e.category === category);
            return (
              <AnimatedSection key={category}>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {entries.map((entry) => (
                    <li
                      key={entry.name}
                      className="rounded border border-[var(--color-surface)] px-3 py-1 text-sm text-[var(--color-text)]"
                    >
                      {entry.name}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
