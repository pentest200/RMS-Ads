export type ClientLogo = {
  id: string;
  name: string;
  image_url?: string;
  fallbacks?: string[];
  domain?: string;
  category?: string;
};

export type ServiceItem = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  keyBenefits: string[];
};

export type CaseStudy = {
  id: string;
  slug: string;
  client: string;
  industry: string;
  title: string;
  metrics: { label: string; value: string }[];
  summary: string;
  challenge: string;
  strategy: string;
  results: string[];
  tags: string[];
};

export type IndustryItem = {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
};

export type ProcessStep = {
  step: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
};

export const companyDetails = {
  name: "RMS Ads",
  positioning: "360° Digital Marketing & Advertising Agency",
  heroHeadline: "Your Brand. Our Strategy. Unlimited Growth.",
  heroSubheadline:
    "We help ambitious brands grow through strategic digital advertising, performance marketing, influencer collaborations, and result-driven campaigns across multiple platforms.",
  introHeadline: "MORE THAN MARKETING. WE BUILD MOMENTUM.",
  introText:
    "RMS Ads is an integrated digital marketing and advertising powerhouse. We bridge the gap between creative storytelling and analytical precision, engineering campaigns that capture market share, drive qualified acquisition, and fuel exponential enterprise growth.",
  email: "contact@rmsads.com",
  phone: "+91 98765 43210",
  address: "DLF Cyber City, Sector 24, Gurugram, Haryana 122002, India",
  hours: "Monday – Saturday: 9:30 AM – 7:30 PM IST",
  socials: {
    linkedin: "https://www.linkedin.com/company/rms-ads",
    twitter: "https://twitter.com/rms_ads",
    instagram: "https://instagram.com/rmsads_official",
    youtube: "https://youtube.com/@rmsads",
  },
  stats: [
    { label: "Ad Spend Managed", value: "₹250M+" },
    { label: "Qualified Leads Generated", value: "750K+" },
    { label: "Active Brand Collaborations", value: "50+" },
    { label: "Average Campaign ROAS", value: "4.8x" },
  ],
};

