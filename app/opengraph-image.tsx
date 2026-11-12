import { ImageResponse } from "next/og";
import { WithArrows, Eyebrow, OG_COLORS, OG_CONTENT_TYPE, OG_SIZE, OgFooter, loadHeadshot, loadOgFonts } from "@/lib/og";

// Social preview for the homepage and every page without its own image
// (services, results, content, about, contact). Generated at build time.

export const alt = "Maria Sanchez Otero: more paying clients for small businesses, with the numbers to prove it";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage() {
  const [fonts, headshot] = await Promise.all([loadOgFonts(), loadHeadshot()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: OG_COLORS.cream,
          padding: "64px 72px",
          gap: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Eyebrow>Growth marketing · EN / ES</Eyebrow>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 28,
              fontFamily: "Display",
              fontSize: 76,
              lineHeight: 1.02,
              color: OG_COLORS.ink,
            }}
          >
            <span>More paying clients.</span>
            <span>With the numbers</span>
            <span>to prove it.</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 32,
              marginBottom: "auto",
            }}
          >
            <div style={{ display: "flex", fontFamily: "Mono", fontSize: 36, color: OG_COLORS.cherry }}>
              <WithArrows text="$200 → $15" size={36} color={OG_COLORS.cherry} />
            </div>
            <span style={{ fontFamily: "Sans", fontSize: 24, color: OG_COLORS.inkMuted }}>
              cost per lead on Meta ads
            </span>
          </div>
          <OgFooter right="Meta ads · AI automation" />
        </div>

        <div style={{ display: "flex", position: "relative", width: 360, height: 450, marginTop: 20 }}>
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              width: 360,
              height: 450,
              border: `2px solid ${OG_COLORS.sand}`,
              borderRadius: 8,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={headshot}
            alt=""
            width={360}
            height={450}
            style={{ objectFit: "cover", objectPosition: "50% 30%", borderRadius: 8 }}
          />
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
