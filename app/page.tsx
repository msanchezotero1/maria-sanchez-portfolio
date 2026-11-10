import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";
import { BOOKING_CTA, BOOKING_URL } from "@/lib/site";
import Button, { TextLink } from "@/components/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import ClosingCta from "@/components/ClosingCta";
import Headshot from "@/components/Headshot";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: {
    absolute: "Maria Sanchez Otero | More paying clients for small businesses",
  },
};

// `accent` renders the figure in cherry. Keep it on the single headline result.
const PROOF_POINTS = [
  { figure: "$200 → $15", label: "cost per lead on Meta ads", accent: true },
  { figure: "~80%", label: "less manual work with AI automation" },
  { figure: "EN / ES", label: "bilingual content and campaigns" },
];

const SYSTEM_STEPS = [
  {
    title: "Attention",
    description:
      "Organic short-form videos built on what's going viral in your industry. I write the scripts and direct; you just show up and record.",
  },
  {
    title: "Traffic",
    description:
      "Meta ads (Instagram and Facebook) that put your best content in front of the right people, and retarget everyone who already watched.",
  },
  {
    title: "Conversion",
    description: "A sales funnel and landing page that turn clicks into booked calls, not just likes.",
  },
  {
    title: "Follow-up",
    description:
      "AI that replies to every new lead in seconds, so no one books with your competitor because you answered too late.",
  },
];

const WHY_ME = [
  {
    title: "Numbers first",
    description: "MS in Business Analytics from Babson. I don't report likes, I report revenue.",
  },
  {
    title: "One person, the whole engine",
    description:
      "Content, ads, funnel and automation connected, so nothing gets lost between agencies.",
  },
  {
    title: "Bilingual",
    description: "Content and campaigns in English and Spanish.",
  },
];

const FEATURED_SLUGS = ["cpl-optimization", "ai-comment-automation", "pipeline-reporting-automation"];

export default function HomePage() {
  const allCaseStudies = getAllCaseStudies();
  const featuredCaseStudies = FEATURED_SLUGS.map((slug) =>
    allCaseStudies.find((caseStudy) => caseStudy.slug === slug)
  ).filter((caseStudy): caseStudy is (typeof allCaseStudies)[number] => Boolean(caseStudy));

  return (
    <>
      <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1fr_340px] lg:gap-20 lg:py-24">
        <div className="flex flex-col items-start gap-8">
          <p className="eyebrow">Growth marketing for small businesses · EN / ES</p>
          <h1 className="heading-1">
            <span className="hero-line block">More paying clients.</span>
            <span className="hero-line block font-normal italic text-cherry">
              With the numbers to prove it.
            </span>
          </h1>
          <p className="max-w-[52ch] text-ink-muted">
            I turn attention into paying customers using organic video, paid ads, sales funnels and
            AI automation. Then I show you exactly what every dollar brought back.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button href={BOOKING_URL}>{BOOKING_CTA}</Button>
            <TextLink href="/work">See results</TextLink>
          </div>
        </div>

        <Headshot
          sizes="(min-width: 1024px) 340px, 280px"
          className="order-first mx-auto w-full max-w-[200px] sm:max-w-[280px] lg:order-none lg:max-w-[340px]"
        />
      </section>

      <section className="border-y border-hairline bg-blush">
        <div className="container-page grid grid-cols-1 divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {PROOF_POINTS.map((point) => (
            <div
              key={point.label}
              className="flex flex-col gap-2 py-8 sm:px-8 sm:py-10 sm:first:pl-0 sm:last:pr-0"
            >
              <span
                className={`font-mono text-metric font-medium ${point.accent ? "text-cherry" : "text-ink"}`}
              >
                {point.figure}
              </span>
              {/* ink at 75% rather than ink-muted: keeps 12px labels above 4.5:1 on blush */}
              <span className="font-mono text-xs text-ink/75">{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionLabel>The problem</SectionLabel>
          <h2 className="heading-2 max-w-3xl">
            You don't need more marketing. You need more clients.
          </h2>
          <p className="mt-6 max-w-2xl text-ink-muted">
            Most small businesses post, boost a few ads, and hope. The views come and go, the DMs
            pile up, and nobody can tell you what actually brought in revenue. Attention without a
            system isn't money.
          </p>
        </div>
      </section>

      <section className="section-y section-rule">
        <div className="container-page">
          <SectionLabel>How I get you clients</SectionLabel>
          <h2 className="heading-2 mb-12 max-w-3xl">
            One system, from first view to booked appointment
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SYSTEM_STEPS.map((step, i) => (
              <div key={step.title} className="card flex flex-col gap-3">
                <span className="font-mono text-sm font-medium text-cherry">0{i + 1}</span>
                <h3 className="heading-3">{step.title}</h3>
                <p className="text-ink-muted">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-card bg-blush px-6 py-5 font-medium text-ink">
            Every month: a simple ROI report. Leads, booked appointments, revenue, and what each
            dollar brought back.
          </p>
        </div>
      </section>

      <section className="section-y section-rule">
        <div className="container-page flex flex-col items-start gap-6">
          <h2 className="heading-2">Do the math</h2>
          <p className="max-w-2xl text-ink-muted">
            If a new client is worth $1,000 to you, 2–3 new clients a month pays for everything. The
            rest is profit.
          </p>
          <Button href={BOOKING_URL}>{BOOKING_CTA}</Button>
        </div>
      </section>

      {featuredCaseStudies.length > 0 && (
        <section className="section-y section-rule">
          <div className="container-page">
            <SectionLabel>Results</SectionLabel>
            <h2 className="heading-2 mb-10">Real work, real numbers</h2>
            <div className="flex flex-col gap-6">
              {featuredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
            <Button href="/work" variant="secondary" className="mt-10">
              View all results
            </Button>
          </div>
        </section>
      )}

      <section className="section-y section-rule">
        <div className="container-page">
          <h2 className="heading-2 mb-12">Why work with me</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {WHY_ME.map((point) => (
              <div key={point.title} className="card flex flex-col gap-3">
                <h3 className="heading-3">{point.title}</h3>
                <p className="text-ink-muted">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
