import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Alessandro De Santis'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    role: z.string().describe('Your specific contribution to this work, in plain language'),
    summary: z.string().describe('Buyer-framed plain-language summary: what it solved, why a biotech buyer should care'),
    methods: z.array(z.string()).default([]),
    doi: z.string().optional(),
    url: z.string().optional(),
    pdfUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, publications };
