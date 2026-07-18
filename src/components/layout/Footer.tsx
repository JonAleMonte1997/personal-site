import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-center">
        <p className="font-mono text-xs text-content-secondary">
          © {new Date().getFullYear()} Jonathan Montenegro
        </p>
        <Link
          href="/libre-fit/privacidad"
          className="font-mono text-xs text-content-secondary transition-colors hover:text-content"
        >
          Privacidad de LibreFit
        </Link>
      </div>
    </footer>
  );
}
