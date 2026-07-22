import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";
import Nav from "@/components/Nav";
import ProjectAnimation from "@/components/ProjectAnimation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <Nav />

      <ProjectAnimation>
        <Link
          href="/#work"
          className="mb-10 inline-block font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim hover:text-brass-bright"
        >
          ← Back to catalog
        </Link>

        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-brass">
          {project.id} — {project.subtitle}
        </p>

        <h1 className="font-display text-4xl italic text-parchment sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-parchment-dim">
          {project.longDescription}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="border border-ink-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-parchment-dim"
            >
              {item}
            </li>
          ))}
        </ul>

        {project.screenshots.length > 0 ? (
          <div className="mt-16 flex flex-col gap-8">
            {project.screenshots.map((src) => (
              <div
                key={src}
                className="border border-ink-line"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot`}
                  width={1600}
                  height={1000}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-parchment-faint">
            Screenshots coming soon
          </p>
        )}

        <div className="mt-16 flex gap-6">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brass-dim px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-brass-bright hover:border-brass-bright"
            >
              View repo
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.2em] text-parchment-dim underline underline-offset-8 hover:text-parchment"
            >
              Live site
            </a>
          )}
        </div>
      </ProjectAnimation>
    </>
  );
}