export const processSteps: ProcessStep[] = [
  {
    step: "Step 01",
    number: "01",
    title: "Discover",
    tagline: "Market Intelligence & Brand Audit",
    description:
      "We immerse ourselves in your brand ecosystem, customer demographics, competitor positioning, and historical acquisition metrics to uncover untapped leverage points.",
    activities: [
      "Target Audience & ICP Modeling",
      "Full Funnel & Attribution Audit",
      "Competitor Media & Creative Scraping",
      "Baseline KPI & Goal Alignment",
    ],
  },
  {
    step: "Step 02",
    number: "02",
    title: "Strategize",
    tagline: "Omnichannel Growth Architecture",
    description:
      "We design custom performance roadmaps balancing paid acquisition, influencer distribution, creative positioning, and budget allocation tailored to your unit economics.",
    activities: [
      "Media Mix & Budget Allocation",
      "Performance Creative Concepting",
      "Influencer & Creator Shortlisting",
      "Full Tracking & Attribution Blueprint",
    ],
  },
  {
    step: "Step 03",
    number: "03",
    title: "Execute",
    tagline: "Precision Deployment & Media Buying",
    description:
      "Our specialized media buyers and creative team launch campaigns across Google, Meta, YouTube, LinkedIn, programmatic DSPs, and verified influencer networks.",
    activities: [
      "High-Converting Landing Page Setup",
      "Dynamic Creative Variations Launch",
      "Creator Content Production & Whitelisting",
      "Cross-Platform Campaign Activation",
    ],
  },
  {
    step: "Step 04",
    number: "04",
    title: "Optimize",
    tagline: "Continuous Iteration & Scale",
    description:
      "Using rigorous daily data analytics, we prune underperforming variants, scale winning ad sets, refine audience segments, and consistently drive down CAC.",
    activities: [
      "A/B & Multivariate Creative Testing",
      "Bid & Placement Algorithmic Tuning",
      "LTV & Retention Feedback Loops",
      "Weekly Strategic Growth Sprints",
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "digital-marketing-advertising",
    slug: "digital-marketing-advertising",
    title: "Digital Marketing & Advertising",
    tagline: "End-to-End Strategic Brand & Acquisition Campaigns",
    description:
      "Comprehensive full-funnel digital advertising engineered to elevate brand prestige while delivering measurable customer acquisition across search, social, and programmatic channels.",
    iconName: "Megaphone",
    deliverables: [
      "Full-Funnel Campaign Architecture",
      "Cross-Platform Paid Media Buying",
      "Audience Segmentation & Persona Mapping",
      "Creative Concepting & Production",
    ],
    keyBenefits: [
      "Consistent Brand Presence Across All Digital Touchpoints",
      "Higher Brand Recall & Consideration Rates",
      "Unified Performance & Brand Equity Tracking",
    ],
  },
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "ROI-Focused Paid Media & Conversion Scaling",
    description:
      "Data-driven paid media execution on Meta, Google Ads, YouTube, and LinkedIn designed to optimize Customer Acquisition Cost (CAC) and maximize Return on Ad Spend (ROAS).",
    iconName: "TrendingUp",
    deliverables: [
      "Search, Display & Video Ad Management",
      "Algorithmic Bid & Budget Optimization",
      "Conversion Rate Optimization (CRO)",
      "Server-Side Attribution & Conversion APIs",
    ],
    keyBenefits: [
      "Reduced Cost Per Acquisition (CPA)",
      "Transparent Real-Time Dashboard Reporting",
      "Scalable Ad Spend with Predictable Unit Economics",
    ],
  },
  {
    id: "influencer-marketing",
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    tagline: "High-Impact Creator Collaborations & Whitelisting",
    description:
      "End-to-end influencer campaigns that connect your brand with niche industry voices, top educators, tech creators, and verified keynote tastemakers with proven engagement.",
    iconName: "Users",
    deliverables: [
      "Vetted Influencer Sourcing & Negotiations",
      "Authentic Scripting & Brief Alignment",
      "Dark Posting & Paid Whitelisting on Meta/YT",
      "Engagement, Reach & Sales Tracking",
    ],
    keyBenefits: [
      "Unmatched Social Proof & Organic Credibility",
      "High-Performing Authentic Creative Assets",
      "Amplified Conversion Via Whitelisted Ads",
    ],
  },
  {
    id: "brand-promotions",
    slug: "brand-promotions",
    title: "Brand Promotions",
    tagline: "Strategic Brand Positioning & Product Launches",
    description:
      "High-energy promotional campaigns, seasonal launches, and strategic co-branding activations designed to capture industry spotlight and drive immediate customer participation.",
    iconName: "Sparkles",
    deliverables: [
      "Product Launch Campaign Frameworks",
      "Interactive Digital Contests & Giveaways",
      "Limited-Time Promotional Landing Pages",
      "PR & Digital Media Amplification",
    ],
    keyBenefits: [
      "Rapid Surge in Brand Buzz & Search Interest",
      "Direct Spikes in Immediate Revenue & Signups",
      "Extended Earned Media Impressions",
    ],
  },
  {
    id: "lead-generation",
    slug: "lead-generation",
    title: "Lead Generation",
    tagline: "High-Intent Qualified B2B & B2C Pipeline Generation",
    description:
      "Laser-targeted lead acquisition engines that capture qualified prospects with high purchase intent through optimized lead magnets, quizzes, and automated qualification funnels.",
    iconName: "Target",
    deliverables: [
      "Interactive Lead Capture Funnels & Landing Pages",
      "Dynamic Instant Forms on Meta & LinkedIn",
      "Automated CRM & WhatsApp Lead Routing",
      "Prospect Validation & Spam Filtering",
    ],
    keyBenefits: [
      "Ready-to-Close Inbound Sales Opportunities",
      "Zero Lead Leakage with Instant Webhook Relays",
      "Lower Cost Per Qualified Lead (CPQL)",
    ],
  },
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Engaging Social Content, Distribution & Community Growth",
    description:
      "Omnichannel organic and paid social strategies that convert passive scrollers into passionate brand advocates across Instagram, LinkedIn, YouTube, and X.",
    iconName: "Share2",
    deliverables: [
      "Social Content Strategy & Content Calendar",
      "Short-Form Video Production (Reels, Shorts)",
      "Community Engagement & Response Protocols",
      "Social Listening & Sentiment Analysis",
    ],
    keyBenefits: [
      "Organic Following Growth with Relevant Demographics",
      "Higher Daily Brand Touchpoints & Community Loyalty",
      "Viral-Ready Content Formats Tailored to Algorithms",
    ],
  },
  {
    id: "content-marketing",
    slug: "content-marketing",
    title: "Content Marketing",
    tagline: "Compelling Storytelling & High-Value Authority Assets",
    description:
      "Strategic content creation that positions your brand as an undeniable market leader through educational articles, case study decks, whitepapers, and video narratives.",
    iconName: "FileText",
    deliverables: [
      "Thought Leadership Articles & Guides",
      "Brand Storytelling Video Scripts",
      "Lead Magnets, Ebooks & Whitepapers",
      "Interactive Infographics & Micro-Assets",
    ],
    keyBenefits: [
      "Compounding Long-Term Organic Authority",
      "Educated Buyers with Shorter Sales Cycles",
      "High-Value Retargeting Fuel for Ad Campaigns",
    ],
  },
  {
    id: "multi-platform-campaign-management",
    slug: "multi-platform-campaign-management",
    title: "Multi-Platform Campaign Management",
    tagline: "Unified Cross-Channel Orchestration & Attribution",
    description:
      "Centralized media orchestration ensuring cohesive messaging, synced bidding schedules, and unified attribution across Google, Meta, Programmatic, OTT, and Video networks.",
    iconName: "Layers",
    deliverables: [
      "Synchronized Cross-Channel Scheduling",
      "Unified Attribution & Tracking Dashboards",
      "Creative Dynamic Retargeting Cascades",
      "Cross-Platform Budget Rebalancing",
    ],
    keyBenefits: [
      "No Cannibalization Across Ad Networks",
      "Maximum Frequency Optimization & Ad Fatigue Reduction",
      "Holistic Executive Reporting & Transparent CAC",
    ],
  },
  {
    id: "education-edtech-marketing",
    slug: "education-edtech-marketing",
    title: "Education & EdTech Marketing",
    tagline: "Specialized Student Enrollment & Educational Funnels",
    description:
      "Deep-domain educational marketing that drives course enrollments, entrance exam preparations, and higher education degree applications for India's leading EdTech giants.",
    iconName: "GraduationCap",
    deliverables: [
      "Webinar & Masterclass Registration Funnels",
      "Entrance Exam & Scholarship Test Campaigns",
      "Parent & Student Segmented Ad Variations",
      "Counselor Calling & CRM Telephony Integration",
    ],
    keyBenefits: [
      "Proven Experience with Leaders like ALLEN, PW, & Unacademy",
      "Lower Cost Per Application (CPA)",
      "High Student Retention & Batch Fill Rates",
    ],
  },
  {
    id: "campaign-strategy-media-planning",
    slug: "campaign-strategy-media-planning",
    title: "Campaign Strategy & Media Planning",
    tagline: "Scientific Media Allocation & Market Forecasting",
    description:
      "Rigorous media planning that ensures every single rupee of your advertising budget is allocated to the highest-yielding platforms, time slots, and creative formats.",
    iconName: "Compass",
    deliverables: [
      "Media Consumption & Competitor Spend Benchmarks",
      "Quarterly & Annual Growth Flighting Schedules",
      "Predictive CAC & LTV Scenario Modeling",
      "Post-Campaign Deep-Dive Incrementality Studies",
    ],
    keyBenefits: [
      "Elimination of Wasted Ad Spend",
      "Clear Milestones with Guaranteed Media Inventory",
      "Board-Ready Executive Financial Justifications",
    ],
  },
];

