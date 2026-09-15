import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience, languages } from "../data/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="bg-ink-50/60 dark:bg-ink-900/30"
    >
      <div className="section">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
            Trajetória
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
            Experiência & formação
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink-900 dark:text-white">
                <Briefcase size={20} className="text-accent-500" /> Experiência
              </h3>
            </Reveal>

            <div className="mt-4 space-y-8">
            {experience.map((item, i) => (
              <Reveal key={item.role} delay={i * 100}>
                <div className="relative border-l-2 border-ink-200 pl-6 dark:border-ink-700">
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent-500" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                      {item.role}
                    </h3>
                    <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-ink-500 dark:text-ink-400">
                    {item.place}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {item.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm leading-relaxed text-ink-600 dark:text-ink-300"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink-900 dark:text-white">
                <GraduationCap size={20} className="text-accent-500" /> Formação
              </h3>
              <div className="mt-4 space-y-4">
                {education.map((e) => (
                  <div
                    key={e.degree}
                    className="rounded-2xl border border-ink-100 bg-white p-5 dark:border-ink-800 dark:bg-ink-950"
                  >
                    <p className="font-semibold text-ink-900 dark:text-white">
                      {e.degree}
                    </p>
                    <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                      {e.place}
                    </p>
                    <p className="mt-1 text-sm text-accent-600 dark:text-accent-400">
                      {e.period}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 font-display text-lg font-semibold text-ink-900 dark:text-white">
                Idiomas
              </h3>
              <ul className="mt-3 space-y-1">
                {languages.map((l) => (
                  <li
                    key={l}
                    className="text-sm text-ink-600 dark:text-ink-300"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
