import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Coins,
  ArrowRight,
  MessageCircle,
  FileText,
  FileCheck2,
  HelpCircle,
  ChevronDown,
  Building2,
  Sparkles,
  Award,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import {
  brand,
  defaultWhatsAppMessage,
  services,
  whatsappLink,
} from '../assets/siteData';

export default function ServiceDetailPage({ onEnquiryOpen }) {
  const { serviceSlug } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <PageTransition>
        <div className="pt-40 pb-24 text-center px-4 max-w-xl mx-auto">
          <h1 className="text-3xl font-black text-navy mb-4">Service Page Not Found</h1>
          <p className="text-slate-600 mb-8">
            The service you requested does not exist or has moved. Please browse our comprehensive catalog of legal, tax, and compliance services.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-6 py-3 font-bold text-sm hover:bg-orange transition"
          >
            <span>Browse All Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Structured Data (JSON-LD) for Google Rich Results
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `https://themadhavconsultancy.com/${service.slug}#breadcrumb`,
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
            'name': 'Services',
            'item': 'https://themadhavconsultancy.com/services',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': service.shortTitle || service.title,
            'item': `https://themadhavconsultancy.com/${service.slug}`,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `https://themadhavconsultancy.com/${service.slug}#service`,
        name: service.title,
        description: service.summary,
        provider: {
          '@type': 'ProfessionalService',
          name: 'Madhav Consultancy',
          url: 'https://themadhavconsultancy.com',
          telephone: '+91-79766-04850',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jaipur',
            addressRegion: 'Rajasthan',
            addressCountry: 'IN',
          },
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        offers: {
          '@type': 'Offer',
          price: service.price ? service.price.replace(/[^0-9]/g, '') || '499' : '499',
          priceCurrency: 'INR',
          url: `https://themadhavconsultancy.com/${service.slug}`,
        },
      },
      ...(service.faqList && service.faqList.length > 0
        ? [
            {
              '@type': 'FAQPage',
              '@id': `https://themadhavconsultancy.com/${service.slug}#faq`,
              mainEntity: service.faqList.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  const branchColor =
    service.branch === 'Growth'
      ? 'text-emerald-500 bg-emerald-50 border-emerald-300'
      : 'text-orange bg-orange/10 border-orange/30';

  const overviewParagraphs = service.fullOverview
    ? service.fullOverview.split('\n\n')
    : [service.summary];

  return (
    <PageTransition>
      <SEOHead
        title={service.seoTitle || `${service.title} | Madhav Consultancy`}
        description={service.seoDescription || service.summary}
        canonical={`/${service.slug}`}
        schema={serviceSchema}
      />

      {/* Top Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-16 bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumbs Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition">Services</Link>
            <span>/</span>
            <span className="text-orange truncate max-w-xs">{service.shortTitle || service.title}</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4 bg-white/10 border-white/20 text-orange">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Under {service.branch} Branch Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black leading-tight text-white font-display max-w-4xl">
            {service.h1 || service.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-200">
            {service.summary}
          </p>

          {/* Quick Specifications Pill Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-white border border-white/10">
              <Coins className="h-4 w-4 text-orange" />
              <span>Professional Fee: <strong>{service.price}</strong></span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-white border border-white/10">
              <Clock className="h-4 w-4 text-emerald-400" />
              <span>Timeline: <strong>{service.turnaround || '24-48 Hours'}</strong></span>
            </div>

            {service.govtFee && (
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-slate-300 border border-white/10">
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                <span>Govt Fee: {service.govtFee}</span>
              </div>
            )}
          </div>

          {/* Direct CTA Bar */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={whatsappLink(service.leadMessage || defaultWhatsAppMessage)}
              icon={MessageCircle}
            >
              Consult On WhatsApp
            </Button>
            {onEnquiryOpen && (
              <button
                type="button"
                onClick={onEnquiryOpen}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition"
              >
                Request Free Document Checklist
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 bg-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left 8 Columns: Comprehensive Details */}
            <div className="lg:col-span-8 space-y-12">
              {/* 1. Full Overview & Legal Mandate */}
              <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
                <span className="text-xs font-black uppercase tracking-widest text-orange">
                  Statutory Background & Mandate
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-navy mt-1 mb-6">
                  Overview & Legal Requirements
                </h2>
                <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 space-y-4">
                  {overviewParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* 2. Key Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
                  <span className="text-xs font-black uppercase tracking-widest text-orange">
                    Advantages & Protection
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-navy mt-1 mb-6">
                    Key Benefits of This Service
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-2xl bg-soft p-4 border border-navy/5">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-navy leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Who Needs This Service / Eligibility */}
              {service.eligibility && (
                <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
                  <span className="text-xs font-black uppercase tracking-widest text-orange">
                    Applicability
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-navy mt-1 mb-4">
                    Who Is Eligible / Required to Apply?
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-orange/5 border border-orange/20 rounded-2xl p-5">
                    {service.eligibility}
                  </p>
                </div>
              )}

              {/* 4. Step-by-Step Process */}
              <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
                <span className="text-xs font-black uppercase tracking-widest text-orange">
                  Clear Roadmap
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-navy mt-1 mb-6">
                  Step-by-Step Filing Procedure
                </h2>
                <div className="space-y-4">
                  {Array.isArray(service.process) &&
                    service.process.map((step, idx) => {
                      const isObj = typeof step === 'object';
                      const title = isObj ? step.title : `Step ${idx + 1}`;
                      const desc = isObj ? step.desc : step;
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-soft p-4 sm:p-5"
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange text-white font-black text-sm">
                            {idx + 1}
                          </span>
                          <div>
                            <h3 className="text-base font-black text-navy">{title}</h3>
                            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">{desc}</p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* 5. Required Documents Checklist */}
              <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
                <span className="text-xs font-black uppercase tracking-widest text-orange">
                  Paperwork Checklist
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-navy mt-1 mb-6">
                  Documents Required
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-soft p-3.5"
                    >
                      <FileCheck2 className="h-4 w-4 text-orange shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-navy leading-snug">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Specific FAQs Accordion */}
              {service.faqList && service.faqList.length > 0 && (
                <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
                  <span className="text-xs font-black uppercase tracking-widest text-orange">
                    Common Inquiries
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-navy mt-1 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {service.faqList.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div
                          key={idx}
                          className="rounded-2xl border border-navy/10 overflow-hidden transition"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                            className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-navy hover:bg-soft transition"
                          >
                            <span className="text-sm sm:text-base">{faq.question}</span>
                            <ChevronDown
                              className={`h-5 w-5 text-orange shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-navy/5 bg-soft/50"
                              >
                                <p className="pt-3">{faq.answer}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Right 4 Columns: Sticky Action Box */}
            <div className="lg:col-span-4 space-y-6">
              {/* Pricing & Booking Card */}
              <div className="sticky top-28 rounded-3xl border border-navy/10 bg-white p-6 shadow-lg">
                <span className="text-[11px] font-black uppercase tracking-widest text-orange">
                  Direct Professional Support
                </span>
                <h3 className="text-xl font-black text-navy mt-1 mb-2">
                  File {service.shortTitle || service.title}
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Verified filings directly on official government portals with dedicated case updates.
                </p>

                <div className="rounded-2xl bg-soft p-4 border border-navy/5 space-y-2 mb-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Service Fee:</span>
                    <span className="font-black text-navy text-sm">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Processing Time:</span>
                    <span className="font-bold text-emerald-600">{service.turnaround || '24-48 Hrs'}</span>
                  </div>
                  {service.govtFee && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Government Fee:</span>
                      <span className="font-semibold text-slate-700">{service.govtFee}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <a
                    href={whatsappLink(service.leadMessage || defaultWhatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-4 shadow transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Direct File Desk</span>
                  </a>

                  {onEnquiryOpen && (
                    <button
                      type="button"
                      onClick={onEnquiryOpen}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-white hover:bg-soft text-navy font-bold text-xs sm:text-sm py-3 px-4 transition"
                    >
                      <span>Send Online Enquiry</span>
                    </button>
                  )}
                </div>

                {/* Trust Highlights */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Zero hidden charges or surprise costs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Live portal application tracking number (ARN)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Dedicated WhatsApp support by Mentor Lokesh Verma</span>
                  </div>
                </div>

                {/* Back to all services */}
                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-orange transition"
                  >
                    <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                    <span>View all compliance services</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
