# appfinningar.se

Portfolio and project site for Martin. Static site built with
[Astro](https://astro.build), hosted on Cloudflare Pages, in Swedish and
English.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes to dist/
npm run preview  # serves dist/ as it will look in production
```

Requires Node 22.12 or later.

## Structure

| Path | Contents |
|---|---|
| `src/pages/` | One file per page. Swedish at the root, English under `en/`. |
| `src/components/bodies/` | The page content, shared between languages — one component per page, not per language. |
| `src/i18n/ui.ts` | All short strings and labels, both languages. Also the site map, `routes`. |
| `src/data/projects.ts` | The project cards. Add a project here and it shows up in both languages. |
| `src/data/photos.ts` | Alt text for the images. |
| `src/assets/photos/` | The image files. See the README in that folder. |
| `public/` | Files copied through untouched: favicon, robots.txt, a CV if there is one. |

## Common changes

**Add a project** — one object in `src/data/projects.ts`. `description` says what
the project does and `stack` says how it is built; both are required, in both
languages. Omit `repo` when the code is not public and no source link is
rendered. Omit `tag` once the project is in real use.

**Add images** — drop the files into `src/assets/photos/` at full resolution and
write alt text in `src/data/photos.ts`. The build warns about images with no alt
text.

**Add a page** — create the file in both `src/pages/` and `src/pages/en/`, and
add it to `routes` in `src/i18n/ui.ts`. That is how the language switcher finds
the right counterpart instead of throwing the visitor back to the home page.

**Change a string** — nearly everything short lives in `src/i18n/ui.ts`. Longer
prose lives in the relevant `bodies/` component.

## Languages

Swedish lives at the root (`/`, `/om/`, `/foto/`), English under `/en/`. The
pages link to each other with `hreflang`, so Google understands they are
translations rather than duplicate content. `x-default` points at Swedish.

Code — comments, identifiers, commit messages — is English only. Swedish is the
site's copy, not the source around it.

## Deploy

A push to `main` builds and uploads automatically via GitHub Actions.

Two secrets must exist in the repo (Settings → Secrets and variables → Actions):

| Name | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare token with the permission Account · Cloudflare Pages · Edit |
| `CLOUDFLARE_ACCOUNT_ID` | `CLOUDFLARE_ACCOUNT_ID` |

Without them the job fails with `it's necessary to set a CLOUDFLARE_API_TOKEN
environment variable`. The log's `with:` block then shows only `command:` —
that is how you tell a secret is missing rather than wrong.

### Worth checking after the first deploy

The upload runs with `--branch=main`. If the Pages project's production branch
is called something else, the result is a **preview deployment**: Actions goes
green, wrangler reports success, and appfinningar.se carries on serving the old
version. It is the most confusing way this can fail.

Check in Cloudflare → Pages → appfinningar → Deployments that the new row is
marked **Production**, not Preview.
