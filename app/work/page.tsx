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
      <section className="container-page pb-8 pt-16 lg:pt-24">
        <SectionLabel>Work</SectionLabel>
        <h1 className="heading-1 max-w-3xl">Case studies</h1>
        <p className="mt-6 max-w-2xl text-ink-muted">
          Real projects across creative, analytics, and systems, and the numbers they moved.
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          Client and employer names are kept confidential.
        </p>
      </section>

      <section className="container-page flex flex-col gap-16 pb-16 pt-8 lg:pb-24">
        {PILLARS.map((pillar, i) => {
          const pillarCaseStudies = caseStudies.filter(
            (caseStudy) => caseStudy.frontmatter.category === pillar
          );
          if (pillarCaseStudies.length === 0) return null;

          return (
            <div key={pillar} className="flex flex-col gap-2 border-t border-hairline pt-10">
              <h2 className="heading-2 mb-6 flex items-baseline gap-4">
                <span className="font-mono text-base font-medium text-cherry">0{i + 1}</span>
                {pillar}
              </h2>
              <div className="flex flex-col gap-6">
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
