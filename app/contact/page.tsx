import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Maria Sanchez Otero.",
};

const NEXT_STEPS = [
  { title: "Tell me about it", description: "A few lines on the project, role, or problem." },
  { title: "I reply", description: "Personally, in English or Spanish." },
  { title: "We talk", description: "A short call to see if it's a fit and what it would take." },
];

export default function ContactPage() {
  return (
    <>
      <section className="container-page pb-16 pt-16 sm:pt-24">
        <SectionLabel>Contact</SectionLabel>
        <h1 className="display-sm max-w-3xl text-ink">Let's talk about your data</h1>
        <p className="mt-6 max-w-xl text-lg text-graphite">
          Tell me a bit about the project and I'll get back to you.
        </p>
      </section>

      <section className="section-y bg-sky">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl text-ink">What happens next</h2>
            <ol className="flex flex-col gap-6">
              {NEXT_STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ink font-serif text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg text-ink">{step.title}</h3>
                    <p className="text-base text-graphite">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-sm border-t-4 border-signal bg-white p-7 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
