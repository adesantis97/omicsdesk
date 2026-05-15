---
title: "Phosphoproteomics pipeline — sleep-deprivation synaptosomes"
omicsType: "Phosphoproteomics"
dataset: "PXD010697 — Brüning 2019, sleep-deprivation synaptosomes, 48 LFQ-DDA samples across 6 timepoints"
groundTruth: "Published markers of synaptic sleep biology — Mapt (Tau) T525, Ank3 S1902, Radil S235 — should be recovered as significantly regulated. CK2 (Csnk2a1) is the most-replicated kinase implicated in sleep-deprivation responses."
recoveryMetric: "12,628 phosphosites → 8,342 class-I (loc ≥ 0.75) → 3,342 tested. Recovered Mapt T525 (log2FC −0.63, padj 5.4×10⁻⁵), Ank3 S1902 (+0.85, padj 5.8×10⁻⁴), Radil S235 at FDR < 0.05. decoupleR ULM kinase activity flags Csnk2a1 (CK2) as top up-regulated kinase under sleep deprivation (score +2.41, p = 0.016, 790 substrates)."
heroImage: "/validation/cs5-phospho/hero.png"
heroAlt: "Heatmap of top regulated phosphosites between sleep-deprived and baseline synaptosomes"
pubDate: 2026-05-14
order: 5
---

Phosphoproteomics pipeline benchmark on a published sleep-deprivation study. Site-level limma DA + decoupleR ULM kinase activity correctly recover the published phosphosite-level biology and identify CK2 as the dominant regulated kinase.
