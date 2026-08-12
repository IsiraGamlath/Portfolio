"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectScreenshots({
  screenshots,
  title,
}: {
  screenshots: string[];
  title: string;
}) {
  const [page, setPage] = useState(0);
  const totalPages = screenshots.length;

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  if (screenshots.length === 0) {
    return (
      <p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-parchment-faint">
        Screenshots coming soon
      </p>
    );
  }

  return (
    <div className="mt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="border border-ink-line"
        >
          <Image
            src={screenshots[page]}
            alt={`${title} screenshot ${page + 1}`}
            width={1600}
            height={1000}
            className="w-full"
            priority={page === 0}
          />
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-8">
          <button
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous screenshot"
            className="font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim transition-colors hover:text-brass-bright disabled:opacity-30 disabled:hover:text-parchment-dim"
          >
            ← Prev
          </button>

          <div className="flex items-center gap-3">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`font-mono text-xs transition-colors ${
                  i === page
                    ? "text-brass-bright"
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
            aria-label="Next screenshot"
            className="font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim transition-colors hover:text-brass-bright disabled:opacity-30 disabled:hover:text-parchment-dim"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}