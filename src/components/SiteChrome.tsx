import { useState } from 'react';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { getSitePhoto } from '../data/siteMedia';

export type Language = 'en' | 'bn';

export function localizedPath(path: string, language: Language) {
  const clean = path.replace(/^\/(bn)(?=\/|$)/, '') || '/';
  if (language === 'bn') return clean === '/' ? '/bn/' : `/bn${clean}`;
  return clean;
}

const labels = {
  en: { home: 'Home', stay: 'Stay', events: 'Events', gallery: 'Gallery', book: 'Make an inquiry', menu: 'Open menu', close: 'Close menu', explore: 'Explore the resort', footer: 'A slower day, close to home.', directions: 'Get directions', call: 'Call the resort' },
  bn: { home: 'হোম', stay: 'রুম', events: 'অনুষ্ঠান', gallery: 'গ্যালারি', book: 'রিসোর্টে যোগাযোগ করুন', menu: 'মেনু খুলুন', close: 'মেনু বন্ধ করুন', explore: 'রিসোর্ট দেখুন', footer: 'পুল, বাগান আর ডাইনিং—দামলায় একদিন কাটান', directions: 'দিকনির্দেশনা', call: 'ফোন করুন' },
};

type HeaderProps = { language: Language; pathname: string; onBook: () => void };

export function SiteHeader({ language, pathname, onBook }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const copy = labels[language];
  const home = localizedPath('/', language);
  const stay = localizedPath('/stay', language);
  const events = localizedPath('/events', language);
  const isHome = pathname === '/' || pathname === '/bn' || pathname === '/bn/';
  const gallery = isHome ? '#gallery' : `${home}#gallery`;

  return <header className="site-header">
    <div className="site-header__inner">
      <a className="brand" href={home} aria-label="Gulmohor Resort home">
        <img src="/images/gulmohor/brand/brand-official-logo.jpg" width="46" height="46" alt="" />
        <span className="brand__wordmark"><strong>Gulmohor</strong><small>Resort & Restaurant</small></span>
      </a>
      <nav className="desktop-nav" aria-label={language === 'en' ? 'Main navigation' : 'প্রধান নেভিগেশন'}>
        <a href={home} aria-current={isHome ? 'page' : undefined}>{copy.home}</a>
        <a href={stay} aria-current={pathname.endsWith('/stay') ? 'page' : undefined}>{copy.stay}</a>
        <a href={events} aria-current={pathname.endsWith('/events') ? 'page' : undefined}>{copy.events}</a>
        <a href={gallery}>{copy.gallery}</a>
      </nav>
      <div className="header-actions">
        <div className="language-switch" aria-label={language === 'en' ? 'Choose language' : 'ভাষা নির্বাচন'}>
          <a href={localizedPath(pathname, 'en')} lang="en" aria-current={language === 'en' ? 'true' : undefined}>EN</a>
          <a href={localizedPath(pathname, 'bn')} lang="bn" aria-current={language === 'bn' ? 'true' : undefined}>বাং</a>
        </div>
        <button className="button button--small button--dark header-book" onClick={onBook}>{copy.book}<ArrowUpRight size={15} /></button>
        <button className="menu-toggle" type="button" aria-label={open ? copy.close : copy.menu} aria-controls="mobile-menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </div>
    {open && <div id="mobile-menu" className="mobile-menu">
      <nav aria-label={language === 'en' ? 'Mobile navigation' : 'মোবাইল নেভিগেশন'}>
        <a href={home} onClick={() => setOpen(false)}>{copy.home}<ArrowUpRight size={16} /></a>
        <a href={stay} onClick={() => setOpen(false)}>{copy.stay}<ArrowUpRight size={16} /></a>
        <a href={events} onClick={() => setOpen(false)}>{copy.events}<ArrowUpRight size={16} /></a>
        <a href={gallery} onClick={() => setOpen(false)}>{copy.gallery}<ArrowUpRight size={16} /></a>
      </nav>
      <button className="button button--dark mobile-menu__cta" onClick={() => { setOpen(false); onBook(); }}>{copy.book}<ArrowUpRight size={16} /></button>
      <a className="mobile-menu__phone" href="tel:+8801911498819"><Phone size={15} />01911-498819</a>
    </div>}
  </header>;
}

type FooterProps = { language: Language; onBook: () => void };

export function SiteFooter({ language, onBook }: FooterProps) {
  const copy = labels[language];
  const home = localizedPath('/', language);
  return <footer className="site-footer">
    <div className="footer-callout">
      <p className="eyebrow">{language === 'en' ? 'A day at Gulmohor' : 'গুলমোহরে একটি দিন'}</p>
      <h2>{language === 'en' ? 'Make room for a little time away.' : 'রুম, পুল বা অনুষ্ঠান—কী ভাবছেন?'}</h2>
      <button className="button button--light" onClick={onBook}>{copy.book}<ArrowUpRight size={16} /></button>
    </div>
    <div className="footer-main">
      <a className="brand brand--footer" href={home}>
        <img src="/images/gulmohor/brand/brand-official-logo.jpg" width="44" height="44" alt="" />
        <span className="brand__wordmark"><strong>Gulmohor</strong><small>Resort & Restaurant</small></span>
      </a>
      <p>{copy.footer}</p>
      <div className="footer-links">
        <a href={home}>{copy.home}</a>
        <a href={localizedPath('/stay', language)}>{copy.stay}</a>
        <a href={localizedPath('/events', language)}>{copy.events}</a>
        <a href="https://maps.app.goo.gl/8vp6UJWPzTyg55AM6" target="_blank" rel="noreferrer">{copy.directions}<ArrowUpRight size={13} /></a>
        <a href="tel:+8801911498819">{copy.call}<ArrowUpRight size={13} /></a>
        <a href="https://www.facebook.com/profile.php?id=100063883132593" target="_blank" rel="noreferrer">Facebook<ArrowUpRight size={13} /></a>
      </div>
      <small className="footer-address">Sreenagar-Dohar Highway, Damla, Sreenagar, Munshiganj, Bangladesh</small>
      <small className="footer-copyright">© {new Date().getFullYear()} Gulmohor Resort & Restaurant</small>
    </div>
  </footer>;
}

export function Photo({ name, alt, className = '', loading = 'lazy', sizes = '(max-width: 700px) 100vw, 60vw', objectPosition }: { name: string; alt: string; className?: string; loading?: 'eager' | 'lazy'; sizes?: string; objectPosition?: string }) {
  const { src, srcSet, width, height } = getSitePhoto(name);
  return <img className={className} src={src} srcSet={srcSet} sizes={sizes} width={width} height={height} alt={alt} loading={loading} fetchPriority={loading === 'eager' ? 'high' : 'auto'} style={objectPosition ? { objectPosition } : undefined} />;
}
