# Minimalist Developer Portfolio

A minimal, high-contrast, dark-themed personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Sanity Headless CMS.

## Stack & Architecture

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS (Dark theme, terminal-inspired design, custom emerald accents)
- **Headless CMS**: Sanity.io (free tier) with embedded Studio at `/studio`
- **Typography**: Geist Sans & Geist Mono
- **Deployment**: Vercel ready

---

## Design System

- **Dark Minimal Theme**: Deep black/slate background (`#08090d`) with subtle borders (`#1e2433`)
- **Accent**: Sparse, focused emerald (`#10b981` / `#34d399`)
- **No Profile Photos**: Pure typography and engineering artifacts
- **Hero Motif**: Interactive code terminal with syntax-highlighted tabs and health metrics
- **Relaxed Spacing**: Generous section margins and uncluttered card layouts

---

## Routes

| Route | Description |
|---|---|
| `/` | Home: Hero with code motif, intro, featured case studies, skills strip, blog preview, contact CTA |
| `/about` | Bio, engineering philosophy, and chronological career timeline |
| `/skills` | Grouped technical competencies (Distributed Systems, Databases, DevOps, Frontend, SRE) |
| `/work` | Case studies list pulling dynamically from Sanity CMS |
| `/work/[slug]` | Case study template strictly structured as: Problem &rarr; Approach &rarr; Result &rarr; Tech Stack |
| `/blog` | Technical articles and essays archive |
| `/blog/[slug]` | Clean reading view with relaxed line-height and Portable Text body |
| `/contact` | Direct links, availability status, and interactive inquiry form |
| `/studio` | Embedded Sanity Studio dashboard to manage all content |

---

## Sanity Content Model

The CMS schemas are defined under `sanity/schemaTypes/`:

1. **`caseStudy`**:
   - `title`: string
   - `slug`: slug
   - `summary`: text
   - `problem`: text
   - `approach`: text
   - `result`: text
   - `techStack`: array of strings
   - `coverImage`: image with hotspot
   - `order`: number

2. **`post`**:
   - `title`: string
   - `slug`: slug
   - `excerpt`: text
   - `body`: portable text (blocks, images, links)
   - `publishedAt`: datetime
   - `coverImage`: image with hotspot

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Sanity (Optional for Local Preview)
Create a `.env.local` file from `.env.example`:
```bash
cp .env.example .env.local
```

Populate your Sanity project ID:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
```

> **Note**: If you don't provide a Sanity project ID, the portfolio automatically falls back to rich, curated mock data so you can review layouts and interactions immediately without errors.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portfolio.
Open [http://localhost:3000/studio](http://localhost:3000/studio) to access Sanity Studio.

### 4. Build for Production
```bash
npm run build
```

---

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Set your environment variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`) in the Vercel dashboard.
4. Deploy!
