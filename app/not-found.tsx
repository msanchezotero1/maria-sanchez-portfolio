import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center gap-4 py-32 text-center">
      <span className="text-sm text-graphite">404</span>
      <h1 className="text-3xl">Page not found</h1>
      <p className="text-graphite">The page you're looking for doesn't exist.</p>
      <Link href="/" className="btn-primary mt-4">
        Back to home
      </Link>
    </section>
  );
}
