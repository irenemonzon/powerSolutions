# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/product site for Aushertech's AusherMed line — medical-grade UPS power stations for home
healthcare and facility backup. React 19 + TypeScript + Vite, client-rendered, no backend/API layer.
All content (product specs, company values) is static data in `src/data/products.ts`.

## Commands

- `npm run dev` — start Vite dev server (plain HTTP on localhost)
- `npm run build` — type-check (`tsc -b`) then production build via Vite
- `npm run lint` — run Oxlint (`.oxlintrc.json`; plugins: react, typescript, oxc)
- `npm run preview` — serve the production build locally

There is no test suite configured in this repo.

## Architecture

- **Routing**: `src/App.tsx` defines all routes with `react-router-dom` (`BrowserRouter`/`Routes`/`Route`) —
  `/`, `/products`, `/about`, `/contact`. A `ScrollManager` component handles scroll-to-top on route change
  and scroll-to-anchor for in-page hash links (used for linking directly to a product, e.g. `/products#3600`).
  `MotionConfig reducedMotion="user"` wraps the app so Framer Motion respects the OS-level reduced-motion setting.
- **Page shell**: every page wraps its content in `<Layout>` (`src/components/Layout.tsx`), which renders
  `Navbar` + page content + `Footer`. Pages live in `src/pages/`, shared UI in `src/components/`.
- **Data-driven products**: `src/data/products.ts` exports `products: Product[]` (typed via
  `src/types/product.ts`) plus `companyValues` and `aboutValues` arrays. Pages map over these rather than
  hardcoding product cards/sections — adding or editing a product model means editing this file only
  (including its imported images from `src/assets/products/`), not the page components.
- **Product identity fields**: each `Product` has both `id` (used as React key) and `anchor` (e.g. `#2400`,
  used for deep-linking from other pages into `/products#anchor` and consumed by `ScrollManager`). `bg`
  (`'page' | 'surface'`) and `imageOrder` (`0 | 1`) control alternating section styling on the Products page —
  keep these varied when adding new products so the layout keeps alternating.
- **No path aliases**: imports are relative (`../data/products`, `../components/Layout`); `tsconfig.app.json`
  uses bundler module resolution with no `paths` mapping.

## Styling

Tailwind CSS v4, configured CSS-first (no `tailwind.config.js`) — all theme tokens are defined in
`src/index.css` via `@theme`. See that file before adding new colors/fonts rather than hardcoding hex/oklch
values inline. Key points:

- Two deliberate palettes: a warm "clinical paper" light neutral scale (`ink`, `page`, `surface`, `border`,
  ...) and a dark "instrument panel" scale (`panel`, `panel-soft`, `panel-line`, `panel-ink`, ...) used for
  the hero and other dark sections. Brand color is amber (`brand`, `brand-dark`, `brand-light`, `brand-vivid`),
  accent is teal (`accent`, `accent-vivid`), all defined in OKLCH.
- Fonts: `font-display` (Space Grotesk) for headings, `font-sans` (IBM Plex Sans) for body text, `font-mono`
  (IBM Plex Mono) for technical/spec labels — loaded via Google Fonts `@import` at the top of `index.css`.
- `ContinuityWaveform` (`src/components/ContinuityWaveform.tsx`) is a reusable inline SVG diagram (animated
  power trace vs. a "ghost" unprotected line) used as hero decoration; it has an `annotated` variant that
  adds labels/callouts for use in more explanatory contexts. It reads theme colors via CSS variables
  (`var(--color-brand-vivid)` etc.) so it stays in sync with the theme without prop-drilling colors.
- Respect `prefers-reduced-motion` (already handled globally in `index.css` and via `MotionConfig` in
  `App.tsx`) when adding new animations — use `motion-safe:`/`motion-reduce:` Tailwind variants as seen in
  the existing hero pulse and waveform animation.
