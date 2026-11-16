import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/profile";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#learning", label: "Learning projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="ui mx-auto flex max-w-5xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#top" className="text-lg font-bold tracking-tight">{profile.name}</a>
        <ul className="hidden items-center gap-6 text-[0.95rem] md:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="text-muted hover:text-ink">{l.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-ink hover:opacity-90 md:block">Hire me</a>
          <ThemeToggle />
          <button
            type="button"
            className="grid size-9 place-items-center rounded-md border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="ui border-t border-line bg-bg px-5 py-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
