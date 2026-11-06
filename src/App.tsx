import { useCallback, useEffect, useMemo, useState } from 'react';
import { BookingInquiry } from './components/BookingInquiry';
import { SiteFooter, SiteHeader, type Language } from './components/SiteChrome';
import { EventsPage, HomePage, StayPage } from './pages/SitePages';

function routeFromPath(pathname: string): { language: Language; page: 'home' | 'stay' | 'events' } {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const language: Language = normalized === '/bn' || normalized.startsWith('/bn/') ? 'bn' : 'en';
  const route = language === 'bn' ? normalized.replace(/^\/bn(?=\/|$)/, '') || '/' : normalized;
  if (route === '/stay') return { language, page: 'stay' };
  if (route === '/events') return { language, page: 'events' };
  return { language, page: 'home' };
}

const pageMetadata = {
  en: {
    home: ['Gulmohor Resort | A little room to slow down', 'Discover the pool, gardens, dining, guest rooms and event spaces at Gulmohor Resort in Damla, Sreenagar.'],
    stay: ['Stay | Gulmohor Resort', 'Explore the room categories listed for Gulmohor Resort and ask the team about current availability and rates.'],
    events: ['Events | Gulmohor Resort', 'Ask Gulmohor Resort about current event spaces and arrangements for your preferred date.'],
  },
  bn: {
    home: ['গুলমোহর রিসোর্ট | পুল, বাগান ও থাকার ব্যবস্থা', 'দামলা, শ্রীনগরে সুইমিং পুল, বাগান, ডাইনিং, অতিথিকক্ষ ও অনুষ্ঠানস্থল সম্পর্কে জানুন।'],
    stay: ['রুম | গুলমোহর রিসোর্ট', 'রুমের ধরন দেখুন। বর্তমান মূল্য, সুবিধা ও রুম ফাঁকা আছে কি না রিসোর্ট থেকে জেনে নিন।'],
    events: ['অনুষ্ঠান | গুলমোহর রিসোর্ট', 'আপনার তারিখে অনুষ্ঠান আয়োজনের জায়গা ও ব্যবস্থা পাওয়া যাবে কি না জেনে নিন।'],
  },
} as const;

export default function App() {
  const route = useMemo(() => routeFromPath(window.location.pathname), []);
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  useEffect(() => {
    document.documentElement.lang = route.language;
    const [title, description] = pageMetadata[route.language][route.page];
    document.title = title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [route]);

  const Page = route.page === 'stay' ? StayPage : route.page === 'events' ? EventsPage : HomePage;
  return <>
    <a className="skip-link" href="#page-content">{route.language === 'en' ? 'Skip to content' : 'মূল লেখায় যান'}</a>
    <SiteHeader language={route.language} pathname={window.location.pathname} onBook={openBooking} />
    <Page language={route.language} onBook={openBooking} />
    <SiteFooter language={route.language} onBook={openBooking} />
    <BookingInquiry open={bookingOpen} language={route.language} onClose={closeBooking} />
  </>;
}
