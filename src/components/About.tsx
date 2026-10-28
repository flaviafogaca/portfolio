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
          Minha trajetória até aqui
        </h2>
      </Reveal>

      <div className="mt-10 max-w-3xl space-y-5">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 80}>
            <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
              {p}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
