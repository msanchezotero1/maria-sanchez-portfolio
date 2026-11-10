import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center gap-4 py-32 text-center">
      <span className="font-mono text-sm text-cherry">404</span>
      <h1 className="heading-2">Page not found</h1>
      <p className="text-ink-muted">The page you're looking for doesn't exist.</p>
      <Button href="/" className="mt-4">
        Back to home
      </Button>
    </section>
  );
}
