import React from 'react';
import { Award, Building2, MessageCircle, Target, Sparkles, GraduationCap, Briefcase, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import FeatureGrid from '../components/FeatureGrid';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import treeImage from '../assets/tree-branches-new.png';
import {
  brand,
  defaultWhatsAppMessage,
  espWhatsAppMessage,
  team,
  trustBadges,
  whatsappLink,
  whyChooseUs,
} from '../assets/siteData';

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://themadhavconsultancy.com/about#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://themadhavconsultancy.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://themadhavconsultancy.com/about",
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": "https://themadhavconsultancy.com/about#webpage",
        url: "https://themadhavconsultancy.com/about",
        name: "About Us | Madhav Consultancy",
        description:
          "Madhav Consultancy – Transforming from a plain service provider to an Educational + Business Coaching ecosystem in Jaipur, Rajasthan.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://themadhavconsultancy.com/#website",
          name: "Madhav Consultancy",
          url: "https://themadhavconsultancy.com/",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://themadhavconsultancy.com/#organization",
        },
      },
    ],
  };

  return (
    <PageTransition>
      <SEOHead
        title="About Us: Business & Skill Coaching Ecosystem | Madhav Consultancy"
        description="Learn how Madhav Consultancy combines business registration and tax services with hands-on coaching through the Earning Skill Program (ESP) in Jaipur."
        canonical="/about"
        schema={aboutSchema}
      />
      <section className="inner-hero pt-36 pb-16 bg-gradient-to-b from-navy/5 via-white to-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 border border-orange/20 px-3.5 py-1 text-xs font-black text-orange uppercase tracking-wider mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Educational + Business Coaching</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-navy font-display">
              More Than Just Services... <span className="text-orange">We Build Opportunities.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Founded in Jaipur, Rajasthan, <strong>Madhav Consultancy</strong> has evolved into a premier Educational and Business Coaching firm. We don't just process corporate filings—we coach entrepreneurs and students to master real-world skills, launch sustainable businesses, and unlock their full potential.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={whatsappLink(espWhatsAppMessage)} icon={MessageCircle}>
                Join ESP Cohort
              </Button>
              <Button variant="secondary" to="/#tree-section">
                Explore 4 Branches
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src={treeImage}
              alt="Madhav Consultancy Growth and Branches"
              className="w-full h-auto max-h-[500px] object-contain drop-shadow-md"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 3 Pillars: Vision, Mission, Coaching */}
      <AnimatedSection className="bg-soft py-16">
        <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6">
          {[
            {
              icon: Building2,
              title: 'One Tree, Multiple Solutions',
              copy: 'A unified ecosystem connecting Business, Growth, Skills, and Career under one roof to serve your entire journey.',
            },
            {
              icon: GraduationCap,
              title: 'ESP Coaching Mission',
              copy: 'Empower students and professionals with live government portal working skills so they can launch their own consultancy income.',
            },
            {
              icon: Award,
              title: 'Transparent Commitment',
              copy: 'Zero false promises. We deliver pure practical knowledge, honest timelines, and hands-on guidance on WhatsApp.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article data-reveal key={item.title} className="rounded-3xl border border-navy/10 bg-white p-6 sm:p-8 shadow-soft">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-orange/10 text-orange">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl sm:text-2xl font-black text-navy">{item.title}</h2>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">{item.copy}</p>
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Team / Leadership Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-orange bg-orange/10 px-3.5 py-1.5 rounded-full border border-orange/20">
                Leadership & Mentors
              </span>
              <h2 data-reveal className="text-3xl sm:text-5xl font-black text-navy mt-3 font-display">
                People dedicated to your practical growth.
              </h2>
            </div>
            <div data-reveal>
              <Button href={whatsappLink(defaultWhatsAppMessage)} icon={MessageCircle}>
                Connect With Us
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => {
              const consultationMsg = `Hi ${member.name} Sir (Madhav Consultancy), I would like to consult with you regarding your role as ${member.role}.`;
              return (
                <article
                  data-reveal
                  key={member.name}
                  className="rounded-3xl border border-navy/10 bg-white p-5 sm:p-6 shadow-soft hover:shadow-cardHover hover:border-orange/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Member Photo */}
                    <div className="relative mb-5 overflow-hidden rounded-2xl aspect-[4/4.5] bg-slate-100 border border-navy/10 shadow-xs">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={`${member.name} - ${member.role}`}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-full w-full grid place-items-center bg-navy text-2xl font-black text-orange">
                          {member.name.split(' ').map((p) => p[0]).join('').slice(0, 2)}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="mb-2">
                      <span className="inline-block rounded-full bg-orange/10 border border-orange/20 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-orange">
                        {member.role}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-navy font-display tracking-tight group-hover:text-orange transition-colors">
                      {member.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                      {member.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={whatsappLink(consultationMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 hover:bg-orange hover:text-white text-navy font-bold text-xs py-2.5 px-3 transition-colors border border-navy/10 hover:border-transparent shadow-2xs"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-emerald-500 group-hover:text-white" />
                      <span>Connect on WhatsApp</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Trust Signals */}
      <AnimatedSection className="bg-soft py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-3 rounded-[2.5rem] border border-navy/10 bg-white p-6 sm:p-8 shadow-soft sm:grid-cols-2 lg:grid-cols-3">
            {trustBadges.map((badge) => (
              <div data-reveal key={badge} className="flex items-center gap-3 rounded-2xl bg-soft p-4 text-xs sm:text-sm font-black text-navy">
                <span className="h-2 w-2 rounded-full bg-orange shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
