import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { RESORT_CONTACT } from '../data/resortData';

interface StickyMobileCtaProps {
  onOpenBooking: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenBooking }) => {
  const { language, t } = useLanguage();

  return (
    <aside
      aria-label="Mobile reservation bar"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-charcoal-950/95 backdrop-blur-md border-t border-charcoal-800 px-4 py-2.5 shadow-2xl"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* Direct Telephone Call Button */}
        <a
          href={`tel:${RESORT_CONTACT.primaryPhone}`}
          className={`flex-1 min-h-[44px] py-2.5 px-3 bg-charcoal-900 hover:bg-charcoal-800 border border-charcoal-700 text-white text-xs font-medium uppercase tracking-[0.05em] flex items-center justify-center gap-2 transition-colors ${
            language === 'bn' ? 'font-sansBn' : 'font-sansEng'
          }`}
        >
          <Phone className="w-3.5 h-3.5 text-champagne" />
          <span>{t({ en: 'Direct Call', bn: 'কল করুন' })}</span>
        </a>

        {/* WhatsApp Reservation Terminal Button */}
        <button
          type="button"
          onClick={onOpenBooking}
          className={`flex-[1.5] min-h-[44px] py-2.5 px-4 bg-forest hover:bg-forest-hover text-ivory text-xs font-medium uppercase tracking-[0.05em] flex items-center justify-center gap-2 transition-colors shadow-md ${
            language === 'bn' ? 'font-sansBn' : 'font-sansEng'
          }`}
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>{t({ en: 'Reserve Stay', bn: 'WhatsApp বুকিং' })}</span>
        </button>
      </div>
    </aside>
  );
};
