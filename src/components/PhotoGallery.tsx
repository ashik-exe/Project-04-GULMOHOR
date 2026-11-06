import React, { useState } from 'react';
import { Expand } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_ITEMS } from '../data/resortData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onSelectItem: (item: GalleryItem) => void;
}

export const PhotoGallery: React.FC<GalleryProps> = ({ onSelectItem }) => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'mansion' | 'pool' | 'rooms' | 'dining' | 'nature' | 'events'>('all');

  const filterTabs = [
    { key: 'all', label: { en: 'All Photos (22)', bn: 'সকল ছবি (২২)' } },
    { key: 'mansion', label: { en: 'Architecture & Estate', bn: 'মূল ভবন ও প্রাঙ্গণ' } },
    { key: 'pool', label: { en: 'Swimming Pool', bn: 'সুইমিং পুল' } },
    { key: 'rooms', label: { en: 'Suites & Rooms', bn: 'রুম ও স্যুট' } },
    { key: 'dining', label: { en: 'Dining & BBQ', bn: 'ডাইনিং ও বারবিকিউ' } },
    { key: 'nature', label: { en: 'Gardens & Grounds', bn: 'বাগান ও হ্যামক' } },
    { key: 'events', label: { en: 'Events & Celebrations', bn: 'ইভেন্ট ও উৎসব' } },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutralSoft">
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.08em] text-forest font-sansEng font-semibold block mb-3">
              {t({ en: '07 / Photo Gallery', bn: '০৭ / বাস্তব চিত্রশালা' })}
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl text-charcoal text-balance-title ${
                language === 'bn' ? 'font-displayBn font-medium leading-[1.28]' : 'font-serifEng font-light leading-[1.14]'
              }`}
            >
              {t({
                en: 'Authentic Perspectives: 100% Genuine Resort Photography.',
                bn: 'রিসোর্টের বাস্তব দৃশ্য — ১০০% আসল ছবি।',
              })}
            </h2>
          </div>

          <div className="text-right self-start md:self-end">
            <span className={`text-xs text-charcoal-600 block font-medium ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
              {t({
                en: 'Zero Stock Photography Guarantee',
                bn: 'কোনো স্টক ছবি নয় — শতভাগ আসল দৃশ্য',
              })}
            </span>
            <span className={`text-[11px] text-charcoal-400 block mt-0.5 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light italic'}`}>
              {t({
                en: 'All 22 assets verified from resort operations',
                bn: 'রিসোর্টের বাস্তব কার্যক্রম থেকে সংকলিত ২২টি ছবি',
              })}
            </span>
          </div>
        </div>

        {/* Minimalist Exhibition Filter Tabs */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 py-8 border-b border-neutralSoft/60 text-xs uppercase tracking-[0.06em] font-sansEng font-medium">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`pb-1 transition-all ${
                  isActive
                    ? 'border-b-2 border-forest text-forest font-semibold'
                    : 'text-charcoal-400 hover:text-charcoal border-b-2 border-transparent'
                }`}
              >
                {t(tab.label)}
              </button>
            );
          })}
        </div>

        {/* Exhibition Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group cursor-pointer relative overflow-hidden bg-charcoal-900 border border-neutralSoft shadow-subtle flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Corner Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-charcoal/60 backdrop-blur-md flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-ivory">
                  <span className="text-[10px] uppercase tracking-[0.07em] font-sansEng font-medium text-champagne block mb-1">
                    {item.categoryName ? t(item.categoryName) : item.category}
                  </span>
                  <h4
                    className={`text-base text-ivory line-clamp-1 ${
                      language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                    }`}
                  >
                    {t(item.title)}
                  </h4>
                  <p className={`text-[11.5px] text-ivory-300 mt-0.5 line-clamp-1 ${
                    language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
                  }`}>
                    {t(item.caption)}
                  </p>
                </div>
              </div>

              {/* Discreet Provenance Bar */}
              <div className="px-3 py-2 bg-ivory-50 border-t border-neutralSoft flex items-center justify-between text-[10.5px] text-charcoal-500 font-sansEng font-light">
                <span className="truncate max-w-[200px]">{item.attribution}</span>
                <span className="text-forest uppercase tracking-[0.06em] font-semibold">
                  {t({ en: 'View Lightbox', bn: 'বড় করে দেখুন' })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

