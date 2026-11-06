import { RoomItem, PackageItem, GalleryItem, FaqItem } from '../types';

export const RESORT_CONTACT = {
  primaryPhone: '+8801911498819',
  primaryPhoneDisplay: '01911-498819',
  secondaryPhone: '01711526654',
  secondaryPhoneDisplay: '01711-526654',
  whatsappUrl: 'https://wa.me/8801911498819',
  address: {
    en: 'Sreenagar-Dohar Highway, Damla, Sreenagar Upazila, Munshiganj, Bangladesh',
    bn: 'শ্রীনগর-দোহার হাইওয়ে, দামলা, শ্রীনগর উপজেলা, মুন্সিগঞ্জ, বাংলাদেশ',
  },
  landmark: {
    en: 'Opposite Bikrampur Bhuiyan Medical College / Clinic, in front of Damla School',
    bn: 'বিক্রমপুর ভুইয়া মেডিকেল কলেজ ও ক্লিনিকের বিপরীতে, দামলা স্কুলের সামনে',
  },
  coordinates: {
    lat: 23.5185625,
    lng: 90.2610625,
    plusCode: 'G796+CCX, Damla, Sreenagar, Munshiganj',
  },
  facebookUrl: 'https://www.facebook.com/profile.php?id=100063883132593',
  googleMapsUrl: 'https://maps.app.goo.gl/8vp6UJWPzTyg55AM6',
};

