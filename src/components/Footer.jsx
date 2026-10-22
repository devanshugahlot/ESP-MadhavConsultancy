import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  LockKeyhole,
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  Globe,
  Briefcase,
  TrendingUp,
  GraduationCap,
  UserCheck,
} from 'lucide-react';
import Button from './Button';
import Logo from './Logo';
import {
  brand,
  defaultWhatsAppMessage,
  espWhatsAppMessage,
  navLinks,
  trustBadges,
  whatsappLink,
} from '../assets/siteData';

export default function Footer({ onEnquiryOpen }) {
  const scrollToBranch = (branchId) => {
    const el = document.getElementById(branchId);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -100 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-navy text-white border-t-4 border-orange">
      {/* Decorative gradient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Consultant Profile (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <Logo className="h-12 w-12" isFooter={true} />
              <div>
                <p className="text-xl font-black tracking-tight">{brand.name}</p>
                <p className="text-xs font-semibold text-orange tracking-wide">
                  {brand.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Educational + Business Coaching and professional compliance support across India.
              <span className="block mt-1 font-semibold text-white">
                "More Than Just Services... We Build Opportunities."
              </span>
            </p>

            {/* Consultant Profile Pill */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange text-white font-black text-sm">
                  LV
                </div>
                <div>
                  <p className="text-sm font-black text-white">{brand.consultant}</p>
                  <p className="text-xs font-semibold text-orange">{brand.consultantRole}</p>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-400">
                "Let's Build Your Future Together."
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={whatsappLink(espWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange hover:bg-orange/90 text-white font-black text-xs uppercase tracking-wider px-4 py-2 shadow-orangeGlow transition"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Join ESP Batch</span>
              </a>
              <button
                type="button"
                onClick={onEnquiryOpen}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xs px-4 py-2 transition"
              >
                Quick Enquiry
              </button>
            </div>
          </div>

          {/* Column 2: 4 Branches (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-black uppercase tracking-widest text-orange mb-4">
              Our 4 Branches
            </p>
            <div className="grid gap-2.5 text-xs sm:text-sm font-semibold text-slate-300">
              <Link
                to="/#business"
                onClick={() => scrollToBranch('business')}
                className="flex items-center gap-2 transition hover:text-orange"
              >
                <Briefcase className="h-3.5 w-3.5 text-orange" />
                <span>Business Solutions (Company, LLP)</span>
              </Link>
              <Link
                to="/#growth"
                onClick={() => scrollToBranch('growth')}
                className="flex items-center gap-2 transition hover:text-emerald-400"
              >
                <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                <span>Growth & Scalability (MSME, Project)</span>
              </Link>
              <Link
                to="/#skills"
                onClick={() => scrollToBranch('skills')}
                className="flex items-center gap-2 transition hover:text-sky-400 font-extrabold text-white"
              >
                <GraduationCap className="h-3.5 w-3.5 text-sky-400" />
                <span>Skills (ESP – Earning Skill Program)</span>
              </Link>
              <Link
                to="/#career"
                onClick={() => scrollToBranch('career')}
                className="flex items-center gap-2 transition hover:text-purple-400"
              >
                <UserCheck className="h-3.5 w-3.5 text-purple-400" />
                <span>Career & Mentorship (Resume, Jobs)</span>
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 pt-2 text-xs font-bold text-orange hover:underline"
              >
                <span>View All 7 Services Checklist</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Column 3: Quick Links & Legal (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <p className="text-xs font-black uppercase tracking-widest text-orange mb-4">
              Navigation
            </p>
            <div className="grid gap-2 text-xs sm:text-sm font-medium text-slate-300">
              <Link to="/" className="transition hover:text-white">Home</Link>
              <Link to="/about" className="transition hover:text-white">About Us</Link>
              <Link to="/contact" className="transition hover:text-white">Contact</Link>
              <Link to="/#faq" className="transition hover:text-white">FAQ</Link>
              <div className="pt-2 border-t border-white/10 grid gap-1.5 text-xs text-slate-400">
                <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
                <Link to="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</Link>
                <Link to="/disclaimer" className="hover:text-white transition">Disclaimer</Link>
              </div>
            </div>
          </div>

          {/* Column 4: Official Contact Details (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-black uppercase tracking-widest text-orange mb-2">
              Official Contact
            </p>
            <div className="grid gap-3 text-xs sm:text-sm text-slate-300">
              <a
                href={brand.callHref}
                className="flex items-start gap-2.5 transition hover:text-orange"
              >
                <Phone className="h-4 w-4 text-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">{brand.phone}</span>
                  <span className="text-[11px] text-slate-400">Phone / WhatsApp</span>
                </div>
              </a>

              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition hover:text-orange"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Direct WhatsApp Chat</span>
                  <span className="text-[11px] text-slate-400">Instant query support</span>
                </div>
              </a>

              <a
                href={`mailto:${brand.email}`}
                className="flex items-start gap-2.5 transition hover:text-orange"
              >
                <Mail className="h-4 w-4 text-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white break-all">{brand.email}</span>
                  <span className="text-[11px] text-slate-400">Official Email</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <Globe className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">{brand.websiteDisplay}</span>
                  <span className="text-[11px] text-slate-400">Online Platform</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span className="font-semibold">{brand.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={brand.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-slate-300 hover:border-orange hover:text-orange transition"
                aria-label="Facebook page"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-slate-300 hover:border-orange hover:text-orange transition"
                aria-label="Instagram page"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-white/10 bg-deep py-5 px-4 sm:px-6 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <LockKeyhole className="h-3 w-3 text-orange" />
              Secure Portal Filings
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Jaipur, Rajasthan, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
