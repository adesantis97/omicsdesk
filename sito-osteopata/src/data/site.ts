/**
 * ⭐ CONFIGURAZIONE CENTRALE DEL SITO ⭐
 *
 * Questo è l'UNICO file che serve modificare per personalizzare i dati di contatto,
 * l'indirizzo, gli orari e i social. I valori qui dentro vengono usati automaticamente
 * in tutto il sito: header, footer, pulsanti WhatsApp/telefono, dati SEO e mappa Google.
 *
 * Ogni valore da sostituire è marcato con SEGNAPOSTO fra parentesi quadre: [ ... ].
 * Sostituisci il testo, lascia le virgolette.
 */

export const site = {
  // — IDENTITÀ —
  nome: '[Nome Cognome]',
  titolo: 'Osteopata D.O.', // es. "Osteopata D.O." — D.O. = Diploma in Osteopatia
  claim: 'Osteopatia su misura per il tuo benessere', // frase breve di posizionamento
  descrizioneBreve:
    'Trattamenti osteopatici personalizzati per dolori muscolo-scheletrici, postura e benessere. Studio a [Città]. Prenota una prima valutazione.',

  // — CONTATTI —
  // Telefono in formato internazionale SENZA spazi per i link (es. +393401234567)
  telefono: '+39 340 000 0000', // versione "leggibile" mostrata a schermo
  telefonoLink: '+393400000000', // versione per il link tel: e wa.me (solo numeri e +)
  // Numero WhatsApp in formato internazionale SENZA "+", spazi o zeri iniziali (es. 393401234567)
  whatsapp: '393400000000',
  whatsappMessaggio: 'Ciao, vorrei prenotare una seduta di osteopatia.',
  email: 'info@esempio-osteopata.it',

  // — STUDIO / INDIRIZZO —
  studio: {
    nome: 'Studio di Osteopatia [Nome]',
    via: '[Via e numero civico]',
    cap: '[CAP]',
    citta: '[Città]',
    provincia: '[PR]', // sigla provincia, es. "MI"
    regione: '[Regione]',
    paese: 'Italia',
    // Link per aprire le indicazioni stradali (sostituisci con il link del profilo Google Maps)
    mappaLink: 'https://www.google.com/maps/search/?api=1&query=osteopata',
    // URL di embed della mappa (Google Maps → Condividi → Incorpora una mappa → copia src dell'iframe)
    mappaEmbed:
      'https://www.google.com/maps?q=Roma&output=embed',
    noteAccesso: 'Studio al piano terra, parcheggio disponibile nelle vicinanze.',
  },

  // — ORARI —
  // Modifica giorni/orari reali. "Chiuso" per i giorni di chiusura.
  orari: [
    { giorno: 'Lunedì', ore: '09:00 – 19:00' },
    { giorno: 'Martedì', ore: '09:00 – 19:00' },
    { giorno: 'Mercoledì', ore: '09:00 – 19:00' },
    { giorno: 'Giovedì', ore: '09:00 – 19:00' },
    { giorno: 'Venerdì', ore: '09:00 – 19:00' },
    { giorno: 'Sabato', ore: 'Su appuntamento' },
    { giorno: 'Domenica', ore: 'Chiuso' },
  ],

  // — SOCIAL & RECENSIONI — (lascia stringa vuota '' per nascondere un elemento)
  social: {
    instagram: '', // es. 'https://instagram.com/tuo_profilo'
    facebook: '', // es. 'https://facebook.com/tuo_profilo'
    linkedin: '',
    // Link per lasciare una recensione su Google (da Google Business → Chiedi recensioni)
    googleReviews: '',
    // Link al profilo MioDottore/Doctolib, se presente
    miodottore: '',
  },

  // — DATI FISCALI — (compaiono nel footer e nelle informative, come richiesto in Italia)
  partitaIva: '[Partita IVA]',
  // Ordine/registro professionale, se applicabile (es. iscrizione ROI)
  albo: '[es. Iscritto al Registro degli Osteopati d’Italia - R.O.I. n. XXXX]',

  // — TECNICO —
  // Endpoint del form contatti. Consigliato Formspree (gratis): crea un form su formspree.io
  // e incolla qui l'URL (es. 'https://formspree.io/f/xxxxxxx'). Vedi README.
  formAction: '', // vuoto = il form usa un fallback via email (mailto)
  lingua: 'it',
};

export type Site = typeof site;

// Helper: link WhatsApp pronto all'uso (numero + messaggio precompilato)
export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessaggio,
)}`;

// Helper: indirizzo su una riga
export const indirizzoCompleto = `${site.studio.via}, ${site.studio.cap} ${site.studio.citta} (${site.studio.provincia})`;
