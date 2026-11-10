// Eyebrow label above section headlines.
export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow mb-4 ${className}`}>{children}</p>;
}
