"use client";

import { motion } from "framer-motion";

const ledger = [
  {
    category: "Frontend",
    items: ["React",  "Next.js", "Kotlin", "TypeScript", "JavaScript(ES6+)", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend / Full Stack",
    items: ["Node.js", "Express.js", "NextJS", "C#", "C++", "Spring Boot","Java", "REST APIs", "JWT Authentication", "MERN Stack","OAuth 2.0"],
  },
  {
    category: "Tooling",
    items: ["Git / GitHub","CI/CD", "VS Code", "IntelliJ IDEA", "Postman", "Figma", "Draw.io", "Jira","Vercel"],
  },
  {
  category: "Cloud / DevOps",
  items: ["AWS", "ECS Fargate", "Amazon ECR", "Application Load Balancer", "IAM", "Docker", "GitHub Actions"],
  },
  {
    category: "Data Bases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Neon"],
  },
];

export default function Skills() {
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
        <div className="mb-16 border-b border-ink-line pb-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-brass">
            Ledger
          </p>

          <h2 className="font-display text-4xl italic text-parchment sm:text-5xl">
            Tools of the trade
          </h2>
        </div>

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
                {group.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05,
                    }}
                    className="flex items-baseline justify-between border-b border-ink-line/70 py-3 first:border-t"
                  >
                    <span className="font-body text-lg text-parchment">
                      {item}
                    </span>

                    <span className="font-mono text-xs text-brass-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}