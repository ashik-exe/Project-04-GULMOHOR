# Gulmohor Resort — Rebuild Architecture Proposal

**Phase:** 01 audit recommendation for approval  
**Strategic direction supplied by project owner:** Modern boutique resort; photography-led; hybrid multi-page; English primary/Bengali secondary; multi-step booking inquiry plus WhatsApp; high visual craft; strong performance and usability.  
**Scope:** Proposal only. No website implementation has been started in this phase.

## Recommendation

Keep the existing React/Vite/TypeScript foundation unless a later approved discovery step identifies a concrete constraint. Replace the single long-scroll information architecture with a small set of focused routes, while keeping the homepage as the visual/editorial introduction and preserving a clear inquiry path across the site. Build page sections from reusable, typed content components and move claims into an auditable source-of-truth data layer. Do not introduce a CMS or booking engine until the operator chooses an owner/workflow for maintaining inventory, rates and policies.

## Recommended sitemap

| Route (English) | Main job | Primary CTA |
|---|---|---|
| `/` | Introduce the estate, mood, key experiences and next steps. | Plan your visit / enquire |
| `/stay` | Explain room categories, photo coverage, inclusions and indicative rates. | Ask about a stay |
| `/experiences` | Pool, gardens, day visits and practical amenity information. | Ask about a day visit |
| `/dining` | Dining spaces, confirmed sample menus, event catering scope and caveats. | Ask about dining/catering |
| `/celebrations` | Weddings, reunions and corporate events with a tailored inquiry. | Request an event quote |
| `/gallery` | Curated visual library with category filter and accessible lightbox. | Explore / enquire |
| `/visit` | Map, directions, travel notes, arrival guidance, current contact details. | Open directions / call |
| `/book` | Multi-step booking inquiry for room, day visit or event, then WhatsApp handoff. | Send inquiry |
| `/privacy` | Privacy information appropriate to analytics, third-party maps/video and inquiry data. | — |

Potential English page links should remain short and stable. Avoid separate pages for each room until there is enough verified content and image coverage. Add future pages only when they answer a distinct search/guest need. The final route set should be confirmed before Phase 02 design.

## Homepage section order

1. Skip link and compact utility/contact strip (only high-value verified information).
2. Header: brand, focused navigation, language control, primary booking CTA.
3. Cinematic hero with real, rights-cleared property photography, short factual proposition and reserve/visit actions.
4. Booking inquiry starter (experience type + dates/guest count), labeled as inquiry rather than availability search.
5. Short estate introduction with one distinctive architectural image and a few verified facts.
6. Stay preview with room categories and visible rate-verification qualifier.
7. Pool and garden experience spread.
8. Dining preview with current menu/catering scope and confirmation notes.
9. Celebrations/events preview with quote CTA.
10. Curated image strip/gallery preview.
11. Guest feedback summary with evidence attribution and no invented quotes/ratings.
12. Visit/location block with map fallback, address and directions.
13. Practical FAQs/policies (only approved terms; clearly flag unknowns).
14. Strong closing inquiry CTA, contact options and footer.

Keep the homepage paced by photography and editorial whitespace; move detailed operational information to its relevant destination page to shorten the initial scroll.

## Component architecture

Suggested code boundaries (names illustrative):

```text
src/
  app/                 app shell, route config, error/not-found handling
  components/
    layout/            SiteHeader, MobileNavigation, Footer, Breadcrumbs
    media/             ResponsiveImage, GalleryGrid, Lightbox, VideoEmbed
    booking/           InquiryStepper, StayInquiry, DayVisitInquiry, EventInquiry
    content/           SplitStory, FactsList, RoomCard, MenuPanel, FAQList
    ui/                Button, Dialog, FormField, LanguageSwitcher
  pages/               HomePage, StayPage, ExperiencesPage, DiningPage,
                       CelebrationsPage, GalleryPage, VisitPage, BookingPage
  content/             typed bilingual page copy and content provenance notes
  data/                rates, contacts, room/event details with verification state
  i18n/                locale dictionary, locale routing helpers
  styles/              design tokens, typography, global styles
```

Reuse the current Tailwind setup and semantic HTML patterns. Prefer focused page composition over one monolithic `App.tsx`. Keep booking flows, translation dictionaries and business data out of large visual sections. Each commercial fact should carry a source/status or an editorial note in source data so a future editor can see what is safe to publish.

## Routing strategy

- Add a small client router compatible with Vite if approved, keeping the static SPA deployment shape. Avoid building a bespoke router.
- Use explicit route components and a not-found page; anchor links remain appropriate within each page.
- Default `/` to English. Use `/bn/...` for Bengali counterparts (or confirm `/en/...` for both before implementation). Give localized pages self-referencing canonical URLs and reciprocal `hreflang` (`en` and `bn` plus `x-default`). Preserve query parameters only for temporary inquiry drafts, not as the primary language URL.
- Route aliases/redirects should be planned only after checking actual search/domain history; Git and live-domain history are currently unavailable.
- Add page-specific titles/descriptions, Open Graph metadata, descriptive image alt text, canonical URLs, sitemap and robots directives as part of the production-ready phase.

## Language strategy

