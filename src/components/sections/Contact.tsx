import { Phone, MapPin, Navigation, Instagram, Facebook, Clock } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { siteInfo } from '../../data/siteInfo'

export function Contact() {
  return (
    <section id="contatti" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
      <SectionHeading eyebrow="Dove trovarci" title="Vieni a trovarci" className="mb-16" />

      <Reveal>
        <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-[2rem] bg-white p-8 shadow-warm md:p-12">
          <div>
            <h3 className="font-serif text-3xl">Le Rose 2</h3>
            <p className="mt-2 flex items-start gap-2 text-ink/70">
              <MapPin size={18} className="mt-0.5 shrink-0 text-red" />
              <span>{siteInfo.address} · {siteInfo.cap} {siteInfo.city} ({siteInfo.province})</span>
            </p>
          </div>

          <div>
            <span className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red">
              <Clock size={16} /> Orari
            </span>
            <ul className="grid gap-x-8 gap-y-1.5 text-ink/75 sm:grid-cols-2">
              {siteInfo.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-6 border-b border-ink/10 pb-1.5">
                  <span>{h.days}</span>
                  <span className="text-right font-medium">{h.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={siteInfo.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-red-deep">
              <Phone size={16} /> Chiama per prenotare
            </a>
            <a href={siteInfo.mapsDirections} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-beige">
              <Navigation size={16} /> Apri su Google Maps
            </a>
          </div>

          <div className="flex gap-3 border-t border-ink/10 pt-6">
            {siteInfo.social.instagram && (
              <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-ink transition hover:bg-red hover:text-cream">
                <Instagram size={18} />
              </a>
            )}
            <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-ink transition hover:bg-red hover:text-cream">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
