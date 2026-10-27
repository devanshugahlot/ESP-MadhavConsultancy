import lokeshImg from './team/lokesh-verma.jpg';
import roshanImg from './team/roshan-sharma.jpg';
import ajayImg from './team/ajay-verma.jpg';
import surendraImg from './team/surendra-nagar.jpg';

export { lokeshImg, roshanImg, ajayImg, surendraImg };

export const companyObjective =
  "Building a Support Ecosystem for Seek to Grow: Business • Career • Skills • Growth";

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
  websiteUrl: "https://themadhavconsultancy.com",
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
  "ESP (Earning Skill Program) Live Practical Coaching • ₹7,999 ₹999/-";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Business", to: "/business" },
  { label: "Growth", to: "/growth" },
  { label: "Skills (ESP)", to: "/skills-esp" },
  { label: "Career", to: "/career" },
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
    fees: "Special Offer: ₹999/- Only (Regular: ₹7,999/-)",
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
      { name: "Company Registration", detail: "Pvt Ltd, OPC, Section 8 with MCA filing & DIN support.", slug: "company-registration", to: "/company-registration" },
      { name: "LLP Registration", detail: "Limited Liability Partnership deed drafting & partner registration.", slug: "llp-registration", to: "/llp-registration" },
      { name: "Partnership Firm", detail: "Deed preparation, notarization, and ROF state registration.", slug: "partnership-firm", to: "/partnership-firm" },
      { name: "Compliance & Filings", detail: "Routine MCA returns, board resolutions, and annual legal compliance.", slug: "compliance-filing", to: "/compliance-filing" },
      { name: "Licenses & Certificates", detail: "GSTIN, Trade license, Shop Act, and business registrations under one roof.", slug: "licenses-certificates", to: "/licenses-certificates" },
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
      { name: "Business Expansion", detail: "Strategic planning for new branch opening, product line rollout & scaling.", slug: "business-expansion", to: "/business-expansion" },
      { name: "Project Reports", detail: "Bankable Detailed Project Reports (DPR) & CMA data for bank loans.", slug: "project-reports", to: "/project-reports" },
      { name: "MSME / Udyam", detail: "Official Udyam registration, priority loan access, and subsidy eligibility.", slug: "msme-registration", to: "/msme-registration" },
      { name: "Financial Guidance", detail: "Cash flow structuring, tax saving advisory, and cost-optimization roadmaps.", slug: "financial-guidance", to: "/financial-guidance" },
      { name: "Market Support", detail: "Vendor connections, B2B compliance readiness, and institutional market access.", slug: "market-support", to: "/market-support" },
    ],
  },
  {
    id: "skills-branch",
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
      { name: "Earning Skill Program (ESP)", detail: "4-week signature live cohort with step-by-step portal mastery.", slug: "esp-program", to: "/skills-esp" },
      { name: "Practical Training", detail: "Live portal screen sharing, sample client documents, and query solving.", slug: "practical-training", to: "/skills-esp" },
      { name: "Digital & Business Skills", detail: "WhatsApp business marketing, professional proposal writing & pricing strategy.", slug: "digital-skills", to: "/skills-esp" },
      { name: "Work Readiness", detail: "Industry-standard working knowledge that gives immediate career and freelancing value.", slug: "work-readiness", to: "/skills-esp" },
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
      { name: "Guidance & Mentorship", detail: "1-on-1 strategy sessions with Trainer & Mentor Lokesh Verma.", slug: "contact", to: "/career" },
      { name: "Resume Support", detail: "Professional resume restructuring highlighting live portal experience.", slug: "contact", to: "/career" },
      { name: "Job & Internship Links", detail: "Direct industry references to CA firms, tax consultancies & growing startups.", slug: "contact", to: "/career" },
      { name: "Professional Growth", detail: "Lifelong community network, weekly Q&A support, and continuous upskilling.", slug: "contact", to: "/career" },
    ],
  },
];

