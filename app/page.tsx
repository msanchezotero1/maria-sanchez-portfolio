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
            <span aria-hidden="true" className="h-px w-10 bg-sage" />
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
            className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-sm bg-rose sm:translate-x-5 sm:translate-y-5"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-paper-tint">
            <Image
              src="/headshot-cream-v2.jpg"
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
              <span className="font-serif text-4xl font-bold tracking-tight text-rose sm:text-5xl">
                {point.figure}
              </span>
              <span className="text-base text-paper">{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <h2 className="mb-14 text-2xl sm:text-3xl">
            Three things most small teams need connected
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {PILLARS_PREVIEW.map((area) => (
              <div key={area.title} className="flex flex-col gap-3 border-t-2 border-ink pt-6">
                <h3 className="text-xl text-ink">{area.title}</h3>
                <p className="text-base text-graphite">{area.description}</p>
              </div>
            ))}
          </div>
          <Link href="/how-i-can-help" className="link-inline mt-12 inline-block">
            See how I work
          </Link>
        </div>
      </section>

      {featuredCaseStudies.length > 0 && (
        <section className="section-rule section-y">
          <div className="container-page">
            <h2 className="mb-6 text-2xl sm:text-3xl">Selected work</h2>
            <div className="divide-y divide-rule">
              {featuredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
            <Link href="/work" className="link-inline mt-10 inline-block">
              View all case studies
            </Link>
          </div>
        </section>
      )}

      <section className="section-rule section-y">
        <div className="container-page flex flex-col items-start gap-8">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Need someone to connect the dots?
          </h2>
          <p className="max-w-xl text-lg text-graphite">
            Whether you're a small team that needs marketing, data, and systems working together,
            or you're hiring for a growth role, let's talk.
          </p>
          <div className="flex flex-wrap items-center gap-6">
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