export const industriesData: IndustryItem[] = [
  {
    id: "edtech-higher-education",
    title: "EdTech & Higher Education",
    description:
      "Scalable student acquisition, webinar funnels, entrance coaching promotions, and degree enrollments for leading institutes and online learning platforms.",
    iconName: "GraduationCap",
    highlights: [
      "Counseling & Lead Qualification Automation",
      "Parent & Student Targeted Meta/Google Campaigns",
      "Masterclass & Scholarship Drive Mechanics",
    ],
  },
  {
    id: "d2c-consumer-brands",
    title: "D2C & Consumer Brands",
    description:
      "High-velocity e-commerce performance marketing, dynamic retargeting, unboxing creator collaborations, and ROAS-focused seasonal shopping campaigns.",
    iconName: "ShoppingBag",
    highlights: [
      "Catalog Sales & Advantage+ Meta Scaling",
      "Creator UGC Ad Production Pipeline",
      "Post-Purchase Upsell & Retention Flows",
    ],
  },
  {
    id: "fintech-bfsi",
    title: "FinTech & BFSI",
    description:
      "Compliance-friendly, trust-building acquisition campaigns for investment platforms, insurance, lending apps, and neo-banking applications.",
    iconName: "ShieldCheck",
    highlights: [
      "High-Security Conversion Tracking & Postback Setup",
      "Educational Creative Overcoming Skepticism",
      "Strict Financial Ad Policy Compliance",
    ],
  },
  {
    id: "b2b-saas-enterprise",
    title: "B2B SaaS & Enterprise",
    description:
      "Account-Based Marketing (ABM), LinkedIn sponsored content, and high-intent demo booking pipelines targeting enterprise CXOs and decision-makers.",
    iconName: "Briefcase",
    highlights: [
      "Account-Based Marketing & IP Reverse Lookup",
      "In-Depth Case Study & ROI Whitepaper Distribution",
      "Demo Booking Calendar Integration Funnels",
    ],
  },
  {
    id: "health-wellness",
    title: "HealthTech & Wellness",
    description:
      "Empathetic, credibility-focused patient and consumer funnels for telehealth services, diagnostic labs, fitness subscriptions, and wellness products.",
    iconName: "Activity",
    highlights: [
      "Doctor & Expert Endorsement Formats",
      "Hyper-Local Clinic & Service Center Campaigns",
      "Symptom-to-Solution Search Intent Targeting",
    ],
  },
  {
    id: "gaming-app-growth",
    title: "Mobile Apps & Gaming",
    description:
      "App Install campaigns (Google UAC, Meta App Promotions, Apple Search Ads) optimizing for Day 1/Day 7 retention and in-app purchase events.",
    iconName: "Smartphone",
    highlights: [
      "SKAdNetwork & MMP Deep Linking Setup",
      "Playable & Interactive Video Creatives",
      "Post-Install Purchase & Event Optimization",
    ],
  },
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "allen-digital-enrollments",
    slug: "allen-digital-enrollments",
    client: "ALLEN Digital",
    industry: "EdTech & Competitive Exams",
    title: "Scaling Digital NEET/JEE Batch Registrations by 320% with Precision Omnichannel Acquisition",
    metrics: [
      { label: "Increase in Enquiries", value: "+320%" },
      { label: "Reduction in CPA", value: "-44%" },
      { label: "Blended ROAS", value: "4.8x" },
    ],
    summary:
      "How RMS Ads engineered a localized parent-student multi-platform campaign for ALLEN Digital, generating over 180,000 qualified admissions enquiries within one academic enrollment season.",
    challenge:
      "ALLEN Digital needed to rapidly scale registrations for their national live online programs across tier-1 and tier-2 Indian cities while maintaining strict lead quality for their nationwide admissions counseling team.",
    strategy:
      "Deployed audience segmentation separating students (aspirational, doubt-solving YouTube & Instagram Reels) from parents (trust, faculty legacy, scholarship benefits on Google Search and Meta). Integrated real-time lead scoring webhooks to immediately dispatch hot leads to academic advisors within 90 seconds.",
    results: [
      "180,000+ verified student applications generated over 90 days",
      "Cost per qualified application dropped from ₹340 to ₹190",
      "94% counselor satisfaction score on inbound lead responsiveness",
    ],
    tags: ["EdTech", "Google Ads", "Meta Ads", "Lead Generation"],
  },
  {
    id: "scaler-school-technology",
    slug: "scaler-school-technology",
    client: "Scaler School of Technology",
    industry: "Higher Education & Tech",
    title: "Driving 14,000+ Entrance Test Applications for Elite 4-Year UG Computer Science Degree",
    metrics: [
      { label: "Exam Applications", value: "14,200+" },
      { label: "Application Conversion Rate", value: "8.6%" },
      { label: "Qualified Test Takers", value: "82%" },
    ],
    summary:
      "RMS Ads executed an authority-building creator whitelisting campaign and high-intent search strategy for Scaler School of Technology's NSET entrance exam.",
    challenge:
      "As a modern alternative to traditional tier-1 engineering colleges, Scaler needed to convince discerning high-achieving high school STEM graduates and their parents of the program's elite curriculum, industry faculty, and guaranteed placement outcomes.",
    strategy:
      "Collaborated with top coding educators, tech YouTubers, and alumni to produce behind-the-scenes campus tours and day-in-the-life features. Combined this with remarketing campaigns detailing syllabus comparisons against legacy universities.",
    results: [
      "Over 14,200 completed NSET applications secured",
      "Video completion rate exceeded 64% on YouTube in-stream placements",
      "Attracted top 1% percentile percentile candidates nationwide",
    ],
    tags: ["Higher Education", "Influencer Whitelisting", "YouTube Ads"],
  },
  {
    id: "physics-wallah-scale",
    slug: "physics-wallah-scale",
    client: "Physics Wallah (PW)",
    industry: "Affordable EdTech",
    title: "Omnichannel Promotion for Nationwide Foundation Batches & Offline Vidyapeeth Expansion",
    metrics: [
      { label: "Total Impressions", value: "95M+" },
      { label: "Walk-in Footfall Growth", value: "+210%" },
      { label: "App Installs", value: "450K+" },
    ],
    summary:
      "Executed hyper-local multi-platform awareness and performance drives supporting offline center rollouts and nationwide app downloads.",
    challenge:
      "Simultaneously driving massive brand affinity for offline Vidyapeeth coaching centers while maintaining record-low cost-per-install (CPI) for the digital learning app.",
    strategy:
      "Implemented geo-fenced mobile display and YouTube campaigns within a 15km radius of newly launched Vidyapeeth centers. Combined with celebratory launch event livestreams and instant voucher claim funnels on Meta.",
    results: [
      "Full batch capacity achieved across 35 offline centers in under 3 weeks",
      "Average cost per app install maintained under ₹11 across Meta & Google UAC",
      "Zero drop in retention metrics across enrolled cohorts",
    ],
    tags: ["Multi-Platform", "Hyper-Local", "App Install", "EdTech"],
  },
];

