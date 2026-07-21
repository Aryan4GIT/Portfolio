import { profile } from "../data/content"

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
        <span className="font-mono text-xs text-[var(--color-faint)]">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-xs text-[var(--color-faint)]">
          Built with React, Tailwind & Framer Motion
        </span>
      </div>
    </footer>
  )
}
