# Bengali copy refinement report

## Scope

Reviewed the Bengali content used by the current React application: the home page, Stay and Events routes, shared navigation and footer, photo gallery, booking inquiry, FAQ content, image descriptions, and Bengali page metadata. These are wired through `src/App.tsx`, `src/pages/SitePages.tsx`, and the shared components under `src/components/`.

The edits retain the existing route structure, layout, interactions, English copy, and resort facts. Where current room availability, prices, restaurant access, pool rules, or event arrangements are not verified, the copy directs visitors to confirm with the resort instead of presenting assumptions as facts.

## Important before and after changes

| Area | Before | After |
| --- | --- | --- |
| Home hero | “একটু ধীরে চলার জায়গা।” | “ছুটির দিনটা হোক পুলপাড়ে” |
| Home introduction | “একসঙ্গে ভালো সময় কাটানোর ঠিকানা।” | “পুলে সাঁতার, বাগানে অবসর” |
| Home stay section | Generic room-selection wording | “রুম বেছে নিন, ছুটিটা বাড়িয়ে নিন” |
| Home pool section | Generalized leisure promise | “সাঁতারের পর পুলপাড়ে বসুন” |
| Home garden section | Vague escape language | “ছায়ায় বসুন, হ্যামকে একটু আরাম করুন” |
| Home dining section | Generic hospitality wording | “পুলের পাশে বসে খাওয়াদাওয়া” |
| Home day-out section | Generic destination framing | “কয়েক ঘণ্টার ছুটি, কিংবা পুরো দিন” |
| Home events section | Generic gathering slogan | “হল না লন—কেমন হবে আপনাদের আয়োজন?” |
| Gallery | General invitation without section detail | “রুম, পুল আর বাগান—ছবিতে ঘুরে দেখুন” |
| Booking inquiry | Awkward phrasing such as “কী জন্য আসতে চান?” | Clearer prompts such as “কী পরিকল্পনা করছেন?” and “কোন বিষয়ে জানতে চান?” |
| Rates and availability | Mixed or unclear availability wording | Direct wording that asks visitors to confirm current prices and whether rooms are available |

## Copy decisions

- Replaced slogan-like expressions with language tied to the actual pool, gardens, rooms, dining, day visits, and event spaces.
- Simplified form labels, validation messages, FAQ questions, and calls to action so visitors can understand what the site can and cannot confirm.
- Kept familiar hospitality terms such as “ডে প্যাকেজ”, “ডাইনিং”, “Check-in”, and room category names where they are clearer in Bangladeshi usage.
- Removed unnecessary full stops from short headline phrases and kept complete explanatory sentences punctuated normally.
- Preserved caveats around unverified prices, inventory, policies, and event capacity.

## Coverage note

The current application routes are English and Bengali home, Stay, and Events pages; the home route contains the gallery. The Bengali strings in these mounted screens and shared components were reviewed. Older component files that are not imported by the current `App.tsx` are not active website content and were not changed as part of this pass.

## Files updated

- `src/App.tsx`
- `src/pages/SitePages.tsx`
- `src/components/SiteChrome.tsx`
- `src/components/BookingInquiry.tsx`
- `src/components/PhotoGalleryExperience.tsx`

