# Maria Sanchez Otero — Portfolio

Next.js 14 (App Router) + Tailwind CSS portfolio site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing case studies

Case studies live in `content/case-studies/*.mdx`. Each file has frontmatter:

```md
---
title: "Case Study Title"
client: "Client Name"
category: "CRM Data Systems"
summary: "One or two sentence summary shown on the card."
highlights:
  - "Optional metric callout"
  - "Optional metric callout"
order: 1
---

## Section heading

Body content in Markdown/MDX.
```

Add, remove, or edit `.mdx` files in that folder — the `/work` grid and each
case study page (`/work/[slug]`) pick them up automatically. No layout code
needs to change.

## Google Analytics 4

GA4 is wired up but disabled by default. To turn it on:

1. Copy `.env.local.example` to `.env.local`.
2. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`.
3. Add the same variable in Vercel → Project Settings → Environment Variables
   for production.

See `components/Analytics.tsx` (mounted in `app/layout.tsx`) for details.

## Contact form

The contact form (`app/contact/ContactForm.tsx`) is visual-only — submitting
it does not send an email yet. Connect it to an API route or a form service
(Formspree, Resend, etc.) when ready.

## Deploying to Vercel

See the deployment instructions provided separately, or:
[vercel.com/docs](https://vercel.com/docs).
