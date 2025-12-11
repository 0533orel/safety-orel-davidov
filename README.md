# Safety – Orel Davidov

A modern single-page web application built with TypeScript and Vite.  
The project is structured as a standard `vite` + TypeScript app with a focus on modular, maintainable front‑end code and a clear separation between application logic, configuration, and static assets.

## Tech Stack

- **Language:** TypeScript
- **Bundler / Dev Server:** Vite
- **Runtime:** Node.js (for tooling and scripts)
- **Linting:** ESLint (configured via `eslint.config.js`)
- **Build Target:** Modern browsers (configured via `tsconfig*.json` and `vite.config.ts`)

## Project Structure

The repository is organized as follows:

- `index.html` – Root HTML template loaded by Vite.
- `src/` – Main application source code (TypeScript, components, logic, styling).
- `public/` – Static assets served directly without bundling.
- `package.json` – Project metadata, scripts, and dependencies.
- `vite.config.ts` – Vite configuration (aliases, plugins, dev server, build settings).
- `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json` – TypeScript configuration for app and tooling.
- `eslint.config.js` – Linting rules and conventions.
- `README.md` – Project documentation (this file).

> The core application logic, UI components, and domain‑specific behavior live under the `src/` directory.

## Getting Started

### Prerequisites

- **Node.js** (LTS version recommended, e.g. ≥ 18)
- **npm** (bundled with Node.js) or another Node package manager

Verify your environment:

```bash
node -v
npm -v
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/0533orel/safety-orel-davidov.git
cd safety-orel-davidov
npm install
```

### Development

Run the local development server with hot-reload:

```bash
npm run dev
```

Then open the URL printed in the terminal (commonly `http://localhost:5173/`).

During development you can:

- Edit files under `src/` to modify application logic and UI.
- Add static assets to `public/` (they will be served as-is).
- Adjust tooling in `vite.config.ts` and `eslint.config.js` as needed.

### Production Build

Create an optimized production build:

```bash
npm run build
```

This generates a bundled, minified output (typically in `dist/`) suitable for deployment.

### Preview Production Build

Serve the built application locally to verify the production bundle:

```bash
npm run preview
```

## Scripts

Commonly available scripts (from `package.json`):

- `npm run dev` – Start the Vite development server.
- `npm run build` – Build the application for production.
- `npm run preview` – Preview the production build locally.
- `npm run lint` (if defined) – Run ESLint over the codebase.

Check `package.json` for the full and up‑to‑date list of scripts and tooling commands.

## Configuration

### Vite

`vite.config.ts` controls:

- Entry points and root directory
- Plugins (for example, React / Vue / other frameworks if used)
- Aliases for cleaner imports
- Build and server options

Adjust this file to customize how the app is bundled and served.

### TypeScript

The TypeScript configuration is split to better handle app and tooling:

- `tsconfig.json` – Base configuration shared by the project.
- `tsconfig.app.json` – Settings for the browser application code.
- `tsconfig.node.json` – Settings for Node‑based tooling (Vite config, scripts).

You can update compiler options, strictness levels, and path aliases here.

### ESLint

`eslint.config.js` defines linting rules and presets.  
It ensures a consistent code style and catches common errors during development.

Run linting (if a lint script exists):

```bash
npm run lint
```

## Deployment

Any static hosting solution that can serve the built `dist` folder can be used, for example:

- GitHub Pages
- Netlify
- Vercel
- Static hosting behind Nginx or another web server

A typical deployment flow:

```bash
npm run build
# upload or deploy the contents of dist/ to your hosting provider
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/my-change
   ```
3. Make your changes in `src/` and update tests/configuration if relevant.
4. Run checks (build, lint, tests if defined).
5. Commit and push your branch.
6. Open a pull request with a clear description of your changes.

## License

This project does not currently declare a license.  
If you plan to use or redistribute this code, consider adding an appropriate open‑source or proprietary license to `LICENSE` and updating this section accordingly.
