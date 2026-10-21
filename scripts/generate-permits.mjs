import fs from "fs";
import path from "path";

const PERMIT_DIR = path.resolve("./public/images/permits");
if (!fs.existsSync(PERMIT_DIR)) {
  fs.mkdirSync(PERMIT_DIR, { recursive: true });
}

const permits = [
  {
    fileName: "permit-sample-1.svg",
    country: "UNITED KINGDOM",
    type: "SKILLED WORKER RESIDENCE PERMIT (BRP)",
    auth: "UK Visas & Immigration • Home Office",
    color: "#29333A",
    accent: "#A9C1D0",
    code: "UK-WRK-2024",
  },
  {
    fileName: "permit-sample-2.svg",
    country: "STATE OF QATAR",
    type: "RESIDENCE PERMIT / QID EMPLOYMENT",
    auth: "Ministry of Interior • State of Qatar",
    color: "#29333A",
    accent: "#8CAABF",
    code: "QAT-RES-8821",
  },
  {
    fileName: "permit-sample-3.svg",
    country: "FEDERAL REPUBLIC OF GERMANY",
    type: "EU BLUE CARD • AUFENTHALTSTITEL",
    auth: "Bundesamt für Migration und Flüchtlinge",
    color: "#29333A",
    accent: "#A9C1D0",
    code: "DE-BLC-5091",
  },
  {
    fileName: "permit-sample-4.svg",
    country: "UNITED ARAB EMIRATES",
    type: "EMPLOYMENT RESIDENCE PERMIT",
    auth: "Federal Authority for Identity & Citizenship",
    color: "#29333A",
    accent: "#8CAABF",
    code: "UAE-EMP-4102",
  },
  {
    fileName: "permit-sample-5.svg",
    country: "COMMONWEALTH OF AUSTRALIA",
    type: "TEMPORARY SKILL SHORTAGE (SUBCLASS 482)",
    auth: "Department of Home Affairs",
    color: "#29333A",
    accent: "#A9C1D0",
    code: "AUS-TSS-9934",
  },
  {
    fileName: "permit-sample-6.svg",
    country: "KINGDOM OF SAUDI ARABIA",
    type: "WORK RESIDENCE IQAMA PERMIT",
    auth: "Ministry of Human Resources & Social Development",
    color: "#29333A",
    accent: "#8CAABF",
    code: "KSA-IQM-7319",
  },
];

