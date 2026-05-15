---
title: "Bulk RNA-seq pipeline — dexamethasone perturbation"
omicsType: "RNA-seq"
dataset: "Public RNA-seq dataset, dexamethasone vs DMSO in A549 cells (canonical glucocorticoid response benchmark)"
groundTruth: "Glucocorticoid receptor (GR) target genes are among the most-replicated transcriptional responses in the literature: TSC22D3 / GILZ, FKBP5, KLF15, DDIT4 should all appear as top up-regulated hits."
recoveryMetric: "Top up-regulated genes by adjusted p-value include FKBP5, TSC22D3, DDIT4, KLF15 — all canonical GR targets. Pathway enrichment recovers steroid-hormone response and circadian-rhythm regulation as top GO BP terms."
heroImage: "/validation/cs2-rnaseq-dex/hero.png"
heroAlt: "PCA plot showing clean separation of dexamethasone-treated vs DMSO-control samples"
pubDate: 2026-05-09
order: 2
---

A clean, fast bulk RNA-seq benchmark with an unambiguous ground truth. The pipeline correctly identifies the canonical glucocorticoid-response gene set as the top hit, demonstrating that the DE + pathway enrichment + TF activity layers behave as expected on a textbook perturbation.
