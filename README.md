# Safety — incident reporting
A Hebrew React + TypeScript application for creating and reviewing safety incidents.
It includes a multi-step report form, desktop/mobile event lists, search, detail dialogs,
editing, deletion, image attachments and theme selection.

## Run locally
Requires Node.js 22 and the [Safety API](https://github.com/0533orel/safety-backend-orel-davidov).
```sh
npm ci
cp .env.example .env.local
npm run dev
```
PowerShell: `Copy-Item .env.example .env.local`.
Set VITE_API_BASE_URL to the API origin (default http://localhost:3000).
Vite reads it at build time. Never put secrets in VITE_ variables.

## Validate
```sh
npm run lint
npm run build
npm test
npm run preview
```
Build output is in dist. If preview runs on port 4173, add that origin to backend CORS_ORIGINS.
A host must rewrite client routes to index.html.

## Demo walkthrough
1. Start the API and its development database.
2. Create a synthetic incident using the report form.
3. Search for it and open the details dialog.
4. Edit its description; attach, replace, then remove a sample image.
5. Delete the demo incident and confirm it disappears.
Use synthetic data only. No public hosted demo is currently claimed.

## Architecture
React pages → SafetyProvider → HTTP API → TypeORM → PostgreSQL.
Image URLs and API calls share one environment-based origin.
The server owns IDs and creation timestamps.

## SAFE-01 contract
Use this frontend with the matching SAFE-01 API version. `GET /api/events` now returns
`{ items, nextCursor }`; it loads 50 events initially and more through **טען אירועים נוספים**.
Search covers the loaded records, as stated above the search field. Failed page loads can be
retried without advancing the cursor. Reload the page to see new records from other clients.

`src/contract/event-contract.json` v1 is shared with the backend; `formOptions.ts` consumes
its canonical options (including result values without trailing spaces). Change both copies
together when evolving the contract.

Event dates and times use **Asia/Jerusalem**, including validation and default/max input
values, regardless of the browser's timezone. These fields represent civil wall time at
minute precision; they do not distinguish the repeated DST hour or reject the skipped hour.
Creation timestamps remain UTC epoch milliseconds. The API enforces domain/conditional
validation; database checks also protect enum/date/time fields. Synthetic data can be loaded
with the backend's explicitly enabled, repeatable demo seed.

## Limitations
The API currently has no user authentication or roles: keep this demonstration local.
The project has build/lint and contract/time tests, but browser automation, accessibility auditing,
user accounts and a production deployment remain future work.
