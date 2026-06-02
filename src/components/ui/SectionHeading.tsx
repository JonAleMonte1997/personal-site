export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-1 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
        {label}
      </p>
      <h2 className="text-2xl font-semibold text-[var(--color-text)]">{title}</h2>
    </div>
  );
}
