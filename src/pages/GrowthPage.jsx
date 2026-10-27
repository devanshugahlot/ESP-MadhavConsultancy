import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  FileSpreadsheet,
  Coins,
  BadgeCheck,
  Building,
  Target,
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

export default function GrowthPage({ onEnquiryOpen }) {
  const growthServices = services.filter((s) => s.branch === 'Growth');

  const growthSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://themadhavconsultancy.com/growth#breadcrumb',
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
            'name': 'Growth & Scalability',
            'item': 'https://themadhavconsultancy.com/growth',
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://themadhavconsultancy.com/growth#service',
        name: 'Business Growth, Bank Project Reports & MSME Scaling Advisory',
        description:
          'Bank-ready Detailed Project Reports (DPR), CMA data, MSME Udyam registration, Trademark brand protection, and scalability roadmaps in Jaipur, India.',
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
        areaServed: 'India',
      },
    ],
  };

  return (
    <PageTransition>
      <SEOHead
        title="Business Growth & Bank Project Reports | Madhav Consultancy"
        description="Scale your business with bankable DPR/CMA project reports, MSME subsidies, financial advisory and B2B vendor readiness from Jaipur's leading consultants."
        canonical="/growth"
        schema={growthSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-16 bg-gradient-to-b from-[#06261A] via-[#0B3B29] to-[#0A1F44] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-400 mb-3">
            <Link to="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-emerald-400">Branch #2: Growth & Scalability</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Financial Modeling, Bank Funding & Scaling</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white font-display max-w-4xl">
            Business Growth, Bank Project Reports & MSME Scaling Advisory
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-200">
            Expand your enterprise confidently with bank-ready project reports (DPR/CMA), government MSME subsidies, brand trademark protection, and disciplined financial roadmaps. Led by Research & Business Analyst Specialist Surendra Nagar.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={whatsappLink('Hi Surendra Sir (Madhav Consultancy), I would like to consult on Bank Project Reports (DPR / CMA data) or Business Scaling.')}
              icon={MessageCircle}
            >
              Consult Growth Specialist
            </Button>
            {onEnquiryOpen && (
              <button
                type="button"
                onClick={onEnquiryOpen}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition"
              >
                Request Bank Loan Project Report
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600">
              Growth Branch Solutions
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-navy mt-2">
              Accelerate Your Enterprise Potential
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Browse each growth service below to inspect complete process workflows, documentation requirements, and turnaround times.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {growthServices.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col justify-between rounded-3xl border border-navy/10 bg-white p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                      <TrendingUp className="h-3 w-3" />
                      {service.branch}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {service.turnaround || 'Expedited Delivery'}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-navy line-clamp-1">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Included Capabilities:
                    </p>
                    {service.documents.slice(0, 3).map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Pricing</span>
                    <span className="text-base font-black text-navy">{service.price}</span>
                  </div>

                  <Link
                    to={`/${service.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2 transition duration-200"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Appraisal Highlights */}
      <section className="py-16 bg-white border-t border-navy/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600">
                Bank Approval Assurance
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-navy mt-2 leading-tight">
                Bank-Compliant Financial Modeling Tailored for Real Sanctions
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Bank credit managers look beyond optimistic projections—they scrutinize Debt Service Coverage Ratios (DSCR), Break-Even Points, Interest Coverage, and sensitivity tables. Our research specialist Surendra Nagar prepares reports aligned with banking appraisal formulas.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Compliant with PMEGP subsidy guidelines (up to 35% government grant)',
                  'Mudra Loan (Shishu, Kishore, Tarun up to ₹10-20 Lakhs) project formats',
                  'CGTMSE collateral-free lending feasibility schedules up to ₹2 Crores',
                  'Comprehensive 7-form CMA data for Working Capital / Cash Credit limits',
                  'Direct consultation support during bank credit manager appraisal visits',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-50/50 p-8">
              <h3 className="text-xl font-black text-navy mb-4">
                Applying for a Business Loan or Government Subsidy?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Send us your basic loan requirements, machine quotations, and past financials. We will review your file and prepare a bankable project report that gets approved.
              </p>
              <a
                href={whatsappLink('Hi Surendra Sir, I am applying for a bank loan / PMEGP subsidy and need a Detailed Project Report (DPR). Please guide me.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 transition shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Discuss Loan File with Surendra Nagar</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
