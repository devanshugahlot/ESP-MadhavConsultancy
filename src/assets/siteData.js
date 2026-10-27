import lokeshImg from './team/lokesh-verma.jpg';
import roshanImg from './team/roshan-sharma.jpg';
import ajayImg from './team/ajay-verma.jpg';
import surendraImg from './team/surendra-nagar.jpg';

export { lokeshImg, roshanImg, ajayImg, surendraImg };

export const brand = {
  name: "Madhav Consultancy",
  initials: "MC",
  tagline: "Your Business, Our Commitment",
  founder: "Lokesh Verma",
  consultant: "Lokesh Verma",
  consultantRole: "Trainer & Mentor",
  phone: "+91 79766 04850",
  phoneRaw: "7976604850",
  callHref: "tel:+917976604850",
  whatsappNumber: "917976604850",
  email: "Madhavconsultancy2026@gmail.com",
  websiteDisplay: "TheMadhavConsultancy.com",
  websiteUrl: "https://www.themadhavconsultancy.com",
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfIHsqSJw27tMjWN7dBq7teyCayHZud5NkyO8ZwZlb8KwQ_OA/viewform?usp=header",
  address: "Madhav Consultancy, Jaipur, Rajasthan (India)",
  city: "Jaipur, Rajasthan",
  hours: "Mon - Sat, 10:00 AM - 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Jaipur%2C%20Rajasthan%2C%20India&output=embed",
  facebook: "https://www.facebook.com/share/1CzJprMxyy/",
  instagram:
    "https://www.instagram.com/madhavconsultancy_?utm_source=qr&exln=MXNjZWY4enZjZjMzeg==",
  secondaryLines: {
    opportunities: "More Than Just Services... We Build Opportunities.",
    tree: "One Tree, Multiple Solutions for Your Business, Career, Skills & Future.",
    future: "Let's Build Your Future Together.",
    skillsHinglish: "Skill Seekho Aage Badho",
  },
};

