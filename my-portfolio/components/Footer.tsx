export default function Footer() {
  return (
    <footer className="border-t border-ink-line/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-[11px] uppercase tracking-[0.2em] text-parchment-faint sm:flex-row sm:px-10">
        <span>© {new Date().getFullYear()} Isira Gamlath</span>
        <span>Designed & built from scratch</span>
      </div>
    </footer>
  );
}
