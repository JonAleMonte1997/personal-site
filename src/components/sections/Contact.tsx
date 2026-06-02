import { contact } from "@/data/contact";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-3xl">
        <AnimatedSection>
          <SectionHeading label="Contact" title="Get in touch" />
          <p className="mb-8 text-[var(--color-muted)]">
            Open to full-time AI Engineer roles at AI-first startups. Reach out
            through any of the channels below.
          </p>
          <div className="flex flex-wrap gap-4">
            {contact.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex min-h-11 items-center gap-2 rounded border border-[var(--color-accent)] px-5 py-3 text-sm font-mono text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
