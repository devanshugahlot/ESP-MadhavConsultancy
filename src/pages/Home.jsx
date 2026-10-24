import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  FileText,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import AnimatedSection from "../components/AnimatedSection";
import HeroESP from "../components/HeroESP";
import TreeSection from "../components/TreeSection";
import FourBranches from "../components/FourBranches";
import ESPDetailSection from "../components/ESPDetailSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsPlaceholder from "../components/TestimonialsPlaceholder";
import FAQAccordion from "../components/FAQAccordion";
import Button from "../components/Button";
import usePageMeta from "../components/usePageMeta";
import {
  brand,
  defaultWhatsAppMessage,
  espWhatsAppMessage,
  faqs,
  whatsappLink,
} from "../assets/siteData";

export default function Home({ onEnquiryOpen }) {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.themadhavconsultancy.com/#organization",
        name: "Madhav Consultancy",
        url: "https://www.themadhavconsultancy.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.themadhavconsultancy.com/logo.jpg",
          caption: "Madhav Consultancy Logo",
        },
        founder: {
          "@type": "Person",
          name: "Lokesh Verma",
          jobTitle: "Trainer & Mentor",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Madhav Consultancy, Jaipur",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          postalCode: "302001",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-79766-04850",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.themadhavconsultancy.com/#website",
        name: "Madhav Consultancy",
        alternateName: [
          "The Madhav Consultancy",
          "themadhavconsultancy",
          "ESP Madhav Consultancy",
        ],
        url: "https://www.themadhavconsultancy.com/",
        publisher: {
          "@id": "https://www.themadhavconsultancy.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.themadhavconsultancy.com/#webpage",
        url: "https://www.themadhavconsultancy.com/",
        name: "Madhav Consultancy | Business, Growth, Skills & Career – Jaipur",
        description:
          "Madhav Consultancy – Educational + Business Coaching, Earning Skill Program (ESP), Company Registration, GST, ITR, MSME, and FSSAI services by Trainer & Mentor Lokesh Verma in Jaipur.",
        isPartOf: {
          "@id": "https://www.themadhavconsultancy.com/#website",
        },
      },
      {
        "@type": "Course",
        name: "ESP – Earning Skill Program",
        description:
          "4-week practical coaching covering 5 essential services: GST Registration, MSME/Udyam, FSSAI, ITR Filing Support, and GST Filing with live portal working.",
        provider: {
          "@type": "Organization",
          name: "Madhav Consultancy",
          sameAs: "https://www.themadhavconsultancy.com/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  usePageMeta(
    "Madhav Consultancy | Business, Growth, Skills & Career – Jaipur",
    "Madhav Consultancy – Educational + Business Coaching, Earning Skill Program (ESP), Company Registration, GST, ITR, MSME, and FSSAI services by Trainer & Mentor Lokesh Verma in Jaipur, Rajasthan.",
    homeSchema
  );

  return (
    <PageTransition>
      {/* 3. HERO = ESP advertisement (main focus of the page) */}
      <HeroESP onEnquiryOpen={onEnquiryOpen} />

      {/* 4. TREE SECTION: "Our Growth, Our Branches" */}
      <TreeSection />

      {/* 5. FOUR BRANCH SECTIONS (cards, each in its branch color: Business, Growth, Skills, Career) */}
      <FourBranches onEnquiryOpen={onEnquiryOpen} />

      {/* 6. ESP DETAIL SECTION (5 Services, What You Will Get, 4 Weeks, Batch Placeholders, Enquiry Form) */}
      <ESPDetailSection />

      {/* 7. WHY CHOOSE US: Trusted Partnership, Professional Approach, Transparent Process, Result Oriented */}
      <WhyChooseUsSection />

      {/* 8. Testimonials placeholder section (leave empty or "coming soon"; do NOT invent reviews) */}
      <TestimonialsPlaceholder />

      {/* FAQ Section */}
      <AnimatedSection id="faq" className="bg-[#F8F9FB] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-orange bg-orange/10 px-3.5 py-1.5 rounded-full border border-orange/20">
              Clear Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mt-3 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Have doubts before enrolling in ESP or starting your business filings? Here are quick answers.
            </p>
          </div>
          <div data-reveal>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </AnimatedSection>

      {/* Pre-Footer Action Banner */}
      <AnimatedSection className="py-16 sm:py-20">
        <div data-reveal className="cta-banner rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden bg-gradient-to-r from-deep via-navy to-deep border border-orange/30 shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow text-orange font-black">
              Let's Build Your Future Together
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl font-display">
              Ready to learn high-income skills or launch your business?
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200">
              Connect directly with Trainer & Mentor Lokesh Verma in Jaipur. One WhatsApp message gets you immediate consultation and compliance support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={whatsappLink(defaultWhatsAppMessage)}
                icon={MessageCircle}
              >
                Chat on WhatsApp
              </Button>
              <Button
                variant="ghost"
                onClick={onEnquiryOpen}
                icon={FileText}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Free Consultation
              </Button>
              <a
                href={brand.callHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 px-5 py-3 text-sm font-extrabold text-white transition"
              >
                <Phone className="h-4 w-4 text-orange" />
                <span>Call: {brand.phoneRaw}</span>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
