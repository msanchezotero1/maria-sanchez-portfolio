import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const { slug, frontmatter } = caseStudy;

  return (
    <Link
      href={`/work/${slug}`}
      className="card group flex flex-col overflow-hidden p-0 hover:shadow-none"
    >
      {/* Placeholder thumbnail — swap for a real image via frontmatter later if needed */}
      <div className="flex h-44 items-center justify-center border-b border-surface-border bg-primary-light">
        <span className="eyebrow text-primary">{frontmatter.category}</span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-medium text-ink group-hover:text-primary">
          {frontmatter.title}
        </h3>
        <p className="text-sm text-ink-muted">{frontmatter.summary}</p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-surface-border px-2.5 py-0.5 text-xs font-medium text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">
            {frontmatter.client}
          </span>
          <span className="text-sm font-medium text-accent">Read case study &rarr;</span>
        </div>
      </div>
    </Link>
  );
}
