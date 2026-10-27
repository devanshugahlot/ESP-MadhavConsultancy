import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Search,
  CheckCircle2,
  ListFilter,
  FileText,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import ServiceCard from '../components/ServiceCard';
import SEOHead from '../components/SEOHead';
import {
  brand,
  defaultWhatsAppMessage,
  espWhatsAppMessage,
  services,
  trustBadges,
  whatsappLink,
} from '../assets/siteData';

const categories = [
  { id: 'All', label: 'All Services' },
  { id: 'Business', label: 'Business Branch' },
  { id: 'Growth', label: 'Growth Branch' },
  { id: 'Registration', label: 'Registrations' },
  { id: 'Tax', label: 'ITR & Taxes' },
];

export const allServicesAtoZ = [
  {
    name: "80G & 12A Registration (NGO Exemption)",
    letter: "8",
    branch: "Business",
    desc: "Income Tax exemption certificates for NGOs, Section 8 companies, and charitable trusts enabling 50% tax deductions for donors.",
  },
  {
    name: "Accounting & Bookkeeping Services",
    letter: "A",
    branch: "Business",
    desc: "Monthly financial record maintenance, bank reconciliation, ledger balancing, and financial statements preparation.",
  },
  {
    name: "Annual ROC & MCA Compliances",
    letter: "A",
    branch: "Business",
    desc: "Filing AOC-4, MGT-7, Form 11, Form 8, DIR-3 KYC, and preparing mandatory board resolutions & minutes.",
  },
  {
    name: "Business Expansion & Scalability Planning",
    letter: "B",
    branch: "Growth",
    desc: "Franchise modeling, branch rollout roadmaps, multi-state GST structuring, and operations expansion advisory.",
  },
  {
    name: "CMA Data Preparation (Bank Loans)",
    letter: "C",
    branch: "Growth",
    desc: "Credit Monitoring Arrangement financial projections, ratio analysis, and working capital limits computation for bankers.",
  },
  {
    name: "Company Incorporation (Pvt Ltd & OPC)",
    letter: "C",
    branch: "Business",
    desc: "RUN name approval, SPICe+ MCA incorporation, MOA/AOA drafting, DIN/DSC issuance, PAN, TAN & bank opening.",
  },
  {
    name: "CSR-1 Registration (NGOs & Foundations)",
    letter: "C",
    branch: "Business",
    desc: "MCA Form CSR-1 registration enabling eligible non-profits and Section 8 companies to receive corporate CSR funding.",
  },
  {
    name: "Detailed Project Reports (DPR)",
    letter: "D",
    branch: "Growth",
    desc: "Bankable project viability reports for PMEGP, Mudra loans, MSME schemes, and industrial capital subsidies.",
  },
  {
    name: "Digital Signature Certificate (DSC Class 3)",
    letter: "D",
    branch: "Business",
    desc: "Class 3 DSC with crypto token for directors, partners, e-tenders, GST, and Income Tax portal submissions.",
  },
  {
    name: "Director DIN & KYC Verification",
    letter: "D",
    branch: "Business",
    desc: "Director Identification Number allotment and annual web-based DIR-3 KYC filing on the MCA V3 portal.",
  },
  {
    name: "Drug License (State Pharmacy & Cosmetics)",
    letter: "D",
    branch: "Business",
    desc: "Form 20 & 21 drug sale licenses for retail chemists, wholesale pharmaceutical distributors, and medical stores.",
  },
  {
    name: "E-Way Bill Setup & Consignment Compliance",
    letter: "E",
    branch: "Business",
    desc: "Automated and manual generation of electronic waybills on the GST e-Way Bill portal for goods transport across states.",
  },
  {
    name: "Earning Skill Program (ESP Practical Coaching)",
    letter: "E",
    branch: "Skills",
    desc: "4-week hands-on coaching mastering 5 portal services (GST Reg, MSME, FSSAI, ITR, GST Filing) with client acquisition roadmap.",
  },
  {
    name: "FCRA Registration & Prior Permission (MHA)",
    letter: "F",
    branch: "Business",
    desc: "Ministry of Home Affairs compliance for NGOs and charitable organizations receiving overseas foreign donations.",
  },
  {
    name: "Financial Guidance & Tax Saving Advisory",
    letter: "F",
    branch: "Growth",
    desc: "Cash flow structuring, corporate tax planning, cost optimization roadmaps, and business profitability management.",
  },
  {
    name: "Fire Department NOC & Safety Clearance",
    letter: "F",
    branch: "Business",
    desc: "State fire service department inspection assistance, fire safety compliance certification, and commercial NOC issuance.",
  },
  {
    name: "Food License (FSSAI Registration & State License)",
    letter: "F",
    branch: "Business",
    desc: "FoSCoS portal license issuance for cloud kitchens, home bakers, restaurants, dairy, retail shops, and manufacturers.",
  },
  {
    name: "GeM (Govt. e-Marketplace) Vendor Onboarding",
    letter: "G",
    branch: "Growth",
    desc: "Seller registration, OEM validation, product listing, and bidding compliance on the official GeM portal.",
  },
  {
    name: "GST Registration (New GSTIN Allotment)",
    letter: "G",
    branch: "Business",
    desc: "New GSTIN allotment for proprietorships, partnerships, LLPs, and companies with clarification query handling.",
  },
  {
    name: "GST Return Filing (GSTR-1 & GSTR-3B)",
    letter: "G",
    branch: "Business",
    desc: "Monthly and quarterly return submission, sales invoice reporting, ITC 2B reconciliation, and nil return filing.",
  },
  {
    name: "Import Export Code (IEC) Registration",
    letter: "I",
    branch: "Business",
    desc: "DGFT portal 10-digit IEC license issuance for businesses engaged in international export and import trade.",
  },
  {
    name: "Income Tax Return (ITR-1 to 5) Filing",
    letter: "I",
    branch: "Business",
    desc: "Assisted e-filing for salaried persons, business proprietors, professionals, capital gain earners, and firms with AIS/TIS check.",
  },
  {
    name: "ISO Certification (9001, 14001, 27001)",
    letter: "I",
    branch: "Growth",
    desc: "Accredited international standard certifications boosting corporate tender eligibility, client trust, and quality management.",
  },
  {
    name: "Labour License & Contract Labour (CLRA)",
    letter: "L",
    branch: "Business",
    desc: "State labour commissioner registration and contractor licensing under the Contract Labour (Regulation and Abolition) Act.",
  },
  {
    name: "Limited Liability Partnership (LLP) Registration",
    letter: "L",
    branch: "Business",
    desc: "FiLLiP incorporation, DPIN, custom LLP agreement drafting, and Form 3 submission with the Registrar of Companies.",
  },
  {
    name: "Market Support & B2B Vendor Readiness",
    letter: "M",
    branch: "Growth",
    desc: "Corporate supplier eligibility compliance, enterprise credentials pack, vendor codes, and institutional market access.",
  },
  {
    name: "MSME / Udyam Registration",
    letter: "M",
    branch: "Growth",
    desc: "Official Aadhaar-linked Udyam certificate for micro, small, and medium businesses to claim collateral-free loans & subsidies.",
  },
  {
    name: "Networth & Annual Turnover Certification",
    letter: "N",
    branch: "Growth",
    desc: "Certified Networth statement and financial turnover certificates for tenders, visas, bank credit lines, and franchise applications.",
  },
  {
    name: "NITI Aayog NGO Darpan & E-Anudaan",
    letter: "N",
    branch: "Business",
    desc: "Unique Darpan ID generation and E-Anudaan portal registration required to access central government grants and schemes.",
  },
  {
    name: "NOC & Commercial Rent Agreement Drafting",
    letter: "N",
    branch: "Business",
    desc: "Legally sound commercial lease deed drafting on stamp paper with landlord NOC for GST, MCA, and municipal registrations.",
  },
  {
    name: "Partnership Firm Registration & Deed Drafting",
    letter: "P",
    branch: "Business",
    desc: "Non-judicial stamp deed drafting, ROF (Registrar of Firms) state registration, and dedicated firm PAN card allotment.",
  },
  {
    name: "PF & ESI Registration & Monthly Challans",
    letter: "P",
    branch: "Business",
    desc: "Employee Provident Fund (EPFO) and ESIC establishment registration, monthly ECR challan generation, and employee onboarding.",
  },
  {
    name: "PTEC & PTRC (Professional Tax) Registration",
    letter: "P",
    branch: "Business",
    desc: "Professional Tax Enrolment Certificate (PTEC) for firms and Professional Tax Registration Certificate (PTRC) for employee payroll.",
  },
  {
    name: "Section 8 Company Incorporation (Non-Profit)",
    letter: "S",
    branch: "Business",
    desc: "Incorporation of charitable companies under Section 8 of the Companies Act with central government license, MOA/AOA, and PAN/TAN.",
  },
  {
    name: "Shop & Commercial Establishment Act License",
    letter: "S",
    branch: "Business",
    desc: "State labour department establishment registration certificate for offices, retail stores, and commercial premises.",
  },
  {
    name: "Startup India DPIIT Recognition",
    letter: "S",
    branch: "Growth",
    desc: "DPIIT startup certificate, Section 80-IAC tax exemption guidance, and government seed fund access compliance.",
  },
  {
    name: "Tax Audit & Notice Clarification Support",
    letter: "T",
    branch: "Business",
    desc: "Replying to Income Tax department compliance queries, scrutiny notices, and defective return rectification.",
  },
  {
    name: "Trademark (TM) Search & Registration",
    letter: "T",
    branch: "Growth",
    desc: "Comprehensive public search, trademark application (TM-A) drafting, Vienna codification, and examination reply.",
  },
  {
    name: "Trade License & Municipal Permissions",
    letter: "T",
    branch: "Business",
    desc: "Local municipal corporation trade license issuance and annual statutory trade renewal certificates.",
  },
  {
    name: "UDIN Assistance & Attestation Coordination",
    letter: "U",
    branch: "Business",
    desc: "Verification and coordination for UDIN-attested certificates, audit reports, and statutory financial attestations.",
  },
  {
    name: "Udyam Certificate Updation & Re-classification",
    letter: "U",
    branch: "Growth",
    desc: "Updating turnover, employee numbers, NIC codes, and modifying plant & machinery values on existing Udyam certificates.",
  },
  {
    name: "Virtual Address & Registered Commercial Office",
    letter: "V",
    branch: "Business",
    desc: "Legally approved commercial office address for GSTIN registration, MCA corporate office address, and mailing correspondence.",
  },
];

