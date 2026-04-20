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

## Deploy status

- **Live URL**: <https://adesantis97.github.io/omicsdesk/>
- **GitHub repo**: <https://github.com/adesantis97/omicsdesk>
- **Pages source**: `main` branch, `/` root

To update the site, edit `index.html` here, then:

```sh
cd omicsdesk_site
git add -A && git commit -m "Your change"
git push
```

Pages rebuilds automatically (~1 minute).

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
