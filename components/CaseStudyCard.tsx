import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const { slug, frontmatter } = caseStudy;

  return (
    <Link href={`/work/${slug}`} className="group flex items-center justify-between gap-8 py-10">
      <div className="flex flex-1 flex-col gap-3">
        <span className="text-sm text-graphite">{frontmatter.category}</span>
        <h3 className="text-2xl text-ink transition-colors group-hover:text-signal sm:text-3xl">
          {frontmatter.title}
        </h3>
        <p className="max-w-xl text-base text-graphite">{frontmatter.summary}</p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-rule px-2.5 py-0.5 text-xs font-medium text-graphite"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <span className="pt-2 text-sm text-graphite">{frontmatter.client}</span>
      </div>

      {frontmatter.thumbnail && (
        <div className="relative hidden h-28 w-40 flex-shrink-0 overflow-hidden rounded-md sm:block">
          <Image
            src={frontmatter.thumbnail}
            alt=""
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      )}
    </Link>
  );
}
