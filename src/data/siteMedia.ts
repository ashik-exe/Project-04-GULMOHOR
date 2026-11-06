export type SitePhoto = {
  key: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
};

const media: Record<string, { folder: string; widths: number[]; height: number; width: number }> = {
  'hero-estate': { folder: 'hero', widths: [640, 960, 1440, 1920], width: 1920, height: 1080 },
  'estate-garden-walk': { folder: 'architecture', widths: [640, 960, 1440, 1920], width: 1920, height: 1080 },
  'couple-deluxe': { folder: 'accommodation', widths: [640, 960, 1440, 1920], width: 1920, height: 1080 },
  'family-veranda': { folder: 'architecture', widths: [640, 960, 1440, 1920], width: 1920, height: 1080 },
  'suite-master': { folder: 'accommodation', widths: [640, 960, 1280], width: 1280, height: 720 },
  'pool-loungers': { folder: 'pool', widths: [640, 960, 1440, 1920], width: 1920, height: 1080 },
  'mango-hammock': { folder: 'gardens', widths: [640, 960, 1440, 1920], width: 1920, height: 1080 },
  'dining-hall': { folder: 'dining', widths: [640, 960, 1440, 1920], width: 1920, height: 1080 },
  'garden-gazebo': { folder: 'gardens', widths: [640, 960, 1440, 1920], width: 1920, height: 1080 },
  'event-marquee': { folder: 'events', widths: [540], width: 540, height: 960 },
};

export function getSitePhoto(key: string): SitePhoto {
  const item = media[key];
  if (!item) throw new Error(`Unknown site photo: ${key}`);
  const pathFor = (width: number) => `/images/gulmohor/enhanced/${item.folder}/${key}-${width}.webp`;
  return {
    key,
    src: pathFor(item.width),
    srcSet: item.widths.map(width => `${pathFor(width)} ${width}w`).join(', '),
    width: item.width,
    height: item.height,
  };
}
