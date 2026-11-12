import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

// Next.js merges metadata shallowly: a page that sets `title` and
// `description` still inherits the layout's whole `openGraph` and `twitter`
// objects, so every shared link showed the homepage title. Build each page's
// metadata through this helper so the canonical URL and social previews
// always match the page itself.
//
// Preview images: a page that defines its own `openGraph` no longer inherits
// the image from app/opengraph-image.tsx, so it is set here explicitly.
// Case studies pass `image` to point at their own app/work/[slug]/opengraph-image.tsx.

type PageSeo = {
  /** Short page title. The layout template adds " | Maria Sanchez Otero". */
  title: string;
  description: string;
  /** Route path, e.g. "/services". Resolved against metadataBase. */
  path: string;
  /** Use the title as-is, without the site-name suffix. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  /** Path of a page-specific 1200×630 preview image. Defaults to the site image. */
  image?: { path: string; alt: string };
};

const DEFAULT_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Maria Sanchez Otero: more paying clients for small businesses, with the numbers to prove it",
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
  image,
}: PageSeo): Metadata {
  const ogImage = image
    ? { url: image.path, width: 1200, height: 630, alt: image.alt }
    : DEFAULT_IMAGE;
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
