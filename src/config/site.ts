export interface OfficeLocation {
  id: string;
  name: string;
  type: "Head Office" | "Branch Office";
  country: string;
  city: string;
  addressLines: string[];
  note?: string;
  isHeadquarters: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  bestFor: string;
  iconName: string;
}

export interface DestinationItem {
  id: string;
  country: string;
  region: "Gulf & Middle East" | "Europe" | "Asia" | "Oceania";
  code: string; // ISO 2-letter or badge
  flagEmoji: string;
  popularVisas: string[];
  overview: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  actionLabel: string;
}

export interface PermitSample {
  id: string;
  title: string;
  country: string;
  permitType: string;
  redactedNotice: string;
  statusBadge: string;
  imageFileName: string;
  aspect: string;
}

export const siteConfig = {
  name: "Zonic Migration",
  tagline: "Your Global Journey. Guided with Confidence.",
  headline: "Your Journey to New Opportunities Starts Here.",
  supportingText:
    "Personalized immigration guidance to help you understand your options and prepare for your next step.",
  metaDescription:
    "Zonic Migration is a premier immigration consultancy offering personalized guidance for work permits, skilled worker immigration, study visas, and residency across the UK, Europe, the Gulf, Asia, and Oceania.",
  
  // WhatsApp & Contact Configuration
  whatsApp: {
    phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6287810960554",
    displayNumber: "+62 878-1096-0554",
    directUrl: "https://wa.me/6287810960554",
    defaultMessage:
      "Hello Zonic Migration, I would like to request a free immigration assessment. Please guide me through the next steps.",
  },

  // Official Company Email
  email: "info@zonicmigration.com",

  // Exactly two offices
  offices: [
    {
      id: "uk-hq",
      name: "United Kingdom",
      type: "Head Office",
      country: "United Kingdom",
      city: "London",
      addressLines: ["Central London", "United Kingdom"],
      note: "Global headquarters coordinating UK and European immigration pathways.",
      isHeadquarters: true,
    },
    {
      id: "indonesia-branch",
      name: "Indonesia",
      type: "Branch Office",
      country: "Indonesia",
      city: "Jakarta",
      addressLines: ["Jakarta Metropolitan Area", "Indonesia"],
      note: "Southeast Asia regional operations supporting Asia and Oceania applicants.",
      isHeadquarters: false,
    },
  ] as OfficeLocation[],

  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Destinations", href: "/destinations" },
    { label: "Our Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ],

  // 8 Services as explicitly specified
  services: [
    {
      id: "work-permits",
      title: "Work Permits & Employment Visas",
      shortDesc: "Comprehensive assistance for employer-sponsored work authorizations and overseas job visa routes.",
      fullDesc: "Navigating corporate sponsorships, labor market requirements, and foreign worker authorizations across competitive global markets. We assist clients in gathering verifiable employment proofs, understanding quota systems, and filing compliant submissions.",
      features: ["Sponsorship eligibility review", "Contract and credential alignment", "Employer compliance checklists"],
      bestFor: "Professionals with job offers or seeking sponsored work authorization abroad.",
      iconName: "Briefcase",
    },
    {
      id: "skilled-worker",
      title: "Skilled Worker Immigration",
      shortDesc: "Points-based immigration programs for high-demand qualified specialists and experienced trades.",
      fullDesc: "Assessing qualifications against national shortage lists and points matrices. We help maximize points through validated credentials, official language diagnostics, and career trajectory documentation.",
      features: ["Points matrix calculation", "Occupation classification matching", "Credential evaluation guidance"],
      bestFor: "Engineers, healthcare professionals, tech specialists, and certified tradespeople.",
      iconName: "Award",
    },
    {
      id: "study-visas",
      title: "Study Visas",
      shortDesc: "End-to-end support for international students pursuing higher education at accredited universities.",
      fullDesc: "Guidance on financial proof standards, genuine student requirements, university acceptance compliance, and accompanying dependent rights for world-class academic destinations.",
      features: ["Financial solvency requirement audits", "Genuine student interview prep", "Post-study work rights analysis"],
      bestFor: "Undergraduate and postgraduate students securing global degrees.",
      iconName: "GraduationCap",
    },
    {
      id: "visit-visas",
      title: "Visit & Tourist Visas",
      shortDesc: "Short-term entry permits for tourism, business summits, medical visits, and family reunions.",
      fullDesc: "Structuring clear travel itineraries, substantial home-tie demonstrations, and bank statement proofs to overcome common refusal pitfalls.",
      features: ["Home ties & financial sufficiency documentation", "Sponsor invitation review", "Multi-entry application planning"],
      bestFor: "Vacationers, conference attendees, and family visitors.",
      iconName: "Compass",
    },
    {
      id: "business-investor",
      title: "Business & Investor Immigration",
      shortDesc: "Strategic routes for entrepreneurs, startup innovators, and high-net-worth capital investors.",
      fullDesc: "Aligning your venture with government-endorsed business visa streams, golden visas, and innovation hubs with lawful source-of-funds verification.",
      features: ["Source of funds audit support", "Endorsement body pitch alignment", "Residency via investment consultation"],
      bestFor: "Entrepreneurs, venture founders, and accredited investors.",
      iconName: "TrendingUp",
    },
    {
      id: "family-dependant",
      title: "Family & Dependant Visas",
      shortDesc: "Reunite with your spouse, minor children, or elderly parents in your new country of residence.",
      fullDesc: "Meticulous verification of relationship authenticity, accommodation thresholds, and financial support thresholds required by immigration statutes.",
      features: ["Relationship genuineness portfolio", "Income and accommodation assessments", "Dependent child sponsorship guidelines"],
      bestFor: "Spouses, civil partners, children, and eligible dependents.",
      iconName: "Users",
    },
    {
      id: "permanent-residency",
      title: "Permanent Residency",
      shortDesc: "Long-term settlement pathways offering social security, unrestricted employment, and domestic status.",
      fullDesc: "Step-by-step transition from temporary status to permanent lawful residence. We verify residency day counts, good character standards, and renewal schedules.",
      features: ["Physical presence audit", "Indefinite Leave to Remain / PR filing", "Settlement eligibility roadmaps"],
      bestFor: "Long-term residents ready to make their host country their permanent home.",
      iconName: "Home",
    },
    {
      id: "citizenship-naturalization",
      title: "Citizenship & Naturalization",
      shortDesc: "Final step to full nationality, obtaining a passport, and enjoying unconstrained civic freedoms.",
      fullDesc: "Guiding clients through civic tests, background checks, language requirements, and passport issuance ceremonies.",
      features: ["Naturalization criteria audit", "Dual nationality regulation advisory", "Passport dossier assembly"],
      bestFor: "Permanent residents transitioning to full sovereign citizenship.",
      iconName: "ShieldCheck",
    },
  ] as ServiceItem[],

  // Regional destinations
  destinations: [
    {
      id: "qatar",
      country: "Qatar",
      region: "Gulf & Middle East",
      code: "QA",
      flagEmoji: "🇶🇦",
      popularVisas: ["Work Residence Permit", "Investor Visa", "Family Visit"],
      overview: "Dynamic Arabian Gulf economic center with state-of-the-art infrastructure and commercial growth.",
    },
    {
      id: "uae",
      country: "UAE",
      region: "Gulf & Middle East",
      code: "AE",
      flagEmoji: "🇦🇪",
      popularVisas: ["Green Visa", "Golden Visa 10-Year", "Employment Visa"],
      overview: "World-class commerce, finance, and cosmopolitan living in Dubai and Abu Dhabi.",
    },
    {
      id: "saudi-arabia",
      country: "Saudi Arabia",
      region: "Gulf & Middle East",
      code: "SA",
      flagEmoji: "🇸🇦",
      popularVisas: ["Premium Residency", "Work Visa", "Business Visit"],
      overview: "Vision 2030 initiatives opening historic opportunities across mega-projects and tech sectors.",
    },
    {
      id: "uk",
      country: "United Kingdom",
      region: "Europe",
      code: "GB",
      flagEmoji: "🇬🇧",
      popularVisas: ["Skilled Worker Visa", "Student Visa", "Scale-up / Innovator"],
      overview: "Global financial powerhouse, world-leading universities, and clear settlement routes.",
    },
    {
      id: "germany",
      country: "Germany",
      region: "Europe",
      code: "DE",
      flagEmoji: "🇩🇪",
      popularVisas: ["Opportunity Card (Chancenkarte)", "EU Blue Card", "Skilled Employment"],
      overview: "Europe's largest economy with modern points-based immigration for skilled talent.",
    },
    {
      id: "france",
      country: "France",
      region: "Europe",
      code: "FR",
      flagEmoji: "🇫🇷",
      popularVisas: ["Talent Passport", "Long-Stay Work Visa", "Student Visa"],
      overview: "Rich cultural heritage combined with thriving tech hubs and EU-wide mobility.",
    },
    {
      id: "portugal",
      country: "Portugal",
      region: "Europe",
      code: "PT",
      flagEmoji: "🇵🇹",
      popularVisas: ["D8 Digital Nomad", "D2 Entrepreneur", "D7 Passive Income"],
      overview: "Warm Mediterranean climate, safe living, and attractive European residency pathways.",
    },
    {
      id: "italy",
      country: "Italy",
      region: "Europe",
      code: "IT",
      flagEmoji: "🇮🇹",
      popularVisas: ["Digital Nomad Visa", "Elective Residence", "Self-Employment"],
      overview: "Historic culture, lifestyle, and modern international professional permits.",
    },
    {
      id: "spain",
      country: "Spain",
      region: "Europe",
      code: "ES",
      flagEmoji: "🇪🇸",
      popularVisas: ["Digital Nomad Visa", "Golden Visa", "Non-Lucrative Residence"],
      overview: "High quality of life, EU membership, and dedicated remote worker visas.",
    },
    {
      id: "indonesia",
      country: "Indonesia",
      region: "Asia",
      code: "ID",
      flagEmoji: "🇮🇩",
      popularVisas: ["Second Home Visa", "KITAS Work Permit", "Investor Visa"],
      overview: "Southeast Asia's fastest-growing digital economy and tropical lifestyle hub.",
    },
    {
      id: "singapore",
      country: "Singapore",
      region: "Asia",
      code: "SG",
      flagEmoji: "🇸🇬",
      popularVisas: ["Employment Pass (EP)", "ONE Pass", "EntrePass"],
      overview: "Top-tier Asian financial epicenter known for safety, governance, and business innovation.",
    },
    {
      id: "malaysia",
      country: "Malaysia",
      region: "Asia",
      code: "MY",
      flagEmoji: "🇲🇾",
      popularVisas: ["DE Rantau Nomad Pass", "MM2H", "Employment Pass"],
      overview: "Affordable excellence, strategic location, and business-friendly policies.",
    },
    {
      id: "japan",
      country: "Japan",
      region: "Asia",
      code: "JP",
      flagEmoji: "🇯🇵",
      popularVisas: ["Highly Skilled Professional", "Specified Skilled Worker", "Business Manager"],
      overview: "Advanced technological infrastructure, unparalleled safety, and streamlined talent visas.",
    },
    {
      id: "australia",
      country: "Australia",
      region: "Oceania",
      code: "AU",
      flagEmoji: "🇦🇺",
      popularVisas: ["Subclass 189/190 Skilled", "Employer Sponsored (482)", "Student (500)"],
      overview: "High living standards, multicultural society, and clear points-tested permanent residency.",
    },
    {
      id: "new-zealand",
      country: "New Zealand",
      region: "Oceania",
      code: "NZ",
      flagEmoji: "🇳🇿",
      popularVisas: ["Skilled Migrant Category", "Accredited Employer Work", "Post-Study Work"],
      overview: "Breathtaking landscapes, pristine quality of life, and family-oriented migrant programs.",
    },
  ] as DestinationItem[],

  // 4-Step Process as requested
  processSteps: [
    {
      step: 1,
      title: "Free Assessment",
      subtitle: "Profile & Objective Analysis",
      description: "Understand the client's background, qualifications, and intended destination to establish initial eligibility.",
      actionLabel: "Start Assessment",
    },
    {
      step: 2,
      title: "Consultation",
      subtitle: "Option Mapping & Strategy",
      description: "Discuss realistic options, legal factors, and clear timelines in direct consultation with our advisors.",
      actionLabel: "Discuss Options",
    },
    {
      step: 3,
      title: "Documentation",
      subtitle: "Verification & Portfolio Review",
      description: "Help organize, authenticate, and review every required supporting document to eliminate preventable errors.",
      actionLabel: "Organize Proofs",
    },
    {
      step: 4,
      title: "Application Guidance",
      subtitle: "Submission & Compliance Support",
      description: "Guide the client through the formal application submission with the relevant sovereign authorities.",
      actionLabel: "File Application",
    },
  ] as ProcessStep[],

  // Sample permits for gallery (pre-configured for drop-in image replacement in public/images/permits/)
  permitSamples: [
    {
      id: "permit-uk-skilled",
      title: "UK Skilled Worker Visa",
      country: "United Kingdom",
      permitType: "Tier 2 / Skilled Worker BRP",
      redactedNotice: "Redacted Document Preview",
      statusBadge: "Verified Client File",
      imageFileName: "permit-sample-1.svg",
      aspect: "3/2",
    },
    {
      id: "permit-qatar-work",
      title: "Qatar Work Residence Permit",
      country: "Qatar",
      permitType: "QID Employment Card",
      redactedNotice: "Redacted Document Preview",
      statusBadge: "Verified Client File",
      imageFileName: "permit-sample-2.svg",
      aspect: "3/2",
    },
    {
      id: "permit-germany-bluecard",
      title: "Germany EU Blue Card",
      country: "Germany",
      permitType: "Aufenthaltstitel Fachkraft",
      redactedNotice: "Redacted Document Preview",
      statusBadge: "Verified Client File",
      imageFileName: "permit-sample-3.svg",
      aspect: "3/2",
    },
    {
      id: "permit-uae-employment",
      title: "UAE Employment Residence",
      country: "United Arab Emirates",
      permitType: "Emirates ID Residence Visa",
      redactedNotice: "Redacted Document Preview",
      statusBadge: "Verified Client File",
      imageFileName: "permit-sample-4.svg",
      aspect: "3/2",
    },
    {
      id: "permit-aus-work",
      title: "Australia Subclass 482 Visa",
      country: "Australia",
      permitType: "Temporary Skill Shortage Grant",
      redactedNotice: "Redacted Document Preview",
      statusBadge: "Verified Client File",
      imageFileName: "permit-sample-5.svg",
      aspect: "3/2",
    },
    {
      id: "permit-saudi-iqama",
      title: "Saudi Arabia Work Iqama",
      country: "Saudi Arabia",
      permitType: "Muqeem Employment Residence",
      redactedNotice: "Redacted Document Preview",
      statusBadge: "Verified Client File",
      imageFileName: "permit-sample-6.svg",
      aspect: "3/2",
    },
  ] as PermitSample[],

  legalDisclaimer:
    "Zonic Migration is an independent private immigration consultancy. We provide professional advisory and document preparation guidance. Eligibility and final visa issuance are solely determined by the sovereign immigration authorities of each respective government. We do not issue visas or guarantee approval.",
};

/**
 * Generate official WhatsApp consultation link
 * Supports https://wa.me/6287810960554 or pre-filled queries https://wa.me/6287810960554?text=...
 */
export function getWhatsAppUrl(customMessage?: string): string {
  // Clean phone number (digits only: 6287810960554)
  const phone = siteConfig.whatsApp.phoneNumber.replace(/[^0-9]/g, "");
  
  if (customMessage === "") {
    return `https://wa.me/${phone}`;
  }

  const message = customMessage || siteConfig.whatsApp.defaultMessage;
  if (!message) {
    return `https://wa.me/${phone}`;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
