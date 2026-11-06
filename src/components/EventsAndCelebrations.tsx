import React from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EventsProps {
  onOpenEventInquiry: () => void;
}

export const EventsAndCelebrations: React.FC<EventsProps> = ({ onOpenEventInquiry }) => {
  const { language, t } = useLanguage();

  return (
    <section id="events" className="py-24 lg:py-32 bg-ivory-100 text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-neutralSoft">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.08em] text-forest font-sansEng font-semibold block mb-3">
            {t({ en: '06 / Celebrations & Private Gatherings', bn: '০৬ / উৎসব ও সামাজিক আয়োজন' })}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl text-charcoal text-balance-title ${
              language === 'bn' ? 'font-displayBn font-medium leading-[1.28]' : 'font-serifEng font-light leading-[1.14]'
            }`}
          >
            {t({
              en: 'Lawn Marquee Weddings, Alumni Reunions & Family Milestones.',
              bn: 'খোলা আকাশের নিচে গায়ে হলুদ, পারিবারিক বিয়ে কিংবা ব্যাচ রিইউনিয়ন।',
            })}
          </h2>
          <p
            className={`text-sm sm:text-base text-charcoal-600 mt-4 leading-relaxed max-w-2xl ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}
          >
            {t({
              en: 'Gulmohor Resort offers a secluded two-acre canvas for unforgettable private occasions. With manicured green lawns, poolside lighting, climate-controlled banquet halls, and dedicated children play areas, we curate seamless gatherings for 50 to 250+ guests.',
              bn: 'সবুজ ঘাসের ওপর সামিয়ানা ও স্টেজ সাজিয়ে খোলা আকাশের নিচে গায়ে হলুদ, পারিবারিক বিয়ে বা ১০০-২০০ জনের ব্যাচ রিইউনিয়নের জন্য গুলমোহর রিসোর্ট এক আদর্শ ভেন্যু।',
            })}
          </p>
        </div>

        {/* Asymmetric Image-Led Celebration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Main Showcase: Weddings & Gaye Holud (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative overflow-hidden shadow-subtle border border-neutralSoft group">
              <img
                src="/images/gulmohor/events/events-wedding-poolside-portrait.jpg"
                alt="Bride and groom wedding photography beside the illuminated pool at Gulmohor"
                loading="eager"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <span className="text-[10.5px] uppercase tracking-[0.07em] text-champagne font-sansEng font-medium block mb-1">
                  {t({ en: 'Private Weddings & Gaye Holud', bn: 'বিয়ে ও গায়ে হলুদ' })}
                </span>
                <h3
                  className={`text-2xl sm:text-3xl text-ivory ${
                    language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                  }`}
                >
                  {t({ en: 'Destination Lawn Weddings & Receptions', bn: 'বিয়ে ও গায়ে হলুদের আয়োজন' })}
                </h3>
              </div>
            </div>
            <p className={`text-xs sm:text-sm text-charcoal-600 leading-relaxed ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}>
              {t({
                en: 'Paved poolside promenades, evening lighting across Corinthian columns, floral stage construction, and custom celebratory banquet menus tailored to your family tradition.',
                bn: 'সুইমিং পুলের চারপাশের মনোরম পরিবেশ, সামিয়ানা, স্টেজ লাইটিং এবং বিয়েবাড়ির সুস্বাদু কাচ্চি ও রোস্টের বিশেষ আয়োজন।',
              })}
            </p>
          </div>

          {/* Secondary Celebrations: Alumni & Corporate Reunions (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Vignette 1: Alumni Reunions */}
            <div className="space-y-3">
              <div className="overflow-hidden shadow-subtle border border-neutralSoft group">
                <img
                  src="/images/gulmohor/events/events-promenade-night-illumination.jpg"
                  alt="Evening illuminated promenade and celebration marquee at Gulmohor"
                  loading="lazy"
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div>
                <span className="text-[10.5px] uppercase tracking-[0.07em] text-forest font-sansEng font-semibold block">
                  {t({ en: 'Alumni & Corporate Off-sites', bn: 'রিইউনিয়ন ও পিকনিক' })}
                </span>
                <h4
                  className={`text-lg sm:text-xl text-charcoal mt-0.5 ${
                    language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                  }`}
                >
                  {t({ en: 'Batch Reunions & Picnics (50–200+ Guests)', bn: 'ব্যাচ রিইউনিয়ন ও পিকনিক (৫০–২০০+ অতিথি)' })}
                </h4>
                <p className={`text-xs text-charcoal-600 mt-1 leading-relaxed ${
                  language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
                }`}>
                  {t({
                    en: 'Verified host of DUFA 9596 and Dhaka Govt Muslim High School 1985 Batch celebrations. Equipped with sound systems, lawn stages, and buffet catering.',
                    bn: 'ঢাকা গভ. মুসলিম হাইস্কুল ৮৫ ব্যাচ এবং ডাফা ৯৫৯৬ রিইউনিয়নের সফল ভেন্যু। সাউন্ড সিস্টেম, স্টেজ ও বুফে খাবারের সুব্যবস্থা রয়েছে।',
                  })}
                </p>
              </div>
            </div>

            {/* Vignette 2: Playground & Children Safety */}
            <div className="pt-6 border-t border-neutralSoft space-y-3">
              <div className="overflow-hidden shadow-subtle border border-neutralSoft group">
                <img
                  src="/images/gulmohor/events/events-kids-playground-zone.jpg"
                  alt="Fenced children playground with slides and swings at Gulmohor"
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div>
                <span className="text-[10.5px] uppercase tracking-[0.07em] text-forest font-sansEng font-semibold block">
                  {t({ en: 'Family Amenities', bn: 'পারিবারিক সুবিধা' })}
                </span>
                <h4
                  className={`text-base text-charcoal mt-0.5 ${
                    language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                  }`}
                >
                  {t({ en: 'Enclosed Children Playground', bn: 'বাচ্চাদের জন্য নিরাপদ খেলার মাঠ' })}
                </h4>
                <p className={`text-xs text-charcoal-600 mt-1 leading-relaxed ${
                  language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
                }`}>
                  {t({
                    en: 'Fenced playground with slides, swings, and merry-go-round rides allowing families to relax while children play safely.',
                    bn: 'বাচ্চাদের জন্য সুরক্ষিত ঘেরা খেলার মাঠ—দোলনা ও স্লিপারে মেতে থাকার আনন্দময় ও নিরাপদ পরিবেশ।',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bespoke Event Concierge Block */}
        <div className="p-8 sm:p-12 bg-charcoal text-ivory border border-charcoal-800 shadow-subtle flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-[10.5px] uppercase tracking-[0.07em] text-champagne font-sansEng font-medium block mb-2">
              {t({ en: 'Exclusive Estate Hire & Proposals', bn: 'ইভেন্ট বুকিং ও আয়োজন' })}
            </span>
            <h3
              className={`text-2xl sm:text-3xl text-ivory ${
                language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
              }`}
            >
              {t({
                en: 'Request a Tailored Lawn & Banquet Proposal',
                bn: 'ইভেন্ট বা পিকনিকের জন্য সরাসরি যোগাযোগ করুন',
              })}
            </h3>
            <p className={`text-xs sm:text-sm text-charcoal-300 mt-2 leading-relaxed ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}>
              {t({
                en: 'Our coordination team coordinates custom marquee setups, lawn sound equipment, banquet menus, and room bookings for complete privacy.',
                bn: 'আপনার অনুষ্ঠানের পরিকল্পনা অনুযায়ী স্টেজ ডেকোরেশন, সাউন্ড সিস্টেম, স্পেশাল মেনু ও রুমের সম্পূর্ণ সমন্বয় নিশ্চিত করা হয়।',
              })}
            </p>
          </div>

          <button
            onClick={onOpenEventInquiry}
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-forest hover:bg-forest-hover text-ivory text-xs sm:text-[13px] font-medium tracking-[0.06em] uppercase transition-all shadow-subtle min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t({ en: 'Launch Event Inquiry', bn: 'ইভেন্ট বুকিংয়ের জন্য যোগাযোগ' })}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

