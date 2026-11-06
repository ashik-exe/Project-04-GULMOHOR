import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, MessageCircle, X } from 'lucide-react';
import type { Language } from './SiteChrome';

type Experience = 'stay' | 'day' | 'pool' | 'event';
type Inquiry = { experience: Experience | ''; date: string; guests: string; eventType: string; selection: string; name: string; phone: string; message: string };
type BookingProps = { open: boolean; language: Language; onClose: () => void };
const STORE_KEY = 'gulmohor-inquiry-demo-v1';
const blank: Inquiry = { experience: '', date: '', guests: '', eventType: '', selection: '', name: '', phone: '', message: '' };

const text = {
  en: {
    title: 'Plan your visit', intro: 'Tell us what you have in mind. The resort will confirm current details directly.', close: 'Close inquiry', step: 'Step', of: 'of', exp: 'What brings you to Gulmohor?', date: 'Preferred date', guests: 'Number of guests', estimatedGuests: 'Estimated guests', eventType: 'Type of gathering', details: 'A date is a starting point. Staff will confirm availability.', choose: 'Choose what you would like to ask about', contact: 'How can the resort reach you?', name: 'Your name', phone: 'Phone number', note: 'Anything else we should know? (optional)', review: 'Review your inquiry', prepared: 'Your inquiry is ready', preparedInfo: 'WhatsApp will open with a draft message. No availability is checked and no reservation is confirmed.', current: 'Current rates, inclusions and availability must be confirmed by the resort.', back: 'Back', next: 'Continue', send: 'Prepare WhatsApp inquiry', open: 'Open WhatsApp', edit: 'Edit details', done: 'Start a new inquiry', stay: 'Overnight stay', day: 'Day out', pool: 'Pool visit', event: 'Event inquiry', stayOption1: 'Couple Deluxe Room', stayOption2: 'Double Deluxe Room', stayOption3: 'Premium Suite Room', dayOption1: 'Day package with meals', dayOption2: 'Day room package', poolOption: 'Pool visit details', eventOption1: 'Wedding or Gaye Holud', eventOption2: 'Family celebration or reunion', eventOption3: 'Corporate or group gathering', nameRequired: 'Enter your name to continue.', phoneRequired: 'Enter a phone number so the resort can reply.', experienceRequired: 'Choose an experience first.', detailsRequired: 'Choose a date and fill in the requested details.', selectionRequired: 'Choose an option to continue.', message: 'Message', summaryExperience: 'Experience', summaryDate: 'Preferred date', summaryGuests: 'Guests', summaryType: 'Event type', summaryChoice: 'Requested option', summaryName: 'Name', summaryPhone: 'Phone', summaryNote: 'Message', guestHint: 'No capacity limit is implied; the resort will advise what can be accommodated.', fallback: 'If WhatsApp does not open, call 01911-498819 and share the details above.',
  },
  bn: {
    title: 'ভ্রমণের তথ্য দিন', intro: 'কী পরিকল্পনা করেছেন ও কবে আসতে চান জানান। বর্তমান তথ্য রিসোর্ট থেকে নিশ্চিত করা হবে।', close: 'ফর্ম বন্ধ করুন', step: 'ধাপ', of: '/', exp: 'কী পরিকল্পনা করছেন?', date: 'আসার তারিখ', guests: 'অতিথির সংখ্যা', estimatedGuests: 'আনুমানিক অতিথির সংখ্যা', eventType: 'অনুষ্ঠানের ধরন', details: 'তারিখ ও অতিথির সংখ্যা জানান। রুম ও অনুষ্ঠান আয়োজনের তথ্য রিসোর্ট থেকে নিশ্চিত করতে হবে।', choose: 'কোন বিষয়ে জানতে চান?', contact: 'আপনার সঙ্গে কীভাবে যোগাযোগ করা যাবে?', name: 'আপনার নাম', phone: 'ফোন নম্বর', note: 'আর কিছু জানাতে চান? (ঐচ্ছিক)', review: 'তথ্যগুলো দেখে নিন', prepared: 'বার্তা তৈরি হয়েছে', preparedInfo: 'WhatsApp-এ পাঠানোর জন্য একটি খসড়া বার্তা খুলবে। বুকিং নিশ্চিত করতে রিসোর্টের উত্তর প্রয়োজন।', current: 'বর্তমান মূল্য, প্যাকেজের সুবিধা ও রুম খালি আছে কি না রিসোর্ট থেকে জেনে নিন।', back: 'পেছনে', next: 'পরবর্তী ধাপ', send: 'WhatsApp-এ বার্তা তৈরি করুন', open: 'WhatsApp খুলুন', edit: 'তথ্য ঠিক করুন', done: 'নতুন করে শুরু করুন', stay: 'রাত্রিযাপন', day: 'ডে প্যাকেজ', pool: 'পুল ব্যবহার', event: 'অনুষ্ঠান', stayOption1: 'Couple Deluxe Room', stayOption2: 'Double Deluxe Room', stayOption3: 'Premium Suite Room', dayOption1: 'খাবারসহ ডে প্যাকেজ', dayOption2: 'ডে রুম প্যাকেজ', poolOption: 'পুল ব্যবহারের তথ্য', eventOption1: 'বিয়ে বা গায়ে হলুদ', eventOption2: 'পারিবারিক অনুষ্ঠান বা পুনর্মিলনী', eventOption3: 'অফিস বা দলের আয়োজন', nameRequired: 'পরবর্তী ধাপে যেতে আপনার নাম লিখুন।', phoneRequired: 'রিসোর্টের উত্তর পেতে ফোন নম্বর লিখুন।', experienceRequired: 'কী জন্য আসছেন, আগে তা বেছে নিন।', detailsRequired: 'তারিখ ও প্রয়োজনীয় তথ্য পূরণ করুন।', selectionRequired: 'একটি বিকল্প বেছে নিন।', message: 'বার্তা', summaryExperience: 'আসার কারণ', summaryDate: 'আসার তারিখ', summaryGuests: 'অতিথির সংখ্যা', summaryType: 'অনুষ্ঠানের ধরন', summaryChoice: 'বেছে নেওয়া বিষয়', summaryName: 'নাম', summaryPhone: 'ফোন', summaryNote: 'অতিরিক্ত তথ্য', guestHint: 'অনুষ্ঠানস্থলের ধারণক্ষমতা নিশ্চিত নয়। আনুমানিক অতিথির সংখ্যা জানান; কতজনের ব্যবস্থা করা যাবে রিসোর্ট জানাবে।', fallback: 'WhatsApp না খুললে 01911-498819 নম্বরে ফোন করে তথ্যগুলো জানান।',
  },
};

