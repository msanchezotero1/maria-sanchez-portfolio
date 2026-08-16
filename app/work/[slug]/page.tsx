import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllCaseStudies, getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const slugs = getCaseStudySlugs();
  if (!slugs.includes(params.slug)) return {};
  const { frontmatter } = getCaseStudy(params.slug);
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
  };
}

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="mt-10 mb-3 text-xl sm:text-2xl" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mb-4 leading-relaxed text-ink-muted" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mb-4 ml-5 list-disc space-y-1.5 text-ink-muted" {...props} />
  ),
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const slugs = getCaseStudySlugs();
  if (!slugs.includes(params.slug)) notFound();

  const { frontmatter, content } = getCaseStudy(params.slug);
  const all = getAllCaseStudies();
  const currentIndex = all.findIndex((cs) => cs.slug === params.slug);
  const next = all[(currentIndex + 1) % all.length];

  return (
    <article className="container-page max-w-3xl py-20 sm:py-28">
      <Link href="/work" className="text-sm font-medium text-primary hover:text-primary-dark">
        &larr; All case studies
      </Link>

      <div className="mt-6 flex flex-col gap-4 border-b border-surface-border pb-10">
        <span className="eyebrow">{frontmatter.category}</span>
        <h1 className="text-3xl sm:text-4xl">{frontmatter.title}</h1>
        <p className="text-lg text-ink-muted">{frontmatter.summary}</p>
        <p className="text-sm font-medium uppercase tracking-wide text-ink-muted">
          Client: {frontmatter.client}
        </p>
      </div>

      {frontmatter.highlights && frontmatter.highlights.length > 0 && (
        <div className="grid gap-4 border-b border-surface-border py-10 sm:grid-cols-3">
          {frontmatter.highlights.map((highlight) => (
            <div key={highlight} className="rounded-md bg-primary-light p-4 text-sm text-primary-dark">
              {highlight}
            </div>
          ))}
        </div>
      )}

      <div className="pt-10">
        <MDXRemote source={content} components={mdxComponents} />
      </div>

      {next && next.slug !== params.slug && (
        <div className="mt-16 border-t border-surface-border pt-8">
          <p className="eyebrow mb-2">Next case study</p>
          <Link href={`/work/${next.slug}`} className="text-lg font-medium text-ink hover:text-primary">
            {next.frontmatter.title} &rarr;
          </Link>
        </div>
      )}
    </article>
  );
}
