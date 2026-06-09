---
title: "Androgen receptor activation in prostate cancer — ATAC-seq chromatin remodelling"
client: "Public dataset re-analysis (GEO)"
omicsType: "ATAC-seq"
sampleCount: "4 samples (VCaP, vehicle vs 1 nM DHT, 2 replicates each)"
turnaroundDays: 7
problem: "How does androgen (DHT) stimulation reshape the open-chromatin landscape of prostate cancer cells, and can the driving transcription factor be identified from accessibility alone?"
findings:
  - "Androgen stimulation overwhelmingly opens chromatin rather than closing it: of 9,808 regions that change significantly, 5,381 gain accessibility in DHT against only 256 that lose it, the signature of a hormone switching on an enhancer programme."
  - "The androgen receptor is identified as the driver directly from the chromatin, with no gene-expression data required. Of 879 transcription-factor motifs scored, AR is the single most variable, flipping cleanly from closed in vehicle to open in DHT."
  - "Two independent methods agree: base-resolution footprinting (TOBIAS) and motif-activity scoring (chromVAR) both place the androgen and steroid-receptor family at the top, and the prostate pioneer co-factors FOXA1 and HOXB13 are recovered alongside."
heroImage: "/case-studies/vcap-androgen-atac/hero_heatmap.png"
heroAlt: "Heatmap of differentially accessible chromatin peaks in VCaP cells, showing clean separation between DHT and vehicle replicates"
reportPdf: "/case-studies/vcap-androgen-atac/report.pdf"
deliverablesZip: "/case-studies/vcap-androgen-atac/deliverables.zip"
deliverablesZipSize: "7.0 MB"
reportPages: 22
figuresCount: 15
pubDate: 2026-06-09
featured: true
---

## What the client wanted to know

Two questions. First, how a single dose of androgen (dihydrotestosterone) remodels the open-chromatin landscape of an androgen-driven prostate cancer line. Second, whether the transcription factor responsible for that remodelling can be read straight off the ATAC-seq data, without needing a matched RNA-seq experiment.

## What we did

End-to-end ATAC-seq workflow on 4 samples (VCaP, vehicle vs 1 nM DHT, 2 replicates each): adapter trimming, Bowtie2 alignment, mitochondrial and ENCODE-blacklist filtering, MACS3 peak calling, and ENCODE-standard quality control (TSS enrichment, fragment-size periodicity, FRiP, library complexity). A fixed-width reproducible consensus peak set then fed three layers of analysis: differential accessibility with DiffBind (DESeq2), per-transcription-factor motif activity with chromVAR, and base-resolution footprinting with TOBIAS, all against the JASPAR2024 motif set. Differentially accessible peaks were annotated to their nearest gene.

## What we delivered

- 22-page branded PDF report with executive summary, full methods, QC, results, and a plain-language conclusions section
- Excel workbook with the differential-accessibility table (nearest-gene symbols included), chromVAR TF activity, TOBIAS footprint scores, peak annotation, and pathway enrichment
- 15 publication-quality figures (300 dpi PNG)
- The full Snakemake pipeline code and conda environment specs, auditable and reproducible

## Why it matters for the buyer

ATAC-seq is often delivered as a peak list and little else. The value here is the interpretation: three independent views of the same data converging on one answer, the androgen receptor programme, written into the open chromatin and named without any expression data. The report states that conclusion in plain English, flags the one honest caveat (AR shares its DNA motif with the glucocorticoid and progesterone receptors, so the family co-ranks), and keeps every number traceable to an auditable pipeline. This is the kind of regulatory-biology question, which transcription factor is driving the change, that ATAC-seq answers better than expression alone.
