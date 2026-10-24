import React from 'react';
import { Clock3, Mail, MapPin, MessageCircle, Phone, Sparkles, UserCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { EnquiryForm } from '../components/EnquiryModal';
import PageTransition from '../components/PageTransition';
import usePageMeta from '../components/usePageMeta';
import { brand, defaultWhatsAppMessage, espWhatsAppMessage, whatsappLink } from '../assets/siteData';

export default function Contact() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.themadhavconsultancy.com/contact#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.themadhavconsultancy.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://www.themadhavconsultancy.com/contact",
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": "https://www.themadhavconsultancy.com/contact#webpage",
        url: "https://www.themadhavconsultancy.com/contact",
        name: "Contact | Madhav Consultancy",
        description:
          "Contact Trainer & Mentor Lokesh Verma at Madhav Consultancy in Jaipur, Rajasthan for ESP admissions, Company Registration, GST, ITR, MSME, and FSSAI services.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.themadhavconsultancy.com/#website",
          name: "Madhav Consultancy",
          url: "https://www.themadhavconsultancy.com/",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.themadhavconsultancy.com/#organization",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.themadhavconsultancy.com/#localbusiness",
        name: "Madhav Consultancy",
        image: "https://www.themadhavconsultancy.com/logo.jpg",
        url: "https://www.themadhavconsultancy.com/",
        telephone: "+917976604850",
        email: "madhavconsultancy2026@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Madhav Consultancy, Jaipur",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          postalCode: "302001",
          addressCountry: "IN",
        },
        priceRange: "INR",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "19:00",
        },
      },
    ],
  };

  usePageMeta(
    'Contact | Madhav Consultancy - Jaipur, Rajasthan',
    'Contact Trainer & Mentor Lokesh Verma at Madhav Consultancy, Jaipur for ESP course admissions, company registrations, and taxation services.',
    contactSchema
  );

  return (
    <PageTransition>
      <section className="inner-hero pt-36 pb-16 bg-gradient-to-b from-navy/5 via-white to-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 border border-orange/20 px-3.5 py-1 text-xs font-black text-orange uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Direct WhatsApp-First Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-navy font-display max-w-4xl">
            Let's Talk About Your <span className="text-orange">Skills & Business.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            Whether inquiring about the upcoming <strong>ESP (Earning Skill Program)</strong> batch or needing corporate registration & tax filing support, Trainer & Mentor Lokesh Verma is here to guide you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappLink(defaultWhatsAppMessage)} icon={MessageCircle}>
              WhatsApp Now (7976604850)
            </Button>
            <Button variant="secondary" href={brand.callHref} icon={Phone}>
              Call Direct
            </Button>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-soft py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: Contact Form */}
          <div data-reveal>
            <div className="mb-4">
              <h2 className="text-2xl font-black text-navy font-display">
                Send an Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Your enquiry will open directly in WhatsApp for immediate response.
              </p>
            </div>
            <EnquiryForm />
          </div>

          {/* Right: Contact Cards */}
          <div data-reveal className="grid gap-4">
            {/* Consultant Profile Card */}
            <div className="rounded-3xl border border-orange/30 bg-gradient-to-r from-orange-50 to-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-orange text-white font-black text-lg shadow-orangeGlow">
                  LV
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange">
                    Trainer & Mentor
                  </span>
                  <h3 className="text-xl font-black text-navy">{brand.consultant}</h3>
                  <p className="text-xs font-semibold text-slate-600">{brand.consultantRole}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                "One Tree, Multiple Solutions for Your Business, Career, Skills & Future. Let's Build Your Future Together."
              </p>
            </div>

            {[
              {
                icon: Phone,
                title: 'Phone & WhatsApp',
                value: brand.phone,
                sub: 'Quickest response via WhatsApp',
                href: brand.callHref,
              },
              {
                icon: Mail,
                title: 'Official Email',
                value: brand.email,
                sub: 'For proposals, docs & formal queries',
                href: `mailto:${brand.email}`,
              },
              {
                icon: MapPin,
                title: 'Head Office Location',
                value: brand.address,
                sub: 'Online & Hybrid assistance across India',
              },
              {
                icon: Clock3,
                title: 'Working Hours',
                value: brand.hours,
                sub: 'Sunday by prior appointment',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              const content = (
                <div className="flex gap-4 rounded-3xl border border-navy/10 bg-white p-5 shadow-soft transition hover:border-orange/50 hover:shadow-cardHover">
                  <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-navy text-orange shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400">{item.title}</p>
                    <p className="text-base sm:text-lg font-black text-navy mt-0.5">{item.value}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={idx} href={item.href} className="block transition hover:-translate-y-0.5">
                  {content}
                </a>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Office Map */}
      <AnimatedSection className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div data-reveal className="overflow-hidden rounded-[2.5rem] border border-navy/10 bg-white p-3 shadow-soft">
            <iframe
              title="Madhav Consultancy Jaipur Office Map"
              src={brand.mapEmbed}
              className="h-[380px] sm:h-[440px] w-full rounded-[2rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
