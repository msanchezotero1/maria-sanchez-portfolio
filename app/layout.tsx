import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "./globals.css";

// Fonts are self-hosted from app/fonts (latin subset, from Fontsource, SIL OFL)
// so builds never depend on fetching Google Fonts.

// Headlines and wordmark.
const cormorant = localFont({
  variable: "--font-display",
  src: [
    { path: "./fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
  ],
});

// Body and UI.
const inter = localFont({
  variable: "--font-sans",
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

// Metrics, stats and data labels.
const plexMono = localFont({
  variable: "--font-mono",
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

const SITE_TITLE = "Maria Sanchez Otero | More paying clients for small businesses";
const SITE_DESCRIPTION =
  "Organic video, Meta ads, sales funnels and AI automation that turn attention into paying clients, with a monthly ROI report that shows what every dollar brought back. EN / ES.";

export const metadata: Metadata = {
  metadataBase: new URL("https://maria-sanchez-portfolio.vercel.app"),
  title: {
    default: SITE_TITLE,
    template: "%s | Maria Sanchez Otero",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Maria Sanchez Otero",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream font-sans text-ink">
        {/*
          GA4 placeholder — see components/Analytics.tsx for setup instructions.
          Once NEXT_PUBLIC_GA_MEASUREMENT_ID is set, this loads the gtag.js
          script tag site-wide. No other changes needed here.
        */}
        <Analytics />

        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
