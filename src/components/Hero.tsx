import { useState, type ReactNode } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "../data/content";

const photoCandidates = ["/foto.jpg", "/foto.jpeg", "/foto.png", "/foto.webp"];

function Photo() {
  const [index, setIndex] = useState(0);

  if (index >= photoCandidates.length) {
    return (
      <div className="grid aspect-square w-full place-items-center rounded-sm bg-gradient-to-br from-accent-100 to-accent-300 font-script text-7xl text-accent-700">
        F
      </div>
    );
  }

  return (
    <img
      src={photoCandidates[index]}
      alt={`Foto de ${profile.name}`}
      onError={() => setIndex((i) => i + 1)}
      className="aspect-square w-full rounded-sm object-cover object-top"
    />
  );
}

function Polaroid({
  caption,
  className,
  captionClass = "text-center",
  children,
}: {
  caption: string;
  className: string;
  captionClass?: string;
  children: ReactNode;
}) {
  return (
    <figure
      className={`absolute m-0 w-[52%] rounded-md bg-[#FDFBF7] p-3 pb-12 shadow-2xl shadow-ink-900/30 ${className}`}
    >
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(200,200,200,.75) 0 5px, rgba(228,228,228,.75) 5px 10px)",
        }}
      />
      {children}
      <figcaption
        className={`absolute inset-x-0 bottom-2 font-script text-[26px] leading-none text-ink-800 ${captionClass}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-8 pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-accent-300/20 blur-3xl dark:bg-accent-700/10"
      />

      <div className="section relative grid items-center gap-12 !py-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="animate-fade-up text-sm font-medium uppercase tracking-widest text-accent-600 dark:text-accent-400">
            Olá, eu sou a {profile.name.split(" ")[0]}
          </p>

          <h1
            className="animate-fade-up font-display text-4xl font-bold leading-tight text-ink-900 dark:text-white sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Desenvolvedora{" "}
            <span className="whitespace-nowrap text-accent-500">Full-Stack.</span>
          </h1>

          <p
            className="animate-fade-up max-w-xl text-lg text-ink-600 dark:text-ink-300"
            style={{ animationDelay: "160ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="animate-fade-up flex flex-wrap gap-3 pt-2"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#projetos"
              className="inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-7 py-4 text-[15px] font-bold text-white shadow-xl shadow-ink-900/25 transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-ink-950 dark:shadow-black/40"
            >
              Ver projetos <ArrowRight size={16} />
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border-2 border-ink-900 px-7 py-4 text-[15px] font-bold text-ink-900 transition-transform hover:-translate-y-0.5 dark:border-white dark:text-white"
            >
              Fale comigo no WhatsApp
            </a>
          </div>

          <div
            className="animate-fade-up flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-ink-500 dark:text-ink-400"
            style={{ animationDelay: "320ms" }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} /> {profile.location}
            </span>
          </div>
        </div>

        <div className="relative mx-auto h-[400px] w-full max-w-[520px] sm:h-[460px] lg:ml-auto">
          <Polaroid
            caption="menu da Thaiane"
            captionClass="pl-4 text-left"
            className="left-0 top-2 -rotate-[7deg]"
          >
            <img
              src="/projects/menu-thaiane.png"
              alt="Print do menu de links da Thaiane Ferreira"
              className="aspect-square w-full rounded-sm object-cover object-top"
            />
          </Polaroid>
          <Polaroid caption={profile.name.split(" ")[0]} className="left-[46%] top-28 rotate-[5deg]">
            <Photo />
          </Polaroid>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="mx-auto mt-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-ink-400 transition-colors hover:text-accent-600 dark:text-ink-500 dark:hover:text-accent-400"
      >
        Deslize <span aria-hidden>↓</span>
      </a>
    </section>
  );
}
