import React from 'react';
import { Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { RESORT_CONTACT } from '../data/resortData';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-charcoal text-ivory font-sansEng pt-20 pb-28 md:pb-16 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-charcoal-800">
          {/* Column 1: Monograph & Philosophy (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/images/gulmohor/brand/brand-official-logo.jpg"
                alt="Gulmohor Logo"
                className="w-12 h-12 rounded-full border border-champagne/40 object-cover"
              />
              <div>
                <span
                  className={`text-xl font-normal text-white tracking-[0.03em] block ${
                    language === 'bn' ? 'font-serifBn font-medium' : 'font-serifEng'
                  }`}
                >
                  {t({ en: 'GULMOHOR RESORT', bn: 'গুলমোহর রিসোর্ট' })}
                </span>
                <span className="text-[10.5px] tracking-[0.08em] uppercase text-charcoal-400 font-sansEng font-medium mt-0.5 block">
                  {t({ en: 'Boutique Retreat & Restaurant • Munshiganj', bn: 'বুটিক রিট্রিট ও রেস্টুরেন্ট • মুন্সীগঞ্জ' })}
                </span>
              </div>
            </div>

            <p className={`text-xs sm:text-sm text-charcoal-300 font-light leading-relaxed max-w-md ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng'
            }`}>
              {t({
                en: 'A neoclassical architectural sanctuary centered around a 70-foot swimming pool and lush gardens, located 30–40 minutes from South Dhaka via the Bangabandhu Expressway.',
                bn: 'মুন্সীগঞ্জের শ্রীনগরে অবস্থিত নিওক্লাসিক্যাল স্থাপত্য, ৭০ ফুট পরিচ্ছন্ন সুইমিং পুল ও গোলাপ বাগানের এক শান্ত পারিবারিক অবকাশ কেন্দ্র।',
              })}
            </p>

            <div className="pt-1">
              <a
                href={RESORT_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.06em] text-champagne hover:text-white transition-colors font-medium ${
                  language === 'bn' ? 'font-sansBn' : 'font-sansEng'
                }`}
              >
                <span>{t({ en: 'Official Facebook Page (5.7K+ Followers)', bn: 'অফিসিয়াল ফেসবুক পেজ (৫.৭K+ অনুসারী)' })}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Architectural Site Index (3 Cols) */}
          <div className="lg:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.08em] text-champagne font-sansEng font-medium block mb-5">
              {t({ en: 'Estate Index', bn: 'সাইট ইনডেক্স' })}
            </span>
            <ul className={`space-y-2.5 text-xs text-charcoal-300 font-light ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
              <li>
                <a href="#experience" className="hover:text-champagne transition-colors">
                  {t({ en: 'The Experience', bn: 'রিসোর্ট পরিচিতি' })}
                </a>
              </li>
              <li>
                <a href="#accommodation" className="hover:text-champagne transition-colors">
                  {t({ en: 'Suites & Stay', bn: 'রুম ও স্যুট' })}
                </a>
              </li>
              <li>
                <a href="#pool" className="hover:text-champagne transition-colors">
                  {t({ en: 'Swimming Pool & Leisure', bn: 'সুইমিং পুল ও অবসর' })}
                </a>
              </li>
              <li>
                <a href="#nature" className="hover:text-champagne transition-colors">
                  {t({ en: 'Gardens & Grounds', bn: 'বাগান ও হ্যামক' })}
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-champagne transition-colors">
                  {t({ en: 'Dining & Live BBQ', bn: 'রেস্টুরেন্ট ও বারবিকিউ' })}
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-champagne transition-colors">
                  {t({ en: 'Events & Celebrations', bn: 'ইভেন্ট ও উৎসব' })}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-champagne transition-colors">
                  {t({ en: 'Photo Gallery', bn: 'বাস্তব ছবি গ্যালারি' })}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-champagne transition-colors">
                  {t({ en: 'Location & Directions', bn: 'লোকেশন ও যাতায়াত' })}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Estate Provenance & Reception (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.08em] text-champagne font-sansEng font-medium block">
              {t({ en: 'Reception & Coordinates', bn: 'ঠিকানা ও অবস্থান' })}
            </span>

            <div className="space-y-3 text-xs text-charcoal-300 font-sansEng font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne mt-0.5 flex-shrink-0" />
                <span>{t(RESORT_CONTACT.address)}</span>
              </div>
              <div className="p-3 bg-charcoal-900 border border-charcoal-800 text-[11px] text-charcoal-300 font-sansEng font-light">
                <span className="text-champagne uppercase tracking-[0.06em] font-medium block mb-1">
                  {t({ en: 'Landmark / Highway Access', bn: 'চেনার উপায় ও হাইওয়ে' })}
                </span>
                {t(RESORT_CONTACT.landmark)}
              </div>
              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-champagne flex-shrink-0" />
                <a
                  href={`tel:${RESORT_CONTACT.primaryPhone}`}
                  className="font-medium text-white hover:text-champagne transition-colors tracking-wide"
                >
                  {RESORT_CONTACT.primaryPhoneDisplay} (WhatsApp Hotline)
                </a>
              </div>
            </div>

            <div className="p-3.5 bg-charcoal-900 border border-charcoal-800 flex items-center gap-2.5 text-[11px] text-charcoal-300 font-sansEng font-light">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{t({ en: '100% Authentic Property Media • Zero Stock Photos', bn: '১০০% আসল ছবি • কোনো স্টক ছবি নেই' })}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Editorial Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500 font-sansEng font-light">
          <div>
            © {new Date().getFullYear()} Gulmohor Resort & Restaurant. All authentic assets preserved.
          </div>
          <div className="flex items-center gap-2 text-charcoal-400">
            <span>Neoclassical Boutique Retreat Demo</span>
            <span className="text-charcoal-600">•</span>
            <span>Damla, Sreenagar, Munshiganj</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
