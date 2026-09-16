import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: {
    absolute: "Maria Sanchez Otero | Growth Marketing, Analytics & Systems",
  },
  description:
    "Growth marketer working across creative, analytics, and CRM systems. Campaigns that perform, data that proves it, systems that keep it running.",
};

const PROOF_POINTS = [
  "~90% lower cost per lead",
  "~80% less manual work with AI automation",
  "Bilingual: English & Spanish",
];

const PILLARS_PREVIEW = [
  {
    title: "Grow",
    description: "Campaigns and creative that convert.",
  },
  {
    title: "Measure",
    description: "Tracking and dashboards your team actually uses.",
  },
  {
    title: "Systemize",
    description: "CRM and AI automation that runs without you.",
  },
];

const FEATURED_SLUGS = ["cpl-optimization", "pipeline-reporting-automation", "ai-comment-automation"];

export default function HomePage() {
  const allCaseStudies = getAllCaseStudies();
  const featuredCaseStudies = FEATURED_SLUGS.map((slug) =>
    allCaseStudies.find((caseStudy) => caseStudy.slug === slug)
  ).filter((caseStudy): caseStudy is (typeof allCaseStudies)[number] => Boolean(caseStudy));

  return (
    <>
      <section className="container-page flex flex-col items-start gap-8 py-24 sm:py-32">
        <span className="eyebrow">Growth Marketing &middot; Analytics &middot; Systems</span>
        <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl sm:leading-tight">
          Marketing that performs. Data that proves it. Systems that keep it running.
        </h1>
        <p className="max-w-xl text-lg text-ink-muted">
          I'm a growth marketer who sees the whole engine, from the creative to the dashboard to
          the CRM.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Work with me
          </Link>
          <Link href="/resume.pdf" className="btn-secondary">
            Hiring? View my resume
          </Link>
        </div>
      </section>

      <section className="border-t border-surface-border bg-surface py-10">
        <div className="container-page grid gap-6 sm:grid-cols-3">
          {PROOF_POINTS.map((point) => (
            <p key={point} className="text-center text-base font-medium text-ink sm:text-left">
              {point}
            </p>
          ))}
        </div>
      </section>

      <section className="border-t border-surface-border bg-surface py-24">
        <div className="container-page">
          <div className="mb-12 flex flex-col gap-3">
            <span className="eyebrow">How I Can Help</span>
            <h2 className="text-2xl sm:text-3xl">Three things most small teams need connected</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS_PREVIEW.map((area) => (
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
            See how I work &rarr;
          </Link>
        </div>
      </section>

      {featuredCaseStudies.length > 0 && (
        <section className="py-24">
          <div className="container-page">
            <div className="mb-12 flex flex-col gap-3">
              <span className="eyebrow">Selected Work</span>
              <h2 className="text-2xl sm:text-3xl">Recent case studies</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
            <Link href="/work" className="btn-secondary mt-10">
              View all case studies
            </Link>
          </div>
        </section>
      )}

      <section className="border-t border-surface-border bg-surface py-24">
        <div className="container-page flex flex-col items-start gap-6">
          <h2 className="text-2xl sm:text-3xl">Need someone to connect the dots?</h2>
          <p className="max-w-xl text-lg text-ink-muted">
            Whether you're a small team that needs marketing, data, and systems working together,
            or you're hiring for a growth role, let's talk.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Start a conversation
            </Link>
            <Link href="/resume.pdf" className="btn-secondary">
              View my resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
