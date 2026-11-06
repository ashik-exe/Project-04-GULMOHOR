# GULMOHOR RESORT — REFERENCE WEBSITE ASSET INVENTORY & VISUAL CATALOG

**Source Website:** [https://gulmohor.vercel.app/](https://gulmohor.vercel.app/)  
**Extraction Date:** November 2026  
**Local Asset Root:** `public/assets/reference-gulmohor/`  
**Manifest Locations:**  
- JSON: [`docs/reference-asset-manifest.json`](../docs/reference-asset-manifest.json)  
- CSV: [`docs/reference-asset-manifest.csv`](../docs/reference-asset-manifest.csv)  

---

## 1. EXECUTIVE SUMMARY & ASSET AUDIT REPORT

| Category | Discovered | Successfully Downloaded | Local Subdirectory | Verification Status | Licensing Status |
|---|---|---|---|---|---|
| **Core High-Res Photography** | 11 | 11 (distributed to 42 semantic paths) | `public/assets/reference-gulmohor/images/` | 100% Verified (Pillow) | B. Reference Only |
| **Direct MP4 Media Videos** | 4 | 4 (720x1280 H.264) | `public/assets/reference-gulmohor/videos/` | 100% Verified (ffprobe) | B. Reference Only |
| **Video Posters** | 4 | 4 | `public/assets/reference-gulmohor/video-posters/` | 100% Verified (Pillow) | B. Reference Only |
| **Brand Logos & Emblems** | 4 | 4 (Dark, Light, Touch, Favicon) | `public/assets/reference-gulmohor/logos/` | 100% Verified (Pillow) | A. Owned / Authorized |
| **WOFF2 Web Fonts** | 9 | 9 (Fraunces, DM Sans, Tiro Bangla, Hind Siliguri) | `public/assets/reference-gulmohor/fonts/` | 100% Verified (Byte check) | A. Owned / Authorized (OFL 1.1) |
| **Vector Icons (SVG)** | 18 | 18 clean standalone SVGs | `public/assets/reference-gulmohor/icons/` | 100% Verified (XML valid) | A. Owned / Authorized (Open Web) |
| **Responsive Thumbnails** | 11 | 11 (400px WebP) | `public/assets/reference-gulmohor/thumbnails/` | 100% Verified (Pillow) | Derived local assets |
| **TOTAL LOCAL ASSETS** | **61 unique** | **61 files (80 catalog entries)** | `public/assets/reference-gulmohor/` | **Zero broken / zero byte** | Fully Cataloged |

---

## 2. CURATED MASTER RECOMMENDATIONS FOR CODEX

When implementing the upcoming Gulmohor Resort redesign, Codex should selectively draw upon the following top-tier assets:

### A. Best Hero Image Candidates
1. **Primary Sunset Candidate:** `images/hero/hero-sunset-poolside.jpg` (`fb-restaurant-table-poolview.jpg`)  
   - **Dimensions:** 2048 × 1536 px (4:3)  
   - **Why It Excels:** Captures the emotional magic of dusk over the 70-foot swimming pool with the illuminated white colonnade reflected in still water, paired with warm pink and violet sky tones. Superior contrast for light text overlays.
2. **Daylight Alternative:** `images/hero/hero-daylight-swimming-pool.jpg` (`hero-pool.jpg`)  
   - **Dimensions:** 1280 × 510 px (2.5:1 panoramic)  
   - **Why It Excels:** Clean, crisp daylight architectural panorama showcasing the full length of the 70×35 ft basin, manicured green lawns, and Doric colonnades under bright blue skies.

### B. Best Swimming Pool Photographs
1. `images/swimming-pool/swimming-pool-sunset-reflection.jpg` (2048 × 1536 px) — Best for full-width evening swimming pool feature.
2. `images/swimming-pool/swimming-pool-colonnade-facade.jpg` (410 × 720 px, 9:16 portrait) — Best for vertical mobile spreads and social cards (OG preview).
3. `images/swimming-pool/swimming-pool-loungers-dusk.jpg` (410 × 720 px) — Ideal for poolside relaxation & sun-lounger amenity highlights.

### C. Best Room & Suite Photographs
1. `images/rooms/veranda-balustrade-lounge.jpg` (1600 × 1200 px) — Best for Suite / Balcony accommodation feature showing the upper veranda looking out over the pool.
2. `images/rooms/garden-cottage-balcony-view.jpg` (1200 × 1600 px portrait) — Best for Garden Cottage card, highlighting private seating and garden outlook.
3. `images/rooms/poolside-villa-night-colonnade.jpg` (960 × 1280 px portrait) — Best for Poolside Villa card, showcasing night illumination and colonnade architecture.

### D. Best Dining & Culinary Photographs
1. `images/dining/restaurant-table-poolview-sunset.jpg` (2048 × 1536 px) — Best for Dining section hero banner.
2. `images/dining/poolside-candlelight-dinner.jpg` (2048 × 1364 px, 3:2 landscape) — Best for Al Fresco / Candlelight Dinner package card.
3. `images/dining/outdoor-live-bbq-tree-lights.jpg` (2048 × 1366 px, 3:2 landscape) — Best for Evening Live Charcoal BBQ and garden dining spread.
4. `images/dining/dining-room-window-table.jpg` (1200 × 1600 px portrait) — Best for indoor AC dining hall with pool view.
5. `images/dining/grand-marquee-tent-feast.jpg` (2048 × 1366 px, 3:2 landscape) — Best for group picnics and buffet feast packages.

### E. Best Event & Garden Photographs
1. `images/events/banquet-marquee-tent.jpg` (2048 × 1366 px) — Marquee tent wedding / banquet lawn reception.
2. `images/gardens/gardens-evening-festoon-lights.jpg` (2048 × 1366 px) — Mature mango trees illuminated with festoon lighting.
3. `images/gardens/grounds-night-illumination.jpg` (2048 × 1536 px) — Full compound night panorama with pool reflection.

### F. Best Video Showcase Assets
All 4 videos are ready for immediate integration into a dedicated `#resort-videos` component with matching poster images:
1. `videos/resort-overview.mp4` + `video-posters/poster-resort-overview.jpg` (0:34) — Full property tour
2. `videos/evening-getaway.mp4` + `video-posters/poster-evening-getaway.jpg` (0:12) — Night atmosphere
3. `videos/day-long-picnic.mp4` + `video-posters/poster-day-long-picnic.jpg` (0:29) — Day-out experience
4. `videos/corporate-dinner.mp4` + `video-posters/poster-corporate-dinner.jpg` (0:25) — Events & banquets

---

## 3. COMPREHENSIVE PHOTOGRAPHY CATALOG

| Asset Name | Local File Path | Dimensions | Aspect Ratio | File Size | Recommended Section | Quality & Art Direction Notes |
|---|---|---|---|---|---|---|
| **Sunset Pool Terrace** | `images/hero/hero-sunset-poolside.jpg` | 2048 × 1536 | 1.33:1 (4:3) | 330 KB | Hero / Dining / Gallery | Ultra sharp, pristine color gradation, warm evening ambiance. |
| **Daylight Pool Colonnade** | `images/hero/hero-daylight-swimming-pool.jpg` | 1280 × 510 | 2.51:1 (Wide) | 358 KB | Swimming Pool / Hero | Daylight clarity, 70-foot pool perspective, rich greenery. |
| **Palace Pool Reflection** | `images/resort/pool-palace.jpg` | 410 × 720 | 0.57:1 (9:16) | 96 KB | Social OG / Gallery | Symmetrical classical architecture reflected in still turquoise water. |
| **Loungers at Dusk** | `images/resort/pool-sunset.jpg` | 410 × 720 | 0.57:1 (9:16) | 79 KB | Pool Leisure / About | Restful sunset mood with reclined loungers and warm pool lights. |
| **Grand Veranda Colonnade** | `images/rooms/veranda-balustrade-lounge.jpg` | 1600 × 1200 | 1.33:1 (4:3) | 243 KB | About / Suites / Video Poster | High-end architectural perspective through classical balustrades. |
| **Balcony Window Dining** | `images/dining/dining-room-window-table.jpg` | 1200 × 1600 | 0.75:1 (3:4) | 290 KB | Dining Room / Cottage | Formal table setting overlooking green resort gardens and pool. |
| **Colonnade Night Veranda** | `images/rooms/poolside-villa-night-colonnade.jpg` | 960 × 1280 | 0.75:1 (3:4) | 69 KB | Villa / Night Gallery | Warm wall sconces, neoclassical Doric arches at night. |
| **Resort Fairy Lights** | `images/gardens/grounds-night-illumination.jpg` | 2048 × 1536 | 1.33:1 (4:3) | 74 KB | Evening Video / Gardens | Panoramic night lighting with illuminated pool and building. |
| **Poolside Candlelight** | `images/dining/poolside-candlelight-dinner.jpg` | 2048 × 1364 | 1.50:1 (3:2) | 205 KB | Al Fresco Dining / Experiences | Intimate candlelight and floral centerpiece at pool edge. |
| **Marquee Feast Tent** | `images/dining/grand-marquee-tent-feast.jpg` | 2048 × 1366 | 1.50:1 (3:2) | 291 KB | Events / Day-out Buffet | Festive banquet setup under marquee with warm overhead string lights. |
| **Tree Lights Live BBQ** | `images/dining/outdoor-live-bbq-tree-lights.jpg` | 2048 × 1366 | 1.50:1 (3:2) | 222 KB | Evening BBQ / Experiences | Ambient festoon bulbs in old mango trees casting warm glow. |

---

## 4. DIRECT VIDEO ASSETS & METADATA CATALOG

| Video ID | Title (EN / BN) | Category | Local Video File | Poster Image | Dimensions | Duration | Size | Source URL |
|---|---|---|---|---|---|---|---|---|
| **VID-01** | The resort & the pool / রিসোর্ট ও সুইমিং পুল | Full property tour | `videos/resort-overview.mp4` | `video-posters/poster-resort-overview.jpg` | 720 × 1280 | 34.5s | 3.8 MB | [resort-overview.mp4](https://gulmohor.vercel.app/videos/resort/resort-overview.mp4) |
| **VID-02** | Evening & twilight lighting / সন্ধ্যার আলোকসজ্জা | Night atmosphere | `videos/evening-getaway.mp4` | `video-posters/poster-evening-getaway.jpg` | 720 × 1280 | 12.5s | 2.2 MB | [evening-getaway.mp4](https://gulmohor.vercel.app/videos/resort/evening-getaway.mp4) |
| **VID-03** | Day-long picnic & feasts / ডে-আউট পিকনিক ও ভোজ | Day-out experience | `videos/day-long-picnic.mp4` | `video-posters/poster-day-long-picnic.jpg` | 720 × 1280 | 29.8s | 5.1 MB | [day-long-picnic.mp4](https://gulmohor.vercel.app/videos/resort/day-long-picnic.mp4) |
| **VID-04** | Banquets & receptions / ভোজ ও Reception | Events & banquets | `videos/corporate-dinner.mp4` | `video-posters/poster-corporate-dinner.jpg` | 720 × 1280 | 25.0s | 4.8 MB | [corporate-dinner.mp4](https://gulmohor.vercel.app/videos/resort/corporate-dinner.mp4) |

---

## 5. BRAND LOGOS & GRAPHICS CATALOG

| Asset ID | File Name | Local File Path | Dimensions | Format | Usage Context |
|---|---|---|---|---|---|
| **LOG-01** | `brand-flower-emblem.png` | `logos/brand-flower-emblem.png` | 284 × 290 | Transparent PNG | Light Navbar, header branding with hover rotation. |
| **LOG-02** | `brand-flower-emblem-dark.png` | `logos/brand-flower-emblem-dark.png` | 284 × 290 | Transparent PNG | Dark Footer, Video Showcase, dark card watermarks. |
| **LOG-03** | `gulmohor-flower-icon.png` | `logos/gulmohor-flower-icon.png` | 324 × 324 | Square PNG | Apple touch icon, PWA icon, manifest app icon. |
| **LOG-04** | `favicon.ico` | `logos/favicon.ico` | 47 × 48 | Multi-layer ICO | Browser tab favicon in `public/favicon.ico`. |

---

## 6. WOFF2 WEB FONTS CATALOG

| Font ID | Local File Path | Font Family | Weights & Styles | License |
|---|---|---|---|---|
| **FNT-01** | `fonts/fraunces-display-variable.woff2` | Fraunces Display | 100–900 Variable Optical Display | SIL Open Font License OFL 1.1 |
| **FNT-02** | `fonts/fraunces-latin-variable.woff2` | Fraunces Latin | 100–900 Variable Regular | SIL Open Font License OFL 1.1 |
| **FNT-03** | `fonts/dm-sans-variable.woff2` | DM Sans Variable | 100–1000 Variable Humanist Sans | SIL Open Font License OFL 1.1 |
| **FNT-04** | `fonts/dm-sans-latin.woff2` | DM Sans Latin | 100–1000 Variable Regular | SIL Open Font License OFL 1.1 |
| **FNT-05** | `fonts/tiro-bangla-regular.woff2` | Tiro Bangla | 400 Regular Classical Bengali Serif | SIL Open Font License OFL 1.1 |
| **FNT-06** | `fonts/hind-siliguri-300.woff2` | Hind Siliguri | 300 Light Bengali | SIL Open Font License OFL 1.1 |
| **FNT-07** | `fonts/hind-siliguri-400.woff2` | Hind Siliguri | 400 Regular Bengali | SIL Open Font License OFL 1.1 |
| **FNT-08** | `fonts/hind-siliguri-500.woff2` | Hind Siliguri | 500 Medium Bengali | SIL Open Font License OFL 1.1 |
| **FNT-09** | `fonts/hind-siliguri-600.woff2` | Hind Siliguri | 600 SemiBold Bengali | SIL Open Font License OFL 1.1 |

---

## 7. VECTOR ICONS (SVG) CATALOG

All icons have been extracted from the live reference DOM, cleansed of application-specific classes, and formatted as independent, reusable SVG files in `icons/`:
- `whatsapp.svg` — Official WhatsApp communication icon
- `star-filled.svg` / `star-empty.svg` — Rating and review stars
- `play.svg` / `pause.svg` / `volume-up.svg` / `fullscreen.svg` — Custom video player controls
- `chevron-down.svg` — Collapsible accordions and dropdowns
- `arrow-right.svg` / `arrow-up-right.svg` — Editorial navigation buttons
- `calendar.svg` / `clock.svg` / `users.svg` — Booking search and specification tags
- `map-pin.svg` / `car.svg` — Location directions and expressway travel milestones
- `check.svg` / `menu.svg` / `close.svg` — Clean UI modal and drawer states

---

## 8. LICENSING & GOVERNANCE COMPLIANCE MATRIX

| Classification | Meaning | Assets Included | Codex Reusability Guideline |
|---|---|---|---|
| **A. OWNED / AUTHORIZED** | Verified owned resort brand identity or open-source licensed assets. | All 4 Brand Logos, all 9 WOFF2 Fonts (OFL 1.1), all 18 UI SVG icons. | **Approved for immediate production integration.** |
| **B. REFERENCE ONLY** | Authentic property photographs and video assets extracted from reference deployment. | All 11 core photographs, all 4 MP4 video files. | **Use during development and staging.** Confirm with resort ownership prior to public commercial deployment. |
| **C. UNKNOWN** | Third-party or unattributed materials. | None. Zero unverified stock photography was extracted. | N/A |
