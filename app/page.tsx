import type { Metadata } from "next";
import Image from "next/image";
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
  { figure: "~90%", label: "lower cost per lead" },
  { figure: "~80%", label: "less manual work with AI automation" },
  { figure: "EN / ES", label: "bilingual across every channel" },
];

const PILLARS_PREVIEW = [
  { title: "Grow", description: "Campaigns and creative that convert." },
  { title: "Measure", description: "Tracking and dashboards your team actually uses." },
  { title: "Systemize", description: "CRM and AI automation that runs without you." },
];

const FEATURED_SLUGS = ["cpl-optimization", "pipeline-reporting-automation", "ai-comment-automation"];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-ink">
      <span aria-hidden="true" className="h-0.5 w-8 bg-signal" />
      {children}
    </p>
  );
}

export default function HomePage() {
  const allCaseStudies = getAllCaseStudies();
  const featuredCaseStudies = FEATURED_SLUGS.map((slug) =>
    allCaseStudies.find((caseStudy) => caseStudy.slug === slug)
  ).filter((caseStudy): caseStudy is (typeof allCaseStudies)[number] => Boolean(caseStudy));

  return (
    <>
      <section className="container-page grid items-center gap-10 pb-20 pt-6 sm:gap-12 sm:pb-28 sm:pt-20 lg:grid-cols-[1fr_360px] lg:gap-16 lg:pb-32 lg:pt-24">
        <div className="flex flex-col items-start gap-8">
          <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-graphite">
            <span aria-hidden="true" className="h-0.5 w-10 bg-signal" />
            <span>
              Hi, I'm Maria<span className="hidden sm:inline"> · Growth marketer</span> · EN / ES
            </span>
          </p>
          <h1 className="display-hero text-ink">
            <span className="hero-line block">Marketing that <strong className="whitespace-nowrap font-black text-signal">performs.</strong></span>
            <span className="hero-line block">Data that <strong className="whitespace-nowrap font-black text-signal">proves it.</strong></span>
            <span className="hero-line block">Systems that <strong className="whitespace-nowrap font-black text-signal">keep it running.</strong></span>
          </h1>
          <p className="max-w-[50ch] text-lg text-graphite">
            I'm a growth marketer who sees the whole engine, from the creative to the dashboard to
            the CRM.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/contact" className="btn-primary">
              Work with me
            </Link>
            <Link href="/resume.pdf" className="btn-secondary">
              Hiring? View my resume
            </Link>
          </div>
        </div>

        <div className="relative order-first mx-auto w-full max-w-[180px] sm:max-w-[280px] lg:order-none lg:max-w-[360px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-sm bg-sky sm:translate-x-5 sm:translate-y-5"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-paper-tint">
            <Image
              src="/headshot-navy.jpg"
              alt="Maria Sanchez Otero"
              fill
              sizes="(min-width: 1024px) 360px, 300px"
              className="object-cover object-[50%_30%]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-page flex flex-col divide-y divide-paper/15 sm:flex-row sm:divide-x sm:divide-y-0">
          {PROOF_POINTS.map((point) => (
            <div
              key={point.label}
              className="flex flex-1 flex-col gap-2 py-8 sm:px-10 sm:py-14 sm:first:pl-0 sm:last:pr-0"
            >
              <span className="font-serif text-4xl font-bold tracking-tight text-sky sm:text-5xl">
                {point.figure}
              </span>
              <span className="text-base text-paper/90">{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-sky">
        <div className="container-page">
          <SectionLabel>How I help</SectionLabel>
          <h2 className="mb-12 text-2xl sm:text-3xl">
            Three things most small teams need connected
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS_PREVIEW.map((area, i) => (
              <div
                key={area.title}
                className="flex flex-col gap-3 rounded-sm border-t-4 border-signal bg-white p-7"
              >
                <span className="font-serif text-sm font-bold text-signal">0{i + 1}</span>
                <h3 className="text-xl text-ink">{area.title}</h3>
                <p className="text-base text-graphite">{area.description}</p>
              </div>
            ))}
          </div>
          <Link href="/how-i-can-help" className="btn-outline mt-12">
            See how I work
          </Link>
        </div>
      </section>

      {featuredCaseStudies.length > 0 && (
        <section className="section-y">
          <div className="container-page">
            <SectionLabel>Case studies</SectionLabel>
            <h2 className="mb-6 text-2xl sm:text-3xl">Selected work</h2>
            <div className="divide-y divide-rule">
              {featuredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
            <Link href="/work" className="btn-outline mt-10">
              View all case studies
            </Link>
          </div>
        </section>
      )}

      <section className="section-y bg-ink">
        <div className="container-page flex flex-col items-start gap-8">
          <span aria-hidden="true" className="h-1 w-12 bg-sky" />
          <h2 className="max-w-2xl text-3xl tracking-tight text-white sm:text-4xl">
            Need someone to connect the dots?
          </h2>
          <p className="max-w-xl text-lg text-sky">
            Whether you're a small team that needs marketing, data, and systems working together,
            or you're hiring for a growth role, let's talk.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/contact" className="btn-light">
              Start a conversation
            </Link>
            <Link
              href="/resume.pdf"
              className="text-sm font-medium text-white decoration-sky decoration-2 underline-offset-4 hover:underline"
            >
              View my resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
