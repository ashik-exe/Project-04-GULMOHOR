import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PoolAndLeisure: React.FC = () => {
  const { language, t } = useLanguage();
  const [lightingMode, setLightingMode] = useState<'day' | 'night'>('day');

  return (
    <section id="pool" className="py-24 lg:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutralSoft">
          <div className="max-w-3xl">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.08em] text-forest font-sansEng font-semibold block mb-3">
              {t({ en: '03 / Swimming Pool & Leisure', bn: '০৩ / সুইমিং পুল ও অবসর' })}
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl text-charcoal text-balance-title ${
                language === 'bn' ? 'font-displayBn font-medium leading-[1.28]' : 'font-serifEng font-light leading-[1.14]'
              }`}
            >
              {t({
                en: 'A 70-Foot Crystal Swimming Pool Framed by Blooming Roses.',
                bn: '৭০ ফুটের পরিচ্ছন্ন সুইমিং পুল ও চারপাশের গোলাপ বাগান।',
              })}
            </h2>
          </div>

          {/* Minimalist Day / Night Mode Switcher */}
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-ivory-200 border border-neutralSoft rounded-full self-start md:self-end shadow-xs">
            <button
              onClick={() => setLightingMode('day')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] uppercase tracking-[0.06em] font-medium transition-all ${
                lightingMode === 'day'
                  ? 'bg-ivory text-charcoal shadow-subtle'
                  : 'text-charcoal-500 hover:text-charcoal'
              }`}
            >
              <Sun className={`w-3.5 h-3.5 ${lightingMode === 'day' ? 'text-champagne' : ''}`} />
              <span>{t({ en: 'Daylight Serenity', bn: 'দিনের রূপ' })}</span>
            </button>
            <button
              onClick={() => setLightingMode('night')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] uppercase tracking-[0.06em] font-medium transition-all ${
                lightingMode === 'night'
                  ? 'bg-charcoal text-ivory shadow-subtle'
                  : 'text-charcoal-500 hover:text-charcoal'
              }`}
            >
              <Moon className={`w-3.5 h-3.5 ${lightingMode === 'night' ? 'text-champagne' : ''}`} />
              <span>{t({ en: 'Evening Luminescence', bn: 'রাতের নীল আলো' })}</span>
            </button>
          </div>
        </div>

        {/* Centerpiece Panoramic Visual Frame with Seamless Crossfade */}
        <div className="pt-12">
          <div className="relative overflow-hidden shadow-subtle border border-neutralSoft group bg-charcoal-950">
            {/* Top Architectural Blueprint Tag */}
            <div className="absolute top-4 left-4 z-20 bg-charcoal-950/80 backdrop-blur-md px-3.5 py-1.5 border border-champagne/30 text-ivory text-[11px] font-sansEng flex items-center gap-3">
              <span className="text-champagne font-medium uppercase tracking-[0.06em]">
                {t({ en: 'Basin Dimensions', bn: 'পুলের মাপ' })}
              </span>
              <span className="text-ivory-300">70 ft × 35 ft</span>
              <span className="w-1 h-1 rounded-full bg-champagne" />
              <span className="text-ivory-300">{t({ en: 'Depth: 4.5 – 6.5 ft', bn: 'গভীরতা: ৪.৫ – ৬.৫ ফুট' })}</span>
            </div>

            {/* Day Layer */}
            <div
              className={`relative h-[420px] sm:h-[520px] lg:h-[600px] w-full transition-opacity duration-700 ${
                lightingMode === 'day' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src="/images/gulmohor/pool/pool-crystal-turquoise-water.jpg"
                alt="Crystal clear turquoise swimming pool in daytime daylight at Gulmohor Resort"
                loading="eager"
                className="w-full h-full object-cover scale-[1.01] transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-ivory">
                <div className="max-w-xl">
                  <span className="text-[10.5px] uppercase tracking-[0.07em] font-sansEng font-medium text-champagne block mb-1">
                    {t({ en: 'Daylight Atmosphere', bn: 'দিনের আলো' })}
                  </span>
                  <h3
                    className={`text-xl sm:text-2xl lg:text-3xl ${
                      language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                    }`}
                  >
                    {t({
                      en: 'Sun-Drenched Patio & Reclining Loungers',
                      bn: 'পরিচ্ছন্ন নীল পানি, গোলাপ বাগান ও সান লাউঞ্জার',
                    })}
                  </h3>
                  <p className={`text-xs sm:text-sm text-ivory-300 font-light mt-1.5 leading-relaxed text-pretty ${
                    language === 'bn' ? 'font-sansBn' : 'font-sansEng'
                  }`}>
                    {t({
                      en: 'Paved stone surrounds lined with blooming roses and umbrellas, providing calm vantage points over the water.',
                      bn: 'পুলের চারপাশে পাথরে বাঁধানো ওয়াকওয়ে, লাল গোলাপের বাগান এবং ছায়াদার প্যারাসল।',
                    })}
                  </p>
                </div>

                <div className="bg-charcoal/85 backdrop-blur-md px-5 py-3.5 border border-ivory/20 self-start sm:self-auto shadow-sm">
                  <span className={`block text-[10px] text-ivory-300 uppercase tracking-[0.06em] font-medium ${
                    language === 'bn' ? 'font-sansBn' : 'font-sansEng'
                  }`}>
                    {t({ en: 'Hourly Visitor Pass', bn: 'ভিজিটর পুল পাস' })}
                  </span>
                  <span className="text-xl font-serifEng font-medium text-ivory">৳400 / hr</span>
                  <span className={`block text-[10.5px] text-champagne font-normal mt-0.5 ${
                    language === 'bn' ? 'font-sansBn' : 'font-sansEng'
                  }`}>
                    {t({ en: 'Free for Resident Guests', bn: 'আবাসিক অতিথিদের জন্য ফ্রি' })}
                  </span>
                </div>
              </div>
            </div>

            {/* Night Layer */}
            <div
              className={`absolute inset-0 h-[420px] sm:h-[520px] lg:h-[600px] w-full transition-opacity duration-700 ${
                lightingMode === 'night' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src="/images/gulmohor/pool/pool-mansion-facade-reflection.jpg"
                alt="Nighttime illuminated swimming pool reflecting neoclassical columns at Gulmohor Resort"
                loading="eager"
                className="w-full h-full object-cover scale-[1.01] transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/30 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-ivory">
                <div className="max-w-xl">
                  <span className="text-[10.5px] uppercase tracking-[0.07em] font-sansEng font-medium text-champagne block mb-1">
                    {t({ en: 'Night Atmosphere', bn: 'রাতের পরিবেশ' })}
                  </span>
                  <h3
                    className={`text-xl sm:text-2xl lg:text-3xl ${
                      language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                    }`}
                  >
                    {t({
                      en: 'Underwater LED Luminescence & Architectural Reflection',
                      bn: 'আন্ডারওয়াটার এলইডি আলো ও রিসোর্ট ভবনের প্রতিফলন',
                    })}
                  </h3>
                  <p className={`text-xs sm:text-sm text-ivory-300 font-light mt-1.5 leading-relaxed text-pretty ${
                    language === 'bn' ? 'font-sansBn' : 'font-sansEng'
                  }`}>
                    {t({
                      en: 'At dusk, submerged lighting illuminates the pool, creating a calm atmosphere beneath the evening sky.',
                      bn: 'সন্ধ্যা নামতেই পানির নিচের নীল আলো এবং শান্ত চারপাশ রাতের পরিবেশকে আকর্ষণীয় করে তোলে।',
                    })}
                  </p>
                </div>

                <div className="bg-charcoal/85 backdrop-blur-md px-5 py-3.5 border border-ivory/20 self-start sm:self-auto shadow-sm">
                  <span className={`block text-[10px] text-ivory-300 uppercase tracking-[0.06em] font-medium ${
                    language === 'bn' ? 'font-sansBn' : 'font-sansEng'
                  }`}>
                    {t({ en: 'Night Swimming', bn: 'রাতের পুল ব্যবহার' })}
                  </span>
                  <span className={`text-xl font-medium text-champagne ${language === 'bn' ? 'font-sansBn' : 'font-serifEng'}`}>
                    {t({ en: 'Included in Stay', bn: 'প্যাকেজে অন্তর্ভুক্ত' })}
                  </span>
                  <span className={`block text-[10.5px] text-ivory-300 font-light mt-0.5 ${
                    language === 'bn' ? 'font-sansBn' : 'font-sansEng'
                  }`}>
                    {t({ en: 'Confirm pool hours before arrival', bn: 'আসার আগে পুলের সময় জেনে নিন' })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Specifications Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-neutralSoft divide-y sm:divide-y-0 sm:divide-x divide-neutralSoft">
            <div className="pt-4 sm:pt-0 sm:px-4 first:pl-0">
              <span className="text-[11px] uppercase tracking-[0.07em] text-forest font-sansEng font-semibold block mb-1">
                {t({ en: 'Scale & Dimensions', bn: 'আয়তন ও সাইজ' })}
              </span>
              <h4 className={`text-base font-normal text-charcoal ${language === 'bn' ? 'font-serifBn font-medium' : 'font-serifEng'}`}>
                {t({ en: '70 ft × 35 ft Basin', bn: '৭০ ফুট × ৩৫ ফুট পুল' })}
              </h4>
              <p className={`text-xs text-charcoal-600 mt-1 leading-relaxed text-pretty ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                {t({
                  en: 'Generous footprint providing ample room for morning laps and leisurely afternoons.',
                  bn: 'প্রশস্ত আয়তন, যেখানে পরিবার ও বন্ধুবান্ধব নিয়ে স্বচ্ছন্দে সাঁতার কাটা যায়।',
                })}
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4">
              <span className="text-[11px] uppercase tracking-[0.07em] text-forest font-sansEng font-semibold block mb-1">
                {t({ en: 'Water Hygiene', bn: 'পানির পরিচ্ছন্নতা' })}
              </span>
              <h4 className={`text-base font-normal text-charcoal ${language === 'bn' ? 'font-serifBn font-medium' : 'font-serifEng'}`}>
                {t({ en: 'Multi-Stage Filtration', bn: 'মাল্টি-স্টেজ ফিল্ট্রেশন' })}
              </h4>
              <p className={`text-xs text-charcoal-600 mt-1 leading-relaxed text-pretty ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                {t({
                  en: 'Automated filtration and circulation system ensuring clean and hygienic water at all times.',
                  bn: 'আধুনিক ফিল্ট্রেশন ব্যবস্থার মাধ্যমে সার্বক্ষণিক পরিষ্কার ও স্বাস্থ্যসম্মত পানি বজায় রাখা হয়।',
                })}
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4">
              <span className="text-[11px] uppercase tracking-[0.07em] text-forest font-sansEng font-semibold block mb-1">
                {t({ en: 'Surroundings', bn: 'চারপাশের পরিবেশ' })}
              </span>
              <h4 className={`text-base font-normal text-charcoal ${language === 'bn' ? 'font-serifBn font-medium' : 'font-serifEng'}`}>
                {t({ en: 'Rose Gardens & Patios', bn: 'গোলাপ বাগান ও ওয়াকওয়ে' })}
              </h4>
              <p className={`text-xs text-charcoal-600 mt-1 leading-relaxed text-pretty ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                {t({
                  en: 'Fragrant beds of blooming red roses flank the poolside walkways with calm seating spots.',
                  bn: 'পুলের পাশেই ফুটে থাকা লাল গোলাপের বাগান ও বিশ্রামের জন্য সাজানো বসার স্থান।',
                })}
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4">
              <span className="text-[11px] uppercase tracking-[0.07em] text-forest font-sansEng font-semibold block mb-1">
                {t({ en: 'Facilities', bn: 'সুবিধাসমূহ' })}
              </span>
              <h4 className={`text-base font-normal text-charcoal ${language === 'bn' ? 'font-serifBn font-medium' : 'font-serifEng'}`}>
                {t({ en: 'Changing Rooms & Showers', bn: 'চেঞ্জিং রুম ও শাওয়ার' })}
              </h4>
              <p className={`text-xs text-charcoal-600 mt-1 leading-relaxed text-pretty ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                {t({
                  en: 'Private changing rooms and fresh water showers available for all guests.',
                  bn: 'অতিথিদের জন্য আলাদা পরিচ্ছন্ন চেঞ্জিং রুম ও শাওয়ারের সুব্যবস্থা রয়েছে।',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoolAndLeisure;
