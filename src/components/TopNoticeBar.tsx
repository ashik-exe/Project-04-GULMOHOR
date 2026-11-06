import React from 'react';
import { Phone, Globe, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { RESORT_CONTACT } from '../data/resortData';

export const TopNoticeBar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <aside
      aria-label="Resort location and contact bar"
      className="bg-charcoal-950 text-ivory-200 text-[11px] sm:text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-charcoal-800/80 font-sansEng"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3">
        {/* Left: Concise Verified Location Note */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-charcoal-300 min-w-0">
          <Compass className="w-3.5 h-3.5 text-champagne shrink-0" />
          <span className="font-normal text-ivory-300 truncate">
            {t({
              en: 'Damla, Sreenagar • 30–40 Mins from Dhaka via Bangabandhu Expressway',
              bn: 'দামলা, শ্রীনগর • এক্সপ্রেসওয়ে দিয়ে ঢাকা থেকে মাত্র ৩০-৪০ মিনিট',
            })}
          </span>
        </div>

        {/* Right: Direct Hotline & Language Switcher */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto shrink-0 text-xs">
          <a
            href={`tel:${RESORT_CONTACT.primaryPhone}`}
            className="flex items-center gap-1.5 text-ivory-200 hover:text-champagne transition-colors whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-champagne shrink-0" />
            <span className="tracking-[0.02em] font-medium">{RESORT_CONTACT.primaryPhoneDisplay}</span>
          </a>

          <div className="h-3 w-px bg-charcoal-800 hidden xs:block" />

          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 text-charcoal-300 hover:text-ivory transition-colors text-[11px] uppercase tracking-[0.06em] font-medium whitespace-nowrap"
            title="Switch Language / ভাষা পরিবর্তন"
          >
            <Globe className="w-3 h-3 text-champagne shrink-0" />
            <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

