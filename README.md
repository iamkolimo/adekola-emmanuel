# Adekola Emmanuel — Portfolio

Personal portfolio site for Adekola Emmanuel, Creative Director and founder of Kolimo Multimedia (Abuja, Nigeria).

Static site — no build step. `index.html` + `styles.css` + `script.js`.

## Local development

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Deployment

Deployed on Vercel as a static site. Push to `main` or redeploy via the Vercel dashboard.

## Replacing work images

The Selected Work grid currently uses styled placeholders. To add real images, drop files into `images/` and replace the `.img-placeholder` div inside each `.work-media` block with:

```html
<img src="images/your-image.jpg" alt="...">
```
