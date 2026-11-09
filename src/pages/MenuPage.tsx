import { useEffect, useMemo, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Search, X, Phone, UtensilsCrossed, Wheat, Beef, Fish, Salad, Pizza, Carrot, CakeSlice, Wine, Coffee, type LucideIcon } from 'lucide-react'
import { menu, coperto, type MenuCategory, type MenuItem } from '../data/menu'
import { siteInfo } from '../data/siteInfo'
import { BookButton } from '../components/ui/BookButton'
import { Feste } from '../components/sections/Feste'
import { Gruppi } from '../components/sections/Gruppi'

const categories: MenuCategory[] = menu

const icons: Record<string, LucideIcon> = {
  antipasti: UtensilsCrossed,
  primi: Wheat,
  griglia: Beef,
  pesce: Fish,
  insalatone: Salad,
  pizze: Pizza,
  contorni: Carrot,
  dessert: CakeSlice,
  vini: Wine,
  bevande: Coffee,
}

const tagStyle: Record<NonNullable<MenuItem['tag']>, string> = {
  specialità: 'bg-red text-cream',
  novità: 'bg-gold text-ink',
  vegetariano: 'bg-[#5B7F3A]/15 text-[#3F6326]',
}

function norm(s: string) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

function Item({ item }: { item: MenuItem }) {
  return (
    <li className="flex gap-3 border-b border-dashed border-ink/10 py-3.5 last:border-0">
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <h3 className="font-serif text-[17px] font-bold leading-snug">{item.name}</h3>
          {item.price && (
            <>
              <span className="mb-1 min-w-4 flex-1 border-b border-dotted border-ink/25" />
              <span className="whitespace-nowrap font-retro text-[17px] tracking-wide text-red-deep">{item.price}</span>
            </>
          )}
        </div>
        {item.description && <p className="mt-0.5 font-serif text-[14px] italic leading-snug text-ink/60">{item.description}</p>}
        {item.tag && (
          <span className={`mt-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tagStyle[item.tag]}`}>
            {item.tag}
          </span>
        )}
      </div>
    </li>
  )
}

