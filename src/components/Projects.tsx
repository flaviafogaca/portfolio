import { ArrowUpRight, Lock } from "lucide-react";
import { projects, type Project } from "../data/content";
import { Reveal } from "./Reveal";

function ProjectImage({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Captura de tela do projeto ${project.title}`}
        loading="lazy"
        className="aspect-[16/10] w-full rounded-2xl border border-ink-100 object-cover object-top shadow-2xl shadow-ink-900/15 dark:border-ink-800 dark:shadow-black/40"
      />
    );
  }

  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-ink-200 bg-ink-50 text-ink-400 dark:border-ink-700 dark:bg-ink-900/40 dark:text-ink-500">
      <Lock size={28} />
      <span className="text-sm">Projeto privado</span>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="section">
      <Reveal className="text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Meu portfólio
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
          Projetos em destaque
        </h2>
      </Reveal>

      <div className="mt-16 space-y-20 lg:space-y-28">
        {projects.map((p, i) => (
          <Reveal key={p.title}>
            <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ProjectImage project={p} />
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-ink-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-900 dark:border-ink-200 dark:text-ink-100">
                    {p.status}
                  </span>
                  <span className="rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    {p.category}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
                  {p.title}
                </h3>

                <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-300">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-accent-50 px-3 py-1.5 text-sm font-semibold text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {p.note && (
                  <p className="mt-5 flex items-center gap-1.5 text-sm italic text-ink-400 dark:text-ink-500">
                    <Lock size={13} /> {p.note}
                  </p>
                )}

                {(p.demoUrl || p.codeUrl) && (
                  <div className="mt-6 flex flex-wrap gap-6">
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 border-b border-accent-500 pb-0.5 font-semibold text-accent-700 transition-colors hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
                      >
                        Ver projeto <ArrowUpRight size={16} />
                      </a>
                    )}
                    {p.codeUrl && (
                      <a
                        href={p.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 border-b border-accent-500 pb-0.5 font-semibold text-accent-700 transition-colors hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
                      >
                        Ver código <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
