#!/usr/bin/env python3
"""Download the latin + latin-ext subsets of the site webfonts and emit a
self-hosted @font-face stylesheet, so the site stops calling fonts.googleapis.com.

JetBrains Mono is shipped by Google as a variable font: every weight
of a given family+subset resolves to the same woff2. We therefore keep one file
per family+subset and declare a weight RANGE instead of four identical copies.
"""
import re, urllib.request, pathlib

CSS_URL = ("https://fonts.googleapis.com/css2?"
           "family=JetBrains+Mono:wght@400;500&display=swap")
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")

SITE = pathlib.Path("/Users/presuttic10/Desktop/Alessandro/Business/OmicsDesk/apps/site")
OUT_DIR = SITE / "public" / "fonts"
OUT_CSS = SITE / "src" / "styles" / "fonts.css"
KEEP = ["latin", "latin-ext"]
# Inter was dropped on 2026-09-05: the UI font is now the Apple system stack
# (tailwind.config.mjs -> fontFamily.sans), which downloads nothing. Only the
# mono face is still self-hosted. Do NOT re-add Inter here without also
# changing fontFamily.sans, or the site will fetch a font it never uses.
WEIGHTS = {"JetBrains Mono": "100 800"}


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    return urllib.request.urlopen(req, timeout=60).read()


css = get(CSS_URL).decode("utf-8")
blocks = re.findall(r"/\*\s*([\w-]+)\s*\*/\s*(@font-face\s*\{[^}]*\})", css)

for stale in OUT_DIR.glob("*.woff2"):
    stale.unlink()
OUT_DIR.mkdir(parents=True, exist_ok=True)

out = ["/* Self-hosted webfonts: downloaded from Google Fonts, served from",
       "   omicsdesk.com so no visitor request ever reaches a Google server.",
       "   Regenerate with apps/site/scripts/fetch_fonts.py. */", ""]

# family+subset -> (url, unicode-range), first occurrence wins
faces = {}
for subset, block in blocks:
    if subset not in KEEP:
        continue
    family = re.search(r"font-family:\s*'([^']+)'", block).group(1)
    key = (family, subset)
    if key in faces:
        continue
    faces[key] = (
        re.search(r"url\((https://[^)]+\.woff2)\)", block).group(1),
        re.search(r"unicode-range:\s*([^;]+);", block).group(1).strip(),
    )

for (family, subset), (url, urange) in faces.items():
    blob = get(url)
    name = f"{family.lower().replace(' ', '-')}-{subset}.woff2"
    (OUT_DIR / name).write_bytes(blob)
    print("saved", name, len(blob), "bytes")
    out.append(f"""@font-face {{
  font-family: '{family}';
  font-style: normal;
  font-weight: {WEIGHTS[family]};
  font-display: swap;
  src: url('/fonts/{name}') format('woff2');
  unicode-range: {urange};
}}
""")

OUT_CSS.write_text("\n".join(out))
print("wrote", OUT_CSS)
