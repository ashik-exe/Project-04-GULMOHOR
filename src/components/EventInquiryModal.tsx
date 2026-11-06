import React, { useEffect, useRef, useState } from 'react';
import { X, MessageSquare, PartyPopper, CheckSquare, Square } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EventInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EventInquiryModal: React.FC<EventInquiryModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [eventType, setEventType] = useState<string>('Wedding & Gaye Holud');
  const [estimatedGuests, setEstimatedGuests] = useState<string>('100 – 150 Guests');
  const [eventDate, setEventDate] = useState<string>('');
  const [organizerName, setOrganizerName] = useState<string>('');
  const [organizerPhone, setOrganizerPhone] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  const [facilities, setFacilities] = useState<{ [key: string]: boolean }>({
    lawnMarquee: true,
    indoorHall: false,
    soundSystem: true,
    buffetCatering: true,
    roomsBundle: true,
  });

  const toggleFacility = (key: string) => {
    setFacilities(prev => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedFacilities = Object.entries(facilities)
      .filter(([_, val]) => val)
      .map(([key]) => {
        if (key === 'lawnMarquee') return language === 'bn' ? 'খোলা লন ও সামিয়ানা' : 'Outdoor Lawn & Marquee';
        if (key === 'indoorHall') return language === 'bn' ? 'ইনডোর এসি হল' : 'Indoor AC Banquet Hall';
        if (key === 'soundSystem') return language === 'bn' ? 'সাউন্ড ও স্টেজ লাইটিং' : 'Sound System & Stage';
        if (key === 'buffetCatering') return language === 'bn' ? 'বুফে ক্যাটারিং' : 'Buffet Catering';
        if (key === 'roomsBundle') return language === 'bn' ? 'রুম বান্ডেল' : 'Guest Rooms Bundle';
        return key;
      })
      .join(', ');

    const payload = language === 'bn'
      ? `আসসালামু আলাইকুম গুলমোহর রিসোর্ট,
আমি একটি ইভেন্ট / অনুষ্ঠানের বিষয়ে জানতে চাচ্ছি:
- অনুষ্ঠানের ধরন: ${eventType}
- সম্ভাব্য মেহমান: ${estimatedGuests}
- সম্ভাব্য তারিখ: ${eventDate || 'আলোচনা সাপেক্ষে'}
- আয়োজকের নাম: ${organizerName || 'সম্মানিত অতিথি'}
- ফোন নম্বর: ${organizerPhone || 'দেওয়া হয়নি'}
- প্রয়োজনীয় সুবিধা: ${selectedFacilities}
${additionalNotes ? `- বিস্তারিত: ${additionalNotes}\n` : ''}
অনুগ্রহ করে উক্ত তারিখে ভেন্যু খালি আছে কি না এবং আনুমানিক খরচের বিবরণ জানাবেন। ধন্যবাদ!`
      : `Hello Gulmohor Resort Concierge,
I would like to request an Event / Wedding Proposal:
- Event Category: ${eventType}
- Estimated Pax: ${estimatedGuests}
- Target Date: ${eventDate || 'To be scheduled'}
- Organizer Name: ${organizerName || 'Valued Client'}
- Contact Phone: ${organizerPhone || 'Not specified'}
- Required Facilities: ${selectedFacilities}
${additionalNotes ? `- Details: ${additionalNotes}` : ''}

Please confirm venue availability for this date and share an official quotation. Thank you!`;

    const encoded = encodeURIComponent(payload);
    window.open(`https://wa.me/8801911498819?text=${encoded}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={onClose}
      className="m-auto rounded-none p-0 max-w-2xl w-[95vw] max-h-[92vh] bg-ivory text-charcoal-900 shadow-2xl border border-sand-border outline-none overflow-hidden"
      aria-labelledby="event-modal-title"
    >
      <div className="flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-7 border-b border-sand-border bg-ivory-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-champagne/15 text-champagne flex items-center justify-center flex-shrink-0">
              <PartyPopper className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10.5px] uppercase tracking-[0.07em] font-sansEng text-forest font-semibold block mb-0.5">
                {t({ en: 'Bespoke Event Concierge', bn: 'ব্যক্তিগত ইভেন্ট আয়োজন' })}
              </span>
              <h2
                id="event-modal-title"
                className={`text-2xl sm:text-3xl text-charcoal-900 ${
                  language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                }`}
              >
                {t({ en: 'Event & Celebration Inquiry', bn: 'ইভেন্ট ও উৎসবের বুকিং' })}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-sand-light text-charcoal-400 hover:text-charcoal-900 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-5 sm:p-7 space-y-5 flex-1">
          {/* Event Type & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 font-sansEng">
                {t({ en: 'Event Category', bn: 'অনুষ্ঠানের ধরন' })}
              </label>
              <select
                value={eventType}
                onChange={e => setEventType(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-sand-border text-charcoal-900 text-sm font-sansEng focus:border-forest outline-none"
              >
                <option value="Wedding & Gaye Holud">Wedding & Gaye Holud (বিয়ে ও হলুদ)</option>
                <option value="Alumni / Batch Reunion">Alumni / Batch Reunion (ব্যাচ রিইউনিয়ন)</option>
                <option value="Corporate Retreat / Day Outing">Corporate Picnic / Day Outing (পিকনিক)</option>
                <option value="Birthday / Family Gathering">Birthday / Private Gathering (পারিবারিক উৎসব)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 font-sansEng">
                {t({ en: 'Estimated Headcount', bn: 'মেহমান সংখ্যা' })}
              </label>
              <select
                value={estimatedGuests}
                onChange={e => setEstimatedGuests(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-sand-border text-charcoal-900 text-sm font-sansEng focus:border-forest outline-none"
              >
                <option value="30 – 50 Guests">30 – 50 Guests (ছোট অনুষ্ঠান)</option>
                <option value="50 – 100 Guests">50 – 100 Guests (মাঝারি গ্রুপ)</option>
                <option value="100 – 150 Guests">100 – 150 Guests (বড় অনুষ্ঠান)</option>
                <option value="150 – 200+ Guests">150 – 200+ Guests (মেগা গেদারিং)</option>
              </select>
            </div>
          </div>

          {/* Date & Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 font-sansEng">
                {t({ en: 'Target Date', bn: 'সম্ভাব্য তারিখ' })}
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={e => setEventDate(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-sand-border text-charcoal-900 text-sm font-sansEng focus:border-forest outline-none"
              />
            </div>

            <div>
              <label className="block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 font-sansEng">
                {t({ en: 'Organizer Name', bn: 'আপনার নাম' })}
              </label>
              <input
                type="text"
                placeholder="Tanvir Chowdhury"
                value={organizerName}
                onChange={e => setOrganizerName(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-sand-border text-charcoal-900 text-sm font-sansEng focus:border-forest outline-none"
              />
            </div>

            <div>
              <label className="block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 font-sansEng">
                {t({ en: 'Contact Phone', bn: 'ফোন নম্বর' })}
              </label>
              <input
                type="tel"
                placeholder="01711-XXXXXX"
                value={organizerPhone}
                onChange={e => setOrganizerPhone(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-sand-border text-charcoal-900 text-sm font-sansEng focus:border-forest outline-none"
              />
            </div>
          </div>

          {/* Facilities Checklist */}
          <div>
            <label className="block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 font-sansEng">
              {t({ en: 'Required Venue Amenities & Inclusions', bn: 'প্রয়োজনীয় সুযোগ-সুবিধা' })}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-800 font-sansEng font-light">
              <button
                type="button"
                onClick={() => toggleFacility('lawnMarquee')}
                className="flex items-center gap-2.5 p-3 bg-sand-light border border-sand-border text-left hover:border-forest transition-colors"
              >
                {facilities.lawnMarquee ? <CheckSquare className="w-4 h-4 text-forest" /> : <Square className="w-4 h-4 text-charcoal-400" />}
                <span>{t({ en: 'Open Lawn & Marquee Tent', bn: 'খোলা লন ও সামিয়ানা স্টেজ' })}</span>
              </button>

              <button
                type="button"
                onClick={() => toggleFacility('indoorHall')}
                className="flex items-center gap-2.5 p-3 bg-sand-light border border-sand-border text-left hover:border-forest transition-colors"
              >
                {facilities.indoorHall ? <CheckSquare className="w-4 h-4 text-forest" /> : <Square className="w-4 h-4 text-charcoal-400" />}
                <span>{t({ en: 'Air-Conditioned Indoor Hall', bn: 'শীতাতপ নিয়ন্ত্রিত ইনডোর হল' })}</span>
              </button>

              <button
                type="button"
                onClick={() => toggleFacility('soundSystem')}
                className="flex items-center gap-2.5 p-3 bg-sand-light border border-sand-border text-left hover:border-forest transition-colors"
              >
                {facilities.soundSystem ? <CheckSquare className="w-4 h-4 text-forest" /> : <Square className="w-4 h-4 text-charcoal-400" />}
                <span>{t({ en: 'Stage Lighting & Sound Support', bn: 'সাউন্ড সিস্টেম ও স্টেজ লাইটিং' })}</span>
              </button>

              <button
                type="button"
                onClick={() => toggleFacility('buffetCatering')}
                className="flex items-center gap-2.5 p-3 bg-sand-light border border-sand-border text-left hover:border-forest transition-colors"
              >
                {facilities.buffetCatering ? <CheckSquare className="w-4 h-4 text-forest" /> : <Square className="w-4 h-4 text-charcoal-400" />}
                <span>{t({ en: 'Buffet Catering (Polao / Kacchi)', bn: 'বুফে ক্যাটারিং (পোলাও/কাচ্চি)' })}</span>
              </button>

              <button
                type="button"
                onClick={() => toggleFacility('roomsBundle')}
                className="flex items-center gap-2.5 p-3 bg-sand-light border border-sand-border text-left hover:border-forest transition-colors sm:col-span-2"
              >
                {facilities.roomsBundle ? <CheckSquare className="w-4 h-4 text-forest" /> : <Square className="w-4 h-4 text-charcoal-400" />}
                <span>{t({ en: 'Day & Overnight Room Bundle for VIPs & Bridal Prep', bn: 'ব্রাইডাল সাজ ও বিশ্রামের জন্য এসি রুম বান্ডেল' })}</span>
              </button>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 font-sansEng">
              {t({ en: 'Special Requests / Schedule Notes', bn: 'অতিরিক্ত তথ্য বা সময়সূচি' })}
            </label>
            <textarea
              rows={2}
              placeholder={t({
                en: 'e.g. Evening stage setup, floral decor requirement, customized family menu...',
                bn: 'যেমন: সন্ধ্যার স্টেজ সাজসজ্জা, বিশেষ খাবারের তালিকা...',
              })}
              value={additionalNotes}
              onChange={e => setAdditionalNotes(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-sand-border text-charcoal-900 text-sm font-sansEng focus:border-forest outline-none resize-none font-light"
            />
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-forest hover:bg-forest-hover text-ivory font-medium text-xs sm:text-[13px] uppercase tracking-[0.06em] flex items-center justify-center gap-3 transition-colors duration-300 shadow-subtle min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 text-champagne" />
              <span>{t({ en: 'Send Event Inquiry to WhatsApp', bn: 'WhatsApp-এ ইভেন্ট বুকিং পাঠান' })}</span>
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
