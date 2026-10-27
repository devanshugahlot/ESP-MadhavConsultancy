import React from "react";
import { Sparkles, ArrowRight, FileCheck2 } from "lucide-react";
import { brand } from "../assets/siteData";

function TickerItem() {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-orange">★</span>
      <span>ESP (Earning Skill Program) Live Practical Coaching</span>
      <span className="text-slate-400">•</span>
      <span className="line-through text-slate-400 font-semibold">₹7,999</span>
      <span className="text-orange font-black">₹999/-</span>
    </span>
  );
}

export default function AnnouncementTicker({ onEnquiryOpen }) {
  return (
    <div className="relative z-50 bg-gradient-to-r from-deep via-navy to-deep text-white border-b border-orange/30 overflow-hidden">
      <div className="mx-auto flex items-center justify-between px-3 py-2 text-xs sm:text-sm font-bold">
        {/* Live Badge */}
        <div className="flex-none hidden sm:flex items-center gap-1.5 bg-orange text-white px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm z-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          Special Fee Offer
        </div>

        {/* Marquee Track with hover pause */}
        <div className="relative flex-1 overflow-hidden group cursor-pointer mx-2 sm:mx-4">
          <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] text-slate-100 font-extrabold tracking-wide py-0.5">
            <span className="inline-flex items-center gap-6 pr-6">
              <TickerItem />
              <TickerItem />
            </span>
            <span className="inline-flex items-center gap-6 pr-6">
              <TickerItem />
              <TickerItem />
            </span>
          </div>
        </div>

        {/* Fast Action CTA: Links to Google Form per client instruction */}
        <div className="flex-none z-10">
          <a
            href={brand.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-orange hover:bg-orange/90 text-white border border-orange font-black text-[11px] sm:text-xs uppercase px-3 py-1 rounded-full shadow-orangeGlow transition-all duration-200 hover:scale-105"
            title="Fill Google Form to Book Your Seat"
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Book Seat</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
