"use client";

import Image from "next/image";
import { useState } from "react";
import type { StudioVideo } from "@/lib/studio";

export default function VideoCard({
  video,
  priority,
}: {
  video: StudioVideo;
  priority?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full overflow-hidden rounded-md bg-rule" style={{ aspectRatio: "9 / 16" }}>
        {playing ? (
          <video
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative block h-full w-full"
            aria-label={`Play: ${video.goal}`}
          >
            <Image
              src={video.poster}
              alt={video.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
              priority={priority}
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors group-hover:bg-ink/20">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper text-ink">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
                  <path d="M4 2.5v13l12-6.5-12-6.5z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm text-ink">{video.goal}</p>
        <p className="text-sm text-graphite">
          {video.format} in {video.tool}, {video.language}
        </p>
      </div>
    </div>
  );
}
