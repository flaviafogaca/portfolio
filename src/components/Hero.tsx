import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-accent-300/20 blur-3xl dark:bg-accent-700/10"
      />

      <div className="section relative flex flex-col gap-6 !py-0">
        <p className="animate-fade-up font-medium uppercase tracking-widest text-accent-600 dark:text-accent-400 text-sm">
          Olá, eu sou a {profile.name.split(" ")[0]}
        </p>

        <h1
          className="animate-fade-up font-display text-4xl font-bold leading-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {profile.role.split(" em formação")[0]}{" "}
          <span className="text-accent-500">em formação.</span>
        </h1>

        <p
          className="animate-fade-up max-w-xl text-lg text-ink-600 dark:text-ink-300"
          style={{ animationDelay: "160ms" }}
        >
          {profile.tagline} Cinco anos de experiência técnica em análise de
          dados, processos e documentação — agora aplicados à construção de
          software.
        </p>

        <div
          className="animate-fade-up flex flex-wrap items-center gap-4 pt-2"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#projetos"
            className="rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-accent-600 dark:bg-white dark:text-ink-950 dark:hover:bg-accent-400"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 transition-transform hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-700 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-accent-400"
          >
            Entrar em contato
          </a>

          <div className="ml-2 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-400 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-400 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="E-mail"
              className="text-ink-400 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-ink-300 dark:text-ink-600"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
