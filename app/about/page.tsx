import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Maria Sanchez Otero, marketing and CRM analytics specialist.",
};

export default function AboutPage() {
  return (
    <section className="container-page py-20 sm:py-28 lg:py-36">
      <div className="grid gap-12 sm:grid-cols-[280px_1fr] sm:items-start">
        <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-md bg-rule sm:max-w-none">
          <Image
            src="/headshot.jpg"
            alt="Maria Sanchez Otero"
            fill
            sizes="(min-width: 640px) 280px, 320px"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl">Maria Sanchez Otero</h1>

          <p className="text-xl leading-relaxed text-ink">
            I build the analytics and systems layer behind marketing and revenue teams.
          </p>

          <div className="flex flex-col gap-4 text-lg leading-relaxed text-graphite">
            <p>
              That has looked like different things. Cutting cost per lead by roughly
              90% at a healthcare startup by arguing that our ads were too polished to
              be believed. Running a sentiment analysis on 1,300 ad comments to prove
              which creative was generating distrust. Auditing a Salesforce instance
              until it was clear the CRM could not answer basic questions about its own
              customers, then getting executive buy-in to fix it. Automating a daily
              copy-paste job out of existence so leadership could see pipeline coverage
              without waiting for someone to update a spreadsheet.
            </p>
            <p>
              The common thread is that the useful signal is usually somewhere nobody
              is looking. Comment sections, empty fields, the manual step everyone
              works around. I like finding it, quantifying it, and turning it into
              something a team can act on.
            </p>
            <p>
              I hold an MS in Business Analytics from Babson College and a BBA in
              Marketing from UT San Antonio. I work in HubSpot, Salesforce, Python,
              SQL, Looker Studio, Power BI, GA4, and Meta Ads, though the tools matter
              less than knowing which question is worth answering.
            </p>
          </div>

          <p className="border-t border-rule pt-6 text-sm text-graphite">
            Originally from Cali, Colombia. Currently based in Boston. I work in
            English and Spanish.
          </p>

          <Link href="/contact" className="btn-primary mt-2 w-fit">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