export const whyChooseReasons = [
  {
    title: "End-to-End 360° Architecture",
    description:
      "We don't isolate channels. We unify search, social, creator networks, landing pages, and automated lead routing into one coherent compounding revenue machine.",
    iconName: "Maximize2",
  },
  {
    title: "Proven EdTech & High-Growth Pedigree",
    description:
      "Trusted by India's biggest educational and tech titans including ALLEN, Physics Wallah, Scaler, and Careers360 to deliver record-breaking student enrollments.",
    iconName: "Award",
  },
  {
    title: "Unit Economics Obsession",
    description:
      "Vanity impressions don't pay bills. We measure our success on CAC, LTV:CAC ratios, pipeline velocity, and verifiable bottom-line revenue expansion.",
    iconName: "TrendingUp",
  },
  {
    title: "High-Speed Creative Iteration",
    description:
      "Our in-house design and copywriting lab churns out 20+ fresh creative variations weekly to battle ad fatigue and keep conversion rates climbing.",
    iconName: "Zap",
  },
  {
    title: "Transparent Real-Time Analytics",
    description:
      "No hidden markups or confusing monthly PDF summaries. You get direct live access to granular performance dashboards and weekly strategic war rooms.",
    iconName: "BarChart3",
  },
  {
    title: "Dedicated Senior Growth Directors",
    description:
      "You work directly with battle-tested digital marketing strategists who treat your ad spend with the same rigor as their own capital.",
    iconName: "CheckCircle",
  },
];