- English is default and primary; Bengali is a complete, intentionally edited secondary version, not a machine fallback.
- Keep copy strings in locale dictionaries/content files with explicit parity checks. Avoid mixed-language labels in one locale except proper names.
- Store language preference for convenience, but explicit route locale must win. Ensure `html lang`, dates, numbers/currency and validation/error messages follow the active language.
- Use fonts that render both scripts reliably and load only the required weights/subsets. Review Bengali line-height, line breaks and control sizes at narrow widths.

## Booking inquiry flow

1. Visitor selects intent: overnight stay, day visit/pool, dining, or event.
2. Collect only relevant details. For stay/day: preferred dates, guest count, requested room/package; for event: date window, event type and estimated attendance. Ask name and preferred reply channel near the final step.
3. Show an editable summary and consent/privacy note. State clearly that the form checks no live inventory, does not reserve a room, and final rates/policies are confirmed by staff.
4. Validate required fields accessibly; preserve entries when moving backward; provide back/edit/cancel actions and inline error descriptions.
5. Generate a concise, encoded WhatsApp message to the verified resort number. Open it from a direct user action and show a fallback with click-to-call/copyable inquiry details if WhatsApp is unavailable or blocked.
6. Confirm only that WhatsApp was opened; never imply that the resort received or accepted the inquiry. Optional backend email/CRM capture requires a separate operator/privacy decision.

## Technical recommendations

- Maintain React/Vite/TypeScript and current installed dependencies in the first implementation pass; do not replace framework or dependencies as part of audit.
- Add routing only when Phase 02 is approved. Confirm Vite static-host fallback behavior and canonical/redirect decisions for the selected host.
- Inventory and document the approved source image, rights holder, usage scope, attribution, alt text, focal point and derivative paths. Select imagery after rights review; do not treat reference-site media as cleared.
- Generate responsive WebP/AVIF derivatives where supported, use width/height or aspect ratio to prevent layout shift, `srcset`/`sizes`, lazy-load below-fold media, and prioritize only the true hero image. Preserve originals and keep derivatives reproducible.
- Avoid loading every video/map immediately. Use a poster and click-to-load or consent-aware embed for third-party media; offer static map/address fallback.
- Keep user-facing data accurate with status flags and a management-approved content sheet. Hide uncertain price/policy claims rather than silently approximating them.
- Use semantic headings/forms, visible focus, skip link, keyboard-operable navigation/dialogs/lightbox, motion preferences and WCAG-aware contrast/tap targets. Include Bengali QA.
- Add title/meta, structured data only for verified facts, sitemap, robots, privacy policy, and simple analytics after owner selection and consent requirements are clear.
- Performance targets should be set for mobile field conditions and checked after visual implementation; measure LCP, INP and CLS on the deployed preview rather than relying only on bundle size.
- Add browser-driven flow and responsive checks after implementation is authorized; current package does not declare a test/lint script.

## Proposed development phases

| Phase | Work | Gate / output |
|---|---|---|
| 01 — Audit (current) | Preserve workspace, inspect code/assets/content, document risks and architecture. | This report package for owner approval. |
| 02 — Content and rights lock | Management verifies rates, inventory, amenities, policies, menu/event terms, contact channels and image rights; settle domain/host and route locale convention. | Approved fact sheet, image usage register and page copy outline. |
| 03 — Experience/design system | Agree responsive sitemap, page wireframes, visual language, interaction patterns, typography and photo direction. | Reviewed desktop/mobile design specification before coding. |
| 04 — Foundation and route build | Add approved route architecture, shared shell, locale structure, design tokens and static page skeletons. | Preview with all route shells and keyboard navigation. |
| 05 — Content and inquiry flows | Populate approved content/media; implement stay/day/event inquiry steps and WhatsApp handoff. | End-to-end inquiry scenarios and content review. |
| 06 — Quality and launch readiness | Accessibility, performance, SEO, responsive, browser/console, link, privacy and fallback checks; resolve critical findings. | Release candidate, documented rollback and owner sign-off. |
| 07 — Deployment | Configure chosen host/domain, redirects, monitoring and backup. | Explicit deployment approval and verified live smoke check. |

## Risks and preservation strategy

| Risk | Mitigation |
|---|---|
| Git history is unavailable, so existing edits cannot be attributed or restored by branch. | Preserve the current archive; do not initialize, reset or rewrite `.git`; establish a valid remote/backup/branch workflow with the owner before code changes. |
| Archive excludes `node_modules/` and `dist/`. | Both are reproducible from package lock/build; preserve them separately only if the owner needs a bit-for-bit machine snapshot. The project source and assets are in the archive. |
| Reference media may lack commercial rights. | Use only assets with explicit permission; keep reference assets quarantined and do not silently ship them. |
| Prices and policies may have changed since source gathering. | Obtain written management-approved data with effective dates; include clear update ownership. |
| Inquiry form can be mistaken for a confirmed booking. | Repeat “request only” language at date selection, review and completion; never show fake availability. |
| Long image-led pages can become slow on mobile networks. | Responsive derivatives, intrinsic dimensions, lazy loading, limited third-party embeds and field performance review. |
| Mixed verification quality in research and design report. | Use the matrix as a gate; keep source and confidence attached to each claim; do not settle conflicting prices/capacities by guess. |
| Local browser/console session was unavailable during audit. | Establish a preview runbook and verify a production-like preview in Phase 06. |

## Approval requested for the next phase

Review the audit, asset inventory, content matrix and proposal. Before implementation, approve the sitemap/locale URL convention and provide or assign the management fact/rights confirmation packet. No website code or asset was changed for this proposal.
