"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";

const ledger = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Kotlin",
      "TypeScript",
      "JavaScript(ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend / Full Stack",
    items: [
      "Node.js",
      "Express.js",
      "NextJS",
      "C#",
      "C++",
      "Spring Boot",
      "Java",
      "REST APIs",
      "JWT Authentication",
      "MERN Stack",
      "OAuth 2.0",
    ],
  },
  {
    category: "Tooling",
    items: [
      "Git / GitHub",
      "CI/CD",
      "VS Code",
      "IntelliJ IDEA",
      "Postman",
      "Figma",
      "Draw.io",
      "Jira",
      "Vercel",
    ],
  },
  {
    category: "Cloud / DevOps",
    items: [
      "AWS",
      "ECS Fargate",
      "Amazon ECR",
      "Application Load Balancer",
      "IAM",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    category: "Data Bases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Neon"],
  },
];

function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getRelatedProjects(skill: string) {
  const normSkill = normalize(skill);
  return projects.filter((p) => {
    return p.stack.some((tech) => {
      const normTech = normalize(tech);
      return (
        normTech === normSkill ||
        normTech.includes(normSkill) ||
        normSkill.includes(normTech)
      );
    });
  });
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const matchedProjects = selectedSkill ? getRelatedProjects(selectedSkill) : [];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSkill(null);
      }
    };
    if (selectedSkill) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedSkill]);

  return (
    <motion.section
      id="skills"
      className="relative border-b border-ink-line/70 py-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-ink-line pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-brass">
              Ledger
            </p>

            <h2 className="font-display text-4xl italic text-parchment sm:text-5xl">
              Tools of the trade
            </h2>
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-parchment-faint">
            Click any skill to inspect linked projects
          </p>
        </div>

        {/* Centered Modal Overlay */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Dimmed backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedSkill(null)}
                className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-brass-dim bg-ink-raised p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-brass/20"
              >
                <div className="flex items-start justify-between border-b border-ink-line pb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-brass">
                      Applied In Field
                    </span>
                    <h3 className="font-display text-2xl font-medium text-parchment mt-1">
                      {selectedSkill}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedSkill(null)}
                    aria-label="Close dialog"
                    className="font-mono text-xs uppercase tracking-widest text-parchment-faint transition-colors hover:text-brass-bright p-1"
                  >
                    ✕ Close
                  </button>
                </div>

                <div className="mt-6">
                  {matchedProjects.length > 0 ? (
                    <div>
                      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-parchment-dim">
                        {matchedProjects.length} Associated{" "}
                        {matchedProjects.length === 1 ? "Project" : "Projects"}:
                      </p>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {matchedProjects.map((p) => (
                          <Link
                            key={p.id}
                            href={`/work/${p.slug}`}
                            onClick={() => setSelectedSkill(null)}
                            className="group flex flex-col justify-between border border-ink-line bg-ink p-4 transition-all hover:border-brass hover:bg-ink-raised/60"
                          >
                            <div>
                              <div className="mb-2 flex items-center justify-between">
                                <span className="font-mono text-xs text-brass-dim group-hover:text-brass-bright">
                                  {p.id}
                                </span>
                                <span className="font-mono text-[10px] text-parchment-faint group-hover:text-brass-bright uppercase">
                                  View project →
                                </span>
                              </div>
                              <h4 className="font-display text-base text-parchment group-hover:text-brass-bright transition-colors">
                                {p.title}
                              </h4>
                              <p className="mt-1 line-clamp-2 font-body text-xs text-parchment-dim">
                                {p.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="border border-ink-line/80 bg-ink/50 p-5">
                      <p className="font-body text-sm leading-relaxed text-parchment-dim">
                        Practiced & utilized in foundational development exercises, coursework, and personal implementations.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2">
          {ledger.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <h3 className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-parchment-faint">
                {group.category}
                <span className="h-px flex-1 bg-ink-line" />
              </h3>

              <ul>
                {group.items.map((item, i) => {
                  const related = getRelatedProjects(item);
                  const isSelected = selectedSkill === item;
                  const hasProjects = related.length > 0;

                  return (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.05,
                      }}
                      onClick={() =>
                        setSelectedSkill(isSelected ? null : item)
                      }
                      className={`group flex cursor-pointer items-baseline justify-between border-b border-ink-line/70 py-3 first:border-t transition-colors ${
                        isSelected
                          ? "bg-ink-raised/80 px-3 -mx-3 border-brass/60"
                          : "hover:bg-ink-raised/30 hover:px-2 hover:-mx-2"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-body text-lg transition-colors ${
                            isSelected
                              ? "text-brass-bright font-medium"
                              : "text-parchment group-hover:text-brass-bright"
                          }`}
                        >
                          {item}
                        </span>

                        {hasProjects && (
                          <span
                            title={`${related.length} linked project(s)`}
                            className={`rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider transition-colors ${
                              isSelected
                                ? "bg-brass text-ink font-semibold"
                                : "border border-ink-line text-brass-dim group-hover:border-brass-dim group-hover:text-brass"
                            }`}
                          >
                            {related.length}{" "}
                            {related.length === 1 ? "project" : "projects"}
                          </span>
                        )}
                      </div>

                      <span className="font-mono text-xs text-brass-dim group-hover:text-brass-bright">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}