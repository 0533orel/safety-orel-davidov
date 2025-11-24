# safety-orel-davidov

## What the code does
- Boots a minimal React single-page application using Vite.
- Uses TypeScript (strict settings) for all source files in src/.
- Uses a flat ESLint config for JavaScript/TypeScript and React rules.
- Entry point: src/main.tsx. Main example component: src/App.tsx.
- Vite plugin: @vitejs/plugin-react (configured in vite.config.ts).
- Public asset: public/vite.svg. HTML entry: index.html (currently lang="he" dir="rtl").

## How to use
1. Clone the repo:
```bash
git clone https://github.com/0533orel/safety-orel-davidov.git
cd safety-orel-davidov
```

2. Install dependencies:
```bash
npm install
```

3. Run development server (HMR):
```bash
npm run dev
# open the URL shown by Vite (usually http://localhost:5173)
```

4. Build production bundle:
```bash
npm run build
# runs: tsc -b && vite build
```

5. Preview production build locally:
```bash
npm run preview
```

6. Run linter:
```bash
npm run lint
```

## Files to know
- index.html — HTML shell (loads /src/main.tsx)
- src/main.tsx — app entry
- src/App.tsx — example component
- src/App.css — example styles
- vite.config.ts — Vite config (React plugin)
- tsconfig.app.json, tsconfig.node.json, tsconfig.json — TypeScript configs
- eslint.config.js — ESLint flat config
- package.json — scripts and dependencies

Notes:
- Change index.html lang/dir if the app language/direction is not Hebrew/RTL.
- For type-aware ESLint rules, update eslint.config.js to enable parserOptions.project and point to tsconfig files.
