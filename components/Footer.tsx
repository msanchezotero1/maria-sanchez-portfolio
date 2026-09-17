import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-ink">Maria Sanchez Otero</span>
          <span className="text-sm text-graphite">&copy; {year}. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <Link href="/work" className="text-sm text-graphite hover:text-signal">
            Work
          </Link>
          <Link href="/studio" className="text-sm text-graphite hover:text-signal">
            Studio
          </Link>
          <Link href="/about" className="text-sm text-graphite hover:text-signal">
            About
          </Link>
          <Link href="/contact" className="text-sm text-graphite hover:text-signal">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
