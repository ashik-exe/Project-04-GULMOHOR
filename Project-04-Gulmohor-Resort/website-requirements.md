# Website Requirements Document — Gulmohor Resort

**Project:** Project 04 — Gulmohor Resort & Restaurant  
**Location:** Damla, Sreenagar, Munshiganj, Bangladesh  
**Phase:** Phase 01 — Research & Strategic Requirements  
**Status:** Requirements Specification (Pre-Design / Pre-Implementation)  
**Evidence Foundation:** 16 Research Dossiers, 28 Visual Assets, Verified Business Data JSON

---

## 1. Business Website Goals

The planned website for Gulmohor Resort must achieve specific, evidence-backed commercial objectives tailored to its real-world hospitality operations:

1. **Establish an Authoritative Digital Flagship:**
   - Solve the current discovery deficit where Google searches frequently expose users to unrelated Indian properties (`gulmohor.in`).
   - Present Gulmohor Resort as an upscale, boutique destination along the booming Dhaka-Mawa hospitality corridor.
2. **Eliminate Booking & Pricing Friction:**
   - Transparently display room tiers, day-long passes, and pool access rules so potential guests do not have to wait for manual WhatsApp replies.
3. **Capture High-Yield Inquiries (Weddings & Corporate):**
   - Provide specialized inquiry forms and dedicated visual showcases for destination weddings, Gaye Holud ceremonies, reunions, and corporate day off-sites.
4. **Streamline Direct Reservations:**
   - Introduce a structured WhatsApp reservation launcher that collects booking parameters (guest name, dates, room category, headcount) and drafts an organized message to `+8801911498819`.
5. **Showcase Visual Excellence:**
   - Maximize the resort's verified architectural strengths — the neoclassical white mansion, 70x35 ft illuminated pool, and rose gardens — through high-definition photography.

---

## 2. Required Website Content Inventory

### A. Confirmed Content (Ready for Immediate Implementation)
- **Official Branding:** Logo vector graphic, tagline *"The Perfect Place for Your Perfect Day"*, brand phrase *"You Find Peace"*, and slogan *"Find A Home Close To Home"*.
- **Contact Details:** Phone/WhatsApp `+8801911498819` (01911-498819), secondary phone `01711526654`.
- **Location & Route:** Exact coordinates (23.5185625 N, 90.2610625 E), Plus Code `G796+CCX`, Sreenagar-Dohar Highway opposite Bhuiyan Medical, public transit guide via Seba Paribahan (50-70 BDT).
- **Accommodation Specifications:** Couple Deluxe (BDT 7,000), Double Deluxe (BDT 9,000), Premium Suite (BDT 12,000) with complete amenity inventories and breakfast menus.
- **Facility Specifications:** 70x35 ft swimming pool, hourly rate (BDT 400), entry ticket (BDT 100), Kids Zone playground, rose garden, hammock lounge, live BBQ kitchen.
- **Dining Menus:** Breakfast items (Paratha, Dal, Egg, Sabzi, Tea), day-long lunch (Fried Rice, Chicken Fry, Chili Onion), afternoon snacks (Patties, Piyaju), live grill kebabs, Ramadan iftar items.
- **Visual Library:** 28 categorized, high-resolution original photographic assets.

### B. Missing / Pending Content (To Be Obtained During Client Onboarding)
- Official business email address (e.g. `info@gulmohorresort.com`).
- High-resolution interior photographs of Double Deluxe family rooms.
- Formal written terms for cancellation and deposit refunds.
- Comprehensive food menu with itemized à la carte pricing.

---

## 3. Recommended Website Architecture & Sitemap

Based on the research findings, a high-converting, single-page application (SPA) architecture with smooth deep-linking anchor navigation and dedicated modal sub-views is recommended for the demo.

