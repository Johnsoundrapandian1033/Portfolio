# John Soundrapandian — Portfolio

A single-page developer portfolio built with **Create React App**, Bootstrap grid utilities,
and Framer Motion animations. Themed around John's shipping-domain backend work — nav items
read like API routes, the hero photo sits in a "manifest ticket," and projects are shown as
shipment cards.

## Features
- Dark / light mode (persisted in localStorage)
- Framer Motion page-load and scroll-triggered animations
- Animated stat counters and skill gauges
- Fully responsive (mobile nav, fluid grid)
- Resume download button (serves `/public/John_Soundrapandian_Resume.pdf`)
- Contact form wired to EmailJS
- SEO meta tags (title, description, Open Graph, Twitter card)

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm start
```

Opens at `http://localhost:3000`.

## 3. Set up the contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) so it works without a backend.

1. Create a free account at emailjs.com.
2. Add an Email Service (e.g. Gmail) — note the **Service ID**.
3. Create an Email Template with variables `from_name`, `from_email`, `message` — note the
   **Template ID**.
4. Copy your **Public Key** from Account → API Keys.
5. Open `src/components/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

with your real values. Until you do, the form will show a friendly "not configured yet"
message instead of failing silently.

## 4. Swap in your own content

Everything text-based (name, summary, skills, experience, projects, achievements, links)
lives in one place: `src/data/portfolio.js`. Edit that file to update the site without
touching any component.

To replace the photo, drop a new transparent PNG into `public/` and update `profile.photo`
in `src/data/portfolio.js`. To replace the resume, swap the PDF in `public/` and update
`profile.resumeFile`.

## 5. Build for production

```bash
npm run build
```

Output goes to `build/`.

## 6. Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```
Vercel auto-detects Create React App (build command `npm run build`, output directory
`build`). Subsequent deploys: `vercel --prod`.

**Option B — Git + Vercel dashboard**
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave the default CRA settings Vercel detects.
4. Click **Deploy**.

## Tech stack
React 18 · Create React App · Bootstrap (grid utilities) · Framer Motion · react-icons · @emailjs/browser
