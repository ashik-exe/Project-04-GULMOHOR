import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ArchitecturalInterlude: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="py-16 sm:py-20 lg:py-24 bg-sand-light border-y border-sand-border relative overflow-hidden">
      {/* Delicate background architectural motif */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
        <span className="font-serifEng text-[180px] sm:text-[240px] tracking-widest text-charcoal select-none">
          GULMOHOR
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-champagne" />
          <span className="text-[10.5px] uppercase tracking-[0.1em] text-champagne-dark font-sansEng font-medium">
            {t({ en: 'The Estate Philosophy', bn: 'গুলমোহর দর্শন' })}
          </span>
          <span className="w-8 h-px bg-champagne" />
        </div>

        <blockquote
          className={`text-xl sm:text-2xl md:text-3xl text-charcoal leading-relaxed font-light ${
            language === 'bn' ? 'font-serifBn' : 'font-serifEng italic'
          }`}
        >
          {t({
            en: '“A sanctuary designed for stillness. White colonnades reflecting in crystal water, mature mango boughs whispering in the southern breeze, and the timeless pace of rural Munshiganj.”',
            bn: '“কোলাহলমুক্ত এক শান্ত প্রাঙ্গণ—যেখানে রোমান স্তম্ভের শুভ্রতা মিশেছে বিক্রমপুরের স্নিগ্ধ প্রকৃতিতে, আর প্রতিটি মুহূর্ত বয়ে আনে অনাবিল পারিবারিক প্রশান্তি।”',
          })}
        </blockquote>

        <div className={`mt-5 flex items-center justify-center gap-3 text-xs text-charcoal-500 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
          <span>{t({ en: 'Damla, Sreenagar • 2 Private Gated Acres', bn: 'দামলা, শ্রীনগর • ২ একরের নিজস্ব চত্বর' })}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalInterlude;
