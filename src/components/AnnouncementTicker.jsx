import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { espWhatsAppMessage, tickerText, whatsappLink } from "../assets/siteData";

export default function AnnouncementTicker({ onEnquiryOpen }) {
  const repeatedText = `${tickerText}   ★   ${tickerText}   ★   ${tickerText}   ★   ${tickerText}   ★   `;

  return (
    <div className="relative z-50 bg-gradient-to-r from-deep via-navy to-deep text-white border-b border-orange/30 overflow-hidden">
      <div className="mx-auto flex items-center justify-between px-3 py-2 text-xs sm:text-sm font-bold">
        {/* Live Badge */}
        <div className="flex-none hidden sm:flex items-center gap-1.5 bg-orange text-white px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm z-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          Admissions Open
        </div>

        {/* Marquee Track with hover pause */}
        <div className="relative flex-1 overflow-hidden group cursor-pointer mx-2 sm:mx-4">
          <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] text-slate-100 font-extrabold tracking-wide py-0.5">
            <span className="inline-flex items-center gap-4">
              <span className="text-orange">★</span> {tickerText}
              <span className="text-orange">★</span> {tickerText}
              <span className="text-orange">★</span> {tickerText}
              <span className="text-orange">★</span> {tickerText}
            </span>
            <span className="inline-flex items-center gap-4 ml-4">
              <span className="text-orange">★</span> {tickerText}
              <span className="text-orange">★</span> {tickerText}
              <span className="text-orange">★</span> {tickerText}
              <span className="text-orange">★</span> {tickerText}
            </span>
          </div>
        </div>

        {/* Fast Action CTA */}
        <div className="flex-none z-10">
          <a
            href={whatsappLink(espWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-white/10 hover:bg-orange hover:text-white border border-white/20 hover:border-orange text-white text-[11px] sm:text-xs font-black uppercase px-2.5 py-1 rounded-full transition-all duration-200"
          >
            <span>Book Seat</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
