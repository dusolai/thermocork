# THERMOCORK — Premium Web Application

Next.js 14 + TypeScript + Tailwind CSS + GSAP + Lenis + Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Animations**: GSAP 3 + ScrollTrigger (parallax, scroll reveals, count-up)
- **Smooth Scroll**: Lenis
- **Component Animations**: Framer Motion (tab transitions, stagger reveals)
- **Images**: Pollinations.ai (AI-generated, no API key required)
- **Bilingual**: ES / EN via React context

## Features

- ✅ Multi-layer parallax hero (3 depth layers)
- ✅ Lenis smooth scrolling
- ✅ Scroll-triggered animations (reveals, staggers, count-up)
- ✅ Sticky nav with scroll progress bar
- ✅ Floating side CTA
- ✅ Custom cursor trail (desktop)
- ✅ Film grain overlay
- ✅ Ambient glowing blobs
- ✅ AI-generated imagery (Pollinations.ai)
- ✅ Fully bilingual ES/EN
- ✅ Contact form with API route
- ✅ WhatsApp float button
- ✅ Fully responsive
- ✅ SEO optimized (OpenGraph, meta tags)

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select repo → Deploy (zero config needed)

## Deploy to Netlify

```bash
npm run build
# Deploy the .next folder or connect via GitHub
```

## Environment Variables (optional)

Create `.env.local` for email integration:

```env
RESEND_API_KEY=re_xxxx         # For Resend email service
SENDGRID_API_KEY=SG.xxxx       # Alternative: SendGrid
```

The contact form works without these — it logs to console and shows success to the user. Add an email provider in `app/api/contact/route.ts` to receive real email notifications.

## Adding email notifications

In `app/api/contact/route.ts`, uncomment and configure:

```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
await resend.emails.send({
  from: 'web@thermocork.es',
  to: 'info@thermocork.es',
  subject: `Nuevo presupuesto de ${name}`,
  text: `Nombre: ${name}\nTeléfono: ${phone}\nTipo: ${type}\nSuperficie: ${area}\nMensaje: ${message}`,
})
```

Install: `npm install resend`

## Project Structure

```
app/
├── layout.tsx          Root layout, fonts, meta
├── page.tsx            Main page (assembles all sections)
├── globals.css         CSS variables, animations, global styles
└── api/contact/        Contact form API route

components/
├── Nav.tsx             Sticky navigation with mobile drawer
├── FloatingElements.tsx Grain, progress bar, side CTA, WhatsApp, cursor
├── providers/
│   └── SmoothScroll.tsx Lenis + GSAP initialization
├── ui/
│   ├── AnimateIn.tsx   Single element fade-in on scroll
│   └── StaggerList.tsx Children stagger-in on scroll
└── sections/           One component per page section

lib/i18n.ts             All text strings (ES + EN)
hooks/useLang.tsx       Language context + toggle
```
