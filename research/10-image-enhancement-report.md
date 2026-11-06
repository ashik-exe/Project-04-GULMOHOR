# Gulmohor Resort — Image Enhancement Report

**Date:** 6 November 2026  
**Status:** 10 selected photos enhanced and integrated; source assets preserved.

## Summary

Ten selected photographs were inspected, lightly retouched and approved for the local website. Each enhanced master preserves its source photo’s dimensions, crop, scene geometry and visible objects. No generative image was integrated. The accepted edits use restrained tonal and saturation adjustments, mild sharpening and, for the suite interior only, white-balance correction. The source files remain unchanged.

The ten masters are lossless WebP files under `public/images/gulmohor/enhanced/`. They are archive-quality retouch masters, not delivery-optimized files; because they are lossless encodings of JPEG sources, they are larger than the JPEG originals. The site uses 36 responsive WebP derivatives under `public-site/images/gulmohor/enhanced/`; those same 36 files are present in `dist/` and total 4,760,532 bytes (about 4.54 MiB).

## Approved image inventory

| Website use | Original source | Source / master dimensions | Enhanced master | Retouch |
| --- | --- | ---: | --- | --- |
| Hero estate | `public/images/gulmohor/hero/hero-resort-mansion-pool-daytime.jpg` | 1920 × 1080 | `hero/hero-estate-master.webp` | Gentle contrast reduction and saturation restraint; retained the original sky and building detail. |
| Garden approach / architecture | `public/images/gulmohor/hero/hero-rose-garden-mansion-walkway.jpg` | 1920 × 1080 | `architecture/estate-garden-walk-master.webp` | Slight exposure/contrast reduction and restrained saturation. |
| Couple Deluxe room | `public/images/gulmohor/rooms/room-deluxe-queen-bed-lounge.jpg` | 1920 × 1080 | `accommodation/couple-deluxe-master.webp` | Slight exposure/contrast reduction; near-neutral saturation. |
| Veranda / Double Deluxe view | `public/images/gulmohor/hero/hero-balcony-panoramic-pool-estate.jpg` | 1920 × 1080 | `architecture/family-veranda-master.webp` | Slight exposure lift, contrast reduction and restrained saturation. The image remains labeled a veranda view, not an interior. |
| Premium Suite room | `public/images/gulmohor/rooms/room-suite-master-king-bed.jpg` | 1280 × 720 | `accommodation/suite-master-master.webp` | Mild white-balance correction, exposure/contrast lift and restrained saturation. Source resolution is limited to 1280 × 720. |
| Pool deck | `public/images/gulmohor/pool/pool-deck-loungers-sun-umbrellas.jpg` | 1920 × 1080 | `pool/pool-loungers-master.webp` | Slight exposure lift, contrast reduction and restrained saturation. |
| Shaded garden / hammock | `public/images/gulmohor/nature/nature-mango-trees-shaded-hammock.jpg` | 1920 × 1080 | `gardens/mango-hammock-master.webp` | Slight exposure lift, contrast reduction and restrained saturation. |
| Indoor dining | `public/images/gulmohor/dining/dining-indoor-lounge-hall.jpg` | 1920 × 1080 | `dining/dining-hall-master.webp` | Mild exposure and contrast lift; near-neutral saturation. |
| Garden pavilion | `public/images/gulmohor/nature/nature-garden-gazebo-pavilion.jpg` | 1920 × 1080 | `gardens/garden-gazebo-master.webp` | Slight exposure lift, contrast reduction and restrained saturation. |
| Event marquee | `Project-04-Gulmohor-Resort/assets/activities-and-events/event-wedding-marquee-venue.jpg` | 540 × 960 | `events/event-marquee-master.webp` | Gentle contrast reduction and restrained saturation. The visible embedded “VENUE” text is unchanged. |

“Source / master dimensions” are identical for each row. No crop, resize, perspective correction, object removal, sky replacement, or scene reconstruction was applied to the masters.

## Retouch and delivery method

