// Dati del menu, separati dal frontend per una facile modifica.
// Le sezioni Antipasti e Primi (di terra e di mare) sono trascritte dai menù
// reali fotografati. Pizze, secondi di carne/pesce, contorni e dessert sono
// rappresentativi dell'offerta del locale.
// TODO(cliente): verificare prezzi e disponibilità aggiornati.

export interface MenuItem {
  name: string
  description?: string
  price: string
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
        ],
      },
      {
        label: 'Di mare',
        items: [
          { name: 'Antipasto misto mare', description: 'Selezione di mare caldo e freddo.', price: '€12,00', image: '/images/fish/antipasto-mare.webp', tag: 'specialità' },
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
          { name: 'Spaghetti allo scoglio', description: 'Frutti di mare misti e pomodorino.', price: '€14,00', image: '/images/fish/spaghetti-scoglio.webp', tag: 'specialità' },
          { name: 'Spaghetti all’astice', description: 'Astice fresco e pomodoro.', price: '€18,00', image: '/images/fish/spaghetti-astice.webp', tag: 'specialità' },
          { name: 'Spaghetti alle vongole veraci', description: 'Vongole veraci, aglio e prezzemolo.', price: '€12,00' },
          { name: 'Spaghetti al tonno', description: 'Tonno, pomodoro e olive.', price: '€9,00' },
          { name: 'Tagliolini al salmone e caviale', description: 'Cremosi con salmone e caviale.', price: '€10,00' },
          { name: 'Risotto con polpa di granchio e pesce spada', description: 'Mantecato terra e mare.', price: '€10,00' },
          { name: 'Strozzapreti ai gamberetti', description: 'Con gamberetti e pomodorino.', price: '€10,00' },
          { name: 'Rigatoni con gamberoni e cozze', description: 'Gamberoni, cozze e sughetto.', price: '€12,00', image: '/images/fish/pasta-mare.webp' },
          { name: 'Risotto alla pescatora', description: 'Risotto ai frutti di mare.', price: '€13,00' },
          { name: 'Gnocchetti terra e mare', description: 'Cime di rapa e vongole.', price: '€10,00', image: '/images/fish/gnocchi-vongole.webp' },
          { name: 'Paccheri mare e monti', description: 'Cozze, vongole e porcini.', price: '€12,00' },
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
          { name: 'Grigliata mista di pesce', description: 'Pescato del giorno alla griglia.', price: 's.q.', image: '/images/fish/grigliata-pesce.webp', tag: 'specialità' },
          { name: 'Orata all’acqua pazza', description: 'Cotta con pomodorini, olive e capperi.', price: 's.q.', image: '/images/fish/pesce-al-forno.webp' },
          { name: 'Frittura mista', description: 'Calamari, gamberi e verdure in pastella.', price: 's.q.' },
          { name: 'Gamberoni alla griglia', description: 'Gamberoni freschi appena scottati.', price: 's.q.' },
          { name: 'Pesce spada alla griglia', description: 'Trancio di spada con rucola e limone.', price: 's.q.' },
          { name: 'Calamari alla griglia', description: 'Calamari freschi grigliati.', price: 's.q.' },
        ],
      },
    ],
  },
  {
    id: 'griglia',
    title: 'Carne alla griglia',
    blurb: 'Tagli selezionati cotti sulla brace.',
    groups: [
      {
        items: [
          { name: 'Tagliata di manzo', description: 'Con rucola e scaglie di grana.', price: '€16,00', image: '/images/meat/tagliata.webp', tag: 'specialità' },
          { name: 'Grigliata mista di carne', description: 'Tagli misti e salsiccia alla brace.', price: '€18,00', image: '/images/meat/grigliata-mista.webp' },
          { name: 'Bistecca ai ferri', description: 'Bistecca alla griglia.', price: '€15,00', image: '/images/meat/bistecca.webp' },
          { name: 'Filetto di maiale ai funghi porcini', description: 'Filetto con funghi porcini.', price: '€15,00' },
          { name: 'Costata di manzo', description: 'Costata alla brace.', price: '€18,00' },
          { name: 'Salsiccia alla griglia', description: 'Salsiccia nostrana grigliata.', price: '€9,00' },
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
          { name: 'Patate al forno', price: '€4,00' },
          { name: 'Patatine fritte', price: '€4,00' },
          { name: 'Verdure grigliate', price: '€5,00' },
          { name: 'Insalata mista', price: '€4,00' },
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
