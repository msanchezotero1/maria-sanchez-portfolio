import type { Metadata } from "next";
import Link from "next/link";
import StudioGallery from "./StudioGallery";
import { studioPosts, studioVideos } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Social media design and short-form video for a healthcare startup, across Instagram, Facebook, and TikTok in English and Spanish.",
};

const HOW_I_RAN_IT = [
  {
    title: "Channels",
    description: "Instagram, Facebook, and TikTok, in English and Spanish.",
    border: "border-rule border-b sm:border-r lg:border-b-0",
  },
  {
    title: "Cadence",
    description: "Three posts a week, planned ahead on a content calendar.",
    border: "border-rule border-b lg:border-r lg:border-b-0",
  },
  {
    title: "Organic and paid",
    description: "Content built to work as organic posts and as Meta ads.",
    border: "border-rule border-b sm:border-b-0 sm:border-r",
  },
  {
    title: "Workflow",
    description:
      "Designed in Canva, edited in CapCut, then scheduled, published, and adjusted based on what performed.",
    border: "border-rule",
  },
];

export default function StudioPage() {
  return (
    <>
      <section className="container-page flex flex-col items-start gap-8 pb-16 pt-16 sm:pt-24">
        <h1 className="display-sm text-ink">The creative side of the work</h1>
        <p className="max-w-[55ch] text-lg text-graphite">
          I ran social media for a healthcare startup, from planning to design to video.
          Everything here I made myself.
        </p>
      </section>

      <section className="section-rule">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_I_RAN_IT.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col gap-2 py-8 sm:px-8 sm:py-14 sm:first:pl-0 lg:last:pr-0 ${item.border}`}
            >
              <h3 className="text-base font-medium text-ink">{item.title}</h3>
              <p className="text-sm text-graphite">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-rule section-y">
        <div className="container-page">
          <StudioGallery posts={studioPosts} videos={studioVideos} />
        </div>
      </section>

      <section className="section-rule section-y">
        <div className="container-page flex flex-col items-start gap-6">
          <h2 className="text-2xl font-medium sm:text-3xl">
            Want to see the numbers behind the creative?
          </h2>
          <Link href="/work" className="link-inline">
            See the case studies
          </Link>
        </div>
      </section>
    </>
  );
}
