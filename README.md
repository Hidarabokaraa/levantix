# Levantix

Website for **Levantix — International Shipping & Customs Clearance to Syria**.

A fast, static, bilingual (English / العربية) one-page site. No build step and no framework:
plain HTML, CSS and a small vanilla JavaScript file.

![Levantix hero](assets/img/og-image.jpg)

## Features

- **English and Arabic** with a full right-to-left layout. The choice is remembered, and `?lang=ar` links straight to Arabic.
- **Quote form that sends to WhatsApp.** It validates the required fields and opens WhatsApp with the shipment details filled in, so no server is needed.
- **Tap-to-call phone numbers** and WhatsApp links.
- **Responsive** from 320px phones to wide desktops.
- **Accessible**: semantic landmarks, skip link, visible keyboard focus, and `prefers-reduced-motion` support.
- **Optimised images** (WebP with JPEG fallback, responsive `srcset`). The about image went from 18 MB to about 50 KB.
- **SEO basics**: meta description, Open Graph image and Organization structured data.

## Project structure

```
index.html              Page markup (English copy lives here)
assets/css/styles.css   All styles (design tokens at the top)
assets/js/main.js       Language switch, menu, quote form. Arabic copy lives here.
assets/img/             Optimised images, logo and icons
tools/                  Helper scripts (logo background removal)
```

## Run locally

Any static server works. For example:

```bash
npm start            # serves on http://localhost:5500
```

Or open it through XAMPP at `http://localhost/levantix/`.

## Editing content

- **English text**: edit `index.html` directly.
- **Arabic text**: edit the `AR` object at the top of `assets/js/main.js`. The keys match the `data-i18n` attributes in the HTML.
- **WhatsApp number**: `WHATSAPP_NUMBER` in `assets/js/main.js`, plus the `wa.me` links in `index.html`.
- **Colours and fonts**: CSS variables at the top of `assets/css/styles.css`.

## Deploy

The site is fully static, so it works on GitHub Pages, Netlify, Cloudflare Pages or any shared hosting.
Upload the repository contents as they are.
