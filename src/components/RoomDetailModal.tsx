import React, { useEffect, useRef, useState } from 'react';
import { X, CheckCircle2, AlertCircle, Utensils, MessageSquare, ChevronLeft, ChevronRight, Users, Bed } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { RoomItem } from '../types';

interface RoomDetailModalProps {
  room: RoomItem | null;
  onClose: () => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose }) => {
  const { language, t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (room) {
      setActiveImageIdx(0);
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [room]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!room) return null;

  const images = room.galleryImages && room.galleryImages.length > 0
    ? room.galleryImages
    : [room.image];

  const handlePrevImage = () => {
    setActiveImageIdx(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIdx(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleWhatsAppBooking = () => {
    const message = language === 'bn'
      ? `আসসালামু আলাইকুম গুলমোহর রিসোর্ট,
আমি ${t(room.name)} সম্পর্কে জানতে চাচ্ছি:
- ধারণক্ষমতা: ${t(room.capacity)}
- নির্ধারিত ভাড়া: ৳${room.rateBDT.toLocaleString()} (নিশ্চিতকরণ সাপেক্ষ)
রুমটি সামনের তারিখে বুকিং সম্ভব কি না জানাবেন। ধন্যবাদ!`
      : `Hello Gulmohor Resort,
I am inquiring about the ${t(room.name)}:
- Capacity: ${t(room.capacity)}
- Listed Tariff: BDT ${room.rateBDT.toLocaleString()} (Subject to confirmation)
Could you please let me know availability for my upcoming stay? Thank you!`;
    const url = `https://wa.me/8801911498819?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={onClose}
      className="m-auto rounded-none p-0 max-w-3xl w-[95vw] max-h-[92vh] bg-ivory text-charcoal-900 shadow-2xl border border-sand-border outline-none overflow-hidden"
      aria-labelledby="room-modal-title"
    >
      <div className="flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-7 border-b border-sand-border bg-ivory-50">
          <div>
            <span className="text-[10.5px] uppercase tracking-[0.07em] font-sansEng text-forest font-semibold block mb-1">
              {room.categoryName ? t(room.categoryName) : room.category}
            </span>
            <h2
              id="room-modal-title"
              className={`text-2xl sm:text-3xl text-charcoal-900 ${
                language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
              }`}
            >
              {t(room.name)}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-sand-light text-charcoal-400 hover:text-charcoal-900 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1">
          {/* Main Visual Carousel */}
          <div className="relative bg-charcoal-900 h-64 sm:h-80 overflow-hidden">
            <img
              src={images[activeImageIdx]}
              alt={t(room.name)}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-charcoal-950/70 hover:bg-charcoal-900 text-white flex items-center justify-center transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-charcoal-950/70 hover:bg-charcoal-900 text-white flex items-center justify-center transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIdx(i)}
                      className={`h-1 transition-all ${
                        activeImageIdx === i ? 'w-6 bg-forest' : 'w-2 bg-white/50'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Price Badge */}
            <div className="absolute bottom-4 right-4 bg-charcoal-950/90 backdrop-blur-sm px-4 py-2 border border-white/10 text-white text-right">
              <div className="text-2xl font-light font-serifEng text-ivory">
                ৳{room.rateBDT.toLocaleString()}
              </div>
              <div className="text-[10px] text-charcoal-300 font-sansEng uppercase tracking-[0.06em] font-light">
                {t(room.ratePeriod)}
              </div>
            </div>
          </div>

          {/* Missing Photo Notice if applicable */}
          {room.missingPhotoNote && (
            <div className="p-3.5 bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span className="font-light leading-relaxed">{t(room.missingPhotoNote)}</span>
            </div>
          )}

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-sand-light border border-sand-border flex items-center gap-3">
              <Users className="w-4 h-4 text-forest" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.06em] text-charcoal-500 font-sansEng font-medium">{t({ en: 'Capacity', bn: 'ধারণক্ষমতা' })}</div>
                <div className="text-xs font-medium text-charcoal-900 mt-0.5 font-sansEng">{t(room.capacity)}</div>
              </div>
            </div>

            <div className="p-3.5 bg-sand-light border border-sand-border flex items-center gap-3">
              <Bed className="w-4 h-4 text-forest" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.06em] text-charcoal-500 font-sansEng font-medium">{t({ en: 'Bed Configuration', bn: 'বেডের বিন্যাস' })}</div>
                <div className="text-xs font-medium text-charcoal-900 mt-0.5 font-sansEng">{t(room.bedConfig)}</div>
              </div>
            </div>

            <div className="p-3.5 bg-sand-light border border-sand-border flex items-center gap-3 col-span-2 sm:col-span-1">
              <Utensils className="w-4 h-4 text-sage" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.06em] text-charcoal-500 font-sansEng font-medium">{t({ en: 'Morning Dining', bn: 'সকালের নাস্তা' })}</div>
                <div className={`text-xs font-medium text-charcoal-900 mt-0.5 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                  {t({ en: 'Included (Bengali Breakfast)', bn: 'অন্তর্ভুক্ত (বাংলা নাস্তা)' })}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <span className="text-[10.5px] uppercase tracking-[0.07em] text-forest font-semibold block mb-2 font-sansEng">
              {t({ en: 'Suite Overview & Architecture', bn: 'রুমের বিবরণ' })}
            </span>
            <p className={`text-xs sm:text-sm text-charcoal-600 leading-relaxed ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}>
              {t(room.description)}
            </p>
          </div>

          {/* Breakfast Details */}
          {room.breakfastDetails && (
            <div className={`p-3.5 bg-sand-light border border-sand-border text-xs text-charcoal-800 flex items-start gap-2.5 ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}>
              <Utensils className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
              <div>
                <strong className="font-medium text-charcoal">{t({ en: 'Included Breakfast: ', bn: 'সকালের নাস্তা: ' })}</strong>
                <span>{t(room.breakfastDetails)}</span>
              </div>
            </div>
          )}

          {/* Amenities Checklist */}
          <div>
            <span className="text-[10.5px] uppercase tracking-[0.07em] text-forest font-semibold block mb-3 font-sansEng">
              {t({ en: 'Suite Amenities & Appointments', bn: 'রুমের সুবিধাসমূহ' })}
            </span>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-700 ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}>
              {room.amenities.map((am, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2.5 bg-sand-light border border-sand-border">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage flex-shrink-0" />
                  <span>{t(am)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-sand-border bg-ivory-50 flex flex-wrap items-center justify-between gap-4">
          <div className={`text-xs text-charcoal-500 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
            {t({ en: 'Direct management booking via WhatsApp hotline 01911-498819', bn: 'WhatsApp হটলাইন 01911-498819 নম্বরে সরাসরি যোগাযোগ' })}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-3 border border-charcoal-200 text-xs font-medium uppercase tracking-[0.06em] text-charcoal-700 hover:bg-sand-light transition-colors min-h-[44px]"
            >
              {t({ en: 'Close', bn: 'বন্ধ করুন' })}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppBooking}
              className="flex-1 sm:flex-initial px-6 py-3 bg-forest hover:bg-forest-hover text-ivory text-xs font-medium uppercase tracking-[0.06em] flex items-center justify-center gap-2 transition-colors shadow-subtle min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t({ en: 'Book on WhatsApp', bn: 'WhatsApp-এ বুকিং' })}</span>
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
