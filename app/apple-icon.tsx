import { ImageResponse } from "next/og";
import { OG_COLORS, loadOgFonts } from "@/lib/og";

// Home-screen icon for iPhone/iPad, matching app/icon.svg.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: OG_COLORS.cherry,
          color: OG_COLORS.cream,
          fontFamily: "Display",
          fontSize: 124,
          paddingBottom: 8,
        }}
      >
        M
      </div>
    ),
    { ...size, fonts }
  );
}
