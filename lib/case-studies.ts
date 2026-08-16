import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content", "case-studies");

export type CaseStudyFrontmatter = {
  title: string;
  client: string;
  category: string;
  summary: string;
  highlights?: string[];
  order?: number;
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
