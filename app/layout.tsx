import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "./globals.css";

// Body text. Both fonts are variable, so every weight is available.
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  style: ["normal", "italic"],
});

// Headlines and wordmark.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
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
    <html lang="en" className={`${lora.variable} ${playfair.variable}`}>
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
