"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/how-i-can-help", label: "How I Can Help" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface/90 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between py-4">
        <Link href="/" className="text-base font-semibold tracking-tight text-ink">
          Maria Sanchez Otero
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-ink-muted hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn-primary hidden md:inline-flex">
          Get in touch
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-surface-border md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-surface-border bg-surface md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-ink-muted hover:bg-surface-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
