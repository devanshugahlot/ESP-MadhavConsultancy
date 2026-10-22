import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  TrendingUp,
  GraduationCap,
  UserCheck,
  ArrowDown,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import treeImage from '../assets/tree-branches.jpg';
import treeDiagram from '../assets/tree-diagram.jpg';
import { brand, treeBranches } from '../assets/siteData';

export default function TreeSection() {
  const scrollToBranch = (branchId) => {
    const element = document.getElementById(branchId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -100 });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="tree-section" className="relative py-20 sm:py-28 bg-[#F8F9FB] overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0D2552]/10 to-transparent pointer-events-none" />
      <div className="absolute -left-20 top-1/2 w-80 h-80 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 border border-orange/20 px-4 py-1.5 text-xs font-black text-orange uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Madhav Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-navy tracking-tight font-display">
            Our Growth, <span className="text-orange">Our Branches</span>
          </h2>

          <p className="mt-4 text-base sm:text-xl font-bold text-slate-700 leading-relaxed">
            One Tree, Multiple Solutions for Your Business, Career, Skills & Future.
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-500 font-medium">
            "More Than Just Services... We Build Opportunities."
          </p>
        </div>

        {/* Tree Display & Interactive Navigator */}
        <div className="mt-12 lg:mt-16 grid items-center gap-8 lg:grid-cols-12">
          {/* Official Graphic Visual Card */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-[2.5rem] bg-white p-3 sm:p-5 shadow-soft border border-navy/10 overflow-hidden group">
              <img
                src={treeImage}
                alt="Madhav Consultancy - Our Growth, Our Branches Tree showcasing Business, Growth, Skills, and Career"
                className="w-full h-auto rounded-[2rem] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Overlay Tip */}
              <div className="absolute bottom-6 inset-x-6 bg-navy/90 backdrop-blur-md rounded-2xl p-3 text-white border border-white/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-bold">
                  🌿 4 Core Branches to power every stage of your journey
                </span>
                <span className="text-[11px] font-extrabold uppercase text-orange bg-white/10 px-3 py-1 rounded-full">
                  Click any branch below
                </span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Branch Navigation Cards */}
          <div className="lg:col-span-6 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {treeBranches.map((branch) => {
              const iconMap = {
                Business: Briefcase,
                Growth: TrendingUp,
                Skills: GraduationCap,
                Career: UserCheck,
              };
              const Icon = iconMap[branch.name] || Briefcase;

              const borderStyles = {
                orange: 'hover:border-[#FF7A00] hover:shadow-[0_12px_30px_rgba(255,122,0,0.18)]',
                green: 'hover:border-emerald-500 hover:shadow-[0_12px_30px_rgba(16,185,129,0.18)]',
                blue: 'hover:border-sky-500 hover:shadow-[0_12px_30px_rgba(2,132,199,0.18)]',
                purple: 'hover:border-purple-500 hover:shadow-[0_12px_30px_rgba(147,51,234,0.18)]',
              };

              const iconBgStyles = {
                orange: 'bg-orange/10 text-orange',
                green: 'bg-emerald-500/10 text-emerald-600',
                blue: 'bg-sky-500/10 text-sky-600',
                purple: 'bg-purple-500/10 text-purple-600',
              };

              return (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() => scrollToBranch(branch.id)}
                  className={`text-left w-full rounded-2xl border-2 border-transparent bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 ${borderStyles[branch.colorName]} group hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`grid h-12 w-12 place-items-center rounded-2xl ${iconBgStyles[branch.colorName]} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-black text-navy">{branch.title}</h3>
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${branch.pillBg}`}>
                            {branch.name}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">
                          {branch.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-navy group-hover:text-white transition">
                      <ArrowDown className="h-4 w-4" />
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {branch.summary}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {branch.items.slice(0, 3).map((item, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-700 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60">
                        {item.name}
                      </span>
                    ))}
                    {branch.items.length > 3 && (
                      <span className="text-[11px] font-black text-orange self-center ml-1">
                        +{branch.items.length - 3} more
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
