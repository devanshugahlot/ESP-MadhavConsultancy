import React from 'react';
import { motion } from 'framer-motion';
import {
  Handshake,
  ShieldCheck,
  Search,
  Target,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Zap,
  Headphones,
} from 'lucide-react';
import { brand, defaultWhatsAppMessage, whatsappLink, whyChooseUsPillars, stats } from '../assets/siteData';
import StatsCounter from './StatsCounter';

export default function WhyChooseUsSection() {
  const iconMap = {
    Handshake: Handshake,
    ShieldCheck: ShieldCheck,
    Search: Search,
    Target: Target,
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#F8F9FB] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 border border-orange/20 px-4 py-1.5 text-xs font-black text-orange uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Values & Guarantees</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-navy tracking-tight font-display">
            Why Choose <span className="text-orange">Madhav Consultancy</span>
          </h2>

          <p className="mt-4 text-base sm:text-xl font-bold text-slate-700 leading-relaxed">
            Professional guidance without paperwork confusion or false promises.
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Whether registering a company or mastering government portals, our framework is designed for transparency, speed, and real results.
          </p>
        </div>

        {/* 4 Pillars Grid (Direct from Tree Banner) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUsPillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || ShieldCheck;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-3xl border border-navy/10 bg-white p-6 sm:p-7 shadow-soft hover:shadow-cardHover hover:border-orange/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-orange shadow-sm mb-5 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black text-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-black text-slate-400 uppercase tracking-wider">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-orange">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Counter Row */}
        <div className="mt-14 rounded-3xl bg-white border border-navy/10 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, sIdx) => (
              <div key={sIdx} className="space-y-1">
                <StatsCounter value={stat.value} suffix={stat.suffix} label="" />
                <p className="text-xs sm:text-sm font-extrabold text-navy">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Callout Ribbon */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-deep via-navy to-deep p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-white/10">
          <div>
            <h4 className="text-lg sm:text-xl font-black text-white">
              Have questions about your business or the ESP program?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Speak directly with Trainer & Mentor Lokesh Verma in Jaipur.
            </p>
          </div>
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange hover:bg-orange/90 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 shadow-orangeGlow transition-transform hover:scale-105 shrink-0"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
