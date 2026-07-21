import { Reveal, SectionHeading } from "./Reveal"
import { about } from "../data/content"

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="01 — About" title="A bit about me" />
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              {about.facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                >
                  <div className="font-mono text-[0.7rem] uppercase tracking-widest text-[var(--color-faint)]">
                    {f.label}
                  </div>
                  <div className="mt-1.5 font-display text-sm font-medium text-[var(--color-ink)]">
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
