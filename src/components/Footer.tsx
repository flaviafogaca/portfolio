import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-500/40 font-display text-sm font-bold text-accent-400">
                FF
              </span>
              <span className="font-display text-xl font-bold text-white">
                Portfólio
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-400">
              Uso tecnologia para resolver problema real. Vamos conversar?
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-400">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-accent-400"
                >
                  <Mail size={16} /> E-mail
                </a>
              </li>
              <li>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-accent-400"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-accent-400"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-400">
              Desenvolvimento
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-accent-400"
                >
                  <Github size={16} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-6 border-t border-ink-800 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} {profile.name}. Todos os direitos
            reservados.
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 text-xs font-medium text-ink-400 transition-colors hover:text-accent-400"
          >
            Voltar ao topo
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink-700 transition-colors group-hover:border-accent-500">
              <ArrowUp size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
