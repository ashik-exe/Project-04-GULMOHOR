import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Dining: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCourseTab, setActiveCourseTab] = useState<'lunch' | 'breakfast' | 'bbq' | 'feast'>('lunch');

  const menuCourses = {
    lunch: [
      { course: { en: 'Grain', bn: 'প্রধান পদ' }, name: { en: 'Egg & Vegetable Fried Rice', bn: 'এগ ও ভেজিটেবল ফ্রাইড রাইস' }, note: { en: 'Wok-tossed fragrant basmati with farm eggs & crisp garden vegetables', bn: 'সুগন্ধি চালের তৈরি চাইনিজ ফ্রাইড রাইস ও দেশি ডিম' } },
      { course: { en: 'Protein', bn: 'স্পেশাল ফ্রাই' }, name: { en: 'Crispy Fried Chicken', bn: 'মুচমুচে ফ্রাইড চিকেন' }, note: { en: 'Marinated in ginger, garlic & regional spices, fried golden', bn: 'মচমচে গোল্ডেন ফ্রাইড চিকেন' } },
      { course: { en: 'Entrée', bn: 'গ্রেভি পদ' }, name: { en: 'Chicken Chili Onion', bn: 'চিকেন চিলি অনিয়ন' }, note: { en: 'Tender chicken strips tossed with capsicum, green chili & onion gravy', bn: 'ঝাল ও স্বাদে ভরপুর চিকেন চিলি গ্রেভি' } },
      { course: { en: 'Side', bn: 'সালাদ' }, name: { en: 'Fresh Green Garden Salad', bn: 'ফ্রেশ গ্রিন সালাদ' }, note: { en: 'Crisp cucumber, tomatoes, lemon wedges & green chili', bn: 'শসা, টমেটো ও লেবুর তাজা সালাদ' } },
    ],
    breakfast: [
      { course: { en: 'Bread', bn: 'রুটি' }, name: { en: 'Fresh Hand-Rolled Parathas', bn: 'গরম লাল আটার পরোটা' }, note: { en: 'Served piping hot straight from the tawa', bn: 'তাওয়া থেকে সরাসরি পরিবেশনকৃত খাস্তা পরোটা' } },
      { course: { en: 'Lentil', bn: 'ডাল' }, name: { en: 'Thick Spiced Chana Daal', bn: 'মজাদার ঘন ছোলার ডাল' }, note: { en: 'Slow-simmered with cumin, garlic & whole dry chili', bn: 'জিরা ও রসুন বাঘার দেওয়া সুস্বাদু ঘন ডাল' } },
      { course: { en: 'Egg', bn: 'ডিম' }, name: { en: 'Farm Fresh Egg Omelette / Poach', bn: 'দেশি ডিমের ওমলেট / পোচ' }, note: { en: 'Prepared to your preference with onions & green chili', bn: 'পেঁয়াজ-মরিচ দিয়ে ভাজা গরম ডিম' } },
      { course: { en: 'Tea', bn: 'চা' }, name: { en: 'Hot Milk Tea or Black Spiced Tea', bn: 'গরম দুধ চা / রঙ চা' }, note: { en: 'Traditional morning brew', bn: 'সকালের স্নিগ্ধতার সাথে স্পেশাল চা' } },
    ],
    bbq: [
      { course: { en: 'Grill', bn: 'বারবিকিউ' }, name: { en: 'Charcoal Chicken Tikka', bn: 'কয়লার আগুনে চিকেন টিক্কা' }, note: { en: 'Marinated overnight in hung yogurt and ground spices', bn: 'তাজা মসলায় জারিত মচমচে কাবাব' } },
      { course: { en: 'Skewer', bn: 'শিক' }, name: { en: 'Spiced Chicken Boti & Seekh', bn: 'চিকেন বটি ও শিক কাবাব' }, note: { en: 'Smoky skewered cuts seared over natural lumpwood coals', bn: 'খোলা আকাশের নিচে কয়লার আঁচে পোড়া সুস্বাদু কাবাব' } },
      { course: { en: 'Bread', bn: 'রুটি' }, name: { en: 'Tandoori Butter Naan', bn: 'গরম বাটার নান' }, note: { en: 'Brushed with golden butter and fresh coriander', bn: 'বাটার ও ধনেপাতার সুবাসিত নান' } },
      { course: { en: 'Dip', bn: 'চাটনি' }, name: { en: 'Mint Raita & Tamarind Chutney', bn: 'পুদিনা রায়তা ও তেঁতুলের চাটনি' }, note: { en: 'Tangy fresh yogurt accompaniments', bn: 'কাবাবের সাথে পারফেক্ট টক-ঝাল চাটনি' } },
    ],
    feast: [
      { course: { en: 'Iftar / Feast', bn: 'ইফতার ও ভোজ' }, name: { en: 'Traditional Ramadan Platter (৳500)', bn: 'রমজান স্পেশাল ইফতার প্ল্যাটার (৳৫০০)' }, note: { en: 'Alu Chop, Beguni, Piaju, Chola Boot, Jilapi, Dates & Sharbat', bn: 'আলুর চপ, বেগুনি, পিঁয়াজু, ছোলা বুট, মুড়ি, জিলাপি ও রুহ আফজা শরবত' } },
      { course: { en: 'Banquet', bn: 'মূল খাবার' }, name: { en: 'Special Mutton Kacchi / Roast', bn: 'স্পেশাল মাটন কাচ্চি / চিকেন রোস্ট' }, note: { en: 'Available on advance order for group celebrations and banquets', bn: 'পারিবারিক বা কর্পোরেট অনুষ্ঠানে স্পেশাল অর্ডারে পরিবেশিত' } },
      { course: { en: 'Curry', bn: 'মাছ' }, name: { en: 'Seasonal Pond Fish & Regional Bhortas', bn: 'তাজা মাছের ঝোল ও দেশি ভর্তা' }, note: { en: 'Authentic Munshiganj village flavors with steamed rice', bn: 'বিক্রমপুরের ঐতিহ্যে রান্না দেশি মাছের পদ' } },
      { course: { en: 'Sweet', bn: 'মিষ্টি' }, name: { en: 'Payesh & Traditional Sweets', bn: 'পায়েস ও মিষ্টান্ন' }, note: { en: 'Traditional dessert finish', bn: 'মিষ্টিমুখের জন্য ঘরে তৈরি পায়েস' } },
    ],
  };

  return (
    <section id="dining" className="py-24 lg:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-neutralSoft">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.08em] text-forest font-sansEng font-semibold block mb-3">
            {t({ en: '05 / Culinary Experiences & The Hearth', bn: '০৫ / রেস্টুরেন্ট ও খাদ্য সংস্কৃতি' })}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl text-charcoal text-balance-title ${
              language === 'bn' ? 'font-displayBn font-medium leading-[1.28]' : 'font-serifEng font-light leading-[1.14]'
            }`}
          >
            {t({
              en: 'Poolside Dining by Day. The Crackle of the Charcoal Hearth by Dusk.',
              bn: 'দিনের আলোয় পুলভিউ ডাইনিং, আর সন্ধ্যায় কয়লার আগুনে লাইভ বারবিকিউ।',
            })}
          </h2>
          <p
            className={`text-sm sm:text-base text-charcoal-600 mt-4 leading-relaxed max-w-2xl ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}
          >
            {t({
              en: 'Savor regional Bengali feasts and Chinese banquets inside our air-conditioned glass restaurant overlooking the swimming pool, or gather under the evening sky for sizzling charcoal skewers straight from the grill.',
              bn: 'কাঁচের দেয়াল ঘেঁষে নীল পানির পুল দেখতে দেখতে উপভোগ করুন তাজা বাংলা খাবার, কিংবা খোলা আকাশের নিচে কয়লার আগুনে ঝলসানো লাইভ বারবিকিউ কাবাব।',
            })}
          </p>
        </div>

        {/* Dual Venue Presentation: Indoor Glass Hall vs Live Hearth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Venue 1: Indoor Restaurant (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative overflow-hidden shadow-subtle border border-neutralSoft group">
              <img
                src="/images/gulmohor/dining/dining-restaurant-panoramic-pool-view.jpg"
                alt="Air-conditioned restaurant with panoramic glass pool views at Gulmohor"
                loading="eager"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <span className="text-[10.5px] uppercase tracking-[0.07em] text-champagne font-sansEng font-medium block mb-1">
                  {t({ en: 'Air-Conditioned Indoor Hall', bn: 'শীতাতপ নিয়ন্ত্রিত রেস্টুরেন্ট' })}
                </span>
                <h3
                  className={`text-2xl text-ivory ${
                    language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                  }`}
                >
                  {t({ en: 'Floor-to-Ceiling Poolside Glass Hall', bn: 'পুলভিউ ইনডোর রেস্টুরেন্ট' })}
                </h3>
              </div>
            </div>
            <p className={`text-xs sm:text-sm text-charcoal-600 leading-relaxed ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}>
              {t({
                en: 'An air-conditioned dining hall with views of the swimming pool. Meal arrangements are available for staying guests and day-outing packages; confirm walk-in dining and current menu details with the resort.',
                bn: 'সুইমিং পুলের দৃশ্যসহ শীতাতপ নিয়ন্ত্রিত ডাইনিং হল। আবাসিক অতিথি ও ডে-আউট প্যাকেজের জন্য খাবারের ব্যবস্থা আছে; সরাসরি এসে খাবার ও বর্তমান মেনু রিসোর্ট থেকে নিশ্চিত করুন।',
              })}
            </p>
          </div>

          {/* Venue 2: Live Charcoal Hearth (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative overflow-hidden shadow-subtle border border-neutralSoft group">
              <img
                src="/images/gulmohor/dining/dining-traditional-iftar-delicacies.jpg"
                alt="Freshly prepared evening skewers and delicacies at Gulmohor Resort"
                loading="eager"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <span className="text-[10.5px] uppercase tracking-[0.07em] text-champagne font-sansEng font-medium block mb-1">
                  {t({ en: 'Evening Live Kitchen', bn: 'লাইভ বারবিকিউ কিচেন' })}
                </span>
                <h3
                  className={`text-2xl text-ivory ${
                    language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                  }`}
                >
                  {t({
                    en: 'Evening Live BBQ by the Poolside',
                    bn: 'পুলের পাশে সন্ধ্যার লাইভ বারবিকিউ',
                  })}
                </h3>
              </div>
            </div>
            <p className={`text-xs sm:text-sm text-charcoal-600 leading-relaxed ${
              language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
            }`}>
              {t({
                en: 'At twilight, our open hearth fires up natural lumpwood charcoal by the poolside patio. Savor charred chicken tikka, spiced boti skewers, and butter naan under the stars.',
                bn: 'সন্ধ্যা নামতেই পুলের পাশে শুরু হয় লাইভ বারবিকিউ। তাজা মসলায় ভাজা চিকেন টিক্কা, শিক কাবাব ও বাটার নান নিয়ে জমে ওঠে সন্ধ্যার আড্ডা।',
              })}
            </p>
          </div>
        </div>

        {/* Editorial Degustation Menu Explorer */}
        <div className="bg-ivory-100 p-8 sm:p-12 border border-neutralSoft shadow-subtle">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutralSoft">
            <div>
              <span className="text-[10.5px] uppercase tracking-[0.07em] text-forest font-sansEng font-semibold block mb-1">
                {t({ en: 'Curated Culinary Selections', bn: 'খাবারের মেনু' })}
              </span>
              <h3
                className={`text-2xl sm:text-3xl text-charcoal ${
                  language === 'bn' ? 'font-displayBn font-medium' : 'font-serifEng font-light'
                }`}
              >
                {t({ en: 'Tasting Notes & Meal Courses', bn: 'খাবারের নির্বাচিত মেনু ও আয়োজন' })}
              </h3>
            </div>

            {/* Menu Course Selectors (Fine Underline Tabs) */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs uppercase tracking-[0.06em] font-sansEng font-medium">
              <button
                onClick={() => setActiveCourseTab('lunch')}
                className={`pb-1 transition-all ${
                  activeCourseTab === 'lunch'
                    ? 'border-b-2 border-forest text-forest font-semibold'
                    : 'text-charcoal-400 hover:text-charcoal border-b-2 border-transparent'
                }`}
              >
                {t({ en: 'Day Lunch Set', bn: 'দুপুরের খাবার' })}
              </button>

              <button
                onClick={() => setActiveCourseTab('breakfast')}
                className={`pb-1 transition-all ${
                  activeCourseTab === 'breakfast'
                    ? 'border-b-2 border-forest text-forest font-semibold'
                    : 'text-charcoal-400 hover:text-charcoal border-b-2 border-transparent'
                }`}
              >
                {t({ en: 'Morning Breakfast', bn: 'সকালের নাস্তা' })}
              </button>

              <button
                onClick={() => setActiveCourseTab('bbq')}
                className={`pb-1 transition-all ${
                  activeCourseTab === 'bbq'
                    ? 'border-b-2 border-forest text-forest font-semibold'
                    : 'text-charcoal-400 hover:text-charcoal border-b-2 border-transparent'
                }`}
              >
                {t({ en: 'Evening Live BBQ', bn: 'লাইভ বারবিকিউ' })}
              </button>

              <button
                onClick={() => setActiveCourseTab('feast')}
                className={`pb-1 transition-all ${
                  activeCourseTab === 'feast'
                    ? 'border-b-2 border-forest text-forest font-semibold'
                    : 'text-charcoal-400 hover:text-charcoal border-b-2 border-transparent'
                }`}
              >
                {t({ en: 'Ramadan Feast (৳500)', bn: 'ইফতার ও উৎসবের ভোজ' })}
              </button>
            </div>
          </div>

          {/* Active Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {menuCourses[activeCourseTab].map((item, idx) => (
              <div key={idx} className="p-5 bg-ivory border border-neutralSoft/70 shadow-2xs hover:border-champagne/60 transition-all">
                <span className="text-[10px] uppercase tracking-[0.08em] text-forest font-sansEng font-semibold block mb-1">
                  {t(item.course)}
                </span>
                <h4
                  className={`text-base font-normal text-charcoal mb-1.5 ${
                    language === 'bn' ? 'font-serifBn font-medium' : 'font-serifEng'
                  }`}
                >
                  {t(item.name)}
                </h4>
                <p className={`text-xs text-charcoal-600 leading-relaxed text-pretty ${
                  language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'
                }`}>
                  {t(item.note)}
                </p>
              </div>
            ))}
          </div>

          {/* Chef's Note & Custom Menu Inquiries */}
          <div className="mt-10 pt-6 border-t border-neutralSoft flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-600">
            <div className={`max-w-xl ${language === 'bn' ? 'font-sansBn' : 'font-sansEng font-light'}`}>
              <span className="font-semibold text-charcoal block mb-0.5 font-sansEng text-[11px] uppercase tracking-wider text-champagne-dark">
                {t({ en: 'Sourcing Philosophy', bn: 'খাবারের মান ও বিশুদ্ধতা' })}
              </span>
              <p className="text-[11.5px] leading-relaxed">
                {t({
                  en: 'Locally sourced ingredients from Bikrampur farms, fresh country produce, and slow-marinated barbecue prepared over natural wood charcoal. Special dietary requests accommodated.',
                  bn: 'বিক্রমপুরের স্থানীয় খামার ও বাজার থেকে সংগৃহীত তাজা উপাদান, দেশি মুরগি এবং প্রাকৃতিক কয়লার আঁচে তৈরি স্পেশাল বারবিকিউ। যেকোনো স্পেশাল অর্ডারে খাবার পরিবেশন সম্ভব।',
                })}
              </p>
            </div>

            <a
              href="https://wa.me/8801911498819?text=Hello%20Gulmohor%20Resort,%20I%20would%20like%20to%20inquire%20about%20your%20dining%20menu%20and%20catering%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest hover:bg-forest-hover text-ivory text-xs uppercase tracking-[0.05em] font-medium transition-all shadow-subtle min-h-[44px] whitespace-nowrap self-start sm:self-auto"
            >
              <span>{t({ en: 'Inquire on WhatsApp', bn: 'মেনু সম্পর্কে জানতে WhatsApp করুন' })}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
