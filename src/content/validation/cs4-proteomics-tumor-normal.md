---
title: "Proteomics pipeline — paired tumour vs benign tissue"
omicsType: "Proteomics"
dataset: "LFQ-Analyst tumour-vs-benign liver-tissue example, 10 patient-paired Benign/Malignant samples, LFQ-DDA MaxQuant"
groundTruth: "Tumour vs benign liver should recover complement / coagulation cascade enrichment (the most-replicated proteomic signal in HCC-like contexts), ECM organisation, and IGF/IGFBP signalling — i.e. textbook tumour-vs-adjacent biology."
recoveryMetric: "4922 → 1708 tested proteins → 314 differentially abundant (FDR < 0.05, |log2FC| > 1) → 86 enriched pathway terms. Top hits: complement & coagulation cascades (KEGG, padj = 6×10⁻⁷), extracellular-matrix organisation (Reactome, padj = 2×10⁻⁶), IGF/IGFBP signalling."
heroImage: "/validation/cs4-proteomics/hero.png"
heroAlt: "Protein identification rate across the 10 paired tumour-vs-benign samples"
pubDate: 2026-05-14
order: 4
---

LFQ proteomics pipeline benchmark on a canonical paired tumour-vs-adjacent-tissue dataset. The differential-abundance + pathway-enrichment layers correctly identify the dominant tumour-biology signals expected from a hepatic malignancy context.
