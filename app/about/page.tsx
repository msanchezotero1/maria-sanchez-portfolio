import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";
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
      <section className="container-page grid items-start gap-12 py-16 sm:py-24 lg:grid-cols-[320px_1fr] lg:gap-20 lg:py-28">
        <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[280px] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-sm bg-sky sm:translate-x-5 sm:translate-y-5"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-paper-tint">
            <Image
              src="/headshot-navy.jpg"
              alt="Maria Sanchez Otero"
              fill
              sizes="(min-width: 1024px) 320px, 280px"
              className="object-cover object-[50%_30%]"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <SectionLabel className="mb-0">About</SectionLabel>
          <h1 className="display-sm text-ink">Maria Sanchez Otero</h1>

          <p className="text-xl leading-relaxed text-ink">
            I build the analytics and systems layer behind marketing and revenue teams.
          </p>

          <div className="flex flex-col gap-4 text-lg leading-relaxed text-graphite">
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

      <section className="section-y bg-sky">
        <div className="container-page">
          <SectionLabel>Quick facts</SectionLabel>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-sm border-t-4 border-signal bg-white p-7">
              <h2 className="text-xl text-ink">Education</h2>
              <p className="text-base text-graphite">MS in Business Analytics, Babson College</p>
              <p className="text-base text-graphite">BBA in Marketing, UT San Antonio</p>
            </div>
            <div className="flex flex-col gap-3 rounded-sm border-t-4 border-signal bg-white p-7">
              <h2 className="text-xl text-ink">Tools</h2>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
              <p className="text-sm text-graphite">
                Though the tools matter less than knowing which question is worth answering.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-sm border-t-4 border-signal bg-white p-7">
              <h2 className="text-xl text-ink">Based in</h2>
              <p className="text-base text-graphite">
                Originally from Cali, Colombia. Currently based in Boston.
              </p>
              <p className="text-base text-graphite">I work in English and Spanish.</p>
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
