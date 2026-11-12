import { readFile } from "fs/promises";
import path from "path";

// Shared pieces for the social preview images (app/opengraph-image.tsx and
// app/work/[slug]/opengraph-image.tsx). The image renderer can't read woff2,
// so lib/og-fonts holds .woff copies of the site's fonts (same SIL OFL files).

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export const OG_COLORS = {
  cream: "#F6F1E8",
  paper: "#FBF8F2",
  ink: "#1A1615",
  inkMuted: "#6B615A",
  cherry: "#6E1E2A",
  blush: "#EADBD3",
  sand: "#D9C7B0",
  hairline: "#E2D7C7",
};

const FONT_DIR = path.join(process.cwd(), "lib", "og-fonts");

export async function loadOgFonts() {
  const [display, sans, sansMedium, mono] = await Promise.all([
    readFile(path.join(FONT_DIR, "cormorant-garamond-latin-500-normal.woff")),
    readFile(path.join(FONT_DIR, "inter-latin-400-normal.woff")),
    readFile(path.join(FONT_DIR, "inter-latin-500-normal.woff")),
    readFile(path.join(FONT_DIR, "ibm-plex-mono-latin-500-normal.woff")),
  ]);

  return [
    { name: "Display", data: display, weight: 500 as const, style: "normal" as const },
    { name: "Sans", data: sans, weight: 400 as const, style: "normal" as const },
    { name: "Sans", data: sansMedium, weight: 500 as const, style: "normal" as const },
    { name: "Mono", data: mono, weight: 500 as const, style: "normal" as const },
  ];
}

export async function loadHeadshot() {
  const file = await readFile(path.join(process.cwd(), "public", "headshot-navy.jpg"));
  return `data:image/jpeg;base64,${file.toString("base64")}`;
}

/** Small uppercase label, matching the site's `.eyebrow` style. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "Sans",
        fontWeight: 500,
        fontSize: 22,
        letterSpacing: 3,
        textTransform: "uppercase",
        color: OG_COLORS.inkMuted,
      }}
    >
      {children}
    </div>
  );
}

/** Footer row with the name on the left and a short label on the right. */
export function OgFooter({ right }: { right: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: `2px solid ${OG_COLORS.hairline}`,
        paddingTop: 28,
        fontFamily: "Sans",
        fontSize: 24,
        color: OG_COLORS.inkMuted,
        gap: 32,
        whiteSpace: "nowrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 7,
            background: OG_COLORS.cherry,
          }}
        />
        <span style={{ color: OG_COLORS.ink, fontWeight: 500 }}>Maria Sanchez Otero</span>
      </div>
      <span>{right}</span>
    </div>
  );
}

/**
 * Renders text that may contain "→". The bundled fonts are latin-only and
 * have no arrow glyph, so the arrow is drawn as an SVG instead of making the
 * image renderer fetch a fallback font at build time.
 */
export function WithArrows({ text, size, color }: { text: string; size: number; color: string }) {
  const parts = text.split("→");
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {parts.map((part, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          {i > 0 && (
            <svg
              width={size * 0.9}
              height={size * 0.6}
              viewBox="0 0 30 20"
              style={{ margin: `0 ${size * 0.2}px` }}
            >
              <path
                d="M2 10 H26 M18 3 L27 10 L18 17"
                stroke={color}
                strokeWidth="2.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span>{part.trim()}</span>
        </div>
      ))}
    </div>
  );
}
