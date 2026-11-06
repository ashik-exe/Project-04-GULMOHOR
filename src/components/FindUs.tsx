import React from 'react';
import { ExternalLink, Navigation, Car, Bus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { RESORT_CONTACT } from '../data/resortData';

const heritageStops = [
  { title: { en: 'Padma Bridge & Mawa Ghat', bn: 'পদ্মা সেতু ও মাওয়া ঘাট' }, detail: { en: 'A riverfront stop in the wider Mawa area. Check your route and current visitor access before setting out.', bn: 'বৃহত্তর মাওয়া এলাকার নদীতীরবর্তী গন্তব্য। রওনা হওয়ার আগে রুট ও দর্শনার্থীদের বর্তমান প্রবেশব্যবস্থা দেখুন।' }, query: 'Padma Bridge Mawa Ghat Bangladesh' },
  { title: { en: 'Baba Adam’s Mosque', bn: 'বাবা আদমের মসজিদ' }, detail: { en: 'A six-domed Sultanate-period mosque in Munshiganj, dated to 1483 in the inscription record.', bn: 'মুন্সিগঞ্জের ছয় গম্বুজবিশিষ্ট সুলতানি আমলের মসজিদ; শিলালিপির তথ্যে নির্মাণকাল ১৪৮৩।' }, query: 'Baba Adam Mosque Munshiganj' },
  { title: { en: 'Idrakpur Fort', bn: 'ইদ্রাকপুর দুর্গ' }, detail: { en: 'A Mughal-era fort in Munshiganj, built under Subahdar Mir Jumla around 1660.', bn: 'মুন্সিগঞ্জের মুঘল আমলের দুর্গ, সুবাদার মীর জুমলার সময়ে আনুমানিক ১৬৬০ সালে নির্মিত।' }, query: 'Idrakpur Fort Munshiganj' },
  { title: { en: 'Bikrampur Museum & J. C. Bose heritage sites', bn: 'বিক্রমপুর জাদুঘর ও জে. সি. বসুর ঐতিহ্যস্থল' }, detail: { en: 'Explore Bikrampur’s regional history and Rarikhal’s connection to scientist Jagadish Chandra Bose. Confirm opening and access before visiting.', bn: 'বিক্রমপুরের আঞ্চলিক ইতিহাস এবং বিজ্ঞানী জগদীশচন্দ্র বসুর সঙ্গে রাঢ়ীখালের সংযোগ জানুন। যাওয়ার আগে খোলা ও প্রবেশের তথ্য নিশ্চিত করুন।' }, query: 'Bikrampur Museum Rarikhal Jagadish Chandra Bose' },
  { title: { en: 'Arial Beel', bn: 'আড়িয়াল বিল' }, detail: { en: 'A large seasonal wetland in Sreenagar Upazila; boat access and scenery change with the season.', bn: 'শ্রীনগর উপজেলার বিস্তৃত মৌসুমি জলাভূমি; ঋতু অনুযায়ী নৌভ্রমণ ও দৃশ্যপট বদলায়।' }, query: 'Arial Beel Sreenagar' },
  { title: { en: 'Mana Bay Water Park', bn: 'মানা বে ওয়াটার পার্ক' }, detail: { en: 'A water-park outing in Bausia, Gazaria. Check current opening hours, ticketing and travel route with the venue.', bn: 'গজারিয়ার বাউশিয়ায় অবস্থিত ওয়াটার পার্ক। বর্তমান খোলার সময়, টিকিট ও যাতায়াতের রুট ভেন্যু থেকে জেনে নিন।' }, query: 'Mana Bay Water Park Bausia Gazaria' },
];

export const FindUs: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="location" className="py-24 lg:py-32 bg-ivory-100 text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-neutralSoft">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.08em] text-forest font-sansEng font-semibold block mb-3">
            {t({ en: '08 / Location & Navigation', bn: '০৮ / লোকেশন ও যাতায়াত' })}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl text-charcoal text-balance-title ${
              language === 'bn' ? 'font-displayBn font-medium leading-[1.28]' : 'font-serifEng font-light leading-[1.14]'
            }`}
          >
            {t({
              en: 'The Journey to Damla: 30 Minutes from South Dhaka.',
              bn: 'যাত্রাপথ — ঢাকা থেকে এক্সপ্রেসওয়ে ধরে মাত্র ৩০-৪০ মিনিট।',
            })}
          </h2>
          <p
            className={`text-sm sm:text-base text-charcoal-600 mt-4 leading-relaxed max-w-2xl ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}
          >
            {t({
              en: 'Located directly along the Sreenagar-Dohar Highway in the historic Bikrampur region of Munshiganj. Accessible effortlessly via the 8-lane Bangabandhu Expressway or direct commuter bus routes.',
              bn: 'শ্রীনগর-দোহার আঞ্চলিক মহাসড়কের পাশে অবস্থিত হওয়ায় ঢাকা থেকে এক্সপ্রেসওয়ে দিয়ে খুব দ্রুত ও স্বাচ্ছন্দ্যে পৌঁছানো যায়।',
            })}
          </p>
        </div>

        {/* Highway Milestone Travel Roadmap */}
        <div className="bg-sand-light border border-sand-border p-6 sm:p-8 mb-12 shadow-subtle">
          <div className="text-[10px] uppercase tracking-[0.08em] font-sansEng font-semibold text-forest mb-4">
            {t({ en: 'Expressway Route Milestones', bn: 'ঢাকা থেকে পৌঁছানোর সহজ ৪টি ধাপ' })}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutralSoft">
            {/* Milestone 1 */}
            <div className="pt-2 sm:pt-0 sm:px-3 first:pl-0">
              <span className="text-forest text-xs font-serifEng font-semibold block mb-0.5">00 MIN</span>
              <h4 className={`text-xs sm:text-sm font-medium text-charcoal ${language === 'bn' ? 'font-serifBn' : 'font-serifEng'}`}>
                {t({ en: 'South Dhaka Departure', bn: 'ঢাকা থেকে যাত্রা শুরু' })}
              </h4>
              <p className={`text-[11px] text-charcoal-500 mt-0.5 leading-relaxed ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                {t({ en: 'Via Babubazar Bridge or Mayor Hanif Flyover.', bn: 'বাবু বাজার ব্রিজ বা মেয়র হানিফ ফ্লাইওভার দিয়ে।' })}
              </p>
            </div>

            {/* Milestone 2 */}
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-forest text-xs font-serifEng font-semibold block mb-0.5">15 MIN</span>
              <h4 className={`text-xs sm:text-sm font-medium text-charcoal ${language === 'bn' ? 'font-serifBn' : 'font-serifEng'}`}>
                {t({ en: 'N8 Expressway Cruise', bn: 'বঙ্গবন্ধু এক্সপ্রেসওয়ে' })}
              </h4>
              <p className={`text-[11px] text-charcoal-500 mt-0.5 leading-relaxed ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                {t({ en: 'Smooth driving on the 8-lane expressway past Dhaleshwari.', bn: '৮ লেনের দৃষ্টিনন্দন এক্সপ্রেসওয়ে ধরে ধলেশ্বরী পার।' })}
              </p>
            </div>

            {/* Milestone 3 */}
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-forest text-xs font-serifEng font-semibold block mb-0.5">25 MIN</span>
              <h4 className={`text-xs sm:text-sm font-medium text-charcoal ${language === 'bn' ? 'font-serifBn' : 'font-serifEng'}`}>
                {t({ en: 'Sreenagar Exit', bn: 'শ্রীনগর ইন্টারচেঞ্জ' })}
              </h4>
              <p className={`text-[11px] text-charcoal-500 mt-0.5 leading-relaxed ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                {t({ en: 'Exit expressway toward Sreenagar-Dohar Highway.', bn: 'এক্সপ্রেসওয়ে থেকে দোহার আঞ্চলিক মহাসড়কে প্রবেশ।' })}
              </p>
            </div>

            {/* Milestone 4 */}
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-forest text-xs font-serifEng font-semibold block mb-0.5">35 MIN</span>
              <h4 className={`text-xs sm:text-sm font-medium text-charcoal ${language === 'bn' ? 'font-serifBn' : 'font-serifEng'}`}>
                {t({ en: 'Damla Resort Gate', bn: 'গুলমোহর রিসোর্ট গেট' })}
              </h4>
              <p className={`text-[11px] text-charcoal-500 mt-0.5 leading-relaxed ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                {t({ en: 'Opposite Bhuiyan Medical with secured parking.', bn: 'ভুইয়া মেডিকেলের বিপরীতে নিরাপদ পার্কিংযুক্ত গেট।' })}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="max-w-3xl mb-8"><span className="text-[11px] uppercase tracking-[.12em] text-coral font-semibold">{t({ en: 'Explore Munshiganj', bn: 'মুন্সিগঞ্জ ঘুরে দেখুন' })}</span><h3 className={`mt-3 text-3xl sm:text-4xl text-charcoal ${language === 'bn' ? 'font-displayBn' : 'font-serifEng'}`}>{t({ en: 'Add a day of history and river country.', bn: 'বিক্রমপুরের ইতিহাস ও নদীমাতৃক জনপদ ঘুরে দেখুন।' })}</h3><p className="mt-3 text-sm text-charcoal-600">{t({ en: 'Regional day-trip ideas. Travel times vary by traffic and route; check directions and venue access before leaving the resort.', bn: 'আশপাশের ভ্রমণের কিছু ধারণা। যানজট ও রুটভেদে সময় বদলায়; রিসোর্ট থেকে বের হওয়ার আগে দিকনির্দেশনা ও ভেন্যুতে প্রবেশের তথ্য দেখে নিন।' })}</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{heritageStops.map((stop, index) => <article key={stop.query} className="bg-ivory p-6 border border-neutralSoft flex flex-col min-h-52"><span className="font-serifEng text-sm text-coral">0{index + 1}</span><h4 className={`mt-3 text-xl text-charcoal ${language === 'bn' ? 'font-displayBn' : 'font-serifEng'}`}>{t(stop.title)}</h4><p className={`mt-2 text-sm text-charcoal-600 leading-relaxed ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>{t(stop.detail)}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.query)}`} target="_blank" rel="noreferrer" className="mt-auto pt-5 inline-flex items-center gap-2 text-xs text-forest underline underline-offset-4">{t({ en: 'Check route on Maps', bn: 'ম্যাপে রুট দেখুন' })}<ExternalLink className="w-3.5 h-3.5" /></a></article>)}</div>
        </div>

        {/* Minimalist 2-Column Location & Travel Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Coordinates, Address & Transit Notes (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Address & Coordinates Block */}
            <div className="p-8 bg-ivory border border-neutralSoft shadow-subtle space-y-4">
              <span className="text-[10.5px] uppercase tracking-[0.07em] text-forest font-sansEng font-semibold block">
                {t({ en: 'Official Property Address', bn: 'রিসোর্টের ঠিকানা' })}
              </span>
              <h3
                className={`text-xl sm:text-2xl font-normal text-charcoal ${
                  language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-medium'
                }`}
              >
                {t(RESORT_CONTACT.address)}
              </h3>
              <p className={`text-xs text-charcoal-600 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                <span className="font-medium text-charcoal">{t({ en: 'Landmark: ', bn: 'ল্যান্ডমার্ক: ' })}</span>
                {t(RESORT_CONTACT.landmark)}
              </p>

              <div className="pt-4 border-t border-neutralSoft flex flex-wrap items-center justify-between gap-4 text-xs text-charcoal-500 font-light">
                <span className={language === 'bn' ? 'font-sansBn' : 'font-sansEng'}>
                  {t({ en: 'Plus Code: ', bn: 'প্লাস কোড: ' })}
                  <strong className="text-charcoal font-medium font-sansEng">{RESORT_CONTACT.coordinates.plusCode}</strong>
                </span>
                <a
                  href={RESORT_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-forest hover:underline font-semibold min-h-[44px] py-1"
                >
                  <span className={language === 'bn' ? 'font-sansBn' : 'font-sansEng'}>{t({ en: 'Open in Google Maps', bn: 'গুগল ম্যাপে দেখুন' })}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Step-by-Step Route Monograph */}
            <div className="space-y-6 divide-y divide-neutralSoft pt-2">
              {/* Private Drive */}
              <div className="pt-6 first:pt-0">
                <div className="flex items-center gap-2 mb-2 text-charcoal">
                  <Car className="w-4 h-4 text-forest flex-shrink-0" />
                  <h4 className={`text-base sm:text-lg ${language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-medium'}`}>
                    {t({ en: 'Private Vehicle / Ride-Share (30–40 Mins)', bn: 'প্রাইভেট কার / মোটরসাইকেল (৩০–৪০ মিনিট)' })}
                  </h4>
                </div>
                <p className={`text-xs text-charcoal-600 leading-relaxed pl-6 ${
                  language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
                }`}>
                  {t({
                    en: 'Take Babubazar Bridge or Hanif Flyover to the 8-lane Bangabandhu Expressway (N8) → Exit at the Sreenagar interchange → Follow Sreenagar-Dohar Highway toward Damla → Gulmohor Resort Gate is on the right, directly opposite Bikrampur Bhuiyan Medical College. Secure on-site parking for 20+ vehicles.',
                    bn: 'হানিফ ফ্লাইওভার বা বাবু বাজার ব্রিজ হয়ে সরাসরি ৮ লেনের বঙ্গবন্ধু এক্সপ্রেসওয়ে (N8) ধরে শ্রীনগর ইন্টারচেঞ্জে নামুন → দোহার রোডে প্রবেশ করে দামলা স্কুল ও ভুইয়া মেডিকেলের বিপরীতে হাতের ডানে রিসোর্ট গেট। ভেতরে ২০+ গাড়ির নিজস্ব পার্কিং রয়েছে।',
                  })}
                </p>
              </div>

              {/* Public Bus */}
              <div className="pt-6">
                <div className="flex items-center gap-2 mb-2 text-charcoal">
                  <Bus className="w-4 h-4 text-forest flex-shrink-0" />
                  <h4 className={`text-base sm:text-lg ${language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-medium'}`}>
                    {t({ en: 'Public Transit: Seba Paribahan Bus (BDT 50–70)', bn: 'পাবলিক বাস: সেবা পরিবহন (ভাড়া ৫০-৭০ টাকা)' })}
                  </h4>
                </div>
                <p className={`text-xs text-charcoal-600 leading-relaxed pl-6 ${
                  language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
                }`}>
                  {t({
                    en: 'Board direct "Seba Paribahan" bus departing every 15 minutes from Gulistan, Jatrabari, or Postogola. Ask the conductor to drop you off directly at "Damla School / Gulmohor Resort Gate".',
                    bn: 'গুলিস্তান, যাত্রাবাড়ী বা পোস্তগোলা থেকে প্রতি ১৫ মিনিট পর পর ছেড়ে যাওয়া "সেবা পরিবহন" বাসে উঠে কন্ডাক্টরকে বলুন "দামলা স্কুল / গুলমোহর রিসোর্ট গেটে" নামিয়ে দিতে। গেটের ঠিক সামনেই বাস থামে।',
                  })}
                </p>
              </div>
            </div>

            {/* Landmark Verification Strips */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-neutralSoft p-2 bg-ivory">
                <img
                  src="/images/gulmohor/google-maps/exterior/google-maps-exterior-entrance-gate-streetview-1024x576.jpg"
                  alt="Gulmohor black and gold ornamental gate"
                  className="w-full h-24 object-cover"
                />
                <span className={`block text-[10.5px] text-charcoal-500 mt-1 text-center ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-normal'}`}>
                  {t({ en: 'Ornamental Entrance Gate', bn: 'রিসোর্টের মূল ফটক' })}
                </span>
              </div>
              <div className="border border-neutralSoft p-2 bg-ivory">
                <img
                  src="/images/gulmohor/google-maps/exterior/google-maps-exterior-road-bhuiyan-medical-landmark-1024x576.jpg"
                  alt="Opposite landmark Bhuiyan Medical College"
                  className="w-full h-24 object-cover"
                />
                <span className={`block text-[10.5px] text-charcoal-500 mt-1 text-center ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-normal'}`}>
                  {t({ en: 'Opposite: Bhuiyan Medical', bn: 'বিপরীতে: ভুইয়া মেডিকেল' })}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map (6 cols) */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="relative overflow-hidden border border-neutralSoft shadow-subtle bg-white h-[450px] sm:h-[550px]">
              <iframe
                title="Gulmohor Resort Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.763482329768!2d90.25848757602058!3d23.518567397573516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375599001f59f4e7%3A0x20e5959b4c5ddd05!2sGulmohor%20Resort%20%26%20Restaurant!5e0!3m2!1sen!2sbd!4v1730829800000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.85]"
              />
              <div className="absolute top-4 left-4 bg-charcoal-900/85 backdrop-blur-md px-3.5 py-1.5 text-ivory text-xs font-medium shadow-subtle flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-champagne" />
                <span className={language === 'bn' ? 'font-sansBn' : 'font-sansEng'}>
                  {t({ en: 'Sreenagar, Munshiganj', bn: 'শ্রীনগর, মুন্সীগঞ্জ' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
