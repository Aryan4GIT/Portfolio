import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navLinks, profile } from "../data/content"

export default function Navbar() {
  const [active, setActive] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        const seen = entries.find((e) => e.isIntersecting)
        if (seen) setActive(`#${seen.target.id}`)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s))
    return () => spy.disconnect()
  }, [])

  return (
    <header className="label fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
        <a href="#top" className="font-display text-3xl font-black uppercase leading-none" aria-label={`${profile.name}, back to top`}>
          AKS
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              {active === link.href && (
                <motion.span
                  layoutId="nav-mark"
                  aria-hidden
                  className="absolute inset-0 rounded-sm border-2 border-stamp-red"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className="relative block px-3 pb-1 pt-1.5 font-semibold hover:text-stamp-red"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden bg-ink px-4 pb-1.5 pt-2 font-semibold leading-none text-label hover:bg-stamp-red md:block"
        >
          Email me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="p-2 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t-2 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-lg font-semibold active:text-stamp-red"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="block bg-ink px-5 py-3 text-lg font-semibold text-label"
            >
              Email me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
