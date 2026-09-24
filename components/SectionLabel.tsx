export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-ink ${className}`}
    >
      <span aria-hidden="true" className="h-0.5 w-8 bg-signal" />
      {children}
    </p>
  );
}
