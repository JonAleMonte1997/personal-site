export function Footer() {
  return (
    <footer className="border-t border-[var(--color-surface)] px-6 py-8 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} Jonathan Montenegro
        </p>
      </div>
    </footer>
  );
}
