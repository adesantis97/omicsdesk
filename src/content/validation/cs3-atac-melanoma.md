---
title: "ATAC-seq pipeline — melanoma cell-line accessibility"
omicsType: "ATAC-seq"
dataset: "ATAC-seq across melanoma cell lines, ~20 samples"
groundTruth: "Differential accessibility between melanoma states should recover MITF and SOX10 motifs in differentially-accessible regions — these are the master regulators of the melanocyte lineage and the most-replicated melanoma transcription-factor signal."
recoveryMetric: "DiffBind PCA cleanly separates conditions on PC1. Motif analysis in differentially-accessible peaks recovers MITF and SOX10 as top-enriched motifs. ChIPseeker peak annotation matches expected promoter/enhancer distribution."
heroImage: "/validation/cs3-atac-melanoma/hero.png"
heroAlt: "DiffBind PCA showing condition separation across melanoma ATAC-seq samples"
pubDate: 2026-05-13
order: 3
---

ATAC-seq pipeline benchmark covering peak calling (MACS3), QC (TSS enrichment, fragment-size distribution), differential accessibility (DiffBind), and downstream motif analysis. Recovers the expected lineage-defining transcription factors as top-enriched motifs.
