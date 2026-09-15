import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contato" className="section">
      <Reveal>
        <div className="rounded-3xl bg-ink-900 px-8 py-14 text-center dark:bg-ink-900/60 dark:border dark:border-ink-800 sm:px-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Contato
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Vamos conversar?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-300">
            Estou em busca de oportunidades como desenvolvedora júnior. Se meu
            perfil combina com o que você procura, será um prazer conversar.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 hover:bg-accent-400"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-accent-400"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-accent-400"
            >
              <Github size={16} /> GitHub
            </a>
            <span className="flex items-center gap-2 text-sm text-ink-400">
              <MapPin size={16} /> {profile.location}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
