# OmicsDesk — Landing Page

Static one-page site for OmicsDesk (bioinformatics analysis service).

## Files

- `index.html` — the page itself, self-contained (Tailwind via CDN, Google Fonts).
- `CNAME` — add this when you buy `omicsdesk.com` to point GitHub Pages at it.

## Source of truth

Page copy is maintained in `../brand/landing_page_copy.md` (inside the BioAnalytics
repo). Pricing numbers mirror `../packages/service_menu.md`. Update those first,
then sync the HTML.

## Preview locally

```sh
cd omicsdesk_site
python3 -m http.server 8000
# open http://localhost:8000
```

No build step. Tailwind is loaded from the CDN (`cdn.tailwindcss.com`), which is
fine for v1. If you want to ship a compiled Tailwind build later, see
<https://tailwindcss.com/docs/installation>.

## Deploy to GitHub Pages

This folder is designed to live in its own **public** repo, separate from the
private BioAnalytics repo.

1. Create a new public repo on GitHub (e.g. `omicsdesk/omicsdesk.github.io` or
   `alessandrodesantis/omicsdesk-site`).
2. Copy the contents of this folder into the new repo root:
   ```sh
   cp -R omicsdesk_site/. /path/to/new/repo/
   cd /path/to/new/repo
   git init && git add . && git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:<user>/<repo>.git
   git push -u origin main
   ```
3. In the repo on GitHub → Settings → Pages → Source: `Deploy from a branch`,
   Branch: `main` / `/ (root)`. Save.
4. Site goes live at `https://<user>.github.io/<repo>/` within a few minutes.

## Custom domain (optional)

Once you buy `omicsdesk.com`:

1. Create a `CNAME` file in this folder containing a single line: `omicsdesk.com`.
2. At your registrar, add DNS records:
   - `A` records for `@` → GitHub Pages IPs (see
     <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site>)
   - `CNAME` record for `www` → `<user>.github.io`
3. In repo Settings → Pages → Custom domain: enter `omicsdesk.com`. Enable
   "Enforce HTTPS" after the cert provisions (~15 minutes).
4. Update the email address in `index.html` from `a.desantiss97@gmail.com` to
   `hello@omicsdesk.com` (two places: hero CTA target and the contact section).

## What to update before going live

- [ ] Domain bought + DNS pointed + HTTPS green
- [ ] Email migrated from gmail to `hello@omicsdesk.com`
- [ ] Sanitized sample deliverable PDF produced (geo_melanoma run — currently
      blocked on quarto install)
- [ ] OpenGraph / Twitter card meta tags added (for LinkedIn previews)
- [ ] Favicon added (`favicon.ico` or `favicon.svg`)
