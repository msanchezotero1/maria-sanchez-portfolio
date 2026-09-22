import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How I Can Help",
  description:
    "Growth marketing, measurement, and CRM systems for small teams, as projects, fractional support, or a full-time role.",
};

type PillarLink = { label: string; href: string };

type Pillar = {
  title: string;
  summary: string;
  whatIDo: string;
  whatYouGet: string;
  caseStudy?: PillarLink;
  caseStudies?: PillarLink[];
};

const PILLARS: Pillar[] = [
  {
    title: "Grow",
    summary: "Campaigns and creative that convert.",
    whatIDo:
      "Paid and organic social, in-house creative production, social media design and short-form video, A/B testing, and landing page and funnel optimization.",
    whatYouGet: "Campaigns launched, a testing plan, and a clear monthly performance readout.",
    caseStudy: { label: "Cutting cost per lead by ~90%", href: "/work/cpl-optimization" },
  },
  {
    title: "Measure",
    summary: "Tracking and dashboards your team actually uses.",
    whatIDo: "GA4 and UTM setup, attribution, and dashboards in Looker, Sigma, or Power BI.",
    whatYouGet: "Tracking you can trust and one dashboard leadership actually checks.",
    caseStudy: {
      label: "Automating a daily copy-paste job out of existence",
      href: "/work/pipeline-reporting-automation",
    },
  },
  {
    title: "Systemize",
    summary: "CRM and AI automation that runs without you.",
    whatIDo:
      "HubSpot and Salesforce audits and cleanup, lifecycle workflows, and AI-assisted automation.",
    whatYouGet: "Clean data, automated workflows, and fewer manual hours.",
    caseStudies: [
      { label: "The CRM data audit", href: "/work/salesforce-data-audit" },
      { label: "The AI comment automation", href: "/work/ai-comment-automation" },
    ],
  },
];

type WayToWork = {
  title: string;
  description: string;
  cta?: PillarLink;
};

const WAYS_TO_WORK: WayToWork[] = [
  {
    title: "Project",
    description: "One defined scope and deliverable, like a CRM audit or a dashboard build.",
  },
  {
    title: "Fractional",
    description: "Ongoing part-time support across all three areas, with a fixed monthly scope.",
  },
  {
    title: "Full-time",
    description:
      "Hiring for a growth, marketing ops, or analytics role? This is what I bring to your team.",
    cta: { label: "View my resume", href: "/resume.pdf" },
  },
];

export default function HowICanHelpPage() {
  return (
    <section className="container-page py-20 sm:py-28 lg:py-36">
      <div className="mb-14 flex max-w-2xl flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl">Where I add the most value</h1>
        <p className="text-lg text-graphite">
          Most small teams have marketing, data, and CRM living in separate worlds. I work across
          all three, so nothing falls through the cracks.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="card flex flex-col gap-4">
            <h2 className="text-xl text-ink">{pillar.title}</h2>
            <p className="text-sm font-medium text-ink">{pillar.summary}</p>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-graphite">What I do</span>
              <p className="text-sm leading-relaxed text-graphite">{pillar.whatIDo}</p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-graphite">What you get</span>
              <p className="text-sm leading-relaxed text-graphite">{pillar.whatYouGet}</p>
            </div>

            <div className="mt-auto flex flex-col gap-1.5 pt-2">
              {pillar.caseStudy && (
                <Link href={pillar.caseStudy.href} className="link-inline">
                  See it in action: {pillar.caseStudy.label}
                </Link>
              )}
              {pillar.caseStudies?.map((cs) => (
                <Link key={cs.href} href={cs.href} className="link-inline">
                  See it in action: {cs.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-8 border-t border-rule pt-12">
        <h2 className="text-2xl">Ways to work together</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {WAYS_TO_WORK.map((way) => (
            <div key={way.title} className="card flex flex-col gap-3">
              <h3 className="text-base text-ink">{way.title}</h3>
              <p className="text-sm leading-relaxed text-graphite">{way.description}</p>
              {way.cta && (
                <Link href={way.cta.href} className="link-inline mt-auto">
                  {way.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-12 text-sm text-graphite">
        HubSpot, Salesforce, GA4, Looker, Sigma, Power BI, Meta Ads, Canva, CapCut, Python, SQL
      </p>

      <div className="mt-16 flex flex-col items-start gap-4 border-t border-rule pt-12">
        <h2 className="text-xl">Have a project in mind?</h2>
        <Link href="/contact" className="btn-primary">
          Start a conversation
        </Link>
      </div>
    </section>
  );
}
