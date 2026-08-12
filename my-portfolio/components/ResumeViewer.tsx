"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RESUME_PATH = "/resume/Isira_Gamlath_Resume.pdf";

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="border border-brass-dim px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-brass-bright transition-colors hover:border-brass-bright hover:bg-ink-raised"
        >
          {isOpen ? "Hide Resume ↑" : "View Resume ↓"}
        </button>

        <a
          href={RESUME_PATH}
          download="Isira_Gamlath_Resume.pdf"
          className="border border-ink-line px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim transition-colors hover:border-brass-dim hover:text-brass-bright"
        >
          Download Resume ↓
        </a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 overflow-hidden border border-ink-line"
          >
            <iframe
              src={RESUME_PATH}
              title="Resume preview"
              className="h-[80vh] w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}