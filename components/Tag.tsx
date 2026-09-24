export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-sky px-3 py-1 text-xs font-medium text-ink">{children}</span>
  );
}