export const ROOMS: RoomItem[] = [
  {
    id: 'couple-deluxe',
    name: {
      en: 'Couple Deluxe Room',
      bn: 'কাপল ডিলাক্স রুম',
    },
    category: 'Deluxe',
    categoryName: {
      en: 'Deluxe',
      bn: 'ডিলাক্স',
    },
    tagline: {
      en: 'Comfortable air-conditioned retreat overlooking the swimming pool',
      bn: 'সুইমিং পুলের ভিউসহ আরামদায়ক ও পরিচ্ছন্ন কাপল রুম',
    },
    rateBDT: 7000,
    ratePeriod: {
      en: 'per night (Subject to confirmation)',
      bn: 'প্রতি রাত (যাচাই সাপেক্ষে)',
    },
    capacity: {
      en: '2 Adults',
      bn: '২ জন প্রাপ্তবয়স্ক',
    },
    bedConfig: {
      en: '1 Queen-Size Bed',
      bn: '১টি কুইন সাইজ বেড',
    },
    image: '/images/gulmohor/rooms/room-deluxe-queen-bed-lounge.jpg',
    galleryImages: [
      '/images/gulmohor/rooms/room-deluxe-queen-bed-lounge.jpg',
      '/images/gulmohor/rooms/room-deluxe-sofa-coffee-station.jpg',
      '/images/gulmohor/rooms/room-deluxe-refreshment-minibar.jpg',
      '/images/gulmohor/hero/hero-balcony-panoramic-pool-estate.jpg',
    ],
    breakfastIncluded: true,
    breakfastDetails: {
      en: 'Complimentary breakfast for 2: Hot Parathas, Daal, Egg, Mixed Vegetables, and Tea',
      bn: '২ জনের জন্য কমপ্লিমেন্টারি নাস্তা: গরম পরোটা, ডাল, ডিম, সবজি ভাজি ও চা',
    },
    description: {
      en: 'Designed for couples seeking quiet relaxation, Room #2 features clean finishes, an attached modern washroom with a separate shower cubicle, split air conditioning, a comfortable sofa with coffee station, mini-fridge, and a private second-floor balcony overlooking the swimming pool.',
      bn: 'কাপলদের একান্ত বিশ্রামের জন্য এই কাপল ডিলাক্স রুমে রয়েছে আধুনিক স্প্লিট এসি, আলাদা শাওয়ার কিউবিকলসহ বাথরুম, সোফা সিটিং, কফি কর্নার, মিনি ফ্রিজ এবং দ্বিতীয় তলার ব্যালকনি যেখান থেকে সরাসরি সুইমিং পুল দেখা যায়।',
    },
    amenities: [
      { en: 'Split Air Conditioner', bn: 'স্প্লিট এসি' },
      { en: 'Attached Modern Bath with Separate Shower', bn: 'আলাদা শাওয়ারসহ আধুনিক বাথরুম' },
      { en: 'Mini Refrigerator & Electric Kettle', bn: 'মিনি রেফ্রিজারেটর ও কেটলি' },
      { en: 'Flat-Screen LED TV', bn: 'দেয়ালে লাগানো এলইডি টিভি' },
      { en: 'Sofa & Coffee Table', bn: 'সোফা ও কফি টেবিল' },
      { en: 'Wardrobe with Hangers', bn: 'কাপড়ের আলমারি' },
      { en: 'Pool-Facing Balcony Access', bn: 'পুলমুখী ব্যালকনি' },
      { en: 'Complimentary Pool Access', bn: 'সুইমিং পুল ব্যবহার সুবিধা' },
    ],
    highlights: [
      { en: 'Poolside balcony view', bn: 'পুলভিউ ব্যালকনি' },
      { en: 'Clean separated shower', bn: 'আলাদা শাওয়ার জোন' },
      { en: 'Full in-room amenities', bn: 'প্রয়োজনীয় ফার্নিচার ও এসি' },
    ],
  },
  {
    id: 'double-deluxe',
    name: {
      en: 'Double Deluxe Family Room',
      bn: 'ডাবল ডিলাক্স ফ্যামিলি রুম',
    },
    category: 'Family Deluxe',
    categoryName: {
      en: 'Family Deluxe',
      bn: 'ফ্যামিলি ডিলাক্স',
    },
    tagline: {
      en: 'Spacious 4-person family accommodation with pool balcony',
      bn: 'পরিবারের জন্য ২টি ডাবল বেড ও পুলভিউ ব্যালকনিযুক্ত রুম',
    },
    rateBDT: 9000,
    ratePeriod: {
      en: 'per night (Subject to confirmation)',
      bn: 'প্রতি রাত (যাচাই সাপেক্ষে)',
    },
    capacity: {
      en: '4 Adults',
      bn: '৪ জন প্রাপ্তবয়স্ক',
    },
    bedConfig: {
      en: '2 Double Beds',
      bn: '২টি ডাবল বেড',
    },
    image: '/images/gulmohor/hero/hero-balcony-panoramic-pool-estate.jpg',
    galleryImages: [
      '/images/gulmohor/hero/hero-balcony-panoramic-pool-estate.jpg',
      '/images/gulmohor/hero/hero-resort-mansion-pool-daytime.jpg',
      '/images/gulmohor/nature/nature-blooming-rose-gardens.jpg',
    ],
    isMissingInteriorPhoto: true,
    missingPhotoNote: {
      en: 'Family configuration — Interior gallery updating upon seasonal room turnover. Balcony view shown.',
      bn: 'ফ্যামিলি রুম — ভেতরের ছবি শিগগিরই যুক্ত করা হবে। ব্যালকনি থেকে পুলের ভিউ উপরে দেখানো হলো।',
    },
    breakfastIncluded: true,
    breakfastDetails: {
      en: 'Complimentary breakfast for 4: Parathas, Daal, Eggs, Mixed Veg, and Tea',
      bn: '৪ জনের জন্য কমপ্লিমেন্টারি নাস্তা: পরোটা, ডাল, ডিম, সবজি ভাজি ও চা',
    },
    description: {
      en: 'Ideal for nuclear families or small groups traveling together. Configured with two full double beds, split air conditioning, attached private washroom, television, and direct access to the upper floor balcony terrace.',
      bn: 'ছোট পরিবার বা বন্ধুদের জন্য আদর্শ এই ফ্যামিলি রুমে রয়েছে দুটি ডাবল বেড, স্প্লিট এসি, এটাচড বাথরুম, টিভি এবং দ্বিতীয় তলার ব্যালকনি থেকে পুরো রিসোর্ট ও পুলের দৃশ্য।',
    },
    amenities: [
      { en: 'Two Full Double Beds (Sleeps 4)', bn: '২টি ডাবল বেড (৪ জনের জন্য)' },
      { en: 'Split Air Conditioning', bn: 'স্প্লিট এসি' },
      { en: 'Attached Private Bathroom', bn: 'এটাচড বাথরুম' },
      { en: 'Flat-Screen Television', bn: 'টেলিভিশন' },
      { en: 'Wardrobe & Seating', bn: 'আলমারি ও বসার ব্যবস্থা' },
      { en: 'Upper Balcony Pool Panorama', bn: 'ব্যালকনি থেকে পুলভিউ' },
      { en: 'Complimentary Pool Access for 4', bn: '৪ জনের জন্য সুইমিং পুল সুবিধা' },
    ],
    highlights: [
      { en: 'Sleeps up to 4 adults comfortably', bn: '৪ জনের আরামদায়ক থাকার সুবিধা' },
      { en: 'High value family package', bn: 'সাশ্রয়ী ফ্যামিলি প্যাকেজ' },
      { en: 'Upper terrace balcony access', bn: 'ব্যালকনি সুবিধা' },
    ],
  },
  {
    id: 'premium-suite',
    name: {
      en: 'Premium Suite Room',
      bn: 'প্রিমিয়াম স্যুট রুম',
    },
    category: 'VIP Suite',
    categoryName: {
      en: 'VIP Suite',
      bn: 'ভিআইপি স্যুট',
    },
    tagline: {
      en: 'Executive suite with separate living lounge and master bedroom',
      bn: 'আলাদা ড্রয়িং লাউঞ্জ ও মাস্টার বেডরুমসহ এক্সিকিউটিভ স্যুট',
    },
    rateBDT: 12000,
    ratePeriod: {
      en: 'per night (Subject to confirmation)',
      bn: 'প্রতি রাত (যাচাই সাপেক্ষে)',
    },
    capacity: {
      en: '2 Adults (VIP / Honeymoon)',
      bn: '২ জন (ভিআইপি / কাপল)',
    },
    bedConfig: {
      en: '1 King-Size Bed + Separate Living Lounge',
      bn: '১টি কিং সাইজ বেড + আলাদা লিভিং লাউঞ্জ',
    },
    image: '/images/gulmohor/rooms/room-suite-master-king-bed.jpg',
    galleryImages: [
      '/images/gulmohor/rooms/room-suite-master-king-bed.jpg',
      '/images/gulmohor/rooms/room-suite-living-lounge.jpg',
      '/images/gulmohor/rooms/room-suite-ensuite-glass-bathroom.jpg',
      '/images/gulmohor/hero/hero-balcony-panoramic-pool-estate.jpg',
    ],
    breakfastIncluded: true,
    breakfastDetails: {
      en: 'Complimentary VIP breakfast for 2 served in the suite or poolside restaurant',
      bn: 'স্যুটে অথবা রেস্টুরেন্টে ২ জনের জন্য কমপ্লিমেন্টারি স্পেশাল নাস্তা',
    },
    description: {
      en: 'The top-tier accommodation at Gulmohor Resort. A private multi-zone executive suite featuring a spacious separate living room with plush sofas, center dining table, an inner master bedroom with tufted king bed, wooden wardrobe, and a modern glass-enclosed bathroom.',
      bn: 'রিসোর্টের সবচেয়ে অভিজাত থাকার ব্যবস্থা। এই স্যুটে রয়েছে আলাদা ড্রয়িং ও লিভিং লাউঞ্জ, কিং সাইজ মাস্টার বেডরুম, উন্নত মানের ফার্নিচার এবং আধুনিক গ্লাস শাওয়ারযুক্ত বাথরুম।',
    },
    amenities: [
      { en: 'Multi-Zone Layout: Living Room + Bedroom', bn: 'আলাদা লিভিং লাউঞ্জ ও বেডরুম' },
      { en: 'Tufted King-Size Bed', bn: 'কিং সাইজ বেড' },
      { en: 'Designer Bathroom with Glass Shower Cabin', bn: 'গ্লাস শাওয়ার কেবিনযুক্ত বাথরুম' },
      { en: 'Plush Sofa Set & Center Dining Table', bn: 'সোফা সেট ও ডাইনিং টেবিল' },
      { en: 'Dual Split AC Units', bn: 'ডুয়াল স্প্লিট এসি' },
      { en: 'Premium Flat-Screen Television', bn: 'স্মার্ট এলইডি টিভি' },
      { en: 'VIP Panoramic Balcony Vantage', bn: 'ব্যালকনি থেকে পুলের ভিউ' },
      { en: 'Complimentary Pool Access', bn: 'সুইমিং পুল ব্যবহার সুবিধা' },
    ],
    highlights: [
      { en: 'Separate private lounge room', bn: 'আলাদা প্রাইভেট লাউঞ্জ' },
      { en: 'Glass enclosed designer shower', bn: 'গ্লাস শাওয়ার সুবিধা' },
      { en: 'Ultimate privacy & comfort', bn: 'সম্পূর্ণ নিজস্ব ও নিরিবিলি পরিবেশ' },
    ],
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'day-couple-meals',
    type: 'day',
    title: {
      en: 'Day-Long Couple Package (With Meals)',
      bn: 'ডে-লং কাপল প্যাকেজ (খাবারসহ)',
    },
    rateBDT: 6500,
    rateUnit: {
      en: 'for 2 persons',
      bn: '২ জনের জন্য',
    },
    guestCount: {
      en: '2 Guests',
      bn: '২ জন',
    },
    timing: {
      en: '10:00 AM – 6:00 PM (Approximate)',
      bn: 'সকাল ১০:০০টা – সন্ধ্যা ৬:০০টা',
    },
    inclusions: [
      { en: 'Private Air-Conditioned Deluxe Room for daytime rest', bn: 'দিনের বেলা বিশ্রামের জন্য এসি ডিলাক্স রুম' },
      { en: 'Set Lunch for 2: Fried Rice, Crispy Fried Chicken, Chili Chicken, Salad', bn: '২ জনের সেট লাঞ্চ: ফ্রাইড রাইস, ফ্রাইড চিকেন, চিলি চিকেন ও সালাদ' },
      { en: 'Afternoon Refreshments: Patties, Piyaju, Hot Tea/Coffee', bn: 'বিকেলের নাস্তা: পেঁয়াজু/প্যাটিস ও গরম চা/কফি' },
      { en: 'Full Access to 70x35 ft Swimming Pool', bn: '৭০x৩৫ ফুট সুইমিং পুলে সাঁতারের সুবিধা' },
      { en: 'Garden, Lawn, Hammock & Kids Zone access', bn: 'গোলাপ বাগান, লন, হ্যামক ও কিডস জোন ব্যবহার' },
    ],
    isPopular: true,
    caveatNote: {
      en: 'Prior booking via phone/WhatsApp required. Weekend availability subject to confirmation.',
      bn: 'ফোন বা WhatsApp-এ আগে বুকিং নিশ্চিত করতে হবে।',
    },
  },
  {
    id: 'day-room-only',
    type: 'day',
    title: {
      en: 'Day-Long Room Only (Without Meals)',
      bn: 'ডে-লং রুম অনলি (খাবার ছাড়া)',
    },
    rateBDT: 5000,
    rateUnit: {
      en: 'for 2 persons',
      bn: '২ জনের জন্য',
    },
    guestCount: {
      en: '2 Guests',
      bn: '২ জন',
    },
    timing: {
      en: '10:00 AM – 6:00 PM (Approximate)',
      bn: 'সকাল ১০:০০টা – সন্ধ্যা ৬:০০টা',
    },
    inclusions: [
      { en: 'Private Air-Conditioned Deluxe Room for daytime rest', bn: 'দিনের বেলা বিশ্রামের জন্য এসি ডিলাক্স রুম' },
      { en: 'Full Access to 70x35 ft Swimming Pool', bn: 'সুইমিং পুলে সাঁতারের সুবিধা' },
      { en: 'Resort grounds, rose gardens & photo spots', bn: 'রিসোর্ট প্রাঙ্গণ ও গোলাপ বাগান ঘুরে দেখার সুযোগ' },
      { en: 'Meals can be ordered separately à la carte on-site', bn: 'রেস্টুরেন্ট থেকে পছন্দমতো খাবার অর্ডার করার সুবিধা' },
    ],
    caveatNote: {
      en: 'Food charges not included; ordered directly at restaurant.',
      bn: 'খাবারের বিল আলাদাভাবে রেস্টুরেন্টে পরিশোধযোগ্য।',
    },
  },
  {
    id: 'pool-hourly-pass',
    type: 'entry',
    title: {
      en: 'Swimming Pool Hourly Visitor Pass',
      bn: 'সুইমিং পুল ঘণ্টাপ্রতি পাস',
    },
    rateBDT: 400,
    rateUnit: {
      en: 'per person / hour',
      bn: 'জনপ্রতি / ঘণ্টা',
    },
    guestCount: {
      en: '1 Person',
      bn: '১ জন',
    },
    timing: {
      en: 'During public swimming pool operating hours',
      bn: 'সুইমিং পুলের নির্ধারিত সময়ে',
    },
    inclusions: [
      { en: '1 hour access to 70 ft x 35 ft commercial swimming pool', bn: '৭০ ফুট x ৩৫ ফুট সুইমিং পুলে ১ ঘণ্টা সাঁতার' },
      { en: 'Access to poolside loungers and shaded patio benches', bn: 'পুলসাইড লাউঞ্জার ও বসার স্থান' },
      { en: 'Hygienic fresh shower facilities', bn: 'পরিচ্ছন্ন শাওয়ার ও চেঞ্জিং রুম' },
    ],
    caveatNote: {
      en: 'Proper swimwear required. Subject to pool capacity.',
      bn: 'সাঁতারের জন্য উপযুক্ত পোশাক পরা আবশ্যক।',
    },
  },
  {
    id: 'general-entry',
    type: 'entry',
    title: {
      en: 'Resort Grounds Entry Ticket',
      bn: 'রিসোর্ট প্রাঙ্গণ এন্ট্রি টিকিট',
    },
    rateBDT: 100,
    rateUnit: {
      en: 'per person',
      bn: 'জনপ্রতি',
    },
    guestCount: {
      en: '1 Person',
      bn: '১ জন',
    },
    timing: {
      en: 'Daytime visiting hours',
      bn: 'দিনের বেলা দর্শনার্থীদের জন্য',
    },
    inclusions: [
      { en: 'Entry to resort gardens, manicured lawns & fountain', bn: 'রিসোর্ট গার্ডেন, লন ও ফোয়ারা প্রাঙ্গণে প্রবেশ' },
      { en: 'Access to "I LOVE GULMOHOR" and floral photo spots', bn: '“আই লাভ গুলমোহর” ও ফটো স্পট ব্যবহার' },
      { en: 'Children playground (Kids Zone) access', bn: 'বাচ্চাদের খেলার মাঠ ব্যবহারের সুবিধা' },
    ],
  },
  {
    id: 'night-couple-deluxe',
    type: 'night',
    title: {
      en: 'Couple Deluxe Room (Overnight Stay)',
      bn: 'কাপল ডিলাক্স রুম (রাত্রিযাপন)',
    },
    rateBDT: 7000,
    rateUnit: {
      en: 'per night (2 Adults)',
      bn: 'প্রতি রাত (২ জন)',
    },
    guestCount: {
      en: '2 Guests',
      bn: '২ জন',
    },
    timing: {
      en: 'Arrival and departure times to be confirmed',
      bn: 'আগমন ও প্রস্থানের সময় নিশ্চিত করুন',
    },
    inclusions: [
      { en: 'Overnight stay in Queen Bed Couple Deluxe Room #2', bn: 'কুইন বেড কাপল ডিলাক্স রুমে রাত্রিযাপন' },
      { en: 'Complimentary hot breakfast for 2', bn: 'পরদিন সকালে ২ জনের কমপ্লিমেন্টারি নাস্তা' },
      { en: 'Unlimited swimming pool access during stay', bn: 'অবস্থানকালীন সুইমিং পুল ব্যবহারের সুযোগ' },
      { en: 'Split AC, attached modern shower bath, mini-fridge, kettle', bn: 'স্প্লিট এসি, এটাচড বাথরুম, মিনি ফ্রিজ ও কেটলি' },
    ],
    isPopular: true,
    caveatNote: {
      en: 'Rates subject to management confirmation on peak holidays.',
      bn: 'ছুটির দিনে রেট পরিবর্তন হতে পারে।',
    },
  },
  {
    id: 'night-double-deluxe',
    type: 'night',
    title: {
      en: 'Double Deluxe Family Room (Overnight Stay)',
      bn: 'ডাবল ডিলাক্স ফ্যামিলি রুম (রাত্রিযাপন)',
    },
    rateBDT: 9000,
    rateUnit: {
      en: 'per night (4 Adults)',
      bn: 'প্রতি রাত (৪ জন)',
    },
    guestCount: {
      en: '4 Guests',
      bn: '৪ জন',
    },
    timing: {
      en: 'Arrival and departure times to be confirmed',
      bn: 'আগমন ও প্রস্থানের সময় নিশ্চিত করুন',
    },
    inclusions: [
      { en: 'Overnight stay in 2-Bed Family Room for 4 adults', bn: '২টি ডাবল বেড ফ্যামিলি রুমে ৪ জনের রাত্রিযাপন' },
      { en: 'Complimentary hot breakfast for 4', bn: 'পরদিন সকালে ৪ জনের কমপ্লিমেন্টারি নাস্তা' },
      { en: 'Unlimited swimming pool access for the family', bn: 'পরিবারের সবার জন্য সুইমিং পুল ব্যবহারের সুযোগ' },
      { en: 'Split AC, attached bath, television, balcony access', bn: 'স্প্লিট এসি, এটাচড বাথরুম, টিভি ও ব্যালকনি' },
    ],
  },
  {
    id: 'night-premium-suite',
    type: 'night',
    title: {
      en: 'Premium Suite Room (Overnight Stay)',
      bn: 'প্রিমিয়াম স্যুট রুম (রাত্রিযাপন)',
    },
    rateBDT: 12000,
    rateUnit: {
      en: 'per night (2 Adults VIP)',
      bn: 'প্রতি রাত (২ জন ভিআইপি)',
    },
    guestCount: {
      en: '2 Guests',
      bn: '২ জন',
    },
    timing: {
      en: 'Arrival and departure times to be confirmed',
      bn: 'আগমন ও প্রস্থানের সময় নিশ্চিত করুন',
    },
    inclusions: [
      { en: 'Luxury multi-zone suite: Master King Bedroom + Reception Living Lounge', bn: 'মাস্টার কিং বেডরুম ও আলাদা ড্রয়িং লিভিং লাউঞ্জ' },
      { en: 'Complimentary VIP breakfast for 2', bn: '২ জনের জন্য স্পেশাল কমপ্লিমেন্টারি নাস্তা' },
      { en: 'Designer glass shower cubicle, plush sofa lounge, dual AC', bn: 'গ্লাস শাওয়ার কেবিনযুক্ত বাথরুম ও ডুয়াল এসি' },
      { en: 'VIP balcony vantage overlooking pool & estate', bn: 'ব্যালকনি থেকে পুলের ভিউ' },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hero-mansion-pool',
    category: 'mansion',
    title: { en: 'Neoclassical White Mansion & Swimming Pool', bn: 'নিওক্লাসিক্যাল ভিলা ও সুইমিং পুল' },
    caption: { en: 'Symmetrical Romanesque columns reflected in the 70 ft swimming pool', bn: 'পুলের স্বচ্ছ জলে রোমান স্থাপত্যের প্রতিচ্ছবি' },
    src: '/images/gulmohor/hero/hero-resort-mansion-pool-daytime.jpg',
    alt: 'Gulmohor Resort White Mansion Daytime',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'pool-loungers',
    category: 'pool',
    title: { en: 'Poolside Deck & Sun Loungers', bn: 'পুলসাইড ডেক ও সান লাউঞ্জার' },
    caption: { en: 'Paved patio with wooden reclining loungers and parasols', bn: 'ছায়াঘেরা সান লাউঞ্জার ও আরামদায়ক বসার স্থান' },
    src: '/images/gulmohor/hero/hero-swimming-pool-patio-loungers.jpg',
    alt: 'Poolside patio with reclining sun loungers',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'pool-crystal-water',
    category: 'pool',
    title: { en: 'Crystal Turquoise Pool Water', bn: 'স্বচ্ছ ফিরোজা রঙের পুল' },
    caption: { en: '70x35 ft continuous filtration commercial swimming pool', bn: 'ফিল্ট্রেশনযুক্ত ৭০ ফুট x ৩৫ ফুটের বিশাল সুইমিং পুল' },
    src: '/images/gulmohor/pool/pool-crystal-turquoise-water.jpg',
    alt: 'Crystal clear pool water close-up',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'rose-walkway',
    category: 'nature',
    title: { en: 'Blooming Rose Gardens Promenade', bn: 'গোলাপ বাগান ও হাঁটার পথ' },
    caption: { en: 'Vibrant flowering red roses framing the mansion approach', bn: 'মনোরম ফুটন্ত গোলাপ গাছে ঘেরা প্রবেশপথ' },
    src: '/images/gulmohor/hero/hero-rose-garden-mansion-walkway.jpg',
    alt: 'Blooming rose gardens walkway',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'mango-hammock',
    category: 'nature',
    title: { en: 'Shaded Hammock in Mango Orchard', bn: 'আমবাগানে ঝোলানো আরামদায়ক হ্যামক' },
    caption: { en: 'Relaxation hammock suspended between two mature mango trees', bn: 'সবুজ গাছের ছায়ায় শান্তিতে বিশ্রামের নিখুঁত কোণ' },
    src: '/images/gulmohor/nature/nature-mango-trees-shaded-hammock.jpg',
    alt: 'Shaded hammock between mango trees',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'balcony-panorama',
    category: 'mansion',
    title: { en: 'Upper Balcony Estate Panorama', bn: 'ব্যালকনি থেকে রিসোর্টের দৃশ্য' },
    caption: { en: 'Vantage perspective from second floor overlooking the pool', bn: 'দ্বিতীয় তলার ব্যালকনি থেকে শান্ত পরিবেশের দৃশ্য' },
    src: '/images/gulmohor/hero/hero-balcony-panoramic-pool-estate.jpg',
    alt: 'Upper balcony view of pool and grounds',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'room-deluxe-queen',
    category: 'rooms',
    title: { en: 'Couple Deluxe Bedroom #2', bn: 'কাপল ডিলাক্স রুমের বেডরুম' },
    caption: { en: 'Queen bed with crisp white linens and side tables', bn: 'পরিচ্ছন্ন চাদরে মোড়ানো আরামদায়ক কুইন বেড' },
    src: '/images/gulmohor/rooms/room-deluxe-queen-bed-lounge.jpg',
    alt: 'Couple deluxe queen bed setup',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'room-deluxe-sofa',
    category: 'rooms',
    title: { en: 'Deluxe Room Seating Lounge', bn: 'ডিলাক্স রুমের সোফা সিটিং' },
    caption: { en: 'Cozy upholstered seating area and coffee corner', bn: 'রুমের ভেতরের আরামদায়ক সোফা ও কফি টেবিল' },
    src: '/images/gulmohor/rooms/room-deluxe-sofa-coffee-station.jpg',
    alt: 'Deluxe room seating sofa and coffee table',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'room-suite-master',
    category: 'rooms',
    title: { en: 'Premium Suite Master Bedroom', bn: 'প্রিমিয়াম স্যুট মাস্টার বেডরুম' },
    caption: { en: 'King bed with tufted headboard in private master chamber', bn: 'আলাদা মাস্টার চেম্বারে অবস্থিত রাজকীয় কিং সাইজ বেড' },
    src: '/images/gulmohor/rooms/room-suite-master-king-bed.jpg',
    alt: 'Premium suite master king bed',
    attribution: 'YouTube 720p Video Still Frame (md juglul haidar Vlog)',
  },
  {
    id: 'room-suite-lounge',
    category: 'rooms',
    title: { en: 'Premium Suite Living Lounge', bn: 'প্রিমিয়াম স্যুটের আলাদা লিভিং রুম' },
    caption: { en: 'Independent reception parlor with plush sofa set', bn: 'অতিথিদের বসার জন্য স্যুটের আলাদা সুসজ্জিত ড্রয়িং রুম' },
    src: '/images/gulmohor/rooms/room-suite-living-lounge.jpg',
    alt: 'Premium suite living room and dining table',
    attribution: 'YouTube 720p Video Still Frame (md juglul haidar Vlog)',
  },
  {
    id: 'room-suite-bath',
    category: 'rooms',
    title: { en: 'Suite Glass Shower Bathroom', bn: 'স্যুটের গ্লাস শাওয়ার বাথরুম' },
    caption: { en: 'Contemporary bathroom with glass-enclosed shower stall', bn: 'গ্লাস পার্টিশনযুক্ত আধুনিক ও পরিচ্ছন্ন বাথরুম' },
    src: '/images/gulmohor/rooms/room-suite-ensuite-glass-bathroom.jpg',
    alt: 'Suite glass shower bathroom',
    attribution: 'YouTube 720p Video Still Frame (md juglul haidar Vlog)',
  },
  {
    id: 'dining-restaurant',
    category: 'dining',
    title: { en: 'AC Restaurant Overlooking Pool', bn: 'এসি রেস্টুরেন্ট ও পুল ভিউ' },
    caption: { en: 'Floor-to-ceiling glass windows offering pool panorama', bn: 'কাঁচের দেয়াল দিয়ে সুইমিং পুলের দৃশ্য দেখতে দেখতে খাবার খাওয়া' },
    src: '/images/gulmohor/dining/dining-restaurant-panoramic-pool-view.jpg',
    alt: 'Ground floor AC restaurant with pool view',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'dining-indoor-hall',
    category: 'dining',
    title: { en: 'Spacious Dining Hall', bn: 'প্রশস্ত ডাইনিং হলরুম' },
    caption: { en: 'Comfortable family and group dining tables indoors', bn: 'পরিবার ও বন্ধুদের একসাথে খাওয়ার সুন্দর পরিবেশ' },
    src: '/images/gulmohor/dining/dining-indoor-lounge-hall.jpg',
    alt: 'Spacious restaurant dining tables',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'dining-bengali-delicacies',
    category: 'dining',
    title: { en: 'Traditional Bengali Cuisine', bn: 'ঐতিহ্যবাহী বাংলা খাবার' },
    caption: { en: 'Freshly prepared festive Bengali feast delicacies', bn: 'ঘরোয়া স্বাদে তৈরি গরম গরম খাবার ও ভোজ' },
    src: '/images/gulmohor/dining/dining-traditional-iftar-delicacies.jpg',
    alt: 'Traditional Bengali delicacies and dishes',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'nature-fountain',
    category: 'nature',
    title: { en: 'Entrance Tiered Water Fountain', bn: 'প্রবেশপথের মার্বেল ফোয়ারা' },
    caption: { en: 'Ornamental fountain feature along the entrance driveway', bn: 'রিসোর্টে প্রবেশের মুখেই পানির ফোয়ারার স্নিগ্ধ অভ্যর্থনা' },
    src: '/images/gulmohor/nature/nature-entrance-water-fountain.jpg',
    alt: 'Resort entrance tiered water fountain',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'nature-gazebo',
    category: 'nature',
    title: { en: 'Garden Gazebo Pavilion', bn: 'বাগানের ছায়াঘেরা গেজেবো' },
    caption: { en: 'Quiet garden pavilion nestled among ornamental foliage', bn: 'গাছপালা ও ফুল বাগানের মাঝে বসে বিশ্রাম নেওয়ার সুন্দর স্থান' },
    src: '/images/gulmohor/nature/nature-garden-gazebo-pavilion.jpg',
    alt: 'Garden gazebo pavilion in resort',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'nature-lawn-swing',
    category: 'nature',
    title: { en: 'Lawn Floral Archway & Swing', bn: 'ফুলের আর্চওয়ে ও দোলনা' },
    caption: { en: 'White hanging garden bench swing beneath floral arch', bn: 'সবুজ ঘাসের ওপর সাদা দোলনায় আড্ডার আনন্দ' },
    src: '/images/gulmohor/nature/nature-floral-archway-lawn-swing.jpg',
    alt: 'Lawn swing under floral archway',
    attribution: 'Official Facebook Page Upload (Gulmohor Resort)',
  },
  {
    id: 'events-love-sign',
    category: 'events',
    title: { en: '“I ❤️ GULMOHOR” Photo Installation', bn: '“আই লাভ গুলমোহর” ফটো স্পট' },
    caption: { en: 'Signature white 3D lettering installation for guest memories', bn: 'অতিথিদের প্রিয় ছবি তোলার জনপ্রিয় ফটো কর্নার' },
    src: '/images/gulmohor/events/events-love-gulmohor-photo-installation.jpg',
    alt: 'I love Gulmohor 3D sign in garden',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'events-kids-zone',
    category: 'events',
    title: { en: 'Kids Playground Zone', bn: 'শিশুদের খেলার মাঠ (কিডস জোন)' },
    caption: { en: 'Gated children play area equipped with swings and slides', bn: 'বাচ্চাদের আনন্দের জন্য দোলনা, স্লিপার ও রাইডযুক্ত কিডস জোন' },
    src: '/images/gulmohor/events/events-kids-playground-zone.jpg',
    alt: 'Kids playground zone with slides and swings',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'events-wedding-portrait',
    category: 'events',
    title: { en: 'Poolside Wedding Celebrations', bn: 'পুলসাইডে রাজকীয় বিয়ের আয়োজন' },
    caption: { en: 'Scenic outdoor destination wedding ceremonies and photography', bn: 'খোলামেলা সবুজের মাঝে ডেস্টিনেশন ওয়েডিং ও গায়ে হলুদ' },
    src: '/images/gulmohor/events/events-wedding-poolside-portrait.jpg',
    alt: 'Bride and groom poolside portrait',
    attribution: 'Official Facebook Photo Post (Wedding Chronicle Shoot)',
  },
  {
    id: 'events-royal-gate',
    category: 'mansion',
    title: { en: 'Ornate Security Entrance Gate', bn: 'রাজকীয় কারুকার্যময় প্রবেশদ্বার' },
    caption: { en: 'Black and gold wrought-iron security gate illuminated at night', bn: '২৪ ঘণ্টা নিরাপত্তাবেষ্টিত সুরক্ষিত রিসোর্টের প্রধান ফটক' },
    src: '/images/gulmohor/events/events-grand-royal-entrance-gate.jpg',
    alt: 'Black and gold ornate security gate at night',
    attribution: 'YouTube 1080p60 Video Still Frame (Ratul & Rubaiya Vlog)',
  },
  {
    id: 'pool-mansion-facade-3264',
    category: 'mansion',
    title: { en: 'Neoclassical Estate Daylight Facade', bn: 'দিনের আলোয় নিওক্লাসিক্যাল স্থাপত্য' },
    caption: { en: 'Full 8-megapixel native camera view across pool and columns', bn: 'পুলের ওপর প্রতিফলিত রাজকীয় সাদা অট্টালিকা' },
    src: '/images/gulmohor/google-maps/pool/google-maps-pool-mansion-facade-3264x2448.jpg',
    alt: 'Neoclassical mansion reflected in swimming pool',
    attribution: 'Customer Photo: Rajib Dey Sarker (Sep 2026, Google Maps UGC — Prototype Only)',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-timing',
    category: 'timing',
    question: {
      en: 'What are the check-in and check-out times for day and night stays?',
      bn: 'ডে প্যাকেজ এবং রাত্রিযাপনের চেক-ইন ও চেক-আউট সময় কখন?',
    },
    answer: {
      en: 'The day package is listed as approximately 10:00 AM–6:00 PM in available package information. Overnight check-in and check-out times have not been verified. Please confirm arrival and departure times with the resort when you inquire.',
      bn: 'প্রকাশিত প্যাকেজ তথ্যে ডে প্যাকেজের সময় আনুমানিক সকাল ১০টা–সন্ধ্যা ৬টা উল্লেখ আছে। রাত্রিযাপনের চেক-ইন ও চেক-আউটের সময় যাচাই করা হয়নি। অনুসন্ধানের সময় রিসোর্ট থেকে সময় নিশ্চিত করুন।',
    },
  },
  {
    id: 'faq-pool',
    category: 'pool',
    question: {
      en: 'What are the swimming pool rules, timings, and costume requirements?',
      bn: 'সুইমিং পুলের নিয়মাবলী ও পোশাকের ব্যাপারে কী নির্দেশনা রয়েছে?',
    },
    answer: {
      en: 'The pool is 70 ft x 35 ft. Research materials list a public hourly pool rate of BDT 400, which should be confirmed before travel. Pool hours, swimwear requirements and child-safety rules have not been verified; ask the resort directly.',
      bn: 'পুলের মাপ ৭০ × ৩৫ ফুট। গবেষণার তথ্যে পাবলিক পুল ব্যবহারের প্রতি ঘণ্টার মূল্য ৳৪০০ উল্লেখ আছে, যাত্রার আগে নিশ্চিত করুন। পুলের সময়, সাঁতারের পোশাক ও শিশুদের নিরাপত্তার নিয়ম যাচাই করা হয়নি; রিসোর্ট থেকে জেনে নিন।',
    },
  },
  {
    id: 'faq-food',
    category: 'dining',
    question: {
      en: 'Can we bring outside food, and what dining options exist at the resort?',
      bn: 'বাইরে থেকে খাবার আনা যাবে কি? রিসোর্টে খাবারের কী ব্যবস্থা আছে?',
    },
    answer: {
      en: 'The property has an air-conditioned dining hall, lawn seating and a live outdoor BBQ kitchen for events. Menus and whether walk-in dining or outside food are available should be confirmed with the resort.',
      bn: 'রিসোর্টে শীতাতপ নিয়ন্ত্রিত ডাইনিং হল, লনে বসার ব্যবস্থা এবং অনুষ্ঠানের জন্য আউটডোর লাইভ BBQ কিচেন রয়েছে। মেনু, সরাসরি এসে খাবার এবং বাইরের খাবার আনার নিয়ম রিসোর্ট থেকে নিশ্চিত করুন।',
    },
  },
  {
    id: 'faq-booking',
    category: 'booking',
    question: {
      en: 'How do I book, and what is the policy on advance deposits and refunds?',
      bn: 'বুকিং কীভাবে করতে হয়? অগ্রিম পেমেন্টের নিয়ম কী?',
    },
    answer: {
      en: 'Start by calling or messaging 01911-498819. Room and event bookings may require an advance payment; confirm the amount and accepted method directly. Cancellation and refund terms are not publicly stated. A WhatsApp inquiry is not a confirmed reservation.',
      bn: 'প্রথমে 01911-498819 নম্বরে ফোন বা WhatsApp করুন। রুম ও অনুষ্ঠানের বুকিংয়ে অগ্রিম লাগতে পারে; পরিমাণ ও পদ্ধতি সরাসরি নিশ্চিত করুন। বাতিল ও ফেরতের নীতিমালা প্রকাশিত নয়। WhatsApp-এ অনুসন্ধান করলেই রিজার্ভেশন নিশ্চিত হয় না।',
    },
  },
  {
    id: 'faq-transport',
    category: 'timing',
    question: {
      en: 'How far is Gulmohor Resort from Dhaka, and how can we get there?',
      bn: 'ঢাকা থেকে রিসোর্টের দূরত্ব কতটুকু এবং কীভাবে যাওয়া যায়?',
    },
    answer: {
      en: 'The resort is on the Sreenagar-Dohar Highway in Damla, opposite Bhuiyan Medical College / Clinic and in front of Damla School. A Seba Paribahan route from Postogola is documented in available research; confirm the current route and fare before travelling. Open the map link for directions.',
      bn: 'রিসোর্টটি দামলায় শ্রীনগর-দোহার হাইওয়েতে, ভুইয়া মেডিকেল কলেজ / ক্লিনিকের বিপরীতে ও দামলা স্কুলের সামনে। পোস্টগোলা থেকে সেবা পরিবহনের রুট গবেষণায় উল্লেখ আছে; যাত্রার আগে বর্তমান রুট ও ভাড়া নিশ্চিত করুন। দিকনির্দেশনার জন্য ম্যাপ লিংক খুলুন।',
    },
  },
  {
    id: 'faq-events',
    category: 'booking',
    question: {
      en: 'What facilities are available for weddings, reunions, and corporate picnics?',
      bn: 'বিয়ে, রিইউনিয়ন বা পিকনিকের জন্য কী কী সুবিধা রয়েছে?',
    },
    answer: {
      en: 'The property has an indoor banquet hall and an outdoor lawn used for weddings, reunions and other gatherings. Capacity, available services, catering and event pricing depend on the arrangement; contact the resort to confirm details.',
      bn: 'রিসোর্টে ইনডোর ব্যাঙ্কুয়েট হল ও আউটডোর লন রয়েছে, যেখানে বিয়ে, পুনর্মিলনী ও অন্যান্য আয়োজন হয়। ধারণক্ষমতা, সেবা, খাবার ও মূল্য আয়োজনভেদে নির্ধারিত হয়; বিস্তারিত রিসোর্ট থেকে নিশ্চিত করুন।',
    },
  },
  {
    id: 'faq-rates',
    category: 'booking',
    question: {
      en: 'Where can I check room, day-visit and pool rates?',
      bn: 'রুম, ডে-ভিজিট ও পুলের মূল্য কোথায় জানব?',
    },
    answer: {
      en: 'Indicative room and package rates are shown on this page based on available 2026 records. Final rates and availability should be confirmed with the resort by phone or WhatsApp before travelling.',
      bn: '২০২৬ সালের প্রাপ্ত তথ্য অনুযায়ী এই পেজে রুম ও প্যাকেজের সম্ভাব্য মূল্য দেখানো হয়েছে। ভ্রমণের আগে ফোন বা WhatsApp-এ চূড়ান্ত মূল্য ও সুবিধা নিশ্চিত করুন।',
    },
  },
  {
    id: 'faq-packing',
    category: 'pool',
    question: {
      en: 'What should I bring for a pool or day visit?',
      bn: 'পুল বা ডে-ভিজিটে কী সঙ্গে আনব?',
    },
    answer: {
      en: 'Bring personal swimwear and everyday essentials. Pool dress requirements, towels and changing arrangements are not fully documented, so check with the resort when confirming your visit.',
      bn: 'নিজস্ব সাঁতারের পোশাক ও প্রয়োজনীয় ব্যক্তিগত জিনিস সঙ্গে আনুন। পুলের পোশাকবিধি, তোয়ালে ও পরিবর্তনের ব্যবস্থার সম্পূর্ণ তথ্য নেই—ভিজিট নিশ্চিত করার সময় রিসোর্টকে জিজ্ঞেস করুন।',
    },
  },
];
