"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { certifications } from "@/lib/certifications";

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];

function isImageFile(url?: string) {
  if (!url) return false;
  const lower = url.toLowerCase();
  return IMAGE_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

export default function Certifications() {
  const [activeImage, setActiveImage] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certifications" className="relative border-b border-ink-line/70 py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-16 flex items-end justify-between border-b border-ink-line pb-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-brass">
              Credentials
            </p>

            <h2 className="font-display text-4xl italic text-parchment sm:text-5xl">
              Certifications
            </h2>
          </div>

          <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-parchment-faint sm:block">
            {certifications.length} entries
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-ink-line sm:grid-cols-2">
          {certifications.map((cert) => {
            const isImage = isImageFile(cert.credentialUrl);
            const hasLink = Boolean(cert.credentialUrl);

            const cardContent = (
              <>
                <div className="mb-4 flex items-start justify-between">
                  <span className="font-mono text-sm text-brass-dim group-hover:text-brass-bright transition-colors">
                    {cert.id}
                  </span>

                  {hasLink && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-parchment-faint transition-colors group-hover:text-brass-bright">
                    {isImage ? "view certificate ↗" : "view credential ↗"}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl text-parchment sm:text-[1.4rem]">
                  {cert.title}
                </h3>

                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-brass-dim">
                  {cert.issuer}
                </p>

                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-parchment-faint">
                  {cert.date}
                </p>
              </>
            );

            const cardClassName =
              "group relative flex w-full flex-col bg-ink p-8 text-left transition-colors hover:bg-ink-raised sm:p-10";

            if (!hasLink) {
              return (
                <div key={cert.id} className={cardClassName}>
                  {cardContent}
                </div>
              );
            }

            if (isImage) {
              return (
                <button
                  key={cert.id}
                  onClick={() =>
                    setActiveImage({ url: cert.credentialUrl!, title: cert.title })
                  }
                  className={cardClassName}
                >
                  {cardContent}
                </button>
              );
            }

            return (
              <a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClassName}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>

      {/* Certificate image modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 backdrop-blur-sm px-4 py-8 sm:px-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full w-full max-w-3xl flex-col border border-ink-line bg-ink"
            >
              <div className="flex items-center justify-between border-b border-ink-line px-6 py-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim">
                  {activeImage.title}
                </p>

                <button
                  onClick={() => setActiveImage(null)}
                  aria-label="Close preview"
                  className="font-mono text-xs uppercase tracking-[0.2em] text-parchment-faint transition-colors hover:text-brass-bright"
                >
                  Close ✕
                </button>
              </div>

              <div className="overflow-auto p-6">
                <Image
                  src={activeImage.url}
                  alt={activeImage.title}
                  width={1400}
                  height={1000}
                  className="h-auto w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}