import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const videos = [
  { id: 'yQcPD0Rjvpg', title: { en: 'Complete resort tour', bn: 'রিসোর্টের পূর্ণাঙ্গ ভ্রমণ' }, by: 'RATUL & RUBAIYA', duration: '13:47', image: '/images/gulmohor/hero/hero-mansion-pool-rose-foreground.jpg' },
  { id: 'gWOhqySk9Zw', title: { en: 'Pool, rooms & event spaces', bn: 'পুল, রুম ও অনুষ্ঠান আয়োজন' }, by: 'Ashraful Anik Vlogs', duration: '11:21', image: '/images/gulmohor/pool/pool-mansion-facade-reflection.jpg' },
  { id: 'xpRIQJxgReY', title: { en: 'Suite and journey to Damla', bn: 'স্যুট ও দামলায় যাওয়ার পথ' }, by: 'md juglul haidar', duration: '12:16', image: '/images/gulmohor/rooms/room-suite-living-lounge.jpg' },
  { id: 'AsEM_f9dtco', title: { en: 'Gardens, pool & lawn', bn: 'বাগান, পুল ও লন' }, by: 'Kobi The Explorer', duration: '03:24', image: '/images/gulmohor/nature/nature-blooming-rose-gardens.jpg' },
  { id: 'Ta6ltelbwVE', title: { en: 'A celebration at Gulmohor', bn: 'গুলমোহরে একটি উদযাপন' }, by: 'ভোজন রসিক - vojon rosik food', duration: '13:58', image: '/images/gulmohor/events/events-promenade-night-illumination.jpg' },
];

export const VideoShowcase: React.FC = () => {
  const { language, t } = useLanguage();
  const [active, setActive] = useState(0);
  const video = videos[active];
  return <section id="resort-videos" className="py-20 sm:py-24 bg-forest text-ivory">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-9"><p className="text-[11px] uppercase tracking-[.14em] text-champagne mb-3">{t({ en: 'Video journal / Public creator footage', bn: 'ভিডিও জার্নাল / প্রকাশ্য নির্মাতা ভিডিও' })}</p><h2 className={`text-4xl sm:text-5xl ${language === 'bn' ? 'font-displayBn' : 'font-serifEng'}`}>{t({ en: 'Gulmohor, in motion.', bn: 'চলমান দৃশ্যে গুলমোহর।' })}</h2><p className="mt-3 max-w-2xl text-sm text-ivory/70">{t({ en: 'Resort visits filmed by independent creators. Use the playlist to switch videos; playback controls are provided by YouTube.', bn: 'স্বতন্ত্র নির্মাতাদের ধারণ করা রিসোর্ট ভ্রমণ। ভিডিও বদলাতে তালিকা ব্যবহার করুন; YouTube প্লেব্যাক নিয়ন্ত্রণ দেয়।' })}</p></div>
      <div className="grid lg:grid-cols-[1.65fr_.85fr] gap-5">
        <div className="bg-charcoal"><div className="aspect-video bg-charcoal-950"><iframe key={video.id} className="w-full h-full" src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&playsinline=1`} title={`${t(video.title)} — ${video.by}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" /></div><div className="p-5 sm:p-7 flex items-center justify-between flex-wrap gap-4"><div><span className="text-[10px] uppercase tracking-widest text-champagne">{video.by} · {video.duration}</span><h3 className={`mt-1 text-2xl ${language === 'bn' ? 'font-displayBn' : 'font-serifEng'}`}>{t(video.title)}</h3></div><a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm underline underline-offset-4">{t({ en: 'Open on YouTube', bn: 'YouTube-এ খুলুন' })}<ArrowUpRight className="w-4 h-4" /></a></div></div>
        <div className="divide-y divide-charcoal-200 bg-ivory border border-sand-border">{videos.map((item, index) => <button key={item.id} onClick={() => setActive(index)} aria-pressed={active === index} className={`w-full p-3 flex gap-3 text-left transition-colors ${active === index ? 'bg-forest text-ivory' : 'hover:bg-white text-charcoal'}`}><img src={item.image} alt="" className="w-24 h-16 object-cover" /><span className="flex-1 min-w-0 self-center"><span className={`block text-sm leading-snug ${language === 'bn' ? 'font-sansBn' : 'font-sansEng'}`}>{t(item.title)}</span><span className="block text-[10px] mt-1 opacity-70">{item.by} · {item.duration}</span></span></button>)}</div>
      </div>
      <p className="mt-3 text-[11px] text-ivory/60">{t({ en: 'These videos are published by independent creators; Gulmohor does not claim ownership.', bn: 'ভিডিওগুলো স্বতন্ত্র নির্মাতাদের প্রকাশিত; গুলমোহর এগুলোর মালিকানা দাবি করে না।' })}</p>
    </div>
  </section>;
};
