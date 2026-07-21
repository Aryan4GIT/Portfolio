import { Reveal, SectionHeading } from "./Reveal"
import { experience } from "../data/content"

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="02 — Experience" title="Where I've worked" />

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-violet)]/60 via-[var(--color-border)] to-transparent md:left-[9.5rem]" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.06}>
                <div className="relative grid gap-4 pl-8 md:grid-cols-[9.5rem_1fr] md:gap-8 md:pl-0">
                  {/* dot */}
                  <span
                    className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-[5px] rounded-full border-2 md:left-[9.5rem] ${
                      job.accent
                        ? "border-[var(--color-mint)] bg-[var(--color-mint)]"
                        : "border-[var(--color-violet)] bg-[var(--color-bg)]"
                    }`}
                  />
                  <div className="md:pr-8 md:text-right">
                    <div className="font-mono text-xs text-[var(--color-faint)]">{job.period}</div>
                    <div className="mt-1 text-xs text-[var(--color-faint)]">{job.location}</div>
                  </div>

                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 card-hover">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                        {job.role}
                      </h3>
                      {job.accent && (
                        <span className="rounded-full bg-[var(--color-mint)]/15 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-mint)]">
                          New
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-[var(--color-violet)]">
                      {job.company}
                    </div>

                    <ul className="mt-4 space-y-2.5">
                      {job.points.map((pt, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-faint)]" />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 font-mono text-[0.7rem] text-[var(--color-muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