export default function Services() {
  const [filter, setFilter] = useState('All');
  const [searchAtoZ, setSearchAtoZ] = useState('');
  const [activeLetter, setActiveLetter] = useState('All');
  const location = useLocation();

  // If a hash was provided in URL (e.g. #company-registration), switch to All filter so the card is visible
  useEffect(() => {
    if (location.hash) {
      setFilter('All');
      const targetId = location.hash.replace('#', '');
      const timer = window.setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          if (window.lenis) {
            window.lenis.scrollTo(el, { offset: -110 });
          } else {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          el.classList.add('ring-4', 'ring-orange', 'transition-all', 'duration-500');
          setTimeout(() => {
            el.classList.remove('ring-4', 'ring-orange');
          }, 2400);
        }
      }, 200);
      return () => window.clearTimeout(timer);
    }
  }, [location.hash]);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://themadhavconsultancy.com/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://themadhavconsultancy.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://themadhavconsultancy.com/services"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://themadhavconsultancy.com/services#webpage",
        "url": "https://themadhavconsultancy.com/services",
        "name": "Services | Madhav Consultancy",
        "description": "Company Registration, GST Registration, GST Filing, ITR Filing, MSME, FSSAI, Project Reports, and Trademark services under Madhav Consultancy Business & Growth branches.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://themadhavconsultancy.com/#website",
          "name": "Madhav Consultancy",
          "url": "https://themadhavconsultancy.com/"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://themadhavconsultancy.com/#organization"
        }
      },
      ...services.map((service) => {
        const serviceObj = {
          "@type": "Service",
          "@id": `https://themadhavconsultancy.com/${service.slug}#service`,
          "name": service.title,
          "description": service.summary,
          "url": `https://themadhavconsultancy.com/${service.slug}`,
          "provider": {
            "@type": "LocalBusiness",
            "@id": "https://themadhavconsultancy.com/#localbusiness",
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

  const filteredServices = services.filter((service) => {
    if (filter === 'All') return true;
    if (filter === 'Business') return service.branch === 'Business';
    if (filter === 'Growth') return service.branch === 'Growth';
    if (filter === 'Registration') return service.title.includes('Registration');
    if (filter === 'Tax') return service.title.includes('ITR') || service.title.includes('Tax') || service.title.includes('GST');
    return true;
  });

  // Alphabet letters list for A-Z catalog
  const availableLetters = useMemo(() => {
    const letters = new Set(allServicesAtoZ.map((s) => s.letter));
    return ['All', ...Array.from(letters).sort()];
  }, []);

  const filteredAtoZ = allServicesAtoZ.filter((item) => {
    const matchesLetter = activeLetter === 'All' || item.letter === activeLetter;
    const matchesSearch =
      searchAtoZ.trim() === '' ||
      item.name.toLowerCase().includes(searchAtoZ.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchAtoZ.toLowerCase());
    return matchesLetter && matchesSearch;
  });

  return (
    <PageTransition>
      <SEOHead
        title="Business & Growth Compliance Services | Madhav Consultancy"
        description="Explore complete Company Registration, GST, ITR, MSME, FSSAI, Trademark, and Project Reports services by Madhav Consultancy in Jaipur, Rajasthan."
        canonical="/services"
        schema={servicesSchema}
      />
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
            Every service card below includes procedure, required documents, pricing, and a direct WhatsApp connection to Trainer & Mentor Lokesh Verma.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappLink(defaultWhatsAppMessage)} icon={MessageCircle}>
              WhatsApp Now
            </Button>
            <a
              href="/#skills"
              className="inline-flex items-center gap-2 rounded-full border border-orange bg-orange/10 hover:bg-orange hover:text-white text-orange font-black text-sm uppercase tracking-wider px-5 py-3 transition"
            >
              <Sparkles className="h-4 w-4" />
              <span>
                Want to Learn These? Join ESP (<span className="line-through text-slate-400 font-medium mr-1">₹7,999</span>₹999 Only)
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* --- 1. A TO Z ALL SERVICES DIRECTORY (Catalog placed at the top below hero) --- */}
      <AnimatedSection id="atoz-services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 border border-orange/20 px-3.5 py-1 text-xs font-black text-orange uppercase tracking-wider mb-3">
              <ListFilter className="h-3.5 w-3.5" />
              <span>Complete Service Catalog</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-navy tracking-tight font-display">
              All Services <span className="text-orange">A to Z</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
              A comprehensive index of every corporate incorporation, statutory registration, tax filing, and bank loan report service provided by Madhav Consultancy.
            </p>

            {/* Quick Search & Letter Filter */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={searchAtoZ}
                  onChange={(e) => setSearchAtoZ(e.target.value)}
                  placeholder="Search any service by name (e.g. GST, Company, FSSAI, Loan)..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-full border border-navy/15 bg-slate-50 text-xs sm:text-sm font-semibold text-navy outline-none focus:border-orange focus:bg-white shadow-xs"
                />
              </div>
            </div>

            {/* Alphabet Letter Badges */}
            <div className="mt-5 flex flex-wrap justify-center gap-1.5">
              {availableLetters.map((letter) => {
                const isSelected = activeLetter === letter;
                return (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => setActiveLetter(letter)}
                    className={`h-8 min-w-[2rem] px-2.5 rounded-lg text-xs font-black transition-all ${
                      isSelected
                        ? 'bg-orange text-white shadow-orangeGlow scale-105'
                        : 'bg-slate-100 text-navy hover:bg-slate-200'
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* A to Z Service Items Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAtoZ.map((item, idx) => {
              const whatsappMsg = `Hi Madhav Consultancy, I am interested in your service: ${item.name}. Please guide me on documentation, process, and timeline.`;
              const isBusiness = item.branch === 'Business';
              const isGrowth = item.branch === 'Growth';

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-navy/10 bg-slate-50/70 hover:bg-white p-5 shadow-xs hover:shadow-cardHover hover:border-orange/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange text-white text-xs font-black shadow-xs">
                        {item.letter}
                      </span>
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isBusiness
                            ? 'bg-orange/10 text-orange'
                            : isGrowth
                            ? 'bg-emerald-500/10 text-emerald-600'
                            : 'bg-sky-500/10 text-sky-600'
                        }`}
                      >
                        {item.branch} Vertical
                      </span>
                    </div>

                    <h3 className="text-base font-black text-navy group-hover:text-orange transition-colors">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-slate-400">
                      PAN India Assistance
                    </span>

                    <a
                      href={whatsappLink(whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-orange hover:text-navy transition"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Enquire</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredAtoZ.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center bg-slate-50">
              <p className="text-sm font-bold text-slate-600">
                No services found matching "{searchAtoZ}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchAtoZ('');
                  setActiveLetter('All');
                }}
                className="mt-2 text-xs font-black text-orange underline"
              >
                Reset search & letter filter
              </button>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* --- 2. In-Depth Service Guides & Category Filter Tabs --- */}
      <section className="bg-soft pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 border border-orange/20 px-3.5 py-1 text-xs font-black text-orange uppercase tracking-wider mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>In-Depth Service Guides</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy font-display tracking-tight">
            Detailed Service Process & Requirements
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Review step-by-step government department filing steps, mandatory documents, and price estimates.
          </p>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center border-b border-navy/10 pb-8 px-4 max-w-7xl mx-auto">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-black transition-colors duration-300 z-10 ${
                  isActive ? 'text-white' : 'text-navy hover:text-orange bg-white hover:bg-slate-100 shadow-xs'
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

        {/* Detailed Service Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-6 mt-10">
          {filteredServices.map((service) => (
            <div data-reveal key={service.slug} id={service.slug} className="scroll-mt-32">
              <ServiceCard service={service} detailed />
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
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
