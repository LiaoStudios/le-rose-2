# Le Rose 2 — Ristorante & Pizzeria

Sito web per **Le Rose 2** (Ristorante Pizzeria, Via della Costituzione 1/E, Castel Maggiore — BO).
Costruito con Vite + React + TypeScript + Tailwind CSS, partendo dalla base del sito "Le Volpi".

## Sviluppo

```bash
npm install      # se node_modules non è presente
npm run dev      # avvia il server di sviluppo
npm run build    # build di produzione in dist/
npm run preview  # anteprima della build
```

## Immagini

Le foto reali del locale sono nelle cartelle `Facebook/` e `GoogleBusiness/`.
La selezione curata viene ottimizzata in `public/images/` con:

```bash
npm run images
```

La mappatura (quali foto, in quale categoria) è in `scripts/optimize-images.mjs`.

## Contenuti da personalizzare

Tutti i testi/dati sono centralizzati in `src/data/`:

- `siteInfo.ts` — contatti, indirizzo, orari, social. **Telefono e orari sono
  ricavati da schede online: da confermare col cliente.**
- `menu.ts` — menù. Antipasti e primi (terra/mare) sono trascritti dai menù
  reali fotografati; pizze, secondi, contorni e dessert sono rappresentativi:
  verificare prezzi e disponibilità.
- `reviews.ts` — recensioni reali (Google/Sluurpy).
- `gallery.ts` — foto della gallery.

## Note

- L'animazione iniziale (intro video) del sito "Le Volpi" è stata **rimossa**.
- Il logo del sito è in `public/logo.png`; la favicon viene generata nello stesso stile in `public/favicon.png`.
