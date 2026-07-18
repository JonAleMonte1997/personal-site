import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-surface)] px-6 py-8 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-center">
        <p className="font-mono text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} Jonathan Montenegro
        </p>
        <Link
          href="/libre-fit/privacidad"
          className="font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
        >
          Privacidad de LibreFit
        </Link>
      </div>
    </footer>
  );
}
