export const brand = {
  name: "Madhav Consultancy",
  initials: "MC",
  tagline: "Your Business, Our Commitment",
  founder: "Lokesh Verma",
  consultant: "Lokesh Verma",
  consultantRole: "Business Consultant",
  phone: "+91 79766 04850",
  phoneRaw: "7976604850",
  callHref: "tel:+917976604850",
  whatsappNumber: "917976604850",
  email: "Madhavconsultancy2026@gmail.com",
  websiteDisplay: "TheMadhavConsultancy.com",
  websiteUrl: "https://www.themadhavconsultancy.com",
  address: "Madhav Consultancy, Jaipur, Rajasthan (India)",
  city: "Jaipur, Rajasthan",
  hours: "Mon - Sat, 10:00 AM - 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Jaipur%2C%20Rajasthan%2C%20India&output=embed",
  facebook: "https://www.facebook.com/share/1CzJprMxyy/",
  instagram: "https://www.instagram.com/madhav.consultancy?igsh=MXNjZWY4enZjZjMzeg==",
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
  "Hi Lokesh Sir (Madhav Consultancy), I would like to know more about your Business Coaching & Consultancy Services. Please guide me.";

export const espWhatsAppMessage =
  "Hi Lokesh Sir, I want to join the ESP (Earning Skill Program) batch. Please share admission details and fee structure.";

export const tickerText =
  "Admissions Started From Today! • ESP – Earning Skill Program • 5 Services in 4 Weeks • Book Your Batch Now!";

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
    fees: "[Affordable Batch Fee / Early Bird Discount Available – Contact for Quote]",
    startDate: "[New Batch Starting This Week – Admissions Open Today]",
    timing: "[Evening & Weekend Batches Available / 1.5 Hrs Daily]",
    mode: "[Live Interactive Online Sessions + Practical Portal Tasks]",
  },
  servicesLearned: [
    {
      id: "gst",
      num: "01",
      title: "GST Registration & Filing",
      summary: "End-to-end GST portal management for all types of businesses.",
      points: [
        "New GST registration for Proprietorship, Partnership & Companies",
        "Document verification & handling portal clarification queries",
        "Monthly & quarterly return filing (GSTR-1, GSTR-3B)",
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
        "Preparing declaration, water test report & premise proofs",
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
      id: "other",
      num: "05",
      title: "Other Compliances (Overview)",
      summary: "Foundational knowledge of essential corporate and local filings.",
      points: [
        "Trade license & Shop Act establishment registration basics",
        "Drafting partnership deed & business documentation essentials",
        "Annual ROC & MCA statutory compliance overview",
        "Building a reliable compliance calendar for recurring clients",
      ],
      slug: "other",
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
      { name: "Company Registration", detail: "Pvt Ltd, OPC, Section 8 with MCA filing & DIN support.", slug: "company-registration" },
      { name: "LLP Registration", detail: "Limited Liability Partnership deed drafting & partner registration.", slug: "company-registration" },
      { name: "Partnership Firm", detail: "Deed preparation, notarization, and ROF state registration.", slug: "company-registration" },
      { name: "Compliance & Filings", detail: "Routine MCA returns, board resolutions, and annual legal compliance.", slug: "other" },
      { name: "Licenses & Certificates", detail: "GSTIN, ITR filing, Trade license, and business registrations under one roof.", slug: "gst-registration" },
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
      { name: "Business Expansion", detail: "Strategic planning for new branch opening, product line rollout & scaling.", slug: "other" },
      { name: "Project Reports", detail: "Bankable Detailed Project Reports (DPR) & CMA data for bank loans.", slug: "other" },
      { name: "MSME / Udyam", detail: "Official Udyam registration, priority loan access, and subsidy eligibility.", slug: "msme-registration" },
      { name: "Financial Guidance", detail: "Cash flow structuring, tax saving advisory, and cost-optimization roadmaps.", slug: "itr-filing" },
      { name: "Market Support", detail: "Vendor connections, B2B compliance readiness, and institutional market access.", slug: "other" },
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
      "Become a certified compliance practitioner. Learn 5 essential government portal services and start taking paying clients in 4 weeks.",
    items: [
      { name: "Earning Skill Program (ESP)", detail: "4-week signature live cohort with step-by-step portal mastery.", slug: "esp-program" },
      { name: "Practical Training", detail: "Live portal screen sharing, sample client documents, and query solving.", slug: "esp-program" },
      { name: "Digital & Business Skills", detail: "WhatsApp business marketing, professional proposal writing & pricing strategy.", slug: "esp-program" },
      { name: "Work Readiness", detail: "Industry-standard working knowledge that gives immediate career and freelancing value.", slug: "esp-program" },
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
      "Whether you want to build an independent consultancy firm or land a top corporate role, get direct mentorship from Lokesh Verma.",
    items: [
      { name: "Guidance & Mentorship", detail: "1-on-1 strategy sessions with senior consultant Lokesh Verma.", slug: "contact" },
      { name: "Resume Support", detail: "Professional resume restructuring highlighting live portal experience.", slug: "contact" },
      { name: "Job & Internship Links", detail: "Direct industry references to CA firms, tax consultancies & growing startups.", slug: "contact" },
      { name: "Professional Growth", detail: "Lifelong community network, weekly Q&A support, and continuous upskilling.", slug: "contact" },
    ],
  },
];

export const services = [
  {
    slug: "gst-registration",
    title: "GST Registration & Return Filing",
    shortTitle: "GST",
    branch: "Business",
    price: "₹499",
    summary:
      "Get GSTIN registration and monthly/quarterly return filing support for proprietors, firms, LLPs, and companies with clear document guidance.",
    process: [
      "Business review & eligibility check",
      "Document verification & portal upload",
      "Application filing with DSC / Aadhaar OTP",
      "GSTIN certificate download & compliance setup",
    ],
    documents: [
      "PAN card of applicant / business",
      "Aadhaar card linked with mobile",
      "Business address proof (Electricity bill / Rent agreement)",
      "Bank account proof (Cancelled cheque / Statement)",
      "Passport size photograph",
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in GST Registration & Filing services. Please share details.",
  },
  {
    slug: "itr-filing",
    title: "ITR Filing & Tax Consultation",
    shortTitle: "ITR",
    branch: "Business",
    price: "₹499",
    summary:
      "Assisted income tax return filing for salaried employees, business owners, freelancers, capital gain earners, and small firms.",
    process: [
      "Income review & tax slab analysis",
      "Form 16 & AIS/TIS reconciliation",
      "Tax computation & deduction claiming (80C, 80D)",
      "E-filing and acknowledgement (ITR-V) sharing",
    ],
    documents: [
      "PAN card & Aadhaar card",
      "Form 16 (for salaried persons)",
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
      "Official government Udyam registration for small businesses to unlock subsidies, bank loan priority, and collateral-free funding.",
    process: [
      "Business profile & activity review",
      "Aadhaar OTP verification on Udyam portal",
      "Accurate NIC code mapping & classification",
      "Instant lifetime certificate delivery",
    ],
    documents: [
      "Aadhaar card linked with mobile",
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
      "Food safety license assistance for home kitchens, restaurants, sweet shops, cloud kitchens, retail stores, and manufacturers.",
    process: [
      "Business scale & license category check",
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
    slug: "company-registration",
    title: "Company & LLP Registration",
    shortTitle: "Company",
    branch: "Business",
    price: "Custom",
    summary:
      "Start a Private Limited company, LLP, One Person Company (OPC), or Partnership Firm with complete legal drafting and MCA incorporation.",
    process: [
      "Entity consultation & structure guidance",
      "RUN name approval on MCA portal",
      "SPICe+ incorporation drafting & filing",
      "COI, PAN, TAN, and bank account assistance",
    ],
    documents: [
      "PAN and Aadhaar of all Directors/Partners",
      "Passport size photographs & email/mobile",
      "Registered office address proof & utility bill",
      "NOC from property owner",
      "Bank statement / Electricity bill for address proof",
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in Company / LLP Registration.",
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration & IP Protection",
    shortTitle: "Trademark",
    branch: "Growth",
    price: "Custom",
    summary:
      "Protect your unique brand name, company logo, or product identity with public search, classification, and trademark filing.",
    process: [
      "Brand search & conflict checking",
      "Appropriate class selection (Class 1-45)",
      "TM application drafting & submission",
      "Status tracking & reply to examination report",
    ],
    documents: [
      "Applicant PAN and Aadhaar",
      "Logo artwork / Brand name representation",
      "Business proof / MSME certificate",
      "Date of first use affidavit (if already used)",
      "Power of attorney (Form TM-48)",
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in Trademark Registration.",
  },
  {
    slug: "other",
    title: "Compliance & Project Reports",
    shortTitle: "Other",
    branch: "Growth",
    price: "Custom",
    summary:
      "Professional assistance for bank loan project reports (CMA data), Trade licenses, Shop Act registrations, and business advisory.",
    process: [
      "Requirement discussion & financial review",
      "Document collection & projection modeling",
      "Drafting and final client review",
      "Submission-ready delivery",
    ],
    documents: [
      "PAN and Aadhaar",
      "Business profile & address proof",
      "Past 3 years financial statements (if available)",
      "Bank statements & loan requirement outline",
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in Project Reports and Compliance Services.",
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
  { value: 500, suffix: "+", label: "Entrepreneurs & Students" },
  { value: 5000, suffix: "+", label: "Filings & Compliances" },
  { value: 4, suffix: " Wks", label: "ESP Program Duration" },
  { value: 100, suffix: "%", label: "Practical Training" },
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

// Strictly placeholder per instructions: "leave empty or 'coming soon'; do NOT invent reviews"
export const testimonials = [];

export const faqs = [
  {
    question: "What is ESP (Earning Skill Program)?",
    answer:
      "ESP is an intensive 4-week practical coaching program powered by Madhav Consultancy. You learn 5 high-demand government portal services (GST, MSME, FSSAI, ITR, and Other Compliances) with live portal practice, client acquisition training, and career mentorship.",
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
      "Click the 'Join ESP' or 'Enquire Now' button to chat directly with Business Consultant Lokesh Verma on WhatsApp (7976604850) or fill out the enquiry form.",
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
    role: "Business Consultant & Lead Coach",
    description:
      "Leads business coaching, ESP program mentorship, and corporate registrations with practical, result-driven guidance.",
  },
  {
    name: "Madhav Sharma",
    role: "Compliance Specialist",
    description:
      "Focuses on GST, FSSAI, and MSME filings, ensuring error-free documentation and timely approvals.",
  },
  {
    name: "Anjali Verma",
    role: "Taxation & Accounting Coordinator",
    description:
      "Handles income tax returns, computation verification, and student practical query resolution.",
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
