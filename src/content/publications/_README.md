---
title: How to add a publication
authors: OmicsDesk
venue: Internal
year: 2026
role: Internal — not displayed (filename starts with underscore)
summary: This file is ignored by the publications page. It documents how to add real entries.
draft: true
---

# Adding publications

Each `.md` file in this folder (except those whose filename starts with `_`) becomes
a public publication entry on `/publications/`.

## File naming

Use kebab-case, e.g. `2024-pikettyetal-mitf-network.md`.

## Required frontmatter

```yaml
---
title: "Paper title (full)"
authors: "Last1 F, Last2 G, Last3 H"
venue: "Nature Genetics"
year: 2024
role: "First author. Designed the multi-omics integration approach and built the
       network inference pipeline."
summary: "What problem this paper solved and why a biotech buyer should care.
          Plain language. 2–3 sentences. NOT an abstract — buyer-framed."
methods: ["Multi-omics integration", "MOFA2", "Patient-stratified networks"]
doi: "10.xxxx/yyyyy"
url: "https://www.nature.com/articles/..."
featured: true
---
```

## Optional fields

- `pdfUrl`: link to a PDF (preprint or open-access version)
- `featured`: pin to the top of the list

## Body

The body of the markdown file is optional — leave empty for a card-only entry, or
write a longer plain-language explanation that appears when someone clicks through.
