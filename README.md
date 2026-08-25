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

The contact form sends email via [Resend](https://resend.com) through
`app/api/contact/route.ts`. To enable it:

1. Create a free Resend account **using the email address you want
   submissions delivered to** (e.g. maria.sanchez011602@gmail.com) — Resend's
   default sandbox sender can only deliver to the account's own email until
   a custom domain is verified.
2. Generate an API key at [resend.com/api-keys](https://resend.com/api-keys).
3. Copy `.env.local.example` to `.env.local` and set `RESEND_API_KEY`.
4. Add `RESEND_API_KEY` in Vercel → Project Settings → Environment Variables
   for production, then redeploy.

`CONTACT_TO_EMAIL` is optional and overrides which address submissions go
to (defaults to maria.sanchez011602@gmail.com). The form includes a hidden
honeypot field for basic spam filtering.

To send from a custom domain instead of Resend's shared sandbox sender,
verify a domain in Resend and update the `from` address in
`app/api/contact/route.ts`.

## Deploying to Vercel

See the deployment instructions provided separately, or:
[vercel.com/docs](https://vercel.com/docs).
