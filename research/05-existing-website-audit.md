# Gulmohor Resort — Existing Website Audit

**Audit date:** 6 November 2026  
**Scope:** Current workspace source, public assets, project research, existing design report, build artifacts and configuration. Audit only; website code/assets were not changed.

## Executive summary

The workspace contains a bilingual, single-page React/Vite demonstrator with a substantial editorial hospitality experience: accommodation and package content, photo gallery/lightbox, location, visitor guide, FAQ, guest feedback summary, a date inquiry helper, a multi-step WhatsApp booking form and an event inquiry modal. It is more complete than a static landing page, but it is not an online booking engine and has no server-side inquiry persistence. There is one rendered application route (`/`); navigation is by section anchors.

Repository preservation is incomplete at the Git layer: `.git/` exists but does not contain usable Git metadata, and Git reports “not a git repository.” Branch, commit and dirty status therefore cannot be established, and a branch cannot safely be created. A read-only preservation archive was created at `/tmp/gulmohor-phase01-preservation-20261106T113548Z.tar.gz` (73 MB), excluding reproducible `node_modules/` and generated `dist/`. It contains the workspace source, research, assets, hidden files, and existing metadata. The archive was listed successfully after creation.

## Repository safety and project state

| Check | Finding |
|---|---|
| Git status / branch / latest commit | Unavailable. `.git/` is an empty/unusable directory in the visible workspace; Git commands fail with `fatal: not a git repository`. Do not initialize or repair Git metadata until its intended state is understood. |
| User changes | Cannot distinguish tracked/untracked changes or identify their authorship without Git history. The archive preserves the visible workspace snapshot. |
| Build/deploy files | Vite, TypeScript, Tailwind, PostCSS and package lock files present. No deployment provider config, CI workflow, or custom server was found at repository root. |
| Preservation artifact | `/tmp/gulmohor-phase01-preservation-20261106T113548Z.tar.gz`; 73 MB; excludes only `node_modules/` and `dist/`. |
| Existing documentation | `PHASE-03-DESIGN-OVERHAUL-REPORT.md`, project research under `Project-04-Gulmohor-Resort/research/`, manifests/contact sheets and `docs/reference-asset-inventory.md` exist. The phase report contains design assertions that are not all supported by the research corpus; see the verification matrix. |

## Existing route and page structure

There is no router dependency or route table. `src/main.tsx` mounts `App`; `src/App.tsx` composes the page in this order:

1. Top notice bar and sticky header.
2. Hero.
3. BookingSearch date/experience helper.
4. Resort experience/editorial introduction.
5. Architectural interlude.
6. Accommodation cards and room-detail modal.
7. Pool and leisure section.
8. Video showcase (external YouTube embeds).
9. Nature and relaxation.
10. Dining.
11. Events and celebrations plus event inquiry modal.
12. Guest reviews/research summary.
13. Photo gallery and lightbox.
14. Visitor guide / arrival information.
15. Location map and directions.
16. Multi-step reservation/contact section with FAQ accordion.
17. Footer, sticky mobile reserve CTA and floating WhatsApp action.

This is a long, anchored homepage, not a hybrid multi-page site. Section IDs include `experience`, `accommodation`, `pool`, `resort-videos`, `nature`, `dining`, `events`, `testimonials`, `gallery`, `before-you-arrive`, `location`, and `contact`.

## Navigation and language

- Desktop navigation links to estate, suites, pool, gardens, dining, celebrations, gallery and location; reservation is a CTA.
- Under 1280 px the desktop links collapse to a drawer. It includes language choices, anchor navigation, Escape-to-close handling and a reserve action. Anchor selections close the drawer.
- Bengali (`bn`) is the default language; English (`en`) is selectable. `LanguageContext` reads `?lang=` on initial load, otherwise local storage (`gulmohor_lang`), and updates the document `lang` attribute. Switching language does not change route or URL. Text comes from inline bilingual content objects.
- Full translation parity, language-specific metadata/URLs, and persistence behavior under storage restrictions have not been browser-tested. The app is not organized into localized route trees.

## Components and interactions

