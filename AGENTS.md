# AGENTS.md

Instructions for AI agents working in this repo — Claude Code, Cursor, Codex and
others. **This is the only file to edit.** `CLAUDE.md` points here and holds no
rules of its own.

## Rules that come before everything else

**Never run `git commit`, `git push` or `git add`.** Martin makes every commit
and push himself. Make the changes, leave them in the working tree, and say
which files you touched. Suggesting a commit message in prose is welcome — just
do not run it. Read-only git commands (`status`, `log`, `diff`) are fine.

The reason is not procedural: a push to `main` deploys straight to
appfinningar.se. Committing on his behalf takes both the history and a public
deployment out of his hands.

**Never invent facts about Martin.** The site is used to look for work.
Background, education, previous jobs, technologies he knows — he fills those in
himself. When a fact is missing, leave a `<p class="todo">` box that is visible
in the browser instead of guessing. The same goes for project descriptions: a
vague text is worse than a visible gap, because it looks finished.

**Write code in English.** Comments, identifiers and commit messages are English
only. Swedish belongs to the site's copy — the strings in `ui.ts` and the
`bodies/` components — not to the source around it.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes to dist/
npm run preview  # serves dist/ as it will look in production
npm run check    # astro check — type checking for .astro and .ts
```

Requires Node 22.12+. There are no tests; `npm run check` is the nearest
equivalent and must pass before anything is handed over.

## Architecture

Static Astro site, bilingual, **zero JavaScript in the output**. That last part
is a deliberate choice — verify it still holds (`grep -r '<script' dist`) if you
add anything that could pull in client code.

**The language split is the one piece of structure the file tree does not give
away.** Swedish lives at the root, English under `/en/`
(`prefixDefaultLocale: false`). Three things hang together and must stay in
sync:

1. `src/pages/` and `src/pages/en/` — one thin file per page and language, which
   only picks `lang` and passes it on.
2. `src/components/bodies/` — the page content itself, **one component per page,
   not per language**. It takes `lang` as a prop. Never duplicate a body per
   language.
3. `routes` in `src/i18n/ui.ts` — the site map. The language switcher looks up
   *the same page* in the other language here. Forget to add a new page to
   `routes` and the switcher breaks silently: it sends the visitor to the home
   page instead of to the translation, with no error shown.

`Base.astro` builds `canonical` and `hreflang` out of `routes`, so a page
missing from there is also mislabelled for search engines.

**Where text lives:** short labels in `src/i18n/ui.ts` (both languages in the
same object). Longer prose in the relevant `bodies/` component, in a local
`copy` object. Do not mix the two — `ui.ts` has to stay readable at a glance.

**Content as data:** `src/data/projects.ts` (project cards) and
`src/data/photos.ts` (alt text per filename). A card carries two required pieces
of prose: `description` says what the project does, `stack` says how it is
built. Both are required — a card without a stack is exactly the half-finished
impression the site is meant to avoid. `repo` is omitted when the code is not
public, `tag` once the project is in real use.

**Images:** `src/assets/photos/` is read with `import.meta.glob` in
`PhotoGrid.astro` — add a file and it is on the site at the next build, no list
to update. Originals should be full resolution; Astro generates 400/800/1200 px
webp at build time. The build warns about images with no alt text. Images in
`public/` are **not** optimised — put photos in `src/assets/`, not there.

**Comments in templates:** use `{/* … */}`, not `<!-- … -->`. Astro passes HTML
comments straight through to the delivered page, so notes meant for developers
end up readable in the page source on the live site.

## Deploy

Push to `main` → GitHub Actions → `npm ci && npm run build` → `wrangler pages
deploy dist`. Requires the secrets `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID`.

Two traps that have already cost time:

**Production versus Preview.** The upload runs with `--branch=main`. If that
does not match the Pages project's production branch, the result is a preview
deployment: Actions goes green, wrangler says "Deployment complete", and
appfinningar.se still serves the old version. The deploy log therefore cannot be
used as proof. Verify against the real domain:

```bash
curl -sS https://appfinningar.se/ | grep -o '<title>[^<]*</title>'
```

**API Token, not Global API Key.** They sit on the same page in Cloudflare and
only one of them works with wrangler. A Global API Key gives `Authentication
error [code: 10000]`, which looks like a permissions problem but means the value
is the wrong kind of secret. The token needs `Account · Cloudflare Pages · Edit`
**and** the account selected under Account Resources — an empty Account
Resources produces the same error code.

Error code 10000 covers everything authentication-related and says nothing about
the cause. Test the token against `/user/tokens/verify` before putting it in a
secret, rather than pushing and waiting.
