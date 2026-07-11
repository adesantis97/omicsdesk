# Sito vetrina — Osteopata

Vetrina one-page in [Astro](https://astro.build) + Tailwind CSS. Statico, veloce, mobile-first,
ottimizzato per la ricerca locale su Google. Contatti via WhatsApp, telefono e modulo.

> ⚠️ Al momento contiene **testi e dati segnaposto**. Prima di pubblicare, personalizza i
> contenuti (vedi [`CONTENUTI.md`](./CONTENUTI.md)) e i dati in `src/data/site.ts`.

---

## 1. Avvio in locale

Serve [Node.js](https://nodejs.org) 20+.

```bash
cd sito-osteopata
npm install       # solo la prima volta
npm run dev       # apre l'anteprima su http://localhost:4321
```

Per generare il sito pronto da pubblicare:

```bash
npm run build     # crea la cartella dist/ con l'HTML statico
npm run preview   # anteprima della build
```

---

## 2. Personalizzazione (dove metto le mie cose?)

| Cosa cambiare | Dove |
|---|---|
| **Nome, telefono, WhatsApp, email, indirizzo, orari, social, P.IVA** | `src/data/site.ts` ← il file più importante, tutto parte da qui |
| **Dominio** (per SEO/sitemap) | `astro.config.mjs` (`SITE_URL`) e `public/robots.txt` |
| **Trattamenti** | file dentro `src/content/trattamenti/` (un file = un trattamento) |
| **Recensioni** | file dentro `src/content/recensioni/` |
| **Disturbi trattati, step, FAQ, tariffe** | direttamente in `src/pages/index.astro` (elenchi in cima al file) |
| **Testo "Chi sono"** | `src/pages/index.astro`, sezione `#chi-sono` |
| **Colori** | `tailwind.config.mjs` (oggetto `colors.brand`) |
| **Foto** | vedi sezione 3 |
| **Privacy / Cookie policy** | `src/pages/privacy.astro` e `src/pages/cookie-policy.astro` (template da completare) |

---

## 3. Foto

Le foto ora sono riquadri segnaposto. Per inserire quelle reali:

1. Metti i file (es. `ritratto.jpg`, `studio.jpg`) nella cartella `public/images/`.
2. In `src/components/Hero.astro` e nella sezione `#chi-sono` di `src/pages/index.astro`
   sostituisci il `<div>` segnaposto con:
   ```html
   <img src="/images/ritratto.jpg" alt="Ritratto di [Nome], osteopata" class="rounded-3xl w-full" />
   ```
3. Sostituisci anche `public/og-image.png` (anteprima social, 1200×630 px) con un'immagine reale.

---

## 4. Modulo contatti

Il sito è statico, quindi il form ha bisogno di un servizio esterno per inviare le email.
Consigliato **[Formspree](https://formspree.io)** (piano gratuito sufficiente):

1. Registrati su formspree.io e crea un nuovo form.
2. Copia l'URL del form (es. `https://formspree.io/f/abcdwxyz`).
3. Incollalo in `src/data/site.ts` alla voce `formAction`.

Fatto: gli invii arriveranno via email e l'utente sarà reindirizzato a `/grazie/`.
Se lasci `formAction` vuoto, il modulo usa un fallback via `mailto:` (apre il client di posta).
In ogni caso restano sempre attivi i pulsanti **WhatsApp** e **telefono**.

---

## 5. Pubblicazione (mettere il sito online sul dominio Aruba)

Il dominio è già di tuo fratello (Aruba). Non serve per forza l'hosting WordPress di Aruba.
Tre opzioni, dalla più comoda:

### Opzione A — Netlify o Cloudflare Pages (consigliata, gratis)
1. Metti questo progetto su GitHub (anche solo la cartella `sito-osteopata/`).
2. Su [Netlify](https://netlify.com): *Add new site → Import from Git*.
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Se il progetto non è nella root del repo, imposta la *base directory* su `sito-osteopata`.
3. *Domain settings → Add custom domain* → inserisci il dominio.
4. Netlify ti mostra i record DNS: nel **pannello Aruba → Gestione DNS** del dominio, imposta
   il record indicato (di solito un `CNAME` per `www` e/o un record `A`/`ALIAS` per il dominio
   nudo). Salva e attendi la propagazione (da minuti a poche ore).
5. HTTPS: Netlify attiva il certificato automaticamente.

### Opzione B — Hosting Aruba via FTP
1. `npm run build` → si genera la cartella `dist/`.
2. Con un client FTP (es. FileZilla) e le credenziali dell'hosting Aruba, carica **il contenuto**
   di `dist/` nella cartella pubblica (spesso `/httpdocs` o `/www`).
3. Ripeti il caricamento a ogni modifica. (Richiede un pacchetto hosting Aruba.)

### Opzione C — GitHub Pages
Simile a omicsdesk: si configura un workflow che builda e pubblica. Vedi la documentazione
Astro “Deploy to GitHub Pages”. Nota: il dominio va comunque collegato via DNS su Aruba.

> In tutti i casi il dominio **resta su Aruba** e si collega al servizio scelto cambiando i
> record DNS. Non è necessario acquistare altro se usi Netlify/Cloudflare Pages (gratis).

---

## 6. Note

- **GDPR:** incluso un banner cookie base e i template di Privacy/Cookie policy — vanno completati.
  Se aggiungi Google Analytics o altri strumenti di profilazione, serve un banner con consenso
  preventivo (es. Iubenda, Cookiebot).
- **Google Business:** per farsi trovare, crea/rivendica il profilo Google Business dello studio
  (gratis): è ciò che porta più contatti a un professionista locale.
- **Font:** usa i font di sistema (nessuna richiesta a Google Fonts → più veloce e senza problemi
  GDPR). Per un font personalizzato, self-hostalo in `public/` e aggiornalo in `global.css` e
  `tailwind.config.mjs`.
