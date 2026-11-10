import Link from "next/link";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-cream text-[13px] text-ink-muted">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-ink">Maria Sanchez Otero</span>
          <span>&copy; {year}. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
