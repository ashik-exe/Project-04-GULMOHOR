import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FAQS } from '../data/resortData';

export const FaqAccordion: React.FC = () => {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-timing');

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ivory-200">
        <div className="w-8 h-8 rounded-full bg-champagne/15 flex items-center justify-center text-champagne">
          <HelpCircle className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10.5px] uppercase tracking-[0.07em] font-medium text-charcoal-400 font-sansEng block mb-1">
            {t({ en: 'Guest Information & Clarity', bn: 'অতিথি নির্দেশিকা ও তথ্য' })}
          </span>
          <h3
            className={`text-xl sm:text-2xl text-charcoal-900 ${
              language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
            }`}
          >
            {t({ en: 'Frequently Asked Questions', bn: 'সাধারণ জিজ্ঞাসাসমূহ' })}
          </h3>
        </div>
      </div>

      <div className="divide-y divide-ivory-200">
        {FAQS.map((faq, idx) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="py-4 first:pt-0 last:pb-0 transition-colors">
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left flex items-start justify-between gap-4 py-2 group focus:outline-none min-h-[44px]"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs font-sansEng text-champagne font-medium mt-0.5">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span
                    className={`text-sm sm:text-[15px] font-normal text-charcoal-900 group-hover:text-forest transition-colors ${
                      language === 'bn' ? 'font-sansBn' : 'font-sansEng'
                    }`}
                  >
                    {t(faq.question)}
                  </span>
                </div>
                <div
                  className={`w-7 h-7 rounded-full border border-sand-border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-forest text-ivory border-forest' : 'bg-ivory text-charcoal-600 group-hover:border-forest group-hover:text-forest'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="pl-8 pr-4 pt-2 pb-3 animate-in fade-in duration-300">
                  <p
                    className={`text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed font-sansEng ${
                      language === 'bn' ? 'font-sansBn' : ''
                    }`}
                  >
                    {t(faq.answer)}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
