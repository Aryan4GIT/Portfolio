import { motion } from "framer-motion"

export function SectionHeading({ title, note, className = "" }) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      <h2 className="font-display text-[min(15vw,3.75rem)] font-black uppercase leading-[0.9] md:text-8xl">{title}</h2>
      {note && <p className="mt-3 max-w-xl text-lg leading-relaxed">{note}</p>}
    </div>
  )
}

// The thump: starts large and lands fast. Pass inView to press it when it scrolls into view.
export function Stamp({ children, rotate = -8, delay = 0, inView = false, className = "", ...rest }) {
  const pressed = { opacity: 0.94, scale: 1, rotate }
  return (
    <motion.span
      className={`stamp ${className}`}
      initial={{ opacity: 0, scale: 2.6, rotate: rotate - 8 }}
      {...(inView ? { whileInView: pressed, viewport: { once: true, margin: "-60px" } } : { animate: pressed })}
      transition={{ duration: 0.18, delay, ease: "easeIn" }}
      {...rest}
    >
      {children}
    </motion.span>
  )
}

// Decorative: bar widths come from the text, so it doesn't actually scan.
export function Barcode({ text, className = "" }) {
  let x = 0
  const bars = [...text.slice(-22)].map((c) => {
    const n = c.charCodeAt(0)
    const bar = { x, w: 1 + (n % 3) }
    x += bar.w + 1 + ((n >> 2) % 2)
    return bar
  })
  return (
    <svg aria-hidden viewBox={`0 0 ${x} 10`} preserveAspectRatio="none" className={className}>
      {bars.map((b) => (
        <rect key={b.x} x={b.x} width={b.w} height="10" fill="currentColor" />
      ))}
    </svg>
  )
}
