# Gabi Portfolio — Design System

Single source of truth for tokens shared between **code** and **Figma**.
The goal: Figma and the project speak the same language.

## Files

| File | Purpose |
|------|---------|
| `../styles/tokens.css` | **Canonical** CSS custom properties (primitives + semantics) — the site links this. |
| `tokens.json` | DTCG/Tokens Studio format → import into **Figma Variables**. |
| `DESIGN-SYSTEM.md` | This doc: naming map + value→token mapping + component→token spec. |

> The site is now modular: tokens live in `styles/tokens.css`, components in
> `styles/components/` & `styles/layout/`, pages in `styles/pages/`. See the root `README.md`.

## Naming convention (Figma ↔ CSS)

A Figma variable `group/name` equals the CSS variable `--group-name`.

| Figma variable | CSS variable | Example value |
|----------------|--------------|---------------|
| `color/sand/200` | `--c-sand-200` | `#e8e2da` |
| `semantic-color/bg` | `--color-bg` | → sand/200 |
| `semantic-color/ink-55` | `--color-ink-55` | `rgba(17,16,9,.55)` |
| `space/4` | `--space-4` | 16px |
| `radius/lg` | `--radius-lg` | 20px |
| `font-size/md` | `--fs-md` | 14px |
| `font-weight/bold` | `--fw-bold` | 700 |
| `line-height/relaxed` | `--lh-relaxed` | 1.6 |
| `letter-spacing/widest` | `--ls-widest` | .12em |
| `shadow/card` | `--shadow-card` | dual shadow |

> Legacy aliases (`--bg`, `--ink55`, `--fh`, …) are kept in `:root` so existing
> markup/JS keeps working. New code should prefer the semantic names above.

## Token layers

1. **Primitives** — raw, meaningless values (`--c-*`, `--space-*`, `--fs-*`).
2. **Semantics** — role aliases the UI consumes (`--color-bg`, `--radius-card`).
   Change a primitive once → every screen updates.

## Spacing — 4px grid

`0, 2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96` (px).
Tokens: `--space-0 … --space-24` (the number = px/4 for ≥4px; `0-5` = 2px).

## Type scale

Static: `2xs 12 · xs 12 · sm 14 · md 14 · lg 16 · xl 16 · 2xl 18 · 3xl 24` (px).
**Floors (2026-06-07):** footnotes = 12px · content never below 14px · body = 16px.
Role aliases: `--fs-footnote` 12 · `--fs-caption` 14 · `--fs-body` 16 · `--fs-subheader` 16.
Fluid (clamp) display tokens — value shown is the **desktop max**:

| Token | clamp() | Used by |
|-------|---------|---------|
| `--fs-display` | `clamp(2.8rem,7.5vw,7.5rem)` | hero ticker headline |
| `--fs-h1` | `clamp(2.8rem,5.5vw,4.5rem)` | hero kicker, About H1 |
| `--fs-h1-project` | `clamp(2.5rem,5vw,4.5rem)` | project detail title |
| `--fs-h2` | `clamp(1.8rem,3.2vw,2.8rem)` | section / page headings |
| `--fs-h3` | `clamp(1.5rem,3vw,2.2rem)` | CTA heading |
| `--fs-h4` | `clamp(1.4rem,2.5vw,2rem)` | project section title |
| `--fs-lead` | `clamp(1rem,1.5vw,1.15rem)` | project lead paragraph |

> Figma has no `clamp()`. In Figma the fluid tokens hold the **desktop max** value;
> build mobile variants on a separate mode/breakpoint if needed.

## Standardization — value → token mapping

The old CSS was hand-tuned with ~40 off-grid values. They were **snapped to the
nearest scale step** (drift ≤ ~2px, invisible). This table makes every change auditable.

