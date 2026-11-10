import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import SectionLabel from "@/components/SectionLabel";
import StudioGallery from "./StudioGallery";
import { studioPosts, studioVideos } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Content",
  description:
    "Short-form video and social content built to work twice: as organic posts and as Meta ads. Created in English and Spanish.",
};

const HOW_I_RAN_IT = [
  {
    title: "Channels",
    description: "Instagram, Facebook, and TikTok, in English and Spanish.",
  },
  {
    title: "Cadence",
    description: "Three posts a week, planned ahead on a content calendar.",
  },
  {
    title: "Organic and paid",
    description: "Content built to work as organic posts and as Meta ads.",
  },
  {
    title: "Workflow",
    description:
      "Strategy → scripts → shoot → edit → publish → measure what converts.",
  },
];

export default function StudioPage() {
  return (
    <>
      <section className="container-page flex flex-col items-start pb-16 pt-16 lg:pt-24">
        <SectionLabel>Content</SectionLabel>
        <h1 className="heading-1">Content</h1>
        <p className="mt-6 max-w-[55ch] text-ink-muted">
          Short-form video and social content built to work twice: as organic posts and as Meta
          ads. Created in English and Spanish.
        </p>
      </section>

      <section className="border-y border-hairline bg-blush">
        <div className="container-page grid grid-cols-1 divide-y divide-ink/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {HOW_I_RAN_IT.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 py-8 sm:px-8 sm:py-12 lg:first:pl-0 lg:last:pr-0">
              <h2 className="font-display text-2xl font-medium text-ink">{item.title}</h2>
              <p className="text-sm text-ink/75">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <StudioGallery posts={studioPosts} videos={studioVideos} />
        </div>
      </section>

      <ClosingCta title="Want content like this for your business?" body="" />
    </>
  );
}
