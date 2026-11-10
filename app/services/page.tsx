import type { Metadata } from "next";
import { BOOKING_CTA, BOOKING_URL } from "@/lib/site";
import Button from "@/components/Button";
import ClosingCta from "@/components/ClosingCta";
import SectionLabel from "@/components/SectionLabel";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Organic video, Meta ads, sales funnels and AI follow-up in one connected system, with a monthly ROI report. Plans from $2,000/month.",
};

const GROWTH_SYSTEM_INCLUDES = [
  "Organic video strategy, scripts and direction (you record, I edit and publish)",
  "Meta ads management (Instagram and Facebook)",
  "Sales funnel and landing page",
  "Instant AI reply to every new lead",
  "Monthly ROI report: leads, appointments, revenue",
];

const ADD_ONS = [
  {
    title: "On-site content shoot",
    description: "My team films at your location: one session, 20+ videos for organic and ads.",
  },
  {
    title: "AI agents",
    description:
      "An AI assistant that answers your Instagram DMs or emails, qualifies leads and books appointments 24/7.",
  },
  {
    title: "Extra landing pages",
    description: "For new offers, promotions or locations.",
  },
];

const HOW_IT_WORKS = [
  { title: "Free call", description: "We look at where your clients come from today." },
  { title: "Setup (weeks 1–2)", description: "Accounts, tracking, funnel and AI follow-up." },
  { title: "Launch (weeks 3–4)", description: "Ads live and first videos published." },
  {
    title: "Optimize monthly",
    description: "Keep what works, cut what doesn't, review ROI together.",
  },
];

const TOOLS = ["Meta Ads", "Instagram", "TikTok", "HubSpot", "GA4", "Looker", "Power BI", "CapCut"];

export default function ServicesPage() {
  return (
    <>
      <section className="container-page pb-16 pt-16 lg:pt-24">
        <SectionLabel>Services</SectionLabel>
        <h1 className="heading-1 max-w-3xl">
          Everything it takes to turn attention into paying clients
        </h1>
        <p className="mt-6 max-w-2xl text-ink-muted">
          One connected system instead of four different vendors. Plans from $2,000/month.
        </p>
      </section>

      <section className="section-y section-rule">
        <div className="container-page">
          <div className="card flex flex-col gap-6 border-cherry sm:p-12">
            <div className="flex flex-col gap-2">
              <h2 className="heading-2">Growth System</h2>
              <p className="font-mono text-metric font-medium text-cherry">From $2,000/month</p>
              <p className="text-sm text-ink-muted">+ one-time setup in month one</p>
            </div>
            <p className="font-medium text-ink">
              Organic video + paid ads + sales funnel, with an ROI report every month.
            </p>
            <ul className="flex flex-col gap-3 border-t border-hairline pt-6">
              {GROWTH_SYSTEM_INCLUDES.map((item) => (
                <li key={item} className="flex gap-3 text-ink">
                  <span aria-hidden="true" className="font-medium text-cherry">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-muted">
              3-month minimum, then month to month. Ad spend is paid directly to Meta (minimum
              $1,000/month).
            </p>
            <Button href={BOOKING_URL} className="w-fit">
              {BOOKING_CTA}
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y section-rule">
        <div className="container-page">
          <SectionLabel>Add-ons</SectionLabel>
          <div className="grid gap-6 sm:grid-cols-3">
            {ADD_ONS.map((addOn) => (
              <div key={addOn.title} className="card flex flex-col gap-3">
                <h3 className="heading-3">{addOn.title}</h3>
                <p className="text-ink-muted">{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y section-rule">
        <div className="container-page">
          <SectionLabel>How it works</SectionLabel>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.title} className="card flex flex-col gap-3">
                <span className="font-mono text-sm font-medium text-cherry">{i + 1}.</span>
                <h3 className="heading-3">{step.title}</h3>
                <p className="text-ink-muted">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-10">
            <h2 className="eyebrow">Tools I work in</h2>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <Tag key={tool}>{tool}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
