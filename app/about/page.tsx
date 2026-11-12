import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BOOKING_CTA, BOOKING_URL } from "@/lib/site";
import Button from "@/components/Button";
import ClosingCta from "@/components/ClosingCta";
import Headshot from "@/components/Headshot";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Maria Sanchez Otero helps small businesses get more paying clients from social media and AI automation, and proves it with numbers. MS, Babson College.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="container-page grid items-start gap-12 py-16 lg:grid-cols-[320px_1fr] lg:gap-20 lg:py-24">
        <Headshot
          sizes="(min-width: 1024px) 320px, 280px"
          className="mx-auto w-full max-w-[220px] sm:max-w-[280px] lg:max-w-none"
        />

        <div className="flex flex-col items-start gap-6">
          <SectionLabel className="mb-0">About</SectionLabel>
          <h1 className="heading-1">Hi, I'm Maria</h1>

          <p className="font-display text-[26px] leading-[1.3] text-ink">
            I help small businesses get more paying clients from social media, and prove it with
            numbers.
          </p>

          <div className="flex flex-col gap-4 text-ink-muted">
            <p>
              Before starting my own agency, I worked in growth marketing and analytics at a
              healthcare startup, where I cut cost per lead on Meta from about $200 to $15 and used
              AI to turn 100+ daily ad comments into a one-hour check-in.
            </p>
            <p>
              I have an MS in Business Analytics from Babson College and a BBA in Marketing from UT
              San Antonio. I'm originally from Colombia and work in English and Spanish.
            </p>
            <p>
              My approach is simple: get attention, turn it into leads, follow up fast, and measure
              what brings in revenue.
            </p>
          </div>

          <Button href={BOOKING_URL}>{BOOKING_CTA}</Button>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
