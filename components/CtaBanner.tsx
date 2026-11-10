import Link from "next/link";
import Button from "@/components/Button";

type CtaLink = { label: string; href: string };

// Inverted (ink) closing section used at the bottom of most pages.
export default function CtaBanner({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body?: string;
  primary: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section className="on-ink section-y bg-ink">
      <div className="container-page flex flex-col items-start gap-8">
        <h2 className="heading-2 max-w-2xl text-cream">{title}</h2>
        {body && <p className="max-w-xl text-cream/80">{body}</p>}
        <div className="flex flex-wrap items-center gap-6">
          <Button href={primary.href}>{primary.label}</Button>
          {secondary && (
            <Link
              href={secondary.href}
              className="text-sm font-medium text-cream underline decoration-1 underline-offset-4 transition-colors duration-150 hover:text-blush"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
