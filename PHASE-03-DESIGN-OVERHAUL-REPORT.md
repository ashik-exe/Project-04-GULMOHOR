# GULMOHOR RESORT & RESTAURANT — PHASE 03 DESIGN OVERHAUL REPORT
## Neoclassical Boutique Retreat — Contemporary Editorial Luxury

**Project:** Gulmohor Resort & Restaurant  
**Location:** Damla, Sreenagar, Munshiganj, Bangladesh (23°31'06" N, 90°15'39" E)  
**Corridor:** 30–40 Minutes from South Dhaka via Bangabandhu (Padma) Expressway  
**Design Phase:** Phase 03 Complete UI/UX, Typography & Visual Experience Refinement  
**Live Demo:** Running locally at `http://localhost:5173/`

---

## 1. Executive Summary & Aesthetic Transformation

In Phase 03, the Gulmohor Resort digital flagship was completely transformed from a generic hotel booking template into a **world-class Neoclassical Boutique Retreat** inspired by the editorial restraint of **Aman Resorts** and high-end architectural publications (*Architectural Digest*, *Cereal*, *Openhouse*).

### What Was Eliminated:
- ❌ Repetitive 3-card grid rows across multiple sections.
- ❌ Heavy drop shadows, generic gradients, and SaaS-like floating metric badges.
- ❌ AI-generated marketing filler, fabricated check-in promises, and fake booking engines.
- ❌ Stock photographs and unverified claims.

### What Was Created:
- ✅ **Authentic Architectural Identity:** Centered around the genuine white Corinthian-column mansion facade, 70-foot natural quartzite swimming pool, century-old mango boughs, and blooming rose gardens.
- ✅ **Distinct Editorial Rhythm:** Every single section has a unique, intentional composition (asymmetric monograph, master suite gallery, cinema-ratio visual center, split hearth presentation, frameless exhibition grid).
- ✅ **Sophisticated Bilingual Typography:** *Cormorant Garamond* paired with *Plus Jakarta Sans* (English); *Noto Serif Bengali* paired with *Hind Siliguri* (Bengali), utilizing balanced headings, tracking, and optical rhythm.
- ✅ **100% Asset Authenticity:** All 34 property assets in `public/images/gulmohor/` were deployed with verified provenance, honest disclaimers (e.g. seasonal turnover for Double Deluxe interiors), and traceable tariffs.

---

## 2. Design System Tokens & Editorial Palette

| Token Name | Hex Code | Visual Role & Usage |
|:---|:---|:---|
| **Warm Ivory** | `#FDFBF7` | Primary canvas background; creates a calming, warm architectural feel. |
| **Pure White** | `#FFFFFF` | Editorial highlight surfaces, dialog overlays, and crisp card modules. |
| **Architectural Charcoal** | `#1A1D20` | Primary display headlines, high-contrast footer, and dark reception elements. |
| **Deep Charcoal** | `#242424` | Secondary text, deep neutral borders, and high-contrast buttons. |
| **Gulmohor Coral** | `#D95338` | Signature botanical accent; reserved strictly for primary actions, active tabs, and key numbers. |
| **Muted Champagne Gold** | `#C5A869` | Neoclassical architectural highlights, Roman numerals, coordinates, and subtle borders. |
| **Garden Sage** | `#6D8065` | Botanical tags, verification icons, and organic accent cues. |
| **Soft Neutral** | `#EAE6DF` | Hairline dividers, border strokes, and input frame definitions. |

---

## 3. Section-by-Section Re-Art-Direction

### 00. Architectural Dateline & Sticky Header
- **Top Notice Bar:** Monospaced dateline displaying geographic GPS coordinates (`23°31'06" N • 90°15'39" E`), travel time (`30–40 Mins via Bangabandhu Expressway`), direct hotline (`01911-498819`), and a seamless `EN / বাংলা` language toggle.
- **Navbar:** Minimalist luxury navbar featuring the authentic circular property emblem, letterspaced branding (`GULMOHOR BOUTIQUE RETREAT`), 6 essential navigation links with fine hover underlines, and an uppercase reservation pill.

### 01. The Hero Experience
- **Cinematic Composition:** Full-bleed authentic mansion facade and pool perspective (`hero-resort-mansion-pool-daytime.jpg`).
- **Editorial Typography:** Left-aligned Cormorant Garamond / Noto Serif Bengali display headline with `text-wrap: balance`.
- **Architectural Specifications Strip:** Hairline 4-column specification strip replacing generic floating badges:
  1. *Aquatic Centerpiece:* 70 ft × 35 ft Quartzite Basin
  2. *Travel Time:* 30–40 Minutes from South Dhaka
  3. *Compound Privacy:* 100% Private 2-Acre Walled Estate
  4. *Accommodation:* Upper Balcony Suites & Family Rooms

### 02. The Gulmohor Experience (Monograph)
- **Asymmetric Composition:** Large cobblestone rose walkway photograph (`hero-rose-garden-mansion-walkway.jpg`) paired with an inset marble water canal fountain detail (`nature-entrance-water-fountain.jpg`).
- **Architectural Tenets:** 3 numbered tenets with hairline dividers:
  - `01` Classical Colonnades & Symmetry
  - `02` "Eat Find Peace" — The Orchard Canopy
  - `03` Total Gated Seclusion

### 03. Stay & Accommodation (Master Suite Showcase)
- **Suite Spotlight:** Interactive showcase focusing on the top-tier VIP Suite Room (৳12,000/night), with secondary thumbnail previews for living lounge, glass bathroom, and balcony view.
- **Day Outing vs. Overnight Toggle:** Allows visitors to switch between overnight room stays and day-long leisure packages (৳6,500 couple day package, ৳5,000 day room, ৳400/hr pool pass).
- **Honest Asset Disclosure:** Dedicated advisory note explaining that Double Deluxe family room interiors are undergoing seasonal turnover, showing pool-facing balcony perspective honestly.

### 04. Swimming Pool & Leisure (Aquatic Centerpiece)
- **Cinema-Ratio Frame:** 70-foot water basin framed by white Corinthian porticos and red roses.
- **Interactive Day / Night Lighting Switcher:** Smooth toggle switching between sun-drenched daylight reflection (`pool-crystal-turquoise-water.jpg`) and illuminated night atmosphere (`pool-mansion-facade-reflection.jpg`).
- **Specification Strip:** Basin dimensions (70×35 ft), multi-stage silica sand filtration, botanical perimeter, and separate male/female changing suites.

### 05. Nature & Relaxation (Botanical Retreat)
- **Organic Grid:** Full-height woven hammock suspended between mature mango trees (`nature-mango-trees-shaded-hammock.jpg`) alongside blooming red rose promenades and an octagonal wooden gazebo pavilion.

### 06. Dining Experience (Split Hearth Presentation)
- **Dual Venue Presentation:**
  - *Indoor Hall:* Floor-to-ceiling glass wall restaurant overlooking the swimming pool.
  - *Evening Live Kitchen:* Charcoal BBQ hearth serving chicken skewers, naan, and delicacies under the night sky.
- **Degustation Menu Course Explorer:** Interactive text tabs allowing guests to inspect sample menus: Lunch Banquet, Morning Breakfast, Evening BBQ, and Large Feast (৳500/head).

### 07. Events & Celebrations (Image-Led Spread)
- **Celebration Imagery:** Authentic bride and groom poolside wedding portrait, alumni batch reunion illuminated evening lawns, and fenced children's playground.
- **Concierge Dispatch Banner:** Direct trigger launching the interactive event quotation generator modal.

### 08. Photo Gallery (Museum Exhibition Grid)
- **Frameless Exhibition:** 3-column frameless architectural grid with category filter tabs (`All`, `Mansion & Grounds`, `Swimming Pool`, `Suites & Rooms`, `Dining & BBQ`, `Gardens & Hammock`, `Events`).
- **Interactive Lightbox:** Full-screen modal with keyboard navigation (`←` / `→`), high-res view, caption, and explicit asset provenance.

### 09. Find Us (Minimal Travel Guide)
- **Split Layout:** Official address block, private vehicle expressway directions (Hanif Flyover → N8 Expressway → Sreenagar Interchange → Damla), public bus guide (Seba Paribahan, ৳50–70), and Google Maps satellite embed.

### 10. Direct Concierge & FAQ (Reservation Terminal)
- **Split Concierge Hub:**
  - *Left (7 Cols):* Bespoke reservation form with package selector, date picker, guest headcount, special notes, live estimated tariff calculation, and direct WhatsApp payload formulation.
  - *Right (5 Cols):* Reception hotline direct-call cards (01911-498819 and 01711-526654) and integrated hairline FAQ accordion answering check-in, pool etiquette, outside food policies, and deposit terms.

---

## 4. Technical Build & Quality Verification

```bash
> tsc -b && vite build
vite v8.3.6 building client environment for production...
✓ 2074 modules transformed.
dist/index.html                   1.66 kB │ gzip:   0.92 kB
dist/assets/index-BKvzrMUZ.css   34.32 kB │ gzip:   6.77 kB
dist/assets/index-DNakCXua.js   406.66 kB │ gzip: 112.20 kB
✓ built in 1.62s
```

### Visual Proof Artifacts Recorded:
- `overhaul-desktop-hero.png` — Desktop Hero in Bengali
- `overhaul-desktop-hero-en.png` — Desktop Hero in English (Cormorant Garamond)
- `overhaul-desktop-full.png` — Complete desktop scroll experience (16,097 px)
- `overhaul-mobile-hero.png` — Mobile viewport hero (iPhone 14 Pro, 390×844)
- `overhaul-mobile-full.png` — Complete mobile scroll experience
- `overhaul-section-experience.png` & `overhaul-section-experience-en.png` — Asymmetric monograph
- `overhaul-section-accommodation.png` — Master suite showcase & specs
- `overhaul-section-pool.png` — 70 ft swimming pool & daylight switcher
- `overhaul-section-nature.png` — Mango orchard hammock & rose gardens
- `overhaul-section-dining.png` — Panoramic AC restaurant & live hearth
- `overhaul-section-events.png` — Destination weddings & event packages
- `overhaul-section-gallery.png` — Exhibition photo gallery & lightbox
- `overhaul-section-location.png` — Expressway transit guide & route details
- `overhaul-section-contact.png` — Direct reservation terminal & FAQ accordion

---

## 5. Summary of Achievements

1. **Zero Template Trope Left:** Every section feels custom-curated, grounded in Neoclassical architecture and peaceful countryside seclusion.
2. **True Editorial Pacing:** Contrast between full-bleed cinematic imagery, monograph spreads, and crisp specification data strips creates a luxurious reading cadence.
3. **Rigorous Integrity:** No fabricated rates, no stock photos, and clear transparency regarding room turnover and reception verification.
4. **Seamless Bilingual Execution:** Full parity between English and Bengali with bespoke typography scales for each language script.
