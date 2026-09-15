import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 py-8 dark:border-ink-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center sm:px-8">
        <p className="text-sm text-ink-400">
          © {new Date().getFullYear()} {profile.name}. Feito com React &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
