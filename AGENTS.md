# AGENTS.md

## Cursor Cloud specific instructions

### Project Overview

This is a React portfolio website (ejected Create React App) for Joseph Heupler. It is a single-page static frontend application with no backend, no database, and no Docker. See `README.md` for standard npm scripts.

### Key Commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Lint | `NODE_ENV=development npx eslint src/` |
| Test | `npx jest --watchAll=false --ci` |
| Build | `npm run build` |
| Serve build | `npx serve -s build -l 3000` |

### Known Issues and Caveats

- **Webpack dev server (`npm start`) does not compile in development mode.** There is a pre-existing webpack config bug: `config/webpack.config.js` sets `runtimeChunk: 'single'` alongside a hardcoded `filename: 'static/js/bundle.js'` (no `[name]` placeholder), causing "Multiple chunks emit assets to the same filename" error. Workaround: use `npm run build && npx serve -s build -l 3000` to serve the production build locally.
- **ESLint requires `NODE_ENV`.** The `babel-preset-react-app` parser fails without it. Always run ESLint as `NODE_ENV=development npx eslint src/`.
- **Pre-existing test failures.** Two tests in `src/__tests__/` fail due to: (1) `react-router-dom` v7 ESM incompatibility with Jest v27 (`Navigation.test.js`), and (2) `react-ga4` v2 missing `.exception()` method (`ErrorBoundary.test.js`). These are code-level issues, not environment issues.
- **`@testing-library/react` must be installed** as a dev dependency (not declared in the original `package.json` but imported by tests). The update script handles this.
- **Background execution caveat.** The CRA start script exits when `stdin` closes (line 141-146 in `scripts/start.js`). Setting `CI=true` prevents the stdin listener but does not fix the compilation error above.
