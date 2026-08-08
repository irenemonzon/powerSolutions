# Aushertech — AusherMed

Marketing and product site for Aushertech's AusherMed line — medical-grade UPS power stations for home
healthcare and facility backup power.

## Stack

- React 19 + TypeScript
- Vite (with Oxlint for linting)
- React Router for client-side routing
- Tailwind CSS v4 (CSS-first config, see `src/index.css`)
- Framer Motion for animation

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check and build for production
- `npm run lint` — run Oxlint
- `npm run preview` — preview the production build locally

## Project structure

```
src/
  assets/products/   Product images
  components/        Shared UI (Navbar, Footer, Layout, ...)
  data/               Product catalog and static site content
  pages/              Route-level pages (Home, Products, About, Contact)
  types/              Shared TypeScript types
```

Product content (specs, taglines, images) is data-driven — see `src/data/products.ts`. Adding or editing a
product model generally only requires changes there.

See `CLAUDE.md` for more detailed architecture and styling notes.
