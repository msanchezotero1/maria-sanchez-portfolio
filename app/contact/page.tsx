import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/site";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "./ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Book a free 15-minute call with Maria Sanchez Otero. Growth marketing for small businesses, in English and Spanish.",
  path: "/contact",
});

const CONTACT_OPTIONS = [
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: LINKEDIN_URL },
];

export default function ContactPage() {
  return (
    <>
      <section className="container-page pb-16 pt-16 lg:pt-24">
        <SectionLabel>Contact</SectionLabel>
        <h1 className="heading-1 max-w-3xl">Book a free 15-minute call</h1>
        <p className="mt-6 max-w-xl text-ink-muted">
          Tell me a bit about your business and I'll get back to you within 1 business day.
        </p>
      </section>

      <section className="section-y section-rule">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="heading-3">Other ways to reach me</h2>
            <ul className="flex flex-col gap-6">
              {CONTACT_OPTIONS.map((option) => (
                <li key={option.label} className="flex flex-col gap-1">
                  <span className="eyebrow">{option.label}</span>
                  <a
                    href={option.href}
                    className="link w-fit"
                    {...(option.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {option.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="card sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
