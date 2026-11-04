import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUp, RotateCcw, Umbrella, Wine } from "lucide-react"
import { Barcode, Stamp } from "./Parcel"
import { profile, projects } from "../data/content"

const MARKS = ["200 OK", "Ship it", "LGTM", "Fragile", "No N+1", "This way up", "Idempotent", "Cache hit", "Handle with care", "Delivered"]

// Where each label lands, sender card first so the others can pile on top of it.
const SPOTS = [
  { left: "58%", top: "56%", rotate: 5 },
  { left: "2%", top: "3%", rotate: -7 },
  { left: "54%", top: "0%", rotate: 4 },
  { left: "26%", top: "34%", rotate: 3 },
  { left: "0%", top: "60%", rotate: -4 },
]

const touch = window.matchMedia("(pointer: coarse)").matches
let topZ = 10

export default function Hero({ onOpen }) {
  const box = useRef(null)
  const [marks, setMarks] = useState([])
  const [drops, setDrops] = useState(0)
  const pile = projects.filter((p) => p.image && p.featured).concat(projects.find((p) => p.title === "Medlen-AI"))

  const press = (e) => {
    if (e.target.closest("a, button")) return
    const { left, top } = box.current.getBoundingClientRect()
    setMarks((all) => [
      ...all.slice(-13),
      {
        id: Date.now(),
        x: e.clientX - left,
        y: e.clientY - top,
        rotate: Math.random() * 24 - 12,
        text: MARKS[(all.at(-1)?.n + 1 || 0) % MARKS.length],
        n: (all.at(-1)?.n + 1 || 0) % MARKS.length,
      },
    ])
  }

  return (
    <section
      id="top"
      ref={box}
      onClick={press}
      className="stampable relative min-h-[100svh] overflow-hidden px-5 pb-8 pt-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,38rem)]">
        <div>
          <div className="relative w-fit">
            <h1 className="font-display text-[clamp(5.5rem,min(19vw,21vh),15rem)] font-black uppercase leading-[0.82]">
              Aryan
              <br />
              Kumar
              <br />
              Singh
            </h1>
            <Stamp delay={0.95} rotate={-9} className="absolute -right-4 bottom-[8%] translate-x-1/2 bg-transparent text-3xl sm:text-4xl">
              Available
            </Stamp>
          </div>

          <p className="mt-6 max-w-xl text-2xl font-bold leading-tight sm:text-3xl">{profile.tagline}</p>
          <p className="mt-2 text-lg">
            {profile.role} in {profile.location}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#work" className="bg-ink px-5 pb-2.5 pt-3 font-bold leading-none text-label hover:bg-stamp-red">
              See my work
            </a>
            <a href="#contact" className="border-2 px-5 pb-2 pt-2.5 font-bold leading-none hover:bg-ink hover:text-label">
              Get in touch
            </a>
            <div aria-hidden className="ml-2 hidden items-center gap-1.5 border-2 p-1.5 sm:flex">
              <ArrowUp size={20} strokeWidth={3} />
              <ArrowUp size={20} strokeWidth={3} />
              <Wine size={20} strokeWidth={2.5} />
              <Umbrella size={20} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <div className="relative z-30">
          {/* Remounting replays the drop, which also tidies anything that was thrown. */}
          <div key={drops} className="relative h-[27rem] sm:h-[36rem] lg:h-[34rem]">
            <Thrown spot={SPOTS[0]} i={0} box={box} label="About Aryan" onOpen={() => { window.location.hash = "about" }}>
              <span className="block overflow-hidden">
                <img
                  src={profile.photo}
                  alt=""
                  draggable={false}
                  className="pointer-events-none aspect-[5/4] w-full origin-[73%_50%] scale-[1.7] object-cover object-[73%_50%]"
                />
              </span>
              <span className="block p-2.5 text-sm leading-snug">
                <span className="font-bold">From</span> {profile.name}, Chennai
              </span>
            </Thrown>
            {pile.map((p, i) => (
              <Thrown key={p.title} spot={SPOTS[i + 1]} i={i + 1} box={box} label={`Open ${p.title}`} onOpen={() => onOpen(p)}>
                {p.image && (
                  <img
                    src={p.image}
                    alt=""
                    draggable={false}
                    className="pointer-events-none aspect-[8/5] w-full border-b-2 object-cover object-top"
                  />
                )}
                <span className="block p-2.5">
                  <span className="block font-display text-2xl font-black uppercase leading-none sm:text-3xl">{p.title}</span>
                  <span className="mt-1 block text-xs leading-snug sm:text-sm">
                    <span className="font-bold">To</span> {p.to}
                  </span>
                  <Barcode text={p.repo} className="mt-2 h-5 w-full" />
                </span>
              </Thrown>
            ))}
          </div>

          <p className="relative z-10 mt-2 flex flex-wrap items-center gap-x-3 text-sm font-semibold">
            {touch
              ? "Tap the box to stamp it. Swipe a label aside, or tap one to open it."
              : "Click the box to stamp it. Throw the labels around, or click one to open it."}
            <button type="button" onClick={() => setDrops((n) => n + 1)} className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-stamp-red">
              <RotateCcw size={13} /> Drop them again
            </button>
          </p>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
        {marks.map((m) => (
          <Stamp key={m.id} rotate={m.rotate} className="absolute -translate-x-1/2 -translate-y-1/2 text-3xl" style={{ left: m.x, top: m.y }}>
            {m.text}
          </Stamp>
        ))}
      </div>
    </section>
  )
}

function Thrown({ spot, i, box, label, onOpen, children }) {
  const moved = useRef(false)
  const [z, setZ] = useState(i + 1)
  const [walls, setWalls] = useState({})

  // Numeric, not a ref: with a ref Framer rescales the label into the bounds on every re-measure.
  const measureWalls = ({ currentTarget: el }) => {
    const hero = box.current.getBoundingClientRect()
    const pile = el.offsetParent.getBoundingClientRect()
    const left = pile.left + el.offsetLeft
    const top = pile.top + el.offsetTop
    setWalls({
      left: hero.left - left,
      right: hero.right - left - el.offsetWidth,
      top: hero.top + 56 - top,
      bottom: hero.bottom - top - el.offsetHeight,
    })
  }

  return (
    <motion.button
      type="button"
      aria-label={label}
      drag={touch ? "x" : true}
      dragConstraints={walls}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 260, bounceDamping: 14 }}
      onPointerDown={(e) => {
        measureWalls(e)
        moved.current = false
        setZ(++topZ)
      }}
      onDragStart={() => {
        moved.current = true
      }}
      onClick={() => {
        if (!moved.current) onOpen()
      }}
      initial={{ y: -800, rotate: spot.rotate * 5, opacity: 0 }}
      animate={{
        y: 0,
        rotate: spot.rotate,
        opacity: 1,
        transition: { type: "spring", stiffness: 170, damping: 17, delay: 0.1 + i * 0.09 },
      }}
      whileHover={{ scale: 1.03 }}
      whileDrag={{ scale: 1.06 }}
      style={{ left: spot.left, top: spot.top, zIndex: z }}
      className="label absolute w-[46%] max-w-60 cursor-grab text-left active:cursor-grabbing"
    >
      {children}
    </motion.button>
  )
}
