import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import Tag from "@/components/Tag";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const { slug, frontmatter } = caseStudy;

  return (
    <Link
      href={`/work/${slug}`}
      className="card card-hover group flex items-center justify-between gap-8"
    >
      <div className="flex flex-1 flex-col gap-3">
        <span className="eyebrow">{frontmatter.category}</span>
        <h3 className="heading-3 transition-colors duration-150 group-hover:text-cherry">
          {frontmatter.title}
        </h3>
        <p className="max-w-xl text-ink-muted">{frontmatter.summary}</p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {frontmatter.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}

        <span className="pt-2 text-sm text-ink-muted">{frontmatter.client}</span>
      </div>

      {frontmatter.thumbnail && (
        <div className="relative hidden h-28 w-40 flex-shrink-0 overflow-hidden rounded-card sm:block">
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
