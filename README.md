# TestHub — Next.js application (dev-only)

This repository contains a Next.js (App Router) application used for creating and running tests.

Use the development workflow below — production Docker setup has been removed.

## Project layout (important files)

- `app/` — the Next.js application (pages, API routes under `app/api`).
- `lib/` — helpers and Mongoose models (`Test`, `Attempt`, `User`).
- `public/` — static assets.
- `package.json`, `tsconfig.json` — project config and scripts.
- `Dockerfile.dev` — development Docker image (if present).
- `docker-compose.dev.yml` — development compose helper.

Key app folders:

- `app/editor` — editor UI (create/edit tests).
- `app/tests` — public tests listing and test-taking pages.
- `app/history` — attempt history and per-attempt pages.

## Local development

Install dependencies and run the dev server locally:

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Docker-based development (containerized)

If you prefer running in Docker for development, use the dev compose which mounts your working tree and provides a `node_modules` named volume:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

Notes for dev compose:

- Host code is mounted into the container to enable quick edits.
- A named volume `node_modules` is used so container-installed dependencies do not overwrite the host.
- `WATCHPACK_POLLING=true` may be set in the dev service to improve file-watch reliability on some hosts.

## Removed

- Production Dockerfile and production `docker-compose.yml` have been removed to simplify the repository — use the dev workflow above.

If you want the production setup restored later, I can add a simplified, tested production flow on request.
# TestHub — Next.js application

This repository contains a Next.js application (app router) used for creating and running tests.

## Project layout (important files)

- `app/` — the Next.js application (pages, API routes under `app/api`).
- `lib/` — helpers and Mongoose models (`Test`, `Attempt`, `User`).
- `public/` — static assets.
- `package.json`, `tsconfig.json` — project config and scripts.
- `Dockerfile.prod`, `Dockerfile.dev` — Docker images for prod/dev (added).
- `docker-compose.yml`, `docker-compose.dev.yml` — docker-compose helpers (added).

Key app folders:

- `app/editor` — editor UI and routes for creating/editing tests.
- `app/tests` — public tests listing and test-taking pages.
- `app/history` — user attempt history pages.

## Local development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
# open http://localhost:3000
```

Docker-based development (recommended when testing in container):

```bash
docker-compose -f docker-compose.dev.yml up --build
```

Notes for dev compose:
- The compose file mounts the project into the container (`./:/usr/src/app`).
- A named volume `node_modules` is used to keep container-installed modules separate.
- `WATCHPACK_POLLING=true` is set to improve file watching on some host filesystems.

## Production build & Docker

Build and run the production image locally with compose:

```bash
docker-compose up --build
```

Behavior of `Dockerfile.prod`:
- Installs production dependencies, runs `npm run build`.
- Attempts `npm run export` to produce a static `out/` directory (if your app supports export).
- If `out/` exists, the container serves it with `serve -s out -l 3000`.
- Otherwise it falls back to `npm run start` (which should run `next start`).

If your app relies on SSR or API routes, prefer `next start` mode (do not rely on `next export`).

## Docker files added

- `Dockerfile.prod` — production image (node:18-alpine).
- `Dockerfile.dev` — development image with `nodemon` and `WATCHPACK_POLLING`.
- `docker-compose.yml` — production compose (maps `3000:3000`).
- `docker-compose.dev.yml` — development compose (code mount + `node_modules` named volume).

## Running tips

- To run only the frontend image in prod mode: `docker build -f Dockerfile.prod -t testhub-prod .` then `docker run -p 3000:3000 testhub-prod`.
- To run dev with hot reload inside container: `docker-compose -f docker-compose.dev.yml up --build`.