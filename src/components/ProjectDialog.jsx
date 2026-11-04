import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Barcode, Stamp } from "./Parcel"
import { ProjectLinks } from "./Projects"

export default function ProjectDialog({ project: p, onClose }) {
  const dialog = useRef(null)

  useEffect(() => {
    if (p && !dialog.current.open) dialog.current.showModal()
  }, [p])

  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      onClick={(e) => e.target === dialog.current && dialog.current.close()}
      aria-label={p?.title}
      className="label m-auto max-h-[calc(100dvh-2rem)] w-[min(46rem,calc(100vw-2rem))] overflow-y-auto overflow-x-hidden"
    >
      {p && (
        <div className="relative">
          {p.image && (
            <img src={p.image} alt={`${p.title} homepage`} width="960" height="600" className="aspect-[8/5] w-full border-b-2 object-cover object-top" />
          )}

          <button
            type="button"
            onClick={() => dialog.current.close()}
            aria-label="Close"
            className="absolute right-3 top-3 z-10 bg-ink p-2 text-label hover:bg-stamp-red"
          >
            <X size={20} />
          </button>

          <div className="relative p-6 sm:p-8">
            <Stamp key={p.title} delay={0.15} rotate={-7} className="absolute right-14 top-6 text-3xl sm:right-16 sm:text-5xl">
              {p.live ? "Live" : "Shipped"}
            </Stamp>

            <h2 className="pt-12 font-display text-5xl font-black uppercase leading-[0.92] sm:pr-52 sm:pt-0 sm:text-6xl">{p.title}</h2>

            <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-y-2 py-3">
              <dt className="font-bold">To</dt>
              <dd>{p.to}</dd>
              <dt className="font-bold">Type</dt>
              <dd>{p.kind}</dd>
              <dt className="font-bold">Year</dt>
              <dd className="tabular-nums">{p.year}</dd>
            </dl>

            <p className="mt-5 max-w-[65ch] text-lg leading-relaxed">{p.description}</p>

            <ul className="mt-5 list-disc space-y-1 pl-5 font-semibold">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <p className="mt-5 text-soft">Built with {p.tags.join(", ")}</p>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t-2 pt-4">
              <ProjectLinks p={p} />
              <Barcode text={p.repo} className="h-9 w-28" />
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
