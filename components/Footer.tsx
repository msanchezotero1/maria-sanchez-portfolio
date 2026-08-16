import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="container-page flex flex-col gap-4 py-10 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} Maria Sanchez Otero. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/work" className="hover:text-primary">
            Work
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
