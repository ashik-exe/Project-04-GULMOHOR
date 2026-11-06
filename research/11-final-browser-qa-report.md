# Gulmohor Resort — Post-Enhancement Browser QA

**Date:** 6 November 2026  
**Environment:** Production build served with `vite preview` at `http://127.0.0.1:4173/`  
**Result:** Build and browser checks passed. No website code changes were needed.

## Preview access

The earlier `vite --host 0.0.0.0` and `vite --host 127.0.0.1` attempts on port 5173 failed with `listen EPERM`. This was an environment socket-binding restriction in the default sandbox, not a Vite application error. The supported production preview command was run with permission to bind locally and started successfully on `127.0.0.1:4173`. The local preview remains available for inspection.

## Build and integrated-image checks

`npm run build` was run again after QA and passed: TypeScript completed and Vite emitted the production build. `dist/` contains all **36** mapped enhanced WebP derivatives under `dist/images/gulmohor/enhanced/`; their combined size is **4,760,532 bytes** (about 4.54 MiB). The full `dist/` is about 5.1 MiB. The JavaScript bundle is 289.21 kB (86.76 kB gzip); CSS is 76.21 kB (15.43 kB gzip).

The 36 output files were dimension-checked and included in the visually inspected [36-derivative contact sheet](11-responsive-derivatives-contact-sheet.jpg). Thirty-two landscape derivatives retain 16:9 dimensions at 640, 960, 1440 and 1920 px. The suite adds three landscape sizes at 640, 960 and 1280 px, and the portrait marquee remains 540 × 960 px. No derivative is upscaled. The originals and enhancement masters were not modified in this QA phase.

### Derivative file sizes

Sizes below are the actual files in `dist/images/gulmohor/enhanced/`, in bytes. A dash means that width is not generated for that source.

| Image / website use | 540 | 640 | 960 | 1280 | 1440 | 1920 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Hero estate | — | 46,826 | 88,094 | — | 159,618 | 228,250 |
| Garden approach / architecture | — | 76,696 | 145,158 | — | 250,324 | 359,672 |
| Couple Deluxe | — | 8,736 | 13,946 | — | 22,434 | 31,848 |
| Veranda / Double Deluxe view | — | 47,734 | 88,284 | — | 151,036 | 214,620 |
| Premium Suite | — | 8,388 | 14,120 | 19,516 | — | — |
| Pool deck | — | 47,256 | 86,644 | — | 152,148 | 213,598 |
| Shaded garden / hammock | — | 84,460 | 167,956 | — | 304,698 | 439,552 |
| Indoor dining | — | 19,700 | 33,810 | — | 55,058 | 74,986 |
| Garden pavilion | — | 86,032 | 175,610 | — | 317,420 | 461,154 |
| Event marquee | 65,150 | — | — | — | — | — |

The live image references matched the site content: estate image for hero and approach, room images for the three stay categories (the Double Deluxe image is clearly described as a veranda), pool image for pool content, hammock and pavilion for gardens, dining room for dining and indoor gatherings, and marquee for event sections. The gallery’s nine images use the same approved sources. The collage and blurred/watermarked candidates remain excluded.

## Responsive and image-delivery QA

The production site was opened and checked at 1440, 1280, 768, 390 and 360 px viewport widths. Document width stayed within each viewport; no horizontal overflow appeared. Desktop navigation showed at 1440 and 1280. The compact menu opened at 768, 390 and 360 px, displayed all four page links, and navigated successfully.

English/Bengali switching was exercised on both the home and Events routes. Switching from `/events` to Bengali reached `/bn/events`; switching back returned to `/events`. Direct loads of `/stay`, `/events`, `/bn/stay` and `/bn/events` rendered their expected headings and photos.

Image delivery checks confirmed:

- The hero has `loading="eager"`, `fetchpriority="high"`, `sizes="100vw"`, and a responsive `srcset`.
- Other content photos use lazy loading and width-specific WebP `srcset`/`sizes` values.
- At the 390 px viewport the browser selected 640 px landscape derivatives and the original-size marquee; at desktop width it selected 960 px landscape derivatives for section imagery, the 1920 px hero, and the 540 px marquee. These sizes were present and loaded in the browser.
- All visible image elements reported non-zero natural dimensions; below-fold images loaded when their sections were brought into view. No broken photo appeared.
- `object-fit: cover` and positioning were reviewed at desktop and mobile sizes. The 540 × 960 marquee stays portrait in its source but is cropped in the existing cover layouts. Its ceremony focal area remains visible in the event hero and cards; the homepage banner crop is tighter at desktop. This reflects the limited portrait source, and no layout/image positioning change was made.
- Reused photos in stay cards, page sections and gallery point to the same URLs. The browser asset inventory showed one asset record per unique image URL even when multiple elements used it. A full network waterfall was not available, so exact duplicate transfer counts are not independently verified.

## Interaction checks

The following interactions were exercised in the browser:

- Tablet/mobile navigation opened and closed; a menu link navigated from the 768 px view to Stay.
- Language switching preserved the current page route.
- Gallery Events filter showed the single marquee photo; its lightbox opened and closed.
- A homepage FAQ expanded and displayed its answer.
- Homepage CTAs tested: Plan your visit, pool visit, dining, day visit, both Make an inquiry buttons. Each opened the inquiry dialog.
- Stay CTAs tested: Ask about a stay, all three Ask about this room buttons, and Send a stay inquiry. Each opened the inquiry dialog.
- Event CTAs tested: Ask about an event, Start an event inquiry and the footer inquiry button. Each opened the inquiry dialog.
- The six-step inquiry was completed with dummy QA details through review and draft preparation. The prepared link targeted `wa.me/8801911498819` and contained the encoded test message. The external WhatsApp page was not opened and no message was sent. The test inquiry was cleared from the browser session afterward.

## Console, requests and performance boundaries

The browser console returned **zero warnings and zero errors** after the route, gallery, modal and CTA checks. The Google Fonts stylesheets/fonts and map iframe appeared in the browser asset/page state. The page asset inventory did not expose a complete network waterfall or per-request HTTP status report. Build output, image `naturalWidth`, and browser-rendered page assets showed no missing integrated photo, but every request status beyond those observations remains unverified.

No Lighthouse run, Core Web Vitals measurement or cold-cache bandwidth benchmark was performed. This QA covers actual derivative sizes and browser-selected `srcset` resources, not field performance.

## Changes made and remaining production items

No responsive issues were found that warranted code changes. No site styles, image mappings, source imagery, verified content or dependencies were changed during QA. This report and the derivative contact sheet are the only new QA deliverables.

Before public launch, confirm commercial image rights and credits with the resort; verify current room, amenity, event and contact details; confirm the production domain/hosting route behavior; and decide whether the WhatsApp inquiry draft is sufficient for operations. The website does not check availability or confirm a reservation. The external request waterfall/statuses and Lighthouse/CWV remain unmeasured. No deployment was performed.