| Area | Current behavior | Audit note |
|---|---|---|
| BookingSearch | Selects room/day package, dates and guest count; validates date order; then scrolls to contact and dispatches `gulmohor:booking-draft`. | It says availability must be confirmed and does not check inventory. Validate selected product/guest compatibility and draft handoff end to end. |
| Reservation form | Three-step client-side form; collects booking details and opens a prefilled WhatsApp message to the primary number. Booking drafts can be received through a custom browser event. | No backend, availability lookup, persistence, email confirmation or payment. Browser popup handling and keyboard/screen-reader flow need end-to-end review. |
| Event inquiry | Modal form builds an inquiry and opens WhatsApp. | No saved lead or server-side delivery. Confirm modal focus trap/restoration and validation feedback. |
| Room cards/modal | Room cards open an expanded room detail dialog; CTA launches WhatsApp with room inquiry. | Room data includes detailed prices/amenities that require management confirmation; one family room intentionally uses a balcony view and discloses missing interior photo. |
| Gallery | Category gallery opens a lightbox, supports previous/next selection and close interaction. | Verify keyboard controls, focus management, alt/caption quality and touch gestures. |
| FAQs / visitor guide | Expand/collapse content sections; operational caveats are called out in visitor guide. | There are two related disclosure patterns, which can be consolidated during information architecture work. |
| Pool | Day/night image state switcher and pool content. | Rules, access schedule, depth/safety details should not be asserted beyond sourced evidence. |
| Navigation | Smooth anchor links, sticky header state and mobile drawer. | Check anchor offset against sticky header, active section indication, and reduced-motion behavior. |
| WhatsApp / phone | Direct `tel:` and `wa.me` links; several CTAs prefill contextual message. | External handoff depends on WhatsApp availability and user action; no analytics/lead fallback is visible in source. |
| Video | YouTube no-cookie iframe embeds, lazy loaded, plus outbound YouTube links. | Four local reference MP4s are not used. Third-party network/privacy and embed availability affect the section. |
| Location | Embedded Google map plus external Google Maps route link. | Third-party iframe affects privacy and potentially loading; no static fallback is confirmed by the current source. |

## Booking and commercial behavior

Current booking is an inquiry workflow, not a booking engine. The date helper checks only that departure follows arrival, then passes inputs to the contact form. The final form encodes a WhatsApp message for `+8801911498819`. A separate event modal similarly opens WhatsApp. No room calendar, inventory lock, deposit collection, online payment, CRM/email service, server validation, booking record, or success receipt exists in the inspected application.

Research says phone/WhatsApp are the current channels, advance payment may be needed, and cancellation policy is not publicly stated. The interface should continue labeling availability, final rates and policies as subject to resort confirmation until management supplies current written terms.

## Responsive and accessibility observations

- Tailwind responsive breakpoints and mobile-specific sticky CTA/drawer are used throughout. The navigation intentionally changes at `xl`; components use single-column mobile layouts and responsive grids.
- Source inspection suggests useful foundations: semantic sections/headings in some components, form labels, `aria-expanded`, `aria-live`, button types, modal title IDs, alt text on many images and Escape handling on the nav.
- This phase did not have a functioning local preview/browser session; live interaction, real viewport behavior, visual overflow, contrast, focus order, reduced-motion, automated accessibility checks and browser console errors were not independently verified. Existing screenshot automation scripts and a Phase 03 report are artifacts, not proof of the current working tree’s runtime behavior.
- Modal focus trapping/restoration, skip navigation, active nav state, heading hierarchy, alt-text specificity, and sufficiently large Bengali/English tap targets should be checked in Phase 02.

## Content / UI limitations observed

- The page has a lot of material for one route. Booking CTA is available, but rooms, day visits, dining, events, practical visit guidance, social proof, and map information compete in a long scroll.
- Room descriptions/pricing are prominent even though rate seasonality, exact inventory and some policy details are open questions.
- In `src/data/resortData.ts`, data records contain detailed amenities and package descriptions; some claims exceed what the open-question list considers confirmed. Examples include breakfast service hours/menu detail, room amenities, inclusions and pool access.
- Review content is presented as a research theme summary and explicitly says names, ratings and quotes were not invented. This transparency should be retained; do not convert themes into fabricated testimonials.
- The current utility bar, some design tokens, fonts, and sections may not align with the confirmed new brief’s photography-led boutique direction. Preserve verified content and useful interaction patterns, but reassess visual composition and section count.
- UI is bilingual but not SEO-localized. No CMS is present; content and translation are code-managed.

## Design audit

