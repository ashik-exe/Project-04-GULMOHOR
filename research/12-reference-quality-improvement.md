# Gulmohor Resort — Reference-Based Quality Improvement

**Date:** 6 November 2026  
**Scope:** Visual refinements to the existing English/Bengali website. No deployment or dependency changes.

## Reference principles applied

The reference feels polished because the architecture and pool stay legible across a wide frame, daylight colour remains clear, typography is kept away from the strongest photographic detail, and each image is framed for its native composition. Its restraint also comes from generous spacing, a small number of type styles, and repeated alignment rules. Those principles were applied within Gulmohor's existing ivory, charcoal, sage and coral palette and editorial layout.

## Changes made

- Reduced the homepage hero's dark scrim and adjusted its desktop height so more of the real building and pool remain visible. Mobile uses a bottom-weighted scrim to keep the image brighter above the copy while maintaining contrast behind the calls to action.
- Reframed accommodation and garden photographs closer to their landscape source ratios, reducing crops that hid room context and garden detail. Added subtle hairline image borders for consistent edges.
- Increased small body-copy sizes in section introductions and accommodation/event descriptions for easier reading.
- Reworked the event feature into a split photo-and-copy layout on desktop and a stacked layout on smaller screens. Changed the Events page hero to a real resort veranda/pool image and the outdoor gathering card to the garden pavilion, with descriptive alt text.
- Removed the marquee photo from page and gallery references after browser inspection revealed a prominent “VENUE” watermark and children in the image. Its original and generated derivatives were left intact. The Events gallery filter now shows the actual lawn pavilion with a note that the resort must confirm the event setup.

## Verification performed

- `npm run build` passed with TypeScript and Vite. Final bundle: CSS 76.52 kB (15.47 kB gzip), JavaScript 289.34 kB (86.76 kB gzip).
- Reviewed the production preview at 1440 × 1000 and 390 × 844 on the Home, Stay and Events routes.
- Verified the mobile menu opens, Bengali language selection renders `/bn/`, and the booking inquiry opens.
- Verified the Events gallery filter shows the lawn pavilion and its context note in the lightbox.
- At 390 px, the page's document width was 385 px, so it did not exceed the 390 px viewport. Loaded responsive image URLs resolved to the expected 640 px WebP sources. Below-fold lazy images were not all forced into view during this check.
- The browser console returned no warnings or errors during the checks above.

## Remaining image and production checks

- The website now has no dedicated, watermark-free photograph of a real event setup. The Events sections show resort spaces and explain that arrangements need confirmation. Obtain a rights-cleared event photograph if an actual celebration image is desired.
- Confirm commercial usage rights and provenance for the resort photographs before launch. The watermark-bearing marquee file remains in the project but is no longer referenced by the site.
- No Lighthouse/Core Web Vitals run or full network waterfall was performed as part of this visual pass.
- No deployment was performed.
