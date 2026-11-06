import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { RESORT_CONTACT, ROOMS, PACKAGES } from '../data/resortData';
import { FaqAccordion } from './FaqAccordion';

export const ReservationAndContact: React.FC = () => {
  const { language, t } = useLanguage();

  const [bookingType, setBookingType] = useState<string>('couple-deluxe');
  const [guestName, setGuestName] = useState<string>('');
  const [stayDate, setStayDate] = useState<string>('');
  const [departureDate, setDepartureDate] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [adultsCount, setAdultsCount] = useState<number>(2);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [step, setStep] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    const applyDraft = (event: Event) => {
      const detail = (event as CustomEvent<{ option?: string; arrival?: string; departure?: string; guests?: number }>).detail;
      if (detail.option && (ROOMS.some(room => room.id === detail.option) || PACKAGES.some(item => item.id === detail.option))) {
        setBookingType(detail.option);
        setStep(1);
      }
      if (detail.arrival) setStayDate(detail.arrival);
      if (detail.departure) setDepartureDate(detail.departure);
      if (detail.guests) setAdultsCount(detail.guests);
    };
    window.addEventListener('gulmohor:booking-draft', applyDraft);
    return () => window.removeEventListener('gulmohor:booking-draft', applyDraft);
  }, []);

  // Selected Option details
  const selectedRoom = ROOMS.find(r => r.id === bookingType);
  const selectedPackage = PACKAGES.find(p => p.id === bookingType);

  // Compute estimated price
  const estimatedRate = selectedRoom
    ? selectedRoom.rateBDT
    : selectedPackage && typeof selectedPackage.rateBDT === 'number'
    ? selectedPackage.rateBDT
    : 7000;

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stayDate || !guestName.trim() || !guestPhone.trim() || (departureDate && departureDate <= stayDate)) return;

    const packageName = selectedRoom
      ? t(selectedRoom.name)
      : selectedPackage
      ? t(selectedPackage.title)
      : bookingType;

    const message = language === 'bn'
      ? `আসসালামু আলাইকুম গুলমোহর রিসোর্ট,
আমি রুম/প্যাকেজ বুকিংয়ের ব্যাপারে জানতে চাচ্ছি:
- প্যাকেজ/রুম: ${packageName}
- সম্ভাব্য তারিখ: ${stayDate || 'আলোচনা সাপেক্ষে'}
- প্রস্থানের তারিখ: ${departureDate || 'ডে ভিজিট / নিশ্চিত করতে হবে'}
- অতিথি সংখ্যা: ${adultsCount} জন প্রাপ্তবয়স্ক${childrenCount > 0 ? `, ${childrenCount} জন শিশু` : ''}
- নাম: ${guestName || 'অতিথি'}
- যোগাযোগ নম্বর: ${guestPhone}
${specialNotes ? `- বিশেষ নোট: ${specialNotes}\n` : ''}- আনুমানিক রেট: ৳${estimatedRate.toLocaleString()} (নিশ্চিতকরণ সাপেক্ষ)

উক্ত তারিখে বুকিং সম্ভব কি না জানাবেন। ধন্যবাদ!`
      : `Hello Gulmohor Resort Concierge,
I would like to inquire about reservation availability:
- Selected Option: ${packageName}
- Target Date: ${stayDate || 'To be finalized'}
- Departure Date: ${departureDate || 'Day visit / to be confirmed'}
- Guests: ${adultsCount} Adult(s)${childrenCount > 0 ? `, ${childrenCount} Child(ren)` : ''}
- Guest Name: ${guestName || 'Valued Guest'}
- Contact Number: ${guestPhone}
${specialNotes ? `- Special Notes: ${specialNotes}\n` : ''}- Estimated Rate: BDT ${estimatedRate.toLocaleString()} (Subject to formal confirmation)

Could you please confirm vacancy for this date and advise on deposit details? Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8801911498819?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-ivory relative border-t border-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.08em] text-forest font-sansEng font-semibold block mb-3">
            {t({ en: '09 / Direct Concierge & Inquiries', bn: '০৯ / সরাসরি বুকিং ও যোগাযোগ' })}
          </span>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl text-charcoal text-balance-title mb-4 ${
              language === 'bn' ? 'font-displayBn font-medium leading-[1.28]' : 'font-serifEng font-light leading-[1.14]'
            }`}
          >
            {t({
              en: 'Reserve Your Sanctuary at Gulmohor',
              bn: 'গুলমোহরে আপনার নিরিবিলি অবকাশের বুকিং সম্পন্ন করুন',
            })}
          </h2>

          <p
            className={`text-sm sm:text-base text-charcoal-600 leading-relaxed max-w-2xl ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}
          >
            {t({
              en: 'To preserve personal attention and verify specific room allocations, all reservations are handled directly with resort management via WhatsApp and direct telephone. No intermediaries or unconfirmed bookings.',
              bn: 'ব্যক্তিগত আতিথেয়তা বজায় রাখতে ও নির্ধারিত রুম নিশ্চিত করতে প্রতিটি বুকিং সরাসরি রিসোর্ট কর্তৃপক্ষের সাথে WhatsApp ও সরাসরি ফোনে সম্পন্ন হয়।',
            })}
          </p>
        </div>

        {/* 2-Column Split: Booking Terminal & Concierge Desk + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column 1: Bespoke Reservation Terminal (7 Cols) */}
          <div className="lg:col-span-7 bg-sand-light p-8 sm:p-12 border border-sand-border shadow-sm relative">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-forest" />

            <div className="flex items-center justify-between pb-6 mb-8 border-b border-ivory-200">
              <div>
                <span className="text-[10.5px] uppercase tracking-[0.07em] font-medium text-charcoal-400 font-sansEng block mb-1">
                  {t({ en: 'Direct WhatsApp Booking', bn: 'সরাসরি WhatsApp বুকিং' })}
                </span>
                <h3
                  className={`text-xl sm:text-2xl text-charcoal-900 ${
                    language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                  }`}
                >
                  {t({ en: 'Book Your Stay', bn: 'বুকিংয়ের তথ্য দিন' })}
                </h3>
              </div>
              <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1 bg-ivory-100 border border-ivory-200 text-[11px] text-charcoal-600 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                <ShieldCheck className="w-3.5 h-3.5 text-forest" />
                <span>{t({ en: 'Availability confirmed directly', bn: 'সরাসরি সুবিধা নিশ্চিত করুন' })}</span>
              </div>
            </div>

            <form onSubmit={handleLaunchWhatsApp} className="space-y-6">
              <div className="flex items-center gap-2 mb-2" aria-label={t({ en: `Step ${step} of 3`, bn: `৩টির মধ্যে ধাপ ${step}` })}>
                {[1, 2, 3].map((item) => <React.Fragment key={item}><span className={`h-1.5 flex-1 ${step >= item ? 'bg-coral' : 'bg-charcoal-200'}`} /><span className="sr-only">{item}</span></React.Fragment>)}
              </div>
              <p className={`text-xs text-charcoal-500 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>{t({ en: `Step 0${step} of 03`, bn: `ধাপ ০${step} / ০৩` })}</p>
              {/* Package Choice */}
              {step === 1 && <div>
                <label className={`block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                  {t({ en: '1. Select Stay Category or Day Visit', bn: '১. প্যাকেজ বা রুম ক্যাটাগরি নির্বাচন করুন' })}
                </label>
                <div className="relative">
                  <select
                    value={bookingType}
                    onChange={e => setBookingType(e.target.value)}
                    className={`w-full px-4 py-3.5 bg-ivory-50 border border-ivory-300 text-charcoal-900 text-sm focus:border-forest focus:bg-white outline-none transition-colors appearance-none ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}
                  >
                    <optgroup label={t({ en: 'Overnight Villa Stays', bn: 'রাত্রিযাপন (রুম ও স্যুট)' })}>
                      <option value="couple-deluxe">
                        {t({ en: 'Couple Deluxe Room (৳7,000 / Night)', bn: 'কাপল ডিলাক্স রুম (৳৭,০০০ / রাত)' })}
                      </option>
                      <option value="double-deluxe">
                        {t({ en: 'Double Deluxe Family Room (৳9,000 / Night)', bn: 'ডাবল ডিলাক্স ফ্যামিলি রুম (৳৯,০০০ / রাত)' })}
                      </option>
                      <option value="premium-suite">
                        {t({ en: 'Premium Suite (VIP Floor) (৳12,000 / Night)', bn: 'প্রিমিয়াম ভিআইপি স্যুট (৳১২,০০০ / রাত)' })}
                      </option>
                    </optgroup>
                    <optgroup label={t({ en: 'Day Outings & Leisure', bn: 'ডে আউট ও পুল পাস' })}>
                      <option value="day-couple-meals">
                        {t({ en: 'Day Outing Package with Bengali Meals (৳6,500)', bn: 'ডে আউট প্যাকেজ - খাবারসহ (৳৬,৫০০)' })}
                      </option>
                      <option value="day-room-only">
                        {t({ en: 'Day-Long AC Room Only (৳5,000)', bn: 'ডে-লং এসি রুম (৳৫,০০০)' })}
                      </option>
                      <option value="pool-hourly-pass">
                        {t({ en: 'Pool Hourly Visitor Pass (৳400 / Hour)', bn: 'ভিজিটর পুল পাস (৳৪০০ / ঘণ্টা)' })}
                      </option>
                    </optgroup>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-charcoal-500">
                    <span className="text-xs">▼</span>
                  </div>
                </div>
              </div>}

              {/* Date & Guest Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {step === 1 && <div>
                  <label className={`block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                    {t({ en: '2. Arrival / Visit Date', bn: '২. আগমন / ভ্রমণের তারিখ' })}
                  </label>
                  <input
                    type="date"
                    required
                    value={stayDate}
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={e => { setStayDate(e.target.value); setDepartureDate(''); }}
                    className="w-full px-4 py-3 bg-ivory-50 border border-ivory-300 text-charcoal-900 text-sm focus:border-forest focus:bg-white outline-none transition-colors font-sansEng min-h-[44px]"
                  />
                </div>}

                {step === 3 && <div>
                  <label className={`block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                    {t({ en: '3. Primary Guest Name', bn: '৩. অতিথির পুরো নাম' })}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t({ en: 'e.g. Tanvir Chowdhury', bn: 'যেমন: তানভীর চৌধুরী' })}
                    value={guestName}
                    onChange={e => setGuestName(e.target.value)}
                    className={`w-full px-4 py-3 bg-ivory-50 border border-ivory-300 text-charcoal-900 text-sm focus:border-forest focus:bg-white outline-none transition-colors min-h-[44px] ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}
                  />
                </div>}
                {step === 3 && <div>
                  <label className={`block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                    {t({ en: 'Departure Date (overnight stays)', bn: 'প্রস্থানের তারিখ (রাত্রিযাপন)' })}
                  </label>
                  <input type="date" min={stayDate || new Date().toISOString().slice(0, 10)} value={departureDate} onChange={e => setDepartureDate(e.target.value)} className="w-full px-4 py-3 bg-ivory-50 border border-ivory-300 text-charcoal-900 text-sm focus:border-forest focus:bg-white outline-none transition-colors font-sansEng min-h-[44px]" />
                </div>}
                {step === 3 && <div>
                  <label className={`block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                    {t({ en: 'Contact Phone Number', bn: 'যোগাযোগের ফোন নম্বর' })}
                  </label>
                  <input type="tel" required autoComplete="tel" placeholder={t({ en: 'e.g. +880 1XXX XXXXXX', bn: 'যেমন: +880 1XXX XXXXXX' })} value={guestPhone} onChange={e => setGuestPhone(e.target.value)} className={`w-full px-4 py-3 bg-ivory-50 border border-ivory-300 text-charcoal-900 text-sm focus:border-forest focus:bg-white outline-none transition-colors min-h-[44px] ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`} />
                </div>}
              </div>

              {/* Guest Counts */}
              {step === 2 && <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                    {t({ en: 'Adult Guests (12+ Yrs)', bn: 'প্রাপ্তবয়স্ক অতিথি' })}
                  </label>
                  <div className="relative">
                    <select
                      value={adultsCount}
                      onChange={e => setAdultsCount(Number(e.target.value))}
                      className={`w-full px-4 py-3 bg-ivory-50 border border-ivory-300 text-charcoal-900 text-sm focus:border-forest focus:bg-white outline-none transition-colors appearance-none min-h-[44px] ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                        <option key={n} value={n}>
                          {n} {language === 'bn' ? 'জন প্রাপ্তবয়স্ক' : (n === 1 ? 'Adult' : 'Adults')}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-charcoal-500 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label className={`block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                    {t({ en: 'Accompanying Children', bn: 'শিশু সন্তান' })}
                  </label>
                  <div className="relative">
                    <select
                      value={childrenCount}
                      onChange={e => setChildrenCount(Number(e.target.value))}
                      className={`w-full px-4 py-3 bg-ivory-50 border border-ivory-300 text-charcoal-900 text-sm focus:border-forest focus:bg-white outline-none transition-colors appearance-none min-h-[44px] ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}
                    >
                      {[0, 1, 2, 3, 4, 5].map(n => (
                        <option key={n} value={n}>
                          {language === 'bn'
                            ? (n === 0 ? 'কোনো শিশু নেই' : `${n} জন শিশু`)
                            : (n === 0 ? 'No Children' : n === 1 ? '1 Child' : `${n} Children`)}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-charcoal-500 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>}

              {/* Special Requests */}
              {step === 3 && <div>
                <label className={`block text-[11.5px] font-medium uppercase tracking-[0.05em] text-charcoal-700 mb-2 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                  {t({ en: 'Special Requests / Dietary / Timing Notes', bn: 'বিশেষ অনুরোধ বা খাবারের নির্দেশনা' })}
                </label>
                <textarea
                  rows={2}
                  placeholder={t({
                    en: 'e.g. Late evening arrival, courtyard BBQ arrangement, extra cot request...',
                    bn: 'যেমন: সন্ধ্যায় পৌঁছানোর সময়, বারবিকিউ আয়োজন, ইত্যাদি...',
                  })}
                  value={specialNotes}
                  onChange={e => setSpecialNotes(e.target.value)}
                  className={`w-full px-4 py-3 bg-ivory-50 border border-ivory-300 text-charcoal-900 text-sm focus:border-forest focus:bg-white outline-none transition-colors resize-none ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}
                />
              </div>}

              {/* Rate Summary Card */}
              {step >= 2 && <div className="p-5 bg-ivory-100 border border-ivory-200 flex items-center justify-between">
                <div>
                  <div className={`text-[11px] uppercase tracking-[0.06em] text-charcoal-500 font-medium ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                    {t({ en: 'Estimated Base Tariff', bn: 'আনুমানিক প্যাকেজ রেট' })}
                  </div>
                  <div className={`text-xs text-forest font-semibold mt-0.5 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                    {t({ en: 'Subject to formal reception confirmation', bn: 'রিসোর্ট কর্তৃপক্ষের নিশ্চিতকরণ সাপেক্ষ' })}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-light font-serifEng text-charcoal-900">
                    ৳{estimatedRate.toLocaleString()}
                  </div>
                  <div className={`text-[10px] text-charcoal-400 uppercase tracking-[0.06em] ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                    {selectedRoom ? t(selectedRoom.ratePeriod) : (language === 'bn' ? 'প্যাকেজ' : 'Per Package')}
                  </div>
                </div>
              </div>}

              <div className="flex gap-3">
                {step > 1 && <button type="button" onClick={() => setStep(step === 3 ? 2 : 1)} className="min-h-[48px] px-5 border border-charcoal/30 text-charcoal text-xs">{t({ en: 'Back', bn: 'পেছনে' })}</button>}
                {step < 3 ? <button type="button" disabled={step === 1 && !stayDate} onClick={() => setStep(step === 1 ? 2 : 3)} className="flex-1 min-h-[48px] px-6 bg-coral hover:bg-coral-hover disabled:opacity-50 text-ivory text-xs uppercase tracking-[0.06em] transition-colors">{t({ en: 'Continue', bn: 'এগিয়ে যান' })}</button> : <button type="submit" className="flex-1 min-h-[48px] py-4 px-6 bg-coral hover:bg-coral-hover text-ivory text-xs sm:text-[13px] font-medium uppercase tracking-[0.06em] flex items-center justify-center gap-3 transition-colors duration-300"><MessageSquare className="w-4 h-4" /><span>{t({ en: 'Send Inquiry via WhatsApp', bn: 'WhatsApp-এ বুকিং অনুসন্ধান পাঠান' })}</span></button>}
              </div>

              {/* Direct Booking Integrity Notice */}
              <div className="flex items-start gap-2.5 text-xs text-charcoal-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                <span className={`leading-relaxed ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                  {t({
                    en: 'This form starts an inquiry with resort management. Confirm availability, final pricing, advance payment and applicable policies directly before making plans.',
                    bn: 'এই ফর্মটি রিসোর্ট কর্তৃপক্ষের কাছে অনুসন্ধান পাঠাবে। পরিকল্পনার আগে সুবিধা, চূড়ান্ত মূল্য, অগ্রিম পেমেন্ট ও প্রযোজ্য নীতিমালা সরাসরি নিশ্চিত করুন।',
                  })}
                </span>
              </div>
            </form>
          </div>

          {/* Column 2: Telephone Reception & Integrated FAQ Accordion (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Telephone Concierge Box */}
            <div className="bg-charcoal text-white p-8 border border-charcoal-800 shadow-subtle relative overflow-hidden">
              <span className="text-[10.5px] tracking-[0.07em] uppercase font-sansEng text-champagne font-medium mb-2 block">
                {t({ en: 'Direct Telephone Concierge', bn: 'সরাসরি টেলিফোন যোগাযোগ' })}
              </span>
              <h3
                className={`text-2xl text-white mb-3 ${
                  language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                }`}
              >
                {t({ en: 'Prefer an Immediate Voice Conversation?', bn: 'সরাসরি ফোনে কথা বলতে চান?' })}
              </h3>
              <p className={`text-xs text-charcoal-300 leading-relaxed mb-6 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                {t({
                  en: 'For urgent reservations within 24 hours, private whole-estate buyouts, or custom wedding inquiries, call our on-site reception hotlines directly.',
                  bn: 'জরুরি বুকিং, সম্পূর্ণ রিসোর্ট রিজার্ভেশন বা বিয়ের অনুষ্ঠানের জন্য সরাসরি আমাদের অন-সাইট রিসেপশন হটলাইনে কল করুন।',
                })}
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${RESORT_CONTACT.primaryPhone}`}
                  className="flex items-center justify-between p-4 bg-charcoal-900/80 hover:bg-charcoal-900 border border-charcoal-800 transition-colors group min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-champagne/20 text-champagne flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-[10px] text-charcoal-400 uppercase tracking-[0.06em] ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                        {t({ en: 'Primary WhatsApp Hotline', bn: 'প্রধান হোয়াটসঅ্যাপ হটলাইন' })}
                      </div>
                      <div className="text-sm font-medium text-white font-sansEng group-hover:text-champagne transition-colors tracking-wide">
                        {RESORT_CONTACT.primaryPhoneDisplay}
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs uppercase tracking-[0.06em] text-champagne font-medium ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                    {t({ en: 'Call', bn: 'কল করুন' })}
                  </span>
                </a>

                <a
                  href={`tel:${RESORT_CONTACT.secondaryPhone}`}
                  className="flex items-center justify-between p-4 bg-charcoal-900/80 hover:bg-charcoal-900 border border-charcoal-800 transition-colors group min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-champagne/20 text-champagne flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-[10px] text-charcoal-400 uppercase tracking-[0.06em] ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                        {t({ en: 'Secondary Reception Line', bn: 'দ্বিতীয় রিসেপশন লাইন' })}
                      </div>
                      <div className="text-sm font-medium text-white font-sansEng group-hover:text-champagne transition-colors tracking-wide">
                        {RESORT_CONTACT.secondaryPhoneDisplay}
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs uppercase tracking-[0.06em] text-champagne font-medium ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                    {t({ en: 'Call', bn: 'কল করুন' })}
                  </span>
                </a>
              </div>
            </div>

            {/* Integrated FAQ Accordion Area */}
            <div className="bg-white p-8 border border-ivory-300 shadow-sm">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
