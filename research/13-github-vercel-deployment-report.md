# Gulmohor Resort — Production Deployment & Live Verification Report

**Date:** 6 November 2026  
**Status:** Live in Production (HTTP 200 OK)  
**Production URL:** [https://demogulmohor.vercel.app/](https://demogulmohor.vercel.app/)  
**GitHub Repository:** [https://github.com/ashik-exe/Project-04-GULMOHOR.git](https://github.com/ashik-exe/Project-04-GULMOHOR.git)  
**Target Branch:** `main`  
**Latest Deployment Commit:** `2da6be1` (`chore: specify vite framework and dist output directory in vercel.json`)  
**Deployment Platform:** Vercel (Project: `demogulmohor` / Team: `ashik-exes-projects`)  

---

## 1. Executive Summary

The bilingual editorial website for **Gulmohor Resort & Restaurant** has been prepared, published to GitHub, linked to Vercel, and deployed to production at the designated URL:

`https://demogulmohor.vercel.app/`

The deployment includes the complete responsive application, the full suite of **36 enhanced WebP responsive image derivatives**, the high-resolution hero asset, the official brand mark, bilingual routing (`/` and `/bn`), interactive gallery filtering with lightbox, FAQ accordion, and the verified 6-step booking inquiry flow generating pre-filled WhatsApp handoffs to the resort hotline (`+8801911498819`).

Live automated browser quality assurance confirmed **0 console errors**, **0 failed network requests**, **0 horizontal layout overflows** across five viewports (1440px desktop down to 360px mobile), and successful direct deep linking across all localized paths.

---

## 2. Pre-Deployment Local Preservation & Archive

Before modifying the local Git configuration or executing build operations, a complete compressed backup archive was created to ensure zero data loss:

- **Backup Archive Path:** `/home/Ashik_exe/Downloads/Projects/github/backup-gulmohor-resort-20261106_202043.tar.gz`
- **Archive Size:** 119 MB (124,561,408 bytes)
- **Archive Contents:** 511 files encompassing all source code, enhancement masters, project assets, documentation, and research reports.
- **Exclusion Rules:** Only reproducible `node_modules/` and `.git/` were excluded.

---

## 3. Git Repository Architecture & GitHub Publishing

### Git Repository Initialization
Inspection of the local working directory revealed an empty, corrupted `.git` directory (`total 0` without objects, refs, or HEAD). The directory was cleanly re-initialized on branch `main` (`git init -b main`).

### `.gitignore` Hygiene & Protection
A strict `.gitignore` was configured and verified to ensure sensitive or transient files never enter version control:
- **Excluded:** `node_modules/`, `dist/`, `dist-ssr/`, `.env*`, `.vercel`, `scratch/`, `.agents/`, `.codex/`, `backup*`, `*.tar.gz`, `*.tsbuildinfo`, `.DS_Store`, and editor configurations.
- **Tracked:** 430 source files comprising:
  - Application source code (`src/App.tsx`, `src/main.tsx`, `src/pages/SitePages.tsx`, `src/components/`, `src/data/`, `src/site.css`).
  - Production public assets (`public-site/favicon.svg`, `public-site/images/gulmohor/brand/brand-official-logo.jpg`, and the 36 responsive WebP derivatives under `public-site/images/gulmohor/enhanced/`).
  - Hero image source (`new hero image.png`, 2.8 MB).
  - Comprehensive research deliverables and visual QA contact sheets under `research/`.

### Remote Repository Connection & Push
- **Remote Configured:** `origin` -> `https://github.com/ashik-exe/Project-04-GULMOHOR.git`
- **Initial Commit:** `3c3e608` (*"feat: complete Gulmohor Resort bilingual website, responsive photography, and deployment setup"*)
- **Vercel Config Commit:** `2da6be1` (*"chore: specify vite framework and dist output directory in vercel.json"*)
- **Branch Tracking:** `main` set up to track `origin/main` with clean working tree.

---

## 4. Production Build Verification

A clean dependency installation and production build were executed locally prior to cloud deployment:

- **Package Manager:** npm v10 / Node.js v24.18.0
- **Clean Install:** `npm ci` completed cleanly (128 packages, 0 vulnerabilities).
- **Build Execution:** `npm run build` (`tsc -b && vite build`) executed in **2.11s**:
  - `dist/index.html`: 1.83 kB
  - `dist/favicon.svg`: 1.25 kB
  - `dist/assets/new hero image-CsjPYUL5.png`: 2,827.64 kB (bundled and fingerprinted)
  - `dist/assets/index-D7xVp_Z9.css`: 76.21 kB (gzip: 15.43 kB)
  - `dist/assets/index-B7y0161Y.js`: 289.21 kB (gzip: 86.76 kB)
  - `dist/images/gulmohor/enhanced/`: All **36** mapped WebP derivatives copied from `public-site/` (4.76 MB total).
  - `dist/images/gulmohor/brand/brand-official-logo.jpg`: 83.15 kB.
- **Total `dist/` Size:** ~7.8 MB.

---

## 5. Vercel Cloud Architecture & Domain Configuration

### Project Linking & Settings
- **Vercel CLI Version:** `vercel@64.3.1`
- **Vercel Team Scope:** `ashik-exes-projects`
- **Project Name:** `demogulmohor`
- **Project ID:** `prj_z05lON5j0SI6mwWscEEa4n73vaM8`
- **Connected Git Repository:** `ashik-exe/Project-04-GULMOHOR` (GitHub)
- **Framework Preset:** `Vite`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### SPA Routing & `vercel.json`
To ensure deep links (`/stay`, `/events`, `/bn`, `/bn/stay`, `/bn/events`) resolve directly without 404 routing errors on page refresh, `vercel.json` was authored and deployed:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Domain Assignment
- **Primary Production Domain:** `https://demogulmohor.vercel.app`
- **Deployment URL:** `https://demogulmohor-2bfxugdx8-ashik-exes-projects.vercel.app`
- **SSL / TLS:** Active edge certificates provisioned with HTTP/2 and modern TLS 1.3.

---

## 6. Live Production HTTP Health Checks

Direct network inspection was performed against the live production deployment:

| Asset / Endpoint | HTTP Status | Content-Type | Size / Cache |
| --- | :---: | :---: | :---: |
| `https://demogulmohor.vercel.app/` | `HTTP/2 200 OK` | `text/html; charset=utf-8` | Edge CDN |
| `/stay` (Direct deep link) | `HTTP/2 200 OK` | `text/html; charset=utf-8` | Edge CDN Rewrite |
| `/events` (Direct deep link) | `HTTP/2 200 OK` | `text/html; charset=utf-8` | Edge CDN Rewrite |
| `/bn` (Bengali deep link) | `HTTP/2 200 OK` | `text/html; charset=utf-8` | Edge CDN Rewrite |
| `/assets/new hero image-CsjPYUL5.png` | `HTTP/2 200 OK` | `image/png` | 2,827,642 bytes |
| `/images/gulmohor/brand/brand-official-logo.jpg` | `HTTP/2 200 OK` | `image/jpeg` | 83,153 bytes |
| `/favicon.svg` | `HTTP/2 200 OK` | `image/svg+xml` | 1,254 bytes |
| `mango-hammock-1920.webp` | `HTTP/2 200 OK` | `image/webp` | 439,552 bytes |
| `garden-gazebo-1920.webp` | `HTTP/2 200 OK` | `image/webp` | 461,154 bytes |
| `dining-hall-1920.webp` | `HTTP/2 200 OK` | `image/webp` | 74,986 bytes |
| `family-veranda-1920.webp` | `HTTP/2 200 OK` | `image/webp` | 214,620 bytes |
| `suite-master-1280.webp` | `HTTP/2 200 OK` | `image/webp` | 19,516 bytes |

---

## 7. Comprehensive Live Automated Browser QA

An automated test suite was executed against the live production URL using headless Chromium (`/usr/bin/chromium-browser`) to validate real-world rendering, responsiveness, console health, and interactive behavior.

### A. Viewport & Overflow Audit
Each viewport was audited for horizontal document expansion (`scrollWidth <= clientWidth`):

| Viewport Profile | Resolution | `scrollWidth` | `clientWidth` | Overflow Status | Screenshot Deliverable |
| --- | :---: | :---: | :---: | :---: | --- |
| Desktop Ultrawide / Large | 1440 × 900 | 1440 px | 1440 px | **PASS** (No overflow) | `live-qa-vp-desktop-1440.png` |
| Standard Desktop / Laptop | 1280 × 800 | 1280 px | 1280 px | **PASS** (No overflow) | `live-qa-vp-desktop-1280.png` |
| Tablet Portrait | 768 × 1024 | 768 px | 768 px | **PASS** (No overflow) | `live-qa-vp-tablet-768.png` |
| Modern Smartphone | 390 × 844 | 390 px | 390 px | **PASS** (No overflow) | `live-qa-vp-mobile-390.png` |
| Compact / Narrow Smartphone | 360 × 740 | 360 px | 360 px | **PASS** (No overflow) | `live-qa-vp-mobile-360.png` |

### B. Routing & Localization Verification
Direct URL loads were verified for proper `<html lang="...">`, `<title>`, and `<meta name="description">` population:

| Route Path | Language | Observed Page Title | Verified Content |
| --- | :---: | --- | --- |
| `/` | `en` | `Gulmohor Resort \| A little room to slow down` | Overview, Stay Preview, Pool, Gardens, Dining, Day Visit, Events, Gallery, Location, FAQ |
| `/stay` | `en` | `Stay \| Gulmohor Resort` | Couple Deluxe, Double Deluxe (veranda notice), Premium Suite, Rates guidance |
| `/events` | `en` | `Events \| Gulmohor Resort` | Lawn Celebrations, Indoor Gatherings, Inquiry checklist |
| `/bn` | `bn` | `গুলমোহর রিসোর্ট \| পুল, বাগান ও থাকার ব্যবস্থা` | সম্পূর্ণ বাংলা হেডিংস, বিবরণী ও দিকনির্দেশনা |
| `/bn/stay` | `bn` | `রুম \| গুলমোহর রিসোর্ট` | রুমের ধরন, সুবিধা ও বুকিং যাচাইয়ের নির্দেশনা |
| `/bn/events` | `bn` | `অনুষ্ঠান \| গুলমোহর রিসোর্ট` | হল ও লনে অনুষ্ঠান আয়োজনের বাংলা বিবরণ |

### C. Interactive Features & Workflows

1. **Mobile Navigation Drawer:**
   - At 390px viewport, hamburger button toggle opened the mobile drawer.
   - Exposed all navigation routes: `Home`, `Stay`, `Events`, `Gallery`.
   - Primary inquiry button and direct call shortcut (`01911-498819`) visible.
   - Drawer closed cleanly on user toggle.
   - Screenshot: `live-qa-mobile-menu-open.png`.

2. **Gallery Filtering & Lightbox Modal:**
   - Filter tabs tested across all 7 categories:
     - `All`: 8 photos
     - `Estate`: 1 photo
     - `Stay`: 3 photos
     - `Pool`: 1 photo
     - `Gardens`: 1 photo
     - `Dining`: 1 photo
     - `Events`: 1 photo
   - Clicking a tile launched the accessible lightbox modal (`role="dialog"`, `aria-modal="true"`).
   - Verified high-resolution photo render, descriptive caption, and disclaimers.
   - Keyboard interaction: `ArrowRight` and `ArrowLeft` cycled photos; `Escape` key immediately dismissed the lightbox.
   - Screenshot: `live-qa-lightbox-open.png`.

3. **FAQ Accordion:**
   - Verified `<details>/<summary>` implementation.
   - Clicking a question (`How do I check room availability?`) expanded smoothly, toggled open state, and revealed the verified operational policy guidance.

4. **Booking Inquiry Flow & WhatsApp Handoff:**
   - Triggered from header and hero inquiry CTAs.
   - Step-by-step audit:
     - **Step 0 (Experience):** Selected `Overnight stay`.
     - **Step 1 (Dates & Guests):** Provided arrival date and guest count.
     - **Step 2 (Room Selection):** Selected `Couple Deluxe Room`.
     - **Step 3 (Contact Info):** Entered test guest name, contact number, and special request note.
     - **Step 4 (Summary Review):** Rendered itemized summary review dialog (Screenshot: `live-qa-inquiry-summary.png`).
     - **Step 5 (Prepared WhatsApp Handoff):** Generated direct WhatsApp action link (Screenshot: `live-qa-inquiry-prepared.png`).
   - **Verified WhatsApp Link Target:**
     `https://wa.me/8801911498819?text=...`
   - **Verified Encoded Message Body:**
     Includes inquiry type, arrival date, guest count, chosen room, contact details, and the explicit legal disclaimer (*"Please confirm current availability, rates and details. This is an inquiry, not a confirmed reservation."*).
   - Dialog closed cleanly via `X` button and `Escape` key.

### D. Console & Network Error Metrics
- **JavaScript Console Errors:** **0**
- **Uncaught Exceptions / Page Errors:** **0**
- **Failed Network Requests:** **0**

---

## 8. Photographic Assets & Licensing Boundaries

### Integrated Imagery
The website deploys a curated suite of **10 authentic property photographs** (distributed across 36 responsive WebP derivatives) and **1 official brand logo**:
1. Estate Approach / Hero Architecture
2. Swimming Pool & Poolside Loungers
3. Couple Deluxe Room Interior
4. Upper Pool-Facing Veranda (Double Deluxe category)
5. Premium Suite Master Bedroom
6. Shaded Garden Paths & Tree Hammock
7. Garden Pavilion & Lawn
8. Indoor Dining Room
9. Event Marquee / Celebration Grounds
10. Daylight Pool & Colonial Residence (Hero Asset)
11. Official Brand Logo

### Commercial Rights Boundary
- **Authenticity:** All deployed photos originate from authentic Gulmohor Resort property archives and photographic records. Third-party stock imagery and unverified Google Maps crowdsourced photos were strictly excluded.
- **Licensing Notice:** Commercial licensing rights have not been formally confirmed in writing by resort ownership. All imagery is published under **demonstration and presentation authorization** pending written client approval prior to formal commercial handover.

---

## 9. Conclusion & Project Deliverables Index

The Gulmohor Resort website is fully published, connected via continuous integration to GitHub, and live at its permanent production address:

🌐 **Live Website:** [https://demogulmohor.vercel.app/](https://demogulmohor.vercel.app/)  
📦 **GitHub Repository:** [https://github.com/ashik-exe/Project-04-GULMOHOR.git](https://github.com/ashik-exe/Project-04-GULMOHOR.git)  
💾 **Local Archive:** `/home/Ashik_exe/Downloads/Projects/github/backup-gulmohor-resort-20261106_202043.tar.gz`
