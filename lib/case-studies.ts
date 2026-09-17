import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content", "case-studies");

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudyFrontmatter = {
  title: string;
  client: string;
  category: string;
  summary: string;
  // A highlight can be a plain string, or a { label, value } metric pair
  // (rendered as a small stat block instead of a sentence).
  highlights?: (string | CaseStudyMetric)[];
  role?: string;
  timeframe?: string;
  tags?: string[];
  order?: number;
  /** Optional thumbnail shown on the right of the case study row. Omit until a real image exists. */
  thumbnail?: string;
};

export type CaseStudy = {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: string;
};

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [];
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getCaseStudy(slug: string): CaseStudy {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as CaseStudyFrontmatter,
    content,
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  return getCaseStudySlugs()
    .map((slug) => getCaseStudy(slug))
    .sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99));
}
