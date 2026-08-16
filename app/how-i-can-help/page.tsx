import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How I Can Help",
  description: "Areas of expertise in CRM data systems, campaign reporting, funnel tracking, and dashboards.",
};

const AREAS = [
  {
    title: "CRM Data Systems",
    description:
      "Lifecycle stages, lead/account scoring, field hygiene, and data models that sales and marketing both trust — so a 'qualified lead' means the same thing everywhere it's used.",
  },
  {
    title: "Campaign Performance Reporting",
    description:
      "Reporting built around the decisions it needs to support, not just the metrics a platform happens to export. Fewer dashboards, clearer answers.",
  },
  {
    title: "Funnel & Attribution Tracking",
    description:
      "A full-funnel, multi-touch view of what's driving pipeline — so budget moves toward what's working instead of what's easiest to measure.",
  },
  {
    title: "Dashboard Builds",
    description:
      "Self-serve dashboards that replace the weekly manual pull, built on definitions the whole team agrees on and can actually act on.",
  },
];

export default function HowICanHelpPage() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mb-14 flex max-w-2xl flex-col gap-4">
        <span className="eyebrow">How I Can Help</span>
        <h1 className="text-3xl sm:text-4xl">Where I add the most value</h1>
        <p className="text-lg text-ink-muted">
          Four areas where marketing and CRM teams most often need someone to turn
          scattered data into a system they can actually run on.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {AREAS.map((area) => (
          <div key={area.title} className="card">
            <h2 className="mb-3 text-lg font-medium text-ink">{area.title}</h2>
            <p className="text-sm leading-relaxed text-ink-muted">{area.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-4 border-t border-surface-border pt-12">
        <h2 className="text-xl">Have a project in mind?</h2>
        <Link href="/contact" className="btn-primary">
          Start a conversation
        </Link>
      </div>
    </section>
  );
}
