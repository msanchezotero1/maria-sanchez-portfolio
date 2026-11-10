import Link from "next/link";
import { LINKEDIN_URL } from "@/lib/site";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Results" },
  { href: "/studio", label: "Content" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: LINKEDIN_URL, label: "LinkedIn", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-cream text-[13px] text-ink-muted">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-ink">
            Maria Sanchez Otero · Growth marketing for small businesses · EN / ES
          </span>
          <span>&copy; 2026 Maria Sanchez Otero. All rights reserved.</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
