import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Maria Sanchez Otero.",
};

export default function ContactPage() {
  return (
    <section className="container-page py-20 sm:py-28 lg:py-36">
      <div className="mx-auto flex max-w-xl flex-col gap-4 text-center">
        <h1 className="text-3xl sm:text-4xl">Let's talk about your data</h1>
        <p className="text-lg text-graphite">
          Tell me a bit about the project and I'll get back to you.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl">
        <ContactForm />
      </div>
    </section>
  );
}
