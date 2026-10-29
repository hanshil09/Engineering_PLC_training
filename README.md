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

## Docker

```sh
docker build -t engineering-training .
docker run --rm -p 10000:10000 engineering-training
```

Open http://localhost:10000. The image builds the frontend with Node.js and serves compiled assets with Nginx. It listens on `0.0.0.0:$PORT`, defaulting to `10000`. To use a different port: `docker run --rm -e PORT=8080 -p 8080:8080 engineering-training`.

The Docker context uses an allowlist: the data folder, Git history, local dependencies and other unrelated files are excluded. `/healthz` is the health-check endpoint.

## Deploy on Render

Commit and push `Dockerfile`, `.dockerignore`, `nginx.conf.template`, `render.yaml` and this README to GitHub first.

1. In Render, select **New > Web Service** and connect `hanshil09/Engineering_PLC_training`.
2. Select the `main` branch and the **Docker** runtime. Keep the root directory at the repository root and the Dockerfile path as `./Dockerfile`.
3. Choose your preferred instance plan. Set the health-check path to `/healthz`.
4. Leave the Docker command override blank so the image's startup command is used, then create the service.

Alternatively, create a Render Blueprint from the repository using the included `render.yaml`. Review the service and plan settings in Render before deploying.

Render handles HTTPS; the container serves HTTP on the assigned port. No separate build or start command is needed for Docker deployment.
