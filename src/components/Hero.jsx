import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { profile } from "../data/content"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center px-6 pt-28 pb-16">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-mint)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-mint)]" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="text-[var(--color-ink)]">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl"
          >
            <span className="text-gradient">{profile.tagline}</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-mint)] px-5 py-3 text-sm font-semibold text-[#0a0a0b] transition-transform hover:scale-[1.03]"
            >
              View my work
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-violet)]"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-2 text-sm text-[var(--color-faint)]">
              <MapPin size={15} /> {profile.location}
            </span>
            <div className="flex items-center gap-2">
              <SocialIcon href={profile.github} label="GitHub"><Github size={17} /></SocialIcon>
              <SocialIcon href={profile.linkedin} label="LinkedIn"><Linkedin size={17} /></SocialIcon>
              <SocialIcon href={`mailto:${profile.email}`} label="Email"><Mail size={17} /></SocialIcon>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-violet)] hover:text-[var(--color-ink)]"
    >
      {children}
    </a>
  )
}
