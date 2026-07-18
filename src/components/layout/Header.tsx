import Link from "next/link";

// Links con path completo (/#historia) para que funcionen también desde
// las páginas internas como /libre-fit.
const navLinks = [
  { label: "Historia", href: "/#historia" },
  { label: "Seguime", href: "/#seguime" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-surface)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <Link
          href="/"
          className="font-mono text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          jm.
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
