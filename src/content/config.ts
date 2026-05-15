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
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(),
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

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string().describe('Client name or "Public dataset re-analysis" for demo work'),
    omicsType: z.enum(['RNA-seq', 'scRNA-seq', 'ChIP-seq', 'ATAC-seq', 'Proteomics', 'Phosphoproteomics', 'WGS', 'Multi-omics']),
    sampleCount: z.string(),
    turnaroundDays: z.number().optional(),
    problem: z.string().describe('One-line plain-English problem statement'),
    findings: z.array(z.string()).describe('3 plain-English findings, no jargon'),
    heroImage: z.string().describe('Path to hero figure under /case-studies/<slug>/'),
    heroAlt: z.string(),
    reportPdf: z.string().describe('Public path to the report PDF'),
    deliverablesZip: z.string().optional().describe('Public path to the zipped deliverables (PDF + workbook + figures)'),
    deliverablesZipSize: z.string().optional().describe('Human-readable size of the deliverables zip, e.g. "6.6 MB"'),
    reportPages: z.number().optional(),
    figuresCount: z.number().optional(),
    pubDate: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const validation = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    omicsType: z.enum(['RNA-seq', 'scRNA-seq', 'ChIP-seq', 'ATAC-seq', 'Proteomics', 'Phosphoproteomics', 'WGS', 'Multi-omics']),
    dataset: z.string().describe('GEO/PRIDE/ENA accession + 1-line description'),
    groundTruth: z.string().describe('What we compared the pipeline output against'),
    recoveryMetric: z.string().describe('Headline recovery number, e.g. "10/10 Tier-1 variants recovered"'),
    heroImage: z.string(),
    heroAlt: z.string(),
    reportPdf: z.string().optional(),
    pubDate: z.coerce.date(),
    order: z.number().default(99),
  }),
});

export const collections = { blog, publications, 'case-studies': caseStudies, validation };
