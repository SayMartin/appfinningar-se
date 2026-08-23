# appfinningar.se

The landing page at the apex domain. One static HTML file, no build step, no
dependencies — all CSS is inline so the page is a single request.

Its job is not decoration: it is the only page that links to the subdomains
(`cv-forge`, `wordlune`, `school-cms-demo`). Without those links none of them
is reachable by a crawler, because nothing else on the web points at them.

## Layout

```
public/index.html          the entire site
.github/workflows/deploy.yml
```

Everything served must live under `public/`. Deploying the repo root would
publish `.github/workflows/deploy.yml` as a fetchable file on the site.

## Deploy

Push to `main`. The workflow runs `wrangler pages deploy public` against the
Cloudflare Pages project **`appfinningar`**.

That project was created through the dashboard as a **Direct Upload** project,
which is why this repo deploys with `wrangler` instead of using Pages' built-in
Git integration. A Direct Upload project cannot be converted to a Git-connected
one; switching would mean a new project and re-pointing the custom domain, with
the site down in between. Deploying into the existing project avoids that
entirely.

### Required GitHub secrets

| Secret | Where it comes from |
| ------ | ------------------- |
| `CLOUDFLARE_API_TOKEN` | Cloudflare → My Profile → API Tokens → Create Token → **Cloudflare Pages: Edit** |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard URL: `dash.cloudflare.com/<account-id>/…` |

### Verifying a deploy landed on production

Check the Pages project's **Deployments** tab: the run must be labelled
**Production**, not Preview. A preview deployment succeeds, reports green in
Actions, and leaves `appfinningar.se` serving the previous version — the most
confusing way for this to go wrong. If it says Preview, the project's
production branch does not match `--branch=main` in the workflow.

## DNS

`appfinningar.se` and `www.appfinningar.se` are Pages custom domains on this
project. Mail is unrelated and stays with Strato — the `MX`, SPF, DKIM, DMARC
and autodiscover records must not be touched when changing where the site is
hosted.
