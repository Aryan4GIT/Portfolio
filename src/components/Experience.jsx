import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Package } from "lucide-react"
import { SectionHeading } from "./Parcel"
import { experience } from "../data/content"

export default function Experience() {
  const rail = useRef(null)
  const { scrollYProgress } = useScroll({ target: rail, offset: ["start 70%", "end 60%"] })
  const parcelTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="experience" className="on-dark bg-stamp-blue px-5 py-20 text-label md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Where I've worked" note="Tracking history, oldest scan first. Keep scrolling and the parcel moves along with you." />

        <div ref={rail} className="relative pl-14 md:pl-20">
          <div aria-hidden className="absolute bottom-0 left-5 top-0 w-1 -translate-x-1/2 bg-label/25" />
          <motion.div
            aria-hidden
            className="absolute bottom-0 left-5 top-0 w-1 origin-top -translate-x-1/2 bg-label"
            style={{ scaleY: scrollYProgress }}
          />
          <motion.div
            aria-hidden
            className="absolute left-5 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-kraft text-ink"
            style={{ top: parcelTop }}
          >
            <Package size={24} />
          </motion.div>

          <ol className="space-y-14">
            {[...experience].reverse().map((job) => (
              <li key={job.company}>
                <p className="font-display text-3xl font-black uppercase leading-none text-kraft md:text-4xl">{job.scan}</p>
                <h3 className="mt-3 text-2xl font-bold leading-tight">{job.role}</h3>
                <p className="mt-1 text-lg">
                  {job.company}, {job.location}. {job.period}
                </p>
                <ul className="mt-4 max-w-[68ch] list-disc space-y-2 pl-5 leading-relaxed">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <p className="mt-3 font-semibold text-kraft">{job.tags.join(", ")}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
