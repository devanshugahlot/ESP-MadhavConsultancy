import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
  FileText,
  Briefcase,
  GraduationCap,
  Users,
  Compass,
  Award,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import {
  brand,
  defaultWhatsAppMessage,
  team,
  whatsappLink,
} from '../assets/siteData';

export default function CareerPage({ onEnquiryOpen }) {
  const careerSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://themadhavconsultancy.com/career#breadcrumb',
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
            'name': 'Career & Mentorship',
            'item': 'https://themadhavconsultancy.com/career',
          },
        ],
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://themadhavconsultancy.com/career#organization',
        name: 'Madhav Consultancy Career & Mentorship Desk',
        description:
          'Personalized career mentorship, practical accounting training, resume restructuring, and CA firm industry referrals by Trainer & Mentor Lokesh Verma.',
        url: 'https://themadhavconsultancy.com/career',
        founder: {
          '@type': 'Person',
          name: 'Lokesh Verma',
          jobTitle: 'Trainer & Mentor',
        },
      },
    ],
  };

  const mentorshipPillars = [
    {
      title: '1-on-1 Guidance & Strategy',
      desc: 'Personalized strategy sessions with Trainer & Mentor Lokesh Verma to map your goals—whether starting a consultancy or securing corporate tax roles.',
      icon: Compass,
    },
    {
      title: 'Practical Resume & Portfolio Restructuring',
      desc: 'Highlight live government portal experience (GST, FoSCoS, Udyam, ITR) on your CV, giving employers concrete proof of operational capability.',
      icon: FileText,
    },
    {
      title: 'Industry References & Placement Links',
      desc: 'Direct referrals to established CA firms, corporate tax consultancies, and emerging business startups looking for skilled practitioners.',
      icon: Briefcase,
    },
    {
      title: 'Lifelong Alumni Mentorship Network',
      desc: 'Ongoing access to our private WhatsApp practitioner group for doubts, complex client cases, regulatory updates, and continuous learning.',
      icon: Users,
    },
  ];

  return (
    <PageTransition>
      <SEOHead
        title="Career Mentorship & Accounting Guidance | Madhav Consultancy"
        description="Advance your tax and compliance career with 1-on-1 mentorship from Lokesh Verma. Resume assistance, CA firm placement links, and continuous upskilling."
        canonical="/career"
        schema={careerSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-16 bg-gradient-to-b from-[#1C0D30] via-[#2D124D] to-[#0A1F44] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-purple-400 mb-3">
            <Link to="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-purple-400">Branch #4: Career & Mentorship</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 border border-purple-400/40 px-3.5 py-1 text-xs font-bold text-purple-300 uppercase tracking-wider mb-4">
            <UserCheck className="h-3.5 w-3.5" />
            <span>Professional Career Development Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white font-display max-w-4xl">
            Career Mentorship, Accounting Training & Job Opportunities
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-200">
            Whether you want to build an independent compliance consulting practice or advance your corporate career, get direct 1-on-1 mentorship from Trainer & Mentor Lokesh Verma and our expert panel.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={whatsappLink('Hi Lokesh Sir, I would like to schedule a 1-on-1 career guidance session regarding tax consulting and career opportunities.')}
              icon={MessageCircle}
            >
              Book 1-on-1 Mentorship Call
            </Button>
            {onEnquiryOpen && (
              <button
                type="button"
                onClick={onEnquiryOpen}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition"
              >
                Connect with Career Desk
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Mentorship Pillars */}
      <section className="py-16 bg-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-purple-600">
              Structured Roadmap
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-navy mt-2">
              How We Help Advance Your Career
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              We bridge the gap between classroom theory and industry requirements through 4 concrete mentorship pillars.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mentorshipPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm hover:shadow-xl hover:border-purple-400 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-50 text-purple-600 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-black text-navy mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-purple-600">
                      Step 0{idx + 1} Pillar
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentors Team Section */}
      <section className="py-16 bg-white border-t border-navy/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-purple-600">
              Leadership & Mentors
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-navy mt-2">
              Learn Directly From Industry Practitioners
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Our mentors handle live cases daily, ensuring your learning matches current government portal norms and real-world compliance practices.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-navy/10 bg-soft overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-navy/10">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Madhav Consultancy`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                    loading="lazy"
                    width="300"
                    height="225"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-black text-navy">{member.name}</h3>
                  <p className="text-xs font-bold text-orange mt-0.5">{member.role}</p>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white hover:bg-navy hover:text-white px-6 py-3 text-xs sm:text-sm font-bold text-navy transition shadow-sm"
            >
              <span>Read Full Leadership Story in About Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
