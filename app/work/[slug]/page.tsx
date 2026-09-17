import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
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
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="mt-8 mb-2 text-lg" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mb-4 leading-relaxed text-graphite" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mb-4 ml-5 list-disc space-y-1.5 text-graphite" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mb-4 ml-5 list-decimal space-y-1.5 text-graphite" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote className="mb-4 border-l-2 border-ink py-2 pl-4 italic text-ink" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-ink underline underline-offset-4 transition-colors hover:text-signal"
      {...props}
    />
  ),
  table: (props: React.ComponentProps<"table">) => (
    <div className="mb-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="border-b border-rule text-ink" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th className="py-2 pr-4 font-medium" {...props} />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td className="border-b border-rule py-2 pr-4 text-graphite" {...props} />
  ),
};

function isMetric(
  highlight: string | { label: string; value: string }
): highlight is { label: string; value: string } {
  return typeof highlight === "object";
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const slugs = getCaseStudySlugs();
  if (!slugs.includes(params.slug)) notFound();

  const { frontmatter, content } = getCaseStudy(params.slug);
  const all = getAllCaseStudies();
  const currentIndex = all.findIndex((cs) => cs.slug === params.slug);
  const next = all[(currentIndex + 1) % all.length];

  const metaLine = [
    `Client: ${frontmatter.client}`,
    frontmatter.role ? `Role: ${frontmatter.role}` : null,
    frontmatter.timeframe ? `Timeframe: ${frontmatter.timeframe}` : null,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <article className="container-page max-w-3xl py-20 sm:py-28 lg:py-36">
      <Link href="/work" className="link-inline">
        &larr; All case studies
      </Link>

      <div className="mt-6 flex flex-col gap-4 border-b border-rule pb-10">
        <span className="text-sm text-graphite">{frontmatter.category}</span>
        <h1 className="text-3xl sm:text-4xl">{frontmatter.title}</h1>
        <p className="text-lg text-graphite">{frontmatter.summary}</p>
        <p className="text-sm font-medium text-graphite">{metaLine}</p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="border border-rule px-3 py-1 text-xs font-medium text-graphite"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {frontmatter.highlights && frontmatter.highlights.length > 0 && (
        <div className="grid gap-4 border-b border-rule py-10 sm:grid-cols-3">
          {frontmatter.highlights.map((highlight, i) => (
            <div key={i} className="border border-rule p-4 text-sm text-ink">
              {isMetric(highlight) ? (
                <>
                  <p className="text-xs font-semibold text-graphite">{highlight.label}</p>
                  <p className="mt-1 text-base font-medium">{highlight.value}</p>
                </>
              ) : (
                highlight
              )}
            </div>
          ))}
        </div>
      )}

      <div className="pt-10">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>

      {next && next.slug !== params.slug && (
        <div className="mt-16 border-t border-rule pt-8">
          <p className="mb-2 text-sm text-graphite">Next case study</p>
          <Link
            href={`/work/${next.slug}`}
            className="text-lg font-medium text-ink transition-colors hover:text-signal"
          >
            {next.frontmatter.title}
          </Link>
        </div>
      )}
    </article>
  );
}
