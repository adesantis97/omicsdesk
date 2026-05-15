---
title: "BRAF-mutant vs BRAF-wild-type melanoma — romidepsin + IFN response"
client: "Public dataset re-analysis (GEO)"
omicsType: "RNA-seq"
sampleCount: "12 samples, 2 cell lines, 2 conditions"
turnaroundDays: 7
problem: "How does combination therapy (romidepsin + interferon) remodel transcription in melanoma cells, and does BRAF mutation status change the response?"
findings:
  - "BRAF-wild-type cells mount a broader response (142 differentially expressed genes vs 44 in BRAF-mutant), suggesting genotype-specific sensitivity to the combination."
  - "Both genotypes activate the type-I interferon pathway (IFI27, IFI44L, ISG15, OAS2) and suppress cell-cycle programs (chromosome segregation, mitotic checkpoint) — a dual mechanism of immune activation plus proliferation arrest."
  - "Transcription-factor activity inference flags STAT1/STAT2/IRF9 as the most-activated regulators and the E2F family as repressed, confirming the canonical interferon-signalling axis."
heroImage: "/case-studies/geo-melanoma/hero_volcano.png"
heroAlt: "Volcano plot showing differentially expressed genes in BRAF-wild-type melanoma cells after romidepsin + IFN treatment"
reportPdf: "/case-studies/geo-melanoma/report.pdf"
deliverablesZip: "/case-studies/geo-melanoma/deliverables.zip"
deliverablesZipSize: "6.6 MB"
reportPages: 14
figuresCount: 10
pubDate: 2026-03-24
featured: true
---

## What the client wanted to know

Whether romidepsin + interferon combination therapy works differently in BRAF-mutant versus BRAF-wild-type melanoma at the transcriptional level — and whether the data supports the proposed mechanism of action (immune activation + cell-cycle arrest).

## What we did

Standard bulk RNA-seq workflow on 12 paired-end samples (2 cell lines × 2 conditions × 3 biological replicates): adapter trimming, splice-aware alignment, gene-level quantification, DESeq2 differential expression with apeglm shrinkage, pathway enrichment (GO BP, KEGG, Reactome), and transcription-factor activity inference using DoRothEA + decoupleR.

## What we delivered

- 14-page branded PDF report with executive summary, methods, figures (PCA, volcano per contrast, pathway, TF activity), and a plain-language conclusions section
- Excel workbook with DESeq2 results per contrast, pathway enrichment tables, and TF activity scores
- 8 publication-quality figures (300 dpi PNG)
- The full Snakemake pipeline code and conda environment specs — auditable, reproducible

## Why it matters for the buyer

A typical client question is "did the drug work, and through what mechanism?" — and the value of the deliverable is not the technical pipeline but the interpretive narrative that maps statistical results onto biology. This case study shows how the report answers that question in plain English, while keeping the underlying data and code fully transparent for a methods reviewer.
