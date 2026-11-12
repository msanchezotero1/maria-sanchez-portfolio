import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { CONTACT_EMAIL, LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/site";
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
  "Organic video, Meta ads, sales funnels and AI automation that turn attention into paying clients, with a monthly ROI report on what every dollar brought back.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

// Site-wide structured data: who Maria is and what the business does.
// Helps Google and AI assistants connect the site, the LinkedIn profile
// and the services into one entity.
const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#maria`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/headshot-navy.jpg`,
      jobTitle: "Growth marketer for small businesses",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Babson College",
      },
      knowsLanguage: ["en", "es"],
      knowsAbout: [
        "Meta ads",
        "Short-form video marketing",
        "Sales funnels",
        "AI automation",
        "Marketing analytics",
        "CRM",
      ],
      sameAs: [LINKEDIN_URL],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}/opengraph-image`,
      founder: { "@id": `${SITE_URL}/#maria` },
      areaServed: { "@type": "Country", name: "United States" },
      availableLanguage: ["English", "Spanish"],
      email: CONTACT_EMAIL,
      sameAs: [LINKEDIN_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
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
        <JsonLd data={SITE_JSON_LD} />

        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
