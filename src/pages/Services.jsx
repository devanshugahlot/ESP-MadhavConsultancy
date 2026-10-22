import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Sparkles, ArrowRight, Briefcase, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import ServiceCard from '../components/ServiceCard';
import usePageMeta from '../components/usePageMeta';
import { defaultWhatsAppMessage, espWhatsAppMessage, services, trustBadges, whatsappLink } from '../assets/siteData';

const categories = [
  { id: 'All', label: 'All Services' },
  { id: 'Business', label: 'Business Branch' },
  { id: 'Growth', label: 'Growth Branch' },
  { id: 'Registration', label: 'Registrations' },
  { id: 'Tax', label: 'ITR & Taxes' },
];

export default function Services() {
  const [filter, setFilter] = useState('All');

  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.themadhavconsultancy.com/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.themadhavconsultancy.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.themadhavconsultancy.com/services"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.themadhavconsultancy.com/services#webpage",
        "url": "https://www.themadhavconsultancy.com/services",
        "name": "Services | Madhav Consultancy",
        "description": "GST Registration, ITR Filing, MSME Registration, FSSAI License, Trademark Registration, and Company Registration under Madhav Consultancy Business & Growth branches.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.themadhavconsultancy.com/#website",
          "name": "Madhav Consultancy",
          "url": "https://www.themadhavconsultancy.com/"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.themadhavconsultancy.com/#organization"
        }
      },
      ...services.map((service) => {
        const serviceObj = {
          "@type": "Service",
          "@id": `https://www.themadhavconsultancy.com/services#${service.slug}`,
          "name": service.title,
          "description": service.summary,
          "provider": {
            "@type": "LocalBusiness",
            "@id": "https://www.themadhavconsultancy.com/#localbusiness",
            "name": "Madhav Consultancy"
          }
        };
        if (service.price && service.price !== "Custom") {
          serviceObj.offers = {
            "@type": "Offer",
            "price": service.price.replace("₹", ""),
            "priceCurrency": "INR"
          };
        }
        return serviceObj;
      })
    ]
  };

  usePageMeta(
    'Services | Madhav Consultancy - Business & Growth Branches',
    'Explore complete GST, ITR, MSME, FSSAI, Trademark, and Company Registration services organized under Madhav Consultancy Business & Growth branches in Jaipur.',
    servicesSchema
  );

  const filteredServices = services.filter((service) => {
    if (filter === 'All') return true;
    if (filter === 'Business') return service.branch === 'Business';
    if (filter === 'Growth') return service.branch === 'Growth';
    if (filter === 'Registration') return service.title.includes('Registration');
    if (filter === 'Tax') return service.title.includes('ITR') || service.title.includes('Tax');
    return true;
  });

  return (
    <PageTransition>
      <section className="inner-hero pt-36 pb-16 bg-gradient-to-b from-navy/5 via-white to-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 border border-orange/20 px-3.5 py-1 text-xs font-black text-orange uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Under Business & Growth Branches</span>
          </div>
          <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-navy font-display">
            Compliance & Registration Services, <span className="text-orange">Handled Neatly.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            Every service card below includes pricing, step-by-step procedure, required documents, and a direct WhatsApp connection to Consultant Lokesh Verma.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappLink(defaultWhatsAppMessage)} icon={MessageCircle}>
              WhatsApp Now
            </Button>
            <a
              href={whatsappLink(espWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-orange bg-orange/10 hover:bg-orange hover:text-white text-orange font-black text-sm uppercase tracking-wider px-5 py-3 transition"
            >
              <Sparkles className="h-4 w-4" />
              <span>Want to Learn These? Join ESP</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Tabs */}
      <AnimatedSection className="py-2">
        <div className="flex flex-wrap gap-2 justify-center border-b border-navy/10 pb-8 px-4">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-black transition-colors duration-300 z-10 ${
                  isActive ? 'text-white' : 'text-navy hover:text-orange bg-slate-100 hover:bg-slate-200'
                }`}
                onClick={() => setFilter(cat.id)}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-navy -z-10 shadow-soft"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-soft py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-6">
          {filteredServices.map((service) => (
            <div data-reveal key={service.slug}>
              <ServiceCard service={service} detailed />
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 rounded-[2.5rem] bg-navy p-6 text-white shadow-soft md:grid-cols-[1fr_0.75fr] md:p-10">
            <div data-reveal>
              <p className="eyebrow text-orange">Trust Signals</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl font-display">
                Built for secure, WhatsApp-first client communication.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/70 text-sm sm:text-base">
                Share your service requirement first. We confirm document needs and verify eligibility before beginning official portal filing.
              </p>
            </div>
            <div data-reveal className="grid gap-3">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 font-bold text-sm">
                  <ShieldCheck className="h-5 w-5 text-orange shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