### Font-size (rem → token)
| old | token | px |
|-----|-------|----|
| .66 .67 .68 | `--fs-2xs` | 11 |
| .7 .72 .74 .77 .78 | `--fs-xs` | 12 |
| .8 .82 .83 .84 .85 | `--fs-sm` | 13 |
| .87 .875 .88 .9 | `--fs-md` | 14 |
| .92 .93 .95 | `--fs-lg` | 15 |
| 1 | `--fs-xl` | 16 |
| 1.1 | `--fs-2xl` | 18 |
| 1.45 | `--fs-3xl` | 24 |
| clamp maxes 2.6→2.8 unified | `--fs-h2` | — |

### Spacing (rem → token, snapped to 4px grid)
| old | token |
|-----|-------|
| .08 .1 .18 .2 .26 .28 .3 | `--space-1` (4) |
| .32 .35 .38 .4 | `--space-1-5` (6) |
| .45 .5 .55 | `--space-2` (8) |
| .62 .65 .68 .7 .72 .75 .76 .8 .82 .85 | `--space-3` (12) |
| .9 1 | `--space-4` (16) |
| 1.2 1.25 1.3 | `--space-5` (20) |
| 1.4 1.5 | `--space-6` (24) |
| 1.7 1.75 | `--space-7` (28) |
| 2 | `--space-8` (32) |
| 2.5 2.75 | `--space-10`/`--space-12` |
| 3 | `--space-12` (48) |
| 3.5 | `--space-14` (56) |
| 4 | `--space-16` (64) |
| 5 | `--space-20` (80) |
| 6 | `--space-24` (96) |

> `em`-based paddings on `.badge`/`.tag` are kept in `em` (they scale with font size) —
> not snapped.

### Radius (rem → token)
| old | token |
|-----|-------|
| 2px | `--radius-xs` |
| .75rem | `--radius-sm` (12) |
| 1.2rem 1.25rem | `--radius-lg` (20) — unified |
| 100px | `--radius-pill` |
| 50% | `--radius-full` |

## Components inventory (for Figma library)

`Nav` · `Nav link` · `Button (primary / outline / download)` · `Badge` · `Tag` ·
`Project card` · `Project section` · `Meta item` · `Cert item` · `Input / Textarea` ·
`Footer` · `Isologo`.

## Isologo — ⚠ TODO (next Figma session)

The site currently uses an **inline SVG G-mark** (dark variant in nav, light variant
in footer). Gabi created a dedicated isologo vector in Figma
(node `5-64`). Because this session was code-only (no Figma calls), the vector
was **not** downloaded.

The logo is now **centralized** so swapping is trivial:
- Nav mark → `.nav-logo svg`
- Footer mark → footer top-left svg
Both share the same 38×38 path. **Next session:** export node `5-64` from Figma as
SVG, replace both inline SVGs (or reference a single `<symbol>`/asset), keeping the
dark-on-light (nav) and light-on-dark (footer) variants.

## Sync checklist (code → Figma, next session)

1. Import `tokens.json` via Tokens Studio → Create Variables.
2. Apply variables to all frames (Home, Work, Project, About, CV, Contact).
3. Swap isologo instances for node `5-64`.
4. Verify fluid type: Figma holds desktop max; code keeps the `clamp()`.

---

# 2026-06-07 update — Figma home changes ported to code

These came from Gabi's updated Figma home (read via screenshot; Figma file is on the
Starter team and MCP reads are blocked — see [[figma-plan-limits]]).

## New tokens
- **Primary / black** — `--color-primary` = `--c-espresso-900` (`#201e0f`). The primary
  CTA is the **only black** in the UI. `--color-primary-ink` = cream.
- **Nav tabs (warm gray, NOT black)** — selected tab uses `--color-tab-active-bg`
  (`--c-stone-400` `#aba592`); pressed = `--c-stone-500` `#969080`; hover = ink-08.
- **Type floors** — footnote 12 · content ≥14 · body 16. Applied by revaluing the
  `--fs-*` primitives, so every existing usage now respects the floor.
- **Subheader** — `--fs-subheader` (16px) for "and I've done…"-style sublines.
- **Grain** — `--grain-filter` (`url(#grain)`) + `--grain-tex`. See below.

