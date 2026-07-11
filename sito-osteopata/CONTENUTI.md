# Checklist contenuti — cosa serve da te

Compila queste informazioni e raccogli i file: con questi dati sostituiamo tutti i segnaposto e
il sito è pronto. La maggior parte va copiata in **`src/data/site.ts`**.

## 1. Dati anagrafici e professionali
- [ ] Nome e cognome
- [ ] Titolo (es. "Osteopata D.O.")
- [ ] Anni di esperienza (per i numeri nella sezione "Chi sono")
- [ ] Scuola di osteopatia e anno di diploma
- [ ] Eventuali specializzazioni / corsi / esperienze rilevanti
- [ ] Iscrizione a registri/albi (es. R.O.I.), se presente
- [ ] Partita IVA

## 2. Testi
- [ ] Bio "Chi sono" (5–10 righe: percorso, approccio, filosofia)
- [ ] Frase di posizionamento breve (il "claim" in cima alla home)
- [ ] Elenco dei trattamenti realmente offerti (per confermare/rimuovere quelli segnaposto)
- [ ] Elenco dei disturbi trattati (se diverso da quello di esempio)
- [ ] Eventuali FAQ specifiche

## 3. Contatti e studio
- [ ] Numero di telefono
- [ ] Numero WhatsApp (se diverso)
- [ ] Email
- [ ] Indirizzo completo dello studio (via, CAP, città, provincia)
- [ ] Orari di apertura reali
- [ ] Link Google Maps dello studio (per mappa e indicazioni)
- [ ] Note utili (parcheggio, piano, citofono…)

## 4. Prezzi (facoltativo)
- [ ] Tariffa prima visita
- [ ] Tariffa seduta successiva
- [ ] (oppure: preferisci non mostrare i prezzi? → rimuoviamo la sezione)

## 5. Social e recensioni
- [ ] Link Instagram / Facebook / LinkedIn (quelli che ha)
- [ ] Link al profilo Google Business (per le recensioni)
- [ ] Link MioDottore/Doctolib, se presente
- [ ] 3–5 recensioni reali di pazienti (con il loro consenso) — oppure rimandiamo a Google

## 6. Immagini
- [ ] Foto ritratto in buona qualità (verticale, per la home)
- [ ] 1–2 foto dello studio/ambiente
- [ ] Eventuale logo (se ne ha uno)

## 7. Dominio
- [ ] Nome del dominio acquistato su Aruba (per configurare SEO e pubblicazione)

---

Quando hai questi elementi, li integriamo: i dati di contatto vanno in `src/data/site.ts`,
le foto in `public/images/`, i trattamenti/recensioni nelle rispettive cartelle in
`src/content/`. Vedi il [README](./README.md) per i dettagli.
