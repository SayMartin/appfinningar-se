# Photos

Put the image files here (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`). They are
picked up automatically at the next build — no list to update anywhere else.

**Add the originals at full resolution.** Astro scales them down to 400, 800 and
1200 px wide webp variants at build time and lets the browser pick the right
size. Shrinking them beforehand only gets you worse images on large screens.

The filename decides the order (sorted alphabetically) and becomes the fallback
alt text when none is given. So `2026-06-vattern-gryning.jpg` beats
`IMG_4821.jpg`.

Write alt text for every image in `src/data/photos.ts`. The build warns about
the ones that are missing — without alt text the image is invisible to screen
readers and to Google.