export const clientLogosList: ClientLogo[] = [
  {
    id: "allen",
    name: "ALLEN",
    image_url: "/clients/allen.svg",
    fallbacks: [
      "https://mma.prnewswire.com/media/1808523/Allen_Career_Institute_logo_new.jpg?p=facebook",
      "https://commons.wikimedia.org/wiki/Special:FilePath/ALLEN_Career_Institute_logo.svg",
    ],
    domain: "https://www.allen.ac.in/",
    category: "Education & Test Prep",
  },
  {
    id: "careers360",
    name: "Careers360",
    image_url: "/clients/careers360.svg",
    fallbacks: [
      "https://www.manipalonline.co/assets/img/course/Career360-1.jpg.webp",
      "https://cdn.brandfetch.io/idAnQRl0T7/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1771587547559",
    ],
    domain: "https://www.careers360.com/",
    category: "Higher Education Portal",
  },
  {
    id: "scaler",
    name: "Scaler School of Technology",
    image_url: "/clients/scaler.svg",
    fallbacks: [
      "https://s3-ap-southeast-1.amazonaws.com/ghost-production-blog/2023/10/Scaler-UG_Logo-Color.png",
    ],
    domain: "https://www.scaler.com/school-of-technology/",
    category: "Tech & Higher Education",
  },
  {
    id: "vedam",
    name: "Vedam School of Technology",
    image_url: "/clients/vedam.svg",
    fallbacks: [
      "https://bsmedia.business-standard.com/_media/bs/img/article/2026-01/30/full/20260130183549.jpg",
      "https://d13loartjoc1yn.cloudfront.net/upload/exam/1741778686vegam_logo.webp",
    ],
    domain: "https://www.vedam.org/",
    category: "Higher Education",
  },
  {
    id: "newton-school",
    name: "Newton School of Technology",
    image_url: "/clients/newton-school.svg",
    fallbacks: [
      "https://bsmedia.business-standard.com/_media/bs/img/article/2025-04/09/full/20250409174004.jpg",
    ],
    domain: "https://www.newtonschool.co/",
    category: "Technology Degree",
  },
  {
    id: "unacademy",
    name: "Unacademy",
    image_url: "/clients/unacademy.svg",
    fallbacks: [
      "https://unacademy.com/static/images/logo.svg",
      "https://i.pinimg.com/736x/8e/bd/2c/8ebd2cab46b770b9b9e9ea5f73a78dea.jpg",
    ],
    domain: "https://unacademy.com/",
    category: "Online Learning",
  },
  {
    id: "physics-wallah",
    name: "Physics Wallah (PW)",
    image_url: "/clients/physics-wallah.svg",
    fallbacks: [
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Physics_wallah_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/512px-Physics_wallah_logo.svg.png",
    ],
    domain: "https://www.pw.live/",
    category: "EdTech & Test Prep",
  },
  {
    id: "pw-ioi",
    name: "PW Institute of Innovation (PW IOI)",
    image_url: "/clients/pw-ioi.svg",
    fallbacks: [
      "https://www.pwioi.com/logo.png",
    ],
    domain: "https://www.pwioi.com/",
    category: "Innovation & Technology",
  },
  {
    id: "allen-digital",
    name: "ALLEN Digital",
    image_url: "/clients/allen-digital.svg",
    fallbacks: [
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-01/30/full/20230130144224.jpg",
    ],
    domain: "https://allen.in/",
    category: "Digital Learning",
  },
  {
    id: "careerwill",
    name: "Careerwill",
    image_url: "/clients/careerwill.svg",
    fallbacks: [
      "https://images.yourstory.com/cs/images/companies/7370e5c971cb-2BDAC4C85C884801BF66F7A0DB120370-1625725447433.png?ar=1%3A1&fill=solid&fill-color=fff&fm=auto&format=auto&mode=fill&q=85&w=1920",
    ],
    domain: "https://careerwill.com/",
    category: "Government Job Prep",
  },
];

