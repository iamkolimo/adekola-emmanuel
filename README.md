# Adekola Emmanuel · Portfolio

Personal portfolio site for Adekola Emmanuel, Creative Director and founder of Kolimo Multimedia (Abuja, Nigeria).

Static site · no build step. `index.html` + `styles.css` + `script.js`.

## Local development

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Deployment

Deployed on Vercel as a static site. Push to `main` or redeploy via the Vercel dashboard.

## Case studies

Project pages live in `work/`. `work/ajeside.html` is the template to copy for
a new one · it links back to `index.html#work` and reuses `styles.css`.

Any `<img>` carrying a `data-fallback="LABEL"` attribute degrades to a labelled
placeholder block when its file is absent, so a page stays presentable while
images are still being prepared. `images/ajeside/README.txt` lists the eight
still filenames that page expects.

## Work entries

Every entry in Selected Work is a real project with its own case study in
`work/`. Each has an image folder under `images/` with a README describing
what each file is and how it was generated.

Full-resolution sources live in `images/Selected/`, which is deliberately
untracked · those files are ~106 MB of PNG and are source, not web assets.
Web copies are made with `sips` at 2000px / quality 80-82.
