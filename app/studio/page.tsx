import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import SectionLabel from "@/components/SectionLabel";
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
      "Designed in Canva, edited in CapCut, then scheduled, published, and adjusted based on what performed.",
  },
];

export default function StudioPage() {
  return (
    <>
      <section className="container-page flex flex-col items-start pb-16 pt-16 sm:pt-24">
        <SectionLabel>Studio</SectionLabel>
        <h1 className="display-sm text-ink">The creative side of the work</h1>
        <p className="mt-6 max-w-[55ch] text-lg text-graphite">
          I ran social media for a healthcare startup, from planning to design to video.
          Everything here I made myself.
        </p>
      </section>

      <section className="bg-ink text-white">
        <div className="container-page grid grid-cols-1 divide-y divide-white/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {HOW_I_RAN_IT.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 py-8 sm:px-8 sm:py-12 lg:first:pl-0 lg:last:pr-0">
              <h2 className="text-lg text-sky">{item.title}</h2>
              <p className="text-sm text-white/90">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <StudioGallery posts={studioPosts} videos={studioVideos} />
        </div>
      </section>

      <CtaBanner
        title="Want to see the numbers behind the creative?"
        primary={{ label: "See the case studies", href: "/work" }}
        secondary={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}
