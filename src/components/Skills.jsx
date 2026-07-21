import { Reveal, SectionHeading } from "./Reveal"
import { skills, achievements } from "../data/content"
import { Award } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="04 — Toolkit" title="Skills & achievements" />

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 2) * 0.06}>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 card-hover">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-mint)]">
                  {s.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-violet)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 card-hover">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-violet)]/20 to-[var(--color-mint)]/20 text-[var(--color-mint)]">
                  <Award size={18} />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-display text-sm font-semibold text-[var(--color-ink)]">
                      {a.title}
                    </h4>
                    <span className="rounded-full bg-[var(--color-violet)]/12 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-[var(--color-violet)]">
                      {a.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">{a.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
