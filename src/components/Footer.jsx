import { profile } from "../data/content"

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-6 text-label">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-1 text-sm sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with React, Tailwind and Framer Motion. Handle with care.</span>
      </div>
    </footer>
  )
}
