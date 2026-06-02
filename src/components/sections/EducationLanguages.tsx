import { education } from "@/data/education";
import { languages } from "@/data/languages";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EducationLanguages() {
  return (
    <section id="education" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <SectionHeading label="Background" title="Education & Languages" />
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                Education
              </h3>
              <ul className="space-y-4">
                {education.map((entry) => (
                  <li key={`${entry.institution}-${entry.degree}`}>
                    <p className="text-sm font-medium text-[var(--color-text)]">
                      {entry.degree}
                    </p>
                    <p className="text-sm text-[var(--color-muted)]">
                      {entry.institution}
                    </p>
                    <p className="font-mono text-xs text-[var(--color-muted)]">
                      {entry.startYear} — {entry.endYear ?? "Present"}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                Languages
              </h3>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-[var(--color-text)]">
                      {lang.name}
                    </span>
                    <span className="font-mono text-xs text-[var(--color-accent)]">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
