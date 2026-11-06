import React, { useState } from 'react';
import { ArrowUpRight, BedDouble, Eye, MessageSquare, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PACKAGES, ROOMS } from '../data/resortData';
import { RoomItem } from '../types';

interface AccommodationProps {
  onSelectRoom: (room: RoomItem) => void;
  onOpenBooking: (option?: string) => void;
}

const packageImages: Record<string, string> = {
  'day-couple-meals': '/images/gulmohor/pool/pool-golden-hour-rose-border.jpg',
  'day-room-only': '/images/gulmohor/hero/hero-swimming-pool-patio-loungers.jpg',
  'pool-hourly-pass': '/images/gulmohor/pool/pool-crystal-turquoise-water.jpg',
};

export const Accommodation: React.FC<AccommodationProps> = ({ onSelectRoom, onOpenBooking }) => {
  const { language, t } = useLanguage();
  const [stayCategory, setStayCategory] = useState<'overnight' | 'day'>('overnight');
  const packages = PACKAGES.filter(item => item.type === 'day' || item.type === 'entry');
  const en = language === 'en';

  return <section id="accommodation" className="py-20 lg:py-28 bg-ivory text-charcoal relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-neutralSoft">
        <div className="max-w-3xl">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.08em] text-forest font-sansEng font-semibold block mb-3">{t({ en: '02 / Living spaces & accommodation', bn: '০২ / থাকার ব্যবস্থা ও সুইটসমূহ' })}</span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl text-charcoal ${language === 'bn' ? 'font-displayBn font-medium leading-[1.28]' : 'font-serifEng font-light leading-[1.14]'}`}>{t({ en: 'Find the stay that fits your visit.', bn: 'আপনার ভ্রমণের জন্য উপযুক্ত থাকার ব্যবস্থা বেছে নিন।' })}</h2>
        </div>
        <div className="inline-flex p-1 bg-white border border-neutralSoft self-start md:self-end">
          {(['overnight', 'day'] as const).map(mode => <button key={mode} onClick={() => setStayCategory(mode)} aria-pressed={stayCategory === mode} className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm transition-colors ${stayCategory === mode ? 'bg-coral text-white' : 'text-charcoal-600 hover:text-charcoal'}`}>{mode === 'overnight' ? t({ en: 'Overnight', bn: 'রাত্রিযাপন' }) : t({ en: 'Day visit', bn: 'ডে ভিজিট' })}</button>)}
        </div>
      </div>

      {stayCategory === 'overnight' ? <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7 pt-8 sm:pt-10">
        {ROOMS.map(room => <article key={room.id} className="group bg-white border border-neutralSoft flex flex-col">
          <div className="relative aspect-[16/10] overflow-hidden bg-sand-light"><img src={room.image} alt={t(room.name)} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><span className="absolute top-4 left-4 bg-ivory/95 px-3 py-1.5 text-[10px] uppercase tracking-wider text-forest">{t(room.categoryName || { en: room.category, bn: room.category })}</span><span className="absolute bottom-4 right-4 bg-charcoal/85 text-white px-3 py-1.5 text-sm font-serifEng">৳{room.rateBDT.toLocaleString()} <span className="text-xs">/ {t({ en: 'night', bn: 'রাত' })}</span></span></div>
          <div className="p-5 sm:p-6 flex flex-col flex-1">
            <h3 className={`text-2xl text-charcoal ${language === 'bn' ? 'font-displayBn' : 'font-serifEng'}`}>{t(room.name)}</h3>
            <p className={`mt-2 text-sm leading-relaxed text-charcoal-600 line-clamp-2 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>{t(room.tagline)}</p>
            <div className={`mt-5 border-y border-neutralSoft py-3 grid grid-cols-2 gap-3 text-xs text-charcoal-600 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}><span className="inline-flex gap-2 items-center"><Users className="w-4 h-4 text-forest" />{t(room.capacity)}</span><span className="inline-flex gap-2 items-center"><BedDouble className="w-4 h-4 text-forest" />{t(room.bedConfig)}</span></div>
            <div className="mt-auto pt-5 flex gap-2">
              <button onClick={() => onSelectRoom(room)} className="flex-1 inline-flex justify-center items-center gap-2 border border-charcoal/30 px-3 py-3 text-xs hover:border-forest hover:text-forest transition-colors"><Eye className="w-4 h-4" />{t({ en: 'Specifications', bn: 'বিস্তারিত' })}</button>
              <button onClick={() => onOpenBooking(room.id)} className="flex-1 inline-flex justify-center items-center gap-2 bg-coral text-white px-3 py-3 text-xs hover:bg-coral-hover transition-colors"><MessageSquare className="w-4 h-4" />{t({ en: 'Enquire', bn: 'জানুন' })}</button>
            </div>
          </div>
        </article>)}
      </div> : <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7 pt-8 sm:pt-10">
        {packages.map(pkg => <article key={pkg.id} className="group bg-white border border-neutralSoft flex flex-col">
          <div className="relative aspect-[16/10] overflow-hidden bg-sand-light"><img src={packageImages[pkg.id] || '/images/gulmohor/pool/pool-garden-pathway-glimpse.jpg'} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><span className="absolute top-4 left-4 bg-ivory/95 px-3 py-1.5 text-[10px] uppercase tracking-wider text-forest">{t({ en: 'Day experience', bn: 'ডে অভিজ্ঞতা' })}</span><span className="absolute bottom-4 right-4 bg-charcoal/85 text-white px-3 py-1.5 text-sm font-serifEng">৳{typeof pkg.rateBDT === 'number' ? pkg.rateBDT.toLocaleString() : pkg.rateBDT} <span className="text-xs">/ {t(pkg.rateUnit)}</span></span></div>
          <div className="p-5 sm:p-6 flex flex-col flex-1"><h3 className={`text-2xl text-charcoal ${language === 'bn' ? 'font-displayBn' : 'font-serifEng'}`}>{t(pkg.title)}</h3><p className={`mt-2 text-sm text-charcoal-600 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>{t(pkg.guestCount)} · {t(pkg.timing)}</p><ul className={`mt-5 border-t border-neutralSoft pt-4 space-y-2 text-xs text-charcoal-600 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>{pkg.inclusions.slice(0, 4).map((item, index) => <li key={index}>— {t(item)}</li>)}</ul>{pkg.caveatNote && <p className={`mt-4 text-[11px] text-charcoal-500 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>{t(pkg.caveatNote)}</p>}<button onClick={() => onOpenBooking(pkg.id)} className="mt-auto w-full inline-flex justify-center items-center gap-2 bg-coral text-white px-4 py-3 mt-5 text-xs hover:bg-coral-hover transition-colors"><MessageSquare className="w-4 h-4" />{t({ en: 'Enquire about this visit', bn: 'এই ভিজিট সম্পর্কে জানুন' })}<ArrowUpRight className="w-3.5 h-3.5" /></button></div>
        </article>)}
      </div>}

      <p className={`mt-8 max-w-3xl mx-auto text-center text-[11px] text-charcoal-500 ${en ? 'font-sansEng' : 'font-sansBn'}`}>{t({ en: 'Rates are based on available 2026 records and remain subject to resort confirmation. Availability, applicable terms and any advance payment are confirmed directly.', bn: 'ভাড়াগুলো ২০২৬ সালের প্রাপ্ত তথ্য অনুযায়ী, রিসোর্ট কর্তৃপক্ষের নিশ্চিতকরণ সাপেক্ষ। সুবিধা, প্রযোজ্য শর্ত ও অগ্রিম পেমেন্ট সরাসরি নিশ্চিত করুন।' })}</p>
    </div>
  </section>;
};
