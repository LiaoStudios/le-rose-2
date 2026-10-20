// Dati del menu, separati dal frontend per una facile modifica.
// Fonti: menù stampati del locale (circa 3 anni fa, fotografati dal cliente) per
// antipasti, primi, secondi di terra e contorni, con i loro prezzi.
// Pizze, bevande e dessert NON hanno una fonte: sono rappresentativi.
// I piatti delle foto nuove (ott. 2026) non hanno prezzo e non lo mostrano.
// TODO(cliente): far confermare prezzi e disponibilità attuali al titolare.

export interface MenuItem {
  name: string
  description?: string
  /** vuoto = prezzo non mostrato; 's.q.' = secondo quotazione del pescato */
  price?: string
  allergens?: string[]
  image?: string
  tag?: 'novità' | 'specialità' | 'vegetariano'
}

export interface MenuGroup {
  /** sottocategoria opzionale, es. Di terra / Di mare */
  label?: string
  items: MenuItem[]
}

export interface MenuCategory {
  id: string
  title: string
  blurb?: string
  groups: MenuGroup[]
}

export const menu: MenuCategory[] = [
  {
    id: 'antipasti',
    title: 'Antipasti',
    blurb: 'Dalla terra al mare, per iniziare come si deve.',
    groups: [
      {
        label: 'Di terra',
        items: [
          { name: 'Salumi misti', description: 'Selezione di affettati locali.', price: '€7,00' },
          { name: 'Prosciutto crudo', description: 'Crudo stagionato tagliato al momento.', price: '€7,00' },
          { name: 'Prosciutto e melone', description: 'Il classico dolce-salato dell’estate.', price: '€7,50' },
          { name: 'Prosciutto e bufala', description: 'Crudo e mozzarella di bufala campana.', price: '€9,50', image: '/images/antipasti/prosciutto-bufala.webp' },
          { name: 'Bresaola, rucola e grana', description: 'Con zucchine grigliate e pomodorini.', image: '/images/meat/bresaola.webp' },
        ],
      },
      {
        label: 'Di mare',
        items: [
          { name: 'Antipasto misto mare', description: 'Selezione di mare caldo e freddo.', price: '€12,00', image: '/images/fish/antipasto-mare.webp', tag: 'specialità' },
          { name: 'Insalata di mare', description: 'Alici marinate, salmone, gamberetti e polpo.', image: '/images/fish/insalata-mare.webp' },
          { name: 'Insalata di mare nel cestino', description: 'Servita nel cestino di pasta di pizza.', image: '/images/fish/insalata-mare-cestino.webp' },
          { name: 'Polpa di granchio fantasia', description: 'Polpa di granchio con salsa e verdure.', price: '€10,00' },
          { name: 'Cozze alla marinara', description: 'Cozze, pomodorini e prezzemolo.', price: '€10,00', image: '/images/fish/cozze.webp' },
          { name: 'Vongole veraci alla marinara', description: 'Vongole veraci saltate, aglio e prezzemolo.', price: '€12,00' },
          { name: 'Alici marinate', description: 'Alici fresche marinate al limone.', price: '€8,00' },
        ],
      },
    ],
  },
  {
    id: 'primi',
    title: 'Primi',
    blurb: 'Pasta fresca, risotti e i grandi classici di terra e di mare.',
    groups: [
      {
        label: 'Di terra',
        items: [
          { name: 'Penne all’arrabbiata', description: 'Pomodoro, aglio e peperoncino.', price: '€8,00' },
          { name: 'Orecchiette salsiccia e broccoli', description: 'Con broccoli e salsiccia saltata.', price: '€9,00' },
          { name: 'Spaghetti alla carbonara', description: 'Uovo, guanciale e pecorino.', price: '€9,00' },
          { name: 'Gnocchi alla sorrentina', description: 'Pomodoro, fior di latte e basilico.', price: '€9,00' },
          { name: 'Maccheroncini panna, prosciutto e piselli', description: 'Cremosi e avvolgenti.', price: '€9,00' },
          { name: 'Pappardelle ai porcini', description: 'Pasta fresca ai funghi porcini.', price: '€10,00', image: '/images/pasta/tagliatelle-funghi.webp' },
          { name: 'Tortellini alla panna', description: 'Tortellini di sfoglia fresca.', price: '€10,00', image: '/images/pasta/tortellini-panna.webp' },
          { name: 'Tortelloni al ragù', description: 'Tortelloni fatti in casa al ragù.', price: '€10,00' },
          { name: 'Tortelloni al gorgonzola', description: 'Con crema di gorgonzola.', price: '€10,00' },
          { name: 'Tortelloni speck e funghi', description: 'Speck croccante e funghi.', price: '€10,00' },
          { name: 'Tagliatelle al ragù', description: 'Sfoglia fresca al ragù bolognese.', price: '€9,00' },
          { name: 'Tagliatelle speck e funghi', description: 'Con speck e funghi trifolati.', price: '€10,00' },
          { name: 'Gramigna alla salsiccia', description: 'Il classico primo emiliano.', price: '€9,00' },
          { name: 'Risotto alla valdostana', description: '4 formaggi e speck.', price: '€10,00' },
          { name: 'Risotto ai funghi porcini', description: 'Mantecato ai porcini.', price: '€10,00' },
          { name: 'Spaghetti Vesuvio', description: 'Pomodorini, bufala e peperoncino.', price: '€10,00' },
        ],
      },
      {
        label: 'Di mare',
        items: [
          { name: 'Spaghetti allo scoglio', description: 'Cozze, vongole, gamberoni e pomodorino.', price: '€14,00', image: '/images/fish/scoglio-gamberoni.webp', tag: 'specialità' },
          { name: 'Spaghetti all’astice', description: 'Astice fresco e pomodoro.', price: '€18,00', image: '/images/fish/spaghetti-astice.webp', tag: 'specialità' },
          { name: 'Spaghetti alle vongole veraci', description: 'Vongole veraci, aglio e prezzemolo.', price: '€12,00' },
          { name: 'Spaghetti al tonno', description: 'Tonno, pomodoro e olive.', price: '€8,50' },
          { name: 'Tagliolini al salmone e caviale', description: 'Cremosi con salmone e caviale.', price: '€10,00' },
          { name: 'Risotto con polpa di granchio e pesce spada', description: 'Mantecato terra e mare.', price: '€10,00' },
          { name: 'Strozzapreti ai gamberetti', description: 'Con gamberetti e pomodorino.', price: '€10,00' },
          { name: 'Rigatoni con gamberoni e cozze', description: 'Gamberoni, cozze e sughetto.', price: '€12,00', image: '/images/fish/pasta-mare.webp' },
          { name: 'Risotto alla pescatora', description: 'Risotto ai frutti di mare.', price: '€13,00' },
          { name: 'Gnocchetti terra e mare', description: 'Cime di rapa e vongole.', price: '€10,00', image: '/images/fish/gnocchi-vongole.webp' },
          { name: 'Calamarata vietrese', price: '€14,00' },
          { name: 'Paccheri mare e monti', description: 'Cozze, vongole e porcini.', price: '€12,00' },
          { name: 'Scialatielli anem e core', price: '€14,00' },
        ],
      },
    ],
  },
  {
    id: 'pesce',
    title: 'Pesce',
    blurb: 'Il pescato del giorno, alla griglia, al forno o in frittura.',
    groups: [
      {
        items: [
          { name: 'Grigliata mista di pesce', description: 'Orata, pesce spada, gamberone e spiedino.', price: 's.q.', image: '/images/fish/grigliata-mare.webp', tag: 'specialità' },
          { name: 'Frittura del Golfo', description: 'Calamari, gamberi e paranza su nido di spaghetti croccanti.', price: 's.q.', image: '/images/fish/frittura-nido.webp', tag: 'specialità' },
          { name: 'Frittura nel cestino', description: 'Frittura mista e zucchine nel cestino di pizza.', price: 's.q.', image: '/images/fish/frittura-cestino.webp' },
          { name: 'Orata all’acqua pazza', description: 'Con gamberoni, pomodorini e prezzemolo.', price: 's.q.', image: '/images/fish/orata-acqua-pazza.webp' },
          { name: 'Branzino alla griglia', description: 'Con radicchio, zucchine e verdure alla brace.', price: 's.q.', image: '/images/fish/branzino-griglia.webp' },
          { name: 'Orata alla griglia', description: 'Semplice, con limone e insalata.', price: 's.q.', image: '/images/fish/orata-griglia.webp' },
          { name: 'Orata al cartoccio', description: 'Cotta al forno con patate.', price: 's.q.', image: '/images/fish/orata-cartoccio.webp' },
          { name: 'Spiedini di calamari gratinati', description: 'Panatura alle erbe, rucola e pomodoro.', price: 's.q.', image: '/images/fish/spiedini-calamari.webp' },
          { name: 'Gamberoni alla griglia', description: 'Gamberoni freschi appena scottati.', price: 's.q.' },
          { name: 'Pesce spada alla griglia', description: 'Trancio di spada con rucola e limone.', price: 's.q.' },
        ],
      },
    ],
  },
  {
    id: 'griglia',
    title: 'Secondi di terra',
    blurb: 'Carne alla griglia e i classici di sempre.',
    groups: [
      {
        items: [
          { name: 'Fiorentina', description: 'Alla brace, con rucola, carote e pomodoro.', image: '/images/meat/fiorentina.webp', tag: 'specialità' },
          { name: 'Bistecca ai ferri', price: '€7,50' },
          { name: 'Bistecca alla pizzaiola', price: '€8,50' },
          { name: 'Scaloppine ai funghi o al limone', price: '€7,50' },
          { name: 'Scaloppine ai funghi porcini', price: '€10,00' },
          { name: 'Braciola di maiale', price: '€7,50', image: '/images/meat/braciola.webp' },
          { name: 'Salsiccia ai ferri', price: '€7,50' },
          { name: 'Costata di manzo', price: '€14,00' },
          { name: 'Filetto ai ferri', price: '€16,00' },
          { name: 'Filetto al pepe verde', price: '€18,00' },
          { name: 'Grigliata mista di carne', price: '€10,00', image: '/images/meat/grigliata-mista.webp' },
          { name: 'Cotoletta alla milanese', price: '€7,50' },
          { name: 'Cotoletta alla bolognese', price: '€10,00' },
          { name: 'Spiedini misti di carne', price: '€7,50' },
          { name: 'Carpaccio con rucola e grana', price: '€12,00', image: '/images/meat/bresaola.webp' },
          { name: 'Omelette con formaggio e prosciutto', price: '€7,00' },
          { name: 'Mozzarella ripiena', price: '€8,50' },
          { name: 'Tagliata di manzo', description: 'Con rucola e scaglie di grana.', image: '/images/meat/tagliata.webp' },
        ],
      },
    ],
  },
  {
    id: 'pizze',
    title: 'Pizze',
    blurb: 'Impasto a lunga lievitazione, pomodoro e fior di latte.',
    groups: [
      {
        label: 'Classiche',
        items: [
          { name: 'Margherita', description: 'Pomodoro, fior di latte e basilico.', price: '€6,00', image: '/images/pizza/pomodorini.webp' },
          { name: 'Marinara', description: 'Pomodoro, aglio, origano e olio EVO.', price: '€5,50' },
          { name: 'Napoli', description: 'Pomodoro, mozzarella, acciughe e capperi.', price: '€7,50' },
          { name: 'Diavola', description: 'Pomodoro, mozzarella e salame piccante.', price: '€8,00', image: '/images/pizza/diavola.webp' },
          { name: 'Prosciutto e funghi', description: 'Pomodoro, mozzarella, prosciutto cotto e funghi.', price: '€8,50', image: '/images/pizza/prosciutto.webp' },
          { name: 'Capricciosa', description: 'Prosciutto, funghi, carciofi e olive.', price: '€9,00' },
        ],
      },
      {
        label: 'Speciali',
        items: [
          { name: 'Quattro formaggi', description: 'Mozzarella, gorgonzola, grana e provola.', price: '€9,00', image: '/images/pizza/margherita.webp' },
          { name: 'Ortolana', description: 'Verdure grigliate di stagione.', price: '€9,00', image: '/images/pizza/melanzane.webp', tag: 'vegetariano' },
          { name: 'Bufala e crudo', description: 'Bufala, prosciutto crudo e rucola.', price: '€10,00' },
          { name: 'Le Rose', description: 'La nostra pizza speciale della casa.', price: '€12,00', image: '/images/pizza/gourmet.webp', tag: 'specialità' },
          { name: 'Metà e metà', description: 'Due gusti sulla stessa pizza: chiedi pure in sala.', image: '/images/pizza/mista.webp' },
        ],
      },
    ],
  },
  {
    id: 'contorni',
    title: 'Contorni',
    groups: [
      {
        items: [
          { name: 'Patatine fritte', price: '€3,00' },
          { name: 'Insalata mista', price: '€3,50' },
          { name: 'Verdure alla griglia', price: '€4,50', image: '/images/contorni/verdure-grigliate.webp', tag: 'vegetariano' },
          { name: 'Melanzane al sugo', price: '€3,50', tag: 'vegetariano' },
          { name: 'Verdure lesse varie', price: '€3,50', image: '/images/contorni/verdure-lesse.webp', tag: 'vegetariano' },
          { name: 'Verdure dello Chef', price: '€5,00', tag: 'vegetariano' },
        ],
      },
    ],
  },
  {
    id: 'dessert',
    title: 'Dessert',
    blurb: 'Dolci della tradizione napoletana e non solo.',
    groups: [
      {
        items: [
          { name: 'Torta al pistacchio', description: 'Con crema di pistacchio e granella.', image: '/images/dessert/torta-pistacchio.webp' },
          { name: 'Torta alla nocciola', description: 'Crema alla ricotta, nocciole e cioccolato.', image: '/images/dessert/torta-nocciola.webp' },
          { name: 'Spiedini di frutta fresca', description: 'Frutta di stagione, d’estate.', image: '/images/dessert/frutta.webp' },
          { name: 'Tiramisù al mascarpone', price: '€5,00' },
          { name: 'Pastiera napoletana', description: 'Grano, ricotta e cubetti d’arancia.', price: '€5,00' },
          { name: 'Delizia d’Amalfi al limone', description: 'Pan di babà con crema al limone.', price: '€5,50', image: '/images/dessert/dolce.webp', tag: 'specialità' },
          { name: 'Cheesecake', description: 'Ai frutti di bosco.', price: '€5,50', image: '/images/dessert/cheesecake.webp' },
          { name: 'Cassata siciliana', description: 'Ricotta, frutta candita e cioccolato.', price: '€5,00' },
          { name: 'Profiterol al cioccolato', price: '€5,00' },
          { name: 'Torta ricotta e pera', price: '€5,00' },
          { name: 'Tartufo artigianale', description: 'Bianco o nero.', price: '€4,50' },
        ],
      },
    ],
  },
  {
    id: 'bevande',
    title: 'Bevande',
    groups: [
      {
        label: 'Vini & birre',
        items: [
          { name: 'Vino della casa (½ l)', price: '€6,00' },
          { name: 'Vino in bottiglia', description: 'Carta dei vini disponibile in sala.', price: 'da €12,00' },
          { name: 'Birra media', price: '€4,50' },
        ],
      },
      {
        label: 'Analcoliche',
        items: [
          { name: 'Acqua (½ l / 1 l)', price: '€1,50 / €2,50' },
          { name: 'Bibite', price: '€3,00' },
          { name: 'Caffè', price: '€1,50' },
          { name: 'Limoncello / Amari', price: '€3,00' },
        ],
      },
    ],
  },
]
