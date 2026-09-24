"use client";

import { useState } from "react";
import PostCard from "./PostCard";
import VideoCard from "./VideoCard";
import Lightbox from "./Lightbox";
import type { StudioPost, StudioVideo } from "@/lib/studio";

type Filter = "all" | "posts" | "video";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "posts", label: "Posts and carousels" },
  { key: "video", label: "Reels and video" },
];

export default function StudioGallery({
  posts,
  videos,
}: {
  posts: StudioPost[];
  videos: StudioVideo[];
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [openPost, setOpenPost] = useState<StudioPost | null>(null);

  const showPosts = filter === "all" || filter === "posts";
  const showVideos = filter === "all" || filter === "video";

  return (
    <>
      <div className="flex flex-wrap gap-3 border-b border-rule pb-8">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === f.key
                ? "border-ink bg-ink text-white"
                : "border-rule bg-white text-ink hover:border-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {showPosts && (
        <div className="pt-16">
          <h2 className="mb-10 text-2xl sm:text-3xl">Posts and carousels</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <PostCard
                key={post.slug}
                post={post}
                priority={i < 3}
                onOpen={() => setOpenPost(post)}
              />
            ))}
          </div>
        </div>
      )}

      {showVideos && (
        <div className={showPosts ? "mt-20 border-t border-rule pt-16" : "pt-16"}>
          <h2 className="mb-10 text-2xl sm:text-3xl">Reels and video</h2>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {videos.map((video, i) => (
              <VideoCard key={video.slug} video={video} priority={i < 4} />
            ))}
          </div>
        </div>
      )}

      <Lightbox post={openPost} onClose={() => setOpenPost(null)} />
    </>
  );
}
