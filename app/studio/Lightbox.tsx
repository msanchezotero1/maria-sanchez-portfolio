"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { StudioPost } from "@/lib/studio";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function Lightbox({
  post,
  onClose,
}: {
  post: StudioPost | null;
  onClose: () => void;
}) {
  const [slide, setSlide] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setSlide(0);
  }, [post]);

  useEffect(() => {
    if (!post) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        setSlide((s) => (post ? (s + 1) % post.media.length : s));
      }
      if (e.key === "ArrowLeft") {
        setSlide((s) => (post ? (s - 1 + post.media.length) % post.media.length : s));
      }
      if (e.key === "Tab") {
        const container = dialogRef.current;
        if (!container) return;
        const focusable = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [post, onClose]);

  if (!post) return null;

  const media = post.media[slide];
  const hasMultiple = post.media.length > 1;

  function goNext() {
    setSlide((s) => (post ? (s + 1) % post.media.length : s));
  }
  function goPrev() {
    setSlide((s) => (post ? (s - 1 + post.media.length) % post.media.length : s));
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={media.alt}
        tabIndex={-1}
        className="relative flex max-h-full w-full max-w-3xl flex-col items-center outline-none"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > 40) {
            if (delta < 0) goNext();
            else goPrev();
          }
          touchStartX.current = null;
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 text-sm font-medium text-paper hover:text-signal"
          aria-label="Close"
        >
          Close
        </button>

        <div className="relative flex w-full items-center justify-center">
          {hasMultiple && (
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="absolute left-0 z-10 px-2 py-4 text-2xl text-paper hover:text-signal"
            >
              &#8249;
            </button>
          )}

          <div
            className="relative w-full bg-paper"
            style={{ aspectRatio: `${post.width} / ${post.height}` }}
          >
            <Image
              src={media.src}
              alt={media.alt}
              fill
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-contain"
              priority
            />
          </div>

          {hasMultiple && (
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="absolute right-0 z-10 px-2 py-4 text-2xl text-paper hover:text-signal"
            >
              &#8250;
            </button>
          )}
        </div>

        {hasMultiple && (
          <p className="mt-4 text-sm text-paper/80">
            {slide + 1} / {post.media.length}
          </p>
        )}
      </div>
    </div>
  );
}
