import { useState } from "react"
import { Check, Copy, Github, Linkedin, Phone } from "lucide-react"
import { Barcode } from "./Parcel"
import { profile, waybillLink } from "../data/content"

export default function Contact() {
  const [name, setName] = useState("")
  const [note, setNote] = useState("")
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const field = "w-full border-b-2 bg-transparent pb-1 pt-1.5 text-lg outline-offset-2 placeholder:text-soft/70"

  return (
    <section id="contact" className="on-dark bg-stamp-red px-5 py-20 text-label md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
        <div>
          <h2 className="font-display text-[min(19vw,4.5rem)] font-black uppercase leading-[0.86] md:text-9xl">
            Let's build something worth shipping.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            Open to full-time roles, freelance projects, and interesting collaborations. The fastest way to reach me is
            email — I usually reply within a day.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 bg-label px-4 pb-2 pt-2.5 font-bold leading-none text-ink hover:bg-ink hover:text-label">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : profile.email}
            </button>
            <ContactLink href={profile.github} icon={<Github size={16} />} label="GitHub" />
            <ContactLink href={profile.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" />
            <ContactLink href={`tel:${profile.phone.replace(/\s/g, "")}`} icon={<Phone size={16} />} label={profile.phone} />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = waybillLink(name, note)
          }}
          className="label relative p-6 lg:rotate-1"
        >
          <span aria-hidden className="tape -top-3 right-8 rotate-2" />
          <p className="font-display text-4xl font-black uppercase leading-none">Waybill</p>

          <p className="mt-4 border-t-2 pt-3">
            <span className="font-bold">To</span> {profile.name}, {profile.location}
          </p>

          <label className="mt-4 block font-bold" htmlFor="waybill-name">
            From
          </label>
          <input
            id="waybill-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            placeholder="Your name"
            className={field}
          />

          <label className="mt-4 block font-bold" htmlFor="waybill-note">
            Contents
          </label>
          <textarea
            id="waybill-note"
            required
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What are you building?"
            className={`${field} resize-y`}
          />

          <button type="submit" className="mt-5 w-full bg-ink px-5 pb-3 pt-3.5 font-bold leading-none text-label hover:bg-stamp-red">
            Open this in my email app
          </button>
          <p className="mt-2 text-sm text-soft">Nothing is stored here. Your email app sends it, and you can edit it first.</p>
          <Barcode text={`${profile.email}${name}${note}`} className="mt-4 h-8 w-full" />
        </form>
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
      className="inline-flex items-center gap-2 border-2 px-4 pb-1.5 pt-2 font-bold leading-none hover:bg-label hover:text-ink"
    >
      {icon}
      {label}
    </a>
  )
}