| Dimension | Current assessment | Direction for rebuild |
|---|---|---|
| Visual hierarchy | Strong headline/section treatment and contrast between ivory and forest surfaces; the long scroll and many equally weighted features dilute the primary booking/visit choice. | Establish one clear hero proposition and a repeated, restrained inquiry CTA; move detail to focused pages. |
| Typography | The system mixes Cormorant Garamond, Plus Jakarta Sans, Anek Bangla, Hind Siliguri, Noto Serif Bengali and Tiro Bangla, with additional Fraunces/DM Sans loaded. This gives expressive choice but adds font requests and risks inconsistent hierarchy. | Reduce to a deliberate English/Bengali display + text family pairing, self-host licensed subsets where allowed, and document scale/line-height. |
| Photography | Strong volume and property-specific material, including clear room images and hero alternatives; alternate formats, repeated copies and reference-only media coexist. | Select a small narrative sequence, verify rights, define crop/focal points and serve size-appropriate derivatives. |
| Navigation | Sticky desktop header, responsive drawer, language controls and reserve CTA provide predictable access. Eight desktop section links plus a long homepage can feel dense; no active-section state is visible in source. | Reduce global nav to key routes; use contextual page navigation and consistent reserve action. |
| Section composition | Current sections use editorial spreads, gallery, modular cards, disclosures and asymmetric imagery; breadth creates repetition and a very long page. | Keep a distinct photographic rhythm but give each route one purpose and avoid repeating the same fact/CTA panel. |
| Mobile UX | Source includes responsive Tailwind layouts, a mobile drawer and sticky booking CTA. Real device/browser verification was unavailable; fixed CTA may overlap lower controls or modal content. | Verify 320–430 px widths, safe-area insets, sticky overlap, drawer scroll/focus and touch target sizes. |
| Accessibility | `prefers-reduced-motion` is implemented globally; visible source also uses form labels, native controls, `aria-live`, `aria-expanded`, image alt text and Escape handling in navigation. Modal focus and screen-reader behavior are unverified. | Add skip link and focus-visible review; validate dialog focus trap/restore, keyboard gallery, contrast, heading order and Bengali text sizing. |
| Content quality | Helpful practical caveats and a transparent feedback summary; dense detail includes some claims with unresolved evidence. Root document currently declares `lang="bn"`, and the description is Bengali-only although English is now the primary strategy. | Reconcile locale metadata and page content; distinguish approved facts from research notes; remove unsupported assertions. |
| Conversion | Multiple reserve/WhatsApp actions and separate event inquiry lower contact friction; there is no lead persistence or confirmation state beyond opening WhatsApp. | Preserve direct messaging, add intent-specific form steps, summary/edit stage and reliable fallback; never imply a confirmed booking. |

## Technical audit

| Area | Finding |
|---|---|
| Framework | React 19.3.1 with TypeScript `~7.0.2`; Vite 8.3.5 range in `package.json` (`^8.3.5`, lockfile resolves exact dependency). |
| Routing | No routing library; single SPA root and anchor navigation. |
| Styling | Tailwind CSS 3.4.19, custom theme tokens in `tailwind.config.js`, global CSS in `src/index.css`, utility classes in components. PostCSS + Autoprefixer. |
| Dependencies | Runtime: React, React DOM, `lucide-react`, `clsx`, `tailwind-merge`. Dev: Vite/plugin-react, TypeScript, Tailwind, PostCSS, Autoprefixer, `puppeteer-core`. Do not replace in Phase 01. |
| Content management | Local typed constants in `src/data/resortData.ts` plus localized literals in components. No CMS/API. |
| Image handling | Static assets under `public/images/gulmohor/` and `public/assets/reference-gulmohor/`; raw URL paths, no responsive image pipeline apparent. File audit shows some very large PNG/JPG alternatives. |
| Scripts | `npm run dev`, `npm run build` (`tsc -b && vite build`), `npm run preview`. No test/lint scripts declared. |
| Deployment | No root Vercel/Netlify config or workflow found. Static Vite output is suitable for a static host once hosting/domain/redirect requirements are selected. |
| Performance | Static SPA, many page sections and image elements, Google Fonts and YouTube/map embeds. Large source images are present; no CMS/image CDN or explicit image transformation configured. Build output/old phase report should be refreshed only when implementation is authorized. Current live network waterfall/Core Web Vitals were not measured. |
| Console/runtime | Could not inspect a running browser: the earlier localhost request returned connection refused and the current preview is not available. No runtime console error claim is made. |

## Retain / improve / redesign / remove

| Disposition | Recommendation |
|---|---|
| Retain | Verified address and contact source data; bilingual copy model; transparent caveats; property-owned/authorized media after rights audit; honest room-photo gap disclosure; accessible form labels and native date controls; inquiry-first WhatsApp fallback; gallery/lightbox concept; practical guide. |
| Improve | Booking request steps, event-specific lead capture, error and success states, mobile menu accessibility, image loading/responsive delivery, map fallback, SEO metadata, structured content, conversion analytics and translation QA. |
| Redesign | Information architecture and route structure to match the approved hybrid multi-page direction; photography sequence; typography/system; room, dining, pool and event storytelling; mobile composition and navigation. |
| Remove or rewrite after approval | Unsourced operational promises, assumed policies, content with unsupported specifications, duplicated/overlong sections, demo-only labels and any asset whose commercial rights cannot be documented. Do not delete anything in this audit phase. |

## Audit limits

Git metadata could not be read. No preview was available for an independent live walkthrough, console inspection, accessibility check or viewport test. Claims below compare local source with local research documents; they are not fresh management confirmation. Asset rights are not independently established by file presence or manifest labels.
