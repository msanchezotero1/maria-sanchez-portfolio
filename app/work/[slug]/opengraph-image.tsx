import { ImageResponse } from "next/og";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies";
import { WithArrows, Eyebrow, OG_COLORS, OG_CONTENT_TYPE, OG_SIZE, OgFooter, loadOgFonts } from "@/lib/og";

// Social preview for each case study: the headline result, big, so the
// number does the selling when the link is shared on LinkedIn.
// One image per case study is generated at build time.

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Case study by Maria Sanchez Otero";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function CaseStudyOgImage({ params }: { params: { slug: string } }) {
  const fonts = await loadOgFonts();
  const { frontmatter } = getCaseStudy(params.slug);
  const title = frontmatter.title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: OG_COLORS.cream,
          padding: "64px 72px",
        }}
      >
        <Eyebrow>{`Case study · ${frontmatter.category}`}</Eyebrow>

        {frontmatter.metric && (
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginTop: 36,
              padding: "14px 24px",
              background: OG_COLORS.blush,
              borderRadius: 8,
              fontFamily: "Mono",
              fontSize: frontmatter.metric.length > 28 ? 34 : 44,
              color: OG_COLORS.cherry,
            }}
          >
            <WithArrows
              text={frontmatter.metric}
              size={frontmatter.metric.length > 28 ? 34 : 44}
              color={OG_COLORS.cherry}
            />
          </div>
        )}

        <div
          style={{
            display: "flex",
            marginTop: 32,
            marginBottom: "auto",
            fontFamily: "Display",
            fontSize: title.length > 48 ? 60 : title.length > 30 ? 64 : 72,
            lineHeight: 1.05,
            color: OG_COLORS.ink,
            maxWidth: 1056,
          }}
        >
          {title}
        </div>

        <OgFooter right={frontmatter.client} />
      </div>
    ),
    { ...size, fonts }
  );
}
