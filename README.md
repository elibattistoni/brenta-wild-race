# brenta-wild-race

Project (design + code) of the website https://brentawildrace.it/, the site of
the Brenta Wild Race trail race. The site content is in Italian.

## Tech stack

- React 18 + Vite 6 (JavaScript)
- React Router 6 (`HashRouter`, so deep links work on GitHub Pages)
- Mantine UI 7 (CSS Modules + PostCSS)
- Lenis (smooth scrolling)
- Inter font, self-hosted with `@fontsource/inter` (no Google Fonts requests)
- Hosting: GitHub Pages, deployed by GitHub Actions on every push to `main`

## Getting started

Needs Node 24 (see `.nvmrc`; `nvm use` picks it up).

```bash
npm ci --ignore-scripts                  # install exactly what the lockfile says
git config core.hooksPath .githooks      # once per clone: secret check before each commit
npm run dev                              # dev server on http://localhost:5173
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server, reloads on save |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serves `dist/` like the live site (with the CSP), on http://localhost:4173 |
| `npm run lint` | ESLint, no warnings allowed |

## Checks on every pull request

`main` is protected: a change needs a pull request, and these checks must pass:

- **Build** and **Lint**
- **Secrets (gitleaks)**: no passwords or keys in the code or history
- **Dependencies (OSV-Scanner)**: no known vulnerable packages
- **Static analysis (Semgrep)**: common JavaScript, React and workflow mistakes
- **Workflow audit (zizmor)**: GitHub Actions security

Dependabot proposes dependency updates every Monday. Accepted advisories, with
a reason and an expiry date, are in `osv-scanner.toml`.

## Adding a new race edition

1. Add the year to `paths.edizioni.children` in `src/utils/paths.js`.
2. Handle the year in `src/pages/editions/EditionDetailsPage.jsx`.
3. Put the new GPX track in `public/` and update its path in
   `src/pages/trail/TrailPathVariantsPage.jsx`.

## Security

See [SECURITY.md](SECURITY.md) to report a problem privately.

## License

GPL-3.0, see [LICENSE](LICENSE).