export function MenuPage() {
  const [active, setActive] = useState(categories[0].id)
  const [query, setQuery] = useState('')
  const chipsRef = useRef<HTMLDivElement>(null)
  const clickScrolling = useRef(false)

  const filtered = useMemo(() => {
    const q = norm(query.trim())
    if (!q) return categories
    return categories
      .map((c) => ({
        ...c,
        groups: c.groups
          .map((g) => ({ ...g, items: g.items.filter((i) => norm(`${i.name} ${i.description ?? ''}`).includes(q)) }))
          .filter((g) => g.items.length > 0),
      }))
      .filter((c) => c.groups.length > 0)
  }, [query])

  // chip: le categorie + il menù delle feste (nascosto durante la ricerca)
  const chips = [...filtered.map((c) => ({ id: c.id, title: c.title })), ...(query ? [] : [{ id: 'gruppi', title: 'Menu per gruppi' }, { id: 'feste', title: 'Menù delle feste' }])]

  const resultCount = filtered.reduce((n, c) => n + c.groups.reduce((m, g) => m + g.items.length, 0), 0)

  const scrollToCategory = (id: string, smooth = true) => {
    const el = document.getElementById(`cat-${id}`)
    if (!el) return
    setActive(id)
    clickScrolling.current = true
    el.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant', block: 'start' })
    window.setTimeout(() => (clickScrolling.current = false), 700)
  }

  // Deep link: /menu#pizze apre direttamente la sezione pizze.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && (hash === 'feste' || hash === 'gruppi' || categories.some((c) => c.id === hash))) {
      const t = window.setTimeout(() => scrollToCategory(hash, false), 80)
      return () => window.clearTimeout(t)
    }
    window.scrollTo({ top: 0 })
  }, [])

  // Scrollspy: evidenzia l'ultima categoria il cui titolo è passato sotto i chip.
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (clickScrolling.current) return
        let current = chips[0]?.id
        for (const c of chips) {
          const el = document.getElementById(`cat-${c.id}`)
          if (el && el.getBoundingClientRect().top <= 170) current = c.id
        }
        if (current) setActive(current)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [filtered, query])

  // Tiene il chip attivo visibile nella barra orizzontale.
  useEffect(() => {
    const chip = chipsRef.current?.querySelector<HTMLElement>(`[data-chip="${active}"]`)
    chip?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [active])

  return (
    <>
      <Helmet>
        <title>Menu | Le Rose 2 — Ristorante e Pizzeria</title>
        <meta name="description" content="Il menu completo di Le Rose 2 con tutti i prezzi: antipasti, primi, pesce, carne alla griglia, oltre 50 pizze, insalatone, dolci, vini e menu per gruppi." />
      </Helmet>

      <header className="relative overflow-hidden bg-ink texture-wood px-4 pb-8 pt-28 text-center text-cream md:pb-12 md:pt-36">
        <span className="font-retro text-sm uppercase tracking-[0.3em] text-gold">Il menu digitale</span>
        <h1 className="mt-2 font-script text-6xl md:text-8xl">La nostra carta</h1>
        <p className="mx-auto mt-2 max-w-md text-sm font-light text-cream/70">
          Il pesce varia ogni giorno secondo il mercato: chiedi in sala il pescato del giorno.
        </p>
        <label className="relative mx-auto mt-6 flex max-w-md items-center">
          <Search size={18} className="pointer-events-none absolute left-4 text-ink/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca un piatto: scoglio, pizza, tortelloni…"
            className="w-full rounded-full bg-cream py-3.5 pl-11 pr-11 text-[16px] text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          {query && (
            <button onClick={() => setQuery('')} aria-label="Cancella ricerca" className="absolute right-4 text-ink/50">
              <X size={18} />
            </button>
          )}
        </label>
      </header>
      <div className="gingham-strip" />

      {/* chip categorie, fissi sotto la navbar */}
      <div className="sticky top-[68px] z-40 border-b border-ink/5 bg-cream/95 backdrop-blur-md">
        <div ref={chipsRef} className="no-scrollbar mx-auto flex max-w-4xl gap-2 overflow-x-auto px-4 py-3 md:justify-center">
          {chips.map((c) => (
            <button
              key={c.id}
              data-chip={c.id}
              onClick={() => scrollToCategory(c.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === c.id ? 'bg-red text-cream shadow-warm' : 'bg-white text-ink/70 hover:bg-beige'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-4 pb-16 pt-6 md:px-8">
        {query && (
          <p className="mb-4 text-center text-sm text-ink/50">
            {resultCount > 0 ? `${resultCount} ${resultCount === 1 ? 'piatto trovato' : 'piatti trovati'} per «${query}»` : `Nessun piatto trovato per «${query}».`}
          </p>
        )}

        {filtered.map((cat) => {
          const Icon = icons[cat.id] ?? UtensilsCrossed
          return (
            <div key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-[140px] pt-6">
              <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-warm ring-1 ring-ink/5">
                <div className="gingham-strip" />
                <div className="px-5 pb-3 pt-6 md:px-9 md:pt-8">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red text-cream shadow-cta md:h-14 md:w-14">
                      <Icon size={24} />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-retro text-3xl uppercase leading-none tracking-wide md:text-4xl">{cat.title}</h2>
                      {cat.blurb && <p className="mt-1.5 text-sm italic leading-snug text-ink/55">{cat.blurb}</p>}
                    </div>
                  </div>

                  {cat.groups.map((group, gi) => (
                    <div key={gi} className="mt-5">
                      {group.label && (
                        <div className="flex items-center gap-3">
                          <h3 className="whitespace-nowrap font-script text-3xl leading-none text-red-deep">{group.label}</h3>
                          <span className="h-px flex-1 bg-gradient-to-r from-red/30 to-transparent" />
                        </div>
                      )}
                      {group.note && (
                        <p className="mt-2 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-ink/70">
                          + {group.note}
                        </p>
                      )}
                      <ul className="md:grid md:grid-cols-2 md:gap-x-10">
                        {group.items.map((item) => (
                          <Item key={item.name} item={item} />
                        ))}
                      </ul>
                    </div>
                  ))}

                  {cat.note && !query && <p className="mb-2 mt-4 border-t border-dashed border-ink/10 pt-3 text-xs italic text-ink/45">N.B. {cat.note}</p>}
                </div>
                <div className="h-3" />
              </div>
            </div>
          )
        })}

        <div className="mt-10 space-y-1 text-center text-xs text-ink/50">
          <p>s.q. = secondo quotazione del pescato del giorno · coperto {coperto} a persona.</p>
          <p>Allergie o intolleranze? Chiedi al personale: ti indicheremo gli allergeni di ogni piatto.</p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-[2rem] bg-ink texture-wood p-8 text-center text-cream">
          <p className="font-script text-4xl">Hai già l'acquolina?</p>
          <BookButton className="inline-flex items-center gap-2 rounded-full bg-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-cta transition hover:bg-red-deep">
            <Phone size={16} /> Prenota: {siteInfo.phone}
          </BookButton>
        </div>
      </section>

      {!query && (
        <>
          <div id="cat-gruppi" className="scroll-mt-[120px] pb-8">
            <Gruppi />
          </div>
          <div id="cat-feste" className="scroll-mt-[120px]">
            <Feste />
          </div>
        </>
      )}
    </>
  )
}
