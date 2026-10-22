import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  FileText,
  Building2,
  Utensils,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Laptop,
  Coins,
  Send,
  MessageCircle,
  Sparkles,
  Info,
  HelpCircle,
  MonitorPlay,
  Globe2,
  BookOpenCheck,
  Users,
  TrendingUp,
} from 'lucide-react';
import Button from './Button';
import {
  brand,
  espProgram,
  espWhatsAppMessage,
  whatsappLink,
} from '../assets/siteData';

export default function ESPDetailSection() {
  const [activeTab, setActiveTab] = useState('gst');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      city: '',
      message: 'I want to enroll in the ESP 4-Week Batch.',
    },
  });

  const onEspFormSubmit = (data) => {
    const formattedMessage = [
      `*New ESP Admission Enquiry - Madhav Consultancy*`,
      `👤 *Name:* ${data.name}`,
      `📱 *Phone / WhatsApp:* ${data.phone}`,
      `📍 *City:* ${data.city || 'Not specified'}`,
      `💬 *Message:* ${data.message || 'Please share batch details and fee structure.'}`,
    ].join('\n');

    window.open(whatsappLink(formattedMessage), '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
    reset();
  };

  const currentService =
    espProgram.servicesLearned.find((s) => s.id === activeTab) ||
    espProgram.servicesLearned[0];

  return (
    <section id="skills" className="relative py-20 sm:py-28 bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 border border-orange/20 px-4 py-1.5 text-xs font-black text-orange uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Government Portal Filings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-navy tracking-tight font-display">
            ESP – <span className="text-orange">Earning Skill Program</span>
          </h2>
          <p className="mt-4 text-base sm:text-xl font-bold text-slate-700 leading-relaxed">
            5 Services in 4 Weeks • Live Practical Training • Real Client Strategy
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Step outside theoretical textbooks. Get hands-on with live official portals and start taking paying clients.
          </p>
        </div>

        {/* --- PART 1: 5 Services You Will Learn --- */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-orange">Curriculum</p>
              <h3 className="text-2xl sm:text-3xl font-black text-navy mt-1">
                5 Services You Will Learn
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full self-start sm:self-auto">
              Interactive Practical Modules
            </span>
          </div>

          {/* Service Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {espProgram.servicesLearned.map((srv) => {
              const isSelected = activeTab === srv.id;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setActiveTab(srv.id)}
                  className={`flex flex-col items-start p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 ${
                    isSelected
                      ? 'bg-navy text-white border-navy shadow-md scale-[1.02]'
                      : 'bg-soft text-navy border-slate-200 hover:border-orange hover:bg-orange/5'
                  }`}
                >
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider ${
                      isSelected ? 'text-orange' : 'text-slate-400'
                    }`}
                  >
                    Service {srv.num}
                  </span>
                  <span className="text-xs sm:text-sm font-black mt-1 line-clamp-2">
                    {srv.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Service Deep Dive Card */}
          <div className="mt-6 rounded-3xl border border-navy/10 bg-soft p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange text-white font-black text-lg shadow-orangeGlow">
                  {currentService.num}
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-navy">
                    {currentService.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                    {currentService.summary}
                  </p>
                </div>
              </div>

              <a
                href={whatsappLink(
                  `Hi Lokesh Sir, I want to learn more about the ${currentService.title} module in ESP.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-orange hover:text-white border border-navy/15 text-navy px-4 py-2 text-xs font-black uppercase tracking-wider transition self-start md:self-auto shadow-sm"
              >
                <MessageCircle className="h-4 w-4 text-emerald-500" />
                <span>Ask about this module</span>
              </a>
            </div>

            <div className="mt-6">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4">
                What You Master In This Module:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {currentService.points.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-100 shadow-xs"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- PART 2: What You Will Get --- */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-black uppercase tracking-wider text-orange">Tangible Outcomes</p>
            <h3 className="text-2xl sm:text-4xl font-black text-navy mt-1">
              What You Will Get
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
              Every participant receives actionable competencies to start freelancing, consulting, or accelerating their career.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {espProgram.whatYouWillGet.map((item, idx) => {
              const iconMap = {
                MonitorPlay: MonitorPlay,
                Globe2: Globe2,
                ShieldAlert: BookOpenCheck,
                Target: Users,
                TrendingUp: TrendingUp,
              };
              const Icon = iconMap[item.icon] || CheckCircle2;

              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-navy/10 bg-white p-6 shadow-soft hover:shadow-cardHover hover:border-orange/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange/10 text-orange mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-black text-navy">
                      {item.title}
                    </h4>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-emerald-600 text-xs font-extrabold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Included in 4-Week Cohort</span>
                  </div>
                </div>
              );
            })}

            {/* Lifetime Mentor Access Card */}
            <div className="rounded-3xl border-2 border-dashed border-orange/40 bg-orange/5 p-6 flex flex-col justify-between">
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange text-white shadow-orangeGlow mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h4 className="text-lg sm:text-xl font-black text-navy">
                  Direct Mentor Access
                </h4>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Continuous guidance from Business Consultant Lokesh Verma. Clear real-time doubts during your first paying client assignments.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-orange/20 flex items-center gap-1.5 text-orange text-xs font-black uppercase tracking-wider">
                <span>Jaipur & Online Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- PART 3: Batch Details Placeholder & Enquiry Form --- */}
        <div className="mt-20 rounded-[2.5rem] bg-navy text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-12 items-center">
            {/* Left Column: Batch Details & Structure */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/20 border border-orange/40 px-3 py-1 text-xs font-black text-orange uppercase tracking-wider">
                  Upcoming Cohort Details
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white mt-3 leading-tight">
                  Reserve Your Seat for the Upcoming Batch
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-300">
                  Batches have limited seats to guarantee individual screen-by-screen mentorship and query resolution.
                </p>
              </div>

              {/* Batch Placeholders Card */}
              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <Coins className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400">Fees</p>
                    <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                      {espProgram.batchPlaceholders.fees}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Calendar className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400">Start Date</p>
                    <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                      {espProgram.batchPlaceholders.startDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Clock className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400">Timing & Duration</p>
                    <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                      {espProgram.duration} • {espProgram.batchPlaceholders.timing}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Laptop className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400">Mode</p>
                    <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                      {espProgram.batchPlaceholders.mode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclaimer / Result Dependency Note */}
              <div className="flex items-start gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 text-xs text-slate-300">
                <Info className="h-4 w-4 text-orange shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Note:</strong> {espProgram.effortNote}
                </p>
              </div>
            </div>

            {/* Right Column: Direct ESP Enquiry Form */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white text-navy p-6 sm:p-8 shadow-2xl">
                <div className="mb-6">
                  <h4 className="text-2xl font-black text-navy">
                    Enquire / Book Batch
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill the form below to receive the batch syllabus & early bird offer directly on WhatsApp.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">
                    <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
                    <h5 className="text-lg font-black text-emerald-900">Enquiry Initiated!</h5>
                    <p className="text-xs text-emerald-700 mt-1">
                      Your enquiry message has opened in WhatsApp. Consultant Lokesh Verma will reply promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 text-xs font-black text-navy underline"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onEspFormSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-navy mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-xl border border-navy/15 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-navy outline-none focus:border-orange focus:bg-white"
                        {...register('name', { required: 'Please enter your name' })}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs font-bold mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-navy mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-navy/15 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-navy outline-none focus:border-orange focus:bg-white"
                        {...register('phone', { required: 'Please enter your phone number' })}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs font-bold mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-navy mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Jaipur, Rajasthan (or Online)"
                        className="w-full rounded-xl border border-navy/15 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-navy outline-none focus:border-orange focus:bg-white"
                        {...register('city')}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-navy mb-1">
                        Message / Query
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Any question about batch schedule, fees, or curriculum?"
                        className="w-full rounded-xl border border-navy/15 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-navy outline-none focus:border-orange focus:bg-white resize-none"
                        {...register('message')}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange hover:bg-orange/90 text-white font-black text-sm uppercase tracking-wider py-3.5 shadow-orangeGlow transition-all duration-200 hover:scale-[1.01]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Send to WhatsApp / Enquire Now</span>
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      ⚡ Opens directly in WhatsApp for instant conversation with Lokesh Verma.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
