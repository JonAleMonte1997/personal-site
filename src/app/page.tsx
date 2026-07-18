import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Historia } from "@/components/sections/Historia";
import { Seguime } from "@/components/sections/Seguime";
import { Proyectos } from "@/components/sections/Proyectos";
import { Contacto } from "@/components/sections/Contacto";
import { site } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  description: site.description,
  url: site.url,
  sameAs: [
    site.profiles.instagram,
    site.profiles.youtube,
    site.profiles.github,
  ].filter(Boolean),
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
      <Historia />
      <Seguime />
      <Proyectos />
      <Contacto />
    </main>
  );
}
