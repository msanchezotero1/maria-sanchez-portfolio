"use client";

import Image from "next/image";
import type { StudioPost } from "@/lib/studio";

export default function PostCard({
  post,
  priority,
  onOpen,
}: {
  post: StudioPost;
  priority?: boolean;
  onOpen: () => void;
}) {
  const cover = post.media[0];

  return (
    <button type="button" onClick={onOpen} className="group flex flex-col gap-3 text-left">
      <div
        className="relative w-full overflow-hidden rounded-md bg-rule"
        style={{ aspectRatio: `${post.width} / ${post.height}` }}
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-opacity group-hover:opacity-90"
          priority={priority}
        />
        {post.format === "Carousel" && (
          <span className="absolute bottom-2 right-2 rounded-full border border-rule bg-paper px-2.5 py-0.5 text-xs text-graphite">
            {post.media.length} slides
          </span>
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm text-ink">{post.goal}</p>
        <p className="text-sm text-graphite">
          {post.format} in {post.tool}, {post.language}
        </p>
      </div>
    </button>
  );
}
