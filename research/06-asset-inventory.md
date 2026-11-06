# Gulmohor Resort — Asset Inventory

**Audit date:** 6 November 2026  
**Scope:** All image, video, font and standalone SVG assets outside `node_modules/` and generated `dist/`; 223 files across runtime assets, research archive, reference bundle and generated build copy (49 raster image copies in `dist/`). This table records byte sizes and raster dimensions read from file headers with Pillow 12.3.0. SVG/video/font dimensions are reported as not applicable here.  
**Provenance:** `public/images/gulmohor/` is the existing curated project media set whose internal manifest/contact sheet describe it as collected/verified business imagery. `Project-04-Gulmohor-Resort/assets/` is the source research archive, with file identity duplicates linked below. `public/assets/reference-gulmohor/` is expressly documented in `docs/reference-asset-inventory.md` as extracted from a reference website; media is marked “Reference Only”, so commercial reuse is not cleared. Brand/font/icon license labels in that inventory still require underlying authorization/license records before production use. Google Maps captures are platform/reference material and should not be republished as website photography without confirming permissions. File names alone do not prove ownership or commercial approval.

## Counts by source root

| Root | Files |
|---|---:|
| `public/images/gulmohor/` | 48 |
| `public/assets/reference-gulmohor/` | 93 |
| `Project-04-Gulmohor-Resort/` | 33 |
| `dist/images/gulmohor/` (generated copies) | 49 |

## Recommended candidates (subject to rights clearance)

| Website use | Existing candidate | Notes |
|---|---|---|
| Hero | `public/images/gulmohor/hero/hero-resort-mansion-pool-daytime.jpg` (1920×1080, 361 KB) or `hero-mansion-pool-rose-foreground.jpg` (1920×1080, 521 KB) | Both are in the curated runtime media set and have exact-byte duplicates in the pool/research archive; use image fit/crop after visual review. |
| Architecture / estate | `public/images/gulmohor/hero/hero-rose-garden-mansion-walkway.jpg` (1920×1080, 534 KB) | Strong wide exterior/approach image; exact duplicate appears as nature-blooming-rose-gardens. |
| Swimming pool | `public/images/gulmohor/pool/pool-crystal-turquoise-water.jpg` (1920×1080, 521 KB) | High resolution; exact duplicate with hero mansion-pool-rose image means semantics should be checked visually before assigning. |
| Accommodation | `public/images/gulmohor/rooms/room-deluxe-queen-bed-lounge.jpg` (1920×1080, 78 KB); `room-suite-master-king-bed.jpg` (1280×720, 39 KB) | Available interiors; family/Double Deluxe gallery is explicitly marked missing in content data. |
| Dining | `public/images/gulmohor/dining/dining-restaurant-panoramic-pool-view.jpg` (1920×1080, 197 KB); `dining-indoor-lounge-hall.jpg` (1920×1080, 149 KB) | Site-ready sizes; menus and walk-in service still need business confirmation. |
| Gardens | `public/images/gulmohor/nature/nature-mango-trees-shaded-hammock.jpg` (1920×1080, 624 KB); `nature-garden-gazebo-pavilion.jpg` (1920×1080, 652 KB) | Good editorial supporting images. |
| Events | `public/images/gulmohor/events/events-wedding-poolside-portrait.jpg` (960×540, 60 KB); `events-kids-playground-zone.jpg` (1920×1080, 657 KB) | Verify recognizable people/publication rights before public use. |
| Gallery | Curated gallery selections from above, plus `public/assets/reference-gulmohor/images/gallery/` | Reference bundle images are visually broad but remain reference-only pending commercial rights. |

## Exact file inventory

File sizes are bytes. Duplicate groups are identical SHA-256 byte content; rows sharing a listed filename are duplicate copies, not separate photographs. A dash means no exact-byte duplicate.

