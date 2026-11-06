# Gulmohor Resort — Content Verification Matrix

**Audit date:** 6 November 2026  
**Comparison set:** Current source/data against `Project-04-Gulmohor-Resort/research/00–15`, `verified-business-data.json`, requirements/content inventory, and asset manifests. “Verified” below means supported by those available research documents; it is not a new management confirmation.

## Status definitions

- **Verified:** Supported by the available research record and sufficiently aligned with current site copy.
- **Needs confirmation:** Evidence exists but it is reported/corroborated, time-sensitive, conditional, ambiguous, or explicitly open for management.
- **Outdated:** Research indicates the claim/figure is time-bound or historical and should not be presented as current without refresh.
- **Unsupported:** Current site makes a claim for which the available research does not provide adequate support, or materially extends the source.
- **Missing:** Important content/policy needed for a complete guest decision is absent or not yet published/confirmed.

## Business identity, location and contact

| Item | Current source/content | Research comparison | Status | Action before production |
|---|---|---|---|---|
| Official name | “Gulmohor Resort & Restaurant” | Research 00/12 and verified JSON agree. | Verified | Use consistently; confirm preferred Latin/Bengali spelling with management. |
| Brand phrase/tagline | “The Perfect Place for Your Perfect Day”; “You Find Peace”; “Find A Home Close To Home” occur in local content/reports. | Research 00 attributes these to official cover graphics. | Verified | Verify current brand guidance and exact capitalization/punctuation. |
| Address | Sreenagar-Dohar Highway, Damla, Sreenagar Upazila, Munshiganj. | Research 00/12 and verified JSON support; postal code has conflicting 1550/1535 values. | Verified (address); Needs confirmation (postal code) | Keep postal code off public UI until resolved. |
| Landmark | Opposite Bhuiyan Medical College/Clinic; in front of Damla School. | Research 00/12. Research spellings vary (“Bhuiyan/Bhuiyan” and “Bhuiya”). | Verified | Confirm official English and Bengali landmark spelling. |
| Map coordinates / plus code | `23.5185625, 90.2610625`; `G796+CCX`. | Research 00/03 and verified data agree. | Verified | Confirm marker pin on live maps during implementation. |
| Primary phone / WhatsApp | `+8801911498819`, display `01911-498819`. | Research 00/12 agrees. | Verified | Test callable number and WhatsApp destination before release. |
| Secondary event phone | `01711526654`. | Research 12 says corroborated from event listing. | Needs confirmation | Confirm role/availability and whether it should be displayed. |
| Official email/domain | No email or official domain in current data. | Research 12/15 says not publicly disclosed / no official site/domain found at research time. | Missing | Obtain managed email and domain decision; research status may now be stale. |
| Travel time / transport / fare | Phase report says 30–40 minutes; visitor guide says Seba Paribahan from Postogola, current service should be checked. | Research JSON reports travel time and bus fare based on investigation; routes/fare are time-sensitive. | Needs confirmation | Omit exact travel time/fare until refreshed; link map and phrase transit as unverified guidance. |

## Rooms, tariffs and booking

