import { SectionHeading } from "./Parcel"
import { about, profile } from "../data/content"

export default function About() {
  return (
    <section id="about" className="fold px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="label p-6 sm:p-10 lg:-rotate-[0.6deg]">
          <SectionHeading title="A bit about me" className="!mb-6" />
          <p className="max-w-[62ch] text-xl font-semibold leading-snug">{profile.intro}</p>
          <div className="mt-5 max-w-[62ch] space-y-4 text-lg leading-relaxed text-soft">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-8 grid border-2 sm:grid-cols-2">
            {about.facts.map((f) => (
              <div key={f.label} className="-m-px border p-3">
                <dt className="text-sm text-soft">{f.label}</dt>
                <dd className="font-bold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="label relative mx-auto w-full max-w-80 rotate-3 p-3 pb-4 lg:mt-10">
          <span aria-hidden className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" />
          <div className="overflow-hidden">
            <img
              src={profile.photo}
              alt={`${profile.name} smiling outdoors at night, wearing a navy hoodie`}
              loading="lazy"
              className="aspect-[4/5] w-full origin-[74%_60%] scale-[1.35] object-cover object-[74%_60%]"
            />
          </div>
          <figcaption className="mt-3 font-semibold">The sender, right after a green build</figcaption>
        </figure>
      </div>
    </section>
  )
}
