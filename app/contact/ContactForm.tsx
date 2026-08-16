"use client";

import { useState } from "react";

/**
 * Visual-only contact form.
 *
 * Submission is intentionally NOT wired up yet — no email/API call happens
 * here. When ready to connect it, this is the place to add a fetch() to an
 * API route, or swap in a form service (e.g. Formspree, Resend).
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card text-center">
        <h2 className="mb-2 text-lg font-medium text-ink">Thanks for reaching out!</h2>
        <p className="text-sm text-ink-muted">
          This form isn't connected to email yet — hook it up to an API route or a
          form service when ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="rounded-md border border-surface-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="rounded-md border border-surface-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me a bit about your project..."
          className="resize-none rounded-md border border-surface-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Send message
      </button>
    </form>
  );
}
