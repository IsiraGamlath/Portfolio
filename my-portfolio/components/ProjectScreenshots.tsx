"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectScreenshots({
  screenshots,
  title,
  layout = "default",
}: {
  screenshots: string[];
  title: string;
  layout?: "contain" | "default";
}) {
  const [page, setPage] = useState(0);
  const totalPages = screenshots.length;

  const goPrev = useCallback(() => setPage((p) => Math.max(0, p - 1)), []);
  const goNext = useCallback(
    () => setPage((p) => Math.min(totalPages - 1, p + 1)),
    [totalPages]
  );

  // Keyboard navigation: ArrowLeft and ArrowRight
  useEffect(() => {
    if (totalPages <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid intercepting if focus is inside an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goPrev, goNext, totalPages]);

  if (screenshots.length === 0) {
    return (
      <p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-parchment-faint">
        Screenshots coming soon
      </p>
    );
  }

  const isContain = layout === "contain";

  return (
    <div className="mt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className={
            isContain
              ? "flex items-center justify-center py-6 sm:py-10"
              : "border border-ink-line"
          }
        >
          {isContain ? (
            /* Elegant mobile device frame matching portfolio vintage/dark style */
            <div className="relative mx-auto rounded-[2.5rem] border-[6px] border-ink-line bg-ink-raised/90 p-2.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] ring-1 ring-brass-dim/30">
              {/* Dynamic island / speaker ear piece */}
              <div className="absolute left-1/2 top-4 z-20 h-3.5 w-24 -translate-x-1/2 rounded-full bg-ink border border-ink-line" />

              {/* Screen container */}
              <div className="relative overflow-hidden rounded-[2rem] bg-black">
                <Image
                  src={screenshots[page]}
                  alt={`${title} screenshot ${page + 1}`}
                  width={420}
                  height={880}
                  className="max-h-[580px] w-auto object-contain sm:max-h-[640px]"
                  priority={page === 0}
                />
              </div>

              {/* Bottom home bar indicator */}
              <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-parchment-faint/30" />
            </div>
          ) : (
            <Image
              src={screenshots[page]}
              alt={`${title} screenshot ${page + 1}`}
              width={1600}
              height={1000}
              className="w-full"
              priority={page === 0}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={goPrev}
              disabled={page === 0}
              aria-label="Previous screenshot (Left arrow)"
              className="font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim transition-colors hover:text-brass-bright disabled:opacity-30 disabled:hover:text-parchment-dim"
            >
              ← Prev
            </button>

            <div className="flex items-center gap-2 sm:gap-3">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Go to screenshot ${i + 1}`}
                  className={`font-mono text-xs transition-colors ${
                    i === page
                      ? "text-brass-bright font-semibold"
                      : "text-parchment-faint hover:text-parchment-dim"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={page === totalPages - 1}
              aria-label="Next screenshot (Right arrow)"
              className="font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim transition-colors hover:text-brass-bright disabled:opacity-30 disabled:hover:text-parchment-dim"
            >
              Next →
            </button>
          </div>

          {/* Keyboard hint badge */}
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-parchment-faint/70 uppercase">
            <span>Use</span>
            <kbd className="rounded border border-ink-line px-1 py-0.5 text-[9px] text-parchment-dim bg-ink-raised/50">←</kbd>
            <kbd className="rounded border border-ink-line px-1 py-0.5 text-[9px] text-parchment-dim bg-ink-raised/50">→</kbd>
            <span>keys to flip</span>
          </div>
        </div>
      )}
    </div>
  );
}