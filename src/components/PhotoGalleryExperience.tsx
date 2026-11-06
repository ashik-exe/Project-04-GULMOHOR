import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Language, Photo } from './SiteChrome';

type Category = 'estate' | 'stay' | 'pool' | 'gardens' | 'dining' | 'events';
type GalleryEntry = { id: string; image: string; category: Category; alt: { en: string; bn: string }; label: { en: string; bn: string }; note?: { en: string; bn: string } };
const entries: GalleryEntry[] = [
  { id: 'walk', image: 'estate-garden-walk', category: 'estate', label: { en: 'Garden approach', bn: 'বাগানের প্রবেশপথ' }, alt: { en: 'Garden path leading toward the white resort residence', bn: 'রিসোর্ট ভবনের দিকে যাওয়া বাগানের পথ' } },
  { id: 'pool', image: 'pool-loungers', category: 'pool', label: { en: 'Poolside', bn: 'সুইমিং পুল' }, alt: { en: 'Outdoor swimming pool beside the resort building', bn: 'রিসোর্ট ভবনের পাশের সুইমিং পুল' } },
  { id: 'couple', image: 'couple-deluxe', category: 'stay', label: { en: 'Couple Deluxe', bn: 'কাপল ডিলাক্স রুম' }, alt: { en: 'A bright guest room with a double bed and seating', bn: 'ডাবল বেড ও বসার জায়গাসহ অতিথিকক্ষ' } },
  { id: 'suite', image: 'suite-master', category: 'stay', label: { en: 'Suite bedroom', bn: 'স্যুট বেডরুম' }, alt: { en: 'Bedroom in a resort suite', bn: 'রিসোর্ট স্যুটের বেডরুম' } },
  { id: 'veranda', image: 'family-veranda', category: 'stay', label: { en: 'Veranda and pool view', bn: 'বারান্দা থেকে পুলের দৃশ্য' }, alt: { en: 'Upper veranda overlooking the pool', bn: 'ওপরতলার বারান্দা থেকে পুলের দৃশ্য' }, note: { en: 'Veranda view; Double Deluxe interior photography is not available.', bn: 'এটি বারান্দার ছবি। Double Deluxe রুমের ভেতরের ছবি পাওয়া যায়নি।' } },
  { id: 'hammock', image: 'mango-hammock', category: 'gardens', label: { en: 'Shaded garden', bn: 'ছায়াঘেরা বাগান' }, alt: { en: 'Hammock under leafy trees in the garden', bn: 'বাগানের গাছের নিচে ঝোলানো হ্যামক' } },
  { id: 'gazebo', image: 'garden-gazebo', category: 'events', label: { en: 'Lawn pavilion', bn: 'লনের প্যাভিলিয়ন' }, alt: { en: 'Small pavilion beside the lawn and garden path', bn: 'লন ও বাগানের পথের পাশে ছোট প্যাভিলিয়ন' }, note: { en: 'The photo shows the garden pavilion. Ask the resort to confirm the current event setup.', bn: 'ছবিতে বাগানের প্যাভিলিয়ন দেখা যাচ্ছে। অনুষ্ঠানের বর্তমান ব্যবস্থা রিসোর্ট থেকে জেনে নিন।' } },
  { id: 'dining', image: 'dining-hall', category: 'dining', label: { en: 'Dining room', bn: 'ডাইনিং রুম' }, alt: { en: 'Indoor dining room with poolside windows', bn: 'পুলের দিকে জানালাসহ ইনডোর ডাইনিং রুম' } },
];
const categoryLabels: Record<Language, Record<'all' | Category, string>> = {
  en: { all: 'All', estate: 'Estate', stay: 'Stay', pool: 'Pool', gardens: 'Gardens', dining: 'Dining', events: 'Events' },
  bn: { all: 'সব ছবি', estate: 'রিসোর্ট', stay: 'রুম', pool: 'পুল', gardens: 'বাগান', dining: 'ডাইনিং', events: 'অনুষ্ঠান' },
};

export function PhotoGalleryExperience({ language }: { language: Language }) {
  const [category, setCategory] = useState<'all' | Category>('all');
  const [active, setActive] = useState<GalleryEntry | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const copy = language === 'en'
    ? { eyebrow: 'A closer look', title: 'A few moments at Gulmohor', intro: 'Browse the spaces and scenes that make up the resort.', open: 'Open photo', close: 'Close gallery image', previous: 'Previous image', next: 'Next image' }
    : { eyebrow: 'ছবির গ্যালারি', title: 'রুম, পুল আর বাগান—ছবিতে ঘুরে দেখুন', intro: 'রুম, পুল, বাগান, ডাইনিং ও অনুষ্ঠানস্থলের ছবি দেখুন।', open: 'ছবি বড় করে দেখুন', close: 'ছবি বন্ধ করুন', previous: 'আগের ছবি', next: 'পরের ছবি' };
  const filtered = useMemo(() => entries.filter(item => category === 'all' || item.category === category), [category]);
  const activeIndex = active ? filtered.findIndex(item => item.id === active.id) : -1;

  useEffect(() => {
    if (!active) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setActive(null); triggerRef.current?.focus(); }
      if (event.key === 'ArrowRight') setActive(filtered[(activeIndex + 1) % filtered.length]);
      if (event.key === 'ArrowLeft') setActive(filtered[(activeIndex - 1 + filtered.length) % filtered.length]);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [active, activeIndex, filtered]);

  const navigate = (direction: number) => setActive(filtered[(activeIndex + direction + filtered.length) % filtered.length]);
  const close = () => { setActive(null); triggerRef.current?.focus(); };

  return <section id="gallery" className="section gallery-section">
    <div className="section-heading section-heading--row"><div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2></div><p>{copy.intro}</p></div>
    <div className="gallery-filters" aria-label={language === 'en' ? 'Filter gallery' : 'গ্যালারি ফিল্টার'}>
      {(['all', 'estate', 'stay', 'pool', 'gardens', 'dining', 'events'] as const).map(value => <button key={value} type="button" className={category === value ? 'is-active' : ''} aria-pressed={category === value} onClick={() => setCategory(value)}>{categoryLabels[language][value]}</button>)}
    </div>
    <div className="gallery-grid">{filtered.map((entry, index) => <button key={entry.id} className={`gallery-tile gallery-tile--${index % 5}`} type="button" aria-label={`${copy.open}: ${entry.label[language]}`} onClick={event => { triggerRef.current = event.currentTarget; setActive(entry); }}>
      <Photo name={entry.image} alt={entry.alt[language]} sizes="(max-width: 700px) 50vw, 33vw" />
      <span>{entry.label[language]}</span>
    </button>)}</div>
    {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.label[language]} onMouseDown={event => { if (event.target === event.currentTarget) close(); }}>
      <button className="icon-button lightbox__close" type="button" aria-label={copy.close} onClick={close}><X size={22} /></button>
      <button className="icon-button lightbox__prev" type="button" aria-label={copy.previous} onClick={() => navigate(-1)}><ArrowLeft size={21} /></button>
      <figure><Photo name={active.image} alt={active.alt[language]} loading="eager" sizes="90vw" /><figcaption><strong>{active.label[language]}</strong>{active.note && <span>{active.note[language]}</span>}</figcaption></figure>
      <button className="icon-button lightbox__next" type="button" aria-label={copy.next} onClick={() => navigate(1)}><ArrowRight size={21} /></button>
    </div>}
  </section>;
}
