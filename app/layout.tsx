import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
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
