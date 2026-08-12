"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";

const PER_PAGE = 2;
const totalPages = Math.ceil(projects.length / PER_PAGE);

export default function Projects() {
  const [page, setPage] = useState(0);

  const start = page * PER_PAGE;
  const currentProjects = projects.slice(start, start + PER_PAGE);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section id="work" className="relative border-b border-ink-line/70 py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-16 flex items-end justify-between border-b border-ink-line pb-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-brass">
              Catalog
            </p>

            <h2 className="font-display text-4xl italic text-parchment sm:text-5xl">
              Selected work
            </h2>
          </div>

          <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-parchment-faint sm:block">
            {projects.length} entries
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-px bg-ink-line md:grid-cols-2"
          >
            {currentProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={`/work/${project.slug}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="group relative flex flex-col bg-ink p-8 transition-colors hover:bg-ink-raised sm:p-10"
              >
                <div className="mb-6 flex items-start justify-between">
                  <span className="font-mono text-sm text-brass-dim group-hover:text-brass-bright transition-colors">
                    {project.id}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-parchment-faint transition-colors group-hover:text-brass-bright">
                   view record →
                  </span>
                </div>

                <h3 className="font-display text-2xl text-parchment sm:text-[1.65rem]">
                  {project.title}
                </h3>

                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-brass-dim">
                  {project.subtitle}
                </p>

                <p className="mt-5 max-w-md font-body text-[0.95rem] leading-relaxed text-parchment-dim">
                  {project.description}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="border border-ink-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-parchment-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-center gap-8">
          <button
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous page"
            className="font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim transition-colors hover:text-brass-bright disabled:opacity-30 disabled:hover:text-parchment-dim"
          >
            ← Prev
          </button>

          <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
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
            aria-label="Next page"
            className="font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim transition-colors hover:text-brass-bright disabled:opacity-30 disabled:hover:text-parchment-dim"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}