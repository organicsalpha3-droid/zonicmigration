import fs from "fs";
import path from "path";

const DEST_DIR = path.resolve("./public/images/destinations");
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

// Generate circular flag SVGs with exact national colors
const flags = {
  gb: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-gb"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-gb)">
      <rect width="100" height="100" fill="#012169"/>
      <path d="M0 0 L100 100 M100 0 L0 100" stroke="#FFFFFF" stroke-width="16"/>
      <path d="M0 0 L100 100 M100 0 L0 100" stroke="#C8102E" stroke-width="10"/>
      <path d="M50 0 V100 M0 50 H100" stroke="#FFFFFF" stroke-width="26"/>
      <path d="M50 0 V100 M0 50 H100" stroke="#C8102E" stroke-width="16"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  de: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-de"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-de)">
      <rect width="100" height="33.3" y="0" fill="#000000"/>
      <rect width="100" height="33.3" y="33.3" fill="#DD0000"/>
      <rect width="100" height="33.4" y="66.6" fill="#FFCE00"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  fr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-fr"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-fr)">
      <rect width="33.3" height="100" x="0" fill="#002395"/>
      <rect width="33.3" height="100" x="33.3" fill="#FFFFFF"/>
      <rect width="33.4" height="100" x="66.6" fill="#ED2939"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  qa: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-qa"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-qa)">
      <rect width="100" height="100" fill="#8D1B3D"/>
      <rect width="32" height="100" fill="#FFFFFF"/>
      <polygon points="32,0 42,5.55 32,11.1 42,16.65 32,22.2 42,27.75 32,33.3 42,38.85 32,44.4 42,49.95 32,55.5 42,61.05 32,66.6 42,72.15 32,77.7 42,83.25 32,88.8 42,94.35 32,100" fill="#FFFFFF"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  ae: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-ae"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-ae)">
      <rect width="100" height="33.3" y="0" fill="#00732F"/>
      <rect width="100" height="33.3" y="33.3" fill="#FFFFFF"/>
      <rect width="100" height="33.4" y="66.6" fill="#000000"/>
      <rect width="28" height="100" x="0" fill="#FF0000"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  sa: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-sa"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-sa)">
      <rect width="100" height="100" fill="#006C35"/>
      <path d="M 28 58 L 72 58 M 34 52 L 34 64" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      <text x="50" y="44" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">KSA</text>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  pt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-pt"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-pt)">
      <rect width="40" height="100" fill="#006600"/>
      <rect width="60" height="100" x="40" fill="#FF0000"/>
      <circle cx="40" cy="50" r="16" fill="#FFFF00" stroke="#000000" stroke-width="1"/>
      <rect x="36" y="44" width="8" height="12" fill="#FFFFFF" stroke="#002395" stroke-width="1.5"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  it: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-it"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-it)">
      <rect width="33.3" height="100" x="0" fill="#009246"/>
      <rect width="33.3" height="100" x="33.3" fill="#FFFFFF"/>
      <rect width="33.4" height="100" x="66.6" fill="#CE2B37"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  es: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-es"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-es)">
      <rect width="100" height="25" y="0" fill="#AA151B"/>
      <rect width="100" height="50" y="25" fill="#F1BF00"/>
      <rect width="100" height="25" y="75" fill="#AA151B"/>
      <circle cx="35" cy="50" r="8" fill="#AA151B"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  id: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-id"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-id)">
      <rect width="100" height="50" y="0" fill="#FF0000"/>
      <rect width="100" height="50" y="50" fill="#FFFFFF"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  sg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-sg"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-sg)">
      <rect width="100" height="50" y="0" fill="#ED2939"/>
      <rect width="100" height="50" y="50" fill="#FFFFFF"/>
      <path d="M 24 25 A 10 10 0 1 0 34 38 A 12 12 0 1 1 24 25" fill="#FFFFFF"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  my: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-my"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-my)">
      <rect width="100" height="100" fill="#FFFFFF"/>
      <line x1="0" y1="7" x2="100" y2="7" stroke="#CC0000" stroke-width="7"/>
      <line x1="0" y1="21" x2="100" y2="21" stroke="#CC0000" stroke-width="7"/>
      <line x1="0" y1="35" x2="100" y2="35" stroke="#CC0000" stroke-width="7"/>
      <line x1="0" y1="49" x2="100" y2="49" stroke="#CC0000" stroke-width="7"/>
      <line x1="0" y1="63" x2="100" y2="63" stroke="#CC0000" stroke-width="7"/>
      <line x1="0" y1="77" x2="100" y2="77" stroke="#CC0000" stroke-width="7"/>
      <line x1="0" y1="91" x2="100" y2="91" stroke="#CC0000" stroke-width="7"/>
      <rect width="50" height="50" fill="#000066"/>
      <circle cx="25" cy="25" r="14" fill="#FFCC00"/>
      <circle cx="29" cy="25" r="12" fill="#000066"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  jp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-jp"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-jp)">
      <rect width="100" height="100" fill="#FFFFFF"/>
      <circle cx="50" cy="50" r="28" fill="#BC002D"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  au: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-au"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-au)">
      <rect width="100" height="100" fill="#00008B"/>
      <!-- Small canton Union Jack -->
      <g transform="scale(0.48)">
        <rect width="100" height="100" fill="#012169"/>
        <path d="M0 0 L100 100 M100 0 L0 100" stroke="#FFFFFF" stroke-width="16"/>
        <path d="M0 0 L100 100 M100 0 L0 100" stroke="#C8102E" stroke-width="10"/>
        <path d="M50 0 V100 M0 50 H100" stroke="#FFFFFF" stroke-width="26"/>
        <path d="M50 0 V100 M0 50 H100" stroke="#C8102E" stroke-width="16"/>
      </g>
      <!-- Commonwealth star -->
      <circle cx="25" cy="72" r="9" fill="#FFFFFF"/>
      <!-- Southern Cross stars -->
      <circle cx="75" cy="25" r="4.5" fill="#FFFFFF"/>
      <circle cx="85" cy="45" r="4.5" fill="#FFFFFF"/>
      <circle cx="72" cy="78" r="4.5" fill="#FFFFFF"/>
      <circle cx="62" cy="54" r="4.5" fill="#FFFFFF"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,

  nz: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <clipPath id="circle-nz"><circle cx="50" cy="50" r="48"/></clipPath>
    <g clip-path="url(#circle-nz)">
      <rect width="100" height="100" fill="#00247D"/>
      <g transform="scale(0.48)">
        <rect width="100" height="100" fill="#012169"/>
        <path d="M0 0 L100 100 M100 0 L0 100" stroke="#FFFFFF" stroke-width="16"/>
        <path d="M0 0 L100 100 M100 0 L0 100" stroke="#C8102E" stroke-width="10"/>
        <path d="M50 0 V100 M0 50 H100" stroke="#FFFFFF" stroke-width="26"/>
        <path d="M50 0 V100 M0 50 H100" stroke="#C8102E" stroke-width="16"/>
      </g>
      <!-- Red stars with white borders -->
      <circle cx="75" cy="25" r="5" fill="#CC142B" stroke="#FFFFFF" stroke-width="1.5"/>
      <circle cx="84" cy="45" r="4.5" fill="#CC142B" stroke="#FFFFFF" stroke-width="1.5"/>
      <circle cx="72" cy="78" r="5" fill="#CC142B" stroke="#FFFFFF" stroke-width="1.5"/>
      <circle cx="62" cy="52" r="4" fill="#CC142B" stroke="#FFFFFF" stroke-width="1.5"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#E7EAEC" stroke-width="2"/>
  </svg>`,
};

for (const [code, svg] of Object.entries(flags)) {
  fs.writeFileSync(path.join(DEST_DIR, `${code}.svg`), svg.trim(), "utf-8");
}

console.log("Successfully generated all circular destination flags in:", DEST_DIR);
