import { useState } from "react"
import { Barcode, SectionHeading, Stamp } from "./Parcel"
import { achievements, skills, usedIn } from "../data/content"

export default function Skills({ onOpen }) {
  const [scanned, setScanned] = useState(null)
  const total = skills.reduce((n, s) => n + s.items.length, 0)

  return (
    <section id="skills" className="fold px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[24rem_minmax(0,1fr)]">
        <div className="receipt label lg:-rotate-1">
          <div className="p-5">
            <p className="text-center font-display text-4xl font-black uppercase leading-none">Toolkit</p>
            <p className="mt-1 border-b-2 border-dashed pb-3 text-center text-sm">Select an underlined item to see where it was used</p>

            {skills.map((s) => (
              <div key={s.group} className="mt-4">
                <h3 className="font-bold">{s.group}</h3>
                <ul>
                  {s.items.map((item) => {
                    const used = usedIn(item)
                    return (
                      <li key={item}>
                        {used.length > 0 ? (
                          <button
                            type="button"
                            aria-expanded={scanned === item}
                            onClick={() => setScanned(scanned === item ? null : item)}
                            className={`flex w-full justify-between gap-3 px-1 text-left leading-7 ${scanned === item ? "bg-ink text-label" : "underline decoration-dotted underline-offset-4 hover:text-stamp-red"}`}
                          >
                            <span>{item}</span>
                            <span className="tabular-nums">x{used.length}</span>
                          </button>
                        ) : (
                          <span className="block px-1 leading-7">{item}</span>
                        )}
                        {scanned === item && (
                          <ul className="mb-1 border-x-2 border-b-2 px-2 py-1 text-sm">
                            {used.map((p) => (
                              <li key={p.title}>
                                <button type="button" onClick={() => onOpen(p)} className="text-left font-semibold leading-6 underline underline-offset-2 hover:text-stamp-red">
                                  {p.title}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}

            <div className="mt-4 flex justify-between border-t-2 border-dashed pt-3 font-bold">
              <span>Total</span>
              <span className="tabular-nums">{total} tools</span>
            </div>
            <Barcode text="thanks for reading this far" className="mt-4 h-10 w-full" />
            <p className="mt-2 text-center text-sm">Thanks for reading this far</p>
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <SectionHeading title="Skills and achievements" />
          <ul className="space-y-8">
            {achievements.map((a, i) => (
              <li key={a.title} className="grid items-center gap-x-6 gap-y-2 sm:grid-cols-[10rem_minmax(0,1fr)]">
                <Stamp inView delay={i * 0.08} rotate={i % 2 ? 4 : -5} className="w-fit text-3xl">
                  {a.badge}
                </Stamp>
                <div>
                  <h3 className="text-xl font-bold leading-snug">{a.title}</h3>
                  <p className="mt-1 max-w-[60ch] leading-relaxed">{a.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
