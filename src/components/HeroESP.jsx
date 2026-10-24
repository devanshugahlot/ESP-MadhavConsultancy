import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  MessageCircle,
  Phone,
  CheckCircle2,
  Calendar,
  Clock,
  Laptop,
  GraduationCap,
  TrendingUp,
  FileText,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import Button from './Button';
import espPoster from '../assets/esp-poster.jpg';
import espBanner from '../assets/esp-banner.jpg';
import {
  brand,
  espProgram,
  espWhatsAppMessage,
  whatsappLink,
} from '../assets/siteData';

export default function HeroESP({ onEnquiryOpen }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 bg-gradient-to-b from-[#06152F] via-[#0A1F44] to-[#0D2552] text-white">
      {/* Decorative Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Tagline / Hinglish Callout */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/20 border border-orange/40 px-3.5 py-1 text-xs sm:text-sm font-black text-orange uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Skill Seekho Aage Badho
          </span>
          <span className="hidden sm:inline-block text-white/30">•</span>
          <span className="text-xs sm:text-sm font-bold text-slate-300">
            More Than Just Services... We Build Opportunities.
          </span>
        </motion.div>

        {/* Main Grid: Left Pitch + Right Poster */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column (Content) */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Admissions Banner Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs font-bold text-orange mb-4 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
              </span>
              <span>Admissions Started From Today!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight text-white">
              <span className="text-orange drop-shadow-sm">ESP</span> – Earning Skill Program
              <span className="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-200 mt-2 font-display">
                Powered by Madhav Consultancy
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 sm:mt-5 text-base sm:text-xl font-medium leading-relaxed text-slate-200 max-w-2xl">
              Learn Practical Skills, Get Real Clients, Start Your Professional Income.
            </p>

            {/* Badges Grid (Expert Guidance, Live Practical Training, Real Govt Portal Work, Career Support) */}
            <div className="mt-6 grid grid-cols-2 gap-3 w-full max-w-xl">
              {[
                { label: 'Expert Guidance', sub: 'Trainer & Mentor Lokesh Verma', icon: GraduationCap, color: 'text-orange' },
                { label: 'Live Practical Training', sub: 'Real case studies & files', icon: Laptop, color: 'text-emerald-400' },
                { label: 'Real Govt. Portal Work', sub: 'GST, FoSCoS, Udyam, ITR', icon: FileText, color: 'text-sky-400' },
                { label: 'Career Support', sub: 'Client acquisition formula', icon: TrendingUp, color: 'text-purple-400' },
              ].map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:bg-white/10 hover:border-white/20"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                      <Icon className={`h-5 w-5 ${badge.color}`} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                        {badge.label}
                      </p>
                      <p className="text-[11px] font-medium text-slate-300">
                        {badge.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Status Ribbon (Buttons A & B removed per client instruction) */}
            <div className="mt-6 w-full max-w-xl">
              <div className="rounded-2xl border border-orange/40 bg-gradient-to-r from-orange/20 via-orange/10 to-transparent p-3 sm:p-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange"></span>
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-orange">Current Batch Status</p>
                    <p className="text-xs sm:text-sm font-black text-white">Admissions Started From Today!</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Offer Fee</p>
                  <p className="text-xs sm:text-sm font-black text-orange">₹999/- <span className="line-through text-slate-400 font-medium text-[11px]">₹7,999</span></p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Primary "Join ESP" WhatsApp CTA */}
              <a
                href={whatsappLink(espWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-orange hover:bg-orange/90 text-white font-black text-base sm:text-lg px-7 py-3.5 shadow-orangeGlow hover:shadow-orangeGlowStrong transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Join ESP on WhatsApp</span>
              </a>

              {/* Secondary "Enquire Now" CTA */}
              <button
                type="button"
                onClick={onEnquiryOpen}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-extrabold text-base px-6 py-3.5 backdrop-blur transition-all duration-200"
              >
                <span>Enquire Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* Direct Call Link */}
              <a
                href={brand.callHref}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-orange transition ml-1"
              >
                <Phone className="h-3.5 w-3.5 text-orange" />
                <span>Call: {brand.phoneRaw}</span>
              </a>
            </div>

            {/* Disclaimer / Effort Note */}
            <p className="mt-4 text-[11px] sm:text-xs text-slate-400 leading-normal max-w-xl">
              ⚖️ <span className="text-slate-300 font-semibold">Genuine practical coaching:</span> Results depend on individual effort. No unrealistic income promises. We equip you with actual government portal skills & real client acquisition strategies.
            </p>
          </motion.div>

          {/* Right Column: Visual Poster Card */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {/* Outer Frame with Glow */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-[2.5rem] p-2 sm:p-3 bg-gradient-to-tr from-white/10 via-white/20 to-orange/30 shadow-2xl backdrop-blur-xl border border-white/20">
              <div className="overflow-hidden rounded-[2rem] bg-navy relative shadow-inner">
                {/* Poster Image */}
                <img
                  src={espPoster}
                  alt="ESP - Earning Skill Program live training session at Madhav Consultancy"
                  className="w-full h-auto object-cover rounded-[2rem] transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Live Training Session Pill Overlay */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-navy/90 border border-orange/40 px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-black uppercase text-white tracking-wider">
                    Live Session Batch
                  </span>
                </div>

                {/* 5 Services Learned Floating Tag */}
                <div className="absolute bottom-4 inset-x-4 z-20 bg-deep/95 border border-white/20 p-3 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs font-black text-white">
                    <span className="text-orange uppercase tracking-wide">5 Practical Services:</span>
                    <span className="text-slate-300 font-medium">4 Weeks Duration</span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5 text-[11px] font-bold">
                    <span className="bg-orange/20 text-orange px-2 py-0.5 rounded-md">GST Reg</span>
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md">MSME</span>
                    <span className="bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-md">FSSAI</span>
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-md">ITR</span>
                    <span className="bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-md">GST Filing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Floating Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 z-30 items-center gap-2.5 rounded-2xl bg-white p-3 text-navy shadow-xl border border-navy/10 animate-bounce">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500">Trainer & Mentor</p>
                <p className="text-sm font-black text-navy">{brand.consultant}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
