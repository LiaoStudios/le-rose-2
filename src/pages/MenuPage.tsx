import { useEffect, useMemo, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Search, X, Phone } from 'lucide-react'
import { menu, type MenuCategory, type MenuItem } from '../data/menu'
import { wines } from '../data/wines'
import { siteInfo } from '../data/siteInfo'
import { Feste } from '../components/sections/Feste'

// La carta dei vini entra nel menu digitale come categoria a sé (prima delle bevande).
const winesCategory: MenuCategory = {
  id: 'vini',
  title: 'Vini',
  blurb: 'Le etichette della nostra cantina. Chiedi in sala la carta completa.',
  groups: (['Bollicine', 'Bianco', 'Rosso'] as const).map((type) => ({
    label: type === 'Bianco' ? 'Bianchi' : type === 'Rosso' ? 'Rossi' : type,
    items: wines
      .filter((w) => w.type === type)
      .map((w) => ({ name: w.name, description: `${w.producer} · ${w.origin}` })),
  })),
}
const bevandeIndex = menu.findIndex((c) => c.id === 'bevande')
const categories: MenuCategory[] = [...menu.slice(0, bevandeIndex), winesCategory, ...menu.slice(bevandeIndex)]

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
        {item.description && <p className="mt-0.5 text-sm leading-snug text-ink/60">{item.description}</p>}
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
  const chips = [...filtered.map((c) => ({ id: c.id, title: c.title })), ...(query ? [] : [{ id: 'feste', title: 'Menù delle feste' }])]

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
    if (hash && (hash === 'feste' || categories.some((c) => c.id === hash))) {
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
        <meta name="description" content="Il menu digitale di Le Rose 2: antipasti di terra e di mare, primi, pesce fresco, carne alla griglia, pizze, contorni, dessert e vini." />
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
            placeholder="Cerca un piatto: scoglio, pizza, fiorentina…"
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

        {filtered.map((cat) => (
          <div key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-[140px] pt-6">
            <div className="mb-2 flex items-end justify-between gap-3 border-b-2 border-ink pb-2">
              <h2 className="font-retro text-3xl uppercase tracking-wide md:text-4xl">{cat.title}</h2>
            </div>
            {cat.blurb && <p className="mb-2 text-sm italic text-ink/55">{cat.blurb}</p>}

            {cat.groups.map((group, gi) => (
              <div key={gi} className="mb-4">
                {group.label && (
                  <h3 className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-red">{group.label}</h3>
                )}
                <ul className="md:grid md:grid-cols-2 md:gap-x-8">
                  {group.items.map((item) => (
                    <Item key={item.name} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <div className="mt-10 space-y-1 text-center text-xs text-ink/50">
          <p>s.q. = secondo quotazione del pescato del giorno · coperto e servizio come da carta in sala.</p>
          <p>Allergie o intolleranze? Chiedi al personale: ti indicheremo gli allergeni di ogni piatto.</p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-[2rem] bg-ink texture-wood p-8 text-center text-cream">
          <p className="font-script text-4xl">Hai già l'acquolina?</p>
          <a
            href={siteInfo.bookingUrl}
            className="inline-flex items-center gap-2 rounded-full bg-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-cta transition hover:bg-red-deep"
          >
            <Phone size={16} /> Prenota: {siteInfo.phone}
          </a>
        </div>
      </section>

      {!query && (
        <div id="cat-feste" className="scroll-mt-[120px]">
          <Feste />
        </div>
      )}
    </>
  )
}
