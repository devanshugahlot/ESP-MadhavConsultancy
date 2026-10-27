import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Building2,
  FileText,
  FileCheck,
  Scale,
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

export default function BusinessPage({ onEnquiryOpen }) {
  const businessServices = services.filter((s) => s.branch === 'Business');

  const businessSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://themadhavconsultancy.com/business#breadcrumb',
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
            'name': 'Business Solutions',
            'item': 'https://themadhavconsultancy.com/business',
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://themadhavconsultancy.com/business#service',
        name: 'Business Incorporation & Corporate Legal Services',
        description:
          'End-to-end corporate legal services: Private Limited, OPC, LLP, Partnership Firm, MCA compliance, GST, and trade licensing in Jaipur, India.',
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
        title="Business Registration & Compliance Services | Madhav Consultancy"
        description="Form Private Limited companies, LLPs, partnerships and obtain trade licenses with expert guidance in Jaipur. 100% compliant and quick filing support."
        canonical="/business"
        schema={businessSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-16 bg-gradient-to-b from-[#0A1F44] via-[#0D2552] to-[#0A1F44] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-orange mb-3">
            <Link to="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-orange">Branch #1: Business Solutions</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-orange/20 border border-orange/40 px-3.5 py-1 text-xs font-bold text-orange uppercase tracking-wider mb-4">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Corporate Legal & Statutory Entity Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white font-display max-w-4xl">
            Business Incorporation, Corporate Compliance & Licensing Services
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-200">
            From legal incorporation to regular statutory tax filings, we handle every official process so your company operates without risk. Led by Corporate Compliance Specialist Roshan Sharma and Mentor Lokesh Verma.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappLink(defaultWhatsAppMessage)} icon={MessageCircle}>
              Consult Business Advisor
            </Button>
            {onEnquiryOpen && (
              <button
                type="button"
                onClick={onEnquiryOpen}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition"
              >
                Quick Incorporation Enquiry
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-orange">
              Core Business Offerings
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-navy mt-2">
              Select Your Business Service
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Click on any service below to view detailed 400+ words process breakdown, mandatory documents checklist, government fees, and instant filing support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessServices.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col justify-between rounded-3xl border border-navy/10 bg-white p-6 shadow-sm hover:shadow-xl hover:border-orange/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
                      <ShieldCheck className="h-3 w-3" />
                      {service.branch}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {service.turnaround || 'Fast Processing'}
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
                      Key Highlights:
                    </p>
                    {service.documents.slice(0, 3).map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Starting at</span>
                    <span className="text-base font-black text-navy">{service.price}</span>
                  </div>

                  <Link
                    to={`/${service.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy hover:bg-orange text-white text-xs font-bold px-4 py-2 transition duration-200"
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

      {/* Why Choose Section */}
      <section className="py-16 bg-white border-t border-navy/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-orange">
                Enterprise Reliability
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-navy mt-2 leading-tight">
                Why Founders Trust Madhav Consultancy for Corporate Formation
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Incorporating a business requires more than pushing forms through a portal. We provide comprehensive legal counseling on share capital distribution, director indemnification, tax residency considerations, and statutory board resolutions to ensure your business foundation is legally airtight.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  '100% Digital MCA SPICe+ and state ROF filing workflows',
                  'Zero unexpected government fee charges with transparent quotation',
                  'Dedicated Corporate Specialist Roshan Sharma assigned to your file',
                  'Bundled corporate bank account opening with top commercial banks',
                  'Compliant statutory registers & digital share certificate templates provided',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-orange shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-navy/10 bg-soft p-8">
              <h3 className="text-xl font-black text-navy mb-4">
                Have Questions About Choosing the Right Entity?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Should you register a Private Limited Company, an LLP, or a Sole Proprietorship? Our senior consultants analyze your projected revenue, liability profile, and funding goals to recommend the ideal entity.
              </p>
              <a
                href={whatsappLink('Hi Madhav Consultancy, I need advice on choosing between Pvt Ltd, LLP, and Sole Proprietorship for my new business.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 transition shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Get Free Entity Recommendation on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
