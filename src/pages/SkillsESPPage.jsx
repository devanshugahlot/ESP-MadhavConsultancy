import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  MessageCircle,
  FileCheck2,
  Users,
  FileCode,
  TrendingUp,
  Laptop,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
  AlertCircle,
  BookOpen,
  MonitorPlay,
  Target,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import espPoster from '../assets/esp-poster.jpg';
import espBanner from '../assets/esp-banner.jpg';
import {
  brand,
  espProgram,
  espWhatsAppMessage,
  faqs,
  lokeshImg,
  whatsappLink,
} from '../assets/siteData';

export default function SkillsESPPage({ onEnquiryOpen }) {
  const espSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://themadhavconsultancy.com/skills-esp#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://themadhavconsultancy.com/',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Skills (ESP)',
            'item': 'https://themadhavconsultancy.com/skills-esp',
          },
        ],
      },
      {
        '@type': 'Course',
        '@id': 'https://themadhavconsultancy.com/skills-esp#course',
        name: 'ESP – Earning Skill Program (Live Practical Coaching)',
        description:
          '4-week intensive practical coaching program mastering 5 high-demand government portal services: GST Registration, MSME/Udyam, FSSAI, ITR Filing Support, and GST Return Filing with live portal screen practice and client acquisition guidance.',
        provider: {
          '@type': 'Organization',
          name: 'Madhav Consultancy',
          url: 'https://themadhavconsultancy.com',
          sameAs: 'https://themadhavconsultancy.com',
        },
        offers: {
          '@type': 'Offer',
          price: '999',
          priceCurrency: 'INR',
          category: 'Live Practical Coaching',
          availability: 'https://schema.org/InStock',
          url: 'https://themadhavconsultancy.com/skills-esp',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: ['online', 'blended'],
          courseWorkload: 'PT1.5H',
          instructor: {
            '@type': 'Person',
            name: 'Lokesh Verma',
            jobTitle: 'Trainer & Mentor',
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://themadhavconsultancy.com/skills-esp#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is ESP (Earning Skill Program)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ESP is an intensive 4-week practical coaching program powered by Madhav Consultancy. You learn 5 high-demand government portal services (GST Registration, MSME/Udyam, FSSAI, ITR Filing Support, and GST Filing) with live portal practice, client acquisition training, and career mentorship.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you promise or guarantee a fixed monthly income?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. In strict compliance with advertising and search standards, we make zero false income guarantees. Results depend on individual effort and consistency. We provide hands-on training, live portal working knowledge, and real client acquisition playbooks to prepare you for professional consulting.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can beginners or non-commerce students join the ESP program?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The curriculum begins from scratch in clear, Hinglish-friendly language. You do not need a prior law or CA degree; we focus on real-world portal workflows and error-free document preparation.',
            },
          },
        ],
      },
    ],
  };

  const curriculumModules = [
    {
      num: '01',
      title: 'GST Registration Portal Mastery',
      summary: 'Learn new GSTIN registration for Sole Proprietorships, Partnerships, and Companies on gst.gov.in.',
      points: [
        'Aadhaar OTP e-KYC authentication and biometric verification workflow',
        'Jurisdiction mapping (State vs Center ward identification)',
        'HSN and SAC 4 to 8 digit classification search for goods and services',
        'Drafting clarification replies for Form GST REG-03 queries',
      ],
      tag: 'gst-registration',
    },
    {
      num: '02',
      title: 'MSME / Udyam Government Certification',
      summary: 'Master official Udyam portal registration and generate lifetime government certificates.',
      points: [
        '5-digit National Industrial Classification (NIC) code selection',
        'Aadhaar and PAN live verification procedure',
        'Understanding bank priority loan schemes and MSME subsidies',
        'Delayed payment filing guidelines on the Samadhaan portal',
      ],
      tag: 'msme-registration',
    },
    {
      num: '03',
      title: 'FSSAI Food License & FoSCoS Portal',
      summary: 'Register cloud kitchens, food stalls, home bakers, and retail food stores on foscos.fssai.gov.in.',
      points: [
        'Basic Registration vs State License eligibility and turnover thresholds',
        'Food category mapping, premise proofs, and self-declaration drafting',
        'Responding to Food Safety Officer inspection queries',
        'Official 14-digit FSSAI certificate download and client handover',
      ],
      tag: 'fssai-license',
    },
    {
      num: '04',
      title: 'Income Tax Return (ITR) Computation & E-Filing',
      summary: 'Prepare and e-file tax returns for salaried employees, business owners, and small firms.',
      points: [
        'Form 16, Form 26AS, AIS, and TIS cross-verification',
        'ITR-1 (Sahaj) and ITR-4 (Sugam presumptive tax) calculation',
        'Old vs New Tax Regime deduction optimization (80C, 80D, 87A rebate)',
        'Aadhaar OTP e-verification and ITR-V acknowledgement sharing',
      ],
      tag: 'itr-filing',
    },
    {
      num: '05',
      title: 'GST Return Filing (GSTR-1, 3B & ITC Reconciliation)',
      summary: 'Handle monthly and quarterly client GST compliance without penalties.',
      points: [
        'GSTR-1 outward invoice entry, B2B reporting, and JSON upload',
        'GSTR-2B live reconciliation for 100% eligible Input Tax Credit',
        'GSTR-3B tax offset, electronic cash ledger challan generation',
        'Nil return filing and client monthly billing workflow',
      ],
      tag: 'gst-filing',
    },
  ];

  return (
    <PageTransition>
      <SEOHead
        title="Earning Skill Program (ESP): Live Practical Compliance Training"
        description="Master GST, ITR, MSME and FSSAI portal filings with live practical training by Lokesh Verma. Real client workflows, no unrealistic claims. Fee: ₹999."
        canonical="/skills-esp"
        schema={espSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-20 bg-gradient-to-b from-[#06152F] via-[#0A1F44] to-[#0D2552] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-orange mb-3">
            <Link to="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-orange">Branch #3: Skills (ESP Program)</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-orange/20 border border-orange/40 px-3.5 py-1 text-xs font-bold text-orange uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Signature Practical Training Cohort</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white font-display">
                Earning Skill Program (ESP) – Live Practical Portal Training
              </h1>

              <p className="mt-4 text-base sm:text-xl font-medium text-slate-200 leading-relaxed max-w-2xl">
                Learn practical skills, get real client exposure. Master 5 essential government portal services directly on official portals under Trainer & Mentor Lokesh Verma.
              </p>

              {/* Policy-Compliant Callout Box */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm max-w-2xl">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white">Realistic & Compliant Learning:</strong> Madhav Consultancy does not make unrealistic income guarantees. We provide real skills, live government portal training, and actionable client acquisition strategies. Your success depends on your dedication.
                  </p>
                </div>
              </div>

              {/* Batch Offer & Key Details Card */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-orange px-4 py-2 text-sm font-black text-white shadow-md">
                  Offer Fee: ₹999/- Only
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-slate-200 border border-white/10">
                  <Clock className="h-4 w-4 text-orange" />
                  4 Weeks Practical Cohort
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-slate-200 border border-white/10">
                  <Calendar className="h-4 w-4 text-orange" />
                  Admissions Open Today
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={brand.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange hover:bg-orange/90 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 shadow-orangeGlow transition-all duration-300 hover:scale-[1.02]"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Book Seat via Google Form</span>
                </a>

                <a
                  href={whatsappLink(espWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 transition shadow-md"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat with Lokesh Sir on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Poster / Visual Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-orange/40 shadow-2xl bg-navy/60">
                <img
                  src={espPoster}
                  alt="Madhav Consultancy ESP Earning Skill Program live coaching poster with course curriculum"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="440"
                  height="550"
                />
                <div className="p-4 bg-navy/95 border-t border-white/10 text-center">
                  <p className="text-xs font-bold text-slate-300">
                    Live Practical Screen Sharing & Portal Practice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-orange">
              5 Essential Services In 4 Weeks
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-navy mt-2">
              Comprehensive Practical Curriculum
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              No boring slide lectures. You practice real form filling, query handling, and client document processing on official government portals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {curriculumModules.map((mod) => (
              <div
                key={mod.num}
                className="flex flex-col justify-between rounded-3xl border border-navy/10 bg-white p-6 shadow-sm hover:shadow-xl hover:border-orange/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange/10 text-orange font-black text-sm">
                      {mod.num}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      Live Portal Practice
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-navy">
                    {mod.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {mod.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    {mod.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-orange shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={`/${mod.tag}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange hover:text-navy transition"
                  >
                    <span>Read complete service process</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Client Acquisition Module Card */}
            <div className="flex flex-col justify-between rounded-3xl border-2 border-orange bg-gradient-to-br from-orange/5 via-white to-orange/10 p-6 shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange text-white font-black text-sm">
                    BONUS
                  </span>
                  <span className="text-xs font-black text-orange uppercase tracking-wider">
                    Client Acquisition
                  </span>
                </div>

                <h3 className="text-lg font-black text-navy">
                  Real Client Acquisition Strategy
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Knowing portal mechanics is only half the battle. We teach you exactly how to find shopkeepers, startups, and freelancers who need these filings.
                </p>

                <div className="mt-4 pt-3 border-t border-orange/20 space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange shrink-0 mt-0.5" />
                    <span>WhatsApp business marketing templates that convert</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange shrink-0 mt-0.5" />
                    <span>How to price your consultancy services competitively</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange shrink-0 mt-0.5" />
                    <span>Sample proposal and professional invoice templates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange shrink-0 mt-0.5" />
                    <span>Handling client queries and onboarding professionally</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-orange/20">
                <a
                  href={brand.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-orange text-white text-xs font-bold py-2.5 hover:bg-orange/90 transition shadow-sm"
                >
                  <span>Enroll in Upcoming Batch</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Profile Section */}
      <section className="py-16 bg-white border-t border-navy/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-4 border-orange shadow-xl">
                <img
                  src={lokeshImg}
                  alt="Trainer & Mentor Lokesh Verma - Madhav Consultancy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="288"
                  height="288"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <span className="text-xs font-black uppercase tracking-widest text-orange">
                Meet Your Mentor
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-navy mt-1">
                Lokesh Verma – Trainer & Mentor
              </h2>
              <p className="text-sm font-semibold text-orange mb-4">
                Founder, Madhav Consultancy
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                "Our vision with the Earning Skill Program (ESP) is simple: bridge the gap between academic theory and practical legal compliance. Students often spend years studying tax books without knowing how to log into the GST portal or FoSCoS portal to file an actual form. In ESP, we teach hands-on execution so you gain genuine confidence and marketable skills."
              </p>

              <div className="mt-6 flex flex-wrap gap-4 pt-2">
                <a
                  href={whatsappLink(espWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-navy hover:bg-navy/90 text-white font-bold text-xs sm:text-sm px-6 py-3 transition shadow"
                >
                  <MessageCircle className="h-4 w-4 text-orange" />
                  <span>Connect with Lokesh Sir</span>
                </a>
                <a
                  href={brand.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-soft hover:bg-slate-100 text-navy font-bold text-xs sm:text-sm px-6 py-3 transition"
                >
                  <span>Book Seat via Form</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-soft border-t border-navy/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-orange">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mt-1">
              Frequently Asked Questions About ESP
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-bold text-navy flex items-start gap-2">
                  <span className="text-orange font-black">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
