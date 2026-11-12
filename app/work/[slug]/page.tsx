import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllCaseStudies, getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import ClosingCta from "@/components/ClosingCta";
import JsonLd from "@/components/JsonLd";
import SectionLabel from "@/components/SectionLabel";
import Tag from "@/components/Tag";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const slugs = getCaseStudySlugs();
  if (!slugs.includes(params.slug)) return {};
  const { frontmatter } = getCaseStudy(params.slug);
  return pageMetadata({
    title: frontmatter.seoTitle ?? frontmatter.title,
    description: frontmatter.seoDescription ?? frontmatter.summary,
    path: `/work/${params.slug}`,
    type: "article",
    image: {
      path: `/work/${params.slug}/opengraph-image`,
      alt: frontmatter.metric
        ? `${frontmatter.metric}: ${frontmatter.title}`
        : frontmatter.title,
    },
  });
}

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="heading-3 mt-12 mb-4" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="mt-8 mb-2 font-display text-2xl" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mb-4 text-ink-muted" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mb-4 ml-5 list-disc space-y-1.5 text-ink-muted" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mb-4 ml-5 list-decimal space-y-1.5 text-ink-muted" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote className="mb-6 rounded-card bg-blush px-6 py-5 font-display text-2xl italic leading-snug text-ink" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="link"
      {...props}
    />
  ),
  table: (props: React.ComponentProps<"table">) => (
    <div className="mb-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="border-b border-hairline text-ink" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th className="py-2 pr-4 font-medium" {...props} />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td className="border-b border-hairline py-2 pr-4 text-ink-muted" {...props} />
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

  const url = `${SITE_URL}/work/${params.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: frontmatter.title,
        description: frontmatter.seoDescription ?? frontmatter.summary,
        url,
        mainEntityOfPage: url,
        image: `${url}/opengraph-image`,
        inLanguage: "en",
        author: { "@id": `${SITE_URL}/#maria`, "@type": "Person", name: SITE_NAME },
        publisher: { "@id": `${SITE_URL}/#business` },
        keywords: frontmatter.tags?.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Results", item: `${SITE_URL}/work` },
          { "@type": "ListItem", position: 3, name: frontmatter.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article className="container-page max-w-3xl py-16 lg:py-24">
        <Link href="/work" className="link text-sm">
          &larr; All results
        </Link>

        <div className="mt-8 flex flex-col gap-4 border-b border-hairline pb-10">
          <SectionLabel className="mb-0">{frontmatter.category}</SectionLabel>
          {frontmatter.metric && (
            <p className="font-mono text-metric font-medium text-cherry">{frontmatter.metric}</p>
          )}
          <h1 className="heading-2">{frontmatter.title}</h1>
          <p className="text-ink-muted">{frontmatter.summary}</p>
          <p className="text-sm font-medium text-ink-muted">{metaLine}</p>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {frontmatter.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </div>

        {frontmatter.highlights && frontmatter.highlights.length > 0 && (
          <div className="grid gap-4 border-b border-hairline py-10 sm:grid-cols-3">
            {frontmatter.highlights.map((highlight, i) => (
              <div key={i} className="rounded-card bg-blush p-5 font-mono text-sm text-ink">
                {isMetric(highlight) ? (
                  <>
                    <p className="font-mono text-xs text-ink/75">
                      {highlight.label}
                    </p>
                    <p className="mt-2 font-mono text-metric font-medium text-cherry">{highlight.value}</p>
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
            className="card card-hover group mt-16 flex flex-col gap-2"
          >
            <span className="eyebrow">
              Next result &rarr;
            </span>
            <span className="heading-3 transition-colors duration-150 group-hover:text-cherry">
              {next.frontmatter.title}
            </span>
          </Link>
        )}
      </article>

      <ClosingCta />
    </>
  );
}
