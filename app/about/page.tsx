import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import Headshot from "@/components/Headshot";
import SectionLabel from "@/components/SectionLabel";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "About",
  description: "About Maria Sanchez Otero, marketing and CRM analytics specialist.",
};

const TOOLS = [
  "HubSpot",
  "Salesforce",
  "Python",
  "SQL",
  "Looker Studio",
  "Power BI",
  "GA4",
  "Meta Ads",
];

export default function AboutPage() {
  return (
    <>
      <section className="container-page grid items-start gap-12 py-16 lg:grid-cols-[320px_1fr] lg:gap-20 lg:py-24">
        <Headshot
          sizes="(min-width: 1024px) 320px, 280px"
          className="mx-auto w-full max-w-[220px] sm:max-w-[280px] lg:max-w-none"
        />

        <div className="flex flex-col gap-6">
          <SectionLabel className="mb-0">About</SectionLabel>
          <h1 className="heading-1">Maria Sanchez Otero</h1>

          <p className="font-display text-[26px] leading-[1.3] text-ink">
            I build the analytics and systems layer behind marketing and revenue teams.
          </p>

          <div className="flex flex-col gap-4 text-ink-muted">
            <p>
              That has looked like different things. Cutting cost per lead by roughly
              90% at a healthcare startup by arguing that our ads were too polished to
              be believed. Running a sentiment analysis on 1,300 ad comments to prove
              which creative was generating distrust. Auditing a Salesforce instance
              until it was clear the CRM could not answer basic questions about its own
              customers, then getting executive buy-in to fix it. Automating a daily
              copy-paste job out of existence so leadership could see pipeline coverage
              without waiting for someone to update a spreadsheet.
            </p>
            <p>
              The common thread is that the useful signal is usually somewhere nobody
              is looking. Comment sections, empty fields, the manual step everyone
              works around. I like finding it, quantifying it, and turning it into
              something a team can act on.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y section-rule">
        <div className="container-page">
          <SectionLabel>Quick facts</SectionLabel>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-3 card">
              <h2 className="heading-3">Education</h2>
              <p className="text-ink-muted">MS in Business Analytics, Babson College</p>
              <p className="text-ink-muted">BBA in Marketing, UT San Antonio</p>
            </div>
            <div className="flex flex-col gap-3 card">
              <h2 className="heading-3">Tools</h2>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
              <p className="text-sm text-ink-muted">
                Though the tools matter less than knowing which question is worth answering.
              </p>
            </div>
            <div className="flex flex-col gap-3 card">
              <h2 className="heading-3">Based in</h2>
              <p className="text-ink-muted">
                Originally from Cali, Colombia. Currently based in Boston.
              </p>
              <p className="text-ink-muted">I work in English and Spanish.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let's work together"
        body="Whether it's a project, fractional support, or a full-time role, I'd love to hear what you're working on."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "View my resume", href: "/resume.pdf" }}
      />
    </>
  );
}