for (const p of permits) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${p.code}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F7F5F0" />
    </linearGradient>
    <pattern id="grid-${p.code}" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E7EAEC" stroke-width="0.5"/>
    </pattern>
  </defs>

  <!-- Card Background -->
  <rect width="600" height="380" rx="14" fill="url(#bg-${p.code})" stroke="#E7EAEC" stroke-width="2"/>
  <rect width="600" height="380" rx="14" fill="url(#grid-${p.code})" opacity="0.6"/>

  <!-- Top Header Ribbon -->
  <path d="M 0 14 C 0 6.268 6.268 0 14 0 L 586 0 C 593.732 0 600 6.268 600 14 L 600 64 L 0 64 Z" fill="${p.color}"/>
  <rect x="0" y="60" width="600" height="4" fill="${p.accent}"/>

  <!-- Country & Authority Header -->
  <text x="32" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#F7F5F0" letter-spacing="2">${p.country}</text>
  <text x="32" y="50" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="400" fill="#A9C1D0">${p.auth}</text>

  <!-- Document Type Badge -->
  <rect x="380" y="20" width="190" height="26" rx="13" fill="#111417" stroke="#A9C1D0" stroke-width="1"/>
  <text x="475" y="37" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="700" fill="#F7F5F0" text-anchor="middle" letter-spacing="1">OFFICIAL DOCUMENT</text>

  <!-- Left: Redacted Photo Box -->
  <rect x="36" y="90" width="115" height="145" rx="8" fill="#E7EAEC" stroke="#C5D8E4" stroke-width="1.5"/>
  <rect x="53" y="115" width="80" height="70" rx="6" fill="#D6E4ED"/>
  <circle cx="93" cy="140" r="20" fill="#A9C1D0"/>
  <path d="M 68 180 C 68 162 118 162 118 180 Z" fill="#A9C1D0"/>
  <!-- Redacted Photo Stamp -->
  <rect x="42" y="196" width="103" height="22" rx="4" fill="#29333A"/>
  <text x="93" y="211" font-family="system-ui, -apple-system, sans-serif" font-size="8.5" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">PHOTO REDACTED</text>

  <!-- Right: Permit Data Fields (Permanently Redacted) -->
  <g transform="translate(180, 90)">
    <!-- Document Title -->
    <text x="0" y="14" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#29333A">${p.type}</text>

    <!-- Field 1: Holder Name -->
    <text x="0" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="8.5" font-weight="600" fill="#6A8B9E">FULL NAME / HOLDER</text>
    <rect x="0" y="44" width="230" height="14" rx="3" fill="#29333A"/>
    <rect x="240" y="44" width="140" height="14" rx="3" fill="#29333A"/>

    <!-- Field 2: Identifier / Document Number -->
    <text x="0" y="78" font-family="system-ui, -apple-system, sans-serif" font-size="8.5" font-weight="600" fill="#6A8B9E">DOCUMENT REF / ID NO.</text>
    <rect x="0" y="84" width="180" height="14" rx="3" fill="#29333A"/>

    <!-- Field 3: Date of Issue & Validity -->
    <text x="0" y="118" font-family="system-ui, -apple-system, sans-serif" font-size="8.5" font-weight="600" fill="#6A8B9E">VALIDITY STATUS</text>
    <rect x="0" y="124" width="140" height="14" rx="3" fill="#29333A"/>
    <rect x="155" y="124" width="100" height="14" rx="3" fill="#29333A"/>

    <!-- Field 4: Sponsoring Employer -->
    <text x="0" y="158" font-family="system-ui, -apple-system, sans-serif" font-size="8.5" font-weight="600" fill="#6A8B9E">AUTHORIZED SPONSOR / REMARKS</text>
    <rect x="0" y="164" width="280" height="14" rx="3" fill="#29333A"/>
  </g>

  <!-- Redaction Security Seal Stamp -->
  <g transform="translate(485, 175) rotate(-12)">
    <rect x="-65" y="-18" width="130" height="36" rx="6" fill="#F7F5F0" stroke="#7B9EAE" stroke-width="2" stroke-dasharray="4,2"/>
    <text x="0" y="-3" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="700" fill="#29333A" text-anchor="middle" letter-spacing="1">CLIENT PRIVACY</text>
    <text x="0" y="10" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="700" fill="#7B9EAE" text-anchor="middle" letter-spacing="1">PROTECTED</text>
  </g>

  <!-- Bottom Machine Readable Zone (MRZ) Simulated / Barcode Redacted -->
  <g transform="translate(36, 290)">
    <rect x="0" y="0" width="528" height="65" rx="6" fill="#29333A" opacity="0.06"/>
    <line x1="0" y1="0" x2="528" y2="0" stroke="#E7EAEC" stroke-width="1.5"/>
    
    <!-- Redacted Barcode Strip -->
    <rect x="16" y="14" width="120" height="38" rx="4" fill="#29333A"/>
    <text x="76" y="37" font-family="system-ui, -apple-system, sans-serif" font-size="8.5" font-weight="600" fill="#F7F5F0" text-anchor="middle">BARCODE REDACTED</text>

    <!-- MRZ Lines Redacted -->
    <rect x="156" y="16" width="355" height="12" rx="2" fill="#29333A" opacity="0.85"/>
    <rect x="156" y="36" width="310" height="12" rx="2" fill="#29333A" opacity="0.85"/>
  </g>
</svg>`;

  fs.writeFileSync(path.join(PERMIT_DIR, p.fileName), svg.trim(), "utf-8");
}

console.log("Successfully generated 6 permit placeholders in:", PERMIT_DIR);
