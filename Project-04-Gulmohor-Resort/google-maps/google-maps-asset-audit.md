# Google Maps Visual Asset Audit & Digital Listing Report
**Property:** Gulmohor Resort & Restaurant  
**Location:** Sreenagar-Dohar Highway, Damla, Sreenagar Upazila, Munshiganj District, Bangladesh  
**Google Place ID:** `ChIJ5_RZHwCZVTcRBd1dTJuV5SA`  
**Internal Feature ID:** `0x375599001f59f4e7:0x20e5959b4c5ddd05`  
**Plus Code:** `G796+CF6 7MMGG796+CC Munshiganj, 1550` / `G796+CC Sreenagar`  
**Coordinates:** 23.5185625° N, 90.2610625° E  
**Audit Date:** November 2026  
**Auditor:** Digital Asset Curator & Senior Hospitality Researcher  

---

## 1. Executive Summary & Listing Audit

A forensic inspection of Google Maps and the associated Google Business Profile for Gulmohor Resort reveals critical insights into the resort's search discoverability, user-generated content, and visual assets:

1. **Unclaimed & Unmanaged Business Profile:**  
   The Google Maps listing for Gulmohor Resort is currently **unclaimed** (indicated by active prompts for *"Suggest an edit"*, *"Add website"*, and *"+ Add photos & videos"*). The business owners have never verified or taken administrative control of their Google Knowledge Graph entry.
2. **Official Digital Asset Deficit on Google Maps:**  
   There are **zero official uploads** by the resort management. No official interior room photos, dining menus, wedding lawn staging, or drone aerial views have been contributed to Google Maps by the business.
3. **Primary Discovered Visual Asset:**  
   The primary visual identity photo representing the listing is a single customer upload by **Rajib Dey Sarker** from September 2026. This photo was retrieved at its native camera sensor resolution of **3264 × 2448 pixels (8.0 Megapixels, 4.2 MB)** and depicts the white neoclassical mansion facade reflected across the 70×35 ft swimming pool.
4. **Street View Documentation:**  
   Google Street View maintains road-level 360-degree imagery (Pano ID `QUtddPpLIJr3A-QM9-KeSQ`) along the Sreenagar-Dohar Highway directly outside the resort gates, verifying the black-and-gold ornate entrance gate, the adjacent *"MIMI'S EMPIRE"* perimeter signboard, and the prominent landmark directly opposite: **Bikrampur Bhuiyan Medical College / Clinic**.

---

## 2. Directory Architecture & Categorization

All collected assets are organized under `public/images/gulmohor/google-maps/` according to the required schema:

```text
public/images/gulmohor/google-maps/
├── exterior/
│   ├── google-maps-exterior-entrance-gate-streetview-1024x576.jpg
│   ├── google-maps-exterior-highway-approach-east-1024x576.jpg
│   └── google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg
├── pool/
│   └── google-maps-pool-mansion-facade-3264x2448.jpg
├── rooms/
│   └── [EMPTY: 0 room photos exist on Google Maps]
├── dining/
│   └── [EMPTY: 0 food/restaurant photos exist on Google Maps]
├── nature/
│   └── [EMPTY: 0 garden/orchard photos exist on Google Maps]
├── events/
│   └── [EMPTY: 0 event/party photos exist on Google Maps]
└── other/
    └── google-maps-verified-place-card-audit-reference.png
```

### Explanatory Note on Empty Categories (`rooms/`, `dining/`, `nature/`, `events/`)
Because the resort owners have not uploaded business photography to Google Maps, and public reviews contain no unlocked room or banquet galleries, those specific functional areas have **zero legitimate assets on Google Maps**. Those categories are thoroughly fulfilled in our companion master library (`public/images/gulmohor/{rooms,dining,nature,events}/`) sourced from verified high-definition walkthrough videos and official Facebook broadcasts.

---

## 3. Comprehensive Asset Audit Register

