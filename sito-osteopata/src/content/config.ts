import { defineCollection, z } from 'astro:content';

// Trattamenti offerti. Ogni file .md in src/content/trattamenti/ è una scheda.
// Aggiungere/rimuovere un trattamento = aggiungere/eliminare un file.
const trattamenti = defineCollection({
  type: 'content',
  schema: z.object({
    titolo: z.string(),
    // Nome di un'icona (vedi src/components/TreatmentCard.astro per quelle disponibili)
    icona: z
      .enum(['colonna', 'mano', 'cuore', 'testa', 'bimbo', 'gravidanza', 'sport', 'foglia'])
      .default('foglia'),
    descrizione: z.string(),
    ordine: z.number().default(99), // ordine di visualizzazione (più basso = prima)
  }),
});

// Recensioni dei pazienti (placeholder). Metti recensioni reali (con consenso) o
// lascia questa sezione e rimanda al profilo Google.
const recensioni = defineCollection({
  type: 'content',
  schema: z.object({
    autore: z.string(),
    stelle: z.number().min(1).max(5).default(5),
    data: z.string().optional(), // es. "Marzo 2026"
    ordine: z.number().default(99),
  }),
});

export const collections = { trattamenti, recensioni };
