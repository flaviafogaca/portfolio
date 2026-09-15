import { skills } from "../data/content";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section
      id="habilidades"
      className="bg-ink-50/60 dark:bg-ink-900/30"
    >
      <div className="section">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
            Habilidades
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
            Ferramentas que uso para construir
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-950">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-200 px-3 py-1 text-sm text-ink-600 dark:border-ink-700 dark:text-ink-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
