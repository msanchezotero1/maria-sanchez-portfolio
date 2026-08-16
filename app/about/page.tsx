import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Maria Sanchez Otero, marketing and CRM analytics specialist.",
};

export default function AboutPage() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="grid gap-12 sm:grid-cols-[280px_1fr] sm:items-start">
        {/* Placeholder photo — replace with a real headshot */}
        <div className="flex aspect-square w-full max-w-xs items-center justify-center rounded-lg bg-primary-light text-primary sm:max-w-none">
          <span className="text-sm font-medium uppercase tracking-wide">Photo placeholder</span>
        </div>

        <div className="flex flex-col gap-6">
          <span className="eyebrow">About</span>
          <h1 className="text-3xl sm:text-4xl">Maria Sanchez Otero</h1>

          <div className="flex flex-col gap-4 text-lg leading-relaxed text-ink-muted">
            <p>
              Placeholder bio paragraph. Maria Sanchez Otero is a marketing and CRM
              analytics specialist who helps teams turn scattered campaign and CRM data
              into systems people actually use — replace this paragraph with your real
              introduction.
            </p>
            <p>
              Placeholder bio paragraph. Cover background, the kinds of teams and
              companies you've worked with, and the tools you work in most
              (e.g. HubSpot, Salesforce, GA4, Looker, Power BI).
            </p>
            <p>
              Placeholder bio paragraph. Close with what you're looking for next, or
              what kind of projects you enjoy most.
            </p>
          </div>

          <Link href="/contact" className="btn-primary mt-2 w-fit">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
