import Link from "next/link";
import Nav from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />

      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Record not found
        </p>

        <h1 className="font-display text-6xl italic text-parchment sm:text-8xl">
          404
        </h1>

        <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-parchment-dim">
          This page isn't in the catalog — it may have been moved, renamed, or never existed.
        </p>

        <Link
          href="/"
          className="mt-10 border border-brass-dim px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-brass-bright transition-colors hover:border-brass-bright hover:bg-ink-raised"
        >
          ← Back to home
        </Link>
      </main>
    </>
  );
}