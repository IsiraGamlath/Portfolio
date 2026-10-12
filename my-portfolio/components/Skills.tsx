"use client";

import { useState } from "react";
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
            Click any skill to view linked projects
          </p>
        </div>

        {/* Dynamic Connected Projects Drawer */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 48 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border border-brass-dim/60 bg-ink-raised/80 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-line pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-brass">
                    Applied In Field:
                  </span>
                  <span className="font-display text-xl font-medium text-parchment">
                    {selectedSkill}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="font-mono text-xs uppercase tracking-widest text-parchment-faint transition-colors hover:text-brass-bright"
                >
                  ✕ Close panel
                </button>
              </div>

              <div className="mt-6">
                {matchedProjects.length > 0 ? (
                  <div>
                    <p className="mb-4 font-mono text-xs uppercase tracking-wider text-parchment-dim">
                      {matchedProjects.length} Associated{" "}
                      {matchedProjects.length === 1 ? "Project" : "Projects"}:
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {matchedProjects.map((p) => (
                        <Link
                          key={p.id}
                          href={`/work/${p.slug}`}
                          className="group flex flex-col justify-between border border-ink-line bg-ink p-4 transition-all hover:border-brass hover:bg-ink-raised"
                        >
                          <div>
                            <div className="mb-2 flex items-center justify-between">
                              <span className="font-mono text-xs text-brass-dim group-hover:text-brass-bright">
                                {p.id}
                              </span>
                              <span className="font-mono text-[10px] text-parchment-faint uppercase">
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
                  <p className="font-body text-sm text-parchment-dim">
                    Practiced & utilized in foundational development exercises and coursework.
                  </p>
                )}
              </div>
            </motion.div>
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