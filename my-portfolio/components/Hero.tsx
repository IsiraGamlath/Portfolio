"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-ink-line/70 pt-24"
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0" />
      <div className="vignette pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr]">

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-brass"
          >
            <span className="h-px w-8 bg-brass-dim" />
            Field notes, Sri Lanka
          </motion.p>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-parchment"
          >
            Isira
            <br />
            <span className="italic text-brass-bright">
              builds systems,
            </span>
            <br />
            not just software.
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-md font-body text-lg leading-relaxed text-parchment-dim"
          >
            Information Technology undergraduate at SLIIT with hands-on experience in full-stack development, backend engineering, frontend technologies, and designing reliable software solutions using modern tools and frameworks.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >

            <a
              href="#work"
              className="border border-brass-dim px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-brass-bright transition-colors hover:border-brass-bright hover:bg-brass-dim/10"
            >
              View the work
            </a>


            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim underline decoration-ink-line underline-offset-8 transition-colors hover:text-parchment hover:decoration-brass-bright"
            >
              Get in touch
            </a>

          </motion.div>

        </motion.div>


        {/* Signature illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >

          <svg
            viewBox="0 0 400 400"
            fill="none"
            className="h-full w-full"
            aria-hidden="true"
          >

            <circle
              cx="200"
              cy="210"
              r="120"
              stroke="var(--color-ink-line)"
              strokeWidth="1"
            />


            <path
              d="M200 90 A120 120 0 0 1 305 270"
              stroke="var(--color-brass)"
              strokeWidth="1.5"
              strokeDasharray="2 5"
            />


            <line
              x1="200"
              y1="60"
              x2="130"
              y2="300"
              stroke="var(--color-brass-bright)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <line
              x1="200"
              y1="60"
              x2="270"
              y2="300"
              stroke="var(--color-brass-bright)"
              strokeWidth="2"
              strokeLinecap="round"
            />


            <circle
              cx="200"
              cy="60"
              r="5"
              fill="var(--color-brass-bright)"
            />


            <circle
              cx="130"
              cy="300"
              r="3.5"
              fill="var(--color-ink)"
              stroke="var(--color-brass-bright)"
              strokeWidth="1.5"
            />


            <circle
              cx="270"
              cy="300"
              r="3.5"
              fill="var(--color-brass)"
            />


            <line
              x1="190"
              y1="60"
              x2="210"
              y2="60"
              stroke="var(--color-ink-line)"
              strokeWidth="1"
            />


            <line
              x1="270"
              y1="300"
              x2="330"
              y2="330"
              stroke="var(--color-ink-line)"
              strokeWidth="1"
            />


            <line
              x1="305"
              y1="270"
              x2="345"
              y2="270"
              stroke="var(--color-ink-line)"
              strokeWidth="1"
            />


            <text
              x="333"
              y="335"
              fontFamily="var(--font-mono)"
              fontSize="10"
              fill="var(--color-parchment-faint)"
              letterSpacing="1"
            >
              r = 120
            </text>


            <text
              x="349"
              y="274"
              fontFamily="var(--font-mono)"
              fontSize="10"
              fill="var(--color-parchment-faint)"
              letterSpacing="1"
            >
              θ = 47°
            </text>


            <text
              x="60"
              y="80"
              fontFamily="var(--font-mono)"
              fontSize="10"
              fill="var(--color-brass)"
              letterSpacing="1"
            >
              fig. I — process
            </text>

          </svg>

        </motion.div>

      </div>
    </section>
  );
}