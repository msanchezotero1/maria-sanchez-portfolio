import Image from "next/image";

// Photo with a thin sand frame offset 8px behind it.
export default function Headshot({ sizes, className = "" }: { sizes: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-2 translate-y-2 rounded-card border border-sand"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-paper">
        <Image
          src="/headshot-navy.jpg"
          alt="Maria Sanchez Otero"
          fill
          sizes={sizes}
          className="object-cover object-[50%_30%]"
          priority
        />
      </div>
    </div>
  );
}
