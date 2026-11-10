import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import SectionLabel from "@/components/SectionLabel";
import Tag from "@/components/Tag";

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

const TOOLS = [
  "HubSpot",
  "Salesforce",
  "GA4",
  "Looker",
  "Sigma",
  "Power BI",
  "Meta Ads",
  "Canva",
  "CapCut",
  "Python",
  "SQL",
];

export default function HowICanHelpPage() {
  return (
    <>
      <section className="container-page pb-16 pt-16 lg:pt-24">
        <SectionLabel>How I can help</SectionLabel>
        <h1 className="heading-1 max-w-3xl">Where I add the most value</h1>
        <p className="mt-6 max-w-2xl text-ink-muted">
          Most small teams have marketing, data, and CRM living in separate worlds. I work across
          all three, so nothing falls through the cracks.
        </p>
      </section>

      <section className="section-y section-rule">
        <div className="container-page">
          <SectionLabel>Three areas</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className="card flex flex-col gap-4"
              >
                <span className="font-mono text-sm font-medium text-cherry">0{i + 1}</span>
                <h2 className="heading-3">{pillar.title}</h2>
                <p className="font-medium text-ink">{pillar.summary}</p>

                <div className="flex flex-col gap-1.5 border-t border-hairline pt-4">
                  <span className="eyebrow">
                    What I do
                  </span>
                  <p className="text-sm text-ink-muted">{pillar.whatIDo}</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="eyebrow">
                    What you get
                  </span>
                  <p className="text-sm text-ink-muted">{pillar.whatYouGet}</p>
                </div>

                <div className="mt-auto flex flex-col gap-1.5 border-t border-hairline pt-4">
                  <span className="eyebrow">
                    See it in action
                  </span>
                  {pillar.caseStudy && (
                    <Link href={pillar.caseStudy.href} className="link text-sm">
                      {pillar.caseStudy.label} &rarr;
                    </Link>
                  )}
                  {pillar.caseStudies?.map((cs) => (
                    <Link key={cs.href} href={cs.href} className="link text-sm">
                      {cs.label} &rarr;
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionLabel>Ways to work together</SectionLabel>
          <h2 className="heading-2 mb-10">Pick the shape that fits</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {WAYS_TO_WORK.map((way) => (
              <div
                key={way.title}
                className="card flex flex-col gap-3"
              >
                <h3 className="heading-3">{way.title}</h3>
                <p className="text-ink-muted">{way.description}</p>
                {way.cta && (
                  <Link href={way.cta.href} className="btn btn-secondary mt-auto w-fit">
                    {way.cta.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-10">
            <span className="eyebrow">
              Tools I work in
            </span>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <Tag key={tool}>{tool}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a project in mind?"
        body="Tell me where things feel disconnected and we'll figure out which of these fits."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "View my resume", href: "/resume.pdf" }}
      />
    </>
  );
}
