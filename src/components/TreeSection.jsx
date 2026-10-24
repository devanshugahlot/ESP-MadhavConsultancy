import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  TrendingUp,
  GraduationCap,
  UserCheck,
  ArrowDown,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import treeImage from '../assets/tree-branches-new.png';
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
            <span>Madhav Consultancy Ecosystem</span>
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

        {/* Centered Tree Image (Beecho Beech - Visiting card removed) */}
        <motion.div
          className="mt-10 sm:mt-12 max-w-xl sm:max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-[2.5rem] bg-white p-4 sm:p-6 shadow-soft border border-navy/10 overflow-hidden group">
            <img
              src={treeImage}
              alt="Madhav Consultancy Ecosystem Tree - Business, Growth, Skills, and Career"
              className="w-full h-auto max-h-[520px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
              loading="eager"
            />

            {/* Subtle Centered Caption */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-500 px-2">
              <span className="text-navy font-black">
                🌱 4 Interconnected Verticals
              </span>
              <span className="text-orange font-extrabold uppercase tracking-wide">
                Explore each branch below ↓
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4 Branches Cards Shifted BELOW the Tree */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400">
              Select A Branch To Explore Services
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {treeBranches.map((branch) => {
              const iconMap = {
                Business: Briefcase,
                Growth: TrendingUp,
                Skills: GraduationCap,
                Career: UserCheck,
              };
              const Icon = iconMap[branch.name] || Briefcase;

              const borderStyles = {
                orange: 'hover:border-[#FF7A00] hover:shadow-[0_16px_36px_rgba(255,122,0,0.18)]',
                green: 'hover:border-emerald-500 hover:shadow-[0_16px_36px_rgba(16,185,129,0.18)]',
                blue: 'hover:border-sky-500 hover:shadow-[0_16px_36px_rgba(2,132,199,0.18)]',
                purple: 'hover:border-purple-500 hover:shadow-[0_16px_36px_rgba(147,51,234,0.18)]',
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
                  className={`text-left w-full rounded-2xl border-2 border-transparent bg-white p-5 shadow-sm transition-all duration-300 ${borderStyles[branch.colorName]} group hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className={`grid h-12 w-12 place-items-center rounded-2xl ${iconBgStyles[branch.colorName]} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${branch.pillBg}`}>
                        {branch.name}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-navy group-hover:text-orange transition-colors">
                      {branch.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {branch.tagline}
                    </p>

                    <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {branch.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {branch.items.slice(0, 3).map((item, i) => (
                        <span key={i} className="text-[10px] font-bold text-slate-700 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60 truncate max-w-[160px]">
                          {item.name}
                        </span>
                      ))}
                      {branch.items.length > 3 && (
                        <span className="text-[10px] font-black text-orange self-center">
                          +{branch.items.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-black text-navy group-hover:text-orange transition">
                      <span>View Branch Details</span>
                      <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
                    </div>
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