function loadSaved(): { step: number; data: Inquiry } {
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    if (!raw) return { step: 0, data: blank };
    const saved = JSON.parse(raw);
    return { step: Math.max(0, Math.min(Number(saved.step) || 0, 5)), data: { ...blank, ...saved.data } };
  } catch { return { step: 0, data: blank }; }
}

export function BookingInquiry({ open, language, onClose }: BookingProps) {
  const copy = text[language];
  const [saved] = useState(loadSaved);
  const [step, setStep] = useState(saved.step);
  const [data, setData] = useState<Inquiry>(saved.data);
  const [error, setError] = useState('');
  const [openedWhatsApp, setOpenedWhatsApp] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const experienceLabel = useMemo(() => data.experience ? copy[data.experience] : '', [copy, data.experience]);
  const minDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  useEffect(() => {
    try { sessionStorage.setItem(STORE_KEY, JSON.stringify({ step, data })); } catch { /* storage is optional */ }
  }, [step, data]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLElement>('button, input, select, textarea')?.focus());
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const update = (field: keyof Inquiry, value: string) => setData(current => ({ ...current, [field]: value }));
  const options = data.experience === 'stay'
    ? [{ value: 'Couple Deluxe Room', label: copy.stayOption1 }, { value: 'Double Deluxe Room', label: copy.stayOption2 }, { value: 'Premium Suite Room', label: copy.stayOption3 }]
    : data.experience === 'day'
      ? [{ value: 'Day package with meals', label: copy.dayOption1 }, { value: 'Day room package', label: copy.dayOption2 }]
      : data.experience === 'pool'
        ? [{ value: 'Pool visit details', label: copy.poolOption }]
        : [{ value: 'Wedding or Gaye Holud', label: copy.eventOption1 }, { value: 'Family celebration or reunion', label: copy.eventOption2 }, { value: 'Corporate or group gathering', label: copy.eventOption3 }];

  const validate = () => {
    if (step === 0 && !data.experience) return copy.experienceRequired;
    if (step === 1 && (!data.date || !data.guests || (data.experience === 'event' && !data.eventType))) return copy.detailsRequired;
    if (step === 2 && !data.selection) return copy.selectionRequired;
    if (step === 3 && !data.name.trim()) return copy.nameRequired;
    if (step === 3 && !data.phone.trim()) return copy.phoneRequired;
    return '';
  };

  const submitStep = (event: FormEvent) => {
    event.preventDefault();
    const message = validate();
    setError(message);
    if (!message) setStep(current => Math.min(5, current + 1));
  };

  const inquiryMessage = [
    'Gulmohor Resort — visit inquiry',
    `Experience: ${experienceLabel}`,
    `Preferred date: ${data.date}`,
    data.guests ? `Guests: ${data.guests}` : '',
    data.eventType ? `Event type: ${data.eventType}` : '',
    data.selection ? `Requested option: ${data.selection}` : '',
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.message ? `Message: ${data.message}` : '',
    'Please confirm current availability, rates and details. This is an inquiry, not a confirmed reservation.',
  ].filter(Boolean).join('\n');
  const waUrl = `https://wa.me/8801911498819?text=${encodeURIComponent(inquiryMessage)}`;

  const rows = [
    [copy.summaryExperience, experienceLabel],
    [copy.summaryDate, data.date],
    [copy.summaryGuests, data.guests],
    [copy.summaryType, data.eventType],
    [copy.summaryChoice, options.find(option => option.value === data.selection)?.label || data.selection],
    [copy.summaryName, data.name],
    [copy.summaryPhone, data.phone],
    [copy.summaryNote, data.message],
  ].filter(([, value]) => value);

  const changeExperience = (value: Experience) => setData(current => ({ ...current, experience: value, selection: '', guests: value === 'stay' || value === 'day' ? current.guests : '', eventType: '' }));

  return <div className="dialog-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div ref={dialogRef} className="booking-dialog" role="dialog" aria-modal="true" aria-labelledby="booking-title" aria-describedby="booking-intro">
      <div className="booking-dialog__top">
        <div><p className="eyebrow">Gulmohor Resort</p><h2 id="booking-title">{copy.title}</h2><p id="booking-intro">{copy.intro}</p></div>
        <button className="icon-button" type="button" aria-label={copy.close} onClick={onClose}><X size={20} /></button>
      </div>
      <div className="booking-progress" aria-label={`${copy.step} ${Math.min(step + 1, 6)} ${copy.of} 6`}>
        <div className="booking-progress__labels"><span>{copy.step} {Math.min(step + 1, 6)} {copy.of} 6</span><span>{Math.round((step / 5) * 100)}%</span></div>
        <div className="booking-progress__track"><span style={{ width: `${Math.max(8, (step / 5) * 100)}%` }} /></div>
      </div>
      {step < 5 ? <form onSubmit={submitStep} noValidate>
        {step === 0 && <fieldset className="booking-step"><legend>{copy.exp}</legend><div className="choice-grid choice-grid--four">
          {(['stay', 'day', 'pool', 'event'] as Experience[]).map(experience => <label className={`choice-card ${data.experience === experience ? 'is-selected' : ''}`} key={experience}><input type="radio" name="experience" value={experience} checked={data.experience === experience} onChange={() => changeExperience(experience)} /><span>{copy[experience]}</span><Check size={17} /></label>)}
        </div></fieldset>}
        {step === 1 && <div className="booking-step"><h3>{language === 'en' ? 'When would you like to come?' : 'কোন তারিখে আসবেন?'}</h3><div className="form-grid">
          <label>{copy.date}<input type="date" min={minDate} required value={data.date} onChange={event => update('date', event.target.value)} /></label>
          <label>{data.experience === 'event' ? copy.estimatedGuests : copy.guests}<select required value={data.guests} onChange={event => update('guests', event.target.value)}><option value="">—</option>{[1, 2, 3, 4, 5, 6, 8, 10, 15, 20, 30, 50].map(value => <option value={value} key={value}>{value}{value === 50 ? '+' : ''}</option>)}</select></label>
          {data.experience === 'event' && <label>{copy.eventType}<select required value={data.eventType} onChange={event => update('eventType', event.target.value)}><option value="">—</option>{[copy.eventOption1, copy.eventOption2, copy.eventOption3].map((label, index) => <option value={['Wedding or Gaye Holud', 'Family celebration or reunion', 'Corporate or group gathering'][index]} key={label}>{label}</option>)}</select></label>}
        </div>{data.experience === 'event' && <p className="form-hint">{copy.guestHint}</p>}<p className="form-hint">{copy.details}</p></div>}
        {step === 2 && <fieldset className="booking-step"><legend>{copy.choose}</legend><div className="choice-grid">{options.map(option => <label className={`choice-card ${data.selection === option.value ? 'is-selected' : ''}`} key={option.value}><input type="radio" name="selection" value={option.value} checked={data.selection === option.value} onChange={() => update('selection', option.value)} /><span>{option.label}</span><Check size={17} /></label>)}</div><p className="form-hint">{copy.current}</p></fieldset>}
        {step === 3 && <div className="booking-step"><h3>{copy.contact}</h3><div className="form-grid"><label>{copy.name}<input autoComplete="name" value={data.name} onChange={event => update('name', event.target.value)} required /></label><label>{copy.phone}<input type="tel" autoComplete="tel" value={data.phone} onChange={event => update('phone', event.target.value)} required /></label><label className="form-grid__full">{copy.note}<textarea rows={3} value={data.message} onChange={event => update('message', event.target.value)} /></label></div></div>}
        {step === 4 && <div className="booking-step"><h3>{copy.review}</h3><dl className="inquiry-summary">{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="form-hint">{copy.current}</p></div>}
        {error && <p className="form-error" role="alert">{error}</p>}
        <div className="booking-controls">{step > 0 && <button className="button button--outline" type="button" onClick={() => { setError(''); setStep(v => v - 1); }}><ArrowLeft size={16} />{copy.back}</button>}<button className="button button--dark" type="submit">{step === 4 ? copy.send : copy.next}<ArrowRight size={16} /></button></div>
      </form> : <div className="booking-step booking-finish"><span className="booking-finish__check"><Check size={22} /></span><h3>{copy.prepared}</h3><p>{copy.preparedInfo}</p><a className="button button--dark" href={waUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpenedWhatsApp(true)}><MessageCircle size={17} />{copy.open}<ArrowRight size={16} /></a><p className="form-hint">{copy.fallback}</p>{openedWhatsApp && <p className="handoff-note" role="status">{language === 'en' ? 'WhatsApp opened with your draft. The resort must reply to confirm.' : 'WhatsApp-এ খসড়া বার্তাটি খুলেছে। বুকিং নিশ্চিত করতে রিসোর্টের উত্তর প্রয়োজন।'}</p>}<button className="text-button" onClick={() => { setError(''); setStep(4); }}>{copy.edit}</button><button className="text-button" onClick={() => { setData(blank); setStep(0); setOpenedWhatsApp(false); setError(''); try { sessionStorage.removeItem(STORE_KEY); } catch { /* optional */ } }}>{copy.done}</button></div>}
      <p className="booking-disclaimer">{language === 'en' ? 'Your details stay in this browser session until you clear or finish this inquiry.' : 'ফর্মে দেওয়া তথ্য ব্রাউজার সেশনে থাকবে। তথ্য মুছলে বা নতুন করে শুরু করলে তা সরানো হবে।'}</p>
    </div>
  </div>;
}