| ID | Filename | Subfolder | Dimensions | Size | Uploader & Attribution | Depiction | Review Status | Legal Status | Recommended Placement |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- | :--- | :--- | :--- |
| **GM001** | `google-maps-pool-mansion-facade-3264x2448.jpg` | `pool/` | 3264 × 2448 | 4.2 MB | Customer: **Rajib Dey Sarker** (Sep 2026) | Wide neoclassical mansion facade, Romanesque columns, balconies, and complete shimmering swimming pool under daylight. | **Ready for demo** | UGC / Copyright belongs to Rajib Dey Sarker. Clearance required for production. | Hero Slider, Pool & Facilities page banner. |
| **GM002** | `google-maps-exterior-entrance-gate-streetview-1024x576.jpg` | `exterior/` | 1024 × 576 | 171 KB | **Google Street View** (`QUtddPpLIJr3A-QM9-KeSQ`, Yaw: 329.6°) | Black & gold ornate wrought-iron entrance gate, boundary wall, and brick-paved approach driveway. | **Needs permission** | Google Street View API imagery. Internal reference / direction card only. | Directions & Arrival Guide / Location section. |
| **GM003** | `google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg` | `exterior/` | 1024 × 576 | 143 KB | **Google Street View** (`QUtddPpLIJr3A-QM9-KeSQ`, Yaw: 240°) | Sreenagar-Dohar Highway facing west, highlighting the **Bikrampur Bhuiyan Medical College** building directly opposite. | **Low quality / Reference** | Google Street View API imagery. | Location Guide (Landmark recognition for drivers). |
| **GM004** | `google-maps-exterior-highway-approach-east-1024x576.jpg` | `exterior/` | 1024 × 576 | 145 KB | **Google Street View** (`QUtddPpLIJr3A-QM9-KeSQ`, Yaw: 60°) | Sreenagar-Dohar Highway facing east toward Sreenagar town, showing roadside utility poles and approach route. | **Low quality / Reference** | Google Street View API imagery. | Route & Transit section (Driver arrival illustration). |
| **GM005** | `google-maps-verified-place-card-audit-reference.png` | `other/` | 1920 × 1080 | 532 KB | **Research Audit Team** (Nov 2026) | Full desktop screenshot confirming Google Maps place card, 3.8-star rating, 29 reviews, phone, and road network. | **Low quality / Reference** | Internal Research Artifact (Not for website UI). | Stakeholder Presentation / Research Dossier. |

---

## 4. Review Status Classification

### Group A: Ready for Demo (1 Asset)
- **`google-maps-pool-mansion-facade-3264x2448.jpg`**:
  - **Usability:** 100% genuine, uncompressed 8-megapixel photograph.
  - **Quality Score:** 9.8 / 10.
  - **Condition:** Approved for **internal website demo and prototype design only**. Demonstrates the physical beauty of the estate with high resolution.
  - **Limitation:** Cannot be claimed as official resort-owned IP without contributor consent.

### Group B: Needs Permission Before Commercial Use (1 Asset)
- **`google-maps-exterior-entrance-gate-streetview-1024x576.jpg`**:
  - **Usability:** Accurately illustrates the physical entrance gate on the highway.
  - **Quality Score:** 7.5 / 10.
  - **Condition:** Suitable for prototype layout showing guests how to spot the entrance gate. Commercial website use requires licensing Google Maps Platform or commissioning custom photographer shots of the gate.

### Group C: Low Quality / Visual Reference Only (3 Assets)
- **`google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg`**
- **`google-maps-exterior-highway-approach-east-1024x576.jpg`**
- **`google-maps-verified-place-card-audit-reference.png`**
  - **Usability:** Retained strictly in research dossiers to verify transit directions and local landmarks.
  - **Condition:** Not recommended for primary resort marketing UI due to pedestrian/streetscape aesthetic; should remain as internal references.

---

## 5. Strategic Recommendations for Gulmohor Resort

1. **Claim the Google Business Profile Immediately:**  
   The resort management should trigger the Google Business verification postcard or phone verification process to claim ownership of Place ID `ChIJ5_RZHwCZVTcRBd1dTJuV5SA`.
2. **Populate Missing Photographic Categories:**  
   Once verified, management should upload curated, high-resolution photo sets into the official Google Business portal covering:
   - **Rooms:** Couple Deluxe Room #2, Double Deluxe, and Premium Suite interiors.
   - **Dining:** Buffet spreads, indoor restaurant hall, and outdoor live BBQ station.
   - **Nature:** Blooming rose walkways, fountain roundabout, and orchard hammocks.
   - **Events:** Marquee wedding stages, children's playground, and night pool illumination.
3. **Embed the Official Website Link:**  
   Linking the forthcoming website demo URL will eliminate the *"Add website"* prompt and capture high-intent reservation traffic directly from Google Maps searches.
