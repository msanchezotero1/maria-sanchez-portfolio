import type { MetadataRoute } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/site";

// Served at /sitemap.xml. Case studies are added automatically from
// content/case-studies, so a new .mdx file shows up here on the next deploy.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1, changeFrequency: "monthly" },
    { url: `${SITE_URL}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${SITE_URL}/work`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${SITE_URL}/studio`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${SITE_URL}/about`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${SITE_URL}/contact`, priority: 0.7, changeFrequency: "yearly" },
  ].map((page) => ({ ...page, lastModified: now }) as MetadataRoute.Sitemap[number]);

  const caseStudies: MetadataRoute.Sitemap = getAllCaseStudies().map((cs) => ({
    url: `${SITE_URL}/work/${cs.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...pages, ...caseStudies];
}
