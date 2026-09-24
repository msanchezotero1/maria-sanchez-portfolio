import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllCaseStudies, getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies";
import CtaBanner from "@/components/CtaBanner";
import SectionLabel from "@/components/SectionLabel";
import Tag from "@/components/Tag";

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
    <blockquote className="mb-6 border-l-4 border-signal bg-white py-4 pl-5 pr-4 italic text-ink" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-ink underline decoration-signal underline-offset-4 transition-colors hover:decoration-2"
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
    <>
      <article className="container-page max-w-3xl py-16 sm:py-24">
        <Link href="/work" className="link-inline">
          &larr; All case studies
        </Link>

        <div className="mt-8 flex flex-col gap-4 border-b border-rule pb-10">
          <SectionLabel className="mb-0">{frontmatter.category}</SectionLabel>
          <h1 className="text-3xl sm:text-4xl">{frontmatter.title}</h1>
          <p className="text-lg text-graphite">{frontmatter.summary}</p>
          <p className="text-sm font-medium text-graphite">{metaLine}</p>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {frontmatter.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </div>

        {frontmatter.highlights && frontmatter.highlights.length > 0 && (
          <div className="grid gap-4 border-b border-rule py-10 sm:grid-cols-3">
            {frontmatter.highlights.map((highlight, i) => (
              <div key={i} className="rounded-sm border-t-4 border-signal bg-sky p-5 text-sm text-ink">
                {isMetric(highlight) ? (
                  <>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink">
                      {highlight.label}
                    </p>
                    <p className="mt-2 font-serif text-2xl font-bold">{highlight.value}</p>
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
          <Link
            href={`/work/${next.slug}`}
            className="group mt-16 flex flex-col gap-2 rounded-sm border border-rule border-t-4 border-t-signal bg-white p-7 transition-colors hover:border-ink hover:border-t-signal"
          >
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-ink">
              Next case study &rarr;
            </span>
            <span className="font-serif text-2xl font-bold text-ink decoration-signal decoration-2 underline-offset-4 group-hover:underline">
              {next.frontmatter.title}
            </span>
          </Link>
        )}
      </article>

      <CtaBanner
        title="Want results like these?"
        body="Tell me about your team and what you're trying to move."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "All case studies", href: "/work" }}
      />
    </>
  );
}