| Category | Path | Dimensions | Format | Bytes | Exact duplicate filenames |
|---|---|---:|---|---:|---|
| Events | `Project-04-Gulmohor-Resort/assets/activities-and-events/activities-kids-zone-playground.jpg` | 1920 × 1080 | JPG | 657,462 | events-kids-playground-zone.jpg; activities-kids-zone-playground.jpg |
| Events | `Project-04-Gulmohor-Resort/assets/activities-and-events/event-wedding-celebration-grid.jpg` | 1420 × 800 | JPG | 168,611 | — |
| Events | `Project-04-Gulmohor-Resort/assets/activities-and-events/event-wedding-marquee-venue.jpg` | 540 × 960 | JPG | 80,303 | — |
| Events | `Project-04-Gulmohor-Resort/assets/activities-and-events/event-wedding-storyboard-celebration.jpg` | 1420 × 800 | JPG | 283,686 | — |
| Branding | `Project-04-Gulmohor-Resort/assets/branding/gulmohor-facebook-cover-official.jpg` | 2035 × 773 | JPG | 1,247,919 | brand-facebook-cover-banner.jpg; gulmohor-facebook-cover-official.jpg; promotion-you-find-peace-cover-banner.jpg |
| Branding | `Project-04-Gulmohor-Resort/assets/branding/gulmohor-logo-official.jpg` | 1200 × 1200 | JPG | 49,211 | brand-official-logo.jpg; gulmohor-logo-official.jpg |
| Branding | `Project-04-Gulmohor-Resort/assets/branding/i-love-gulmohor-lobby-sign.jpg` | 1920 × 1080 | JPG | 561,558 | events-love-gulmohor-photo-installation.jpg; i-love-gulmohor-lobby-sign.jpg |
| Branding | `Project-04-Gulmohor-Resort/assets/branding/resort-entrance-gate-fountain.jpg` | 1920 × 1080 | JPG | 532,602 | nature-entrance-water-fountain.jpg; resort-entrance-gate-fountain.jpg |
| Dining | `Project-04-Gulmohor-Resort/assets/food/food-traditional-buffet-chafing-dishes.jpg` | 1000 × 1760 | JPG | 108,785 | restaurant-buffet-setup.jpg; food-traditional-buffet-chafing-dishes.jpg |
| Gardens | `Project-04-Gulmohor-Resort/assets/garden-and-outdoor/garden-archway-swing-lawn.jpg` | 540 × 960 | JPG | 181,752 | nature-floral-archway-lawn-swing.jpg; garden-archway-swing-lawn.jpg |
| Gardens | `Project-04-Gulmohor-Resort/assets/garden-and-outdoor/garden-hammock-mango-trees.jpg` | 1920 × 1080 | JPG | 623,637 | nature-mango-trees-shaded-hammock.jpg; garden-hammock-mango-trees.jpg |
| Gardens | `Project-04-Gulmohor-Resort/assets/garden-and-outdoor/garden-rose-flowerbed-poolside.jpg` | 540 × 960 | JPG | 78,482 | pool-golden-hour-rose-border.jpg; garden-rose-flowerbed-poolside.jpg |
| Location / research | `Project-04-Gulmohor-Resort/assets/maps/location-map-osm-sreenagar-damla.png` | 768 × 768 | PNG | 166,343 | — |
| Other | `Project-04-Gulmohor-Resort/assets/promotions/promotion-bbq-evening-grill.jpg` | 540 × 960 | JPG | 93,324 | — |
| Other | `Project-04-Gulmohor-Resort/assets/promotions/promotion-you-find-peace-cover-banner.jpg` | 2035 × 773 | JPG | 1,247,919 | brand-facebook-cover-banner.jpg; gulmohor-facebook-cover-official.jpg; promotion-you-find-peace-cover-banner.jpg |
| Other | `Project-04-Gulmohor-Resort/assets/property-exterior/resort-exterior-garden-view.jpg` | 540 × 960 | JPG | 124,967 | pool-garden-pathway-glimpse.jpg; resort-exterior-garden-view.jpg |
| Other | `Project-04-Gulmohor-Resort/assets/property-exterior/resort-main-building-daytime.jpg` | 1920 × 1080 | JPG | 520,948 | hero-mansion-pool-rose-foreground.jpg; pool-crystal-turquoise-water.jpg; resort-main-building-daytime.jpg; swimming-pool-wide-view-day.jpg |
| Other | `Project-04-Gulmohor-Resort/assets/property-exterior/resort-main-building-night.jpg` | 1920 × 1080 | JPG | 78,734 | — |
| Dining | `Project-04-Gulmohor-Resort/assets/restaurant/restaurant-buffet-setup.jpg` | 1000 × 1760 | JPG | 108,785 | restaurant-buffet-setup.jpg; food-traditional-buffet-chafing-dishes.jpg |
| Dining | `Project-04-Gulmohor-Resort/assets/restaurant/restaurant-indoor-dining-hall.jpg` | 1920 × 1080 | JPG | 149,172 | dining-indoor-lounge-hall.jpg; restaurant-indoor-dining-hall.jpg |
| Accommodation | `Project-04-Gulmohor-Resort/assets/rooms/room-attached-bathroom.jpg` | 1920 × 1080 | JPG | 114,459 | — |
| Accommodation | `Project-04-Gulmohor-Resort/assets/rooms/room-balcony-view.jpg` | 1920 × 1080 | JPG | 364,130 | hero-balcony-panoramic-pool-estate.jpg; room-balcony-view.jpg |
| Accommodation | `Project-04-Gulmohor-Resort/assets/rooms/room-couple-deluxe-bed.jpg` | 1920 × 1080 | JPG | 57,271 | — |
| Accommodation | `Project-04-Gulmohor-Resort/assets/rooms/room-couple-deluxe-interior.jpg` | 1920 × 1080 | JPG | 92,228 | — |
| Accommodation | `Project-04-Gulmohor-Resort/assets/rooms/room-suite-living-area.jpg` | 1280 × 720 | JPG | 36,235 | room-suite-living-lounge.jpg; room-suite-living-area.jpg |
| Swimming pool | `Project-04-Gulmohor-Resort/assets/swimming-pool/swimming-pool-night-illumination.jpg` | 1920 × 1080 | JPG | 168,864 | — |
| Swimming pool | `Project-04-Gulmohor-Resort/assets/swimming-pool/swimming-pool-underwater-lighting-reel.jpg` | 1000 × 1760 | JPG | 88,485 | — |
| Swimming pool | `Project-04-Gulmohor-Resort/assets/swimming-pool/swimming-pool-wide-view-day.jpg` | 1920 × 1080 | JPG | 520,948 | hero-mansion-pool-rose-foreground.jpg; pool-crystal-turquoise-water.jpg; resort-main-building-daytime.jpg; swimming-pool-wide-view-day.jpg |
| Location / research | `Project-04-Gulmohor-Resort/google-maps/exterior/google-maps-exterior-entrance-gate-streetview-1024x576.jpg` | 1024 × 576 | JPG | 171,367 | google-maps-exterior-entrance-gate-streetview-1024x576.jpg; google-maps-exterior-entrance-gate-streetview-1024x576.jpg |
| Location / research | `Project-04-Gulmohor-Resort/google-maps/exterior/google-maps-exterior-highway-approach-east-1024x576.jpg` | 1024 × 576 | JPG | 145,372 | google-maps-exterior-highway-approach-east-1024x576.jpg; google-maps-exterior-highway-approach-east-1024x576.jpg |
| Location / research | `Project-04-Gulmohor-Resort/google-maps/exterior/google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg` | 1024 × 576 | JPG | 143,044 | google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg; google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg |
| Location / research | `Project-04-Gulmohor-Resort/google-maps/other/google-maps-verified-place-card-audit-reference.png` | 1920 × 1080 | PNG | 532,531 | google-maps-verified-place-card-audit-reference.png; google-maps-verified-place-card-audit-reference.png |
| Swimming pool | `Project-04-Gulmohor-Resort/google-maps/pool/google-maps-pool-mansion-facade-3264x2448.jpg` | 3264 × 2448 | JPG | 4,237,981 | google-maps-pool-mansion-facade-3264x2448.jpg; google-maps-pool-mansion-facade-3264x2448.jpg |
| Font | `public/assets/reference-gulmohor/fonts/dm-sans-latin.woff2` | — | WOFF2 | 18,192 | — |
| Font | `public/assets/reference-gulmohor/fonts/dm-sans-variable.woff2` | — | WOFF2 | 36,980 | — |
| Font | `public/assets/reference-gulmohor/fonts/fraunces-display-variable.woff2` | — | WOFF2 | 36,560 | — |
| Font | `public/assets/reference-gulmohor/fonts/fraunces-latin-variable.woff2` | — | WOFF2 | 11,536 | — |
| Font | `public/assets/reference-gulmohor/fonts/hind-siliguri-300.woff2` | — | WOFF2 | 34,568 | — |
| Font | `public/assets/reference-gulmohor/fonts/hind-siliguri-400.woff2` | — | WOFF2 | 40,224 | — |
| Font | `public/assets/reference-gulmohor/fonts/hind-siliguri-500.woff2` | — | WOFF2 | 40,160 | — |
| Font | `public/assets/reference-gulmohor/fonts/hind-siliguri-600.woff2` | — | WOFF2 | 39,644 | — |
| Font | `public/assets/reference-gulmohor/fonts/tiro-bangla-regular.woff2` | — | WOFF2 | 54,712 | — |
| Icon | `public/assets/reference-gulmohor/icons/arrow-right.svg` | — | SVG | 220 | — |
| Icon | `public/assets/reference-gulmohor/icons/arrow-up-right.svg` | — | SVG | 219 | — |
| Icon | `public/assets/reference-gulmohor/icons/calendar.svg` | — | SVG | 353 | — |
| Icon | `public/assets/reference-gulmohor/icons/car.svg` | — | SVG | 311 | — |
| Icon | `public/assets/reference-gulmohor/icons/check.svg` | — | SVG | 222 | — |
| Icon | `public/assets/reference-gulmohor/icons/chevron-down.svg` | — | SVG | 213 | — |
| Icon | `public/assets/reference-gulmohor/icons/clock.svg` | — | SVG | 256 | — |
| Icon | `public/assets/reference-gulmohor/icons/close.svg` | — | SVG | 261 | — |
| Icon | `public/assets/reference-gulmohor/icons/fullscreen.svg` | — | SVG | 199 | — |
| Icon | `public/assets/reference-gulmohor/icons/map-pin.svg` | — | SVG | 276 | — |
| Icon | `public/assets/reference-gulmohor/icons/menu.svg` | — | SVG | 299 | — |
| Icon | `public/assets/reference-gulmohor/icons/pause.svg` | — | SVG | 152 | — |
| Icon | `public/assets/reference-gulmohor/icons/play.svg` | — | SVG | 134 | — |
| Icon | `public/assets/reference-gulmohor/icons/star-empty.svg` | — | SVG | 268 | — |
| Icon | `public/assets/reference-gulmohor/icons/star-filled.svg` | — | SVG | 465 | — |
| Icon | `public/assets/reference-gulmohor/icons/users.svg` | — | SVG | 344 | — |
| Icon | `public/assets/reference-gulmohor/icons/volume-up.svg` | — | SVG | 308 | — |
| Icon | `public/assets/reference-gulmohor/icons/whatsapp.svg` | — | SVG | 517 | — |
| Dining | `public/assets/reference-gulmohor/images/dining/dining-room-window-table.jpg` | 1200 × 1600 | JPG | 290,041 | fb-palace-balcony-view.jpg; garden-cottage-balcony-view.jpg; dining-room-window-table.jpg; gallery-04-table-by-the-window.jpg |
| Dining | `public/assets/reference-gulmohor/images/dining/grand-marquee-tent-feast.jpg` | 2048 × 1366 | JPG | 290,982 | poster-day-long-picnic.jpg; fb-grand-marquee-tent.jpg; grand-marquee-tent-feast.jpg; banquet-marquee-tent.jpg; gallery-09-a-table-under-lights.jpg |
| Dining | `public/assets/reference-gulmohor/images/dining/outdoor-live-bbq-tree-lights.jpg` | 2048 × 1366 | JPG | 222,293 | fb-live-outdoor-bbq.jpg; gardens-evening-festoon-lights.jpg; outdoor-live-bbq-tree-lights.jpg; gallery-06-tree-lights-over-the-pool.jpg |
| Dining | `public/assets/reference-gulmohor/images/dining/poolside-candlelight-dinner.jpg` | 2048 × 1364 | JPG | 205,002 | fb-poolside-candlelight.jpg; poolside-candlelight-dinner.jpg; gallery-08-candles-by-the-pool.jpg |
| Dining | `public/assets/reference-gulmohor/images/dining/restaurant-table-poolview-sunset.jpg` | 2048 × 1536 | JPG | 330,384 | hero-sunset-poolside.jpg; fb-restaurant-table-poolview.jpg; swimming-pool-sunset-reflection.jpg; restaurant-table-poolview-sunset.jpg; gallery-01-pool-at-sunset.jpg |
| Events | `public/assets/reference-gulmohor/images/events/banquet-marquee-tent.jpg` | 2048 × 1366 | JPG | 290,982 | poster-day-long-picnic.jpg; fb-grand-marquee-tent.jpg; grand-marquee-tent-feast.jpg; banquet-marquee-tent.jpg; gallery-09-a-table-under-lights.jpg |
| Gallery | `public/assets/reference-gulmohor/images/gallery/gallery-01-pool-at-sunset.jpg` | 2048 × 1536 | JPG | 330,384 | hero-sunset-poolside.jpg; fb-restaurant-table-poolview.jpg; swimming-pool-sunset-reflection.jpg; restaurant-table-poolview-sunset.jpg; gallery-01-pool-at-sunset.jpg |
| Gallery | `public/assets/reference-gulmohor/images/gallery/gallery-02-morning-at-the-pool.jpg` | 1280 × 510 | JPG | 358,496 | poster-resort-overview.jpg; hero-daylight-swimming-pool.jpg; hero-pool.jpg; swimming-pool-daylight.jpg; gallery-02-morning-at-the-pool.jpg |
| Gallery | `public/assets/reference-gulmohor/images/gallery/gallery-03-the-veranda.jpg` | 1600 × 1200 | JPG | 242,926 | poster-corporate-dinner.jpg; fb-marble-grand-lobby.jpg; veranda-balustrade-lounge.jpg; gallery-03-the-veranda.jpg |
| Gallery | `public/assets/reference-gulmohor/images/gallery/gallery-04-table-by-the-window.jpg` | 1200 × 1600 | JPG | 290,041 | fb-palace-balcony-view.jpg; garden-cottage-balcony-view.jpg; dining-room-window-table.jpg; gallery-04-table-by-the-window.jpg |
| Gallery | `public/assets/reference-gulmohor/images/gallery/gallery-05-the-colonnade-at-night.jpg` | 960 × 1280 | JPG | 69,178 | fb-colonnade-night-veranda.jpg; poolside-villa-night-colonnade.jpg; gallery-05-the-colonnade-at-night.jpg |
| Gallery | `public/assets/reference-gulmohor/images/gallery/gallery-06-tree-lights-over-the-pool.jpg` | 2048 × 1366 | JPG | 222,293 | fb-live-outdoor-bbq.jpg; gardens-evening-festoon-lights.jpg; outdoor-live-bbq-tree-lights.jpg; gallery-06-tree-lights-over-the-pool.jpg |
| Gallery | `public/assets/reference-gulmohor/images/gallery/gallery-07-the-building-after-dark.jpg` | 2048 × 1536 | JPG | 74,342 | poster-evening-getaway.jpg; fb-night-pool-fairy-lights.jpg; grounds-night-illumination.jpg; gallery-07-the-building-after-dark.jpg |
| Gallery | `public/assets/reference-gulmohor/images/gallery/gallery-08-candles-by-the-pool.jpg` | 2048 × 1364 | JPG | 205,002 | fb-poolside-candlelight.jpg; poolside-candlelight-dinner.jpg; gallery-08-candles-by-the-pool.jpg |
| Gallery | `public/assets/reference-gulmohor/images/gallery/gallery-09-a-table-under-lights.jpg` | 2048 × 1366 | JPG | 290,982 | poster-day-long-picnic.jpg; fb-grand-marquee-tent.jpg; grand-marquee-tent-feast.jpg; banquet-marquee-tent.jpg; gallery-09-a-table-under-lights.jpg |
| Gallery | `public/assets/reference-gulmohor/images/gallery/gallery-10-the-white-facade.jpg` | 410 × 720 | JPG | 95,907 | pool-palace.jpg; swimming-pool-colonnade-facade.jpg; gallery-10-the-white-facade.jpg |
| Gallery | `public/assets/reference-gulmohor/images/gallery/gallery-11-loungers-at-dusk.jpg` | 410 × 720 | JPG | 78,702 | pool-sunset.jpg; swimming-pool-loungers-dusk.jpg; gallery-11-loungers-at-dusk.jpg |
| Gardens | `public/assets/reference-gulmohor/images/gardens/gardens-evening-festoon-lights.jpg` | 2048 × 1366 | JPG | 222,293 | fb-live-outdoor-bbq.jpg; gardens-evening-festoon-lights.jpg; outdoor-live-bbq-tree-lights.jpg; gallery-06-tree-lights-over-the-pool.jpg |
| Gardens | `public/assets/reference-gulmohor/images/gardens/grounds-night-illumination.jpg` | 2048 × 1536 | JPG | 74,342 | poster-evening-getaway.jpg; fb-night-pool-fairy-lights.jpg; grounds-night-illumination.jpg; gallery-07-the-building-after-dark.jpg |
| Hero | `public/assets/reference-gulmohor/images/hero/hero-daylight-swimming-pool.jpg` | 1280 × 510 | JPG | 358,496 | poster-resort-overview.jpg; hero-daylight-swimming-pool.jpg; hero-pool.jpg; swimming-pool-daylight.jpg; gallery-02-morning-at-the-pool.jpg |
| Hero | `public/assets/reference-gulmohor/images/hero/hero-sunset-poolside.jpg` | 2048 × 1536 | JPG | 330,384 | hero-sunset-poolside.jpg; fb-restaurant-table-poolview.jpg; swimming-pool-sunset-reflection.jpg; restaurant-table-poolview-sunset.jpg; gallery-01-pool-at-sunset.jpg |
| Branding | `public/assets/reference-gulmohor/images/resort/brand-flower-emblem-dark.png` | 284 × 290 | PNG | 68,439 | brand-flower-emblem.png; brand-flower-emblem-dark.png; brand-flower-emblem.png; brand-flower-emblem-dark.png |
| Branding | `public/assets/reference-gulmohor/images/resort/brand-flower-emblem.png` | 284 × 290 | PNG | 68,439 | brand-flower-emblem.png; brand-flower-emblem-dark.png; brand-flower-emblem.png; brand-flower-emblem-dark.png |
| Other | `public/assets/reference-gulmohor/images/resort/favicon.ico` | 47 × 48 | ICO | 6,915 | favicon.ico; favicon.ico |
| Other | `public/assets/reference-gulmohor/images/resort/fb-colonnade-night-veranda.jpg` | 960 × 1280 | JPG | 69,178 | fb-colonnade-night-veranda.jpg; poolside-villa-night-colonnade.jpg; gallery-05-the-colonnade-at-night.jpg |
| Other | `public/assets/reference-gulmohor/images/resort/fb-grand-marquee-tent.jpg` | 2048 × 1366 | JPG | 290,982 | poster-day-long-picnic.jpg; fb-grand-marquee-tent.jpg; grand-marquee-tent-feast.jpg; banquet-marquee-tent.jpg; gallery-09-a-table-under-lights.jpg |
| Other | `public/assets/reference-gulmohor/images/resort/fb-live-outdoor-bbq.jpg` | 2048 × 1366 | JPG | 222,293 | fb-live-outdoor-bbq.jpg; gardens-evening-festoon-lights.jpg; outdoor-live-bbq-tree-lights.jpg; gallery-06-tree-lights-over-the-pool.jpg |
| Other | `public/assets/reference-gulmohor/images/resort/fb-marble-grand-lobby.jpg` | 1600 × 1200 | JPG | 242,926 | poster-corporate-dinner.jpg; fb-marble-grand-lobby.jpg; veranda-balustrade-lounge.jpg; gallery-03-the-veranda.jpg |
| Other | `public/assets/reference-gulmohor/images/resort/fb-night-pool-fairy-lights.jpg` | 2048 × 1536 | JPG | 74,342 | poster-evening-getaway.jpg; fb-night-pool-fairy-lights.jpg; grounds-night-illumination.jpg; gallery-07-the-building-after-dark.jpg |
| Other | `public/assets/reference-gulmohor/images/resort/fb-palace-balcony-view.jpg` | 1200 × 1600 | JPG | 290,041 | fb-palace-balcony-view.jpg; garden-cottage-balcony-view.jpg; dining-room-window-table.jpg; gallery-04-table-by-the-window.jpg |
| Other | `public/assets/reference-gulmohor/images/resort/fb-poolside-candlelight.jpg` | 2048 × 1364 | JPG | 205,002 | fb-poolside-candlelight.jpg; poolside-candlelight-dinner.jpg; gallery-08-candles-by-the-pool.jpg |
| Other | `public/assets/reference-gulmohor/images/resort/fb-restaurant-table-poolview.jpg` | 2048 × 1536 | JPG | 330,384 | hero-sunset-poolside.jpg; fb-restaurant-table-poolview.jpg; swimming-pool-sunset-reflection.jpg; restaurant-table-poolview-sunset.jpg; gallery-01-pool-at-sunset.jpg |
| Other | `public/assets/reference-gulmohor/images/resort/gulmohor-flower-icon.png` | 324 × 324 | PNG | 69,275 | gulmohor-flower-icon.png; gulmohor-flower-icon.png |
| Hero | `public/assets/reference-gulmohor/images/resort/hero-pool.jpg` | 1280 × 510 | JPG | 358,496 | poster-resort-overview.jpg; hero-daylight-swimming-pool.jpg; hero-pool.jpg; swimming-pool-daylight.jpg; gallery-02-morning-at-the-pool.jpg |
| Other | `public/assets/reference-gulmohor/images/resort/pool-palace.jpg` | 410 × 720 | JPG | 95,907 | pool-palace.jpg; swimming-pool-colonnade-facade.jpg; gallery-10-the-white-facade.jpg |
| Other | `public/assets/reference-gulmohor/images/resort/pool-sunset.jpg` | 410 × 720 | JPG | 78,702 | pool-sunset.jpg; swimming-pool-loungers-dusk.jpg; gallery-11-loungers-at-dusk.jpg |
| Accommodation | `public/assets/reference-gulmohor/images/rooms/garden-cottage-balcony-view.jpg` | 1200 × 1600 | JPG | 290,041 | fb-palace-balcony-view.jpg; garden-cottage-balcony-view.jpg; dining-room-window-table.jpg; gallery-04-table-by-the-window.jpg |
| Accommodation | `public/assets/reference-gulmohor/images/rooms/poolside-villa-night-colonnade.jpg` | 960 × 1280 | JPG | 69,178 | fb-colonnade-night-veranda.jpg; poolside-villa-night-colonnade.jpg; gallery-05-the-colonnade-at-night.jpg |
| Accommodation | `public/assets/reference-gulmohor/images/rooms/veranda-balustrade-lounge.jpg` | 1600 × 1200 | JPG | 242,926 | poster-corporate-dinner.jpg; fb-marble-grand-lobby.jpg; veranda-balustrade-lounge.jpg; gallery-03-the-veranda.jpg |
| Swimming pool | `public/assets/reference-gulmohor/images/swimming-pool/swimming-pool-colonnade-facade.jpg` | 410 × 720 | JPG | 95,907 | pool-palace.jpg; swimming-pool-colonnade-facade.jpg; gallery-10-the-white-facade.jpg |
| Swimming pool | `public/assets/reference-gulmohor/images/swimming-pool/swimming-pool-daylight.jpg` | 1280 × 510 | JPG | 358,496 | poster-resort-overview.jpg; hero-daylight-swimming-pool.jpg; hero-pool.jpg; swimming-pool-daylight.jpg; gallery-02-morning-at-the-pool.jpg |
| Swimming pool | `public/assets/reference-gulmohor/images/swimming-pool/swimming-pool-loungers-dusk.jpg` | 410 × 720 | JPG | 78,702 | pool-sunset.jpg; swimming-pool-loungers-dusk.jpg; gallery-11-loungers-at-dusk.jpg |
| Swimming pool | `public/assets/reference-gulmohor/images/swimming-pool/swimming-pool-sunset-reflection.jpg` | 2048 × 1536 | JPG | 330,384 | hero-sunset-poolside.jpg; fb-restaurant-table-poolview.jpg; swimming-pool-sunset-reflection.jpg; restaurant-table-poolview-sunset.jpg; gallery-01-pool-at-sunset.jpg |
| Branding | `public/assets/reference-gulmohor/logos/brand-flower-emblem-dark.png` | 284 × 290 | PNG | 68,439 | brand-flower-emblem.png; brand-flower-emblem-dark.png; brand-flower-emblem.png; brand-flower-emblem-dark.png |
| Branding | `public/assets/reference-gulmohor/logos/brand-flower-emblem.png` | 284 × 290 | PNG | 68,439 | brand-flower-emblem.png; brand-flower-emblem-dark.png; brand-flower-emblem.png; brand-flower-emblem-dark.png |
| Branding | `public/assets/reference-gulmohor/logos/favicon.ico` | 47 × 48 | ICO | 6,915 | favicon.ico; favicon.ico |
| Branding | `public/assets/reference-gulmohor/logos/gulmohor-flower-icon.png` | 324 × 324 | PNG | 69,275 | gulmohor-flower-icon.png; gulmohor-flower-icon.png |
| Thumbnail | `public/assets/reference-gulmohor/thumbnails/thumb-fb-colonnade-night-veranda.webp` | 400 × 533 | WEBP | 13,124 | — |
| Thumbnail | `public/assets/reference-gulmohor/thumbnails/thumb-fb-grand-marquee-tent.webp` | 400 × 266 | WEBP | 30,920 | — |
| Thumbnail | `public/assets/reference-gulmohor/thumbnails/thumb-fb-live-outdoor-bbq.webp` | 400 × 266 | WEBP | 23,564 | — |
| Thumbnail | `public/assets/reference-gulmohor/thumbnails/thumb-fb-marble-grand-lobby.webp` | 400 × 300 | WEBP | 27,398 | — |
| Thumbnail | `public/assets/reference-gulmohor/thumbnails/thumb-fb-night-pool-fairy-lights.webp` | 400 × 300 | WEBP | 4,488 | — |
| Thumbnail | `public/assets/reference-gulmohor/thumbnails/thumb-fb-palace-balcony-view.webp` | 400 × 533 | WEBP | 53,038 | — |
| Thumbnail | `public/assets/reference-gulmohor/thumbnails/thumb-fb-poolside-candlelight.webp` | 400 × 266 | WEBP | 20,204 | — |
| Thumbnail | `public/assets/reference-gulmohor/thumbnails/thumb-fb-restaurant-table-poolview.webp` | 400 × 300 | WEBP | 25,046 | — |
| Hero | `public/assets/reference-gulmohor/thumbnails/thumb-hero-pool.webp` | 400 × 159 | WEBP | 26,936 | — |
| Thumbnail | `public/assets/reference-gulmohor/thumbnails/thumb-pool-palace.webp` | 400 × 702 | WEBP | 36,200 | — |
| Thumbnail | `public/assets/reference-gulmohor/thumbnails/thumb-pool-sunset.webp` | 400 × 702 | WEBP | 28,294 | — |
| Video / poster | `public/assets/reference-gulmohor/video-posters/poster-corporate-dinner.jpg` | 1600 × 1200 | JPG | 242,926 | poster-corporate-dinner.jpg; fb-marble-grand-lobby.jpg; veranda-balustrade-lounge.jpg; gallery-03-the-veranda.jpg |
| Video / poster | `public/assets/reference-gulmohor/video-posters/poster-day-long-picnic.jpg` | 2048 × 1366 | JPG | 290,982 | poster-day-long-picnic.jpg; fb-grand-marquee-tent.jpg; grand-marquee-tent-feast.jpg; banquet-marquee-tent.jpg; gallery-09-a-table-under-lights.jpg |
| Video / poster | `public/assets/reference-gulmohor/video-posters/poster-evening-getaway.jpg` | 2048 × 1536 | JPG | 74,342 | poster-evening-getaway.jpg; fb-night-pool-fairy-lights.jpg; grounds-night-illumination.jpg; gallery-07-the-building-after-dark.jpg |
| Video / poster | `public/assets/reference-gulmohor/video-posters/poster-resort-overview.jpg` | 1280 × 510 | JPG | 358,496 | poster-resort-overview.jpg; hero-daylight-swimming-pool.jpg; hero-pool.jpg; swimming-pool-daylight.jpg; gallery-02-morning-at-the-pool.jpg |
| Video / poster | `public/assets/reference-gulmohor/videos/corporate-dinner.mp4` | — | MP4 | 4,753,038 | — |
| Video / poster | `public/assets/reference-gulmohor/videos/day-long-picnic.mp4` | — | MP4 | 5,066,044 | — |
| Video / poster | `public/assets/reference-gulmohor/videos/evening-getaway.mp4` | — | MP4 | 2,174,682 | — |
| Video / poster | `public/assets/reference-gulmohor/videos/resort-overview.mp4` | — | MP4 | 3,779,983 | — |
| Branding | `public/images/gulmohor/brand/brand-facebook-cover-banner.jpg` | 2035 × 773 | JPG | 1,247,919 | brand-facebook-cover-banner.jpg; gulmohor-facebook-cover-official.jpg; promotion-you-find-peace-cover-banner.jpg |
| Branding | `public/images/gulmohor/brand/brand-official-logo.jpg` | 1200 × 1200 | JPG | 49,211 | brand-official-logo.jpg; gulmohor-logo-official.jpg |
| Dining | `public/images/gulmohor/dining/dining-buffet-chafing-service.jpg` | 540 × 960 | JPG | 36,492 | — |
| Dining | `public/images/gulmohor/dining/dining-indoor-lounge-hall.jpg` | 1920 × 1080 | JPG | 149,172 | dining-indoor-lounge-hall.jpg; restaurant-indoor-dining-hall.jpg |
| Dining | `public/images/gulmohor/dining/dining-restaurant-panoramic-pool-view.jpg` | 1920 × 1080 | JPG | 197,106 | — |
| Dining | `public/images/gulmohor/dining/dining-traditional-iftar-delicacies.jpg` | 1920 × 1080 | JPG | 149,601 | — |
| Events | `public/images/gulmohor/events/events-grand-royal-entrance-gate.jpg` | 1920 × 1080 | JPG | 175,047 | — |
| Events | `public/images/gulmohor/events/events-kids-playground-zone.jpg` | 1920 × 1080 | JPG | 657,462 | events-kids-playground-zone.jpg; activities-kids-zone-playground.jpg |
| Events | `public/images/gulmohor/events/events-kids-playhouse-portrait.jpg` | 1080 × 1920 | JPG | 406,950 | — |
| Events | `public/images/gulmohor/events/events-love-gulmohor-photo-installation.jpg` | 1920 × 1080 | JPG | 561,558 | events-love-gulmohor-photo-installation.jpg; i-love-gulmohor-lobby-sign.jpg |
| Events | `public/images/gulmohor/events/events-promenade-night-illumination.jpg` | 1920 × 1080 | JPG | 72,625 | — |
| Events | `public/images/gulmohor/events/events-wedding-poolside-portrait.jpg` | 960 × 540 | JPG | 60,099 | — |
| Location / research | `public/images/gulmohor/google-maps/exterior/google-maps-exterior-entrance-gate-streetview-1024x576.jpg` | 1024 × 576 | JPG | 171,367 | google-maps-exterior-entrance-gate-streetview-1024x576.jpg; google-maps-exterior-entrance-gate-streetview-1024x576.jpg |
| Location / research | `public/images/gulmohor/google-maps/exterior/google-maps-exterior-highway-approach-east-1024x576.jpg` | 1024 × 576 | JPG | 145,372 | google-maps-exterior-highway-approach-east-1024x576.jpg; google-maps-exterior-highway-approach-east-1024x576.jpg |
| Location / research | `public/images/gulmohor/google-maps/exterior/google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg` | 1024 × 576 | JPG | 143,044 | google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg; google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg |
| Location / research | `public/images/gulmohor/google-maps/other/google-maps-verified-place-card-audit-reference.png` | 1920 × 1080 | PNG | 532,531 | google-maps-verified-place-card-audit-reference.png; google-maps-verified-place-card-audit-reference.png |
| Swimming pool | `public/images/gulmohor/google-maps/pool/google-maps-pool-mansion-facade-3264x2448.jpg` | 3264 × 2448 | JPG | 4,237,981 | google-maps-pool-mansion-facade-3264x2448.jpg; google-maps-pool-mansion-facade-3264x2448.jpg |
| Hero | `public/images/gulmohor/hero/Hero image Luxurious Poolside Colonial Mansion.png` | 1672 × 941 | PNG | 2,661,775 | Luxurious Poolside Colonial Mansion.png; Hero image Luxurious Poolside Colonial Mansion.png |
| Hero | `public/images/gulmohor/hero/Luxurious Poolside Colonial Mansion.png` | 1672 × 941 | PNG | 2,661,775 | Luxurious Poolside Colonial Mansion.png; Hero image Luxurious Poolside Colonial Mansion.png |
| Hero | `public/images/gulmohor/hero/Luxurious Poolside Colonial Mansion.webp` | 1672 × 941 | WEBP | 496,160 | — |
| Hero | `public/images/gulmohor/hero/Luxurious-Poolside-Colonial-Mansion-original-upload.png` | 1024 × 576 | PNG | 940,553 | — |
| Hero | `public/images/gulmohor/hero/hero-balcony-panoramic-pool-estate.jpg` | 1920 × 1080 | JPG | 364,130 | hero-balcony-panoramic-pool-estate.jpg; room-balcony-view.jpg |
| Hero | `public/images/gulmohor/hero/hero-luxurious-poolside-colonial-mansion.png` | 2048 × 1152 | PNG | 2,814,837 | — |
| Hero | `public/images/gulmohor/hero/hero-mansion-pool-rose-foreground.jpg` | 1920 × 1080 | JPG | 520,948 | hero-mansion-pool-rose-foreground.jpg; pool-crystal-turquoise-water.jpg; resort-main-building-daytime.jpg; swimming-pool-wide-view-day.jpg |
| Hero | `public/images/gulmohor/hero/hero-resort-mansion-pool-daytime.jpg` | 1920 × 1080 | JPG | 361,323 | hero-resort-mansion-pool-daytime.jpg; pool-mansion-facade-reflection.jpg |
| Hero | `public/images/gulmohor/hero/hero-rose-garden-mansion-walkway.jpg` | 1920 × 1080 | JPG | 533,620 | hero-rose-garden-mansion-walkway.jpg; nature-blooming-rose-gardens.jpg |
| Hero | `public/images/gulmohor/hero/hero-swimming-pool-patio-loungers.jpg` | 1920 × 1080 | JPG | 378,658 | — |
| Gardens | `public/images/gulmohor/nature/Courtyard Fountain Walkway under Cloudy Skies.png` | 1920 × 1080 | PNG | 2,731,526 | Courtyard Fountain Walkway under Cloudy Skies.png; courtyard-fountain-walkway-under-cloudy-skies.png |
| Gardens | `public/images/gulmohor/nature/Neoclassical Villa Rose Garden Courtyard.png` | 1920 × 1080 | PNG | 2,613,895 | Neoclassical Villa Rose Garden Courtyard.png; nature-blooming-rose-gardens.png |
| Gardens | `public/images/gulmohor/nature/courtyard-fountain-walkway-under-cloudy-skies.png` | 1920 × 1080 | PNG | 2,731,526 | Courtyard Fountain Walkway under Cloudy Skies.png; courtyard-fountain-walkway-under-cloudy-skies.png |
| Gardens | `public/images/gulmohor/nature/nature-blooming-rose-gardens.jpg` | 1920 × 1080 | JPG | 533,620 | hero-rose-garden-mansion-walkway.jpg; nature-blooming-rose-gardens.jpg |
| Gardens | `public/images/gulmohor/nature/nature-blooming-rose-gardens.png` | 1920 × 1080 | PNG | 2,613,895 | Neoclassical Villa Rose Garden Courtyard.png; nature-blooming-rose-gardens.png |
| Gardens | `public/images/gulmohor/nature/nature-entrance-water-fountain.jpg` | 1920 × 1080 | JPG | 532,602 | nature-entrance-water-fountain.jpg; resort-entrance-gate-fountain.jpg |
| Gardens | `public/images/gulmohor/nature/nature-floral-archway-lawn-swing.jpg` | 540 × 960 | JPG | 181,752 | nature-floral-archway-lawn-swing.jpg; garden-archway-swing-lawn.jpg |
| Gardens | `public/images/gulmohor/nature/nature-garden-gazebo-pavilion.jpg` | 1920 × 1080 | JPG | 652,304 | — |
| Gardens | `public/images/gulmohor/nature/nature-mango-trees-shaded-hammock.jpg` | 1920 × 1080 | JPG | 623,637 | nature-mango-trees-shaded-hammock.jpg; garden-hammock-mango-trees.jpg |
| Gardens | `public/images/gulmohor/nature/nature-tree-lined-avenue.jpg` | 1920 × 1080 | JPG | 555,196 | — |
| Swimming pool | `public/images/gulmohor/pool/pool-crystal-turquoise-water.jpg` | 1920 × 1080 | JPG | 520,948 | hero-mansion-pool-rose-foreground.jpg; pool-crystal-turquoise-water.jpg; resort-main-building-daytime.jpg; swimming-pool-wide-view-day.jpg |
| Swimming pool | `public/images/gulmohor/pool/pool-deck-loungers-sun-umbrellas.jpg` | 1920 × 1080 | JPG | 356,583 | — |
| Swimming pool | `public/images/gulmohor/pool/pool-garden-pathway-glimpse.jpg` | 540 × 960 | JPG | 124,967 | pool-garden-pathway-glimpse.jpg; resort-exterior-garden-view.jpg |
| Swimming pool | `public/images/gulmohor/pool/pool-golden-hour-rose-border.jpg` | 540 × 960 | JPG | 78,482 | pool-golden-hour-rose-border.jpg; garden-rose-flowerbed-poolside.jpg |
| Swimming pool | `public/images/gulmohor/pool/pool-mansion-facade-reflection.jpg` | 1920 × 1080 | JPG | 361,323 | hero-resort-mansion-pool-daytime.jpg; pool-mansion-facade-reflection.jpg |
| Accommodation | `public/images/gulmohor/rooms/room-deluxe-queen-bed-lounge.jpg` | 1920 × 1080 | JPG | 77,896 | — |
| Accommodation | `public/images/gulmohor/rooms/room-deluxe-refreshment-minibar.jpg` | 1920 × 1080 | JPG | 73,807 | — |
| Accommodation | `public/images/gulmohor/rooms/room-deluxe-sofa-coffee-station.jpg` | 1920 × 1080 | JPG | 94,480 | — |
| Accommodation | `public/images/gulmohor/rooms/room-suite-ensuite-glass-bathroom.jpg` | 1280 × 720 | JPG | 51,827 | — |
| Accommodation | `public/images/gulmohor/rooms/room-suite-living-lounge.jpg` | 1280 × 720 | JPG | 36,235 | room-suite-living-lounge.jpg; room-suite-living-area.jpg |
| Accommodation | `public/images/gulmohor/rooms/room-suite-master-king-bed.jpg` | 1280 × 720 | JPG | 38,660 | — |


