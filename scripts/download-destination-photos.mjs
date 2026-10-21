import fs from "fs";
import path from "path";
import sharp from "sharp";

const OUT_DIR = path.resolve("./public/images/destinations/photos");

const destinations = [
  {
    name: "london",
    url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80&fit=crop",
  },
  {
    name: "paris",
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80&fit=crop",
  },
  {
    name: "tokyo",
    url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80&fit=crop", // Chureito Pagoda & Mt Fuji
  },
  {
    name: "sydney",
    url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=80&fit=crop", // Sydney Opera House
  },
  {
    name: "singapore",
    url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80&fit=crop", // Marina Bay Sands
  },
  {
    name: "dubai",
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&q=80&fit=crop", // Burj Khalifa & Downtown
  },
  {
    name: "rome",
    url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80&fit=crop", // Colosseum
  },
  {
    name: "germany",
    url: "https://images.unsplash.com/photo-1527866512907-a35a62a7f673?w=400&q=80&fit=crop", // Classical European architecture / Germany
  },
  {
    name: "doha",
    url: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=400&q=80&fit=crop", // Middle East modern architecture / skyline
  },
  {
    name: "barcelona",
    url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&q=80&fit=crop", // Spain architecture
  },
  {
    name: "alps",
    url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&q=80&fit=crop", // Swiss alpine scenic
  },
];

async function run() {
  for (const item of destinations) {
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.warn(`Failed: ${item.name} (${res.status})`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      const outPath = path.join(OUT_DIR, `${item.name}.webp`);
      await sharp(buffer)
        .resize(260, 260, { fit: "cover", position: "center" })
        .webp({ quality: 85 })
        .toFile(outPath);
      console.log(`Success: ${item.name}`);
    } catch (e) {
      console.error(`Error on ${item.name}:`, e.message);
    }
  }
}

run();
