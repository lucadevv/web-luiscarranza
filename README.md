# web-luiscarranza

Official landing page for **[Luis Carranza, LLC](https://luiscarranza.com)** — Delaware-registered software company.

Apple-corporate aesthetic: Geist typography, OKLCH palette, restrained motion, full internationalization (EN/ES), and a complete SEO + analytics stack.

## Stack

- **Next.js 15** (App Router, React 19, Edge runtime for OG image)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first config via `@import "tailwindcss"` + `@theme {}`)
- **Geist Sans & Geist Mono** (loaded via `next/font`)
- **MDX** for blog content (with `react-markdown` + `gray-matter`)
- **Firebase Analytics** with cookie-consent gating
- **Resend** for the contact form and newsletter
- **Docker** for development environment

## Features

- 🌐 **Full i18n** — every visible string in English and Spanish (rioplatense), persisted in `localStorage`
- 🎨 **Apple-corporate design** — Geist + OKLCH + 8pt grid + fluid clamps
- 📊 **Firebase Analytics** with 10 custom events (CTAs, FAQ, nav, language, form submits, etc.)
- 📧 **Contact form** with server-side validation, honeypot, rate-limiting, and Resend
- 📬 **Newsletter signup** wired to Resend Audiences
- 📝 **Blog** (`/blog`) with MDX, RSS feed, BlogPosting JSON-LD, reading time
- 📖 **About page** (`/about`) — extended manifesto, founder bio, timeline, values
- 📇 **Contact page** (`/contact`) — legal entity info, response times, dedicated form
- ⚖️ **Privacy + Terms** (`/privacy`, `/terms`) — bilingual
- 🔍 **SEO** — Organization + Person + WebSite + FAQPage schemas, hreflang, sitemap, manifest
- 🖼️ **Dynamic OG image** via `next/og` (Edge runtime)
- 🍪 **Cookie banner** (GDPR/CCPA compliant)
- 🔒 **Security** — CSP, HSTS, X-Frame-Options, rate-limit on API routes, origin check
- 📱 **Mobile-first** with full-screen slide-down menu

## Development (Docker)

```bash
docker compose up -d --build
```

Visit **http://localhost:3005** (host) — the container exposes Next.js on port 3000 internally with hot reload.

### Useful dev commands

```bash
# tail logs
docker compose logs -f web

# restart (picks up env var changes)
docker compose restart web

# rebuild from scratch
docker compose down -v && docker compose up -d --build

# stop everything
docker compose down
```

## Development (without Docker)

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev
```

Then visit http://localhost:3000.

## Production (Docker)

Production uses a multi-stage build with Next.js `output: 'standalone'` mode.
Final image is ~50 MB (vs ~1 GB with full `node_modules`).

```bash
# On your VPS, in the project directory:
docker compose -f docker-compose.prod.yml up -d --build
```

The container binds to `127.0.0.1:3000` for optional host debugging and joins
the external Docker network `proxy-network` (alias `luis-carranza`) so
[Nginx Proxy Manager](https://nginxproxymanager.com/) can reach it by container name.

Create the network once on the VPS if it does not exist:

```bash
docker network create proxy-network
```

In NPM, set the proxy host **Forward Hostname** to `luis-carranza` and **Port** to `3000`.

### Production env vars

`docker-compose.prod.yml` reads from `.env.local` AND injects public Firebase
vars as build args (they need to be baked into the client bundle at build time).

Make sure `.env.local` exists on the VPS with all values filled in
(see `.env.example` for the full list).

### Production health check

The container has a built-in healthcheck that hits `http://localhost:3000`
every 30 seconds. Check status with:

```bash
docker ps                                    # STATUS column shows (healthy)
docker inspect luiscarranza-prod | grep -i health
```

### Production deploy workflow

```bash
# On the VPS:
cd /opt/lucadev/web-luiscarranza
git pull origin main
# Load secrets so NEXT_PUBLIC_* build args are not empty:
set -a && source .env.local && set +a
docker compose -f docker-compose.prod.yml up -d --build
docker compose -f docker-compose.prod.yml logs -f web    # verify boot
```

## Environment variables

See `.env.example` for the full list. Required for full functionality:

| Variable | Required for | Where to get it |
|---|---|---|
| `RESEND_API_KEY` | Contact form, newsletter | https://resend.com/api-keys (Full Access) |
| `RESEND_AUDIENCE_ID` | Newsletter signups | https://resend.com/audiences |
| `CONTACT_FROM_EMAIL` | Contact form sender | Your verified domain in Resend |
| `CONTACT_TO_EMAIL` | Contact form recipient | Your inbox (e.g. `contact@luiscarranza.com`) |
| `NEXT_PUBLIC_FIREBASE_*` (7 vars) | Analytics | https://console.firebase.google.com → Project Settings |

Without these set, the site still runs but the contact form, newsletter, and analytics fall back to dev-mode no-ops.

## Project structure

```
app/                        Routes, layouts, OG image, robots, sitemap, manifest
├── api/
│   ├── contact/route.ts    Contact form endpoint (Resend)
│   └── subscribe/route.ts  Newsletter endpoint (Resend Audiences)
├── about/                  /about extended page
├── contact/                /contact dedicated page
├── blog/                   /blog index + [slug] post pages
├── privacy/                /privacy
├── terms/                  /terms
├── opengraph-image.tsx     Dynamic OG (Edge runtime)
├── layout.tsx              Root layout (fonts, providers, head)
├── page.tsx                Home (Hero, Services, Process, Principles, About, FAQ, Contact, Newsletter)
└── globals.css             Design tokens (OKLCH palette, Geist fonts, motion curves, prose styles)

components/
├── layout/                 Nav, SiteFooter
├── sections/               Hero, Services, Process, Principles, About, FAQ, Contact, Newsletter, TechStack
├── ui/                     LCMark, LCMonogram, LangToggle, Reveal, ContactForm, CookieBanner, SocialIcons
├── about/                  AboutPageClient
├── blog/                   BlogIndexClient, PostHeaderClient, PostBody
└── legal/                  LegalPage (shared by /privacy + /terms)

providers/
└── I18nProvider.tsx        React Context for EN/ES switching

lib/
├── i18n.ts                 All translations (EN + ES)
├── seo.ts                  Schema.org generators
├── legal.ts                Privacy + Terms content (bilingual)
├── blog.ts                 MDX parsing + reading time
├── firebase.ts             Analytics init + trackEvent helper
└── rateLimit.ts            In-memory rate limiter

content/blog/
├── en/                     English posts (.mdx)
└── es/                     Spanish posts (.mdx)
```

## Adding a blog post

1. Create `content/blog/en/my-post.mdx` (and optionally `content/blog/es/my-post.mdx`) with frontmatter:

   ```mdx
   ---
   title: 'My post title'
   description: 'One-sentence summary for SEO and listings.'
   date: '2026-05-17'
   author: 'Luis Ivan Carranza Saldaña'
   tags: ['engineering', 'craft']
   ---

   Markdown content here.
   ```

2. The post is auto-detected — no rebuild needed in dev. In production, the sitemap and RSS feed regenerate at request time.

## License

Source available — © 2026 Luis Carranza, LLC. All rights reserved.

Code is published for transparency and portfolio purposes. Not licensed for commercial reuse.

## Links

- 🌐 [luiscarranza.com](https://luiscarranza.com)
- ✉️ contact@luiscarranza.com
- 💼 [LinkedIn](https://www.linkedin.com/company/luiscarranza-llc)
- 🐙 [github.com/lucadevv](https://github.com/lucadevv)
