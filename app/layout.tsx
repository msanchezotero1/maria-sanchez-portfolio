import type { Metadata } from "next";
import { Schibsted_Grotesk, Fraunces } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

// Headline/wordmark serif — paired with Schibsted Grotesk for a warmer,
// more editorial feel. Fraunces has a genuine "soft" optical character
// (rounded, slightly warm terminals) rather than a sharp classic serif.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Maria Sanchez Otero | Growth Marketing, Analytics & Systems",
    template: "%s | Maria Sanchez Otero",
  },
  description:
    "Growth marketer working across creative, analytics, and CRM systems. Campaigns that perform, data that proves it, systems that keep it running.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${schibstedGrotesk.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink">
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
