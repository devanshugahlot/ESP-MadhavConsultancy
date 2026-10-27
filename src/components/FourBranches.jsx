import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  TrendingUp,
  GraduationCap,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  FileText,
  ShieldCheck,
  Sparkles,
  Phone,
  X,
} from 'lucide-react';
import {
  brand,
  espWhatsAppMessage,
  services,
  treeBranches,
  whatsappLink,
} from '../assets/siteData';

function ServiceDetailModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (window.lenis) window.lenis.stop();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (window.lenis) window.lenis.start();
    };
  }, [service]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[120] grid place-items-center bg-navy/70 p-4 backdrop-blur-xl overflow-y-auto overscroll-contain"
        data-lenis-prevent="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={onClose}
      >
        <motion.div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-[2.5rem] bg-white p-6 sm:p-8 shadow-2xl border border-navy/10"
          data-lenis-prevent="true"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-navy/10 bg-slate-100 text-navy transition hover:border-orange hover:text-orange hover:bg-orange/10 shadow-sm"
            onClick={onClose}
            aria-label="Close service details"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="rounded-full bg-orange/10 border border-orange/20 px-3 py-1 text-xs font-black text-orange uppercase tracking-wider">
              {service.branch} Branch
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-navy">
              Pricing: {service.price}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-navy font-display pr-10">
            {service.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            {service.summary}
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 bg-slate-50 p-5 rounded-2xl border border-navy/5">
            {service.process && (
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-orange mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Execution Process</span>
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange mt-2 shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.documents && (
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-navy mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Documents Required</span>
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {service.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <a
              href={whatsappLink(service.leadMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange hover:bg-orange/90 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-3 shadow-orangeGlow transition"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Expert Now</span>
            </a>

            <Link
              to={`/services#${service.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-black text-navy hover:text-orange transition"
            >
              <span>View in All Services Page</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function FourBranches({ onEnquiryOpen }) {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="relative space-y-16 sm:space-y-24 py-12">
      {treeBranches.map((branch, index) => {
        const isOrange = branch.colorName === 'orange';
        const isGreen = branch.colorName === 'green';
        const isBlue = branch.colorName === 'blue';
        const isPurple = branch.colorName === 'purple';

        const colorClasses = {
          headerBg: isOrange
            ? 'bg-gradient-to-r from-orange-50 via-white to-orange-50/30 border-orange-200'
            : isGreen
            ? 'bg-gradient-to-r from-emerald-50 via-white to-emerald-50/30 border-emerald-200'
            : isBlue
            ? 'bg-gradient-to-r from-sky-50 via-white to-sky-50/30 border-sky-200'
            : 'bg-gradient-to-r from-purple-50 via-white to-purple-50/30 border-purple-200',
          accentText: isOrange
            ? 'text-orange'
            : isGreen
            ? 'text-emerald-600'
            : isBlue
            ? 'text-sky-600'
            : 'text-purple-600',
          badgeBg: isOrange
            ? 'bg-orange text-white shadow-orangeGlow'
            : isGreen
            ? 'bg-emerald-600 text-white shadow-md'
            : isBlue
            ? 'bg-sky-600 text-white shadow-md'
            : 'bg-purple-600 text-white shadow-md',
          cardBorder: isOrange
            ? 'hover:border-orange/60 hover:shadow-[0_16px_40px_rgba(255,122,0,0.12)]'
            : isGreen
            ? 'hover:border-emerald-500/60 hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)]'
            : isBlue
            ? 'hover:border-sky-500/60 hover:shadow-[0_16px_40px_rgba(2,132,199,0.12)]'
            : 'hover:border-purple-500/60 hover:shadow-[0_16px_40px_rgba(147,51,234,0.12)]',
          dotBg: isOrange
            ? 'bg-orange'
            : isGreen
            ? 'bg-emerald-500'
            : isBlue
            ? 'bg-sky-500'
            : 'bg-purple-500',
        };

        const iconMap = {
          Business: Briefcase,
          Growth: TrendingUp,
          Skills: GraduationCap,
          Career: UserCheck,
        };
        const BranchIcon = iconMap[branch.name] || Briefcase;

        return (
          <section
            key={branch.id}
            id={branch.id}
            className="scroll-mt-28 relative max-w-7xl mx-auto px-4 sm:px-6"
          >
            {/* Branch Header Banner */}
            <div
              className={`rounded-3xl border p-6 sm:p-8 ${colorClasses.headerBg} shadow-sm relative overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start sm:items-center gap-4">
                  <div
                    className={`grid h-14 w-14 sm:h-16 sm:w-16 shrink-0 place-items-center rounded-2xl ${colorClasses.badgeBg}`}
                  >
                    <BranchIcon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Branch #{index + 1}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className={`text-xs font-extrabold uppercase ${colorClasses.accentText}`}>
                        {branch.name} Vertical
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-black text-navy mt-1 tracking-tight">
                      {branch.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-slate-600 mt-1">
                      {branch.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {branch.name === 'Skills' ? (
                    <a
                      href="#skills"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('skills');
                        if (el) {
                          if (window.lenis) window.lenis.scrollTo(el, { offset: -96 });
                          else el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-orange hover:bg-orange/90 text-white px-5 py-2.5 text-xs sm:text-sm font-black shadow-orangeGlow uppercase tracking-wider transition"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>View Full ESP Details</span>
                    </a>
                  ) : branch.name === 'Career' ? (
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 text-xs sm:text-sm font-black shadow-md uppercase tracking-wider transition"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Connect with Mentor</span>
                    </Link>
                  ) : (
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 rounded-full bg-navy hover:bg-navy/90 text-white px-5 py-2.5 text-xs sm:text-sm font-black shadow-sm uppercase tracking-wider transition"
                    >
                      <span>Explore Services</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}

                  <button
                    type="button"
                    onClick={onEnquiryOpen}
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-white hover:bg-slate-50 text-navy px-4 py-2 text-xs sm:text-sm font-bold shadow-sm transition"
                  >
                    Quick Enquiry
                  </button>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                {branch.summary}
              </p>
            </div>

            {/* Branch Cards Grid */}
            <div className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {branch.items.map((item, itemIdx) => {
                const itemWhatsappMsg = `Hi Madhav Consultancy, I am enquiring about ${item.name} under your ${branch.name} branch. Please share details.`;
                const targetLink =
                  item.to ||
                  (branch.name === 'Skills'
                    ? (item.name.includes('Earning Skill Program') ? '/#skills' : '/contact')
                    : branch.name === 'Career'
                    ? '/contact'
                    : `/services#${item.slug}`);

                const handleDetailsClick = (e) => {
                  if (branch.name === 'Skills') {
                    if (item.name.includes('Earning Skill Program') || item.slug === 'esp-program') {
                      e.preventDefault();
                      const el = document.getElementById('skills');
                      if (el) {
                        if (window.lenis) window.lenis.scrollTo(el, { offset: -96 });
                        else el.scrollIntoView({ behavior: 'smooth' });
                      }
                      return;
                    }
                    // For other Skills items (Practical Training, Digital & Business Skills, Work Readiness) redirect to /contact
                    return;
                  }
                  if (targetLink.startsWith('/#skills')) {
                    e.preventDefault();
                    const el = document.getElementById('skills');
                    if (el) {
                      if (window.lenis) window.lenis.scrollTo(el, { offset: -96 });
                      else el.scrollIntoView({ behavior: 'smooth' });
                    }
                    return;
                  }
                  if (branch.name === 'Career' || targetLink === '/contact') {
                    return;
                  }
                  const matchedService = services.find((s) => s.slug === item.slug);
                  if (matchedService) {
                    e.preventDefault();
                    setSelectedService(matchedService);
                  }
                };

                return (
                  <div
                    key={itemIdx}
                    className={`rounded-2xl border border-navy/10 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 ${colorClasses.cardBorder} flex flex-col justify-between group hover:-translate-y-1`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider ${colorClasses.accentText}`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${colorClasses.dotBg}`}
                          />
                          {branch.name}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">
                          #{itemIdx + 1}
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-black text-navy group-hover:text-orange transition-colors">
                        {item.name}
                      </h4>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <a
                        href={whatsappLink(itemWhatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-black text-navy group-hover:text-orange transition"
                      >
                        <MessageCircle className="h-4 w-4 text-emerald-500" />
                        <span>Enquire on WhatsApp</span>
                      </a>

                      <Link
                        to={targetLink}
                        onClick={handleDetailsClick}
                        className="text-xs font-bold text-orange hover:text-navy transition flex items-center gap-1 bg-orange/5 hover:bg-orange/10 px-2.5 py-1 rounded-full cursor-pointer"
                        title={`View ${item.name} details`}
                      >
                        <span>Details</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Service Quick Detail Modal for Branch Items */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
