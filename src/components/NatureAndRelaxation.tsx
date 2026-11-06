import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const NatureAndRelaxation: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="nature" className="py-24 lg:py-32 bg-ivory-100 text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-neutralSoft">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.08em] text-forest font-sansEng font-semibold block mb-3">
            {t({ en: '04 / Botanical Grounds & Sanctuaries', bn: '০৪ / বাগান ও প্রকৃতির ছোঁয়া' })}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl text-charcoal text-balance-title ${
              language === 'bn' ? 'font-displayBn font-medium leading-[1.28]' : 'font-serifEng font-light leading-[1.14]'
            }`}
          >
            {t({
              en: 'Shaded Mango Orchards & Rose-Lined Walkways.',
              bn: 'ছায়াঘেরা আমবাগান ও গোলাপের সুবাসিত ওয়াকওয়ে।',
            })}
          </h2>
          <p
            className={`text-sm sm:text-base text-charcoal-600 mt-4 leading-relaxed max-w-2xl ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}
          >
            {t({
              en: 'Beyond the neoclassical mansion, Gulmohor preserves the organic greenery of rural Damla. Relax in suspended woven hammocks beneath mature mango trees, stroll along rose-bordered paths, or enjoy the fresh country air.',
              bn: 'রিসোর্ট প্রাঙ্গণে রয়েছে বড় বড় আমগাছের ছায়াদার বাগান এবং লাল গোলাপের সারি। গাছের ছায়ায় টাঙানো হ্যামকে শুয়ে বিশ্রাম নেওয়া কিংবা ওয়াকওয়ে দিয়ে হেঁটে সময় কাটানোর সুন্দর পরিবেশ।',
            })}
          </p>
        </div>

        {/* Asymmetric Botanical Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Focus: The Shaded Mango Hammock (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative overflow-hidden shadow-subtle border border-neutralSoft group">
              <img
                src="/images/gulmohor/nature/nature-mango-trees-shaded-hammock.jpg"
                alt="Woven hammock suspended between mature mango trees in Gulmohor garden"
                loading="eager"
                className="w-full h-[400px] sm:h-[520px] object-cover scale-[1.01] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 text-ivory">
                <span className="text-[10.5px] uppercase tracking-[0.07em] text-champagne font-sansEng font-medium block mb-1">
                  {t({ en: 'The Orchard Canopy', bn: 'আমবাগান' })}
                </span>
                <h3
                  className={`text-2xl sm:text-3xl text-ivory ${
                    language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                  }`}
                >
                  {t({ en: 'Suspended Woven Hammocks', bn: 'গাছের ছায়ায় ঝুলন্ত হ্যামক' })}
                </h3>
                <p className={`text-xs sm:text-sm text-ivory-300 font-light mt-1 max-w-lg leading-relaxed ${
                  language === 'bn' ? 'font-sansBn' : 'font-sansEng'
                }`}>
                  {t({
                    en: 'Old-growth mango boughs catching gentle village breezes—an idyllic corner for reading or quiet contemplation.',
                    bn: 'আমগাছের শীতল ছায়ায় বই পড়া কিংবা অলস সময় কাটানোর নিরিবিলি কোণ।',
                  })}
                </p>
              </div>
            </div>

            {/* Sensory Monograph Callout */}
            <div className="p-4 sm:p-5 bg-ivory border-l-2 border-champagne text-xs text-charcoal-700 shadow-2xs">
              <span className="text-[10px] uppercase tracking-[0.08em] font-sansEng font-semibold text-champagne-dark block mb-1">
                {t({ en: 'Sensory Atmosphere', bn: 'প্রকৃতির স্নিগ্ধ পরশ' })}
              </span>
              <p className={`leading-relaxed text-pretty ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light italic'}`}>
                {t({
                  en: '“Village breezes filtering through mature boughs — no urban traffic, no loudspeaker noise, just birdsong, rustling leaves, and the calm rhythm of rural Munshiganj.”',
                  bn: '“পুরনো আমগাছের ছায়ায় গ্রাম্য স্নিগ্ধ বাতাস—কোনো নাগরিক কোলাহল বা যান্ত্রিক ক্লান্তি নেই, শুধু পাখির ডাক আর পাতার মর্মর ধ্বনি।”',
                })}
              </p>
            </div>
          </div>

          {/* Secondary Botanical Vignettes (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Vignette 1: Rose Walkways */}
            <div className="space-y-3">
              <div className="overflow-hidden shadow-subtle border border-neutralSoft group">
                <img
                  src="/images/gulmohor/nature/nature-blooming-rose-gardens.jpg"
                  alt="Blooming red roses bordering the paved pathway at Gulmohor"
                  loading="lazy"
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div>
                <span className="text-[10.5px] uppercase tracking-[0.07em] text-forest font-sansEng font-semibold block">
                  {t({ en: 'Botanical Promenade', bn: 'গোলাপ বাগান' })}
                </span>
                <h4
                  className={`text-lg sm:text-xl text-charcoal mt-0.5 ${
                    language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                  }`}
                >
                  {t({ en: 'Blooming Crimson Rose Borders', bn: 'লাল গোলাপের বাগান ও ওয়াকওয়ে' })}
                </h4>
                <p className={`text-xs text-charcoal-600 mt-1 leading-relaxed ${
                  language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
                }`}>
                  {t({
                    en: 'Fragrant crimson roses nurtured along the promenade, creating scenic paths between the gardens and pool.',
                    bn: 'হাঁটার পথ জুড়ে ফুটে থাকা লাল গোলাপের বাগান ও বসার শান্ত পরিবেশ।',
                  })}
                </p>
              </div>
            </div>

            {/* Vignette 2: Fountain Pavilion */}
            <div className="pt-6 border-t border-neutralSoft space-y-3">
              <div className="overflow-hidden shadow-subtle border border-neutralSoft group">
                <img
                  src="/images/gulmohor/nature/nature-garden-gazebo-pavilion.jpg"
                  alt="Garden gazebo pavilion shaded by ornamental trees at Gulmohor"
                  loading="lazy"
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div>
                <span className="text-[10.5px] uppercase tracking-[0.07em] text-forest font-sansEng font-semibold block">
                  {t({ en: 'Garden Pavilion & Swings', bn: 'গার্ডেন প্যাভিলিয়ন ও দোলনা' })}
                </span>
                <h4
                  className={`text-lg sm:text-xl text-charcoal mt-0.5 ${
                    language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                  }`}
                >
                  {t({ en: 'Lawn Swings & Shaded Gazebos', bn: 'গার্ডেন দোলনা ও বসার ব্যবস্থা' })}
                </h4>
                <p className={`text-xs text-charcoal-600 mt-1 leading-relaxed ${
                  language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
                }`}>
                  {t({
                    en: 'Handcrafted wooden bench swings suspended on manicured lawns, offering scenic moments for family gatherings and photography.',
                    bn: 'সবুজ লনে কাঠের ঝুলন্ত দোলনায় বসে আড্ডা ও পরিবারের সাথে সুন্দর সময় কাটানোর জায়গা।',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

