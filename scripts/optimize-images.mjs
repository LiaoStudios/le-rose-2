// Ottimizza le foto reali di "Le Rose 2" (Ristorante Pizzeria, Castel Maggiore)
// selezionate dalle raccolte Facebook / Google Business, in public/images/*.
// Esegui con: npm run images
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve('.')
const FB = path.join(ROOT, 'Facebook')
const GB = path.join(ROOT, 'GoogleBusiness')

const fb = (n) => path.join(FB, `lerose2_facebook_${String(n).padStart(2, '0')}.jpg`)
const gb = (n) => path.join(GB, `lerose2_google_${String(n).padStart(2, '0')}.jpg`)

const OUT = path.resolve('public/images')

// Selezione curata (fonte -> categoria/nome). Scelte per qualità e soggetto.
const SELECTION = [
  // --- Facciata / esterno ---
  { src: gb(1), cat: 'facade', name: 'esterno-giorno' },   // veranda/gazebo esterno
  { src: gb(45), cat: 'facade', name: 'insegna' },         // insegna Trattoria Pizzeria
  { src: gb(82), cat: 'facade', name: 'ingresso' },        // ingresso locale

  // --- Interni / ambiente ---
  { src: gb(7), cat: 'interior', name: 'sala' },           // sala principale
  { src: gb(43), cat: 'interior', name: 'sala-legno' },    // sala con travi
  { src: gb(58), cat: 'interior', name: 'veranda' },       // veranda vista giardino
  { src: fb(85), cat: 'interior', name: 'banchetto' },     // sala allestita banchetto

  // --- Brand: murale in ceramica "Le Rose Due" (costiera amalfitana) ---
  { src: gb(91), cat: 'brand', name: 'murale-amalfi' },

  // --- Pizza ---
  { src: gb(105), cat: 'pizza', name: 'margherita' },      // pizza classica
  { src: gb(5), cat: 'pizza', name: 'diavola' },           // pizza salame/diavola
  { src: gb(72), cat: 'pizza', name: 'melanzane' },        // pizza melanzane grigliate
  { src: gb(110), cat: 'pizza', name: 'gourmet' },         // pizza gourmet
  { src: gb(114), cat: 'pizza', name: 'prosciutto' },      // pizza prosciutto
  { src: gb(108), cat: 'pizza', name: 'pomodorini' },      // pizza pomodorini

  // --- Pesce / mare ---
  { src: gb(6), cat: 'fish', name: 'pasta-mare' },         // pasta ai frutti di mare (hero)
  { src: gb(10), cat: 'fish', name: 'spaghetti-scoglio' },
  { src: gb(65), cat: 'fish', name: 'spaghetti-astice' },  // spaghetti all'astice
  { src: gb(96), cat: 'fish', name: 'gnocchi-vongole' },
  { src: fb(4), cat: 'fish', name: 'grigliata-pesce', cropBottom: 0.15 }, // grigliata di pesce (ritaglio base per togliere lo sfondo)
  { src: fb(41), cat: 'fish', name: 'pesce-al-forno' },    // pesce intero impiattato
  { src: gb(98), cat: 'fish', name: 'cozze' },
  { src: fb(72), cat: 'fish', name: 'antipasto-mare' },

  // --- Carne / griglia ---
  { src: gb(9), cat: 'meat', name: 'bistecca' },           // bistecca alla griglia
  { src: gb(59), cat: 'meat', name: 'grigliata-mista' },   // grigliata mista carne+verdure
  { src: fb(42), cat: 'meat', name: 'tagliata' },          // tagliata di manzo

  // --- Primi di terra / pasta ---
  { src: gb(4), cat: 'pasta', name: 'tagliatelle-funghi' },
  { src: gb(40), cat: 'pasta', name: 'tortellini-brodo' },
  { src: gb(49), cat: 'pasta', name: 'tortellini-panna' },

  // --- Antipasti ---
  { src: gb(100), cat: 'antipasti', name: 'prosciutto-bufala' },
  { src: gb(13), cat: 'antipasti', name: 'fritto-misto' },

  // --- Dessert ---
  { src: gb(61), cat: 'dessert', name: 'dolce' },
  { src: gb(93), cat: 'dessert', name: 'cheesecake' },
]

// Hero: pasta ai frutti di mare (immagine più grande e invitante).
const HERO = gb(6)
// Immagine per murale/brand usata anche come og-image di riserva.
const BRAND = gb(91)

async function run() {
  await mkdir(OUT, { recursive: true })
  const cats = [...new Set(SELECTION.map((s) => s.cat))]
  for (const c of cats) await mkdir(path.join(OUT, c), { recursive: true })

  let ok = 0
  let missing = 0
  for (const { src, cat, name, cropBottom } of SELECTION) {
    if (!existsSync(src)) {
      console.warn('MANCANTE:', src)
      missing++
      continue
    }
    const base = path.join(OUT, cat, name)
    // opzionale: ritaglia una porzione inferiore dell'immagine (0–1)
    const prep = async () => {
      let img = sharp(src).rotate()
      if (cropBottom) {
        const meta = await sharp(src).rotate().metadata()
        const h = Math.round(meta.height * (1 - cropBottom))
        img = sharp(src).rotate().extract({ left: 0, top: 0, width: meta.width, height: h })
      }
      return img
    }
    // principale (max 1600w) + piccola (max 800w) per srcset
    await (await prep()).resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 }).toFile(`${base}.webp`)
    await (await prep()).resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 78 }).toFile(`${base}-sm.webp`)
    ok++
  }

  // Hero (pasta ai frutti di mare) ad alta risoluzione
  if (existsSync(HERO)) {
    await sharp(HERO).rotate().resize({ width: 2000, withoutEnlargement: true }).webp({ quality: 82 })
      .toFile(path.join(OUT, 'fish', 'hero.webp'))
    await sharp(HERO).rotate().resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 78 })
      .toFile(path.join(OUT, 'fish', 'hero-sm.webp'))
  }

  // OG image dal murale/brand (identità del locale)
  const ogSrc = existsSync(BRAND) ? BRAND : HERO
  await sharp(ogSrc).rotate().resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 })
    .toFile(path.resolve('public/og-image.jpg'))

  console.log(`Fatto. ${ok} immagini ottimizzate, ${missing} mancanti.`)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
