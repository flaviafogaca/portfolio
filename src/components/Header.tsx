import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "../data/content";
import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-ink-100 dark:bg-ink-950/80 dark:border-ink-800"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-ink-900 dark:text-white"
        >
          Flávia<span className="text-accent-500">.</span>Fogaça
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-accent-600 dark:text-ink-300 dark:hover:text-accent-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              className="hidden items-center gap-1.5 rounded-full border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-accent-400 hover:text-accent-700 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-accent-400 md:inline-flex"
            >
              <Download size={15} /> Currículo
            </a>
          )}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden text-ink-500 transition-colors hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-400 sm:block"
          >
            <Github size={19} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden text-ink-500 transition-colors hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-400 sm:block"
          >
            <Linkedin size={19} />
          </a>
          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="rounded-full p-2 text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-white"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="rounded-full p-2 text-ink-500 hover:bg-ink-100 dark:text-ink-400 dark:hover:bg-ink-800 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-100 bg-white px-6 py-4 dark:border-ink-800 dark:bg-ink-950 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
            >
              {l.label}
            </a>
          ))}
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-accent-700 hover:bg-ink-100 dark:text-accent-400 dark:hover:bg-ink-800"
            >
              <Download size={15} /> Baixar currículo
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
