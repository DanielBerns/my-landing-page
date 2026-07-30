# DB Tech Solutions — Landing Page

A modern, responsive landing page for **DB Tech Solutions**, a (demo) tech consulting company based in Buenos Aires.

## Features

- ✅ **Responsive design** — mobile-first layout with hamburger nav on small screens
- ✅ **Scroll animations** — fade-in effects powered by `IntersectionObserver`
- ✅ **Glassmorphism header** — sticky nav with backdrop blur
- ✅ **Contact form** — with visual feedback (demo mode, no backend)
- ✅ **Social links** — GitHub, LinkedIn, X (Twitter), Instagram, YouTube
- ✅ **PDF downloads section** — ready for real documents
- ✅ **SEO optimized** — Open Graph, Twitter Cards, semantic HTML
- ✅ **Custom favicon & logo** — SVG + PNG versions

## Project Structure

```
my-landing-page/
├── index.html              # Main landing page
├── 404.html                # Custom error page
├── assets/
│   ├── css/style.css       # All styles (design tokens, responsive)
│   ├── js/main.js          # Animations, nav, form handler
│   └── images/             # Logo, favicon, hero image
├── docs/pdf/               # Downloadable documents
└── README.md
```

## Tech Stack

- **HTML5** semantic markup
- **Vanilla CSS** with custom properties (no frameworks)
- **Vanilla JavaScript** (no dependencies)
- **Google Fonts** (Inter)

## Development

Open `index.html` in any browser, or serve with any static file server:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

## Deployment

This site is deployed on **Cloudflare Workers** at [daniel-berns.com.ar](https://www.daniel-berns.com.ar/).

## License

© 2026 DB Tech Solutions. Demo project — all content is fictional.
