# OmicsDesk

Landing page + blog + publications for OmicsDesk — bioinformatics analysis delivered as a report.

**Live**: <https://omicsdesk.com/>

## Stack

[Astro 5](https://astro.build) + Tailwind CSS + MDX. Static output, deployed via GitHub Actions to GitHub Pages.

## Local dev

```sh
npm install
npm run dev   # http://localhost:4321/
```

**Note on install speed.** This project lives on `/Volumes/Untitled` (HFS+),
which causes `npm install` to hang indefinitely (confirmed locally —
the `STAT U` 0% CPU lockup is a filesystem issue, not a network one). Symlinking
`node_modules` into APFS doesn't help because npm still reads `package.json`
through the slow path.

**Workaround that works**: build from `/tmp` (APFS) and rsync back if needed.

```sh
rsync -a --exclude=node_modules --exclude=dist --exclude=.git \
    /Users/presuttic10/Desktop/Alessandro/Business/OmicsDesk/omicsdesk_site/ /tmp/omicsdesk_build/
cd /tmp/omicsdesk_build
npm install --no-audit --no-fund      # ~22s on APFS
npm run dev                           # local preview
npm run build                         # produces ./dist
```

Edit source files in the original `omicsdesk_site/` (so the BioAnalytics-side
backups + git history stay correct), then sync to `/tmp/omicsdesk_build/` for
local rebuild. Production builds run on GitHub Actions (Linux ext4) where this
is a non-issue, so you can also just push and let CI verify.

## Build

```sh
npm run build         # outputs to ./dist
npm run preview       # preview the built site
```

## Project structure

```
src/
├── components/    Nav, Footer
├── content/
│   ├── blog/       MDX blog posts (each post is one .mdx file)
│   ├── publications/  Markdown publication entries (see _README.md inside)
│   └── config.ts   Content collection schemas
├── layouts/Base.astro    Header + nav + footer wrapper
├── pages/
│   ├── index.astro       Homepage
│   ├── pricing.astro     Productized pricing cards
│   ├── publications.astro
│   └── blog/[...slug].astro    Blog post template
└── styles/global.css
public/        Static files copied as-is to dist root
  ├── og_image.png
  ├── sample_report_mouse_heart_scRNA.pdf
  └── CNAME
```

## Design system (2026-09-05)

The site runs on **named design tokens declared in `tailwind.config.mjs`**, not
ad-hoc utility values. When adding a page or a section, reach for a token; if
none fits, add one to the config rather than inventing a one-off value.

**Type scale** — `text-display` (60) · `text-display-sm` (48) · `text-title-1` (36)
· `text-title-2` (30, section h2) · `text-title-3` (20, panel h3) ·
`text-title-4` (16, card h3) · `text-lead` (20) · `text-body` (17, reading) ·
`text-body-sm` (14, in-card) · `text-caption` (13) · `text-eyebrow` (12).
Each step carries its own line-height and tracking, so a heading cannot ship
with the wrong leading. They are declared inside `extend`, so the default
Tailwind scale (`text-sm`, `text-lg`, …) still works.

**Vertical rhythm, 8pt** — `section` (96) between independent sections,
`section-sm` (64) between related ones, `block` (40) heading-block to grid,
`stack` (24) heading to paragraph. Distance encodes grouping. `.section-wrap`
is the standard section container.

**Radii** — `rounded-pill` (buttons) · `rounded-tile` (10, small info tiles) ·
`rounded-card` (14, panels) · `rounded-panel` (20, large feature panels).

**Component classes** (`src/styles/global.css`) — `.btn-primary` /
`.btn-secondary` / `.btn-outline` / `.btn-quiet` / `.btn-compact` (nav and
banner chrome) · `.card` / `.card-link` · `.card-glass` and
`.card-glass-invert` (translucent, **only over the gradient bands** — on the
flat paper ground a blur costs GPU and shows nothing) · `.eyebrow` /
`.eyebrow-invert` · `.prose-p` / `.prose-p-sm` / `.card-title` · `.link-more`
· `.disclosure` (zero-JS `<details>`, used by the pricing cards).

**Fonts.** The UI font is the **Apple system stack** (SF Pro / Segoe UI /
Roboto): nothing is downloaded and there is no preload. Only JetBrains Mono is
still self-hosted. `scripts/fetch_fonts.py` no longer fetches Inter — do not
re-add it there without also changing `fontFamily.sans`, or the site will
download a font it never uses. Note that the rest of the brand (figures, PDFs,
carousels) stays on **Inter** per `assets/brand/tokens.json`.

**Constraints that hold.** Static Astro output, **zero client JS added by the
design layer** (verified: same `<script>` count before and after), no new
dependencies, brand palette untouched (`accent` `#0d9488`, `ink` `#0f172a`).
Body text meets WCAG AA at 4.5:1 — `text-slate-500` on the `paper` ground
measures 4.47:1 and must not be used for body copy; use `slate-600`.

## Adding content

**New blog post**: drop a `.mdx` file in `src/content/blog/`. Frontmatter required:

```mdx
---
title: "..."
description: "..."
pubDate: 2026-05-12
tags: ["wgs", "tutorial"]
draft: false
---

Markdown body, with full code-block + image support.
```

Drafts (`draft: true`) are visible in `npm run dev` but excluded from production builds.

**New publication**: drop a `.md` file in `src/content/publications/`. See `_README.md` in that folder for the schema.

## Deployment

`.github/workflows/deploy.yml` runs on push to `main`:

1. `npm ci` and `npm run build`
2. Uploads `dist/` as a GitHub Pages artifact
3. Deploys via `actions/deploy-pages`

The custom domain `omicsdesk.com` is preserved via `public/CNAME`.

In GitHub repo Settings → Pages, ensure "Build and deployment" Source is set to
"GitHub Actions" (not "Deploy from a branch") for the Actions-based deploy to take effect.

## Content sync

Page copy source-of-truth lives in the BioAnalytics repo at
`brand/landing_page_copy.md`. Pricing source-of-truth is
`packages/service_menu.md`. If either changes, mirror the change in
`src/pages/index.astro` and `src/pages/pricing.astro`.

## Migrating from the legacy single-file site

The old `index.html` + the static assets lived at the repo root. Astro source
took over with the migration on 2026-05-06. Once the GitHub Actions deploy is
verified, the legacy `index.html` at root can be removed.
