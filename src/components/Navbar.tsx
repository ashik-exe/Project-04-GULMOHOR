import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { RESORT_CONTACT } from '../data/resortData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#experience', label: { en: 'The Estate', bn: 'পরিচিতি' } },
    { href: '#accommodation', label: { en: 'Suites & Stay', bn: 'রুম ও স্যুট' } },
    { href: '#pool', label: { en: 'Swimming Pool', bn: 'সুইমিং পুল' } },
    { href: '#nature', label: { en: 'Gardens', bn: 'বাগান ও প্রকৃতি' } },
    { href: '#dining', label: { en: 'Dining & BBQ', bn: 'ডাইনিং ও বারবিকিউ' } },
    { href: '#events', label: { en: 'Celebrations', bn: 'ইভেন্ট ও উৎসব' } },
    { href: '#gallery', label: { en: 'Gallery', bn: 'গ্যালারি' } },
    { href: '#location', label: { en: 'Location', bn: 'লোকেশন' } },
  ];

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleOpenBooking = () => {
    setMobileMenuOpen(false);
    onOpenBooking();
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-subtle border-b border-neutralSoft py-2.5 sm:py-3'
          : 'bg-ivory py-3 sm:py-3.5 border-b border-neutralSoft/60'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 xl:px-4 2xl:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
          <img
            src="/images/gulmohor/brand/brand-official-logo.jpg"
            alt="Gulmohor Resort Official Emblem"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-champagne/50 shadow-subtle group-hover:border-forest transition-colors shrink-0"
          />
          <div className="flex flex-col">
            <span
              className={`text-base sm:text-xl xl:text-[20px] font-normal tracking-[0.03em] text-charcoal group-hover:text-forest transition-colors leading-none ${
                language === 'bn' ? 'font-serifBn font-semibold' : 'font-serifEng font-medium'
              }`}
            >
              {t({ en: 'GULMOHOR', bn: 'গুলমোহর' })}
            </span>
            <span
              className={`text-[9px] sm:text-[10px] text-charcoal-500 mt-0.5 sm:mt-1 leading-tight hidden xs:block ${
                language === 'bn' ? 'font-sansBn tracking-normal font-medium' : 'font-sansEng tracking-[0.06em] uppercase font-medium'
              }`}
            >
              {t({ en: 'Boutique Retreat • Munshiganj', bn: 'বুটিক রিট্রিট • শ্রীনগর' })}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — Hidden below xl (1280px) to prevent cramped wrapping on tablet landscape */}
        <nav className="hidden xl:flex items-center gap-2.5 2xl:gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-1 text-charcoal-700 hover:text-forest transition-colors whitespace-nowrap group ${
                language === 'bn'
                  ? 'font-sansBn text-[12.5px] 2xl:text-[14px] font-medium'
                  : 'font-sansEng text-[12.5px] 2xl:text-[14px] font-normal hover:font-medium tracking-[0.01em]'
              }`}
            >
              <span>{t(link.label)}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Desktop CTA + Language Switcher (1280px+) */}
        <div className="hidden xl:flex items-center gap-2.5 2xl:gap-4 shrink-0">
          {/* Desktop Language Switcher */}
          <div className="flex items-center bg-ivory-200 border border-neutralSoft rounded-full p-0.5 text-xs font-medium font-sansEng">
            <button
              type="button"
              onClick={() => setLanguage('bn')}
              className={`px-2.5 py-1 rounded-full transition-all text-[11px] 2xl:text-[11.5px] ${
                language === 'bn'
                  ? 'bg-forest text-ivory shadow-xs font-semibold'
                  : 'text-charcoal-600 hover:text-charcoal'
              }`}
              title="বাংলা ভাষা নির্বাচন করুন"
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all text-[11px] 2xl:text-[11.5px] ${
                language === 'en'
                  ? 'bg-forest text-ivory shadow-xs font-medium'
                  : 'text-charcoal-600 hover:text-charcoal'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          <a
            href={`tel:${RESORT_CONTACT.primaryPhone}`}
            className="flex items-center gap-1.5 text-[11.5px] 2xl:text-xs text-charcoal-600 hover:text-forest transition-colors tracking-[0.02em] font-medium font-sansEng whitespace-nowrap"
            title="Call Resort Hotline"
          >
            <Phone className="w-3.5 h-3.5 text-forest shrink-0" />
            <span>{RESORT_CONTACT.primaryPhoneDisplay}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 2xl:gap-2 px-3.5 2xl:px-5 py-2 2xl:py-2.5 rounded-full bg-forest text-ivory hover:bg-forest-hover transition-all duration-200 text-[11px] 2xl:text-[12px] uppercase tracking-[0.06em] font-medium shadow-subtle active:scale-[0.98] font-sansEng whitespace-nowrap"
          >
            <span>{t({ en: 'Reserve a Stay', bn: 'বুকিং করুন' })}</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>

        {/* Tablet & Mobile Header Actions (< 1280px) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 xl:hidden">
          {/* Mobile Single Toggle (< 640px) */}
          <button
            type="button"
            onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
            className="sm:hidden px-2 py-0.5 rounded-full bg-ivory-200 border border-neutralSoft text-[11px] font-medium text-charcoal hover:border-forest transition-colors"
            title="Toggle Language / ভাষা পরিবর্তন"
          >
            {language === 'bn' ? 'EN' : 'বাংলা'}
          </button>

          {/* Tablet 2-Button Toggle (640px–1279px) */}
          <div className="hidden sm:flex items-center bg-ivory-200 border border-neutralSoft rounded-full p-0.5 text-xs font-medium font-sansEng">
            <button
              type="button"
              onClick={() => setLanguage('bn')}
              className={`px-2 py-0.5 rounded-full text-[11px] transition-all ${
                language === 'bn' ? 'bg-forest text-ivory font-medium' : 'text-charcoal-600'
              }`}
              title="বাংলা"
            >
              বাং
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-full text-[11px] transition-all ${
                language === 'en' ? 'bg-forest text-ivory font-medium' : 'text-charcoal-600'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Hotline on Tablet (md/lg) */}
          <a
            href={`tel:${RESORT_CONTACT.primaryPhone}`}
            className="hidden md:flex lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutralSoft text-xs text-charcoal-700 hover:text-forest font-medium"
            title="Call Resort Hotline"
          >
            <Phone className="w-3 h-3 text-forest" />
            <span className="text-[11px] font-sansEng">{RESORT_CONTACT.primaryPhoneDisplay}</span>
          </a>

          {/* Tablet & Mobile Reserve CTA */}
          <button
            onClick={handleOpenBooking}
            className="px-2.5 sm:px-4 py-1.5 rounded-full bg-forest text-ivory text-[10.5px] sm:text-xs font-medium tracking-[0.04em] uppercase shadow-subtle hover:bg-forest-hover transition-colors whitespace-nowrap"
          >
            {t({ en: 'Reserve', bn: 'বুকিং' })}
          </button>

          {/* Drawer Hamburger Toggle Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(open => !open)}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-charcoal hover:bg-ivory-200 transition-colors focus:outline-none focus:ring-2 focus:ring-forest/40"
            aria-label={t({ en: mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu', bn: mobileMenuOpen ? 'নেভিগেশন মেনু বন্ধ করুন' : 'নেভিগেশন মেনু খুলুন' })}
            aria-controls={mobileMenuOpen ? 'mobile-navigation' : undefined}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="xl:hidden absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] bg-ivory shadow-2xl flex flex-col gap-6 p-6 sm:p-8 animate-fadeIn border-t border-neutralSoft overflow-y-auto overscroll-contain">
          <div className="space-y-4 max-w-lg mx-auto w-full">
            {/* Language Switch Row inside Drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-neutralSoft">
              <span className="text-xs uppercase tracking-[0.06em] text-charcoal-500 font-sansEng font-medium">
                {language === 'bn' ? 'ভাষা নির্বাচন' : 'Language'}
              </span>
              <div className="flex items-center bg-ivory-200 border border-neutralSoft rounded-full p-0.5 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setLanguage('bn')}
                  className={`px-3 py-1 rounded-full transition-all text-xs ${
                    language === 'bn' ? 'bg-forest text-ivory shadow-xs font-semibold' : 'text-charcoal-600'
                  }`}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full transition-all text-xs ${
                    language === 'en' ? 'bg-forest text-ivory shadow-xs font-medium' : 'text-charcoal-600'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <span className="text-[11px] uppercase tracking-[0.08em] text-charcoal-400 font-sansEng font-medium block">
              {t({ en: 'Estate Navigation', bn: 'রিসোর্ট মেনু' })}
            </span>
            <nav className="flex flex-col space-y-1.5 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleMobileNavClick}
                  className={`text-xl sm:text-2xl text-charcoal hover:text-forest transition-colors py-2.5 border-b border-neutralSoft/60 ${
                    language === 'bn' ? 'font-serifBn' : 'font-serifEng font-light'
                  }`}
                >
                  {t(link.label)}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-neutralSoft space-y-3 max-w-lg mx-auto w-full">
            <button
              onClick={handleOpenBooking}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-forest text-ivory font-medium text-xs tracking-[0.05em] uppercase shadow-subtle font-sansEng hover:bg-forest-hover transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t({ en: 'WhatsApp Booking', bn: 'WhatsApp-এ যোগাযোগ' })}</span>
            </button>
            <a
              href={`tel:${RESORT_CONTACT.primaryPhone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-forest text-forest font-medium text-xs tracking-[0.05em] uppercase font-sansEng hover:bg-forest hover:text-ivory transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-forest" />
              <span>{RESORT_CONTACT.primaryPhoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
