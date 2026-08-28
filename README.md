# Sakuramori site (Next.js)

Deployable snapshot of the Sakuramori landing page.

    cd templates/site
    npm install
    npm run dev      # http://localhost:3000

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import it in Vercel. **Set Root Directory to `templates/site`.**
3. Framework preset auto-detects Next.js. No env vars needed.

## Why it lives under `templates/`

The project root is a design system: an automated compiler scans every `.js`/`.jsx`
outside `templates/` and registers it as a design-system component. The app's copies
of the components collided with the originals, so the whole app sits in `templates/site`,
which the compiler ignores. Nothing else about the app depends on this location.

## Structure

- `app/page.js` — assembles the page, owns the JP/MN/EN language state, loads lucide.
- `app/sections/` — Header, Hero, Partners, Story, Faq (FaqContact + SiteFooter).
- `app/components/` — the 16 design-system components (core / forms / marketing).
- `app/tokens/` — token CSS, imported by `app/globals.css`.
- `public/assets/` — logo, seal, asanoha pattern.

This is a **snapshot** of the design system at the project root. Changes to
`/components`, `/tokens` or `/assets` do not propagate automatically — re-copy them.

Icons come from the lucide UMD build loaded in `app/page.js`; components render
`<span data-lucide="name">` placeholders that `lucide.createIcons()` fills in.