```text
Gulmohor Resort Website Architecture
│
├── 01. Global Navigation Bar (Sticky / Glassmorphism)
│   ├── Logo & Brand Identity
│   ├── Navigation Links: [About] [Rooms] [Pool & Facilities] [Dining] [Packages] [Events] [Gallery] [Location]
│   └── Quick Contact & "Book Now" CTA Button (WhatsApp Direct)
│
├── 02. Homepage Hero Section
│   ├── Full-Screen Neoclassical Mansion & Pool Backdrop
│   ├── Brand Headlines: "The Perfect Place for Your Perfect Day"
│   ├── Subhead: "You Find Peace — A Home Close To Home (30 Min from Dhaka)"
│   └── Action Buttons: [Explore Packages] [Check Availability]
│
├── 03. Resort Story & Quick Highlights Strip
│   ├── Neoclassical Architecture Overview
│   ├── Key Stats Bar: [70x35 ft Pool] [30 Min from Dhaka] [5.7K+ Guests Community] [Kids Zone]
│
├── 04. Accommodation & Suites Section
│   ├── Couple Deluxe Room Card (BDT 7,000 | 2 Guests | AC | Balcony | Breakfast)
│   ├── Double Deluxe Family Room Card (BDT 9,000 | 4 Guests | 2 Beds | Breakfast)
│   ├── Premium Suite Room Card (BDT 12,000 | VIP Lounge + Bedroom | Deluxe Shower)
│   └── In-Room Amenities Checklist
│
├── 05. The Swimming Pool & Leisure Facilities
│   ├── 70 x 35 ft Pool Showcase (Day & Night Illumination)
│   ├── Visitor Pool Access Badge (BDT 400 / hr)
│   ├── Kids Zone Playground Feature
│   └── Garden Hammock & Walking Trails
│
├── 06. Poolside Dining & Live BBQ Kitchen
│   ├── Air-Conditioned Poolside Restaurant
│   ├── "The Sun Goes Down. The Grill Heats Up." Live BBQ Station
│   └── Catering & Buffet Capability Showcase
│
├── 07. Packages & Pricing Table (Interactive Filter/Toggle)
│   ├── Tab 1: Day-Long Outing Packages (Couple BDT 6,500 incl. Meals & Pool)
│   ├── Tab 2: Overnight Stay Packages (BDT 7,000 – 12,000)
│   └── Tab 3: Group & Event Packages (Reunions, Corporate, Gaye Holud)
│
├── 08. Destination Weddings & Celebrations
│   ├── Outdoor Marquee Lawn & Indoor Ballroom Showcases
│   ├── Bridal & Couple Photography Spotlights
│   └── Event Inquiry Generator
│
├── 09. Visual Experience Gallery (Filterable Lightbox)
│   ├── Filters: [All] [Property] [Pool] [Rooms] [Dining] [Events] [Night Vibes]
│   └── 28 Curated High-Definition Assets
│
├── 10. Location, Route & Interactive Map
│   ├── Sreenagar-Dohar Highway Landmark Reference
│   ├── Directions from Dhaka via Expressway (Car vs Bus Guide)
│   └── Embedded Map Locator & Coordinates
│
├── 11. Frequently Asked Questions (Accordion)
│   ├── Day Package Timings (10 AM - 6 PM)
│   ├── Pool Costumes & Rules
│   ├── Outside Food & Booking Deposit Policies
│
├── 12. Direct Reservation & Inquiry Hub
│   ├── Instant WhatsApp Reservation Assistant
│   └── Call Hotline Banner (01911-498819)
│
└── 13. Global Footer
    ├── Copyright, Emergency Numbers, Address
    └── Social Media Icons (Facebook Verified)
```

---

## 4. Required Website Functionality Tiers

### A. Essential Features (Mandatory for Phase 02 Demo)
- **Direct WhatsApp Booking Engine:** Interactive form that drafts an itemized reservation query and opens WhatsApp `+8801911498819` directly.
- **Direct Click-to-Call CTAs:** Mobile-friendly phone links to `tel:+8801911498819` and `tel:01711526654`.
- **Responsive Layout:** Pixel-perfect rendering across mobile devices, tablets, and desktop displays.
- **Filterable Media Lightbox:** High-performance modal allowing guests to view resort images at full resolution.
- **Google Maps & Location Integration:** Interactive route directions and GPS pin locator.
- **Pricing & Package Toggle:** Easy switching between Day Packages and Night Stays.

### B. Useful Enhancements (Recommended for Demo)
- **Night / Day Visual Switcher:** Toggle showing the resort swimming pool in daytime sunshine vs. glowing night underwater illumination.
- **Distance & Travel Calculator:** Interactive widget calculating travel time from major Dhaka hubs (Jatrabari, Dhanmondi, Gulshan) via the expressway.
- **Bengali / English Language Toggle:** Bilingual interface catering to both domestic Bangladeshi families and overseas NRBs.

### C. Future Production Features (Phase 03 Post-Approval)
- Automated payment gateway integration (bKash / Nagad / SSLCOMMERZ).
- Database-backed live room availability calendar.
- Automated SMS / Email booking confirmations.
