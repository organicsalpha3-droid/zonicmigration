import fs from "fs";
import path from "path";
import sharp from "sharp";

const EDITORIAL_DIR = path.resolve("./public/images/editorial");
const SERVICES_DIR = path.resolve("./public/images/services");

for (const d of [EDITORIAL_DIR, SERVICES_DIR]) {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
}

const images = [
  // Editorial images for About & Consultation
  {
    name: "consultation",
    dir: EDITORIAL_DIR,
    url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80&fit=crop",
    width: 600,
    height: 400,
  },
  {
    name: "global-mobility",
    dir: EDITORIAL_DIR,
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&fit=crop",
    width: 600,
    height: 400,
  },
  {
    name: "documentation-audit",
    dir: EDITORIAL_DIR,
    url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&q=80&fit=crop",
    width: 600,
    height: 400,
  },

  // 8 Service card images
  {
    name: "work-permits",
    dir: SERVICES_DIR,
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&fit=crop",
    width: 480,
    height: 280,
  },
  {
    name: "skilled-worker",
    dir: SERVICES_DIR,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&fit=crop",
    width: 480,
    height: 280,
  },
  {
    name: "study-visas",
    dir: SERVICES_DIR,
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop",
    width: 480,
    height: 280,
  },
  {
    name: "visit-visas",
    dir: SERVICES_DIR,
    url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80&fit=crop",
    width: 480,
    height: 280,
  },
  {
    name: "business-investor",
    dir: SERVICES_DIR,
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&fit=crop",
    width: 480,
    height: 280,
  },
  {
    name: "family-dependant",
    dir: SERVICES_DIR,
    url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80&fit=crop",
    width: 480,
    height: 280,
  },
  {
    name: "permanent-residency",
    dir: SERVICES_DIR,
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&fit=crop",
    width: 480,
    height: 280,
  },
  {
    name: "citizenship-naturalization",
    dir: SERVICES_DIR,
    url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80&fit=crop",
    width: 480,
    height: 280,
  },
];

async function run() {
  console.log("Downloading professional editorial & service images...");
  for (const item of images) {
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.warn(`Failed: ${item.name} (${res.status})`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      const outPath = path.join(item.dir, `${item.name}.webp`);
      await sharp(buffer)
        .resize(item.width, item.height, { fit: "cover", position: "center" })
        .webp({ quality: 85 })
        .toFile(outPath);
      console.log(`Saved: ${outPath}`);
    } catch (e) {
      console.error(`Error on ${item.name}:`, e.message);
    }
  }
  console.log("Done downloading editorial & service images!");
}

run();
