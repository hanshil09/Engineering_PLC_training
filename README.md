# Engineering Department dashboard

React + TypeScript + Vite + Tailwind CSS, with Recharts charts and Lucide icons.

## Run locally

```sh
npm install
npm run dev
```

Open the local address shown in the terminal. Production build: `npm run build`.

The application uses only deterministic synthetic records in `src/mockData.ts`. It does not read any data folder or contact an external service. All email addresses use example.com.

Features: linked team, level, cohort and text filters; count/percentage charts; level distribution; sortable paginated participant directory; filtered CSV export; responsive layouts and keyboard controls.

Cohorts are named Level 1, Level 2 and Level 3. Every engineering team has mock records at all three levels. A person may appear in more than one cohort, so record counts and unique participant counts differ. Training records do not establish completion, eligibility or certification.
