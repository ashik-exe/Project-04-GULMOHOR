import React, { useState } from 'react';
import { ArrowRight, CalendarDays, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PACKAGES, ROOMS } from '../data/resortData';

export const BookingSearch: React.FC = () => {
  const { t } = useLanguage();
  const [option, setOption] = useState('couple-deluxe');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [guests, setGuests] = useState(2);
  const [error, setError] = useState('');
  const [ready, setReady] = useState(false);
  const minDate = new Date().toISOString().slice(0, 10);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!arrival || !departure || departure <= arrival || guests < 1) {
      setError(t({ en: 'Choose valid dates. Departure must be after arrival.', bn: 'সঠিক তারিখ নির্বাচন করুন। ফেরার তারিখ আগমনের তারিখের পরে হতে হবে।' }));
      setReady(false);
      return;
    }
    setError('');
    setReady(true);
  };

  const continueToInquiry = () => {
    window.dispatchEvent(new CustomEvent('gulmohor:booking-draft', { detail: { option, arrival, departure, guests } }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return <section aria-label={t({ en: 'Check dates', bn: 'তারিখ যাচাই' })} className="relative z-20 bg-ivory px-4 py-8 sm:py-10">
    <form onSubmit={submit} className="max-w-6xl mx-auto bg-ivory border border-sand-border shadow-editorial p-5 sm:p-7 lg:px-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_.8fr_auto] gap-4 items-end">
        <label className="block text-xs text-charcoal-600">{t({ en: 'Experience', bn: 'অভিজ্ঞতা নির্বাচন' })}
          <select value={option} onChange={e => setOption(e.target.value)} className="mt-2 w-full border-b border-charcoal-300 bg-transparent py-3 text-sm text-charcoal-900 focus:border-forest focus:outline-none">
            <optgroup label={t({ en: 'Overnight stays', bn: 'রাত্রিযাপন' })}>{ROOMS.map(room => <option key={room.id} value={room.id}>{t(room.name)}</option>)}</optgroup>
            <optgroup label={t({ en: 'Day visits', bn: 'ডে ভিজিট' })}>{PACKAGES.filter(p => p.type === 'day').map(item => <option key={item.id} value={item.id}>{t(item.title)}</option>)}</optgroup>
          </select>
        </label>
        <label className="block text-xs text-charcoal-600">{t({ en: 'Arrival', bn: 'আগমনের তারিখ' })}<span className="relative block"><CalendarDays className="absolute left-0 top-3.5 w-4 h-4 text-forest" /><input aria-label={t({ en: 'Arrival date', bn: 'আগমনের তারিখ' })} type="date" min={minDate} required value={arrival} onChange={e => { setArrival(e.target.value); setReady(false); }} className="mt-1 w-full border-b border-charcoal-300 bg-transparent py-3 pl-6 text-sm" /></span></label>
        <label className="block text-xs text-charcoal-600">{t({ en: 'Departure', bn: 'প্রস্থানের তারিখ' })}<input aria-label={t({ en: 'Departure date', bn: 'প্রস্থানের তারিখ' })} type="date" min={arrival || minDate} required value={departure} onChange={e => { setDeparture(e.target.value); setReady(false); }} className="mt-1 w-full border-b border-charcoal-300 bg-transparent py-3 text-sm" /></label>
        <label className="block text-xs text-charcoal-600">{t({ en: 'Guests', bn: 'অতিথি' })}<span className="relative block"><Users className="absolute left-0 top-3.5 w-4 h-4 text-forest" /><select value={guests} onChange={e => setGuests(Number(e.target.value))} className="mt-1 w-full border-b border-charcoal-300 bg-transparent py-3 pl-6 text-sm">{[1,2,3,4,5,6,8,10].map(n => <option key={n} value={n}>{n}</option>)}</select></span></label>
        <button className="min-h-12 flex items-center justify-center gap-2 bg-coral px-6 py-3 text-sm text-ivory hover:bg-coral-hover transition-colors" type="submit">{t({ en: 'Check dates', bn: 'তারিখ যাচাই' })}<ArrowRight className="w-4 h-4" /></button>
      </div>
      <div aria-live="polite" className="mt-3 text-sm">{error && <p className="text-red-800">{error}</p>}{ready && <div className="flex flex-wrap items-center justify-between gap-3 text-forest"><p>{t({ en: 'Dates captured. Availability and final rates must be confirmed by the resort.', bn: 'তারিখ সংরক্ষিত। রিসোর্ট কর্তৃপক্ষের কাছ থেকে সুবিধা ও চূড়ান্ত মূল্য নিশ্চিত করুন।' })}</p><button type="button" onClick={continueToInquiry} className="underline underline-offset-4">{t({ en: 'Continue to inquiry', bn: 'অনুসন্ধান ফর্মে যান' })}</button></div>}</div>
      <p className="mt-2 text-[11px] text-charcoal-500">{t({ en: 'Availability is confirmed by the resort. This search does not make a reservation.', bn: 'সুবিধা রিসোর্ট কর্তৃপক্ষ নিশ্চিত করবেন। এই অনুসন্ধানে রিজার্ভেশন নিশ্চিত হয় না।' })}</p>
    </form>
  </section>;
};