export const services = [
  {
    slug: "gst-registration",
    title: "GST Registration Online (New GSTIN Allotment)",
    shortTitle: "GST Registration",
    branch: "Business",
    price: "₹499",
    govtFee: "₹0 (Zero official Govt Fee)",
    turnaround: "3 to 7 working days",
    seoTitle: "GST Registration Online - Fast, Accurate & 100% Compliant Filing",
    seoDescription: "Apply for new GST registration online in India. Expert document verification, HSN code mapping & fast GSTIN allotment by Madhav Consultancy.",
    h1: "GST Registration Online – Fast, Accurate & 100% Compliant Filing",
    summary:
      "Fast, error-free GSTIN registration for proprietorships, partnerships, LLPs, and companies with end-to-end portal tracking and clarification reply.",
    fullOverview:
      "Goods and Services Tax (GST) is India's premier indirect taxation system, uniting multiple state and central levies into a unified digital compliance ecosystem. Any business entity engaged in the sale of goods with an annual turnover exceeding ₹40 Lakhs (₹20 Lakhs for special category states) or service providers with turnover exceeding ₹20 Lakhs (₹10 Lakhs for special category states) is legally required under the CGST Act to obtain a Goods and Services Tax Identification Number (GSTIN).\n\nMoreover, mandatory registration applies irrespective of turnover for businesses engaging in inter-state supply of goods, e-commerce sellers on Amazon, Flipkart, or Meesho, casual taxable persons, and entities liable under the reverse charge mechanism (RCM). Operating a business without GST when required attracts severe penalties under Section 122 of the CGST Act, including fines of 100% of the tax due or ₹10,000, whichever is higher.\n\nAt Madhav Consultancy, our compliance experts ensure your GST registration is structured properly from day one. We identify the correct HSN and SAC codes, select the appropriate business jurisdiction (State vs Center ward), draft authorized signatory letters, and verify proof of business premises to eliminate avoidable clarifications or delays by the GST department.",
    benefits: [
      "Legal recognition as an authorized supplier of goods and services across India",
      "Seamless passing and claiming of Input Tax Credit (ITC) to reduce tax cascading",
      "Eligibility to sell on pan-India e-commerce platforms like Amazon, Flipkart, and GeM",
      "Open commercial current accounts with leading public and private banks effortlessly",
      "Qualify for government tenders, enterprise contracts, and institutional procurement",
      "Enhance customer confidence and business trustworthiness with a verifiable 15-digit GSTIN",
    ],
    eligibility:
      "Sole Proprietorships, Partnership Firms, Limited Liability Partnerships (LLP), Private Limited Companies, One Person Companies (OPC), Freelancers, E-Commerce Sellers, and Commercial Importers/Exporters.",
    process: [
      { step: 1, title: "Eligibility Assessment & Document Scrutiny", desc: "Our specialists review your business constitution, premise utility bills, and identity records to verify jurisdictional mapping." },
      { step: 2, title: "TRN Generation & Part-A Filing", desc: "We register your mobile and email on the official GST portal (gst.gov.in) to generate the Temporary Reference Number (TRN)." },
      { step: 3, title: "Part-B Form Submission & HSN Mapping", desc: "We complete the comprehensive Part-B application, mapping your top goods/services with correct 4 to 8 digit HSN/SAC codes." },
      { step: 4, title: "Aadhaar Authentication & Biometrics", desc: "We facilitate instant digital Aadhaar e-KYC authentication for promoters, speeding up approval to 3-7 working days." },
      { step: 5, title: "Clarification Handling & Certificate Issuance", desc: "If the tax officer raises a notice (Form GST REG-03), we draft and submit the legal clarification (REG-04) until Form GST REG-06 is granted." },
    ],
    documents: [
      "PAN Card of the applicant / enterprise / directors",
      "Aadhaar Card of the authorized signatory (linked with active mobile for OTP)",
      "Electricity bill / Municipal property tax receipt of the commercial office premises (not older than 2 months)",
      "Rent agreement and landlord No Objection Certificate (NOC) if premises are leased",
      "Bank proof: Cancelled cheque, bank statement, or front page of passbook with account number and IFSC",
      "Passport-size photographs of the applicant / partners / directors",
      "Partnership Deed / Certificate of Incorporation (COI) and Board Resolution (for firms and companies)",
    ],
    feesTimeline: {
      govtFee: "₹0 (Zero official government fee)",
      consultancyFee: "Starting from ₹499/- (All-inclusive consultation & filing)",
      timeToIssue: "3 to 7 working days (subject to GST department officer processing)",
    },
    faqList: [
      {
        question: "Is GST registration mandatory for selling goods online?",
        answer: "Yes, under Section 24 of the CGST Act, any seller supplying goods through an e-commerce operator (such as Amazon, Flipkart, Meesho) is required to obtain mandatory GST registration, irrespective of turnover thresholds.",
      },
      {
        question: "How long does it take to receive the GST certificate?",
        answer: "With Aadhaar authentication, GST registration is typically approved by the tax officer within 3 to 7 working days. If the officer raises a query, we submit a clarification within 24 hours to ensure timely approval.",
      },
      {
        question: "Can I register GST on a residential home address?",
        answer: "Yes, you can register GST using a residential address as the principal place of business, provided you have the electricity bill in the owner's name and an NOC from the property owner.",
      },
      {
        question: "What is the difference between Composition and Regular GST scheme?",
        answer: "Small businesses with annual turnover up to ₹1.5 Crore can opt for the Composition Scheme to pay a fixed flat tax rate (1% to 6%) with simplified quarterly filings, but they cannot issue tax invoices or claim Input Tax Credit. Regular dealers issue tax invoices and can claim full ITC.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in GST Registration service. Please share details.",
  },
  {
    slug: "itr-filing",
    title: "Income Tax Return (ITR) Filing & Tax Advisory",
    shortTitle: "ITR Filing",
    branch: "Business",
    price: "₹499",
    govtFee: "Nil (Standard return filing)",
    turnaround: "24 to 48 hours",
    seoTitle: "ITR Filing Online - Salaried, Business & Capital Gains Tax Returns",
    seoDescription: "File your Income Tax Return (ITR-1, 2, 3, 4) accurately with Madhav Consultancy. Maximize legal tax refunds, reconcile AIS/TIS & avoid late notices.",
    h1: "Income Tax Return (ITR) Filing & Tax Advisory Services",
    summary:
      "Assisted income tax return filing for salaried employees, business owners, freelancers, capital gain earners, and small firms with maximum deduction benefits.",
    fullOverview:
      "Filing an annual Income Tax Return (ITR) is a statutory obligation under Section 139(1) of the Income Tax Act, 1961 for every individual, HUF, and corporate entity whose total income exceeds the basic exemption limit. Beyond mere compliance, timely ITR filing is vital for securing home loans, business financing, VISA processing, carrying forward business and capital losses, and claiming tax refunds deducted as TDS/TCS.\n\nWith the introduction of the Annual Information Statement (AIS) and Taxpayer Information Summary (TIS), the Income Tax Department automatically tracks high-value banking transactions, share trading, mutual fund redemptions, property deals, and foreign remittances. Any mismatch between your declared income and AIS records can trigger automated defective notices under Section 139(9) or demand notices under Section 143(1).\n\nMadhav Consultancy provides meticulous tax return computation. Our tax professionals perform 3-point reconciliation between Form 16/16A, 26AS, and AIS/TIS data. We compare your tax liability under both the Old and New Tax Regimes to determine which framework maximizes your take-home tax savings while ensuring full statutory compliance.",
    benefits: [
      "Detailed comparative tax analysis between Old vs New Tax Regimes for maximum savings",
      "Seamless reconciliation of Form 26AS, AIS, and TIS to eliminate notice risk",
      "Maximum legitimate deduction claims under Sections 80C, 80D, 80G, 80TTA, and 87A rebate",
      "Expedited processing for prompt refund credits directly into your verified bank account",
      "Essential documentation for hassle-free visa applications and bank loan approvals",
      "Carry forward business, speculative, and capital losses to offset future taxable income",
    ],
    eligibility:
      "Salaried Professionals, Sole Proprietors, Traders, Freelancers, Consultants, Doctors, Capital Market Traders, NRI Taxpayers, and Partnership Firms.",
    process: [
      { step: 1, title: "Income Document Collection & Review", desc: "Submit Form 16, bank statements, trading P&L, and investment receipts to our tax advisors." },
      { step: 2, title: "AIS / TIS & Form 26AS Cross-Verification", desc: "We fetch and audit your official AIS and 26AS data from the Income Tax portal to detect unrecorded income." },
      { step: 3, title: "Tax Computation & Deductions Optimization", desc: "We calculate your tax under both regimes and apply allowable exemptions to minimize final tax payable." },
      { step: 4, title: "Draft Verification & Client Approval", desc: "We share a transparent computation summary with you detailing total gross income, deductions, and refund/tax liability." },
      { step: 5, title: "E-Filing & Instant E-Verification", desc: "We electronically submit the return on the e-filing portal and complete Aadhaar OTP e-verification for instant acknowledgement (ITR-V)." },
    ],
    documents: [
      "PAN Card & Aadhaar Card (duly linked)",
      "Form 16 / Form 16A (for salaried individuals or TDS deductees)",
      "Bank statements of all active savings and current accounts for the financial year",
      "Capital gains statements from Zerodha, Groww, AngelOne, or mutual fund houses (if applicable)",
      "Investment and expense proofs: LIC, PPF, ELSS, tuition fees, health insurance (80D), home loan interest",
      "Income Tax e-filing portal password or Aadhaar-registered mobile for OTP generation",
    ],
    feesTimeline: {
      govtFee: "Nil (Late fee of ₹1,000 to ₹5,000 applicable only if filed after statutory deadline)",
      consultancyFee: "Starting from ₹499/- (Salaried) / ₹999/- (Business & Capital Gains)",
      timeToIssue: "24 to 48 hours for filing & immediate ITR-V generation",
    },
    faqList: [
      {
        question: "Which ITR form should I file?",
        answer: "ITR-1 (Sahaj) is for salaried individuals with income up to ₹50 Lakhs from salary, one house property, and other sources. ITR-2 is for capital gains or foreign assets. ITR-3 is for business/professional income. ITR-4 (Sugam) is for presumptive taxation under sections 44AD/44ADA.",
      },
      {
        question: "What happens if I miss the ITR filing deadline of July 31st?",
        answer: "You can file a Belated Return under Section 139(4) until December 31st with a statutory late fee (₹1,000 for income up to ₹5 Lakhs, ₹5,000 above ₹5 Lakhs) and penal interest under Section 234A on unpaid tax.",
      },
      {
        question: "How do I check my income tax refund status?",
        answer: "Once the return is e-verified and processed under Section 143(1), refund status can be tracked on the Income Tax e-filing portal or NSDL TIN refund portal using your PAN and assessment year.",
      },
      {
        question: "Is it beneficial to file ITR if my income is below taxable limit?",
        answer: "Yes! A nil ITR serves as authentic financial proof for bank loans, credit card approvals, Schengen/US visa processing, and allows you to claim back any TDS deducted on interest or freelance payments.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in ITR Filing Support.",
  },
  {
    slug: "msme-registration",
    title: "MSME / Udyam Registration (Govt Certificate)",
    shortTitle: "MSME / Udyam",
    branch: "Growth",
    price: "₹399",
    govtFee: "₹0 (Zero official Govt Fee)",
    turnaround: "Same day (2 to 4 hours)",
    seoTitle: "MSME Udyam Registration Online - Govt Certificate for Small Businesses",
    seoDescription: "Get official MSME Udyam Registration in India. Avail collateral-free bank loans, 50% patent/trademark discount, power subsidies & tender privileges.",
    h1: "MSME / Udyam Registration Online – Government Certificate",
    summary:
      "Official government Udyam registration for small businesses to unlock priority bank loan access, subsidies, tender privileges, and collateral-free funding.",
    fullOverview:
      "Udyam Registration is the official digital identification issued by the Ministry of Micro, Small and Medium Enterprises (MoMSME), Government of India. Designed under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, the certificate provides a unique 19-digit Udyam Registration Number (URN) with dynamic QR code verification.\n\nWhether you operate an artisan handicraft unit, a local retail storefront, an IT consultancy, or a manufacturing plant, MSME registration is the key that unlocks India's priority sector lending benefits. Registered enterprises enjoy access to collateral-free business financing under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE), lower bank interest rates, and immunity against delayed client payments under Section 15 of the MSMED Act.\n\nAt Madhav Consultancy, we ensure your enterprise is classified accurately under the revised composite criteria (Investment in Plant & Machinery + Annual Turnover). We map your primary and secondary activities to the exact 5-digit National Industrial Classification (NIC) codes to ensure you qualify for relevant central and state subsidy schemes.",
    benefits: [
      "Access to collateral-free loans up to ₹2 Crore under the CGTMSE credit guarantee scheme",
      "50% government fee concession on Trademark, Patent, and Design registrations",
      "Protection against delayed payments with mandatory compound interest from defaulting buyers",
      "Exemption from Earnest Money Deposit (EMD) and waiver of tender fees in government tenders",
      "Concession on electricity bills, ISO certification subsidies, and industrial land allotment priority",
      "1% interest rate subvention on bank overdrafts and working capital credit facilities",
    ],
    eligibility:
      "Micro Enterprises (Investment < ₹1 Cr, Turnover < ₹5 Cr), Small Enterprises (Investment < ₹10 Cr, Turnover < ₹50 Cr), Medium Enterprises (Investment < ₹50 Cr, Turnover < ₹250 Cr). Open to Proprietorships, Partnerships, LLPs, Companies, and Societies.",
    process: [
      { step: 1, title: "Business Activity & NIC Code Mapping", desc: "We review your operational products/services and select the precise 5-digit NIC code corresponding to your trade." },
      { step: 2, title: "Aadhaar & PAN Verification", desc: "We verify the owner/authorized partner's Aadhaar via live OTP on the official udyamregistration.gov.in portal." },
      { step: 3, title: "Financial & Turnover Declaration", desc: "We fill the enterprise address, investment in plant and machinery, and annual turnover details according to ITR/GST data." },
      { step: 4, title: "Udyam Certificate Generation", desc: "The government generates your lifetime-valid Udyam Certificate with QR code and unique 19-digit URN." },
      { step: 5, title: "Client Handover & Bank Guidance", desc: "We provide your downloadable high-resolution certificate along with guidelines on presenting it to banks and subsidy departments." },
    ],
    documents: [
      "Aadhaar Card of the proprietor / partner / director (must be linked to active mobile)",
      "PAN Card of the business or proprietor",
      "Official trade name and complete business premises address with PIN code",
      "Bank Account details (Bank Name, Account Number, and IFSC Code)",
      "Approximate date of commencement of business operations",
      "Number of persons employed (male/female breakdown)",
    ],
    feesTimeline: {
      govtFee: "₹0 (Zero official government fee on the official portal)",
      consultancyFee: "₹399/- (Professional mapping, verification & instant issuance)",
      timeToIssue: "Same day (typically 2 to 4 hours upon OTP confirmation)",
    },
    faqList: [
      {
        question: "Is Udyam Registration valid for lifetime or does it expire?",
        answer: "The Udyam Registration Certificate is valid for a lifetime and does not require periodic renewal. However, details should be updated annually on the portal if turnover or investment crosses thresholds.",
      },
      {
        question: "Can traders and retailers register under MSME / Udyam?",
        answer: "Yes, the Government of India has extended MSME benefits to Wholesale and Retail Trade. Retailers can register to avail priority sector lending benefits and bank concessions.",
      },
      {
        question: "Is GSTIN mandatory for obtaining an Udyam Certificate?",
        answer: "GSTIN is exempted for enterprises that are not legally required to obtain GST under GST law (e.g., businesses below turnover threshold). If you have GST, it is auto-linked with PAN.",
      },
      {
        question: "What is the delayed payment protection rule under MSME?",
        answer: "Under Section 15 of the MSMED Act, buyers must pay MSME suppliers within 45 days. If delayed, the buyer must pay compound interest with monthly rests at 3 times the RBI bank rate.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in MSME / Udyam Registration.",
  },
  {
    slug: "fssai-license",
    title: "FSSAI Food Safety License & FoSCoS Registration",
    shortTitle: "FSSAI License",
    branch: "Business",
    price: "₹599",
    govtFee: "₹100/yr (Basic) | State license varies",
    turnaround: "3 to 10 working days",
    seoTitle: "FSSAI Food License Online - FoSCoS Registration & Renewal",
    seoDescription: "Apply for FSSAI Food License online in India. Basic registration & State license for restaurants, cloud kitchens, retail food & home bakers.",
    h1: "FSSAI Food Safety License & FoSCoS Registration Services",
    summary:
      "Food safety license assistance for home kitchens, restaurants, sweet shops, cloud kitchens, retail food stores, and food manufacturers.",
    fullOverview:
      "Under the Food Safety and Standards Act, 2006, every Food Business Operator (FBO) in India involved in manufacturing, processing, packaging, storing, distributing, or selling food items must obtain an official FSSAI registration or license before commencing commercial operations. The regulatory framework is administered digitally through the Food Safety Compliance System (FoSCoS) portal by the Food Safety and Standards Authority of India (FSSAI).\n\nDisplaying a valid 14-digit FSSAI license number is legally mandatory on all food packaging, promotional material, invoices, and digital storefronts on Swiggy, Zomato, Blinkit, and Zepto. Operating a food business without a valid FSSAI license is a non-bailable offense under Section 31 of the FSS Act, punishable with imprisonment up to 6 months and monetary fines up to ₹5,00,000.\n\nMadhav Consultancy simplifies the entire FoSCoS licensing process. We determine your exact licensing tier (Basic Registration for turnover under ₹12 Lakhs/year vs State License for turnover ₹12L–₹20Cr/year), correctly categorize your food products under the Food Safety Code, draft mandatory FSMS declarations, and follow up directly with the Designated Officer (DO) to ensure hassle-free certificate approval.",
    benefits: [
      "Mandatory requirement to list your cloud kitchen, cafe, or restaurant on Swiggy and Zomato",
      "Build trust and credibility among consumers by displaying the verified 14-digit FSSAI logo",
      "Legal protection against hefty penalties up to ₹5 Lakhs and premises sealing",
      "Ensure compliance with national food hygiene, handling, and safety benchmarks",
      "Facilitate business expansion, supermarket distribution, and franchise onboarding",
      "Easy access to institutional catering tenders for schools, hospitals, and corporate events",
    ],
    eligibility:
      "Home Bakers, Cloud Kitchens, Cafes, Restaurants, Sweet Shops, Dhabas, Grocery Stores, Food Trucks, Canteens, Dairy Units, Food Packaging Units, Importers, and Food Manufacturers.",
    process: [
      { step: 1, title: "Business Model Assessment & Category Selection", desc: "We analyze your production capacity and turnover to choose between Basic Registration (Form A) or State License (Form B)." },
      { step: 2, title: "Food Product Code Categorization", desc: "We select the accurate standardized food product codes (e.g., Dairy, Bakery, Beverages, Ready-to-Eat) on the FoSCoS portal." },
      { step: 3, title: "Document Verification & Form Submission", desc: "We prepare the premises layout, owner identification, and signed self-declaration forms for online portal upload." },
      { step: 4, title: "Government Fee Payment & Application Tracking", desc: "We remit the statutory government fees and track the application status as it moves through the Food Safety Officer (FSO) scrutiny." },
      { step: 5, title: "Query Resolution & Certificate Issuance", desc: "We respond promptly to any inspection queries raised by the department until the official 14-digit license is generated." },
    ],
    documents: [
      "Passport-size photograph of the Food Business Operator / Proprietor",
      "Government Photo ID & Address proof (Aadhaar Card / Voter ID / Passport)",
      "Proof of business premises address (Electricity bill, Property tax receipt, or Rent Agreement with owner NOC)",
      "Complete list of food categories and food products to be manufactured, stored, or sold",
      "Food Safety Management System (FSMS) plan or self-declaration (drafted by our team)",
      "Water testing report from an accredited lab (applicable only for manufacturing and beverage units)",
    ],
    feesTimeline: {
      govtFee: "₹100/year (Basic Registration) | ₹2,000 to ₹5,000/year (State License depending on capacity)",
      consultancyFee: "Starting from ₹599/- (Basic Registration) / ₹1,999/- (State License)",
      timeToIssue: "3 to 7 working days (Basic) | 15 to 30 working days (State License)",
    },
    faqList: [
      {
        question: "Can I run a cloud kitchen or home baking business with Basic FSSAI?",
        answer: "Yes, if your annual sales turnover is expected to be under ₹12 Lakhs, a Basic FSSAI Registration is completely sufficient to register on Swiggy, Zomato, and sell to retail consumers.",
      },
      {
        question: "What is the validity period of an FSSAI License?",
        answer: "An FSSAI registration or license can be applied for a duration of 1 to 5 years. Food business operators can renew the license before its expiry date to maintain continuous legal compliance.",
      },
      {
        question: "What happens if I don't print my FSSAI number on food packaging?",
        answer: "Under FSSAI labelling regulations, printing the 14-digit FSSAI number and logo on pre-packaged food is mandatory. Non-compliance attracts fines under Section 58 for misbranded food.",
      },
      {
        question: "Do grocery shops and packaged snack retailers need FSSAI?",
        answer: "Yes, every retail merchant, wholesaler, and distributor storing or selling pre-packaged food products must possess a valid FSSAI registration.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in FSSAI Food License.",
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration & Brand IP Protection",
    shortTitle: "Trademark Reg",
    branch: "Growth",
    price: "Custom",
    govtFee: "₹4,500 (Individual/MSME) | ₹9,000 (Others)",
    turnaround: "TM mark in 24 hours | Certificate in 6-8 months",
    seoTitle: "Trademark Registration Online - Brand Name & Logo Protection",
    seoDescription: "Protect your brand name, logo and slogan with trademark registration in India. Comprehensive search, TM-A application drafting & examination support.",
    h1: "Trademark Registration & Brand IP Protection Services",
    summary:
      "Protect your brand name, company logo, or product identity with public registry search, classification, and trademark filing under Intellectual Property India.",
    fullOverview:
      "Your brand name, company logo, distinctive tagline, and product label represent the core goodwill and commercial identity of your enterprise. Under the Trade Marks Act, 1999, securing a registered trademark (®) provides exclusive nationwide ownership rights and legally prohibits competitors, counterfeiters, or copycats from passing off their goods or services under your brand banner.\n\nWithout trademark protection, your brand remains vulnerable. A competitor can register your brand name first, issue legal cease-and-desist notices against your business, and force you to rebrand after years of hard-earned market goodwill. Filing a trademark gives you the legal right to use the ™ symbol immediately upon receiving the official filing receipt (Form TM-A acknowledgement), establishing public notice of your claim.\n\nMadhav Consultancy provides comprehensive brand protection services. We perform exhaustive trademark clearance searches across all 45 Nice Classification classes to identify identical, phonetic, or deceptively similar marks before filing. We draft airtight user affidavits to claim prior commercial use and manage the entire lifecycle through examination replies, journal publication, and final registration certificate issuance.",
    benefits: [
      "Use the ™ symbol immediately within 24 hours of filing Form TM-A on IP India",
      "Exclusive legal right to use the ® symbol upon successful registration",
      "Nationwide monopoly over your brand name, logo, slogan, and packaging design",
      "50% government fee concession for individuals, startups, and MSME/Udyam registered entities",
      "Power to take legal action and claim damages against counterfeiters and trademark infringers",
      "Builds a valuable intangible asset that can be franchised, licensed, or sold for capital valuation",
    ],
    eligibility:
      "Sole Proprietors, Startup Founders, Private Limited Companies, LLPs, Partnerships, Societies, Artists, Authors, and E-Commerce Brand Owners.",
    process: [
      { step: 1, title: "Public Trademark Search & Class Selection", desc: "We run deep algorithmic searches across IP India's registry to assess uniqueness and avoid conflict with existing marks." },
      { step: 2, title: "Class Mapping (Goods: Class 1-34 | Services: Class 35-45)", desc: "We map your products or business offerings to the exact international Nice Classification classes." },
      { step: 3, title: "TM-A Application Drafting & Power of Attorney", desc: "We draft Form TM-A, prepare user affidavits claiming date of first use, and execute Form TM-48 (authorization)." },
      { step: 4, title: "Digital Filing & ™ Symbol Allotment", desc: "We electronically submit the application on the IP India portal; you receive the official application number to use ™ right away." },
      { step: 5, title: "Examination Report Reply & Registration", desc: "We track the application, draft legal replies to any Section 9 or 11 examination objections, and guide it to publication in the TM Journal." },
    ],
    documents: [
      "Applicant Photo ID & Address Proof (PAN Card and Aadhaar Card / Passport)",
      "Clear, high-resolution copy of the brand name, wordmark, or logo artwork (JPEG/PNG format)",
      "Udyam MSME Certificate (Crucial: saves 50% on government filing fees)",
      "Proof of business entity (Certificate of Incorporation, Partnership Deed, or GST Certificate)",
      "User Affidavit and invoices/bills proving date of first use in commerce (if claiming prior use)",
      "Signed Form TM-48 (Power of Attorney authorizing our legal representative)",
    ],
    feesTimeline: {
      govtFee: "₹4,500 per class (Individual, Startup, or MSME) | ₹9,000 per class (Other corporate bodies)",
      consultancyFee: "Affordable professional drafting & filing package (Custom quotation)",
      timeToIssue: "TM symbol within 24 hours | Final ® Certificate in 6 to 8 months (subject to registry examination)",
    },
    faqList: [
      {
        question: "What is the difference between the ™ and ® symbols?",
        answer: "The ™ symbol can be used as soon as your trademark application is filed and you receive the official application number. The ® symbol can only be used legally once the trademark is fully registered and the certificate is issued by the Registrar.",
      },
      {
        question: "For how long is a registered trademark valid in India?",
        answer: "A registered trademark is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years by paying the statutory renewal fee.",
      },
      {
        question: "Can I register a brand name without a logo?",
        answer: "Yes, you can register a 'Wordmark', which protects the text/name itself in any style or font. Protecting both the brand name and the logo artwork provides the strongest comprehensive protection.",
      },
      {
        question: "What is a Trademark Examination Objection under Section 9 or 11?",
        answer: "An objection under Section 9 indicates the mark is descriptive or non-distinctive. Section 11 indicates similarity to an existing mark. Our legal team drafts a well-reasoned legal counter-reply citing case law to overcome objections.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in Trademark Registration.",
  },
  {
    slug: "company-registration",
    title: "Company Registration (Private Limited, OPC & Section 8)",
    shortTitle: "Company Registration",
    branch: "Business",
    price: "Custom",
    govtFee: "Variable by authorized capital (MCA exemptions apply)",
    turnaround: "5 to 10 working days",
    seoTitle: "Company Registration Online - Pvt Ltd, OPC & Section 8 Incorporation",
    seoDescription: "Incorporate your Private Limited Company or One Person Company with MCA SPICe+ filing, RUN name reservation, DSC & DIN by Madhav Consultancy.",
    h1: "Company Registration Online – Private Limited & OPC Incorporation",
    summary:
      "Start a Private Limited company or One Person Company (OPC) with complete legal drafting, RUN name reservation, SPICe+ MCA incorporation, and DIN/DSC issuance.",
    fullOverview:
      "Incorporating a Private Limited Company (Pvt Ltd) or One Person Company (OPC) is the most respected and legally fortified structure for startups, manufacturing units, and growth-oriented ventures in India. Regulated by the Ministry of Corporate Affairs (MCA) under the Companies Act, 2013, a registered company enjoys independent legal entity status, limited liability protection for shareholders, perpetual succession, and superior credibility when raising equity venture capital or commercial debt.\n\nThe entire corporate incorporation journey in India has been modernized through the integrated SPICe+ (SPICe Plus) web form on the MCA portal. In a single seamless submission, promoters obtain company name reservation, Certificate of Incorporation (COI), Director Identification Numbers (DIN), Digital Signature Certificates (DSC), corporate PAN, corporate TAN, EPFO/ESIC registrations, professional tax registration, and automated bank account pre-authorization.\n\nMadhav Consultancy provides complete end-to-end company formation. Spearheaded by Corporate Compliance Specialist Roshan Sharma, we guide you through entity structuring, name availability checks, drafting custom Memorandum of Association (MOA) and Articles of Association (AOA), and handling MCA ROC queries until your official Certificate of Incorporation is safely in hand.",
    benefits: [
      "Separate legal existence: Company can own assets, sign contracts, and sue in its own corporate name",
      "Limited liability: Personal assets of directors and shareholders remain 100% protected",
      "Unmatched credibility: Attract angel investors, venture capital (VC) funds, and institutional lenders",
      "Perpetual succession: The entity continues to exist irrespective of changes in directors or promoters",
      "100% digital incorporation process via MCA SPICe+ with zero visits to government offices",
      "Bundled compliance: Free PAN, TAN, ESIC, EPFO, and corporate current account opening included",
    ],
    eligibility:
      "Minimum 2 Directors & 2 Shareholders for Pvt Ltd (can be the same individuals). Minimum 1 Director & 1 Nominee for OPC. Foreign nationals and NRIs are also eligible to hold directorship with valid passport.",
    process: [
      { step: 1, title: "Director KYC & Class-3 Digital Signature (DSC)", desc: "We procure Class-3 DSC with e-token for all proposed directors for digital signing on MCA forms." },
      { step: 2, title: "RUN Name Reservation (Part A of SPICe+)", desc: "We draft and submit two unique proposed corporate names adhering strictly to MCA naming rules." },
      { step: 3, title: "Drafting MOA, AOA & SPICe+ Part B Filing", desc: "We draft the electronic Memorandum of Association (eMOA - INC-33) and Articles of Association (eAOA - INC-34) tailored to your industry." },
      { step: 4, title: "AGILE-PRO-S & Statutory Links", desc: "We submit mandatory linkages for corporate PAN, TAN, GSTIN, EPFO, ESIC, and bank account opening." },
      { step: 5, title: "ROC Scrutiny & Certificate of Incorporation", desc: "The Registrar of Companies (ROC) reviews the forms and issues the official Certificate of Incorporation (COI) with CIN." },
    ],
    documents: [
      "PAN Card copy of all proposed directors and shareholders (mandatory for Indian nationals)",
      "Identity Proof: Aadhaar Card / Voter ID / Passport / Driving License of all promoters",
      "Address Proof of directors: Recent bank statement, electricity bill, or mobile bill (less than 2 months old)",
      "Passport-size photographs and active email and mobile number of directors",
      "Proof of Registered Office premises: Electricity bill / Gas bill / Water bill in owner's name",
      "NOC (No Objection Certificate) signed by the owner of the premises permitting company registration",
      "Rent Agreement executed between company promoters and property owner (if leased premises)",
    ],
    feesTimeline: {
      govtFee: "₹0 ROC incorporation fee for authorized capital up to ₹15 Lakhs (nominal state stamp duty applies)",
      consultancyFee: "Complete all-in-one incorporation package (Custom quotation)",
      timeToIssue: "5 to 10 working days from the date of final document submission",
    },
    faqList: [
      {
        question: "Can I register a Private Limited company at my home residential address?",
        answer: "Yes, you can register your company's registered office at a residential address. You only need a recent utility bill (electricity bill) in the owner's name and an NOC from the owner.",
      },
      {
        question: "What is the minimum capital required to start a Private Limited company?",
        answer: "There is no minimum paid-up capital requirement under the Companies Act, 2013. You can start a company with an authorized capital as low as ₹10,000 or ₹1,00,000.",
      },
      {
        question: "What is the difference between a Pvt Ltd and an OPC (One Person Company)?",
        answer: "A Private Limited company requires at least 2 directors and 2 shareholders, whereas an OPC allows a single individual to incorporate a company with limited liability while nominating a nominee director.",
      },
      {
        question: "What mandatory compliances must be done after company incorporation?",
        answer: "Post-incorporation, the company must open a bank account, file Form INC-20A (Commencement of Business) within 180 days, appoint a statutory auditor (Form ADT-1), and maintain statutory registers.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I am interested in Private Limited / OPC Company Registration. Please share details.",
  },
  {
    slug: "gst-filing",
    title: "GST Return Filing (GSTR-1, GSTR-3B & Annual GSTR-9)",
    shortTitle: "GST Return Filing",
    branch: "Business",
    price: "₹499/mo",
    govtFee: "Nil (Late fee ₹50/day if filed after due date)",
    turnaround: "Monthly & Quarterly schedules",
    seoTitle: "GST Return Filing Online - GSTR-1 & GSTR-3B Monthly Filing",
    seoDescription: "Accurate monthly & quarterly GST return filing (GSTR-1, GSTR-3B). Input Tax Credit (ITC) reconciliation, nil return filing & notice management by Madhav Consultancy.",
    h1: "GST Return Filing Services – GSTR-1, GSTR-3B & Compliance",
    summary:
      "Accurate monthly and quarterly return filing for businesses to ensure 100% input tax credit (ITC) reconciliation and avoid government late fee penalties.",
    fullOverview:
      "Obtaining a GSTIN is merely the initial step; the sustained compliance requirement under the CGST Act involves regular, accurate filing of periodic GST returns. For regular taxpayers, this entails reporting outward supplies in Form GSTR-1 and computing monthly tax liability with input tax credit reconciliation in Form GSTR-3B. Non-compliance or delayed filing incurs automatic daily late fees under Section 47 (₹50/day for regular returns, ₹20/day for nil returns) and interest at 18% per annum under Section 50 on unpaid tax liability.\n\nFurthermore, under the stringent provisions of Rule 36(4) of the CGST Rules, a recipient can only claim Input Tax Credit (ITC) if the supplier has uploaded the respective invoice in their GSTR-1 and the credit is reflected in the recipient's auto-populated Form GSTR-2B. If your supplier fails to file on time or files incorrectly, your business loses critical ITC or faces clawback notices from the department.\n\nMadhav Consultancy provides comprehensive GST return management for retailers, manufacturers, service providers, and contractors. We reconcile your sales and purchase books against live GSTR-2B records, calculate precise tax dues, prepare challans, and file on time to preserve your business's 100% compliance rating on the GST portal.",
    benefits: [
      "Zero late fee guarantee with automated filing before the statutory 11th and 20th deadlines",
      "100% reconciliation between purchase register and official GSTR-2B to maximize eligible ITC",
      "Timely reporting of outward B2B invoices so your clients receive ITC without friction",
      "Generation of government tax payment challans with accurate CGST, SGST, and IGST head mapping",
      "Avoid GSTIN suspension or automatic cancellation due to consecutive non-filing",
      "End-to-end assistance with annual return (GSTR-9) and self-certified reconciliation (GSTR-9C)",
    ],
    eligibility:
      "All active GST registered taxpayers: Regular dealers, Composition scheme dealers (CMP-08), E-commerce sellers, and Service providers.",
    process: [
      { step: 1, title: "Sales & Purchase Data Collection", desc: "Receive sales bills, outward invoice registers, and vendor purchase bills on WhatsApp or email." },
      { step: 2, title: "GSTR-2B Live ITC Reconciliation", desc: "Cross-check every purchase invoice against live portal records to ensure all claimed input tax is eligible." },
      { step: 3, title: "GSTR-1 Preparation & JSON Upload", desc: "Compile B2B, B2C, credit notes, and HSN summary and submit GSTR-1 on the official GST portal." },
      { step: 4, title: "GSTR-3B Tax Liability Computation", desc: "Offset outward liability using available ITC ledger balances and generate net tax payment challan." },
      { step: 5, title: "Filing & Acknowledgement Handover", desc: "E-file the return using DSC or EVC OTP and deliver official ARN filing receipts to the client." },
    ],
    documents: [
      "Monthly sales invoices / Outward sales summary sheet",
      "Purchase register or vendor invoices for the filing period",
      "Bank statement of the business account for reconciliation",
      "GST portal login credentials (Username & Password)",
      "E-way bill records (for inter-state goods movement)",
    ],
    feesTimeline: {
      govtFee: "Nil (Late fee ₹50/day if filed after due date)",
      consultancyFee: "Starting from ₹499/month (Nil returns ₹299/month)",
      timeToIssue: "Completed within 24 hours of receiving monthly records",
    },
    faqList: [
      {
        question: "Do I need to file GST returns if I had zero sales in a month?",
        answer: "Yes! Filing a 'Nil Return' is legally mandatory even if you had zero transactions. Failing to file a Nil return incurs a late fee of ₹20 per day.",
      },
      {
        question: "What is the difference between GSTR-2A and GSTR-2B?",
        answer: "GSTR-2A is a dynamic, continuously updated view of invoices uploaded by suppliers. GSTR-2B is a static statement generated on the 14th of every month that legally determines your eligible ITC for that tax period.",
      },
      {
        question: "Can an incorrect GST return be revised once filed?",
        answer: "No, GST returns cannot be revised once filed. However, any corrections, additions, or invoice amendments can be made in the subsequent month's GSTR-1 or GSTR-3B filing.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I need monthly GST Return Filing support.",
  },
  {
    slug: "llp-registration",
    title: "Limited Liability Partnership (LLP) Registration",
    shortTitle: "LLP Registration",
    branch: "Business",
    price: "Custom",
    govtFee: "Nominal MCA statutory fee",
    turnaround: "7 to 10 working days",
    seoTitle: "LLP Registration Online - Limited Liability Partnership Formation",
    seoDescription: "Register a Limited Liability Partnership (LLP) in India with MCA. Get LLP agreement drafting, DPIN, RUN-LLP name reservation & Form FiLLiP filing.",
    h1: "Limited Liability Partnership (LLP) Registration Services",
    summary:
      "Ideal business vehicle for professionals, partners, and modern services combining the flexibility of a partnership with limited liability protection.",
    fullOverview:
      "A Limited Liability Partnership (LLP), governed under the Limited Liability Partnership Act, 2008, offers the perfect hybrid structure for professionals, partners, and growing consulting firms. It combines the internal organizational flexibility and ease of operation of a traditional partnership with the paramount advantage of limited liability protection enjoyed by corporate shareholders.\n\nIn a standard partnership firm, partners bear unlimited personal liability, meaning personal assets can be seized to pay off business debts or negligence committed by other partners. In contrast, in an LLP, the liability of each partner is strictly limited to their agreed capital contribution, and no partner can be held personally liable for the independent or unauthorized acts of other partners.\n\nMadhav Consultancy manages the full spectrum of LLP formation. We reserve your firm's name on the MCA portal (RUN-LLP), obtain Digital Signature Certificates, draft and file Form FiLLiP for incorporation, and prepare a customized, legally binding LLP Agreement (Form 3) that precisely governs profit ratios, capital additions, retirement clauses, and operational powers.",
    benefits: [
      "Limited liability protection: Partners' personal properties are completely shielded from firm liabilities",
      "Lower compliance burden compared to Private Limited companies (no mandatory statutory audit if turnover < ₹40L)",
      "No dividend distribution tax (DDT) on profit distribution to designated partners",
      "No requirement of minimum capital contribution to begin business operations",
      "Distinct legal identity that can purchase commercial property and open bank accounts",
      "Preferred vehicle for chartered accountants, consultants, architects, engineers, and digital agencies",
    ],
    eligibility:
      "Minimum 2 Designated Partners (at least one must be an Indian resident). Both individuals and corporate bodies can be partners.",
    process: [
      { step: 1, title: "Class-3 DSC for Designated Partners", desc: "Obtain digital signature certificates for the proposed designated partners." },
      { step: 2, title: "RUN-LLP Name Approval", desc: "Submit proposed partnership names on the MCA portal for reservation and trademark checking." },
      { step: 3, title: "FiLLiP Incorporation Form Submission", desc: "File Form FiLLiP along with partner KYC and registered office proof with the Registrar of Companies." },
      { step: 4, title: "Issuance of Certificate of Incorporation (COI)", desc: "The ROC approves the application and issues the Certificate of Incorporation with unique LLPIN." },
      { step: 5, title: "LLP Agreement Drafting & Form 3 Filing", desc: "Draft customized deed on non-judicial stamp paper, notarize, and file Form 3 within 30 days." },
    ],
    documents: [
      "PAN Card copy of all designated partners",
      "Identity Proof: Aadhaar Card, Passport, Voter ID, or Driving License",
      "Address Proof of partners: Recent bank statement or utility bill (< 2 months old)",
      "Passport-size photographs of partners",
      "Proof of Registered Office premises (Electricity bill / Property tax receipt + Landlord NOC)",
      "Rent Agreement executed between landlord and designated partners",
    ],
    feesTimeline: {
      govtFee: "Nominal MCA statutory incorporation and stamp duty fee",
      consultancyFee: "Comprehensive end-to-end LLP package (Custom quotation)",
      timeToIssue: "7 to 10 working days from complete documentation",
    },
    faqList: [
      {
        question: "Is audit mandatory for all LLPs every year?",
        answer: "No, under the LLP Act, an audit of accounts is only mandatory if the annual turnover exceeds ₹40 Lakhs or the partner capital contribution exceeds ₹25 Lakhs.",
      },
      {
        question: "Can an existing partnership firm be converted into an LLP?",
        answer: "Yes, an existing registered or unregistered partnership firm can be converted into an LLP by filing Form 17 with the ROC along with the incorporation forms.",
      },
      {
        question: "What is Form 3 in LLP compliance?",
        answer: "Form 3 is the electronic form used to file the executed LLP Agreement with the MCA. It must be filed within 30 days of incorporation to avoid heavy daily recurring penalties.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I want to register a Limited Liability Partnership (LLP). Please guide me.",
  },
  {
    slug: "partnership-firm",
    title: "Partnership Firm Registration & Legal Deed Drafting",
    shortTitle: "Partnership Firm",
    branch: "Business",
    price: "Custom",
    govtFee: "State ROF stamp duty varies",
    turnaround: "3 to 7 working days",
    seoTitle: "Partnership Firm Registration Online - Deed Drafting & ROF Filing",
    seoDescription: "Draft comprehensive partnership deeds & register your firm with the Registrar of Firms (ROF). PAN card, bank opening & compliance by Madhav Consultancy.",
    h1: "Partnership Firm Registration & Legal Deed Drafting Services",
    summary:
      "Legal partnership deed drafting with notarization, PAN allotment, and official Registrar of Firms (ROF) state registration.",
    fullOverview:
      "A Partnership Firm, regulated under the Indian Partnership Act, 1932, represents a classic and practical business arrangement where two or more persons join hands to conduct commercial trade and distribute profits. While an oral partnership is legally possible, operating without an explicitly drafted and registered Partnership Deed exposes partners to catastrophic legal disputes regarding profit distribution, capital interest, handling liabilities, and partner exit.\n\nA professionally drafted Partnership Deed executed on non-judicial stamp paper serves as the charter of your business. Furthermore, registering your firm with the state Registrar of Firms (ROF) confers critical legal standing under Section 69 of the Partnership Act, enabling your firm to file lawsuits in civil courts against defaulting vendors, clients, or third parties to recover outstanding debts.\n\nMadhav Consultancy provides end-to-end partnership firm formation. We structure comprehensive partnership covenants including capital contribution, profit/loss sharing percentages, interest on capital, operational remuneration for active partners, dispute resolution arbitration mechanisms, and partner retirement/dissolution terms, followed by firm PAN application and ROF submission.",
    benefits: [
      "Clear legal definition of capital, profit share, partner salaries, and operational responsibilities",
      "Power to file legal recovery suits against third parties under Section 69 upon ROF registration",
      "Quick formation with straightforward documentation and minimum regulatory filings",
      "Separate PAN card allotment in the name of the partnership firm",
      "Open commercial current accounts seamlessly with all public and private banks",
      "Flexible internal management without the stringent compliance requirements of corporate boards",
    ],
    eligibility:
      "Minimum 2 and maximum 50 partners. Any competent person (Indian resident) who is of sound mind and not disqualified by law can form a partnership.",
    process: [
      { step: 1, title: "Partnership Terms Consultation", desc: "We sit down with you to finalize key clauses: profit sharing, active roles, interest, and firm name." },
      { step: 2, title: "Comprehensive Deed Drafting", desc: "Our legal drafters prepare an exhaustive deed containing all statutory clauses on appropriate non-judicial stamp paper." },
      { step: 3, title: "Execution & Notarization", desc: "All partners sign the deed in the presence of witnesses, followed by official notarization." },
      { step: 4, title: "Firm PAN & TAN Procurement", desc: "We file the firm's PAN application with NSDL/UTIITSL in the firm's official trade name." },
      { step: 5, title: "ROF Submission & Registration", desc: "We submit the executed deed, Form 1, and premise proofs to the state Registrar of Firms for the official Registration Certificate." },
    ],
    documents: [
      "PAN Card copy of all partners",
      "Identity Proof (Aadhaar Card, Passport, or Voter ID) of all partners",
      "Address Proof of partners (Bank statement, electricity bill)",
      "Passport-size photographs of all partners",
      "Proof of principal place of business (Electricity bill / Property tax receipt)",
      "NOC from the property owner and Rent Agreement if leased",
    ],
    feesTimeline: {
      govtFee: "State stamp duty on deed (varies by state) + ROF registration fee",
      consultancyFee: "Affordable drafting and registration fee (Custom quotation)",
      timeToIssue: "3 to 7 working days for deed, notarization & PAN allotment",
    },
    faqList: [
      {
        question: "Is registration with the Registrar of Firms (ROF) compulsory?",
        answer: "While registration is not mandatory under the Partnership Act to start business, an unregistered firm cannot sue third parties in court to enforce contractual rights. Therefore, ROF registration is strongly advised.",
      },
      {
        question: "Can a partnership deed provide salary to working partners?",
        answer: "Yes, under Section 40(b) of the Income Tax Act, salary and remuneration paid to active working partners is allowed as a business expense deduction up to prescribed statutory limits, reducing firm tax liability.",
      },
      {
        question: "Can a partnership firm be registered on a rented premises?",
        answer: "Yes, a rented premise is completely acceptable with a valid rent agreement and a No Objection Certificate (NOC) from the property owner along with a recent electricity bill.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I need Partnership Firm deed drafting and ROF registration support.",
  },
  {
    slug: "compliance-filing",
    title: "Company Compliance & Annual ROC Filings",
    shortTitle: "Company Compliance",
    branch: "Business",
    price: "Custom",
    govtFee: "MCA statutory filing fee",
    turnaround: "Scheduled annual compliance",
    seoTitle: "Company Compliance Online - Annual ROC Filings AOC-4 & MGT-7",
    seoDescription: "Stay compliant with MCA regulations. Annual ROC filing (AOC-4, MGT-7), Director DIR-3 KYC, board resolutions & secretarial assistance by Madhav Consultancy.",
    h1: "Company Compliance & Annual ROC Filings Services",
    summary:
      "End-to-end statutory compliance for Companies and LLPs handled by Roshan Sharma, including AOC-4, MGT-7, Form 11, Form 8, and Director KYC.",
    fullOverview:
      "Under the Companies Act, 2013 and MCA regulations, every registered Private Limited company, One Person Company, and Limited Liability Partnership must comply with periodic statutory filing requirements annually, regardless of whether any commercial turnover occurred during the financial year. Neglecting annual corporate compliance can lead to catastrophic consequences, including severe daily penalties of ₹100 per day per form with no upper cap, disqualification of directors under Section 164(2), and striking off of the company by the ROC.\n\nKey mandatory annual compliances for companies include filing the Financial Statements in Form AOC-4, filing the Annual Return in Form MGT-7/MGT-7A, and filing Director DIR-3 KYC. For LLPs, mandatory annual returns include Form 11 (Annual Return) and Form 8 (Statement of Account & Solvency). In addition, companies must hold an Annual General Meeting (AGM) and maintain accurate minutes of board meetings.\n\nMadhav Consultancy's corporate secretarial team, led by Company Compliance Specialist Roshan Sharma, ensures your enterprise stays 100% compliant year-round. We audit your statutory registers, prepare compliant board resolutions, draft Director Reports, and file all mandatory MCA forms well before due dates to maintain your company's active status and spotless legal standing.",
    benefits: [
      "Zero penalty assurance by filing all MCA forms well before statutory cutoff dates",
      "Maintain active DIN status for all directors with timely annual DIR-3 KYC filings",
      "Protection against director disqualification for a period of 5 years under Section 164",
      "Prevent strike-off proceedings and freezing of corporate bank accounts by the MCA",
      "Statutory books and registers maintained according to Secretarial Standards (SS-1 & SS-2)",
      "Readiness for institutional funding, banking credit facilities, and due diligence audits",
    ],
    eligibility:
      "All active Private Limited Companies, One Person Companies (OPC), Section 8 Companies, and Limited Liability Partnerships (LLP).",
    process: [
      { step: 1, title: "Statutory Financials Review", desc: "Review audited balance sheet, profit and loss account, and auditor's report." },
      { step: 2, title: "Drafting Board Resolutions & Notices", desc: "Draft notice of AGM, director's report, and extract of annual return (MGT-9/MGT-7)." },
      { step: 3, title: "Form AOC-4 Preparation & Filing", desc: "Digitally upload financial statements and director disclosures within 30 days of the AGM." },
      { step: 4, title: "Form MGT-7 Preparation & Filing", desc: "Compile shareholding pattern, indebtedness details, and submit Form MGT-7 within 60 days of the AGM." },
      { step: 5, title: "DIR-3 KYC & Secretarial Register Maintenance", desc: "Complete web or e-form DIR-3 KYC for all directors to maintain active compliance status." },
    ],
    documents: [
      "Audited Financial Statements (Balance Sheet, P&L, Notes to Accounts)",
      "Statutory Auditor's Report and CARO report (if applicable)",
      "Director DIN numbers, active mobile and email for KYC verification",
      "Digital Signature Certificates (Class-3) of at least one director and professional",
      "List of shareholders, transfers, and shareholding pattern as on financial year close",
    ],
    feesTimeline: {
      govtFee: "Standard MCA filing fees based on company's authorized capital",
      consultancyFee: "Annual comprehensive secretarial compliance retainer (Custom quotation)",
      timeToIssue: "Completed within 2 to 4 days of receiving signed audited financials",
    },
    faqList: [
      {
        question: "What is the penalty for late filing of Form AOC-4 and MGT-7?",
        answer: "Under the amended Companies Act, late filing of AOC-4 and MGT-7 attracts a strict penalty of ₹100 per day per form with no upper ceiling until the forms are filed.",
      },
      {
        question: "Is DIR-3 KYC required even if a director does not hold shares?",
        answer: "Yes, every individual holding an allotted Director Identification Number (DIN) must complete annual DIR-3 KYC on or before September 30th, irrespective of whether they hold shares or are on an active board.",
      },
      {
        question: "What happens if an LLP fails to file Form 11 or Form 8?",
        answer: "Delayed filing of LLP Form 11 or Form 8 incurs a flat penalty of ₹100 per day per form from the due date until filed, which can accumulate to thousands of rupees.",
      },
    ],
    leadMessage: "Hi Roshan Sir (Madhav Consultancy), I need MCA/ROC statutory compliance and annual filing assistance.",
  },
  {
    slug: "licenses-certificates",
    title: "Trade Licenses & Municipal Business Certificates",
    shortTitle: "Licenses & Certificates",
    branch: "Business",
    price: "Custom",
    govtFee: "Municipal ward schedule varies",
    turnaround: "5 to 10 working days",
    seoTitle: "Trade License Online - Shop Act & Municipal Commercial Certificates",
    seoDescription: "Get Trade License, Shop & Commercial Establishment Act registration, Import Export Code (IEC) & local municipal permissions with Madhav Consultancy.",
    h1: "Trade Licenses & Municipal Business Certificates Services",
    summary:
      "Municipal trade licenses, Shop & Commercial Establishment Act registrations, Import Export Code (IEC), and local regulatory certificates.",
    fullOverview:
      "Operating a physical commercial enterprise—whether a retail storefront, warehouse, showroom, workshop, or corporate office—requires compliance with local municipal municipal corporation acts and state labour welfare legislations. Foremost among these are the Municipal Trade License issued by the local Municipal Corporation / Nagar Nigam and the Shop and Commercial Establishment Act Registration (Gumasta license / Shop Act) administered by the state Labour Department.\n\nA Municipal Trade License certifies that the trade conducted on the premises complies with civic safety, sanitation, and zoning standards, ensuring the business does not cause public nuisance or health hazards. Similarly, Shop Act registration regulates working hours, employee wages, weekly offs, and health conditions while serving as the primary legal proof of establishment required by commercial banks to open a business bank account.\n\nMadhav Consultancy assists entrepreneurs with obtaining all indispensable municipal and commercial licenses. We verify your commercial premises categorization, prepare site layout plans and signboard photographs, file applications on the state urban development and labour portals, and secure your approved licenses without bureaucratic roadblocks.",
    benefits: [
      "Legal authority to carry out designated commercial trade within municipal city limits",
      "Essential foundation document to open current accounts with banks and financial institutions",
      "Protection against sudden municipal raids, penalty notices, and premise closure orders",
      "Compliance with state labour laws ensuring valid employee welfare and working hour records",
      "Required document for onboarding onto local government procurement platforms and tenders",
      "Seamless annual renewal management to avoid late renewal surcharges",
    ],
    eligibility:
      "Retailers, Wholesalers, Restaurants, Workshops, Godowns, Offices, Commercial Complexes, Beauty Salons, Fitness Centers, and Health Clinics.",
    process: [
      { step: 1, title: "Zoning & Premise Eligibility Check", desc: "We review your commercial establishment location against municipal ward guidelines." },
      { step: 2, title: "Documentation & Signboard Preparation", desc: "We compile property tax receipts, electricity bills, rent agreement, and storefront signboard photos." },
      { step: 3, title: "Municipal & Labour Portal Submission", desc: "We file the online application under the appropriate trade category on the state municipal / labour portal." },
      { step: 4, title: "Statutory Government Fee Processing", desc: "We calculate and process the official municipal inspection and registration fees." },
      { step: 5, title: "Inspection Coordination & Certificate Issuance", desc: "We address any ward officer queries and download your official commercial trade license certificate." },
    ],
    documents: [
      "Identity and Address Proof of the Business Owner (PAN Card and Aadhaar Card)",
      "Proof of Commercial Premises (Latest Electricity Bill or Municipal Property Tax receipt)",
      "Rent Agreement and Landlord NOC (if premises are rented)",
      "Photograph of the business establishment showing the exterior trade signboard",
      "List of employees and fire safety compliance details (if applicable)",
    ],
    feesTimeline: {
      govtFee: "Municipal trade fee determined by square footage, trade nature, and ward category",
      consultancyFee: "Affordable drafting and portal handling fee (Custom quotation)",
      timeToIssue: "5 to 10 working days (subject to municipal ward inspector verification)",
    },
    faqList: [
      {
        question: "Is a Trade License the same as a Shop & Establishment Act registration?",
        answer: "No. A Shop & Establishment registration is issued by the state Labour Department to regulate work hours and employee welfare. A Trade License is issued by the local Municipal Corporation permitting commercial activities at a specific premises.",
      },
      {
        question: "How often do I need to renew my Municipal Trade License?",
        answer: "Trade licenses are generally issued for a period of 1 financial year and must be renewed annually between March and April according to municipal bylaws.",
      },
      {
        question: "Can I get a Trade License for a home-based business?",
        answer: "Most municipal corporations permit low-nuisance home-based professions (such as consulting, design, software) subject to specific residential zoning criteria.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I need Trade License / Shop Act registration assistance.",
  },
  {
    slug: "project-reports",
    title: "Bank Loan Project Reports & CMA Data Preparation",
    shortTitle: "Project Reports & CMA",
    branch: "Growth",
    price: "Custom",
    govtFee: "Nil",
    turnaround: "3 to 5 working days",
    seoTitle: "Bank Project Report & CMA Data - PMEGP, Mudra & MSME Business Loans",
    seoDescription: "Get bankable Detailed Project Reports (DPR) & CMA data for PMEGP, Mudra, CGTMSE & bank loans. Financial modeling & DSCR analysis by Madhav Consultancy.",
    h1: "Bank Loan Project Reports & CMA Data Preparation Services",
    summary:
      "Bank-compliant Detailed Project Reports (DPR) and Credit Monitoring Arrangement (CMA) data prepared for PMEGP, Mudra, MSME collateral-free, and term loans.",
    fullOverview:
      "Securing debt financing from public or private sector banks—whether under government subsidized schemes like PMEGP, Mudra, and Stand-Up India, or standard commercial cash credit (CC), overdraft (OD), and term loans—hinges entirely on the quality and financial viability demonstrated in your project documentation. Banks and credit rating agencies evaluate loan applications using Detailed Project Reports (DPR) and Credit Monitoring Arrangement (CMA) data.\n\nA professionally prepared Project Report details your business model, manufacturing or service process, market potential, plant and machinery requirements, civil infrastructure costs, and working capital needs. Meanwhile, the CMA data presents multi-year financial statements: historical numbers, current year estimates, and 5 to 7-year projections evaluating vital banking metrics like Debt Service Coverage Ratio (DSCR), Current Ratio, Break-Even Point (BEP), and Internal Rate of Return (IRR).\n\nMadhav Consultancy's financial modeling division, headed by Research & Business Analyst Specialist Surendra Nagar, develops bank-ready project reports. We craft realistic, defendable financial schedules that fulfill bank lending criteria, ensuring your loan file passes bank credit manager and risk committee appraisal smoothly.",
    benefits: [
      "Bank-compliant Detailed Project Reports (DPR) tailored to commercial bank credit norms",
      "Comprehensive multi-year CMA data highlighting DSCR, Current Ratio, and MPBF formulas",
      "Aligned with government subsidy schemes like PMEGP (up to 35% subsidy) and Mudra loans",
      "Defendable financial projections based on realistic industry benchmarks and margin profiles",
      "Complete clarification support during bank appraisal interviews and credit officer visits",
      "Drastically reduces loan rejection risks and expedites sanction letter issuance",
    ],
    eligibility:
      "New Startups, Manufacturing Units, Service Enterprises, Wholesale Distributors, Hospital/Clinics, Hotels/Restaurants, and Expanding Existing Businesses seeking bank finance from ₹5 Lakhs to ₹25 Crores.",
    process: [
      { step: 1, title: "Project & Financial Need Assessment", desc: "We evaluate your total capital expenditure (CAPEX) and operational working capital requirements." },
      { step: 2, title: "Financial Modeling & Schedule Preparation", desc: "We build multi-year cost of project statements, means of finance, depreciation schedules, and cash flow projections." },
      { step: 3, title: "CMA Data & Key Ratios Analysis", desc: "We structure Form I through Form VI of the CMA data, verifying DSCR, ISCR, Current Ratio, and TOL/TNW ratios." },
      { step: 4, title: "Project Narrative & Feasibility Report", desc: "We draft the descriptive project report highlighting promoter background, market demand, and SWOT analysis." },
      { step: 5, title: "Final Signed Report Delivery & Banker Support", desc: "We deliver the signed report and remain available to address any technical queries raised by the bank's credit team." },
    ],
    documents: [
      "Promoter KYC (PAN Card, Aadhaar Card, Educational & Professional Resume)",
      "Past 2 to 3 years ITR, Balance Sheets, and P&L (for existing operating businesses)",
      "Quotation of plant, machinery, equipment, or civil work cost estimates",
      "Business premises title deed / lease agreement / allotment letter",
      "Bank loan application details and name of target lending branch",
      "Existing business loan sanction letters (if any)",
    ],
    feesTimeline: {
      govtFee: "Nil",
      consultancyFee: "Competitive modeling fee based on project loan size (Custom quotation)",
      timeToIssue: "3 to 5 working days upon complete documentation",
    },
    faqList: [
      {
        question: "What is CMA Data in bank loans?",
        answer: "CMA (Credit Monitoring Arrangement) is a standardized format required by banks to analyze the working capital and term loan requirements of a borrower, presenting past, current, and projected financial performance across 7 distinct forms.",
      },
      {
        question: "What is a good DSCR ratio for a bank project report?",
        answer: "A Debt Service Coverage Ratio (DSCR) between 1.5 and 2.0 is considered healthy by bankers. It proves the business generates sufficient operational cash flow to comfortably service interest and principal repayments.",
      },
      {
        question: "Do you make project reports for PMEGP loan subsidy?",
        answer: "Yes, we prepare specialized PMEGP project reports adhering strictly to KVIC portal guidelines, maximizing your subsidy eligibility (up to 25% for urban and 35% for rural projects).",
      },
    ],
    leadMessage: "Hi Surendra Sir (Madhav Consultancy), I need a bankable Project Report (DPR / CMA) for a business loan.",
  },
  {
    slug: "business-expansion",
    title: "Business Expansion & Scalability Advisory",
    shortTitle: "Business Expansion",
    branch: "Growth",
    price: "Custom",
    govtFee: "Nil",
    turnaround: "Strategic roadmaps & ongoing mentorship",
    seoTitle: "Business Expansion Advisory - Scale Operations, Franchise & Branches",
    seoDescription: "Scale your business with expert growth modeling, branch expansion roadmaps, multi-state GST structuring & mentor guidance by Madhav Consultancy.",
    h1: "Business Expansion & Scalability Advisory Services",
    summary:
      "Strategic business modeling, branch expansion roadmaps, multi-state GST structuring, and operations scaling guided by Mentor Lokesh Verma.",
    fullOverview:
      "Transitioning a single-location business into a multi-branch enterprise, regional chain, or nationwide brand requires more than ambition—it requires disciplined operational structuring, tax optimization, and scalable management systems. Rapid expansion without proper legal and regulatory scaffolding frequently results in operational bottlenecks, cash flow crunches, and severe multi-state tax compliance hazards.\n\nExpanding into new geographies entails establishing additional places of business (APOB) or separate legal entities under GST law, implementing unified inventory accounting, negotiating lease terms, creating standardized operating procedures (SOPs), and managing expanded working capital cycles. Deciding whether to scale through company-owned outlets (COCO) or franchise partner models (FOFO) requires deep financial modeling and legal deed drafting.\n\nMadhav Consultancy provides strategic expansion advisory led by Trainer & Mentor Lokesh Verma. We conduct 360-degree diagnostics of your existing revenue model, identify profitable expansion pathways, map regulatory compliance across new territories, and provide continuous mentorship to help you scale your business sustainably.",
    benefits: [
      "Diagnostic audit of current unit economics and profit margins to determine scaling viability",
      "Multi-state regulatory mapping: Additional Place of Business (APOB) and state GST registrations",
      "Franchise model structuring: Franchise agreements, royalty fee structures, and SOP playbooks",
      "Working capital budgeting and cash flow management to prevent growth-induced liquidity crunches",
      "Direct 1-on-1 mentorship sessions with Mentor Lokesh Verma to navigate growth roadblocks",
      "Vendor network expansion and supply chain compliance alignment for enterprise readiness",
    ],
    eligibility:
      "Established Retailers, Food Brands, Educational Institutes, Service Providers, and Manufacturers ready to expand into new cities, states, or digital channels.",
    process: [
      { step: 1, title: "Diagnostic Audit & Unit Economics", desc: "We evaluate your unit profit margins, customer acquisition costs, and operational bottlenecks." },
      { step: 2, title: "Expansion Model Selection", desc: "We analyze whether Company-Owned, Franchise, or Online D2C represents the highest-ROI pathway for your trade." },
      { step: 3, title: "Regulatory & Tax Restructuring", desc: "We plan multi-state GST registrations, local municipal permissions, and inter-branch invoicing rules." },
      { step: 4, title: "Capital & Working Budget Allocation", desc: "We formulate multi-quarter financial budgets and coordinate with banking partners for expansion funding." },
      { step: 5, title: "Ongoing Mentor Reviews", desc: "We hold bi-weekly strategic milestone reviews to track KPIs, correct course, and celebrate scaling milestones." },
    ],
    documents: [
      "Existing business registration documents and financial turnover history for past 2 years",
      "Current operational P&L and cost breakdown",
      "Proposed new location or expansion model outline",
      "Target customer demographic and geographic market profile",
    ],
    feesTimeline: {
      govtFee: "Nil (Standard statutory fees for new branch registrations apply separately)",
      consultancyFee: "Customized strategic consulting retainer based on project scope",
      timeToIssue: "Initial diagnostic report within 7 days followed by structured mentorship",
    },
    faqList: [
      {
        question: "When is the right time to expand my business to a new location?",
        answer: "A business is ready to expand when the core location is generating consistent net profits, has positive operating cash flow, operates with standardized SOPs independent of the owner's daily presence, and has a proven customer demand in the target market.",
      },
      {
        question: "Do I need a new GST registration to open a branch in another state?",
        answer: "Yes. Under GST law, GST is state-specific. Opening a branch in a new state requires obtaining a fresh GSTIN in that state. Opening a branch within the same state can be added as an Additional Place of Business (APOB) on your existing GSTIN.",
      },
    ],
    leadMessage: "Hi Lokesh Sir, I want to discuss business expansion strategy for my company.",
  },
  {
    slug: "financial-guidance",
    title: "Financial Guidance & Tax Saving Advisory",
    shortTitle: "Financial Guidance",
    branch: "Growth",
    price: "Custom",
    govtFee: "Nil",
    turnaround: "Periodic advisory sessions",
    seoTitle: "Financial Guidance & Tax Planning Advisory - Madhav Consultancy",
    seoDescription: "Strategic cash flow planning, business tax saving advisory, expense audits & profitability management by financial experts at Madhav Consultancy.",
    h1: "Financial Guidance & Tax Saving Advisory Services",
    summary:
      "Personalized cash flow structuring, legal tax planning, cost optimization roadmaps, and business profitability management.",
    fullOverview:
      "A growing business can generate impressive topline revenues and still face severe cash shortages if financial planning, working capital cycles, and tax optimization are handled haphazardly. True commercial longevity relies on structured cash management, clear visibility into operational expenses, and legitimate tax planning strategies that retain hard-earned business profits.\n\nTax planning is fundamentally distinct from tax evasion: it involves the lawful arrangement of your business affairs to optimize all available deductions, depreciation allowances, research subsidies, and tax rebates permissible under the Income Tax Act and GST regulations. From choosing between standard corporate tax rates and the concessional 22% regime under Section 115BAA, to managing partner remuneration and depreciation on commercial assets, proactive financial guidance safeguards your enterprise's balance sheet.\n\nMadhav Consultancy provides personalized financial advisory for emerging entrepreneurs, family firms, and medium enterprises. We audit your monthly cash inflows and outflows, restructure your compliance calendar, minimize avoidable tax burdens, and design cost-effective operational budgets that fuel sustainable business growth.",
    benefits: [
      "Proactive, year-round tax planning that prevents stressful last-minute March tax rushes",
      "Identification of permissible business deductions, depreciation benefits, and investment rebates",
      "Optimized salary vs dividend structuring for directors and partners to minimize personal tax",
      "Cash flow forecasting and working capital cycle management to eliminate cash crunches",
      "Audit of operational expenditures to cut overhead leaks and enhance net operating margins",
      "Quarterly performance reviews providing clear, non-technical financial insights to business owners",
    ],
    eligibility:
      "Entrepreneurs, Family Businesses, Sole Proprietors, Firm Partners, and Corporate Directors seeking disciplined financial roadmaps and tax optimization.",
    process: [
      { step: 1, title: "Financial Diagnostic & Cash Flow Audit", desc: "We review your recent balance sheets, P&L, expense heads, and debt obligations." },
      { step: 2, title: "Tax Planning Blueprint Creation", desc: "We identify unutilized deductions, optimal asset purchase timings, and tax regime alternatives." },
      { step: 3, title: "Expense Restructuring & Budgeting", desc: "We establish monthly operating budgets and separate business funds from promoter personal expenses." },
      { step: 4, title: "Implementation & Calendar Rollout", desc: "We provide your accounts team with a compliance and advance tax calendar to eliminate interest penalties." },
      { step: 5, title: "Quarterly Performance Review", desc: "We review quarterly financials to monitor tax liability adjustments and verify business margin improvements." },
    ],
    documents: [
      "Past 1 to 2 years financial statements and income tax computations",
      "Current year monthly GST returns and turnover summaries",
      "List of major commercial assets, ongoing loans, and fixed monthly overheads",
      "Current business entity structure and partner profit-sharing agreements",
    ],
    feesTimeline: {
      govtFee: "Nil",
      consultancyFee: "Monthly or quarterly retainer advisory (Custom quotation)",
      timeToIssue: "Comprehensive financial roadmap delivered within 10 days of document review",
    },
    faqList: [
      {
        question: "How does proactive tax planning benefit my business?",
        answer: "Proactive tax planning allows you to legally reduce taxable income through timed capital expenditures, Section 80 deductions, optimized partner salaries, and choosing the right tax regime, saving significant amounts of money compared to reactive filing.",
      },
      {
        question: "What is Advance Tax and who is required to pay it?",
        answer: "Any taxpayer whose estimated net tax liability for the financial year after TDS deduction exceeds ₹10,000 is legally required to pay Advance Tax in 4 quarterly installments (June, September, December, and March) to avoid interest under Sections 234B and 234C.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I would like financial guidance & tax planning advisory.",
  },
  {
    slug: "market-support",
    title: "Market Support & B2B Vendor Compliance Readiness",
    shortTitle: "Market Support",
    branch: "Growth",
    price: "Custom",
    govtFee: "GeM registration is free",
    turnaround: "3 to 7 working days",
    seoTitle: "GeM Portal Registration & B2B Vendor Compliance - Madhav Consultancy",
    seoDescription: "Get your enterprise B2B-ready with Government e-Marketplace (GeM) registration, Startup India DPIIT recognition & corporate vendor credentials.",
    h1: "Market Support & B2B Vendor Compliance Readiness Services",
    summary:
      "Get your enterprise B2B-ready with vendor registration certifications, GeM portal listing, startup recognition, and institutional buyer compliance.",
    fullOverview:
      "Expanding your market reach from retail consumers to institutional buyers, public sector undertakings (PSUs), government departments, and multinational corporations (MNCs) unlocks high-volume, multi-year commercial contracts. However, corporate procurement teams and government agencies operate with stringent vendor onboarding standards. Without prerequisite certifications, vendor credentials, and platform registrations, small enterprises are automatically filtered out during tender scrutiny.\n\nKey among institutional market gateways is the Government e-Marketplace (GeM)—India's dedicated national public procurement portal where central and state government ministries, defense bodies, and autonomous institutions purchase goods and services worth thousands of crores annually. Furthermore, obtaining Startup India DPIIT recognition unlocks significant tender exemptions, eliminating Earnest Money Deposit (EMD) requirements and prior turnover/experience conditions in public tenders.\n\nMadhav Consultancy prepares your enterprise for institutional market dominance. We handle seller onboarding on the GeM portal, catalog products and services according to government specifications, apply for DPIIT recognition, and compile comprehensive corporate vendor credentials packages that win enterprise buyer trust.",
    benefits: [
      "Access to multi-crore public sector purchase contracts on the Government e-Marketplace (GeM)",
      "Startup India DPIIT recognition: Waiver of prior turnover and experience criteria in tenders",
      "Exemption from Earnest Money Deposit (EMD) and tender document fees under MSME procurement policy",
      "Structured corporate vendor profile compliant with large enterprise onboarding criteria",
      "Assistance in catalog creation, OEM validation, and technical bid documentation",
      "Positions your business as a credible, verified supplier for institutional supply chains",
    ],
    eligibility:
      "Manufacturers, Authorized Dealers, Wholesalers, Service Providers, and Software Startups seeking government tenders and enterprise corporate orders.",
    process: [
      { step: 1, title: "Vendor Assessment & Profile Alignment", desc: "We review your business registration, product catalog, and target institutional buying departments." },
      { step: 2, title: "GeM Portal Seller Onboarding", desc: "We register your enterprise on the official Government e-Marketplace with Aadhaar and PAN verification." },
      { step: 3, title: "Product / Service Catalog Upload", desc: "We upload product specifications, high-res photos, pricing, and delivery terms in compliance with GeM categories." },
      { step: 4, title: "DPIIT Startup India Recognition Filing", desc: "We prepare and submit the innovation pitch and documentation for official Startup India certificate issuance." },
      { step: 5, title: "Vendor Credential Dossier Handover", desc: "We deliver a comprehensive digital credential pack ready for corporate vendor onboarding panels." },
    ],
    documents: [
      "Company Incorporation / Udyam MSME Registration Certificate",
      "GSTIN Certificate and PAN Card",
      "Cancelled Cheque / Bank Account Details",
      "Product specification sheets, brochures, and commercial price list",
      "Trademark Certificate / Brand authorization letter (if selling branded goods)",
    ],
    feesTimeline: {
      govtFee: "GeM seller registration has no government fee | DPIIT recognition is free",
      consultancyFee: "Professional cataloging and vendor readiness package (Custom quotation)",
      timeToIssue: "3 to 7 working days for complete vendor profile and catalog live status",
    },
    faqList: [
      {
        question: "What is GeM (Government e-Marketplace)?",
        answer: "GeM is an official digital platform through which government departments, ministries, and PSUs procure goods and services. It is mandatory for government buyers to procure products through GeM, opening immense opportunities for verified sellers.",
      },
      {
        question: "What is the benefit of Startup India DPIIT recognition in tenders?",
        answer: "Under public procurement policy, DPIIT-recognized startups are exempt from the requirement of prior turnover and prior experience in all government tenders, enabling innovative new companies to compete equally with established conglomerates.",
      },
    ],
    leadMessage: "Hi Madhav Consultancy, I need Market Support and B2B vendor onboarding assistance.",
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
      "Provides practical training in company and LLP incorporation, MCA filings, ROC compliance, and corporate documentation to build industry-ready compliance skills.",
  },
  {
    name: "Ajay Verma",
    role: "Sales Specialist",
    image: ajayImg,
    description:
      "Trains learners in client communication, sales techniques, lead management, and business development to build confidence and professional skills.",
  },
  {
    name: "Surendra Nagar",
    role: "Research & Business Analyst Specialist",
    image: surendraImg,
    description:
      "Trains learners in market research, business analysis, feasibility assessment, and strategic planning to develop analytical thinking and informed decision-making skills.",
  },
];

export const founders = [
  {
    slug: "lokesh-verma",
    name: "Lokesh Verma",
    role: "Founder",
    fullRole: "Founder & Lead Trainer",
    designation: "Founder",
    seoTitle: "Lokesh Verma - Founder & Mentor | Madhav Consultancy",
    seoDescription:
      "Meet Lokesh Verma, Founder and Trainer at Madhav Consultancy. Leading business coaching, signature ESP portal training and corporate compliance mentorship.",
    h1: "Lokesh Verma – Founder & Lead Trainer",
    image: lokeshImg,
    oneLineBio:
      "Founder leading business coaching, signature ESP program cohorts, and corporate mentorship with hands-on portal mastery.",
    socialLinks: [
      { name: "Instagram", url: brand.instagram },
      { name: "Facebook", url: brand.facebook },
      // TODO: Add official personal LinkedIn URL when provided by client
      // TODO: Add official personal Twitter / X URL when provided by client
    ],
    bio: [
      "Lokesh Verma is the Founder and Lead Trainer at Madhav Consultancy, headquartered in Jaipur, Rajasthan. With a vision to bridge the gap between theoretical knowledge and practical execution, Lokesh established Madhav Consultancy around the core institutional objective: 'Building a Support Ecosystem for Seek to Grow: Business • Career • Skills • Growth'.",
      "Under his leadership, Madhav Consultancy has evolved from a standard taxation and company filing consultancy into an integrated business and career empowerment ecosystem. Observing that students, fresh commerce graduates, and aspiring professionals often lack hands-on portal exposure, Lokesh pioneered the signature ESP (Earning Skill Program)—a live practical training program guiding learners screen-by-screen through official GST, ITR, MSME, and FSSAI portals.",
      "As an active mentor and trainer, Lokesh personally leads interactive cohorts and counsels emerging enterprises on statutory compliance, MCA filings, and business growth roadmaps. His training philosophy emphasizes real document processing, client communication discipline, and zero false income guarantees—empowering participants to build sustainable consulting practices across India.",
    ],
    // TODO: Founder can expand on personalized journey, educational background, certifications, and milestones
  },
  {
    slug: "ajay-verma",
    name: "Ajay Verma",
    role: "Co-Founder",
    fullRole: "Co-Founder & Sales Specialist",
    designation: "Co-Founder",
    seoTitle: "Ajay Verma - Co-Founder & Mentor | Madhav Consultancy",
    seoDescription:
      "Meet Ajay Verma, Co-Founder and Sales Specialist at Madhav Consultancy. Guiding learners in client communication, business development and lead acquisition.",
    h1: "Ajay Verma – Co-Founder & Sales Specialist",
    image: ajayImg,
    oneLineBio:
      "Co-Founder spearheading client consultation, business development, customer communication, and practical sales training.",
    socialLinks: [
      { name: "Instagram", url: brand.instagram },
      { name: "Facebook", url: brand.facebook },
      // TODO: Add official personal LinkedIn URL when provided by client
      // TODO: Add official personal Twitter / X URL when provided by client
    ],
    bio: [
      "Ajay Verma is the Co-Founder and Sales Specialist at Madhav Consultancy. Instrumental in developing the consultancy's commercial outreach and client engagement models, Ajay oversees business development, client relationship workflows, and sales operations across all four branches of the firm.",
      "Recognizing that technical filing knowledge alone is insufficient without strong communication skills, Ajay trains learners and early-stage consulting practitioners in practical client handling. His mentorship focuses on consultative dialogue, client discovery, requirement analysis, proposal drafting, and ethical sales closing without aggressive or misleading pitches.",
      "Under his strategic guidance, Madhav Consultancy maintains high client satisfaction and repeat engagement for business incorporation and compliance services. As part of the founding leadership team, Ajay works closely with co-founders to uphold the organization's commitment to transparent client advisory, accountability, and nationwide service delivery.",
    ],
    // TODO: Founder can expand on personalized journey, educational background, certifications, and milestones
  },
  {
    slug: "surendra-nagar",
    name: "Surendra Nagar",
    role: "Co-Founder",
    fullRole: "Co-Founder & Business Analyst",
    designation: "Co-Founder",
    seoTitle: "Surendra Nagar - Co-Founder & Lead | Madhav Consultancy",
    seoDescription:
      "Meet Surendra Nagar, Co-Founder and Business Analyst at Madhav Consultancy. Guiding learners in market research, feasibility analysis and project reports.",
    h1: "Surendra Nagar – Co-Founder & Business Analyst",
    image: surendraImg,
    oneLineBio:
      "Co-Founder specializing in enterprise feasibility studies, market analysis, DPR / CMA data project reports, and strategic growth.",
    socialLinks: [
      { name: "Instagram", url: brand.instagram },
      { name: "Facebook", url: brand.facebook },
      // TODO: Add official personal LinkedIn URL when provided by client
      // TODO: Add official personal Twitter / X URL when provided by client
    ],
    bio: [
      "Surendra Nagar is the Co-Founder and Research & Business Analyst Specialist at Madhav Consultancy. Bringing rigorous analytical discipline to the leadership team, Surendra heads market research, feasibility studies, and detailed project report preparation for expanding enterprises.",
      "Within Madhav Consultancy's growth and scalability branch, Surendra supports MSMEs, startups, and commercial clients in preparing Detailed Project Reports (DPR), Credit Monitoring Arrangement (CMA) data, and financial projections required for bank credit facilities and institutional evaluations. His methodical approach ensures client project documentation aligns with banking norms.",
      "In addition to corporate advisory, Surendra trains learners in market intelligence, business model evaluation, and feasibility assessment. He empowers students to look beyond compliance forms and understand the underlying unit economics and strategic planning essential for sustainable business operations.",
    ],
    // TODO: Founder can expand on personalized journey, educational background, certifications, and milestones
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
