# Gabi Portfolio

Personal portfolio for **Gabriela Landaverde** — Product UX/UI Designer & Vibecoder.
Vanilla **HTML + CSS + JS**, no framework, no build step. Token-driven design system.

## Run it

It's a static site — open `index.html` directly, or (recommended, avoids any
`file://` quirks) serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

No `npm install`, no compile step.

## Structure

```
PROYECTO/
├─ index.html              # markup only — links the CSS, includes the JS
├─ assets/
│  ├─ Icon.svg             # isologo (Figma node 5-64), used in nav + footer
│  ├─ Gabriela_Landaverde_CV_2026.pdf
│  └─ images/              # project & profile images (extracted from base64)
├─ styles/
│  ├─ tokens.css           # ← single source of truth for design tokens (:root)
│  ├─ base.css             # reset, page transitions, grain, placeholders, helpers
│  ├─ responsive.css       # breakpoints (loaded last)
│  ├─ layout/              # nav.css · footer.css
│  ├─ components/          # buttons · card · badge · form
│  └─ pages/               # home · project · about · cv · contact
├─ scripts/
│  ├─ data/projects.js     # SIMGS (image map) + PROJECTS (case-study content)
│  ├─ router.js            # SPA page switching + project detail + form
│  └─ ticker.js            # hero 3D ticker (⚠️ don't change the effect)
├─ content/                # case studies (.md) — source for project copy
└─ design-system/          # tokens.json (Figma import) + DESIGN-SYSTEM.md
```

CSS load order (in `index.html`): `tokens → base → layout → components → pages → responsive`.
JS load order: `data/projects.js → router.js → ticker.js` (classic scripts sharing
global scope, so it works from `file://`).

## How to edit

- **Change a color / spacing / type size** → edit `styles/tokens.css` (one place,
  updates everywhere). Names mirror Figma variables (`--group-name` == `group/name`).
- **Restyle a component** → its file in `styles/components/` or `styles/layout/`.
- **Add / edit a project** → `scripts/data/projects.js` (the `PROJECTS` object) and
  add a card `<article class="pcard" data-proj="…">` in `index.html`.
- **Add real project images** → drop files in `assets/images/`, then point the
  project's key in `SIMGS` (and/or per-section keys) at them. Until then a labelled
  "Image placeholder" shows.
- **Swap the logo** → replace `assets/Icon.svg`.

## Design system

`design-system/DESIGN-SYSTEM.md` documents the tokens and the component→token spec.
`design-system/tokens.json` (DTCG format) imports into **Figma Variables** so design
and code share the same language. The canonical CSS tokens live in `styles/tokens.css`.

## Notes

- The hero ticker effect (3D cube rotation) must not be modified — only the
  per-phrase width-fit is allowed (`scripts/ticker.js`).
- Fonts load from Google Fonts (Plus Jakarta Sans + Instrument Sans).
- `gabi-portfolio/` is the previous monolithic version, kept for reference only.
