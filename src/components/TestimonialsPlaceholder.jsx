import React from 'react';
import { MessageSquare, Sparkles, Clock, CheckCircle } from 'lucide-react';

export default function TestimonialsPlaceholder() {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-black text-slate-600 uppercase tracking-widest mb-3">
          <MessageSquare className="w-3.5 h-3.5 text-orange" />
          <span>Real Experiences</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight font-display">
          Student & Client Feedback
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          We believe in 100% genuine reviews. Feedback from current batch participants and ongoing corporate clients will be published here.
        </p>

        {/* Placeholder Card */}
        <div className="mt-10 mx-auto max-w-2xl rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/70 p-8 sm:p-12 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-orange shadow-sm border border-slate-200/80 mb-4">
            <Clock className="h-8 w-8 text-orange animate-pulse" />
          </div>

          <h3 className="text-xl font-black text-navy">
            Reviews Coming Soon
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            The ongoing ESP (Earning Skill Program) cohort is currently in session. Authentic student video testimonials and written case studies will be posted upon batch completion.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-slate-200 text-xs font-bold text-slate-700 shadow-xs">
            <CheckCircle className="h-4 w-4 text-emerald-600" />
            <span>Zero fabricated reviews policy strictly maintained</span>
          </div>
        </div>
      </div>
    </section>
  );
}
