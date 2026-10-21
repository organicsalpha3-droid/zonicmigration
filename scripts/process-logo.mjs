import sharp from "sharp";
import fs from "fs";
import path from "path";

const SOURCE_PATH = "C:/Users/sana4/.gemini/antigravity/brain/b84bbe9e-6ad0-4b69-9835-58135090f8f3/.user_uploaded/media_1792231340137.png";
const OUT_DIR = path.resolve("./public/images");

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function processLogo() {
  console.log("Reading original logo from:", SOURCE_PATH);
  const image = sharp(SOURCE_PATH);
  const metadata = await image.metadata();
  const { width, height } = metadata;
  
  // Get raw RGBA buffer
  const rawBuffer = await image.ensureAlpha().raw().toBuffer();
  const totalPixels = width * height;
  const outputBuffer = Buffer.alloc(totalPixels * 4);

  // Background removal with anti-aliasing
  // The original background is pure/near-pure white (RGB ~ 255, 255, 255)
  for (let i = 0; i < totalPixels; i++) {
    const idx = i * 4;
    const r = rawBuffer[idx];
    const g = rawBuffer[idx + 1];
    const b = rawBuffer[idx + 2];
    const a = rawBuffer[idx + 3];

    // Determine how close the pixel is to pure white
    // In white areas: r ~ 255, g ~ 255, b ~ 255
    const minC = Math.min(r, g, b);
    const maxC = Math.max(r, g, b);
    
    if (minC >= 250) {
      // Pure white background -> fully transparent
      outputBuffer[idx] = 0;
      outputBuffer[idx + 1] = 0;
      outputBuffer[idx + 2] = 0;
      outputBuffer[idx + 3] = 0;
    } else if (minC > 215) {
      // Soft transition edge: antialiasing to prevent halo
      // Linear falloff from 215 to 250
      const factor = (250 - minC) / (250 - 215);
      const alpha = Math.min(255, Math.max(0, Math.round(factor * 255)));
      
      // Defringe: unblend the white component
      const unblendR = Math.max(0, Math.min(255, Math.round((r - (1 - factor) * 255) / factor)));
      const unblendG = Math.max(0, Math.min(255, Math.round((g - (1 - factor) * 255) / factor)));
      const unblendB = Math.max(0, Math.min(255, Math.round((b - (1 - factor) * 255) / factor)));

      outputBuffer[idx] = unblendR;
      outputBuffer[idx + 1] = unblendG;
      outputBuffer[idx + 2] = unblendB;
      outputBuffer[idx + 3] = alpha;
    } else {
      // Solid emblem content - retain original colors with full opacity
      outputBuffer[idx] = r;
      outputBuffer[idx + 1] = g;
      outputBuffer[idx + 2] = b;
      outputBuffer[idx + 3] = 255;
    }
  }

  // Create trimmed transparent emblem
  const transparentMark = sharp(outputBuffer, {
    raw: {
      width,
      height,
      channels: 4,
    },
  }).trim();

  const markPath = path.join(OUT_DIR, "logo-mark.png");
  await transparentMark.png().toFile(markPath);
  console.log("Saved transparent logo mark to:", markPath);

  // Resize mark for header/footer display
  const headerMarkPath = path.join(OUT_DIR, "logo-mark-header.png");
  await sharp(markPath)
    .resize({ height: 120, fit: "contain" })
    .png()
    .toFile(headerMarkPath);

  // Copy as logo.png as well
  const logoPath = path.join(OUT_DIR, "logo.png");
  await sharp(markPath)
    .resize({ height: 160, fit: "contain" })
    .png()
    .toFile(logoPath);

  console.log("Logo processing completed successfully!");
}

processLogo().catch((err) => {
  console.error("Error processing logo:", err);
  process.exit(1);
});
