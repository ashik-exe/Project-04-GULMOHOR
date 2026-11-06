export type Language = 'en' | 'bn';

export interface RoomItem {
  id: string;
  name: { en: string; bn: string };
  category: string;
  categoryName?: { en: string; bn: string };
  tagline: { en: string; bn: string };
  rateBDT: number;
  ratePeriod: { en: string; bn: string };
  capacity: { en: string; bn: string };
  bedConfig: { en: string; bn: string };
  image: string;
  galleryImages: string[];
  isMissingInteriorPhoto?: boolean;
  missingPhotoNote?: { en: string; bn: string };
  amenities: { en: string; bn: string }[];
  breakfastIncluded: boolean;
  breakfastDetails?: { en: string; bn: string };
  description: { en: string; bn: string };
  highlights: { en: string; bn: string }[];
}

export interface PackageItem {
  id: string;
  type: 'day' | 'night' | 'entry';
  title: { en: string; bn: string };
  rateBDT: number | string;
  rateUnit: { en: string; bn: string };
  guestCount: { en: string; bn: string };
  timing: { en: string; bn: string };
  inclusions: { en: string; bn: string }[];
  isPopular?: boolean;
  caveatNote?: { en: string; bn: string };
}

export interface GalleryItem {
  id: string;
  category: 'all' | 'mansion' | 'pool' | 'rooms' | 'dining' | 'nature' | 'events';
  categoryName?: { en: string; bn: string };
  title: { en: string; bn: string };
  caption: { en: string; bn: string };
  src: string;
  alt: string;
  attribution: string;
}

export interface FaqItem {
  id: string;
  question: { en: string; bn: string };
  answer: { en: string; bn: string };
  category: 'timing' | 'pool' | 'dining' | 'booking';
}

export interface EventInquiryPayload {
  eventType: string;
  preferredDate: string;
  estimatedGuests: string;
  contactName: string;
  contactPhone: string;
  notes: string;
}
