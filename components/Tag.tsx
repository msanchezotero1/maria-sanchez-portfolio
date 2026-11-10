export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-blush px-3 py-1 font-sans text-xs font-medium text-cherry">
      {children}
    </span>
  );
}
