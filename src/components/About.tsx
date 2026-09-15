import { about } from "../data/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="section">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Sobre
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
          De processos ambientais a interfaces digitais
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="grid grid-cols-1 gap-4">
            {about.facts.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-ink-100 bg-ink-50/60 p-5 dark:border-ink-800 dark:bg-ink-900/40"
              >
                <p className="font-display text-3xl font-bold text-accent-600 dark:text-accent-400">
                  {f.value}
                </p>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
