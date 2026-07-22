"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Email", value: "isiraudaragamlath@gmail.com", href: "mailto:isiraudaragamlath@gmail.com" },
  { label: "GitHub", value: "github.com/IsiraGamlath", href: "https://github.com/IsiraGamlath" },
  { label: "LinkedIn", value: "linkedin.com/in/isira-gamlath", href: "https://www.linkedin.com/in/isira-udara-gamlath-b01962214/" },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative py-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Correspondence
        </p>

        <h2 className="max-w-2xl font-display text-4xl italic leading-tight text-parchment sm:text-5xl">
          Open to internships in software development and data-driven roles — write in.
        </h2>

        <div className="mt-14 flex flex-col divide-y divide-ink-line border-y border-ink-line sm:flex-row sm:divide-x sm:divide-y-0">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group flex flex-1 flex-col gap-2 px-0 py-6 transition-colors hover:bg-ink-raised sm:px-8"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-parchment-faint">
                {link.label}
              </span>

              <span className="font-body text-lg text-parchment group-hover:text-brass-bright transition-colors">
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}