## Grain / noise
- Params: `baseFrequency` x=0.5 y=0.5 · black `#000000` 25% · density 100%.
- Implemented as SVG `<filter id="grain">` (sprite at top of `<body>`); the filter
  keeps grain **inside the element's shape** → grain on **text glyphs, images, and dark
  surfaces only, never the flat page bg**.
- Applied to: project/section/hero images, the avatar (with grayscale), the footer
  surface, and display headings. Body copy is left clean (legibility + ≥14px rule).
- **Header** uses the *gradient* variant: `--grain-tex` painted on `.nav::before` and
  masked top→bottom, so grain+blur are strongest at the top and fade as content scrolls
  under it.
- Figma: reproduce as a Noise texture/effect on the same layers; header = noise layer
  with a top→bottom opacity gradient.

## Component → token spec  (every property pulls a token)

> Componentize each of these in the Figma library; bind every listed property to its variable.

### Button (variants: primary / secondary / tertiary) — `.btn`
| prop | token |
|------|-------|
| font | `--font-body` / `--fw-semibold` / `--fs-md` |
| radius | `--radius-pill` |
| padding | `--space-2` `--space-5` |
| **primary** bg / text | `--color-primary` / `--color-primary-ink` (hover `opacity .85`) |
| **secondary** bg / text / border | transparent / `--color-secondary-ink` / `--color-secondary-border` (hover `--color-ink-08`) |
| **tertiary** text | `--color-tertiary-ink` (hover `--color-ink`) |

### Nav tab — `.nav-links a`
| state | bg | text |
|-------|----|----|
| default | — | `--color-tab-ink` |
| hover | `--color-tab-hover-bg` | `--color-tab-hover-ink` |
| pressed | `--color-tab-pressed-bg` | — |
| **active** | `--color-tab-active-bg` | `--color-tab-active-ink` (`--fw-semibold`) |
| radius / font | `--radius-pill` / `--fs-md` | |

### Badge — `.badge` / `.badge.g`
| prop | token |
|------|-------|
| font / radius | `--fs-2xs` (12) · `--fw-bold` · `--ls-wide` / `--radius-pill` |
| default bg | `--color-ink-08` |
| success (`.g`) bg / text | `--color-success-bg` / `--color-success-ink` |

### Tag — `.tag`
| prop | token |
| font / radius / bg | `--fs-xs` (12) `--fw-medium` / `--radius-pill` / `--color-ink-08` |

### Project card — `.pcard`
| part | token |
|------|-------|
| thumb radius / placeholder | `--radius-card` / `--color-placeholder` |
| thumb shadow (rest / hover) | `--shadow-card` / `--shadow-card-hover` |
| image | `--grain-filter` |
| title | `--font-heading` `--fs-xl` (16) `--fw-bold` |
| desc | `--fs-sm` (14) `--color-ink-55` `--lh-normal` |
| meta | `--fs-xs` (12) `--color-ink-55` `--fw-medium` |
| card gap | `--space-3` |

### Input / Textarea — `.cf-i` / `.cf-t`
| prop | token |
|------|-------|
| padding / radius | `--space-3` `--space-4` / `--radius-field` |
| border / bg / text | `--color-ink-15` / `--color-bg` / `--color-ink` |
| font | `--font-body` `--fs-lg` (16) |
| focus | border `--color-ink` + `--ring-focus` |

### Subheader — `.hero-sub`
`--font-body` · `--fs-subheader` (16) · `--fw-regular` · `--color-ink-55`.

### Footer — `footer`
surface `--color-surface-dark` · text `--color-on-dark*` · borders `--color-on-dark-09/15`
· pills `--radius-pill` · **grain** `--grain-filter` on the whole surface.

### Isologo — `.isologo`
`assets/Icon.svg` (Figma node 5-64), self-contained vector with its own baked grain.
Nav 38×38 · footer 28×28.
