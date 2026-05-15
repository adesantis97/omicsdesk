---
title: "WGS interpretation pipeline — GIAB NA12878 chromosome 22"
omicsType: "WGS"
dataset: "Genome-in-a-Bottle (GIAB) v4.2.1 NA12878 truth set, chromosome 22 (49,964 PASS variants)"
groundTruth: "GIAB is the field's gold-standard variant truth set. A clinically-relevant interpretation pipeline should correctly rank the 5 known high-impact Tier-1 LoF variants on chr22 and recover all 5 expected gene-panel hits."
recoveryMetric: "10/10 recovery metrics PASS. From 49,964 PASS variants the pipeline correctly recovered: 5 Tier-1 high-impact LoF variants (ARVCF / PARVB splice, EIF4ENIF1 / DDX17 / CELSR1 stop-gained), 122 Tier-2 rare missense, 2 Tier-3 ClinVar VUS in MYO18B, and 5 panel hits (4 BCR + 1 CHEK2). All 5 expected Tier-1 genes recovered."
heroImage: "/validation/cs6-wgs/hero.png"
heroAlt: "Variant tier distribution across the GIAB NA12878 chromosome 22 truth set"
pubDate: 2026-05-14
order: 6
---

WGS interpretation pipeline benchmark against the GIAB NA12878 chromosome 22 gold-standard truth set. The Tier 1–3 stratification, ClinVar look-up, and gene-panel intersection all recover the expected variants — 10/10 ground-truth metrics pass.
