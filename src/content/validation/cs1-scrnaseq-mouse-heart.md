---
title: "scRNA-seq pipeline — mouse heart TAC time course"
omicsType: "scRNA-seq"
dataset: "GSE308859 — 4 timepoints (Sham, TAC 2w/4w/6w), ~27,200 cells, 10x Chromium"
groundTruth: "Published cardiomyocyte stress markers and immune-infiltration kinetics in TAC models — one of the most replicated mouse heart-failure paradigms in the literature."
recoveryMetric: "Cell-type composition matches TAC literature (Fibroblasts 41%, Macrophages 20%). B-cell expansion from sham → TAC 4w correctly flagged as dominant abundance shift (FDR ≈ 0). DE recovers canonical stress signature: Nppa (log2FC 1.06, padj 1.4×10⁻¹⁴¹), Myh6, Ttn, Socs3, Txnip."
heroImage: "/validation/cs1-mouse-heart/hero.png"
heroAlt: "UMAP of 27,000 mouse heart cells coloured by Leiden cluster"
pubDate: 2026-04-12
order: 1
---

End-to-end validation of the scRNA-seq pipeline on a publicly-released mouse heart failure time-course. Composition, abundance kinetics, and stress-marker DE all match the published TAC-model literature, providing independent confirmation that the pipeline's narrative is biologically correct, not just statistically plausible.