The rejected generative edit visibly changed sky and fine scene details, so it was excluded. A first automatic white-balance attempt introduced a magenta cast in outdoor images; that batch was also rejected and retained in the research archive for traceability. Final outdoor versions use per-photo exposure/contrast and small saturation corrections without auto white balance. The warm indoor suite received a restrained neutralization; the dining image kept a warmer balance.

Final master processing used ImageMagick: conversion to sRGB, the per-image corrections listed above, a mild `-enhance`, subtle unsharp masking (`0x0.6+0.35+0.02`) and lossless WebP output. Processing did not change master pixel dimensions. The delivered responsive files use WebP quality 85, Lanczos downsampling, metadata stripping and ImageMagick WebP method 6. No source is upscaled.

| Image | Responsive widths | Master file size |
| --- | --- | ---: |
| Hero estate | 640, 960, 1440, 1920 px | 1,095,314 B |
| Garden approach | 640, 960, 1440, 1920 px | 1,499,754 B |
| Couple Deluxe | 640, 960, 1440, 1920 px | 436,484 B |
| Veranda | 640, 960, 1440, 1920 px | 1,109,104 B |
| Premium Suite | 640, 960, 1280 px | 270,832 B |
| Pool deck | 640, 960, 1440, 1920 px | 1,177,584 B |
| Hammock garden | 640, 960, 1440, 1920 px | 1,721,392 B |
| Dining room | 640, 960, 1440, 1920 px | 570,260 B |
| Garden pavilion | 640, 960, 1440, 1920 px | 1,701,866 B |
| Event marquee | 540 px (source size) | 358,732 B |

There are 36 responsive derivatives in total. The 540 × 960 marquee is intentionally not enlarged. The `srcSet`/`sizes` photo mapping selects appropriate widths in the site. The 10 lossless masters total 9,941,322 bytes; the deployed responsive derivative set totals 4,760,532 bytes.

## Contact sheets and quality review

- [Final enhanced contact sheet](10-image-enhancement-contact-sheet.jpg)
- [Original and enhanced side-by-side QC sheet](10-image-enhancement-side-by-side-qc.jpg)

The contact sheet and side-by-side sheet were visually inspected. All ten photos passed the final review for natural color, retained composition and scene identity. The first auto-white-balance contact sheet remains explicitly rejected at `research/image-enhancement/rejected/initial-auto-wb-contact-sheet.jpg`. No additional manual pixel painting or reconstruction was required. Clipped sky detail and any softness in the source were not fabricated or claimed as recovered.

## Exclusions, duplicates and rights

- `event-wedding-celebration-grid.jpg` was excluded because it is a multi-image collage, not a single usable photograph.
- `resort-main-building-night.jpg` was excluded because it is visibly defocused and sharpening could not reliably restore detail.
- `events-wedding-poolside-portrait.jpg` was excluded because it carries a third-party “Wedding Channel” watermark and usage rights are unverified.
- `events-grand-royal-entrance-gate.jpg` was excluded because it is very soft/blurred.
- The one generated hero edit was rejected because it altered sky and fine visual details. It is not used in the site.

Duplicates were not identified among the ten selected source photos by the visual review. No provenance or license record supplied with the selected image files establishes commercial usage permission. The collection appears to combine project-supplied resort images and archived property imagery, but the resort must confirm photographer, ownership and commercial-use rights before launch. The event marquee’s embedded “VENUE” text remains because removing it would alter the source image.

## Site integration and verification

The website image map now points to the enhanced responsive derivatives. The site uses the selected photos in the hero, stay cards, pool, gardens, dining, events and gallery. The collage and blurred night photograph have been removed from those presentations. Original photos remain in their original folders. Earlier generated/unapproved derivatives were retained under `research/image-enhancement/` rather than silently discarded.

`npm run build` passed on 6 November 2026 (TypeScript and Vite). The generated `dist/` contains all 36 referenced responsive image files and no missing files from the selected derivative set. A live browser recheck could not be completed in this continuation: the previous preview server had stopped, and starting Vite on localhost was denied by the environment with `listen EPERM`. Therefore the successful build and filesystem presence are verified, while image rendering in a fresh browser session remains unverified.
