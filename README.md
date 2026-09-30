# Rajeef Rahim — Website

Personal website for Rajeef Rahim. Next.js 16 (App Router) · TypeScript · Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Environment

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public site URL — used for canonical links, Open Graph, sitemap and robots |

## Structure

```
src/
  app/(site)/        pages sharing the header/footer layout (home, articles, article detail)
  app/               root layout, SEO (sitemap, robots, manifest), favicons & share images
  components/        layout (Header, Footer, SplashScreen), home sections, article cards, ui
  config/site.ts     site name, nav, socials, contact, SEO defaults
  data/              static content (home sections, articles) — swap for an API later
```

Content is static for now; edit `src/data/*` and `src/config/site.ts`.
