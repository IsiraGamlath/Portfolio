const links = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink-line/70 bg-ink/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="/#top"
          className="font-mono text-xs uppercase tracking-[0.25em] text-parchment-dim hover:text-brass-bright transition-colors"
        >
          Isira Gamlath<span className="text-brass-dim"> | DIGITAL WORKSPACE </span>
        </a>
        <ul className="flex items-center gap-7">
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
      </nav>
    </header>
  );
}
