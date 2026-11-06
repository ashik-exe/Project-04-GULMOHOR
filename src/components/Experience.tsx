import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Experience: React.FC = () => {
  const { language, t } = useLanguage();

  const architecturalTenets = [
    {
      number: '01',
      title: {
        en: 'Classical Architecture & Spacious Layout',
        bn: 'আভিজাত্যময় স্থাপত্য ও সুপরিসর প্রাঙ্গণ',
      },
      text: {
        en: 'White pillars, arched verandas, and open corridors bring a sense of poised calm into the heart of Bikrampur.',
        bn: 'সাদা পিলার, প্রশস্ত বারান্দা ও খোলামেলা করিডোর রিসোর্ট প্রাঙ্গণকে দিয়েছে এক পরিপাটি ও রুচিশীল রূপ।',
      },
    },
    {
      number: '02',
      title: {
        en: 'Shaded Mango Groves & Rose Trails',
        bn: 'ছায়াদার আমবাগান ও গোলাপের হাঁটার পথ',
      },
      text: {
        en: 'Mature mango trees, comfortable garden hammocks, and fresh rose walkways designed for peaceful relaxation.',
        bn: 'পুরনো আমগাছের শীতল ছায়া, ঘাসের ওপর পাতা হ্যামক ও লাল গোলাপের সারি নাগরিক জীবনের ক্লান্তি দূর করে দেয়।',
      },
    },
    {
      number: '03',
      title: {
        en: 'Safe & Private Gated Estate',
        bn: 'নিরাপদ ও নিজস্ব পারিবারিক পরিবেশ',
      },
      text: {
        en: 'A private walled two-acre property with on-site parking for 20+ vehicles, offering complete privacy and security for families and groups.',
        bn: 'বাউন্ডারি ঘেরা দুই একরের সুরক্ষিত চত্বর ও ২০+ গাড়ির নিজস্ব পার্কিং, যা পরিবার ও অতিথিদের দেয় পূর্ণ নিরাপত্তা ও স্বস্তি।',
      },
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-14 border-b border-neutralSoft">
          <div className="lg:col-span-8">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.08em] text-forest font-sansEng font-semibold block mb-3">
              {t({ en: '01 / The Estate Philosophy', bn: '০১ / রিসোর্ট পরিচিতি' })}
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl text-charcoal text-balance-title ${
                language === 'bn' ? 'font-displayBn font-medium leading-[1.28]' : 'font-serifEng font-light leading-[1.14]'
              }`}
            >
              {t({
                en: 'Where Classical Architecture Meets Rural Tranquility.',
                bn: 'মুন্সীগঞ্জের শান্ত প্রকৃতির কোলে সুপরিসর এক আধুনিক রিসোর্ট।',
              })}
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p
              className={`text-sm sm:text-base text-charcoal-600 leading-relaxed ${
                language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
              }`}
            >
              {t({
                en: 'Situated along the Sreenagar-Dohar Highway in historic Bikrampur, Gulmohor Resort provides a peaceful setting for genuine relaxation away from crowded amusement parks.',
                bn: 'শ্রীনগরের দামলায় কোলাহলমুক্ত শান্ত পরিবেশে গড়ে উঠেছে গুলমোহর রিসোর্ট। কোনো বাণিজ্যিক পার্কের ভিড় নেই—নির্মল প্রকৃতি, পরিচ্ছন্ন সুইমিং পুল আর পারিবারিক সময় কাটানোর দারুণ সুযোগ।',
              })}
            </p>
          </div>
        </div>

        {/* Asymmetric Monograph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-14 items-start">
          {/* Left: Curated Dual Imagery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative overflow-hidden shadow-subtle border border-neutralSoft group">
              <img
                src="/images/gulmohor/nature/Courtyard%20Fountain%20Walkway%20under%20Cloudy%20Skies.png"
                alt="Courtyard fountain walkway under cloudy skies at Gulmohor Resort"
                loading="eager"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />
              <div className="p-3.5 bg-ivory-50 border-t border-neutralSoft flex items-center justify-between text-xs text-charcoal-600 font-sansEng">
                <span className={`italic ${language === 'bn' ? 'font-sansBn' : ''}`}>
                  {t({
                    en: 'Grand entrance fountain walkway under open skies',
                    bn: 'রিসোর্ট প্রবেশপথের পানির ফোয়ারা ও প্রশস্ত হাঁটার পথ',
                  })}
                </span>
                <span className="text-[11px] text-charcoal-400 uppercase tracking-[0.06em] font-medium">
                  {t({ en: 'Damla, Sreenagar', bn: 'দামলা, শ্রীনগর' })}
                </span>
              </div>
            </div>

            {/* Inset Secondary Visual */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              <div className="sm:col-span-6 overflow-hidden shadow-subtle border border-neutralSoft">
                <img
                  src="/images/gulmohor/hero/hero-balcony-panoramic-pool-estate.jpg"
                  alt="Upper floor balcony overlooking the pool at Gulmohor"
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="sm:col-span-6">
                <p className={`text-xs sm:text-sm text-charcoal-600 leading-relaxed ${
                  language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
                }`}>
                  {t({
                    en: 'From the entrance water fountain to the upper-floor balconies overlooking the pool, every corner provides a calm perspective.',
                    bn: 'প্রবেশপথের পানির ফোয়ারা থেকে শুরু করে ওপরের তলার ব্যালকনি—সবখান থেকেই উপভোগ করা যায় পুল ও সবুজের পরিচ্ছন্ন দৃশ্য।',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Architectural Tenets with Fine Hairline Dividers */}
          <div className="lg:col-span-5 space-y-8 lg:pl-2">
            <div className="divide-y divide-neutralSoft">
              {architecturalTenets.map((tenet) => (
                <div key={tenet.number} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-sm font-serifEng text-forest font-semibold tracking-wide">
                      {tenet.number}
                    </span>
                    <h3
                      className={`text-lg sm:text-xl font-normal text-charcoal tracking-tight ${
                        language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                      }`}
                    >
                      {t(tenet.title)}
                    </h3>
                  </div>
                  <p
                    className={`text-xs sm:text-sm text-charcoal-600 leading-relaxed pl-7 ${
                      language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
                    }`}
                  >
                    {t(tenet.text)}
                  </p>
                </div>
              ))}
            </div>

            {/* Editorial Footnote */}
            <div className="p-5 bg-sand-light border-l-2 border-forest">
              <span className={`text-[10.5px] uppercase tracking-[0.06em] text-charcoal-500 font-medium block mb-1 ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>
                {t({ en: 'Reservation Policy', bn: 'বুকিং সম্পর্কিত তথ্য' })}
              </span>
              <p className={`text-xs text-charcoal-700 leading-relaxed ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
                {t({
                  en: 'To maintain guest comfort and privacy, concurrent bookings are limited. Prior reservation is recommended for day packages and overnight stays.',
                  bn: 'অতিথিদের নিরিবিলি পরিবেশ ও স্বাচ্ছন্দ্য বজায় রাখতে সীমিত সংখ্যক বুকিং নেওয়া হয়। আগমনের পূর্বে ফোন বা WhatsApp-এ বুকিং নিশ্চিত করে নেওয়ার অনুরোধ রইল।',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
