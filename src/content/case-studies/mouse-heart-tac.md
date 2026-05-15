---
title: "Mouse heart failure time course — 27k single cells, 4 timepoints"
client: "Public dataset re-analysis (GEO + 10x Genomics)"
omicsType: "scRNA-seq"
sampleCount: "4 samples (Sham + TAC 2w/4w/6w), 27,146 cells after QC"
turnaroundDays: 10
problem: "How does the cellular composition of the mouse heart change as pressure-overload heart failure develops over six weeks, and which immune populations drive late-stage remodelling?"
findings:
  - "Cell-type composition shifts dramatically over time — B cells expand from ~3% at sham to ~37% by TAC 4-week (FDR ≈ 0), making B-cell infiltration the dominant late-stage signal."
  - "By 6 weeks the cardiac stress response is fully on: 770 genes change versus sham — including Nppa (atrial natriuretic peptide, log2FC 1.06), suppression of mitochondrial respiration genes, and loss of hemoglobin subunits."
  - "The microenvironment transitions from fibrosis-dominated (early) to inflammation-dominated (late), with B-cell and macrophage proportions overtaking fibroblasts — a temporal switch with direct implications for when anti-inflammatory therapy might be effective."
heroImage: "/case-studies/mouse-heart-tac/hero_umap.png"
heroAlt: "UMAP of 27,146 mouse heart cells coloured by annotated cell type"
reportPdf: "/case-studies/mouse-heart-tac/report.pdf"
deliverablesZip: "/case-studies/mouse-heart-tac/deliverables.zip"
deliverablesZipSize: "16 MB"
reportPages: 30
figuresCount: 23
pubDate: 2026-04-12
featured: true
---

## What the client wanted to know

Three questions: (1) which cell populations appear in the failing heart that aren't there in the healthy one, (2) how the composition evolves week-by-week, and (3) whether the temporal pattern of immune infiltration points to a specific therapeutic window.

## What we did

End-to-end scRNA-seq workflow on 4 samples (Sham + TAC 2w/4w/6w, 10x Chromium): per-cell QC, doublet filtering, normalization, integration across timepoints, Leiden clustering, marker-based cell-type annotation, differential abundance testing (Milo), differential expression per condition versus sham, and pseudotime analysis along the disease trajectory.

## What we delivered

- 30-page branded PDF report with the full temporal narrative
- Excel workbook with cell-type proportions per sample, DE results per timepoint, marker tables per cluster
- 23 figures including UMAP overviews, cell-type proportions, per-cluster marker dotplots, time-course volcanoes, abundance trajectories, pseudotime, and spatial maps
- AnnData (.h5ad) object for downstream re-analysis
- Snakemake pipeline + conda envs

## Why it matters for the buyer

scRNA-seq deliverables often arrive as a folder of plots with no narrative — leaving the client to figure out what the data actually says about biology. This case study shows how we wrap the figures in a temporal story that ends in a concrete therapeutic-window hypothesis ("anti-inflammatory intervention should be timed for the 2-week to 4-week window before the B-cell expansion dominates"), grounded in the abundance + DE evidence.
