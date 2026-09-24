import Link from "next/link";

type CtaLink = { label: string; href: string };

// Full-width navy closing banner used at the bottom of most pages.
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
    <section className="section-y bg-ink">
      <div className="container-page flex flex-col items-start gap-8">
        <span aria-hidden="true" className="h-1 w-12 bg-sky" />
        <h2 className="max-w-2xl text-3xl tracking-tight text-white sm:text-4xl">{title}</h2>
        {body && <p className="max-w-xl text-lg text-sky">{body}</p>}
        <div className="flex flex-wrap items-center gap-6">
          <Link href={primary.href} className="btn-light">
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="text-sm font-medium text-white decoration-sky decoration-2 underline-offset-4 hover:underline"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
