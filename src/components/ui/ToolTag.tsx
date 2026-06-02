export function ToolTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded border border-[var(--color-accent)] px-2 py-0.5 text-xs text-[var(--color-accent)] font-mono">
      {label}
    </span>
  );
}
