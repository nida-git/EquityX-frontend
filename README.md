# SamiCapitalX frontend

## Deploy to Vercel

1. Import this repository into Vercel. If the repository contains multiple projects, set the Root Directory to `forntend` (the folder name in this repository); otherwise, use the repository root.
2. Set the project Node.js version to `20.19+` or `22.12+`.
3. Add `VITE_API_BASE_URL` to the Vercel environment variables:

   ```text
   https://samicapitalx.vercel.app
   ```

   Use the backend origin only, without a trailing slash or `/api`. This value is public frontend configuration, not a secret.

4. Build using `npm run build`; Vercel's output directory is `dist`.
5. After Vercel assigns the frontend URL, add that exact origin to the backend's `CLIENT_ORIGINS` environment variable, then redeploy the backend. Include the scheme (for example, `https://your-frontend.vercel.app`) and no trailing slash. Add preview origins to the backend Preview environment if needed.

The `vercel.json` rewrite supports direct navigation and refreshes on React Router routes. The API URL defaults to the production backend above. For local development against a local backend, create `.env.local` with `VITE_API_BASE_URL=http://localhost:5000`; do not commit `.env.local`.

https://samicapitalx.vercel.app/
## Local checks

```sh
npm install
npm run lint
npm run build
```
