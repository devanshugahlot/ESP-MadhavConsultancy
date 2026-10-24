import React, { useState } from 'react';
import { MessageSquare, Star, MapPin, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { testimonials } from '../assets/siteData';

export default function TestimonialsPlaceholder() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', 'ESP Program', 'GST & Return', 'Company & MSME'];

  const filteredTestimonials = testimonials.filter((t) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'ESP Program') return t.service.includes('ESP');
    if (selectedFilter === 'GST & Return') return t.service.includes('GST') || t.service.includes('ITR');
    if (selectedFilter === 'Company & MSME') return t.service.includes('Company') || t.service.includes('MSME') || t.service.includes('FSSAI') || t.service.includes('Project');
    return true;
  });

  return (
    <section id="reviews" className="relative py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 border border-orange/20 px-4 py-1.5 text-xs font-black text-orange uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Student & Client Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-navy tracking-tight font-display">
            Stories of Growth <span className="text-orange">Across India</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Real feedback from practical ESP course participants and corporate filing clients in different cities.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setSelectedFilter(opt)}
                className={`px-4 py-1.5 rounded-full text-xs font-black transition-all ${
                  selectedFilter === opt
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTestimonials.map((review, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-navy/10 bg-[#F8F9FB] p-6 shadow-xs hover:shadow-cardHover hover:border-orange/40 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {Array.from({ length: review.rating || 5 }).map((_, sIdx) => (
                    <Star key={sIdx} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Service Tag */}
                <span className="inline-block text-[11px] font-black uppercase tracking-wider text-orange bg-orange/10 px-2.5 py-0.5 rounded-md mb-3">
                  {review.service}
                </span>

                {/* Quote */}
                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & City Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-navy group-hover:text-orange transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[11px] font-bold text-slate-500 mt-0.5">
                    {review.role}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-extrabold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-full shadow-xs">
                  <MapPin className="h-3 w-3 text-orange" />
                  <span className="truncate max-w-[100px]">{review.city.split(',')[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-xs font-bold text-emerald-800">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>100% Genuine reviews from active learners & corporate clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