export const whatsappLink = (message) =>
  `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultWhatsAppMessage =
  "Hi Lokesh Sir (Madhav Consultancy), I would like to know more about your Coaching & Consultancy Services. Please guide me.";

export const espWhatsAppMessage =
  "Hi Lokesh Sir, I want to join the ESP (Earning Skill Program) batch. Please share admission details and fee structure.";

export const tickerText =
  "ESP (Earning Skill Program) Live Practical Coaching • Offer Fee: ₹999/";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Business", to: "/#business" },
  { label: "Growth", to: "/#growth" },
  { label: "Skills (ESP)", to: "/#skills" },
  { label: "Career", to: "/#career" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const espProgram = {
  name: "ESP – Earning Skill Program",
  poweredBy: "Powered by Madhav Consultancy",
  headline: "ESP – Earning Skill Program, Powered by Madhav Consultancy",
  subheadline:
    "Learn Practical Skills, Get Real Clients, Start Your Professional Income.",
  tagline: "Skill Seekho Aage Badho",
  duration: "4 Weeks",
  effortNote:
    "Note: Results depend on individual effort. Madhav Consultancy does not make unrealistic income guarantees. We provide real skills, live government portal training, and actionable client acquisition strategies.",
  badges: [
    { title: "Expert Guidance", desc: "Mentored directly by experienced consultants", icon: "Lightbulb" },
    { title: "Live Practical Training", desc: "Hands-on working with real files & forms", icon: "Users" },
    { title: "Real Govt. Portal Work", desc: "Official GST, FoSCoS, Udyam & ITR portals", icon: "FileCode" },
    { title: "Career Support", desc: "Client acquisition roadmap & career mentorship", icon: "TrendingUp" },
  ],
  highlights: [
    { label: "Admissions", value: "Started From Today!" },
    { label: "Curriculum", value: "5 Services in 4 Weeks" },
    { label: "Seats", value: "Book Your Batch Now!" },
  ],
  batchPlaceholders: {
    fees: " Special Offer After Discount: ₹999/- Only",
    startDate: "[New Batch Starting This Week – Admissions Open Today]",
    timing: "[Evening & Weekend Batches Available / 1.5 Hrs Daily]",
    mode: "[Live Interactive Online Sessions + Practical Portal Tasks]",
  },
  servicesLearned: [
    {
      id: "gst",
      num: "01",
      title: "GST Registration",
      summary: "End-to-end GST portal registration for all business categories.",
      points: [
        "New GST registration for Proprietorship, Partnership & Companies",
        "Document verification & handling portal clarification queries",
        "HSN / SAC code selection & business jurisdiction mapping",
        "GST certificate download, amendments & cancellation workflow",
      ],
      slug: "gst-registration",
      tagColor: "border-amber-400 text-amber-600 bg-amber-50",
    },
    {
      id: "msme",
      num: "02",
      title: "MSME / Udyam Registration",
      summary: "Government certificate generation for MSMEs with full benefits.",
      points: [
        "Aadhaar-linked Udyam registration portal filing",
        "NIC code selection & enterprise classification (Micro, Small, Medium)",
        "Understanding priority sector bank loan schemes & subsidies",
        "Instant certificate issuance & client handover procedure",
      ],
      slug: "msme-registration",
      tagColor: "border-emerald-400 text-emerald-600 bg-emerald-50",
    },
    {
      id: "fssai",
      num: "03",
      title: "FSSAI Registration",
      summary: "Food business licensing from home bakers to restaurants.",
      points: [
        "FoSCoS portal registration and category eligibility analysis",
        "Basic registration vs State license documentation requirements",
        "Preparing declaration, premise proofs & food category mapping",
        "Tracking application status, query reply & certificate download",
      ],
      slug: "fssai-license",
      tagColor: "border-sky-400 text-sky-600 bg-sky-50",
    },
    {
      id: "itr",
      num: "04",
      title: "ITR Filing Support",
      summary: "Tax return computation and e-filing for individuals and firms.",
      points: [
        "Income Tax e-filing portal navigation and profile setup",
        "Form 16, AIS, and TIS document cross-verification",
        "ITR-1 (Sahaj) & ITR-4 (Sugam) computation & submission",
        "E-verification process, acknowledgement (ITR-V) & refund tracking",
      ],
      slug: "itr-filing",
      tagColor: "border-purple-400 text-purple-600 bg-purple-50",
    },
    {
      id: "gst-filing",
      num: "05",
      title: "GST Filing",
      summary: "Monthly & quarterly return filing (GSTR-1, GSTR-3B) and compliance workflow.",
      points: [
        "GSTR-1 outward sales invoices, B2B/B2C entry & JSON upload",
        "GSTR-3B monthly tax computation, ITC reconciliation & challan payment",
        "Nil return filing, penalty avoidance & late fee minimization",
        "GST liability ledger verification & client monthly filing handover",
      ],
      slug: "gst-filing",
      tagColor: "border-rose-400 text-rose-600 bg-rose-50",
    },
  ],
  whatYouWillGet: [
    {
      title: "Step-by-Step Practical Training",
      desc: "No boring slide lectures. Real case studies, sample client scenarios, and practical form filling from day one.",
      icon: "MonitorPlay",
    },
    {
      title: "Govt. Portal Live Working",
      desc: "Live practice on official government portals (GST, Income Tax, FoSCoS, Udyam) so you can file with 100% confidence.",
      icon: "Globe2",
    },
    {
      title: "Legal Process & Compliance Knowledge",
      desc: "Understand exact notices, rules, penalties, and tax laws in simple, easy-to-understand Hinglish-friendly language.",
      icon: "ShieldAlert",
    },
    {
      title: "Real Client Work Strategy",
      desc: "Learn how to get local shopkeepers, startup founders, and freelancers as paying clients through WhatsApp & local marketing.",
      icon: "Target",
    },
    {
      title: "Professional Income & Career Support",
      desc: "Start charging consultancy fees immediately or use your portfolio of practical skills to land high-paying accounting jobs.",
      icon: "TrendingUp",
    },
  ],
};

export const treeBranches = [
  {
    id: "business",
    name: "Business",
    title: "Business Solutions",
    colorName: "orange",
    colorHex: "#FF7A00",
    borderColor: "border-[#FF7A00]",
    bgGradient: "from-orange-50 to-white",
    textColor: "text-[#FF7A00]",
    pillBg: "bg-[#FF7A00]/10 text-[#FF7A00]",
    icon: "Briefcase",
    tagline: "Build a solid legal and statutory foundation",
    summary:
      "From legal incorporation to regular statutory tax filings, we handle every official process so your company operates without risk.",
    items: [
      { name: "Company Registration", detail: "Pvt Ltd, OPC, Section 8 with MCA filing & DIN support.", slug: "company-registration", to: "/services#company-registration" },
      { name: "LLP Registration", detail: "Limited Liability Partnership deed drafting & partner registration.", slug: "llp-registration", to: "/services#llp-registration" },
      { name: "Partnership Firm", detail: "Deed preparation, notarization, and ROF state registration.", slug: "partnership-firm", to: "/services#partnership-firm" },
      { name: "Compliance & Filings", detail: "Routine MCA returns, board resolutions, and annual legal compliance.", slug: "compliance-filing", to: "/services#compliance-filing" },
      { name: "Licenses & Certificates", detail: "GSTIN, Trade license, Shop Act, and business registrations under one roof.", slug: "licenses-certificates", to: "/services#licenses-certificates" },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    title: "Growth & Scalability",
    colorName: "green",
    colorHex: "#16A34A",
    borderColor: "border-emerald-500",
    bgGradient: "from-emerald-50 to-white",
    textColor: "text-emerald-600",
    pillBg: "bg-emerald-500/10 text-emerald-600",
    icon: "TrendingUp",
    tagline: "Fuel your expansion with funding and strategy",
    summary:
      "Expand your business confidently with bank-ready project reports, government MSME subsidies, and disciplined financial roadmaps.",
    items: [
      { name: "Business Expansion", detail: "Strategic planning for new branch opening, product line rollout & scaling.", slug: "business-expansion", to: "/services#business-expansion" },
      { name: "Project Reports", detail: "Bankable Detailed Project Reports (DPR) & CMA data for bank loans.", slug: "project-reports", to: "/services#project-reports" },
      { name: "MSME / Udyam", detail: "Official Udyam registration, priority loan access, and subsidy eligibility.", slug: "msme-registration", to: "/services#msme-registration" },
      { name: "Financial Guidance", detail: "Cash flow structuring, tax saving advisory, and cost-optimization roadmaps.", slug: "financial-guidance", to: "/services#financial-guidance" },
      { name: "Market Support", detail: "Vendor connections, B2B compliance readiness, and institutional market access.", slug: "market-support", to: "/services#market-support" },
    ],
  },
  {
    id: "skills",
    name: "Skills",
    title: "Skills & ESP Program",
    colorName: "blue",
    colorHex: "#0284C7",
    borderColor: "border-sky-500",
    bgGradient: "from-sky-50 to-white",
    textColor: "text-sky-600",
    pillBg: "bg-sky-500/10 text-sky-600",
    icon: "GraduationCap",
    tagline: "Turn practical knowledge into predictable income",
    summary:
      "Become a certified compliance practitioner. Learn 5 essential government portal services (GST, MSME, FSSAI, ITR, GST Filing) and start taking paying clients in 4 weeks.",
    items: [
      { name: "Earning Skill Program (ESP)", detail: "4-week signature live cohort with step-by-step portal mastery.", slug: "esp-program", to: "/#skills" },
      { name: "Practical Training", detail: "Live portal screen sharing, sample client documents, and query solving.", slug: "practical-training", to: "/contact" },
      { name: "Digital & Business Skills", detail: "WhatsApp business marketing, professional proposal writing & pricing strategy.", slug: "digital-skills", to: "/contact" },
      { name: "Work Readiness", detail: "Industry-standard working knowledge that gives immediate career and freelancing value.", slug: "work-readiness", to: "/contact" },
    ],
  },
  {
    id: "career",
    name: "Career",
    title: "Career & Mentorship",
    colorName: "purple",
    colorHex: "#9333EA",
    borderColor: "border-purple-500",
    bgGradient: "from-purple-50 to-white",
    textColor: "text-purple-600",
    pillBg: "bg-purple-500/10 text-purple-600",
    icon: "UserCheck",
    tagline: "Personalized mentorship for long-term success",
    summary:
      "Whether you want to build an independent consultancy firm or land a top corporate role, get direct mentorship from Trainer & Mentor Lokesh Verma.",
    items: [
      { name: "Guidance & Mentorship", detail: "1-on-1 strategy sessions with Trainer & Mentor Lokesh Verma.", slug: "contact", to: "/contact" },
      { name: "Resume Support", detail: "Professional resume restructuring highlighting live portal experience.", slug: "contact", to: "/contact" },
      { name: "Job & Internship Links", detail: "Direct industry references to CA firms, tax consultancies & growing startups.", slug: "contact", to: "/contact" },
      { name: "Professional Growth", detail: "Lifelong community network, weekly Q&A support, and continuous upskilling.", slug: "contact", to: "/contact" },
    ],
  },
];

export const services = [
  {
    slug: "company-registration",
    title: "Company Registration (Pvt Ltd & OPC)",
    shortTitle: "Company Reg",
    branch: "Business",
    price: "Custom",
    summary:
      "Start a Private Limited company or One Person Company (OPC) with complete legal drafting, RUN name reservation, SPICe+ MCA incorporation, and DIN/DSC issuance.",
    process: [
      "Entity consultation & company structure guidance",
      "RUN name approval on official MCA portal",
      "Drafting MOA & AOA with SPICe+ digital submission",
      "Certificate of Incorporation (COI), PAN, TAN, and bank account setup",
    ],
    documents: [
      "PAN and Aadhaar card of all Directors",
      "Passport size photographs & email/mobile of promoters",
      "Registered office address proof (Electricity bill / Property tax)",
      "NOC from registered office premises owner",
      "Bank statement / Passbook copy for director identity verification",
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in Private Limited / OPC Company Registration. Please share details.",
  },
  {
    slug: "llp-registration",
    title: "Limited Liability Partnership (LLP) Registration",
    shortTitle: "LLP Reg",
    branch: "Business",
    price: "Custom",
    summary:
      "Ideal business vehicle for professionals, partners, and modern services combining the flexibility of a partnership with limited liability protection.",
    process: [
      "Partner eligibility check & DPIN / DSC acquisition",
      "LLP RUN name reservation on MCA portal",
      "FiLLiP form drafting, verification & incorporation filing",
      "Custom LLP Agreement drafting & Form 3 filing within 30 days",
    ],
    documents: [
      "PAN and Aadhaar card of designated partners",
      "Passport size photographs of all partners",
      "Office address proof (Electricity bill / Rent agreement)",
      "NOC from owner for registered commercial address",
      "Bank account statements for partner address proof",
    ],
    leadMessage: "Hi Madhav Consultancy, I want to register a Limited Liability Partnership (LLP). Please guide me.",
  },
  {
    slug: "partnership-firm",
    title: "Partnership Firm Registration & Deed Drafting",
    shortTitle: "Partnership Firm",
    branch: "Business",
    price: "Custom",
    summary:
      "Legal partnership deed drafting with notarization, PAN allotment, and official Registrar of Firms (ROF) state registration.",
    process: [
      "Partnership clauses consultation (profit sharing, roles & capital)",
      "Comprehensive Partnership Deed drafting on non-judicial stamp paper",
      "Notarization and firm PAN application",
      "ROF (Registrar of Firms) submission for government registration certificate",
    ],
    documents: [
      "PAN & Aadhaar cards of all partners",
      "Passport photographs of partners",
      "Electricity bill / Rent agreement of firm's place of business",
      "NOC from property landlord",
      "Agreed capital contribution and business objective outline",
    ],
    leadMessage: "Hi Madhav Consultancy, I need Partnership Firm deed drafting and ROF registration support.",
  },
  {
    slug: "compliance-filing",
    title: "Company Compliance & Annual MCA Filings",
    shortTitle: "Company Compliance",
    branch: "Business",
    price: "Custom",
    summary:
      "End-to-end statutory compliance for Companies and LLPs handled by Roshan Sharma, including AOC-4, MGT-7, Form 11, Form 8, and Director KYC.",
    process: [
      "Annual statutory books & financial statement review",
      "DIR-3 KYC verification for all directors",
      "Drafting Board resolutions, AGM minutes, and Director reports",
      "E-filing of AOC-4, MGT-7 (for Companies) and Form 11/8 (for LLPs) with MCA",
    ],
    documents: [
      "Audited financial statements and balance sheet",
      "Director PAN, Aadhaar, and active DSC",
      "List of shareholders and shareholding pattern",
      "Previous MCA filing receipts and corporate registers",
    ],
    leadMessage: "Hi Roshan Sir (Madhav Consultancy), I need MCA/ROC statutory compliance and annual filing assistance.",
  },
  {
    slug: "licenses-certificates",
    title: "Trade Licenses & Business Certificates",
    shortTitle: "Licenses",
    branch: "Business",
    price: "Custom",
    summary:
      "Municipal trade licenses, Shop & Commercial Establishment Act registrations, Import Export Code (IEC), and local regulatory certificates.",
    process: [
      "Business premise jurisdiction & category identification",
      "Municipal / Labour department application preparation",
      "Document upload and statutory government fee processing",
      "Issuance of official trade license / Shop Act registration certificate",
    ],
    documents: [
      "Identity and address proof of business owner",
      "Electricity bill / Rent deed of commercial premise",
      "Business signboard photo & layout details",
      "Bank account cancelled cheque / proof",
    ],
    leadMessage: "Hi Madhav Consultancy, I need Trade License / Shop Act registration assistance.",
  },
  {
    slug: "gst-registration",
    title: "GST Registration",
    shortTitle: "GST Reg",
    branch: "Business",
    price: "₹499",
    summary:
      "Fast, error-free GSTIN registration for proprietorships, partnerships, LLPs, and companies with end-to-end portal tracking and clarification reply.",
    process: [
      "Business review & eligibility check",
      "Document verification & portal upload",
      "Application filing with DSC / Aadhaar OTP verification",
      "GSTIN certificate download & official compliance setup",
    ],
    documents: [
      "PAN card of applicant / business entity",
      "Aadhaar card linked with active mobile number",
      "Business address proof (Electricity bill / Rent agreement + NOC)",
      "Bank account proof (Cancelled cheque / Bank statement)",
      "Passport size photograph",
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in GST Registration service. Please share details.",
  },
  {
    slug: "gst-filing",
    title: "GST Return Filing (GSTR-1 & GSTR-3B)",
    shortTitle: "GST Filing",
    branch: "Business",
    price: "₹499/mo",
    summary:
      "Accurate monthly and quarterly return filing for businesses to ensure 100% input tax credit (ITC) reconciliation and avoid government late fee penalties.",
    process: [
      "Monthly sales invoice and purchase register collection",
      "GSTR-1 outward supply data preparation & JSON verification",
      "GSTR-3B tax computation, ITC reconciliation & challan payment",
      "Filing acknowledgement sharing and client ledger update",
    ],
    documents: [
      "Sales invoices / Outward bill summary for the month",
      "Purchase bills for ITC verification",
      "Bank statement of the filing period",
      "GST portal credentials (ID & Password)",
    ],
    leadMessage: "Hi Madhav Consultancy, I need monthly GST Return Filing support.",
  },
  {
    slug: "itr-filing",
    title: "ITR Filing & Tax Consultation",
    shortTitle: "ITR",
    branch: "Business",
    price: "₹499",
    summary:
      "Assisted income tax return filing for salaried employees, business owners, freelancers, capital gain earners, and small firms with maximum deduction benefits.",
    process: [
      "Income review & tax slab analysis (Old vs New regime)",
      "Form 16 & AIS/TIS reconciliation",
      "Tax computation & deduction claiming (80C, 80D, 87A)",
      "E-filing and acknowledgement (ITR-V) sharing",
    ],
    documents: [
      "PAN card & Aadhaar card",
      "Form 16 / 16A (for salaried persons)",
      "Bank statements of the financial year",
      "Investment & deduction proofs",
      "IT portal login credentials (if already registered)",
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in ITR Filing Support.",
  },
  {
    slug: "msme-registration",
    title: "MSME / Udyam Registration",
    shortTitle: "MSME",
    branch: "Growth",
    price: "₹399",
    summary:
      "Official government Udyam registration for small businesses to unlock priority bank loan access, subsidies, tender privileges, and collateral-free funding.",
    process: [
      "Business profile & activity review",
      "Aadhaar OTP verification on official Udyam portal",
      "Accurate NIC code mapping & enterprise classification",
      "Instant lifetime certificate delivery",
    ],
    documents: [
      "Aadhaar card linked with active mobile",
      "PAN card of owner / firm",
      "Business trade name & office address",
      "Bank account details (IFSC & Acc. Number)",
      "Number of employees & turnover details",
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in MSME / Udyam Registration.",
  },
  {
    slug: "fssai-license",
    title: "FSSAI Food License Registration",
    shortTitle: "FSSAI",
    branch: "Business",
    price: "₹599",
    summary:
      "Food safety license assistance for home kitchens, restaurants, sweet shops, cloud kitchens, retail food stores, and food manufacturers.",
    process: [
      "Business scale & license category check (Basic vs State License)",
      "FoSCoS document preparation & form submission",
      "Government fee payment & portal tracking",
      "FSSAI 14-digit certificate delivery",
    ],
    documents: [
      "Applicant Photo ID & Address proof",
      "Premise ownership / Rent agreement & NOC",
      "Food category list & planned products",
      "Water test report (if applicable)",
      "Self-declaration form",
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in FSSAI Food License.",
  },
  {
    slug: "project-reports",
    title: "Bank Loan Project Reports & CMA Data",
    shortTitle: "Project Reports",
    branch: "Growth",
    price: "Custom",
    summary:
      "Bank-compliant Detailed Project Reports (DPR) and Credit Monitoring Arrangement (CMA) data prepared for PMEGP, Mudra, MSME collateral-free, and term loans.",
    process: [
      "Project requirement & financial assessment with Surendra Nagar",
      "Collecting historical financial records and projected machinery/working capital costs",
      "Building multi-year cash flow statements, debt service coverage ratio (DSCR), and balance sheets",
      "Bank-ready signed report delivery with clarification support during banker appraisal",
    ],
    documents: [
      "Promoter KYC (PAN, Aadhaar, Resume)",
      "Past 2-3 years ITR & balance sheets (for existing units)",
      "Quotation of machinery / Project setup cost estimates",
      "Proposed business location & lease/ownership proof",
      "Bank loan application details & scheme selected",
    ],
    leadMessage: "Hi Surendra Sir (Madhav Consultancy), I need a bankable Project Report (DPR / CMA) for a business loan.",
  },
  {
    slug: "business-expansion",
    title: "Business Expansion & Scalability Planning",
    shortTitle: "Expansion",
    branch: "Growth",
    price: "Custom",
    summary:
      "Strategic business modeling, branch expansion roadmaps, multi-state GST structuring, and operations scaling guided by Mentor Lokesh Verma.",
    process: [
      "Comprehensive diagnostic of existing revenue streams & business model",
      "Market feasibility and expansion budget roadmap preparation",
      "Regulatory & tax restructuring for new branch or franchise rollout",
      "Ongoing execution monitoring and mentor milestone reviews",
    ],
    documents: [
      "Current business registration & turnover history",
      "Proposed expansion model (Franchise / Branch / Online)",
      "Target customer segment and timeline roadmap",
    ],
    leadMessage: "Hi Lokesh Sir, I want to discuss business expansion strategy for my company.",
  },
  {
    slug: "financial-guidance",
    title: "Financial Guidance & Tax Saving Advisory",
    shortTitle: "Financial Guidance",
    branch: "Growth",
    price: "Custom",
    summary:
      "Personalized cash flow structuring, legal tax planning, cost optimization roadmaps, and business profitability management.",
    process: [
      "Cash flow review and operational expense audit",
      "Identification of permissible deductions, allowances & subsidies",
      "Developing a monthly compliance & tax budget calendar",
      "Quarterly performance reviews to maximize business savings",
    ],
    documents: [
      "Recent P&L and Balance Sheet",
      "Current year GST and ITR computation",
      "Major expense heads and investment portfolios",
    ],
    leadMessage: "Hi Madhav Consultancy, I would like financial guidance & tax planning advisory.",
  },
  {
    slug: "market-support",
    title: "Market Support & B2B Compliance Readiness",
    shortTitle: "Market Support",
    branch: "Growth",
    price: "Custom",
    summary:
      "Get your enterprise B2B-ready with vendor registration certifications, GeM portal listing, startup recognition, and institutional buyer compliance.",
    process: [
      "Corporate vendor requirement analysis",
      "Government e-Marketplace (GeM) registration and profile cataloging",
      "Startup India DPIIT recognition filing and tax exemption guidance",
      "Complete credential package creation for enterprise tenders",
    ],
    documents: [
      "Company registration / Udyam certificate",
      "GSTIN and PAN details",
      "Product / Service catalog and bank solvency proofs",
    ],
    leadMessage: "Hi Madhav Consultancy, I need Market Support and B2B vendor onboarding assistance.",
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration & IP Protection",
    shortTitle: "Trademark",
    branch: "Growth",
    price: "Custom",
    summary:
      "Protect your brand name, company logo, or product identity with public registry search, classification, and trademark filing under Intellectual Property India.",
    process: [
      "Brand search & conflict checking across trademark database",
      "Appropriate class selection (Class 1-45)",
      "TM application drafting & submission under TM-A",
      "Status tracking & reply to examination report until registration certificate",
    ],
    documents: [
      "Applicant PAN and Aadhaar card",
      "Logo artwork / Brand name representation",
      "Business proof / MSME certificate (for 50% govt fee concession)",
      "Date of first use affidavit (if already in use)",
      "Power of attorney (Form TM-48)",
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in Trademark Registration.",
  },
];

export const whyChooseUsPillars = [
  {
    title: "Trusted Partnership",
    description: "We work as your extended consulting arm, giving genuine advice with no hidden charges.",
    icon: "Handshake",
  },
  {
    title: "Professional Approach",
    description: "Deep expertise in statutory portals, accurate documentation, and quick legal turnarounds.",
    icon: "ShieldCheck",
  },
  {
    title: "Transparent Process",
    description: "Screen-by-screen clarity and real-time WhatsApp updates at every stage of the process.",
    icon: "Search",
  },
  {
    title: "Result Oriented",
    description: "Focused on getting your certificate issued, returns acknowledged, and students income-ready.",
    icon: "Target",
  },
];

export const whyChooseUs = [
  {
    title: "Trusted Partnership",
    description: "We don't just complete paperwork; we build long-term relationships for your business growth.",
    icon: "Handshake",
  },
  {
    title: "Professional Approach",
    description: "Structured workflows, expert document review, and 100% compliant filings.",
    icon: "ShieldCheck",
  },
  {
    title: "Transparent Process",
    description: "No confusing jargon or surprise costs. Step-by-step clarity from start to finish.",
    icon: "Search",
  },
  {
    title: "Result Oriented",
    description: "We measure success by your approved licenses, smooth returns, and earning capability.",
    icon: "Target",
  },
  {
    title: "Live Govt. Portal Training",
    description: "Learn directly on official portals with real client cases under expert mentorship.",
    icon: "Zap",
  },
  {
    title: "WhatsApp-First Support",
    description: "Immediate guidance and document reviews directly on WhatsApp without bureaucratic delay.",
    icon: "Headphones",
  },
];

export const stats = [
  { value: 500, suffix: "+", label: "Clients & Students Served" },
  { value: 5000, suffix: "+", label: "Filing & Service Done" },
  { value: 24, suffix: " hr", label: "Fast Response / Turnaround" },
  { value: 20, suffix: "+", label: "Core Services" },
];

export const processSteps = [
  {
    title: "Connect & Consult",
    description: "Send a quick WhatsApp message with your business requirement or course interest.",
  },
  {
    title: "Review & Document",
    description: "We verify your documents or enroll you into the upcoming live practical training batch.",
  },
  {
    title: "Execute & File",
    description: "Your application is filed on official portals or you practice live under guidance.",
  },
  {
    title: "Deliver & Grow",
    description: "Receive your government certificate or begin consulting real clients for steady income.",
  },
];

export const documentTabs = [
  {
    id: "gst",
    label: "GST Registration",
    items: [
      "PAN Card (Applicant / Business)",
      "Aadhaar Card linked with mobile OTP",
      "Business Address Proof (Electricity bill / Property tax / Rent agreement)",
      "NOC from property owner if rented",
      "Bank Account Proof (Cancelled cheque / Bank passbook / Bank statement)",
      "Passport size photograph",
      "Business Trade Name & List of Goods/Services",
    ],
  },
  {
    id: "itr",
    label: "ITR Filing",
    items: [
      "PAN Card & Aadhaar Card",
      "Form 16 / Form 16A (for salaried / TDS deducted income)",
      "AIS / TIS details from Income Tax portal",
      "Bank statements of all active accounts for FY",
      "Investment proofs (80C, 80D, insurance receipts)",
      "Portal ID & Password if previously registered",
    ],
  },
  {
    id: "msme",
    label: "MSME / Udyam",
    items: [
      "Aadhaar Card linked with mobile number",
      "PAN Card of the proprietor / firm",
      "Business Trade Name",
      "Official business address with pincode",
      "Bank Account Number & IFSC Code",
      "Business commencement date & investment range",
    ],
  },
  {
    id: "fssai",
    label: "FSSAI License",
    items: [
      "Passport size photograph of food business operator",
      "Government Photo ID & Address proof (Aadhaar / Voter ID / Passport)",
      "Proof of business premises (Rent agreement / Electricity bill)",
      "List of food products / categories handled",
      "Self-declaration of food safety measures",
    ],
  },
];

export const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Jaipur, Rajasthan",
    service: "ESP (Earning Skill Program)",
    rating: 5,
    role: "ESP Student / Tax Practitioner",
    quote:
      "ESP program join karne ke baad maine pehle month me hi 4 local shopkeepers ka GST Registration aur MSME Udyam file kiya. Lokesh sir ka live screen-sharing practical tareeka bohot asaan aur useful hai.",
  },
  {
    name: "Pooja Verma",
    city: "Kota, Rajasthan",
    service: "GST & Return Filing",
    rating: 5,
    role: "Retail Store Owner",
    quote:
      "Madhav Consultancy ne hamare retail store ka GST registration sirf 2 din me complete kar diya. Har month GSTR-1 aur 3B return filing time par ho jati hai without any late penalty.",
  },
  {
    name: "Amit Choudhary",
    city: "Jodhpur, Rajasthan",
    service: "Project Reports (CMA / DPR)",
    rating: 5,
    role: "Manufacturing Entrepreneur",
    quote:
      "Bank loan ke liye Detailed Project Report (DPR) aur CMA data Surendra ji ne bohot accurate banaya. Bank appraisal officer ne bina kisi query ke project sanction kar diya.",
  },
  {
    name: "Vikas Saini",
    city: "Delhi NCR",
    service: "ESP (Earning Skill Program)",
    rating: 5,
    role: "Freelance Compliance Consultant",
    quote:
      "College me sirf book knowledge mili thi. Madhav Consultancy ke ESP batch me GST portal, Income Tax portal aur FoSCoS pe live kaam seekhne ko mila. Ab independent earnings shuru ho gayi hain.",
  },
  {
    name: "Dr. Sunita Pareek",
    city: "Ahmedabad, Gujarat",
    service: "FSSAI Food License",
    rating: 5,
    role: "Cloud Kitchen Founder",
    quote:
      "Cloud kitchen start karne ke liye FSSAI Food License urgent chahiye tha. Documents collection se lekar FoSCoS portal approval tak sab kuch Madhav Consultancy team ne effortlessly handle kiya.",
  },
  {
    name: "Manish Jangid",
    city: "Indore, Madhya Pradesh",
    service: "Company Registration (Pvt Ltd)",
    rating: 5,
    role: "Tech Startup Director",
    quote:
      "Pvt Ltd incorporation, RUN name approval aur MCA documentation me 100% transparency mili. Har step par WhatsApp updates aate rahe. Very professional and dependable team.",
  },
  {
    name: "Rohit Meena",
    city: "Udaipur, Rajasthan",
    service: "ITR Filing Support",
    rating: 5,
    role: "Salaried Professional & Investor",
    quote:
      "Capital gains aur salary income dono ka ITR file karwaya. AIS/TIS cross-check karke maximum refund claim kiya aur refund 10 din me account me aa gaya. Best tax consultants!",
  },
  {
    name: "Ankit Agrawal",
    city: "Lucknow, Uttar Pradesh",
    service: "ESP (Earning Skill Program)",
    rating: 5,
    role: "ESP Student Batch",
    quote:
      "Yahan course khatam hone ke baad bhi Lokesh sir WhatsApp support dete hain jab client file karte waqt doubt aata hai. Best fee-value practical training course in India.",
  },
];

export const faqs = [
  {
    question: "What is ESP (Earning Skill Program)?",
    answer:
      "ESP is an intensive 4-week practical coaching program powered by Madhav Consultancy. You learn 5 high-demand government portal services (GST Registration, MSME/Udyam, FSSAI, ITR Filing Support, and GST Filing) with live portal practice, client acquisition training, and career mentorship.",
  },
  {
    question: "Do you offer direct compliance services if I am a business owner?",
    answer:
      "Yes! Madhav Consultancy continues to provide full-service company registration, GST filing, ITR preparation, FSSAI licensing, MSME certification, and project reports for businesses across India.",
  },
  {
    question: "Can beginners or non-commerce students join the ESP program?",
    answer:
      "Yes. The training starts from the very basics in simple, Hinglish-friendly language. No prior commerce or legal degree is required. We focus on step-by-step portal navigation and real filing procedures.",
  },
  {
    question: "How do I book my batch or enquire about fees?",
    answer:
      "Click the 'Join ESP' or 'Enquire Now' button to chat directly with Trainer & Mentor Lokesh Verma on WhatsApp (7976604850) or fill out the enquiry form / Google Form.",
  },
  {
    question: "Do you guarantee a specific monthly income after completing ESP?",
    answer:
      "No. In compliance with strict professional standards, we do not make unrealistic income guarantees. Your earnings depend entirely on your individual effort, consistency, and how actively you acquire clients. We provide the complete skillset, live portal practice, and client strategies to help you succeed.",
  },
  {
    question: "Where is Madhav Consultancy located?",
    answer:
      "We are based in Jaipur, Rajasthan (India). We serve clients and train students nationwide through online and hybrid sessions.",
  },
];

export const team = [
  {
    name: "Lokesh Verma",
    role: "Trainer & Mentor",
    image: lokeshImg,
    description:
      "Leads business coaching, signature ESP program cohorts, and corporate mentorship with hands-on, practical portal mastery.",
  },
  {
    name: "Roshan Sharma",
    role: "Company Compliance Specialist",
    image: roshanImg,
    description:
      "Dedicated strictly to Company & LLP incorporations, MCA statutory filings, ROC compliances, and corporate legal documentation.",
  },
  {
    name: "Ajay Verma",
    role: "Sales Specialist",
    image: ajayImg,
    description:
      "Spearheads client consultations, business development, customer enquiry management, and smooth service onboarding.",
  },
  {
    name: "Surendra Nagar",
    role: "Research & Business Analyst Specialist",
    image: surendraImg,
    description:
      "Specializes in in-depth market research, bankable project reports (DPR/CMA data), enterprise feasibility studies, and growth modeling.",
  },
];

export const trustBadges = [
  "Trusted Partnership",
  "Professional Approach",
  "Transparent Process",
  "Result Oriented",
  "Real Govt. Portal Work",
  "PAN India Service",
];

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    body: "Madhav Consultancy respects your privacy. All documents, financial records, and personal contact details shared for business registration, tax filing, or ESP coaching are treated with strict confidentiality.",
  },
  terms: {
    title: "Terms & Conditions",
    body: "Services and training programs are delivered based on agreed schedules. Results depend on individual effort, department approval timelines, and document validity. Madhav Consultancy provides expert consulting and practical training without false guarantees.",
  },
  disclaimer: {
    title: "Disclaimer",
    body: "The information and coaching provided by Madhav Consultancy are for educational and consultancy assistance. We do not make unrealistic income guarantees; outcomes rely on individual effort and government department verifications.",
  },
};
