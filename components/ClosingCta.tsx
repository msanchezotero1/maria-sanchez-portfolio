import CtaBanner from "@/components/CtaBanner";
import { BOOKING_CTA, BOOKING_URL } from "@/lib/site";

// Standard closing section for every page. Override the title for page-specific asks.
export default function ClosingCta({
  title = "Ready for more clients who actually pay?",
  body = "In a free 15-minute call, I'll look at how clients find you today, where they're slipping through the cracks, and what I'd fix first. No pressure.",
}: {
  title?: string;
  body?: string;
}) {
  return <CtaBanner title={title} body={body} primary={{ label: BOOKING_CTA, href: BOOKING_URL }} />;
}
