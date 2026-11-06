import React from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import heroImage from '../../new hero image.png';
import { Language, Photo, localizedPath } from '../components/SiteChrome';
import { PhotoGalleryExperience } from '../components/PhotoGalleryExperience';

type PageProps = { language: Language; onBook: () => void };
function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
function InquiryButton({ language, onClick, children }: { language: Language; onClick: () => void; children?: React.ReactNode }) {
  return <button className="button button--dark" onClick={onClick}>{children || (language === 'en' ? 'Make an inquiry' : 'রিসোর্টে যোগাযোগ করুন')}<ArrowUpRight size={16} /></button>;
}
function FeaturePhoto({ name, alt, caption, className = '' }: { name: string; alt: string; caption?: string; className?: string }) {
  return <figure className={`feature-photo ${className}`}><Photo name={name} alt={alt} /><figcaption>{caption}</figcaption></figure>;
}

export function HomePage({ language, onBook }: PageProps) {
  const en = language === 'en';
  const p = {
    heroEyebrow: en ? 'Gulmohor Resort & Restaurant · Damla, Munshiganj' : 'গুলমোহর রিসোর্ট অ্যান্ড রেস্টুরেন্ট · দামলা, মুন্সিগঞ্জ',
    heroTitle: en ? 'A little room to slow down.' : 'ছুটির দিনটা হোক পুলপাড়ে',
    heroBody: en ? 'Spend time by the pool, in the garden, around the table, or stay a little longer.' : 'পুলে সাঁতার কাটুন, বাগানে সময় কাটান, ডাইনিংয়ে খাওয়াদাওয়া করুন, চাইলে রাতেও থাকুন।',
    explore: en ? 'Explore the resort' : 'রিসোর্ট দেখুন',
    aboutLabel: en ? 'Discover Gulmohor' : 'রিসোর্ট পরিচিতি',
    aboutTitle: en ? 'A welcoming place for days well spent.' : 'পুলে সাঁতার, বাগানে অবসর',
    aboutBody: en ? 'Set along the Sreenagar–Dohar Highway, Gulmohor brings together a pool, gardens, dining and guest rooms in one relaxed resort setting.' : 'শ্রীনগর–দোহার হাইওয়ের পাশে এই রিসোর্টে রয়েছে সুইমিং পুল, বাগান, ডাইনিং এবং অতিথিকক্ষ।',
    stayLabel: en ? 'Stay a while' : 'রাত্রিযাপন',
    stayTitle: en ? 'Find the room that fits your visit.' : 'রুম বেছে নিন, ছুটিটা বাড়িয়ে নিন',
    stayBody: en ? 'Three room categories are listed in the resort information. Ask the team for current rates, room details and availability.' : 'তিন ধরনের রুমের বিবরণ দেখুন। বর্তমান মূল্য ও রুম ফাঁকা আছে কি না রিসোর্ট থেকে জেনে নিন।',
    rooms: en ? ['Couple Deluxe Room', 'Double Deluxe Room', 'Premium Suite Room'] : ['Couple Deluxe Room', 'Double Deluxe Room', 'Premium Suite Room'],
    details: en ? 'Explore the rooms' : 'রুম দেখুন',
    poolLabel: en ? 'Pool & leisure' : 'পুল ও অবসর',
    poolTitle: en ? 'The day has its own pace here.' : 'সাঁতারের পর পুলপাড়ে বসুন',
    poolBody: en ? 'Take a swim, find a seat by the water, then let the afternoon unfold. Ask the resort about current pool access, hours and visitor rules.' : 'পুল ব্যবহার, সময়সূচি ও প্রবেশের নিয়ম আগে রিসোর্ট থেকে জেনে নিন।',
    gardensLabel: en ? 'Gardens & nature' : 'বাগান ও প্রকৃতি',
    gardensTitle: en ? 'A quiet corner under the trees.' : 'ছায়ায় বসুন, হ্যামকে একটু আরাম করুন',
    gardensBody: en ? 'Shaded garden paths, a hammock and open lawn offer a softer counterpoint to the poolside.' : 'বাগানের গাছের ছায়ায় হাঁটুন, হ্যামকে বসুন, কিংবা লনে সময় কাটান।',
    diningLabel: en ? 'Dining' : 'ডাইনিং',
    diningTitle: en ? 'Make time for the table.' : 'পুলের পাশে বসে খাওয়াদাওয়া',
    diningBody: en ? 'The resort research describes an indoor dining room and outdoor seating. Ask about today’s menu, walk-in dining and event catering before you visit.' : 'রিসোর্টে ইনডোর ডাইনিং রুম ও বাইরের বসার জায়গা রয়েছে। যাওয়ার আগে মেনু, walk-in dining ও অনুষ্ঠানের খাবারের ব্যবস্থা সম্পর্কে জেনে নিন।',
    packagesLabel: en ? 'Day out' : 'ডে আউট',
    packagesTitle: en ? 'A change of scene, for a few hours or a day.' : 'কয়েক ঘণ্টার ছুটি, কিংবা পুরো দিন',
    packagesBody: en ? 'Day packages and pool visits appear in the available research. Rates and inclusions can change, so request the current details.' : 'ডে প্যাকেজ ও পুল ভিজিটের সুযোগ আছে। বর্তমান মূল্য ও প্যাকেজে কী কী অন্তর্ভুক্ত, তা জেনে নিন।',
    askPackages: en ? 'Ask about a day visit' : 'ডে ভিজিট সম্পর্কে জানুন',
    eventLabel: en ? 'Gather here' : 'অনুষ্ঠান ও আয়োজন',
    eventTitle: en ? 'Bring everyone together.' : 'হল না লন—কেমন হবে আপনাদের আয়োজন?',
    eventBody: en ? 'The resort’s research record includes an indoor hall and outdoor lawn or marquee setups for celebrations and gatherings. Ask what is currently available for your date.' : 'ইনডোর হল ও বাইরের লন বা মার্কিতে অনুষ্ঠান আয়োজনের ব্যবস্থা সম্পর্কে জানুন। আপনার তারিখে কী পাওয়া যাবে, রিসোর্টে জেনে নিন।',
    eventsLink: en ? 'Explore events' : 'অনুষ্ঠানের তথ্য দেখুন',
    locationLabel: en ? 'Find us' : 'ঠিকানা',
    locationTitle: en ? 'In Damla, Sreenagar.' : 'দামলায় আসার পথ',
    locationBody: en ? 'Sreenagar-Dohar Highway, Damla, Sreenagar Upazila, Munshiganj, Bangladesh.' : 'শ্রীনগর-দোহার হাইওয়ে, দামলা, শ্রীনগর উপজেলা, মুন্সিগঞ্জ, বাংলাদেশ।',
    landmark: en ? 'Look for the resort opposite Bhuiyan Medical College / Clinic, in front of Damla School.' : 'ভুইয়া মেডিকেল কলেজ / ক্লিনিকের বিপরীতে, দামলা স্কুলের সামনে রিসোর্টটি খুঁজুন।',
    directions: en ? 'Get directions' : 'কীভাবে যাবেন',
    phone: en ? 'Call 01911-498819' : 'ফোন 01911-498819',
    faqLabel: en ? 'A few useful answers' : 'যাওয়ার আগে জেনে নিন',
    faqTitle: en ? 'Before you make the trip.' : 'রওনা হওয়ার আগে কয়েকটি কথা',
    faq: en ? [
      ['How do I check room availability?', 'Send a stay inquiry or call the resort. The website does not check live availability or confirm a reservation.'],
      ['Are room and package rates current?', 'Rates in the research record may have changed. Ask the resort for the current rate and inclusions before confirming your plans.'],
      ['What are the check-in and cancellation policies?', 'These policies are not confirmed in the available records. Please ask the resort directly.'],
      ['Can I visit the restaurant without staying?', 'Walk-in dining availability is not confirmed. Contact the resort to ask about service and the current menu.'],
      ['What are the pool hours and visitor rules?', 'Hours, swimwear and child-supervision rules need confirmation. Please check with the resort before visiting.'],
    ] : [
      ['রুম ফাঁকা আছে কি না জানব কীভাবে?', 'রিসোর্টে ফোন করুন বা বার্তা পাঠান। ওয়েবসাইটে রুম ফাঁকা আছে কি না দেখা যায় না, আর এখানে বুকিং নিশ্চিত হয় না।'],
      ['রুম ও প্যাকেজের বর্তমান মূল্য কত?', 'ওয়েবসাইটে থাকা মূল্য বদলে যেতে পারে। আপনার তারিখের মূল্য ও প্যাকেজের সুবিধা রিসোর্টে জেনে নিন।'],
      ['Check-in ও বুকিং বাতিলের নিয়ম কী?', 'এই নিয়মগুলোর তথ্য নিশ্চিত নয়। রিসোর্টে সরাসরি জেনে নিন।'],
      ['রুম না নিলেও রেস্টুরেন্টে খাওয়া যাবে?', 'রুম না নিয়ে এসে খাওয়া যাবে কি না নিশ্চিত নয়। যাওয়ার আগে মেনু ও খাবার পরিবেশনের সময় জেনে নিন।'],
      ['পুল কখন খোলা থাকে, কী নিয়ম?', 'পুলের সময়সূচি, পোশাকবিধি ও শিশুদের তত্ত্বাবধানের নিয়ম রিসোর্ট থেকে জেনে নিন।'],
    ],
  };

  return <>
    <main id="page-content">
      <section className="hero">
        <img src={heroImage} alt={en ? 'Gulmohor Resort residence beside the outdoor swimming pool' : 'বাইরের সুইমিং পুলের পাশে গুলমোহর রিসোর্ট ভবন'} className="hero__image" width="2035" height="773" loading="eager" fetchPriority="high" decoding="async" />
        <div className="hero__shade" />
        <div className="hero__content"><Eyebrow>{p.heroEyebrow}</Eyebrow><h1>{p.heroTitle}</h1><p>{p.heroBody}</p><div className="hero__actions"><InquiryButton language={language} onClick={onBook}>{en ? 'Plan your visit' : 'ভ্রমণের তথ্য দিন'}</InquiryButton><a className="hero__secondary" href="#discover">{p.explore}<ArrowDown size={15} /></a></div></div>
        <span className="hero__caption">{en ? 'The pool and residence in daylight' : 'দিনের আলোয় পুল ও রিসোর্ট ভবন'}</span>
      </section>

      <section id="discover" className="section discover-section">
        <div className="section-heading"><Eyebrow>{p.aboutLabel}</Eyebrow><h2>{p.aboutTitle}</h2><p>{p.aboutBody}</p></div>
        <div className="discover-grid"><FeaturePhoto name="estate-garden-walk" alt={en ? 'Walkway and gardens beside the resort residence' : 'রিসোর্ট ভবনের পাশের বাগানের পথ'} caption={en ? 'A view across the garden approach' : 'রিসোর্ট ভবনের দিকে বাগানের পথ'} /><div className="discover-note"><span className="editorial-number">01</span><p>{en ? 'Stay, swim, dine or gather. Choose the kind of day that feels right, then check the details directly with the resort.' : 'এখানে থাকা, পুল ব্যবহার, ডাইনিং ও অনুষ্ঠান আয়োজনের সুযোগ রয়েছে। প্রতিটির বর্তমান তথ্য রিসোর্ট থেকে জেনে নিন।'}</p><a className="text-link" href={localizedPath('/stay', language)}>{p.details}<ArrowRight size={15} /></a></div></div>
      </section>

      <section className="section stay-preview" id="stay-preview"><div className="section-heading section-heading--row"><div><Eyebrow>{p.stayLabel}</Eyebrow><h2>{p.stayTitle}</h2></div><div><p>{p.stayBody}</p><a className="text-link" href={localizedPath('/stay', language)}>{p.details}<ArrowRight size={15} /></a></div></div>
        <div className="room-preview-grid">
          <a href={localizedPath('/stay', language)} className="room-preview"><Photo name="couple-deluxe" alt={en ? 'Bright guest room with a bed and seating' : 'বিছানা ও বসার জায়গাসহ অতিথিকক্ষ'} /><span className="room-preview__index">01</span><h3>{p.rooms[0]}</h3><span className="text-link">{en ? 'Room details' : 'রুমের বিবরণ'}<ArrowRight size={14} /></span></a>
          <a href={localizedPath('/stay', language)} className="room-preview"><Photo name="family-veranda" alt={en ? 'Pool-facing veranda at the resort' : 'রিসোর্টের পুলমুখী বারান্দা'} /><span className="room-preview__index">02</span><h3>{p.rooms[1]}</h3><span className="room-preview__caption">{en ? 'Veranda view; interior image not available.' : 'বারান্দার ছবি; রুমের ভেতরের ছবি নেই।'}</span></a>
          <a href={localizedPath('/stay', language)} className="room-preview"><Photo name="suite-master" alt={en ? 'Guest bedroom in the suite' : 'স্যুটের অতিথিকক্ষ'} /><span className="room-preview__index">03</span><h3>{p.rooms[2]}</h3><span className="text-link">{en ? 'Room details' : 'রুমের বিবরণ'}<ArrowRight size={14} /></span></a>
        </div>
      </section>

      <section className="feature-band feature-band--pool"><div className="feature-band__photo"><Photo name="pool-loungers" alt={en ? 'Outdoor pool and poolside seating' : 'বাইরের পুল ও পুলপাড়ের বসার জায়গা'} /></div><div className="feature-band__copy"><Eyebrow>{p.poolLabel}</Eyebrow><h2>{p.poolTitle}</h2><p>{p.poolBody}</p><button className="text-link text-link--button" onClick={onBook}>{en ? 'Ask about a pool visit' : 'পুল ব্যবহারের তথ্য জানুন'}<ArrowRight size={15} /></button></div></section>

      <section className="section garden-section"><div className="garden-copy"><Eyebrow>{p.gardensLabel}</Eyebrow><h2>{p.gardensTitle}</h2><p>{p.gardensBody}</p><a className="text-link" href="#gallery">{en ? 'See the gardens' : 'বাগানের ছবি দেখুন'}<ArrowRight size={15} /></a></div><div className="garden-photos"><FeaturePhoto name="mango-hammock" alt={en ? 'Hammock in the shade of garden trees' : 'বাগানের গাছের ছায়ায় হ্যামক'} /><FeaturePhoto name="garden-gazebo" alt={en ? 'Pavilion and path in the garden' : 'বাগানের প্যাভিলিয়ন ও পথ'} /></div></section>

      <section className="section dining-section"><div className="dining-image"><Photo name="dining-hall" alt={en ? 'Indoor dining room with garden and pool views' : 'বাগান ও পুলের দৃশ্যসহ ইনডোর ডাইনিং রুম'} /></div><div className="dining-copy"><Eyebrow>{p.diningLabel}</Eyebrow><h2>{p.diningTitle}</h2><p>{p.diningBody}</p><button className="text-link text-link--button" onClick={onBook}>{en ? 'Ask about dining' : 'ডাইনিংয়ের তথ্য জানুন'}<ArrowRight size={15} /></button></div></section>

      <section className="section day-section"><div className="day-section__intro"><Eyebrow>{p.packagesLabel}</Eyebrow><h2>{p.packagesTitle}</h2><p>{p.packagesBody}</p><button className="button button--outline" onClick={onBook}>{p.askPackages}<ArrowUpRight size={15} /></button></div><div className="day-note"><span className="editorial-number">A day, your way</span><p>{en ? 'Pool access, a room for the day, or a longer visit—ask which options are available for your date.' : 'পুল ব্যবহার, দিনের জন্য রুম কিংবা অন্য কোনো প্যাকেজ—আপনার তারিখে কী কী পাওয়া যাবে জেনে নিন।'}</p></div></section>

      <section className="events-preview"><Photo name="family-veranda" alt={en ? 'View across the resort pool, lawn and pavilion' : 'রিসোর্টের পুল, লন ও প্যাভিলিয়নের দৃশ্য'} className="events-preview__photo" /><div className="events-preview__copy"><Eyebrow>{p.eventLabel}</Eyebrow><h2>{p.eventTitle}</h2><p>{p.eventBody}</p><a className="button button--light" href={localizedPath('/events', language)}>{p.eventsLink}<ArrowUpRight size={15} /></a></div></section>

      <PhotoGalleryExperience language={language} />

      <section className="section location-section" id="location"><div className="location-copy"><Eyebrow>{p.locationLabel}</Eyebrow><h2>{p.locationTitle}</h2><p>{p.locationBody}</p><p className="location-landmark">{p.landmark}</p><a className="text-link" href="https://maps.app.goo.gl/8vp6UJWPzTyg55AM6" target="_blank" rel="noreferrer"><MapPin size={15} />{p.directions}<ArrowUpRight size={14} /></a><a className="text-link" href="tel:+8801911498819"><Phone size={15} />{p.phone}<ArrowUpRight size={14} /></a></div><div className="map-frame"><iframe title={en ? 'Map to Gulmohor Resort in Damla, Sreenagar' : 'দামলা, শ্রীনগরে গুলমোহর রিসোর্টের মানচিত্র'} src="https://www.google.com/maps?q=23.5185625,90.2610625&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></section>

      <section className="section faq-section"><div className="section-heading"><Eyebrow>{p.faqLabel}</Eyebrow><h2>{p.faqTitle}</h2></div><div className="faq-list">{p.faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="closing-cta"><Eyebrow>{en ? 'Your visit starts with a conversation' : 'আপনার পরিকল্পনা নিয়ে কথা বলুন'}</Eyebrow><h2>{en ? 'Tell us what you’re planning.' : 'কী ভাবছেন? আমাদের জানান'}</h2><p>{en ? 'Send an inquiry and the resort can confirm the details with you.' : 'আপনার প্রশ্ন পাঠান। রিসোর্ট থেকে বর্তমান তথ্য জানানো হবে।'}</p><InquiryButton language={language} onClick={onBook} />
      </section>
    </main>
  </>;
}

export function StayPage({ language, onBook }: PageProps) {
  const en = language === 'en';
  const rooms = en ? [
    { title: 'Couple Deluxe Room', image: 'couple-deluxe', alt: 'Bright guest room with a double bed and seating', detail: 'A room category listed for couples. Ask the resort to confirm the current layout, amenities, rate and availability.' },
    { title: 'Double Deluxe Room', image: 'family-veranda', alt: 'Pool-facing veranda at the resort', detail: 'The available record lists a Double Deluxe category. The image shows the shared veranda; an interior photo is not available, so ask about the room before booking.' },
    { title: 'Premium Suite Room', image: 'suite-master', alt: 'Guest bedroom in the suite', detail: 'A suite category appears in the resort information. Contact the team to confirm the current configuration and included amenities.' },
  ] : [
    { title: 'Couple Deluxe Room', image: 'couple-deluxe', alt: 'বিছানা ও বসার জায়গাসহ অতিথিকক্ষ', detail: 'Couple Deluxe Room-এর বর্তমান বিন্যাস, সুবিধা, মূল্য ও রুম খালি আছে কি না রিসোর্টে জেনে নিন।' },
    { title: 'Double Deluxe Room', image: 'family-veranda', alt: 'রিসোর্টের পুলমুখী বারান্দা', detail: 'এখানে Double Deluxe Room-এর বারান্দার ছবি দেখানো হয়েছে; রুমের ভেতরের ছবি পাওয়া যায়নি। বুকিংয়ের আগে রুমের বিবরণ জেনে নিন।' },
    { title: 'Premium Suite Room', image: 'suite-master', alt: 'স্যুটের অতিথিকক্ষ', detail: 'Premium Suite Room-এর বর্তমান বিন্যাস ও সুবিধার বিবরণ রিসোর্ট থেকে জেনে নিন।' },
  ];
  return <main id="page-content" className="inner-page">
    <section className="page-intro page-intro--stay"><div><Eyebrow>{en ? 'Stay at Gulmohor' : 'রুম ও রাত্রিযাপন'}</Eyebrow><h1>{en ? 'A room to make the day your own.' : 'রুম বেছে নিন, থাকুন নিজের মতো'}</h1><p>{en ? 'Explore the room categories listed for the resort. Current details, rates and availability are confirmed directly with the team.' : 'রিসোর্টে থাকা তিন ধরনের রুমের বিবরণ দেখুন। বর্তমান সুবিধা, মূল্য ও রুম ফাঁকা আছে কি না কর্তৃপক্ষের সঙ্গে নিশ্চিত করুন।'}</p><InquiryButton language={language} onClick={onBook}>{en ? 'Ask about a stay' : 'রুম সম্পর্কে জিজ্ঞাসা করুন'}</InquiryButton></div><Photo name="couple-deluxe" alt={en ? 'Guest room at Gulmohor Resort' : 'গুলমোহর রিসোর্টের অতিথিকক্ষ'} loading="eager" sizes="(max-width: 800px) 100vw, 50vw" /></section>
    <section className="section rooms-page-section"><div className="section-heading section-heading--row"><div><Eyebrow>{en ? 'Room categories' : 'রুমের ধরন'}</Eyebrow><h2>{en ? 'Choose a stay to ask about.' : 'কোন রুমটি আপনার পছন্দ?'}</h2></div><p>{en ? 'No live inventory or current rate card is available on this demo. Contact the resort to confirm all details.' : 'এই সাইটে রুম ফাঁকা আছে কি না বা বর্তমান মূল্য দেখা যায় না। সব তথ্য রিসোর্ট থেকে নিশ্চিত করুন।'}</p></div>
      <div className="stay-room-list">{rooms.map((room, index) => <article className={`stay-room ${index % 2 ? 'stay-room--reverse' : ''}`} key={room.title}><div className="stay-room__image"><Photo name={room.image} alt={room.alt} sizes="(max-width: 800px) 100vw, 52vw" />{index === 1 && <span className="image-note">{en ? 'Veranda view · interior photo unavailable' : 'বারান্দার ছবি · রুমের ভেতরের ছবি নেই'}</span>}</div><div className="stay-room__copy"><span className="editorial-number">0{index + 1}</span><Eyebrow>{en ? 'Room category' : 'রুমের ধরন'}</Eyebrow><h3>{room.title}</h3><p>{room.detail}</p><button className="text-link text-link--button" onClick={onBook}>{en ? 'Ask about this room' : 'এই রুমের তথ্য জানুন'}<ArrowRight size={15} /></button></div></article>)}</div>
    </section>
    <section className="rate-note"><div><Eyebrow>{en ? 'Rates & inclusions' : 'মূল্য ও সুবিধা'}</Eyebrow><h2>{en ? 'Confirm before you plan.' : 'রুম ও প্যাকেজের মূল্য আগে জেনে নিন'}</h2></div><p>{en ? 'Prices recorded during research may not reflect current rates. Breakfast, pool access, room features, deposit and cancellation terms should be confirmed for your chosen date.' : 'ওয়েবসাইটে থাকা মূল্য বর্তমান নাও হতে পারে। নাস্তা, পুল ব্যবহার, রুমের সুবিধা, অগ্রিম ও বুকিং বাতিলের নিয়ম আপনার তারিখের জন্য রিসোর্ট থেকে নিশ্চিত করুন।'}</p><InquiryButton language={language} onClick={onBook}>{en ? 'Send a stay inquiry' : 'রুমের তথ্য জানতে যোগাযোগ করুন'}</InquiryButton></section>
    <section className="section stay-faq"><div className="section-heading"><Eyebrow>{en ? 'Before booking' : 'বুকিংয়ের আগে'}</Eyebrow><h2>{en ? 'A few things to confirm.' : 'বুকিংয়ের আগে কয়েকটি বিষয় জেনে নিন'}</h2></div><div className="faq-list">{(en ? [['Are rates fixed?', 'The available research does not confirm whether rates vary by weekend or season. Ask for the rate for your chosen date.'], ['What time is check-in?', 'Official check-in and check-out times have not been confirmed in the available records.'], ['Is the Double Deluxe room pictured?', 'The site shows a veranda view for this category because an interior photo is not available. Ask the resort for current room photos and details.']] : [['রুমের মূল্য কি নির্দিষ্ট?', 'সাপ্তাহিক ছুটি বা মৌসুমে মূল্য বদলায় কি না নিশ্চিত নয়। আপনার তারিখের মূল্য রিসোর্টে জেনে নিন।'], ['Check-in ও check-out কখন?', 'রিসোর্টের নির্দিষ্ট check-in ও check-out সময়ের তথ্য পাওয়া যায়নি।'], ['Double Deluxe রুমের ভেতরের ছবি আছে?', 'এখানে রুমের বদলে বারান্দার ছবি দেখানো হয়েছে। রুমের বর্তমান ছবি ও বিবরণ রিসোর্ট থেকে জেনে নিন।']]).map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
  </main>;
}

export function EventsPage({ language, onBook }: PageProps) {
  const en = language === 'en';
  return <main id="page-content" className="inner-page">
    <section className="events-hero"><div className="events-hero__copy"><Eyebrow>{en ? 'Gather at Gulmohor' : 'অনুষ্ঠান আয়োজন'}</Eyebrow><h1>{en ? 'Bring your people together.' : 'বিয়ে, গায়ে হলুদ, পুনর্মিলনী—হল বা লনে আয়োজন'}</h1><p>{en ? 'A setting for celebrations, reunions and shared days. Tell the resort what you have in mind and ask what can be arranged for your date.' : 'বিয়ে, গায়ে হলুদ, পারিবারিক অনুষ্ঠান বা পুনর্মিলনীর পরিকল্পনা থাকলে তারিখ ও অতিথির সংখ্যা জানান। কী ব্যবস্থা করা যাবে রিসোর্ট থেকে জেনে নিন।'}</p><InquiryButton language={language} onClick={onBook}>{en ? 'Ask about an event' : 'অনুষ্ঠানের তথ্য জানুন'}</InquiryButton></div><Photo name="family-veranda" alt={en ? 'View of the pool, lawn and upper veranda at the resort' : 'রিসোর্টের পুল, লন ও ওপরতলার বারান্দা'} loading="eager" sizes="(max-width: 800px) 100vw, 46vw" /></section>
    <section className="section event-spaces"><div className="section-heading"><Eyebrow>{en ? 'Spaces to gather' : 'আয়োজনের জায়গা'}</Eyebrow><h2>{en ? 'Start with the occasion.' : 'হল, লন বা মার্কি—তারিখ মিলিয়ে দেখুন'}</h2><p>{en ? 'Research records describe an indoor hall and an outdoor lawn or marquee setup. Confirm which spaces and arrangements are available before making plans.' : 'ইনডোর হল, বাইরের লন বা মার্কিতে আয়োজনের কথা রয়েছে। আপনার তারিখে কোন জায়গা ও কী ব্যবস্থা পাওয়া যাবে, রিসোর্টে জেনে নিন।'}</p></div>
      <div className="event-space-grid"><article><Photo name="garden-gazebo" alt={en ? 'Pavilion beside the lawn and garden path' : 'লন ও বাগানের পথের পাশে প্যাভিলিয়ন'} /><span className="eyebrow">01 · {en ? 'Celebrations' : 'অনুষ্ঠান'}</span><h3>{en ? 'Weddings & family occasions' : 'বিয়ে ও পারিবারিক অনুষ্ঠান'}</h3><p>{en ? 'The resort records mention outdoor lawn or marquee arrangements. Ask what can be arranged for your preferred date.' : 'বাইরের লন বা মার্কিতে আয়োজনের ব্যবস্থা সম্পর্কে জানুন। আপনার তারিখে কী পাওয়া যাবে, রিসোর্টে জেনে নিন।'}</p></article><article><Photo name="dining-hall" alt={en ? 'Indoor dining space at the resort' : 'রিসোর্টের ইনডোর ডাইনিং রুম'} /><span className="eyebrow">02 · {en ? 'Hall & dining' : 'হল ও ডাইনিং'}</span><h3>{en ? 'Indoor gatherings' : 'ইনডোর অনুষ্ঠান'}</h3><p>{en ? 'Research records mention an indoor hall. Ask about its current event setup, dining options, equipment and whether it suits your gathering.' : 'ইনডোর হলে বর্তমান আয়োজন, খাবার ও প্রয়োজনীয় সরঞ্জামের ব্যবস্থা কী আছে, রিসোর্টে জেনে নিন।'}</p></article></div>
    </section>
    <section className="event-guidance"><div><Eyebrow>{en ? 'Make an event inquiry' : 'অনুষ্ঠানের তথ্য জানতে'}</Eyebrow><h2>{en ? 'A few details help the conversation.' : 'আপনাদের আয়োজনের কথা বলুন'}</h2></div><ul>{(en ? ['Preferred date or date range', 'Type of gathering', 'Approximate guest count', 'Catering or setup questions'] : ['পছন্দের তারিখ বা সময়সীমা', 'অনুষ্ঠানের ধরন', 'আনুমানিক অতিথির সংখ্যা', 'খাবার বা আয়োজনের ব্যবস্থা সম্পর্কে প্রশ্ন']).map(item => <li key={item}>{item}</li>)}</ul><p>{en ? 'The inquiry form does not confirm venue availability, capacity, pricing or services. The resort will need to confirm these directly.' : 'ফর্মে তথ্য পাঠালেই অনুষ্ঠানস্থল খালি আছে কি না, ধারণক্ষমতা, মূল্য বা সেবা নিশ্চিত হয় না। এসব রিসোর্ট থেকে জেনে নিন।'}</p><InquiryButton language={language} onClick={onBook}>{en ? 'Start an event inquiry' : 'অনুষ্ঠান সম্পর্কে জানতে লিখুন'}</InquiryButton></section>
    <section className="section event-faq"><div className="section-heading"><Eyebrow>{en ? 'Planning note' : 'পরিকল্পনার আগে'}</Eyebrow><h2>{en ? 'Confirm the details with the resort.' : 'তারিখ ঠিক করার আগে'}</h2></div><div className="faq-list">{(en ? [['What events can I ask about?', 'The available records mention weddings, Gaye Holud, family celebrations, reunions and group events. Ask whether your preferred format can be hosted.'], ['How many guests can the venue accommodate?', 'No confirmed capacity is available. Share your estimated guest count and ask the resort what it can accommodate.'], ['Are event rates or packages published?', 'Current prices and package inclusions are not confirmed. Request a quote for your date and setup.']] : [['কী ধরনের অনুষ্ঠানের আয়োজন করা যায়?', 'বিয়ে, গায়ে হলুদ, পারিবারিক অনুষ্ঠান, পুনর্মিলনী বা দলীয় আয়োজনের পরিকল্পনা থাকলে রিসোর্টে সম্ভাব্য ব্যবস্থা জেনে নিন।'], ['অনুষ্ঠানে কতজন অতিথি আসতে পারবেন?', 'অনুষ্ঠানস্থলের ধারণক্ষমতা নিশ্চিত নয়। আনুমানিক অতিথির সংখ্যা জানিয়ে রিসোর্টের সঙ্গে কথা বলুন।'], ['অনুষ্ঠানের মূল্য বা প্যাকেজের তথ্য আছে?', 'বর্তমান মূল্য ও প্যাকেজে কী কী থাকবে, তা নিশ্চিত নয়। তারিখ ও আয়োজনের ধরন জানিয়ে মূল্য জেনে নিন।']]).map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
  </main>;
}
