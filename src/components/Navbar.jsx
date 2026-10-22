import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, MessageCircle, Sparkles, X, ChevronRight } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';
import AnnouncementTicker from './AnnouncementTicker';
import {
  brand,
  espWhatsAppMessage,
  navLinks,
  whatsappLink,
} from '../assets/siteData';

export default function Navbar({ onEnquiryOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.88)', 'rgba(255, 255, 255, 0.98)']
  );
  const navPadding = useTransform(scrollY, [0, 100], ['0.75rem', '0.45rem']);
  const shadow = useTransform(
    scrollY,
    [0, 100],
    ['0 2px 10px rgba(10,31,68,0.03)', '0 12px 36px rgba(10,31,68,0.12)']
  );

  const handleLinkClick = (to) => {
    setMobileOpen(false);
    if (to.includes('#')) {
      const hash = to.split('#')[1];
      const target = document.getElementById(hash);
      if (target) {
        if (window.lenis) {
          window.lenis.scrollTo(target, { offset: -110 });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isLinkActive = (to) => {
    if (to === '/') return location.pathname === '/' && !location.hash;
    if (to.includes('#')) {
      const hash = '#' + to.split('#')[1];
      return location.hash === hash;
    }
    return location.pathname === to;
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* 1. Top Announcement Marquee Ticker */}
      <AnnouncementTicker onEnquiryOpen={onEnquiryOpen} />

      {/* 2. Sticky Navbar */}
      <motion.div
        className="border-b border-navy/10 backdrop-blur-xl transition-colors"
        style={{ background: navBackground, boxShadow: shadow }}
      >
        <motion.nav
          style={{ paddingBlock: navPadding }}
          className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6"
        >
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="group flex items-center gap-3 shrink-0"
            aria-label="Madhav Consultancy home"
            onClick={() => handleLinkClick('/')}
          >
            <Logo className="h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105" />
            <div className="min-w-0">
              <span className="block text-base sm:text-lg font-black leading-tight text-navy tracking-tight">
                {brand.name}
              </span>
              <span className="block text-[10px] sm:text-xs font-bold text-slate-500 truncate max-w-[200px] sm:max-w-none">
                {brand.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1 rounded-full border border-navy/10 bg-white/90 p-1 shadow-sm xl:flex">
            {navLinks.map((item) => {
              const active = isLinkActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => handleLinkClick(item.to)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-black transition-all duration-200 ${
                    active
                      ? 'bg-navy text-white shadow-sm'
                      : 'text-navy/80 hover:bg-navy/5 hover:text-navy'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-2.5 md:flex">
            {/* Orange "Join ESP" Button */}
            <a
              href={whatsappLink(espWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange hover:bg-orange/90 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-5 py-2.5 shadow-orangeGlow hover:shadow-orangeGlowStrong transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="h-4 w-4" />
              <span>Join ESP</span>
            </a>

            {/* Quick Consultation Button */}
            <button
              type="button"
              onClick={onEnquiryOpen}
              className="hidden lg:inline-flex items-center justify-center rounded-full border border-navy/15 bg-white hover:bg-navy hover:text-white text-navy font-extrabold text-xs sm:text-sm uppercase tracking-wider px-4 py-2.5 transition-all duration-200 shadow-sm"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Right Quick Action + Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={whatsappLink(espWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-orange text-white font-black text-xs uppercase tracking-wider px-3 py-1.5 shadow-sm md:hidden"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Join ESP</span>
            </a>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition hover:border-orange hover:text-orange"
              onClick={() => setMobileOpen((current) => !current)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen ? (
          <motion.div
            className="border-t border-navy/10 bg-white/95 backdrop-blur-2xl px-4 py-5 shadow-2xl xl:hidden max-h-[85vh] overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="grid gap-1">
              {navLinks.map((item) => {
                const active = isLinkActive(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => handleLinkClick(item.to)}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-extrabold transition ${
                      active
                        ? 'bg-navy text-white'
                        : 'text-navy hover:bg-navy/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`h-4 w-4 ${active ? 'text-orange' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={whatsappLink(espWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-orange py-3 text-center text-sm font-black text-white shadow-orangeGlow uppercase tracking-wider"
              >
                <Sparkles className="h-4 w-4" />
                <span>Join ESP – Earning Skill Program</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onEnquiryOpen();
                }}
                className="flex items-center justify-center gap-2 rounded-xl border border-navy/15 bg-slate-50 py-2.5 text-center text-sm font-bold text-navy"
              >
                Enquire Now / Free Consultation
              </button>
            </div>
          </motion.div>
        ) : null}
      </motion.div>
    </header>
  );
}
