import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in CRM data systems, funnel tracking, and campaign reporting.",
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mb-14 flex max-w-2xl flex-col gap-4">
        <span className="eyebrow">Work</span>
        <h1 className="text-3xl sm:text-4xl">Case studies</h1>
        <p className="text-lg text-ink-muted">
          A look at how CRM data systems, funnel tracking, and reporting builds have
          moved specific numbers for specific teams.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
}
