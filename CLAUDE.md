# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing site for the Italian trail race **Brenta Wild Race** (https://brentawildrace.it). Built with React 18 + Vite, deployed to GitHub Pages on every push to `main` (`.github/workflows/workflow.yml`). Content is in Italian — preserve Italian copy when editing pages.

## Commands

```bash
npm run dev        # Vite dev server
npm run build      # production build → dist/
npm run preview    # preview the built dist/
npm run lint       # eslint . --ext js,jsx --max-warnings 0
```

There is no test suite. Lint is the only automated gate.

## Routing & deployment quirks

- Uses **`HashRouter`** (`src/App.jsx`), not `BrowserRouter`. URLs look like `https://brentawildrace.it/#/gara/percorso-varianti`. This is intentional — GitHub Pages doesn't rewrite unknown paths to `index.html`, and the hash router avoids 404s on deep links. Don't switch to `BrowserRouter` without addressing this.
- All routes are declared centrally in `src/utils/paths.js` (`paths`, `mainNavPaths`, `footerPaths`). The nav and footer are derived from this object — when adding/renaming a route, update `paths.js` and the `<Route>` tree in `src/App.jsx` together.
- Page components are lazy-loaded with `React.lazy` in `src/App.jsx`; `Suspense` falls back to `components/shared/Loading`.

## Styling system

- **Mantine v7** with a custom theme in `src/mantineUItheme.js`. Forced dark color scheme (`forceColorScheme="dark"` in `App.jsx`).
- Custom palette keys: `orangeBrenta`, `orangeBlack`, `bluePrimary`, `fontWhite`. Use these via Mantine's `c=` / `bg=` props rather than hardcoded hex.
- Custom CSS variables (font weights `--mantine-fw-*`, heading sizes `--mantine-fst-h*`) are exposed by the `resolver` function in `mantineUItheme.js` and consumed by the per-component `.module.css` files.
- **PostCSS** (`postcss.config.cjs`) adds Mantine's preset plus an extra `xxs` breakpoint at `26.25em` (420px). Use `@media (min-width: $mantine-breakpoint-xxs)` etc. inside CSS modules.
- Each component uses a co-located **CSS Module** (`Foo.jsx` + `Foo.module.css`). Follow that pattern for new components.

## Shared building blocks

`src/components/shared/` holds the layout primitives — prefer these over re-implementing layout from scratch:

- `PageContainer`, `PageSection`, `PageSectionTitle` — page-level structure
- `Heading`, `BlueTitleLarge/Medium/Small`, `HighlightedText` — typography
- `ButtonPrimary`, `ButtonSecondary`, `DownloadButton`
- `ParagraphText`, `Loading`

`src/components/layout/` is the chrome: `RootLayout` (Outlet + smooth scroll), `MainNavigation`, `Footer`, `PrivacyBanner` (cookie banner using `react-cookie`).

## Smooth scrolling

`RootLayout` initializes `@studio-freight/lenis` once and runs its RAF loop, plus scrolls to top on route change. If a page needs to override scroll behavior, do it on top of Lenis rather than calling `window.scrollTo` mid-page.

## Assets

- **SVGs** are imported as React components via `vite-plugin-svgr` using the `?react` suffix: `import Logo from "./logo.svg?react"`. Plain `import url from "./foo.svg"` still works for `<img src={url}/>` use.
- **GPX files** are treated as static assets (`assetsInclude: ["**/*.gpx"]` in `vite.config.js`). Race-track GPX files live in `public/` and are referenced by absolute path (e.g. `/traccia-gpx-brenta-wildrun-2025.gpx`). When adding a new edition, drop the GPX in `public/` and update the reference in `src/pages/trail/TrailPathVariantsPage.jsx`.
- Hero/altimetria images in `public/` ship at multiple widths (`-50px`, `-800px`, `-1200px`, etc.) and are used with `react-lazy-load-image-component` for progressive loading. Match this pattern when adding new hero imagery.

## Editions page

`paths.edizioni.children` lists historical race years (2017, 2018, 2019, 2024, 2025…). When a new edition is added: add it to `paths.js`, then handle the `year` param in `src/pages/editions/EditionDetailsPage.jsx` (currently a hardcoded `if (year === "..." || ...)` chain — extend it).

## Lint policy

ESLint runs with `--max-warnings 0`. There is no Prettier config — match the surrounding file's style (double quotes, 2-space indent are dominant).