| Item | Current source/content | Research comparison | Status | Action before production |
|---|---|---|---|---|
| Room categories | Couple Deluxe, Double Deluxe, Premium Suite. | Research 08/10 and verified JSON align. | Verified | Confirm official category names and exact availability. |
| Room rates | BDT 7,000 / 9,000 / 12,000 per night in `resortData.ts`. | Research 10 labels tiers corroborated/reported from 2026 sources; Q03 explicitly asks whether rates vary. | Needs confirmation | Keep clearly “indicative / confirm current rate” or suppress until management signs off. |
| Room count/inventory | No count shown. | Research 15 Q02: exact counts unverified. | Missing | Do not imply availability or total inventory. |
| Couple Deluxe amenities | Data claims Queen bed, AC, attached washroom, TV, kettle, mini-fridge, sofa/desk, balcony, breakfast and pool access. | Research 08/verified JSON supports many, but granular amenities are from reported walk-through; breakfast conditions and amenity inventory require current operational confirmation. | Needs confirmation | Confirm each amenity against a current room checklist. |
| Double Deluxe amenities/photo | Two double beds, capacity four; data intentionally marks interior photo missing and shows balcony. | Research 08 supports reported bed/capacity; Q08 asks for original room imagery. | Needs confirmation | Keep photo gap disclosed; verify beds/capacity and obtain approved room images. |
| Premium Suite configuration | Separate lounge and bedroom; king bed; suite features listed. | Research 08/verified JSON support reported layout and amenities. | Needs confirmation | Confirm exact amenities and current condition before advertising. |
| Breakfast | Data lists included breakfast with menu items, room-specific guest counts and service details. | Research 08/09 reports breakfast included; menu/service details are research-derived. Research 00 and verified data support menus. | Needs confirmation | Verify whether all room types/rates include it, current menu, serving hours and substitutions. |
| Check-in/check-out | Visitor guide says unverified. Other current UI/data may mention assumed 12:00/11:00. | Research 08 calls times typical assumption; Q01 says exact time unverified. | Unsupported if stated as firm; Needs confirmation otherwise | Remove firm times; obtain written policy. |
| Booking channel | Phone/WhatsApp to primary number. | Research 11/12 and verified data agree. | Verified | Maintain as inquiry only; explain that it is not a confirmed booking. |
| Availability | BookingSearch collects dates then says resort confirms availability. | Research 11 says manual ledger/phone process and no live calendar. | Verified | Preserve explicit availability caveat. |
| Deposit and payment | Visitor guide says advance payment may be required; current research narrative reports deposit. | Research 11/15 says advance payment; exact share/method varies and is not written policy. | Needs confirmation | Avoid fixed percentage or payment instructions without signed terms. |
| Cancellation/refund/date change | Site visitor guide says cancellation terms are not publicly stated. | Research 11/15 says no public policy; 15 flags prior 48-hour assumption as unverified. | Missing | Do not publish any cancellation rule until approved. |

## Packages, amenities and policies

| Item | Current source/content | Research comparison | Status | Action before production |
|---|---|---|---|---|
| Day package with meals | BDT 6,500 for two; room, meal/snack and pool inclusions. | Research 10 marks corroborated; 15 notes current rates may change. | Needs confirmation | Confirm current price, timing, inclusions, availability and whether pool access is included. |
| Day room only | BDT 5,000 for two. | Research 10 says reported; not as strong as corroborated. | Needs confirmation | Treat as provisional; ask management to sign off. |
| Pool hourly pass | BDT 400/person/hour. | Research 07/10 says corroborated, but public price is time-sensitive. | Needs confirmation | Confirm current rate, session length, hours and access rules. |
| General entry | BDT 100/person in research data, but not consistently surfaced in current UI. | Research 00/10 labels corroborated. | Needs confirmation | Decide whether current, what it includes, child rate and booking requirement. |
| Pool dimensions | 70 × 35 ft. | Research 00/07/verified JSON agree. | Verified | Use as approximate quoted specification if management reconfirms. |
| Pool safety/operating rules | Visitor guide advises to confirm hours, dress rules and child-supervision guidance. | Research 15 lists policies as a known public-information gap. | Missing | Obtain pool depth, hours, swimwear, child, lifeguard and weather rules. |
| Pool features | Night lights, railing/steps, loungers and rose beds appear in source. | Research 07 supports these visual/physical features; some report details (depth, filtration) need stronger evidence. | Verified (basic features); Unsupported (specific depth/filtration claims) | Publish only confirmed features; exclude unsupported technical specifications. |
| Dining venues | Indoor dining, lawn/poolside seating, live outdoor BBQ kitchen. | Research 09/verified data supports these venues. | Verified | Confirm visitor access, hours and whether BBQ operates routinely or by event. |
| Menu and dishes | Breakfast/day-package menus and Ramadan meal are listed in research; dining UI promotes menu/catering inquiry. | Research 09 compiles source-reported items; à la carte menu/prices unavailable. Ramadan item is seasonal. | Needs confirmation | Label sample menus correctly, omit unpriced dish claims, refresh seasonal offers. |
| Walk-in dining / outside food | Visitor guide asks guests to check current menu, walk-in and outside-food arrangements. | Research 15 Q05 and 11 say policies unverified. | Missing | Obtain written walk-in, outside-food, dietary and catering policies. |
| Events | Indoor hall, lawn/marquee, weddings, reunions and corporate events. | Research 07/09/10/verified JSON support venue types and past examples; capacity claims vary (50–200+, 100+). | Needs confirmation | Do not publish capacity numbers or event package prices until operationally confirmed. |
| Wi-Fi | Not asserted as guaranteed in visitor guide. | Research 07 and Q04: unverified. | Missing | Confirm coverage/speed; otherwise omit. |
| Parking/security/kids | Research says dedicated parking, gated security, children’s play area. | Research 07/verified JSON support existence; capacity and operating/supervision details not established. | Needs confirmation | Verify current access, parking capacity and playground safety. |

