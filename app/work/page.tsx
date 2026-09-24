import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import CtaBanner from "@/components/CtaBanner";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in growth marketing, measurement, and marketing systems.",
};

const PILLARS = ["Grow", "Measure", "Systemize"] as const;

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <section className="container-page pb-8 pt-16 sm:pt-24">
        <SectionLabel>Work</SectionLabel>
        <h1 className="display-sm max-w-3xl text-ink">Case studies</h1>
        <p className="mt-6 max-w-2xl text-lg text-graphite">
          Real projects across creative, analytics, and systems, and the numbers they moved.
        </p>
        <p className="mt-2 text-sm text-graphite">
          Client and employer names are kept confidential.
        </p>
      </section>

      <section className="container-page flex flex-col gap-16 pb-20 pt-8 sm:pb-28">
        {PILLARS.map((pillar, i) => {
          const pillarCaseStudies = caseStudies.filter(
            (caseStudy) => caseStudy.frontmatter.category === pillar
          );
          if (pillarCaseStudies.length === 0) return null;

          return (
            <div key={pillar} className="flex flex-col gap-2 border-t-4 border-signal pt-8">
              <h2 className="mb-2 flex items-baseline gap-4 text-2xl sm:text-3xl">
                <span className="font-serif text-base font-bold text-signal">0{i + 1}</span>
                {pillar}
              </h2>
              <div className="divide-y divide-rule">
                {pillarCaseStudies.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <CtaBanner
        title="Have a problem like one of these?"
        body="Tell me what's broken or what you're trying to grow, and I'll tell you how I'd approach it."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "See how I work", href: "/how-i-can-help" }}
      />
    </>
  );
}
