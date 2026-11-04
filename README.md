# Pratyush Verma — Portfolio

A Next.js portfolio with About, Projects, Speaking, and Blog pages.

## Requirements

- Node.js 22 (or Node.js 20.9+ and below 23)
- npm

## Verify before deployment

```bash
npm ci
npm test
```

The test command runs ESLint, TypeScript checks, a production build, and HTTP
smoke tests for every portfolio route and the 404 page.

## Run locally

```bash
npm run dev
```

## Deploy

Deploy with a host that supports Next.js 16 and Node.js. The standard production
commands are:

```bash
npm run build
npm run start
```

No environment variables are required.
