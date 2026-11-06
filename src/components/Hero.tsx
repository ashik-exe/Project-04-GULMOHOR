import React from 'react';
import { ArrowDownRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { language, t } = useLanguage();

  return (
    <section className="relative w-full min-h-[calc(100vh-96px)] min-h-[calc(100dvh-96px)] flex flex-col justify-between overflow-hidden bg-charcoal-950 text-ivory">
      {/* Background Architectural Canvas — Authentic 1672x941 High-Fidelity Asset */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture className="w-full h-full">
          <source
            type="image/webp"
            srcSet="/images/gulmohor/hero/Luxurious%20Poolside%20Colonial%20Mansion.webp"
          />
          <img
            src="/images/gulmohor/hero/Luxurious%20Poolside%20Colonial%20Mansion.png"
            alt="Gulmohor Resort Luxurious Poolside Colonial Mansion and 70-Foot Swimming Pool in Damla Sreenagar"
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-cover object-[center_35%] lg:object-[58%_36%]"
          />
        </picture>
        {/* Directional scrim: Targeted contrast on left for editorial narrative, fading out smoothly towards center and right so the colonial architecture, facade, balconies, and pool shine in their natural daylight clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-charcoal-950/35 to-transparent lg:from-charcoal-950/75 lg:via-charcoal-950/20 lg:to-transparent" />
        {/* Subtle top ambient feathering for clean header integration */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal-950/40 to-transparent pointer-events-none" />
      </div>

      {/* Main Editorial Hero Block */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 sm:px-6 xl:px-6 2xl:px-8 pt-6 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 flex-1 flex flex-col justify-center">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl translate-y-1 sm:translate-y-4 md:translate-y-8 lg:translate-y-12 xl:translate-y-14 transition-transform duration-300">
          {/* Location & Status Dateline Pill — Clear & Non-Technical */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-950/60 border border-champagne/30 text-champagne text-xs font-medium mb-3 sm:mb-5 shadow-sm backdrop-blur-[2px]">
            <span className="w-2 h-2 rounded-full bg-champagne animate-pulse flex-shrink-0" />
            <span className={`text-[11px] sm:text-[12px] leading-snug ${
              language === 'bn'
                ? 'font-sansBn font-normal tracking-normal'
                : 'font-sansEng font-normal tracking-wide'
            }`}>
              {t({
                en: 'Damla, Sreenagar • 30–40 Mins from South Dhaka via N8 Expressway',
                bn: 'দামলা, শ্রীনগর • এক্সপ্রেসওয়ে দিয়ে ঢাকা থেকে মাত্র ৩০-৪০ মিনিট',
              })}
            </span>
          </div>

          {/* Sized & Proportioned Editorial Headline with Intentional Line Breaks */}
          <h1
            className={`text-2xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[54px] text-ivory mb-3 sm:mb-4 lg:mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] ${
              language === 'bn'
                ? 'font-displayBn font-medium leading-[1.3] tracking-normal'
                : 'font-serifEng font-normal sm:font-light lg:font-normal leading-[1.14] tracking-[-0.015em]'
            }`}
          >
            {language === 'bn' ? (
              <>
                মুন্সীগঞ্জের শান্ত প্রকৃতির মাঝে
                <br className="hidden sm:inline" /> এক নিরিবিলি অবকাশ।
              </>
            ) : (
              <>
                A Peaceful <em className="font-fraunces italic text-champagne">Countryside Retreat</em>
                <br className="hidden sm:inline" /> in Munshiganj.
              </>
            )}
          </h1>

          {/* Concise, Natural Narrative Body */}
          <p
            className={`text-sm sm:text-base md:text-[17px] text-ivory-100/95 max-w-xl mb-5 sm:mb-7 lg:mb-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] ${
              language === 'bn'
                ? 'font-sansBn font-normal leading-[1.75]'
                : 'font-sansEng font-light leading-relaxed'
            }`}
          >
            {t({
              en: 'Two private acres featuring a 70-foot swimming pool, shaded mango groves, and comfortable suites just 30 minutes from South Dhaka via the Bangabandhu Expressway.',
              bn: 'বঙ্গবন্ধু এক্সপ্রেসওয়ে ধরে মাত্র ৩০-৪০ মিনিটে চলে আসুন সবুজে ঘেরা গুলমোহরে। ৭০ ফুট সুইমিং পুল, আমবাগান আর পরিবার নিয়ে সুন্দর সময় কাটানোর পূর্ণ নিশ্চয়তা।',
            })}
          </p>

          {/* Restrained Luxury Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenBooking}
              className={`inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-forest hover:bg-forest-hover text-ivory shadow-editorial hover:shadow-lg transition-all duration-300 active:scale-[0.98] group ${
                language === 'bn'
                  ? 'font-sansBn font-medium text-xs sm:text-sm tracking-normal'
                  : 'font-sansEng font-medium text-xs sm:text-[13px] tracking-[0.04em] uppercase'
              }`}
            >
              <span>{t({ en: 'Reserve via WhatsApp', bn: 'WhatsApp-এ বুকিং করুন' })}</span>
              <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>

            <a
              href="#experience"
              className={`inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-charcoal-950/40 hover:bg-charcoal-950/60 text-ivory border border-white/20 hover:border-champagne/60 transition-all duration-300 group ${
                language === 'bn'
                  ? 'font-sansBn font-medium text-xs sm:text-sm tracking-normal'
                  : 'font-sansEng font-medium text-xs sm:text-[13px] tracking-[0.03em] uppercase'
              }`}
            >
              <span>{t({ en: 'Explore Resort', bn: 'রিসোর্ট পরিচিতি' })}</span>
              <ArrowDown className="w-3.5 h-3.5 text-champagne transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Hairline Architectural Specifications Strip — Clean, Restrained, Integrated Over Canvas Without Blur Filter */}
      <div className="relative z-10 border-t border-white/10 bg-charcoal-950/30 pt-3.5 pb-16 sm:pb-4 sm:py-4.5 mt-auto">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-6 2xl:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {/* Spec 1: Swimming Pool */}
            <div className="pr-3 sm:pr-4 lg:pr-6">
              <span className="block text-champagne text-[10px] sm:text-xs uppercase tracking-[0.08em] font-sansEng font-medium">
                {t({ en: 'Swimming Pool', bn: 'সুইমিং পুল' })}
              </span>
              <span className="block text-xs sm:text-base font-serifEng text-ivory mt-0.5 font-normal tracking-wide">
                {t({ en: '70 ft × 35 ft Basin', bn: '৭০ ফুট × ৩৫ ফুট পুল' })}
              </span>
              <span className="block text-[10.5px] sm:text-[11.5px] text-ivory-200/70 font-sansEng font-light leading-snug">
                {t({ en: 'Fresh Water & Private Showers', bn: 'পরিচ্ছন্ন পানি ও শাওয়ার সুবিধা' })}
              </span>
            </div>

            {/* Spec 2: Travel Distance */}
            <div className="pl-3 sm:pl-4 lg:pl-6 border-l border-white/10">
              <span className="block text-champagne text-[10px] sm:text-xs uppercase tracking-[0.08em] font-sansEng font-medium">
                {t({ en: 'Travel Time', bn: 'দূরত্ব ও সময়' })}
              </span>
              <span className="block text-xs sm:text-base font-serifEng text-ivory mt-0.5 font-normal tracking-wide">
                {t({ en: '30–40 Mins from Dhaka', bn: 'ঢাকা থেকে ৩০-৪০ মিনিট' })}
              </span>
              <span className="block text-[10.5px] sm:text-[11.5px] text-ivory-200/70 font-sansEng font-light leading-snug">
                {t({ en: 'Via Bangabandhu Expressway', bn: 'এক্সপ্রেসওয়ে দিয়ে সরাসরি যাতায়াত' })}
              </span>
            </div>

            {/* Spec 3: Compound Privacy */}
            <div className="pt-2.5 sm:pt-0 pr-3 sm:pr-4 lg:pr-6 border-t sm:border-t-0 lg:border-l border-white/10">
              <span className="block text-champagne text-[10px] sm:text-xs uppercase tracking-[0.08em] font-sansEng font-medium">
                {t({ en: 'Private Grounds', bn: 'নিরাপদ পরিবেশ' })}
              </span>
              <span className="block text-xs sm:text-base font-serifEng text-ivory mt-0.5 font-normal tracking-wide">
                {t({ en: '2-Acre Gated Compound', bn: '২ একরের নিজস্ব প্রাঙ্গণ' })}
              </span>
              <span className="block text-[10.5px] sm:text-[11.5px] text-ivory-200/70 font-sansEng font-light leading-snug">
                {t({ en: 'Boundary Wall & 20+ Parking', bn: 'বাউন্ডারি ওয়াল ও ২০+ গাড়ির পার্কিং' })}
              </span>
            </div>

            {/* Spec 4: Accommodation */}
            <div className="pt-2.5 sm:pt-0 pl-3 sm:pl-4 lg:pl-6 border-t sm:border-t-0 border-l border-white/10">
              <span className="block text-champagne text-[10px] sm:text-xs uppercase tracking-[0.08em] font-sansEng font-medium">
                {t({ en: 'Accommodation', bn: 'থাকার ব্যবস্থা' })}
              </span>
              <span className="block text-xs sm:text-base font-serifEng text-ivory mt-0.5 font-normal tracking-wide">
                {t({ en: 'Balcony Suites & Rooms', bn: 'ব্যালকনি রুম ও স্যুট' })}
              </span>
              <span className="block text-[10.5px] sm:text-[11.5px] text-ivory-200/70 font-sansEng font-light leading-snug">
                {t({ en: 'Day Outing & Overnight Stays', bn: 'ডে আউট ও রাত্রিযাপন সুবিধা' })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
