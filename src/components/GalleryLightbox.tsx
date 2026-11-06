import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/resortData';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<LightboxProps> = ({ item, onClose, onNavigate }) => {
  const { language, t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (item) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'ArrowRight') {
        const currIdx = GALLERY_ITEMS.findIndex(g => g.id === item.id);
        const nextIdx = (currIdx + 1) % GALLERY_ITEMS.length;
        onNavigate(GALLERY_ITEMS[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const currIdx = GALLERY_ITEMS.findIndex(g => g.id === item.id);
        const prevIdx = currIdx === 0 ? GALLERY_ITEMS.length - 1 : currIdx - 1;
        onNavigate(GALLERY_ITEMS[prevIdx]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onNavigate]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!item) return null;

  const currIdx = GALLERY_ITEMS.findIndex(g => g.id === item.id);
  const nextItem = GALLERY_ITEMS[(currIdx + 1) % GALLERY_ITEMS.length];
  const prevItem = GALLERY_ITEMS[currIdx === 0 ? GALLERY_ITEMS.length - 1 : currIdx - 1];

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={onClose}
      className="m-auto rounded-none p-0 max-w-5xl w-[95vw] bg-charcoal text-white shadow-2xl border border-charcoal-800 outline-none overflow-hidden"
      aria-label="Enlarged photo view"
    >
      <div className="relative flex flex-col">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-charcoal-900 border-b border-charcoal-800">
          <div className="flex items-center gap-3">
            <span className="text-[10.5px] uppercase tracking-[0.07em] font-sansEng text-champagne font-medium">
              {item.categoryName ? t(item.categoryName) : item.category}
            </span>
            <span className="text-xs font-sansEng text-charcoal-400 font-light">
              [{String(currIdx + 1).padStart(2, '0')} / {String(GALLERY_ITEMS.length).padStart(2, '0')}]
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-charcoal-800 text-charcoal-400 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close photo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Photo View */}
        <div className="relative bg-black flex items-center justify-center min-h-[50vh] max-h-[72vh] overflow-hidden group">
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
          />

          {/* Navigation Controls */}
          <button
            onClick={() => onNavigate(prevItem)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-charcoal-900/80 hover:bg-forest text-white flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => onNavigate(nextItem)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-charcoal-900/80 hover:bg-forest text-white flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Caption & Provenance */}
        <div className="p-6 bg-charcoal-900 border-t border-charcoal-800">
          <h3
            className={`text-xl sm:text-2xl text-ivory mb-1 ${
              language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
            }`}
          >
            {t(item.title)}
          </h3>
          <p className={`text-xs sm:text-sm text-charcoal-300 mb-4 leading-relaxed ${
            language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
          }`}>
            {t(item.caption)}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-charcoal-800 text-[11px] text-charcoal-400 font-light">
            <span className={`flex items-center gap-2 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {t({ en: 'Authentic Property Media: ', bn: 'রিসোর্টের আসল ছবি: ' })}
                <strong className="text-charcoal-200 font-medium font-sansEng">{item.attribution}</strong>
              </span>
            </span>
            <span className={`text-charcoal-500 hidden sm:inline ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
              {t({ en: 'Navigate via Keyboard Arrow Keys [← / →]', bn: 'কীবোর্ড অ্যারো দিয়ে পরিবর্তন করুন [← / →]' })}
            </span>
          </div>
        </div>
      </div>
    </dialog>
  );
};
