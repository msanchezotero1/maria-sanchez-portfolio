// Site-wide links and contact details. Every booking CTA reads from here.

// Public URL of the site, used for canonical URLs, the sitemap, robots.txt,
// social previews and structured data. When a custom domain is connected,
// set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://yourdomain.com) and
// every one of those updates on the next deploy. No trailing slash.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://maria-sanchez-portfolio.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Maria Sanchez Otero";

export const BOOKING_URL = "https://calendar.app.google/Uae5wCd72xJkjeNG8";

export const CONTACT_EMAIL = "maria.sanchez011602@gmail.com";

export const LINKEDIN_URL = "https://www.linkedin.com/in/maria-carolina-sanchez-otero/";

export const BOOKING_CTA = "Book a free 15-min call";