## Reviews, language and provenance

| Item | Current source/content | Research comparison | Status | Action before production |
|---|---|---|---|---|
| Guest feedback themes | `GuestReviews.tsx` presents recurring public themes and states it invents no names, ratings or direct quotes. | Research 13 is a review analysis, but individual evidence and current rating not asserted by this summary. | Needs confirmation | Keep aggregate wording and cite/review source scope; do not add fake named testimonials or star ratings. |
| Bengali/English parity | Inline bilingual strings exist across components and data. | This is implementation state rather than business fact. | Needs confirmation | Bengali editorial review and full parity QA are still required. |
| Media rights | Curated local assets/manifests describe some images as verified; reference-media inventory explicitly marks extracted media as “Reference Only.” | Rights authorization cannot be established from repository metadata alone. | Needs confirmation | Obtain explicit commercial website usage permission and attribution requirements for each source bundle. |
| Ownership/entity | “Mir Enterprise” occurs in research but is labeled unverified/reported. | Research 12 Q07. | Unsupported for public use | Do not display entity name until official documentation is provided. |
| Existing official website status | Research says no official website as of its research period; the local project includes a demonstration/reference site. | Research 00/12 dates this finding to Nov 2026. | Outdated / needs refresh | Confirm current domain ownership/status before launch. |

## Principal conflicts requiring explicit resolution

1. Research is not uniformly calibrated: some files call rates/packages “verified,” while the detailed tariff table and open questions label several as reported/corroborated and ask about seasonal changes. Keep price status provisional until a management-approved rate card is received.
2. A Phase 03 design report asserts unsupported specifics such as “100% private 2-acre estate,” “century-old” trees, “quartzite” pool, exact pool depth/filtration, separate changing suites, and 15–20-car parking. These are not supported by the cited open-question/current research and should be excluded unless verified.
3. Research says a BDT 500 Ramadan package is seasonal; it is not a permanent product. Confirm year, dates and current menu before any campaign display.
4. Capacity statements differ (100+ dining/event guests versus 50–200+ event quote range). Do not reconcile these as one capacity figure.
5. Postal code is recorded as both 1550 (branding) and 1535 (postal area); suppress until officially resolved.

## Required management confirmation packet

Before production content lock, request: current approved room rate card and room counts; signed room amenity/breakfast checklist; day/pool/entry tariffs and inclusions; check-in/out; payment/deposit, cancellation/refund and date-change terms; pool safety/rules; dining and outside-food policy; event capacity/pricing/lead time; current phone/WhatsApp/email; authorized bilingual brand copy; media rights/releases; and confirmed domain/legal business identity.
