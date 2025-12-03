# safety-orel-davidov

A React + TypeScript SPA for managing and reviewing safety events.  
The app is built with Vite, React Router, MUI (Material UI), and custom context providers.

## What the app does

- Boots a single-page React application with Vite.
- Uses **React Router** to manage navigation between pages:
  - Home (dashboard / overview)
  - Events list
  - New event form
  - About / info page
- Uses **context providers** for global state:
  - `SafetyProvider` – safety events / domain state
  - `ThemeProvider` – dark/light theme and MUI theming
- Uses **Material UI (MUI)** components and theming for layout and styling.
- Uses **utility helpers** for form handling and validation logic.
- Organized into clear domains:
  - `pages/` – top-level screens
  - `components/` – reusable UI components (layout, header, footer, tables, form, etc.)
  - `context/` – global state providers
  - `utils/` – form + validation helpers
  - `routes/` – central routing configuration

## Tech stack

- **Frontend:** React 19, React DOM
- **Routing:** React Router DOM
- **UI Library:** MUI (Material UI) + Emotion (`@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`)
- **Language:** TypeScript (strict)
- **Build tool:** Vite
- **Linting:** ESLint (flat config) with React + TypeScript rules

## How to run

1. Clone the repo:

```bash
git clone https://github.com/0533orel/safety-orel-davidov.git
cd safety-orel-davidov
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server (with HMR):

```bash
npm run dev
# then open the URL shown in the terminal (usually http://localhost:5173)
```

4. Build for production:

```bash
npm run build
# runs: tsc -b && vite build
```

5. Preview the production build locally:

```bash
npm run preview
```

6. Run linter:

```bash
npm run lint
```

## Project structure (high level)

```text
src/
  App.tsx              # Wraps routes with ThemeProvider
  main.tsx             # App entry – BrowserRouter + SafetyProvider + App

  routes/
    AppRoutes.tsx      # All route definitions (Home, Events, New Event, About, etc.)

  pages/
    HomePage.tsx       # Main landing/dashboard page
    EventsListPage.tsx # List of safety events
    NewEventPage.tsx   # Form for creating a new safety event
    AboutPage.tsx      # About/info page

  components/
    layout/            # Layout components (shell, containers, etc.)
    header/            # Header / top navigation
    footer/            # Footer
    common/            # Reusable/common UI components
    eventsTable/       # Table / list UI for events
    safetyForm/        # Safety event form components

  context/
    ...                # ThemeProvider, SafetyProvider and related context logic

  utils/
    formHelpers.tsx    # Helpers for handling forms, default values, submissions, etc.
    validation.ts      # Validation logic for form fields / safety events

  assets/
    ...                # Static assets (logos, images, icons, etc.)
```

## Main entry points

- **`src/main.tsx`**
  - Creates the React root.
  - Wraps the app with:
    - `SafetyProvider` (global safety context)
    - `BrowserRouter` (client-side routing)
    - `StrictMode`

- **`src/App.tsx`**
  - Wraps the routed app with `ThemeProvider` for MUI + theme context.
  - Renders `AppRoutes`.

- **`src/routes/AppRoutes.tsx`**
  - Central place for all React Router routes (e.g. `/`, `/events`, `/events/new`, `/about`).

## Styling and theming

- UI is built with **MUI**:
  - Uses `@mui/material` for components.
  - Uses `@mui/icons-material` for icons.
  - Uses Emotion for styling/theming.
- Global theme and mode (light/dark, colors, etc.) are provided via `ThemeProvider` (`context/themeContext`).

## Forms & validation

- Form behavior and logic are extracted to:
  - `utils/formHelpers.tsx` – helpers for building/handling safety forms.
  - `utils/validation.ts` – validation rules for fields and event data.
- The **New Event** flow (`NewEventPage` + `safetyForm` components) uses these utilities to handle:
  - Initial values
  - Field-level validation
  - Submit handling

## Notes

- The app assumes a modern browser environment (React 19 + Vite).
- If you change the main language or text direction of the app, update:
  - `index.html` (`lang` / `dir`)
  - Any hard-coded localized text in `pages/` and `components/`.
