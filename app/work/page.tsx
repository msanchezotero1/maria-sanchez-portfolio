import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import ClosingCta from "@/components/ClosingCta";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Results",
  description: "Real campaigns, real numbers. Client names kept confidential where requested.",
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <section className="container-page pb-8 pt-16 lg:pt-24">
        <SectionLabel>Results</SectionLabel>
        <h1 className="heading-1 max-w-3xl">Results</h1>
        <p className="mt-6 max-w-2xl text-ink-muted">
          Real campaigns, real numbers. Client names kept confidential where requested.
        </p>
      </section>

      <section className="container-page flex flex-col gap-6 pb-16 pt-8 lg:pb-24">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </section>

      <ClosingCta />
    </>
  );
}
