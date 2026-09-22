import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-signal">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-ink">Maria Sanchez Otero</span>
          <span className="text-sm text-graphite">&copy; {year}. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <Link href="/work" className="text-sm text-graphite decoration-signal decoration-2 underline-offset-4 hover:text-ink hover:underline">
            Work
          </Link>
          <Link href="/studio" className="text-sm text-graphite decoration-signal decoration-2 underline-offset-4 hover:text-ink hover:underline">
            Studio
          </Link>
          <Link href="/about" className="text-sm text-graphite decoration-signal decoration-2 underline-offset-4 hover:text-ink hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-sm text-graphite decoration-signal decoration-2 underline-offset-4 hover:text-ink hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
