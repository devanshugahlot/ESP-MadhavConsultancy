import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ChevronRight,
  Home,
  MessageCircle,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  ArrowRight,
  ExternalLink,
  Award,
  Users,
  GraduationCap,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import {
  brand,
  companyObjective,
  defaultWhatsAppMessage,
  founders,
  whatsappLink,
} from '../assets/siteData';

export default function FounderProfilePage({ slug: propSlug, onEnquiryOpen }) {
  const params = useParams();
  const currentSlug = propSlug || params.founderSlug;

  const founder = founders.find((f) => f.slug === currentSlug);

  if (!founder) {
    return <Navigate to="/about" replace />;
  }

  // Other founders for crawlable cross-linking
  const otherFounders = founders.filter((f) => f.slug !== founder.slug);

  // Structured Data Schema: BreadcrumbList + Person (Google Compliant)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `https://themadhavconsultancy.com/about/${founder.slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://themadhavconsultancy.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: 'https://themadhavconsultancy.com/about',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: founder.name,
            item: `https://themadhavconsultancy.com/about/${founder.slug}`,
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': `https://themadhavconsultancy.com/about/${founder.slug}#person`,
        name: founder.name,
        jobTitle: founder.role,
        worksFor: {
          '@type': 'Organization',
          '@id': 'https://themadhavconsultancy.com/#organization',
          name: 'Madhav Consultancy',
          url: 'https://themadhavconsultancy.com/',
        },
        image: `https://themadhavconsultancy.com${typeof founder.image === 'string' ? founder.image : '/assets/' + founder.slug + '.jpg'}`,
        url: `https://themadhavconsultancy.com/about/${founder.slug}`,
        description: founder.oneLineBio,
        sameAs: [
          brand.instagram,
          brand.facebook,
          // TODO: Add official personal LinkedIn URL when provided by client
          // TODO: Add official personal Twitter / X URL when provided by client
        ],
      },
    ],
  };

  const founderWhatsAppMsg = `Hi ${founder.name} Sir (Madhav Consultancy), I saw your profile on the website and would like to connect for consultation.`;

  return (
    <PageTransition>
      <SEOHead
        title={founder.seoTitle}
        description={founder.seoDescription}
        canonical={`/about/${founder.slug}`}
        schema={schema}
      />

      {/* --- Visual Breadcrumbs --- */}
      <nav aria-label="Breadcrumb" className="bg-[#FAFBFD] border-b border-navy/10 pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ol className="flex items-center flex-wrap gap-2 text-xs font-bold text-slate-500">
            <li>
              <Link to="/" className="flex items-center gap-1 hover:text-orange transition">
                <Home className="h-3.5 w-3.5 text-orange" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            </li>
            <li>
              <Link to="/about" className="hover:text-orange transition">
                About Us
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            </li>
            <li className="text-navy font-extrabold truncate" aria-current="page">
              {founder.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* --- Main Profile Section --- */}
      <article className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Founder Photo & Quick Details (lg:col-span-5) */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="rounded-[2.5rem] border border-navy/10 bg-[#FAFBFD] p-5 sm:p-7 shadow-soft">
                {/* Photo */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/4.5] bg-slate-100 border border-navy/10 shadow-xs mb-6">
                  <img
                    src={founder.image}
                    alt={`${founder.name} - ${founder.role} at Madhav Consultancy`}
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/90 text-white backdrop-blur-md px-3.5 py-1 text-xs font-black uppercase tracking-wider border border-white/20">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{founder.role}</span>
                    </span>
                  </div>
                </div>

                {/* Quick Info & Designation */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-orange">Founding Leadership</p>
                    <p className="text-xl sm:text-2xl font-black text-navy">{founder.name}</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-500">{founder.fullRole}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pt-2 border-t border-slate-200">
                    "{founder.oneLineBio}"
                  </p>

                  {/* Social Profile Links (with TODO comment for client additions) */}
                  <div className="pt-3 border-t border-slate-200">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2.5">
                      Connect on Channels
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={brand.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white hover:border-orange hover:text-orange px-3 py-1.5 text-xs font-bold text-slate-700 transition"
                      >
                        <ExternalLink className="h-3 w-3 text-orange" />
                        <span>Instagram</span>
                      </a>
                      <a
                        href={brand.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white hover:border-orange hover:text-orange px-3 py-1.5 text-xs font-bold text-slate-700 transition"
                      >
                        <ExternalLink className="h-3 w-3 text-orange" />
                        <span>Facebook</span>
                      </a>
                      {/* TODO: Add official personal LinkedIn URL when provided by client */}
                      {/* TODO: Add official personal Twitter / X URL when provided by client */}
                    </div>
                  </div>

                  {/* WhatsApp Action */}
                  <div className="pt-4">
                    <a
                      href={whatsappLink(founderWhatsAppMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange hover:bg-orange/90 text-white font-black text-xs sm:text-sm py-3 px-4 shadow-orangeGlow transition"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat with {founder.name}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Organization Trust Badge */}
              <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-xs flex items-center gap-3.5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-navy">Madhav Consultancy</p>
                  <p className="text-[11px] font-semibold text-slate-500">
                    Educational + Business Coaching Firm, Jaipur, Rajasthan
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Column: Single H1 & Comprehensive 150+ Words Bio (lg:col-span-7) */}
            <main className="lg:col-span-7 space-y-8">
              {/* Profile Header: STRICT SINGLE H1 (naam + role) */}
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 border border-orange/20 px-3.5 py-1 text-xs font-black text-orange uppercase tracking-wider mb-3">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Leadership Profile</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy font-display tracking-tight leading-tight">
                  {founder.h1}
                </h1>
                <p className="mt-3 text-sm sm:text-base font-bold text-slate-500">
                  Madhav Consultancy • Jaipur, Rajasthan (Serving Clients Nationwide)
                </p>
              </div>

              {/* Company Objective Anchor */}
              <div className="rounded-2xl border-l-4 border-orange bg-[#FAFBFD] p-5 shadow-xs">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-orange">Institutional Objective</p>
                    <p className="text-sm sm:text-base font-extrabold text-navy mt-1">
                      "{companyObjective}"
                    </p>
                  </div>
                </div>
              </div>

              {/* 150+ Words Detailed Truthful Biography */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-navy font-display">
                  Professional Background & Operational Focus
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  {founder.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  {/* TODO: Founder can expand on personalized journey, educational background, certifications, and milestones */}
                </div>
              </section>

              {/* Key Competencies / Practical Focus */}
              <section className="rounded-2xl border border-navy/10 bg-white p-6 shadow-xs space-y-4">
                <h3 className="text-base font-black text-navy flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-orange" />
                  <span>Core Focus Areas & Mentorship</span>
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAFBFD] border border-slate-100">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Real-world Government Portal Mastery</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAFBFD] border border-slate-100">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Transparent Client Communication</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAFBFD] border border-slate-100">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Practical Business & Career Growth</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAFBFD] border border-slate-100">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Zero False Guarantees • Pure Effort</span>
                  </div>
                </div>
              </section>

              {/* Crawlable Cross-Links: Other Founding Leadership */}
              <section className="pt-6 border-t border-slate-200">
                <p className="text-xs font-black uppercase tracking-wider text-orange mb-3">
                  Founding Leadership Team
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {otherFounders.map((other) => (
                    <Link
                      key={other.slug}
                      to={`/about/${other.slug}`}
                      className="group flex items-center gap-3.5 rounded-2xl border border-navy/10 bg-[#FAFBFD] p-3.5 hover:border-orange/40 hover:bg-white hover:shadow-cardHover transition-all"
                    >
                      <img
                        src={other.image}
                        alt={`${other.name} - ${other.role}`}
                        className="h-12 w-12 rounded-xl object-cover border border-slate-200 shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="block text-xs font-black text-navy group-hover:text-orange transition-colors">
                          {other.name}
                        </span>
                        <span className="block text-[11px] font-bold text-slate-500 truncate">
                          {other.role} • {other.shortRole || other.fullRole}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </article>

      {/* --- Pre-Footer Consultation Banner --- */}
      <section className="bg-gradient-to-r from-deep via-navy to-deep py-14 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/20 border border-orange/40 px-3 py-1 text-xs font-black text-orange uppercase tracking-wider">
            Connect With Our Team
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-display">
            Have Questions About Business Coaching or Filings?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Reach out directly to {founder.name} or our leadership team in Jaipur for direct, transparent consultation.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Button href={whatsappLink(founderWhatsAppMsg)} icon={MessageCircle}>
              Chat on WhatsApp
            </Button>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-6 py-3 text-xs sm:text-sm font-bold text-white transition"
            >
              <span>Back to About Us</span>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
