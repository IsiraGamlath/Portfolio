"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ArchitectureStep = {
  step: string;
  title: string;
  tool?: string;
  description: string;
};

export type ArchitectureProps = {
  headline?: string;
  steps: ArchitectureStep[];
};

export default function ProjectArchitecture({
  headline = "System Architecture & Flow",
  steps,
}: ArchitectureProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  if (!steps || steps.length === 0) return null;

  const current = steps[activeStep];

  return (
    <div className="mt-16 border border-ink-line bg-ink/60 p-6 sm:p-8">
      {/* Header section */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-ink-line pb-4 gap-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            Architectural Blueprint
          </p>
          <h2 className="font-display text-2xl italic text-parchment sm:text-3xl mt-1">
            {headline}
          </h2>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-parchment-faint">
          Interactive Pipeline · {steps.length} Nodes
        </p>
      </div>

      {/* Nodes / Stepper Pipeline */}
      <div className="relative mb-8">
        {/* Horizontal connector line on desktop */}
        <div className="hidden lg:block absolute top-7 left-4 right-4 h-px bg-ink-line z-0" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
          {steps.map((node, index) => {
            const isSelected = activeStep === index;
            return (
              <button
                key={node.step}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`group flex flex-col text-left p-3.5 border transition-all ${
                  isSelected
                    ? "border-brass bg-ink-raised shadow-[0_0_20px_rgba(201,151,79,0.15)] ring-1 ring-brass/40"
                    : "border-ink-line bg-ink-raised/30 hover:border-brass-dim/60 hover:bg-ink-raised/60"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-semibold transition-colors ${
                      isSelected
                        ? "text-brass-bright"
                        : "text-brass-dim group-hover:text-brass"
                    }`}
                  >
                    {node.step}
                  </span>
                  {isSelected && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brass-bright"></span>
                    </span>
                  )}
                </div>

                <span
                  className={`font-display text-sm font-medium leading-snug line-clamp-1 transition-colors ${
                    isSelected
                      ? "text-parchment"
                      : "text-parchment-dim group-hover:text-parchment"
                  }`}
                >
                  {node.title}
                </span>

                {node.tool && (
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-parchment-faint group-hover:text-parchment-dim truncate">
                    {node.tool}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail Inspector Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="border border-ink-line/80 bg-ink-raised/40 p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-line/60 pb-3 mb-3">
            <div className="flex items-center gap-3">
              <span className="rounded border border-brass/30 bg-brass/10 px-2 py-0.5 font-mono text-xs text-brass-bright">
                Node {current.step}
              </span>
              <h3 className="font-display text-lg text-parchment">
                {current.title}
              </h3>
            </div>
            {current.tool && (
              <span className="font-mono text-xs uppercase tracking-wider text-brass-dim">
                Technology: <span className="text-parchment-dim">{current.tool}</span>
              </span>
            )}
          </div>

          <p className="font-body text-base leading-relaxed text-parchment-dim">
            {current.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Helpful navigation hint */}
      <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-parchment-faint">
        <span>Click any node above to inspect system stage details</span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="hover:text-brass-bright disabled:opacity-20 uppercase tracking-wider"
          >
            ← Prev Stage
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() =>
              setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))
            }
            disabled={activeStep === steps.length - 1}
            className="hover:text-brass-bright disabled:opacity-20 uppercase tracking-wider"
          >
            Next Stage →
          </button>
        </div>
      </div>
    </div>
  );
}

