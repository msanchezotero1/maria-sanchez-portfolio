import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in growth marketing, measurement, and marketing systems.",
};

const PILLARS = ["Grow", "Measure", "Systemize"] as const;

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <section className="container-page py-20 sm:py-28 lg:py-36">
      <div className="mb-14 flex max-w-2xl flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl">Case studies</h1>
        <p className="text-lg text-graphite">
          Real projects across creative, analytics, and systems, and the numbers they moved.
        </p>
        <p className="text-sm text-graphite">Client and employer names are kept confidential.</p>
      </div>

      <div className="flex flex-col gap-16">
        {PILLARS.map((pillar) => {
          const pillarCaseStudies = caseStudies.filter(
            (caseStudy) => caseStudy.frontmatter.category === pillar
          );
          if (pillarCaseStudies.length === 0) return null;

          return (
            <div key={pillar} className="flex flex-col gap-2 border-t border-rule pt-10">
              <h2 className="mb-4 text-2xl sm:text-3xl">{pillar}</h2>
              <div className="divide-y divide-rule">
                {pillarCaseStudies.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
