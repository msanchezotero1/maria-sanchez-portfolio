import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";
import Button, { TextLink } from "@/components/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import CtaBanner from "@/components/CtaBanner";
import Headshot from "@/components/Headshot";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: {
    absolute: "Maria Sanchez Otero | Growth Marketing, Analytics & Systems",
  },
  description:
    "Growth marketer working across creative, analytics, and CRM systems. Campaigns that perform, data that proves it, systems that keep it running.",
};

// `accent` renders the figure in cherry. Keep it on the single headline result.
const PROOF_POINTS = [
  { figure: "~90%", label: "lower cost per lead", accent: true },
  { figure: "~80%", label: "less manual work with AI automation" },
  { figure: "EN / ES", label: "bilingual across every channel" },
];

const PILLARS_PREVIEW = [
  { title: "Grow", description: "Campaigns and creative that convert." },
  { title: "Measure", description: "Tracking and dashboards your team actually uses." },
  { title: "Systemize", description: "CRM and AI automation that runs without you." },
];

const FEATURED_SLUGS = ["cpl-optimization", "pipeline-reporting-automation", "ai-comment-automation"];

export default function HomePage() {
  const allCaseStudies = getAllCaseStudies();
  const featuredCaseStudies = FEATURED_SLUGS.map((slug) =>
    allCaseStudies.find((caseStudy) => caseStudy.slug === slug)
  ).filter((caseStudy): caseStudy is (typeof allCaseStudies)[number] => Boolean(caseStudy));

  return (
    <>
      <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1fr_340px] lg:gap-20 lg:py-24">
        <div className="flex flex-col items-start gap-8">
          <p className="eyebrow">
            Hi, I'm Maria<span className="hidden sm:inline"> · Growth marketer</span> · EN / ES
          </p>
          <h1 className="heading-1">
            <span className="hero-line block">Marketing that performs.</span>
            <span className="hero-line block font-normal italic text-cherry">Data that proves it.</span>
            <span className="hero-line block">Systems that keep it running.</span>
          </h1>
          <p className="max-w-[50ch] text-ink-muted">
            I'm a growth marketer who sees the whole engine, from the creative to the dashboard to
            the CRM.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button href="/contact">Work with me</Button>
            <TextLink href="/resume.pdf">Hiring? View my resume</TextLink>
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
          <SectionLabel>How I help</SectionLabel>
          <h2 className="heading-2 mb-12">Three things most small teams need connected</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS_PREVIEW.map((area, i) => (
              <div key={area.title} className="card flex flex-col gap-3">
                <span className="font-mono text-sm font-medium text-cherry">0{i + 1}</span>
                <h3 className="heading-3">{area.title}</h3>
                <p className="text-ink-muted">{area.description}</p>
              </div>
            ))}
          </div>
          <Button href="/how-i-can-help" variant="secondary" className="mt-12">
            See how I work
          </Button>
        </div>
      </section>

      {featuredCaseStudies.length > 0 && (
        <section className="section-y section-rule">
          <div className="container-page">
            <SectionLabel>Case studies</SectionLabel>
            <h2 className="heading-2 mb-10">Selected work</h2>
            <div className="flex flex-col gap-6">
              {featuredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
            <Button href="/work" variant="secondary" className="mt-10">
              View all case studies
            </Button>
          </div>
        </section>
      )}

      <CtaBanner
        title="Need someone to connect the dots?"
        body="Whether you're a small team that needs marketing, data, and systems working together, or you're hiring for a growth role, let's talk."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "View my resume", href: "/resume.pdf" }}
      />
    </>
  );
}
