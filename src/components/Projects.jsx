import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Barcode, SectionHeading } from "./Parcel"
import { projects } from "../data/content"

const CHUTES = [
  { label: "Everything", has: () => true },
  { label: "AI", has: (p) => p.sort.includes("ai") },
  { label: "Backend and full-stack", has: (p) => p.sort.includes("backend") },
  { label: "Business websites", has: (p) => p.sort.includes("web") },
  { label: "Live now", has: (p) => p.live },
]

const TILT = [-1.1, 0.7, -0.4, 1, -0.8, 0.5, 1.2]

export function ProjectLinks({ p }) {
  const style = "relative z-10 inline-flex items-center gap-1.5 border-2 px-2.5 pb-1 pt-1.5 text-sm font-bold leading-none hover:bg-ink hover:text-label"
  return (
    <div className="flex flex-wrap gap-2">
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live site`} className={style}>
          <ExternalLink size={14} /> Live site
        </a>
      )}
      <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} code on GitHub`} className={style}>
        <Github size={14} /> Code
      </a>
    </div>
  )
}

export default function Projects({ onOpen }) {
  const [chute, setChute] = useState(CHUTES[0])
  const shown = projects.filter(chute.has)

  return (
    <section id="work" className="fold px-5 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Things I've built" note="Pick a chute to sort the pile. Open any label for the full story." />

        <div role="group" aria-label="Sort projects" className="mb-10 flex flex-wrap gap-2">
          {CHUTES.map((c) => (
            <button
              key={c.label}
              type="button"
              aria-pressed={c === chute}
              onClick={() => setChute(c)}
              className={`border-2 px-4 pb-1.5 pt-2 font-bold leading-none ${c === chute ? "bg-ink text-label" : "hover:bg-ink/10"}`}
            >
              {c.label} <span className="font-normal tabular-nums">{projects.filter(c.has).length}</span>
            </button>
          ))}
        </div>
        <p aria-live="polite" className="sr-only">
          {shown.length} projects shown
        </p>

        <motion.div layout="position" className="grid items-start gap-7 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {shown.map((p) => (
              <motion.article
                key={p.title}
                layout="position"
                initial={{ opacity: 0, y: -40, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: TILT[projects.indexOf(p) % TILT.length] }}
                exit={{ opacity: 0, y: 60, rotate: 8, scale: 0.92, transition: { duration: 0.2 } }}
                whileHover={{ y: -6, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className="label relative flex flex-col"
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={`${p.title} homepage`}
                    loading="lazy"
                    width="960"
                    height="600"
                    className="aspect-[8/5] w-full border-b-2 object-cover object-top"
                  />
                )}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="min-w-0">
                      <button
                        type="button"
                        onClick={() => onOpen(p)}
                        className="text-left font-display text-4xl font-black uppercase leading-[0.95] after:absolute after:inset-0 hover:text-stamp-red"
                      >
                        {p.title}
                      </button>
                    </h3>
                    <span className="pt-1 font-semibold tabular-nums">{p.year}</span>
                  </div>
                  <p className="mt-2 leading-snug">
                    <span className="font-bold">To</span> {p.to}
                  </p>
                  <p className={`mt-3 leading-relaxed text-soft ${p.image ? "line-clamp-3" : "line-clamp-5"}`}>{p.description}</p>
                  {!p.image && (
                    <ul className="mt-3 list-disc pl-5 font-semibold leading-snug">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                  <p className="mb-4 mt-3 text-sm font-semibold">{p.tags.join(", ")}</p>
                  <div className="mt-auto flex items-end justify-between gap-4 border-t-2 pt-3">
                    <Barcode text={p.repo} className="h-8 w-20 flex-shrink-0" />
                    <ProjectLinks p={p} />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
