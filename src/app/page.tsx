import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { EducationLanguages } from "@/components/sections/EducationLanguages";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/data/site";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.jobTitle,
  url: site.url,
  sameAs: [site.profiles.linkedin, site.profiles.github],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <EducationLanguages />
      <Contact />
    </main>
  );
}