## Generated build image copies

`dist/images/gulmohor/` contains 49 raster files copied from the public source tree when the static build was generated. These are included here to account for all existing website image files, but are not separate source candidates. Byte-identical copies are identified by filename against source rows; the same source asset is deliberately served from `dist/` after building.

| Path | Dimensions | Format | Bytes | Source file (same relative path) |
|---|---:|---|---:|---|
| `dist/images/gulmohor/brand/brand-facebook-cover-banner.jpg` | 2035 × 773 | JPG | 1,247,919 | `public/images/gulmohor/brand/brand-facebook-cover-banner.jpg` — exact duplicate |
| `dist/images/gulmohor/brand/brand-official-logo.jpg` | 1200 × 1200 | JPG | 49,211 | `public/images/gulmohor/brand/brand-official-logo.jpg` — exact duplicate |
| `dist/images/gulmohor/dining/dining-buffet-chafing-service.jpg` | 540 × 960 | JPG | 36,492 | `public/images/gulmohor/dining/dining-buffet-chafing-service.jpg` — exact duplicate |
| `dist/images/gulmohor/dining/dining-indoor-lounge-hall.jpg` | 1920 × 1080 | JPG | 149,172 | `public/images/gulmohor/dining/dining-indoor-lounge-hall.jpg` — exact duplicate |
| `dist/images/gulmohor/dining/dining-restaurant-panoramic-pool-view.jpg` | 1920 × 1080 | JPG | 197,106 | `public/images/gulmohor/dining/dining-restaurant-panoramic-pool-view.jpg` — exact duplicate |
| `dist/images/gulmohor/dining/dining-traditional-iftar-delicacies.jpg` | 1920 × 1080 | JPG | 149,601 | `public/images/gulmohor/dining/dining-traditional-iftar-delicacies.jpg` — exact duplicate |
| `dist/images/gulmohor/events/events-grand-royal-entrance-gate.jpg` | 1920 × 1080 | JPG | 175,047 | `public/images/gulmohor/events/events-grand-royal-entrance-gate.jpg` — exact duplicate |
| `dist/images/gulmohor/events/events-kids-playground-zone.jpg` | 1920 × 1080 | JPG | 657,462 | `public/images/gulmohor/events/events-kids-playground-zone.jpg` — exact duplicate |
| `dist/images/gulmohor/events/events-kids-playhouse-portrait.jpg` | 1080 × 1920 | JPG | 406,950 | `public/images/gulmohor/events/events-kids-playhouse-portrait.jpg` — exact duplicate |
| `dist/images/gulmohor/events/events-love-gulmohor-photo-installation.jpg` | 1920 × 1080 | JPG | 561,558 | `public/images/gulmohor/events/events-love-gulmohor-photo-installation.jpg` — exact duplicate |
| `dist/images/gulmohor/events/events-promenade-night-illumination.jpg` | 1920 × 1080 | JPG | 72,625 | `public/images/gulmohor/events/events-promenade-night-illumination.jpg` — exact duplicate |
| `dist/images/gulmohor/events/events-wedding-poolside-portrait.jpg` | 960 × 540 | JPG | 60,099 | `public/images/gulmohor/events/events-wedding-poolside-portrait.jpg` — exact duplicate |
| `dist/images/gulmohor/google-maps/exterior/google-maps-exterior-entrance-gate-streetview-1024x576.jpg` | 1024 × 576 | JPG | 171,367 | `public/images/gulmohor/google-maps/exterior/google-maps-exterior-entrance-gate-streetview-1024x576.jpg` — exact duplicate |
| `dist/images/gulmohor/google-maps/exterior/google-maps-exterior-highway-approach-east-1024x576.jpg` | 1024 × 576 | JPG | 145,372 | `public/images/gulmohor/google-maps/exterior/google-maps-exterior-highway-approach-east-1024x576.jpg` — exact duplicate |
| `dist/images/gulmohor/google-maps/exterior/google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg` | 1024 × 576 | JPG | 143,044 | `public/images/gulmohor/google-maps/exterior/google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg` — exact duplicate |
| `dist/images/gulmohor/google-maps/other/google-maps-verified-place-card-audit-reference.png` | 1920 × 1080 | PNG | 532,531 | `public/images/gulmohor/google-maps/other/google-maps-verified-place-card-audit-reference.png` — exact duplicate |
| `dist/images/gulmohor/google-maps/pool/google-maps-pool-mansion-facade-3264x2448.jpg` | 3264 × 2448 | JPG | 4,237,981 | `public/images/gulmohor/google-maps/pool/google-maps-pool-mansion-facade-3264x2448.jpg` — exact duplicate |
| `dist/images/gulmohor/hero/Hero image Luxurious Poolside Colonial Mansion.png` | 1672 × 941 | PNG | 2,661,775 | `public/images/gulmohor/hero/Hero image Luxurious Poolside Colonial Mansion.png` — exact duplicate |
| `dist/images/gulmohor/hero/Luxurious Poolside Colonial Mansion.png` | 1672 × 941 | PNG | 2,661,775 | `public/images/gulmohor/hero/Luxurious Poolside Colonial Mansion.png` — exact duplicate |
| `dist/images/gulmohor/hero/Luxurious Poolside Colonial Mansion.webp` | 1672 × 941 | WEBP | 496,160 | `public/images/gulmohor/hero/Luxurious Poolside Colonial Mansion.webp` — exact duplicate |
| `dist/images/gulmohor/hero/Luxurious-Poolside-Colonial-Mansion-original-upload.png` | 1024 × 576 | PNG | 940,553 | `public/images/gulmohor/hero/Luxurious-Poolside-Colonial-Mansion-original-upload.png` — exact duplicate |
| `dist/images/gulmohor/hero/final hero section image .png` | 2035 × 773 | PNG | 2,832,933 | `public/images/gulmohor/hero/final hero section image .png` — source differs / no direct match |
| `dist/images/gulmohor/hero/hero-balcony-panoramic-pool-estate.jpg` | 1920 × 1080 | JPG | 364,130 | `public/images/gulmohor/hero/hero-balcony-panoramic-pool-estate.jpg` — exact duplicate |
| `dist/images/gulmohor/hero/hero-luxurious-poolside-colonial-mansion.png` | 2048 × 1152 | PNG | 2,814,837 | `public/images/gulmohor/hero/hero-luxurious-poolside-colonial-mansion.png` — exact duplicate |
| `dist/images/gulmohor/hero/hero-mansion-pool-rose-foreground.jpg` | 1920 × 1080 | JPG | 520,948 | `public/images/gulmohor/hero/hero-mansion-pool-rose-foreground.jpg` — exact duplicate |
| `dist/images/gulmohor/hero/hero-resort-mansion-pool-daytime.jpg` | 1920 × 1080 | JPG | 361,323 | `public/images/gulmohor/hero/hero-resort-mansion-pool-daytime.jpg` — exact duplicate |
| `dist/images/gulmohor/hero/hero-rose-garden-mansion-walkway.jpg` | 1920 × 1080 | JPG | 533,620 | `public/images/gulmohor/hero/hero-rose-garden-mansion-walkway.jpg` — exact duplicate |
| `dist/images/gulmohor/hero/hero-swimming-pool-patio-loungers.jpg` | 1920 × 1080 | JPG | 378,658 | `public/images/gulmohor/hero/hero-swimming-pool-patio-loungers.jpg` — exact duplicate |
| `dist/images/gulmohor/nature/Courtyard Fountain Walkway under Cloudy Skies.png` | 1920 × 1080 | PNG | 2,731,526 | `public/images/gulmohor/nature/Courtyard Fountain Walkway under Cloudy Skies.png` — exact duplicate |
| `dist/images/gulmohor/nature/Neoclassical Villa Rose Garden Courtyard.png` | 1920 × 1080 | PNG | 2,613,895 | `public/images/gulmohor/nature/Neoclassical Villa Rose Garden Courtyard.png` — exact duplicate |
| `dist/images/gulmohor/nature/courtyard-fountain-walkway-under-cloudy-skies.png` | 1920 × 1080 | PNG | 2,731,526 | `public/images/gulmohor/nature/courtyard-fountain-walkway-under-cloudy-skies.png` — exact duplicate |
| `dist/images/gulmohor/nature/nature-blooming-rose-gardens.jpg` | 1920 × 1080 | JPG | 533,620 | `public/images/gulmohor/nature/nature-blooming-rose-gardens.jpg` — exact duplicate |
| `dist/images/gulmohor/nature/nature-blooming-rose-gardens.png` | 1920 × 1080 | PNG | 2,613,895 | `public/images/gulmohor/nature/nature-blooming-rose-gardens.png` — exact duplicate |
| `dist/images/gulmohor/nature/nature-entrance-water-fountain.jpg` | 1920 × 1080 | JPG | 532,602 | `public/images/gulmohor/nature/nature-entrance-water-fountain.jpg` — exact duplicate |
| `dist/images/gulmohor/nature/nature-floral-archway-lawn-swing.jpg` | 540 × 960 | JPG | 181,752 | `public/images/gulmohor/nature/nature-floral-archway-lawn-swing.jpg` — exact duplicate |
| `dist/images/gulmohor/nature/nature-garden-gazebo-pavilion.jpg` | 1920 × 1080 | JPG | 652,304 | `public/images/gulmohor/nature/nature-garden-gazebo-pavilion.jpg` — exact duplicate |
| `dist/images/gulmohor/nature/nature-mango-trees-shaded-hammock.jpg` | 1920 × 1080 | JPG | 623,637 | `public/images/gulmohor/nature/nature-mango-trees-shaded-hammock.jpg` — exact duplicate |
| `dist/images/gulmohor/nature/nature-tree-lined-avenue.jpg` | 1920 × 1080 | JPG | 555,196 | `public/images/gulmohor/nature/nature-tree-lined-avenue.jpg` — exact duplicate |
| `dist/images/gulmohor/pool/pool-crystal-turquoise-water.jpg` | 1920 × 1080 | JPG | 520,948 | `public/images/gulmohor/pool/pool-crystal-turquoise-water.jpg` — exact duplicate |
| `dist/images/gulmohor/pool/pool-deck-loungers-sun-umbrellas.jpg` | 1920 × 1080 | JPG | 356,583 | `public/images/gulmohor/pool/pool-deck-loungers-sun-umbrellas.jpg` — exact duplicate |
| `dist/images/gulmohor/pool/pool-garden-pathway-glimpse.jpg` | 540 × 960 | JPG | 124,967 | `public/images/gulmohor/pool/pool-garden-pathway-glimpse.jpg` — exact duplicate |
| `dist/images/gulmohor/pool/pool-golden-hour-rose-border.jpg` | 540 × 960 | JPG | 78,482 | `public/images/gulmohor/pool/pool-golden-hour-rose-border.jpg` — exact duplicate |
| `dist/images/gulmohor/pool/pool-mansion-facade-reflection.jpg` | 1920 × 1080 | JPG | 361,323 | `public/images/gulmohor/pool/pool-mansion-facade-reflection.jpg` — exact duplicate |
| `dist/images/gulmohor/rooms/room-deluxe-queen-bed-lounge.jpg` | 1920 × 1080 | JPG | 77,896 | `public/images/gulmohor/rooms/room-deluxe-queen-bed-lounge.jpg` — exact duplicate |
| `dist/images/gulmohor/rooms/room-deluxe-refreshment-minibar.jpg` | 1920 × 1080 | JPG | 73,807 | `public/images/gulmohor/rooms/room-deluxe-refreshment-minibar.jpg` — exact duplicate |
| `dist/images/gulmohor/rooms/room-deluxe-sofa-coffee-station.jpg` | 1920 × 1080 | JPG | 94,480 | `public/images/gulmohor/rooms/room-deluxe-sofa-coffee-station.jpg` — exact duplicate |
| `dist/images/gulmohor/rooms/room-suite-ensuite-glass-bathroom.jpg` | 1280 × 720 | JPG | 51,827 | `public/images/gulmohor/rooms/room-suite-ensuite-glass-bathroom.jpg` — exact duplicate |
| `dist/images/gulmohor/rooms/room-suite-living-lounge.jpg` | 1280 × 720 | JPG | 36,235 | `public/images/gulmohor/rooms/room-suite-living-lounge.jpg` — exact duplicate |
| `dist/images/gulmohor/rooms/room-suite-master-king-bed.jpg` | 1280 × 720 | JPG | 38,660 | `public/images/gulmohor/rooms/room-suite-master-king-bed.jpg` — exact duplicate |

## Duplicate and derivative findings

- 38 exact-byte duplicate groups were detected across the 223-file scope; see duplicate column for each path. Many copies use semantic folder aliases (hero/pool/gallery/resort), and duplicate groups span the runtime media, research archive and reference bundle.
- Near-duplicates are not counted as exact duplicates. The hero has PNG/JPG/WEBP alternates, several source assets have differently compressed exports, and differently named reference aliases create repeated semantic entries.
- `public/images/gulmohor/hero/` contains 2.66–2.81 MB PNG masters alongside a 496 KB WEBP alternative and smaller JPG candidates. Prefer responsive AVIF/WebP derivatives and `srcset` during implementation, retaining originals untouched.
- `public/assets/reference-gulmohor/videos/` holds four MP4s (2.17–5.07 MB each); `VideoShowcase.tsx` currently embeds external YouTube videos instead. The reference audit states the MP4s are extracted reference media; do not swap into production absent rights clearance.
- Existing `asset-manifest.csv/json`, contact sheets, and `docs/reference-asset-inventory.md` are useful metadata sources, but their “verified” wording does not itself establish commercial rights. No assets were edited or removed in this audit.
