import { ExternalLink, Github, Lock } from "lucide-react";
import { projects, type Project } from "../data/content";
import { Reveal } from "./Reveal";

const statusStyles: Record<Project["status"], string> = {
  Live: "bg-accent-100 text-accent-700 dark:bg-accent-500/15 dark:text-accent-400",
  "Em desenvolvimento":
    "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  Privado: "bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400",
};

export function Projects() {
  return (
    <section id="projetos" className="section">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Projetos
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
          O que já coloquei em prática
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-950 dark:hover:shadow-black/20">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {p.title}
                </h3>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[p.status]}`}
                >
                  {p.status}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-ink-50 px-2.5 py-1 text-xs text-ink-500 dark:bg-ink-900 dark:text-ink-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.note && (
                <p className="mt-4 flex items-center gap-1.5 text-xs italic text-ink-400 dark:text-ink-500">
                  <Lock size={12} /> {p.note}
                </p>
              )}

              {(p.demoUrl || p.codeUrl) && (
                <div className="mt-5 flex gap-4 border-t border-ink-100 pt-4 dark:border-ink-800">
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-accent-600 dark:text-ink-200 dark:hover:text-accent-400"
                    >
                      <ExternalLink size={15} /> Demo
                    </a>
                  )}
                  {p.codeUrl && (
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-accent-600 dark:text-ink-200 dark:hover:text-accent-400"
                    >
                      <Github size={15} /> Código
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
