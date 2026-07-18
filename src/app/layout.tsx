import type { Metadata } from "next";
import { Spline_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Misma familia que usa LibreFit (--font-display en su global.css).
const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${splineSans.variable} h-full`}>
      <body className="min-h-full antialiased">
        {/* Without JS, Framer Motion's whileInView never fires, leaving the
            SSR-rendered hidden state (opacity:0) visible. Force animated
            blocks visible so content degrades gracefully. */}
        <noscript>
          <style>{`[data-animate]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
