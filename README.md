# ORYZO AI

A Next.js implementation of the ORYZO design system — a darkroom editorial product showcase for a cork coaster.

Built from the [Refero Styles](https://styles.refero.design/style/1f204e95-454a-437e-845b-c1b169d35607) design specification.

## Design System

**Theme:** Dark — warm near-black canvas with cream typography.

| Token | Color | Role |
|---|---|---|
| Warm Cream | `#ffedd7` | Text, labels, interactive borders |
| Walnut Shadow | `#100904` | Page canvas, section backgrounds |
| Bark Brown | `#382416` | Filled button surface |
| Cork Border | `#40372e` | Hairline dividers, card borders |
| Driftwood | `#6c5f51` | Secondary dividers, muted elements |
| Ember Accent | `#dc5000` | Credit lines, studio link only |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **CSS Modules** with custom properties (no Tailwind dependency)

## Structure

```
src/
  app/
    layout.tsx     # Root layout + metadata
    page.tsx        # Home page — assembles all sections
    globals.css     # Design tokens + utility classes
  components/
    TopNav.tsx      # Fixed transparent navigation
    Hero.tsx        # Full-viewport hero with wordmark + info card
    ProductReveal.tsx  # Three-column text/object/text section
    Features.tsx    # Feature cards grid
    Contact.tsx     # Email capture + footer
    Divider.tsx     # Dashed hairline section separator
```

## Design Principles

- Every section is 100vh — one statement per viewport
- Uppercase weight 500 for all UI text; mixed-case 29px weight 400 for body copy only
- Ember orange (`#dc5000`) never used on buttons or CTAs
- No drop shadows — depth comes from the two-step surface stack
- Dashed hairline dividers, never solid
- Full-bleed layout, no max-width container on sections
