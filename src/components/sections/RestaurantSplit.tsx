import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

interface SplitProps {
  img: string
  alt: string
  eyebrow: string
  title: string
  text: string
  reverse?: boolean
}

function Split({ img, alt, eyebrow, title, text, reverse }: SplitProps) {
  return (
    <div className={`grid items-center gap-0 overflow-hidden md:grid-cols-2 ${reverse ? 'md:[direction:rtl]' : ''}`}>
      <div className="h-[340px] overflow-hidden md:h-[500px] [direction:ltr]">
        <img src={img} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <Reveal className="[direction:ltr]">
        <div className="px-6 py-12 md:px-14 md:py-0">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-red">{eyebrow}</span>
          <h3 className="font-serif text-3xl md:text-4xl">{title}</h3>
          <p className="mt-5 text-lg font-light leading-relaxed text-ink/75">{text}</p>
        </div>
      </Reveal>
    </div>
  )
}

export function RestaurantSplit() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
      <SectionHeading
        eyebrow="Non solo pizza"
        title="Dalla pizza al pesce, fino alla griglia"
        className="mb-16"
      />
      <div className="space-y-12 md:space-y-0">
        <Split
          img="/images/fish/grigliata-pesce.webp"
          alt="Pesce fresco alla griglia"
          eyebrow="Il mare in tavola"
          title="Il pescato del giorno, alla griglia"
          text="Pesce fresco, frutti di mare e primi preparati al momento: dallo scoglio all’astice, fino alle grigliate. Cotture semplici e sapori del Mediterraneo, ogni giorno."
        />
        <Split
          reverse
          img="/images/meat/grigliata-mista.webp"
          alt="Grigliata mista di carne alla brace"
          eyebrow="La brace"
          title="Carne, tradizione e sapori decisi"
          text="Tagliate, bistecche e grigliate miste cotte sulla brace, insieme ai grandi classici della cucina italiana. Il calore del focolare in ogni piatto."
        />
      </div>
    </section>
  )
}
