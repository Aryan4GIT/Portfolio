import { motion } from "framer-motion"

export function Reveal({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-mint)]">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
