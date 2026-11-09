// Menu completo di Le Rose 2, trascritto dai menù stampati fotografati dal cliente
// (novembre 2026): tutti i piatti e tutti i prezzi sono quelli della carta.
// Le foto dei piatti non compaiono nel menu digitale (scelta del cliente).

export interface MenuItem {
  name: string
  /** ingredienti o descrizione, così come stampati in carta */
  description?: string
  /** prezzo già formattato; 's.q.' = secondo quotazione del pescato */
  price?: string
  tag?: 'novità' | 'specialità' | 'vegetariano'
}

export interface MenuGroup {
  /** sottocategoria opzionale, es. Di terra / Di mare */
  label?: string
  /** nota a margine del gruppo, es. l'aggiunta di bufala intera */
  note?: string
  items: MenuItem[]
}

export interface MenuCategory {
  id: string
  title: string
  blurb?: string
  /** nota a piè di categoria */
  note?: string
  groups: MenuGroup[]
}

const freschezza = 'Alcuni prodotti non sono disponibili freschi per esigenze di mercato e potrebbero essere di natura congelata.'

export const menu: MenuCategory[] = [
  {
    id: 'antipasti',
    title: 'Antipasti',
    blurb: 'Dalla terra al mare, per iniziare come si deve.',
    note: freschezza,
    groups: [
      {
        label: 'Di terra',
        items: [
          { name: 'Salumi misti', price: '€7,00' },
          { name: 'Prosciutto crudo', price: '€7,00' },
          { name: 'Prosciutto e melone', price: '€7,50' },
          { name: 'Prosciutto e bufala', price: '€9,50' },
        ],
      },
      {
        label: 'Di mare',
        items: [
          { name: 'Antipasto misto mare', price: '€13,00' },
          { name: 'Cozze alla marinara', price: '€10,00' },
          { name: 'Vongole veraci alla marinara', price: '€13,00' },
          { name: 'Alici marinate', price: '€8,00' },
        ],
      },
    ],
  },
  {
    id: 'primi',
    title: 'Primi piatti',
    blurb: 'Pasta, tortelli e risotti: i grandi classici di terra e di mare.',
    note: freschezza,
    groups: [
      {
        label: 'Di terra',
        items: [
          { name: 'Penne all’arrabbiata', price: '€7,00' },
          { name: 'Orecchiette salsiccia e broccoli', price: '€8,50' },
          { name: 'Spaghetti alla carbonara', price: '€8,00' },
          { name: 'Pappardelle ai porcini', price: '€10,00' },
          { name: 'Tortellini alla panna o ragù', price: '€9,00' },
          { name: 'Tortelloni al ragù o gorgonzola', price: '€9,00' },
          { name: 'Tortelloni speck e funghi', price: '€9,00' },
          { name: 'Tagliatelle al ragù', price: '€8,00' },
          { name: 'Tagliatelle speck e funghi', price: '€8,00' },
          { name: 'Gramigna alla salsiccia', price: '€8,00' },
          { name: 'Risotto alla valdostana', description: '4 formaggi e speck', price: '€10,00' },
          { name: 'Spaghetti Vesuvio', description: 'Pomodorini, bufala e peperoncino', price: '€10,00' },
        ],
      },
      {
        label: 'Di mare',
        items: [
          { name: 'Spaghetti allo scoglio', price: '€14,00', tag: 'specialità' },
          { name: 'Spaghetti alle vongole veraci', price: '€12,00' },
          { name: 'Spaghetti al tonno', price: '€10,00' },
          { name: 'Tagliolini al salmone e caviale', price: '€12,00' },
          { name: 'Strozzapreti ai gamberetti', price: '€12,00' },
          { name: 'Rigatoni con gamberoni e cozze', price: '€14,00' },
          { name: 'Risotto alla pescatora', price: '€13,00' },
          { name: 'Gnocchetti terra e mare', description: 'Cime di rapa e vongole', price: '€12,00' },
          { name: 'Paccheri mare e monti', description: 'Cozze, vongole e porcini', price: '€14,00' },
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
          { name: 'Bistecca ai ferri', price: '€7,50' },
          { name: 'Scaloppine ai funghi', price: '€7,50' },
          { name: 'Scaloppine al limone', price: '€7,50' },
          { name: 'Braciola di maiale', price: '€7,50' },
          { name: 'Salsiccia ai ferri', price: '€7,50' },
          { name: 'Cotoletta alla milanese', price: '€7,50' },
          { name: 'Spiedini di carne', price: '€8,50' },
          { name: 'Grigliata mista di carne', price: '€12,00' },
          { name: 'Cotoletta alla bolognese', price: '€12,00' },
          { name: 'Carpaccio con rucola e grana', price: '€15,00' },
          { name: 'Costata di manzo', price: '€16,00' },
          { name: 'Filetto ai ferri', price: '€18,00' },
          { name: 'Filetto al pepe verde', price: '€20,00' },
        ],
      },
    ],
  },
  {
    id: 'pesce',
    title: 'Secondi di mare',
    blurb: 'Il pescato del giorno, alla griglia, al forno o in frittura.',
    note: freschezza,
    groups: [
      {
        items: [
          { name: 'Pesce fresco del giorno', description: 'Chiedi in sala cosa c’è oggi', price: 's.q.' },
          { name: 'Grigliata mista di pesce', price: '€22,00', tag: 'specialità' },
          { name: 'Orata Amalfitana', price: '€22,00' },
          { name: 'Orata all’acqua pazza', price: '€20,00' },
          { name: 'Gamberoni alla griglia', price: '€18,00' },
          { name: 'Spigola al cartoccio', price: '€18,00' },
          { name: 'Frittura mista o frittura del Golfo', price: '€15,00', tag: 'specialità' },
          { name: 'Orata o branzino', description: 'Alla griglia', price: '€14,00' },
          { name: 'Pesce spada alla griglia o gratinato', price: '€14,00' },
          { name: 'Spiedini misti', price: '€14,00' },
        ],
      },
    ],
  },
  {
    id: 'insalatone',
    title: 'Insalatone',
    blurb: 'Fresche e abbondanti, per chi vuole stare leggero.',
    groups: [
      {
        items: [
          {
            name: 'Vecchia Parma',
            description: 'Insalata iceberg, radicchio julienne, prosciutto crudo a listarelle, scaglie di grana, glassa di aceto balsamico',
            price: '€10,00',
          },
          { name: 'Texana', description: 'Insalata iceberg, tonno, fagioli, cipolla', price: '€9,00' },
        ],
      },
    ],
  },
  {
    id: 'pizze',
    title: 'Pizze',
    blurb: 'Dalla Margherita alle speciali della casa.',
    groups: [
      {
        label: 'Pizze speciali',
        note: 'Aggiunta di bufala intera €7,00',
        items: [
          { name: 'Pizza Bologna', description: 'Mozzarella, stracchino, mortadella, noci', price: '€10,00' },
          { name: 'Pizza Modena', description: 'Mozzarella, radicchio, pancetta, scaglie di grana, glassa di aceto balsamico', price: '€10,00' },
          { name: 'Ortolana', description: 'Pomodoro, mozzarella, melanzane, peperoni, patate, zucchine al forno', price: '€10,00' },
          { name: 'Calzone Napoli', description: 'Pomodoro, mozzarella, salame piccante, ricotta, pepe', price: '€10,00' },
          { name: 'Pizza Lucia', description: 'Pomodoro, bufala, pomodorini, basilico, cornicione ripieno di ricotta', price: '€10,00' },
          { name: 'Sfiziosa', description: 'Mozzarella, pomodorini, stracciatella, acciughe, basilico', price: '€10,00' },
          { name: 'Aurora', description: 'Crema di formaggi, mozzarella, spinaci, pancetta, noci', price: '€10,00' },
          { name: 'Pizza con bufala intera', price: '€13,00' },
        ],
      },
      {
        label: 'Le nostre pizze',
        note: 'Aggiunta di bufala intera €7,00',
        items: [
          { name: 'Margherita', description: 'Pomodoro e mozzarella', price: '€6,00' },
          { name: 'Saracena', description: 'Pomodoro, mozzarella, origano', price: '€8,00' },
          { name: 'Funghi', description: 'Pomodoro, mozzarella, funghi', price: '€7,00' },
          { name: 'Prosciutto', description: 'Pomodoro, mozzarella, prosciutto', price: '€7,00' },
          { name: 'Regina', description: 'Mozzarella, provola, speck', price: '€8,50' },
          { name: 'Melanzane', description: 'Pomodoro, mozzarella, melanzane', price: '€8,00' },
          { name: 'Salsiccia', description: 'Pomodoro, mozzarella, salsiccia', price: '€7,50' },
          { name: 'Speck', description: 'Pomodoro, mozzarella, speck', price: '€7,50' },
          { name: 'Wurstel', description: 'Pomodoro, mozzarella, wurstel', price: '€7,00' },
          { name: 'Radicchio', description: 'Pomodoro, mozzarella, radicchio', price: '€7,00' },
          { name: 'Gorgonzola', description: 'Pomodoro, mozzarella, gorgonzola', price: '€8,00' },
          { name: 'Prosciutto e funghi', description: 'Pomodoro, mozzarella, prosciutto, funghi', price: '€7,50' },
          { name: 'Prosciutto e salsiccia', description: 'Pomodoro, mozzarella, prosciutto, salsiccia', price: '€7,50' },
          { name: 'Funghi e salsiccia', description: 'Pomodoro, mozzarella, funghi, salsiccia', price: '€7,50' },
          { name: 'Tonno e cipolla', description: 'Pomodoro, mozzarella, tonno, cipolla', price: '€8,50' },
          { name: 'Salsiccia e friarielli', description: 'Mozzarella, salsiccia e friarielli (senza pomodoro)', price: '€8,50' },
          { name: 'Verdure grigliate', description: 'Pomodoro, mozzarella, verdure grigliate', price: '€8,50' },
          { name: 'Diavola', description: 'Pomodoro, mozzarella, salame piccante', price: '€8,00' },
          { name: 'Funghi porcini', description: 'Pomodoro, mozzarella, funghi porcini', price: '€9,00' },
          { name: 'Pugliese', description: 'Pomodoro, mozzarella, cipolla', price: '€7,00' },
          { name: 'Tirolese', description: 'Pomodoro, mozzarella, funghi, speck', price: '€8,50' },
          { name: 'Contadina', description: 'Pomodoro, mozzarella, salame piccante, salsiccia, cipolla', price: '€8,50' },
          { name: '4 Stagioni', description: 'Pomodoro, mozzarella, funghi, prosciutto, salsiccia, carciofi', price: '€8,50' },
          { name: 'Capricciosa', description: 'Pomodoro, mozzarella, prosciutto, carciofi, funghi', price: '€8,00' },
          { name: 'Napoletana', description: 'Pomodoro, mozzarella, acciughe, origano', price: '€7,00' },
          { name: 'Romana', description: 'Pomodoro, mozzarella, acciughe, capperi, origano', price: '€7,00' },
          { name: 'Siciliana', description: 'Pomodoro, acciughe, capperi, olive, origano', price: '€7,00' },
          { name: '4 Formaggi', description: 'Pomodoro, mozzarella, gorgonzola, pecorino, emmental, grana', price: '€8,50' },
          { name: 'Italia', description: 'Pomodoro, mozzarella, speck, rucola, grana', price: '€8,50' },
          { name: 'Calzone N.', description: 'Pomodoro, mozzarella, prosciutto', price: '€7,50' },
          { name: 'Calzone farcito', description: 'Pomodoro, mozzarella, prosciutto, funghi, carciofi', price: '€8,50' },
          { name: 'Le Rose 2', description: 'Pomodoro, mozzarella, carciofi, prosciutto, peperoni, wurstel, olive', price: '€8,50', tag: 'specialità' },
          { name: 'Valdostana', description: 'Pomodoro, mozzarella, prosciutto, funghi, formaggi', price: '€8,50' },
          { name: 'Atomica', description: 'Pomodoro, mozzarella, prosciutto, funghi, carciofi, salsiccia, uovo, grana', price: '€9,00' },
          { name: 'Montanara', description: 'Pomodoro, mozzarella, wurstel, pancetta, cipolla', price: '€8,50' },
          { name: 'Mike', description: 'Pomodoro, mozzarella, speck, melanzana, grana', price: '€8,50' },
          { name: 'Speciale', description: 'Pomodoro, mozzarella, bufala, salame piccante, salsiccia', price: '€9,50' },
          { name: 'Frutti di mare', description: 'Pomodoro, frutti di mare', price: '€11,00' },
          { name: 'Frutti di mare con mozzarella', description: 'Con aggiunta di mozzarella', price: '€12,00' },
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
          { name: 'Patatine fritte', price: '€3,50' },
          { name: 'Insalata mista', price: '€4,00' },
          { name: 'Verdure alla griglia', price: '€4,50' },
          { name: 'Melanzane al sugo', price: '€4,50' },
          { name: 'Verdure lesse varie', price: '€4,50' },
          { name: 'Verdure dello Chef', price: '€6,00' },
        ],
      },
    ],
  },
  {
    id: 'dessert',
    title: 'Dolci',
    blurb: 'Le nostre dolcezze, fatte per chiudere in bellezza.',
    groups: [
      {
        label: 'Da scegliere',
        items: [
          { name: 'Dolci della casa', description: 'Chiedi in sala quelli di oggi', price: '€6,00' },
          { name: 'Tris di dolci', description: 'Tre assaggi a scelta', price: '€9,00' },
          { name: 'Sorbetto', description: 'Limone o caffè', price: '€4,00' },
        ],
      },
      {
        label: 'Le nostre dolcezze',
        items: [
          { name: 'Babà al rhum' },
          { name: 'Profiterol', description: 'Latte o fondente' },
          { name: 'Delizia al limone' },
          { name: 'Torta ricotta e pera' },
          { name: 'Tartufo bianco o nero', description: 'Su richiesta affogato' },
          { name: 'Tiramisù' },
          { name: 'Zuppa inglese' },
          { name: 'Pastiera napoletana' },
          { name: 'Cheesecake', description: 'Frutti di bosco, pistacchio o caramello' },
          { name: 'Gelato alla crema' },
          { name: 'Sorbetto al limone o caffè' },
        ],
      },
    ],
  },
  {
    id: 'vini',
    title: 'Vini',
    blurb: 'La carta dei vini in bottiglia. Alla spina trovi anche il vino della casa.',
    groups: [
      {
        label: 'Bianchi',
        items: [
          { name: 'Pignoletto', price: '€12,00' },
          { name: 'Pecorino', price: '€14,00' },
          { name: 'Passerina', price: '€14,00' },
          { name: 'Prosecco', price: '€15,00' },
          { name: 'Falanghina', price: '€18,00' },
        ],
      },
      {
        label: 'Rossi',
        items: [
          { name: 'Chianti', price: '€14,00' },
          { name: 'Sangiovese', price: '€14,00' },
          { name: 'Lambrusco', price: '€14,00' },
          { name: 'Primitivo biologico', price: '€18,00' },
          { name: 'Aglianico', price: '€18,00' },
        ],
      },
    ],
  },
  {
    id: 'bevande',
    title: 'Bevande',
    groups: [
      {
        label: 'Da bere',
        items: [
          { name: 'Acqua in bottiglia di vetro 1 l', price: '€2,00' },
          { name: 'Acqua in bottiglia di plastica 1,5 l', price: '€2,00' },
          { name: 'Birra piccola', price: '€3,00' },
          { name: 'Birra media', price: '€4,00' },
          { name: 'Birra da 66 cl', price: '€4,00' },
          { name: 'Coca-Cola piccola', price: '€3,00' },
          { name: 'Coca-Cola media', price: '€3,50' },
          { name: 'Bibita in lattina', price: '€3,00' },
          { name: 'Vino alla spina ½ l', price: '€4,00' },
          { name: 'Vino alla spina 1 l', price: '€8,00' },
        ],
      },
      {
        label: 'Caffè e amari',
        items: [
          { name: 'Caffè', price: '€2,00' },
          { name: 'Amari', price: '€3,50' },
        ],
      },
    ],
  },
]

/** coperto a persona, come da carta */
export const coperto = '€1,50'
