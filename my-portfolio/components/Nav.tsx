"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink-line/70 bg-ink/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a
            href="/#top"
            className="font-mono text-xs uppercase tracking-[0.25em] text-parchment-dim hover:text-brass-bright transition-colors"
          >
            Isira Gamlath
            <span className="hidden text-brass-dim sm:inline"> | DIGITAL WORKSPACE </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim hover:text-parchment transition-colors"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass-bright transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-6 bg-parchment transition-all duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-parchment transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-parchment transition-all duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Moved OUTSIDE <header> — no longer trapped by backdrop-blur's containing block */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="font-display text-3xl italic text-parchment-dim hover:text-brass-bright transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}