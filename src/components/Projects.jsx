import { Reveal, SectionHeading } from "./Reveal"
import { ArrowUpRight, Github, Sparkles } from "lucide-react"
import { projects } from "../data/content"

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="03 — Selected Work" title="Things I've built" />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08} className={p.featured ? "md:col-span-1" : ""}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 card-hover">
                {p.featured && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                    style={{ background: "radial-gradient(circle, #8b7cff, transparent 70%)" }}
                  />
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      {p.featured && <Sparkles size={14} className="text-[var(--color-mint)]" />}
                      <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[var(--color-faint)]">
                        {p.kind} · {p.year}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-ink)]">
                      {p.title}
                    </h3>
                    <div className="mt-0.5 text-sm text-[var(--color-violet)]">{p.client}</div>
                  </div>
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} source code on GitHub`}
                      className="group/link relative z-10 inline-flex flex-shrink-0 items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1.5 font-mono text-[0.7rem] text-[var(--color-muted)] transition-colors hover:border-[var(--color-violet)] hover:text-[var(--color-ink)]"
                    >
                      <Github size={14} />
                      Code
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  )}
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-md bg-[var(--color-violet)]/10 px-2 py-1 text-[0.7rem] font-medium text-[var(--color-violet)]"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[0.7rem] text-[var(--color-faint)]">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
