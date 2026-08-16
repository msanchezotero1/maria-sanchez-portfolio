import Script from "next/script";

/**
 * GA4 placeholder.
 *
 * To connect Google Analytics 4:
 * 1. Add NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX to your .env.local
 *    (and to the Environment Variables settings in Vercel for production).
 * 2. Uncomment the <Script> tags below.
 *
 * This component is already mounted in app/layout.tsx, so once uncommented
 * and given a real measurement ID, GA4 will load site-wide automatically.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
