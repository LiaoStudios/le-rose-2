import { Phone, MapPin, Navigation, Instagram, Facebook, Clock, CalendarCheck, ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { siteInfo, hasOnlineBooking } from '../../data/siteInfo'
import { BookButton } from '../ui/BookButton'

// Prenotazione + contatti in un'unica sezione: meno scroll su telefono.
export function Contact() {
  const sameEveryDay = siteInfo.hours.every((h) => h.value === siteInfo.hours[0].value)

  return (
    <section id="contatti" className="mx-auto max-w-6xl px-4 py-16 md:px-12 md:py-28">
      <SectionHeading eyebrow="Prenota & vieni a trovarci" title="Ci vediamo a tavola?" className="mb-10 md:mb-14" />

      {/* Prenotazione online (UP Booking): compare solo quando il link è configurato in siteInfo */}
      {hasOnlineBooking && (
        <Reveal>
          <div className="mb-6 flex flex-col items-center gap-5 rounded-[2rem] bg-ink texture-wood p-7 text-center text-cream shadow-warm md:mb-8 md:flex-row md:p-10 md:text-left">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red shadow-cta">
              <CalendarCheck size={26} />
            </span>
            <div className="flex-1">
              <h3 className="font-serif text-2xl md:text-3xl">Prenota online, in un minuto</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-cream/75 md:text-base">
                Scegli giorno, orario e numero di persone: il tavolo è tuo, a qualsiasi ora. Ricevi subito la
                conferma via email e un promemoria prima della cena.
              </p>
            </div>
            <BookButton className="inline-flex shrink-0 items-center gap-2 rounded-full bg-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-cta transition hover:bg-red-deep">
              Prenota ora <ArrowUpRight size={18} />
            </BookButton>
          </div>
        </Reveal>
      )}

      <Reveal>
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-warm md:grid-cols-2">
          <div className="flex flex-col gap-6 p-6 md:p-10">
            <a
              href={siteInfo.phoneHref}
              className={`group flex items-center gap-4 rounded-2xl p-5 transition ${hasOnlineBooking ? 'border border-ink/10 text-ink hover:bg-beige' : 'bg-red text-cream shadow-cta hover:bg-red-deep'}`}
            >
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${hasOnlineBooking ? 'bg-cream text-red' : 'bg-cream/15'}`}>
                <Phone size={22} />
              </span>
              <span>
                <span className={`block text-xs font-bold uppercase tracking-widest ${hasOnlineBooking ? 'text-ink/50' : 'text-cream/75'}`}>{hasOnlineBooking ? 'Oppure chiamaci' : 'Prenota per telefono'}</span>
                <span className="font-retro text-2xl tracking-wide">{siteInfo.phone}</span>
              </span>
            </a>

            <div className="flex items-start gap-3 text-ink/75">
              <MapPin size={20} className="mt-0.5 shrink-0 text-red" />
              <span>
                {siteInfo.address}
                <br />
                {siteInfo.cap} {siteInfo.city} ({siteInfo.province})
                <span className="block text-sm text-ink/50">Parcheggio pubblico adiacente · veranda coperta</span>
              </span>
            </div>

            <div className="flex items-start gap-3 text-ink/75">
              <Clock size={20} className="mt-0.5 shrink-0 text-red" />
              {sameEveryDay ? (
                <span>
                  <span className="font-semibold text-ink">Aperti tutti i giorni</span>
                  <br />
                  Pranzo 12:00 – 14:30 · Cena 19:00 – 23:30
                </span>
              ) : (
                <ul className="w-full space-y-1 text-sm">
                  {siteInfo.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4 border-b border-ink/10 pb-1">
                      <span>{h.days}</span>
                      <span className="font-medium">{h.value}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-ink/10 pt-5">
              <a
                href={siteInfo.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-beige"
              >
                <Navigation size={16} /> Indicazioni
              </a>
              {siteInfo.social.instagram && (
                <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-cream transition hover:bg-red hover:text-cream">
                  <Instagram size={18} />
                </a>
              )}
              <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-cream transition hover:bg-red hover:text-cream">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <iframe
            title="Mappa Le Rose 2"
            src={siteInfo.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-64 w-full border-0 grayscale-[30%] md:h-full md:min-h-[420px]"
          />
        </div>
      </Reveal>
    </section>
  )
}
