import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";

const HELP_AREAS = [
  {
    title: "CRM Data Systems",
    description: "Lifecycle stages, scoring, and data hygiene that sales and marketing both trust.",
  },
  {
    title: "Funnel & Attribution Tracking",
    description: "A clear, multi-touch view of what's actually driving pipeline.",
  },
  {
    title: "Campaign Performance Reporting",
    description: "Reporting that answers the question, not just displays the data.",
  },
];

export default function HomePage() {
  const caseStudies = getAllCaseStudies().slice(0, 3);

  return (
    <>
      <section className="container-page flex flex-col items-start gap-8 py-24 sm:py-32">
        <span className="eyebrow">Marketing & CRM Analytics</span>
        <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl sm:leading-tight">
          Marketing &amp; CRM analytics — funnels, dashboards, and campaign systems that
          show the number that moved.
        </h1>
        <p className="max-w-xl text-lg text-ink-muted">
          I'm Maria Sanchez Otero. I build the data systems and reporting behind marketing
          and CRM teams — so decisions are made on what actually happened, not what a
          spreadsheet guessed.
        </p>
        <Link href="/work" className="btn-primary">
          See the work
        </Link>
      </section>

      <section className="border-t border-surface-border bg-surface py-24">
        <div className="container-page">
          <div className="mb-12 flex flex-col gap-3">
            <span className="eyebrow">How I Can Help</span>
            <h2 className="text-2xl sm:text-3xl">A few of the ways I work with teams</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {HELP_AREAS.map((area) => (
              <div key={area.title} className="card">
                <h3 className="mb-2 text-base font-medium text-ink">{area.title}</h3>
                <p className="text-sm text-ink-muted">{area.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/how-i-can-help"
            className="mt-8 inline-block text-sm font-medium text-primary hover:text-primary-dark"
          >
            See all areas of expertise &rarr;
          </Link>
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className="py-24">
          <div className="container-page">
            <div className="mb-12 flex flex-col gap-3">
              <span className="eyebrow">Selected Work</span>
              <h2 className="text-2xl sm:text-3xl">Recent case studies</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
            <Link href="/work" className="btn-secondary mt-10">
              View all case studies
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
