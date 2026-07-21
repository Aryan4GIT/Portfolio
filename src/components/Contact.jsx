import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Reveal } from "./Reveal"
import { profile } from "../data/content"

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(139,124,255,0.25), transparent 70%)",
              }}
            />
            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-mint)]">
                05 — Contact
              </span>
              <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
                Let's build something <span className="text-gradient">worth shipping.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
                Open to full-time roles, freelance projects, and interesting collaborations. The fastest
                way to reach me is email — I usually reply within a day.
              </p>

              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-mint)] px-6 py-3.5 text-sm font-semibold text-[#0a0a0b]"
              >
                {profile.email}
                <ArrowUpRight size={16} />
              </motion.a>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <ContactLink href={profile.github} icon={<Github size={16} />} label="GitHub" />
                <ContactLink href={profile.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" />
                <ContactLink href={`tel:${profile.phone.replace(/\s/g, "")}`} icon={<Phone size={16} />} label={profile.phone} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-violet)] hover:text-[var(--color-ink)]"
    >
      {icon}
      {label}
    </a>
  )
}
