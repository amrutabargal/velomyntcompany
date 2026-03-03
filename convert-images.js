/**
 * Converts jpg, jpeg, and png images to webp format.
 * Scans: src/app/image (or src/image if app/image doesn't exist)
 * Uses sharp package. Does NOT delete original images.
 * Run: npm run convert-images
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGE_DIRS = [
  path.join(__dirname, "src", "app", "image"),
  path.join(__dirname, "src", "image"),
];
const EXTENSIONS = [".jpg", ".jpeg", ".png"];
const WEBP_QUALITY = 80;

function getAllImageFiles(dir, files = []) {
  if (!fs.existsSync(dir)) {
    console.error(`Error: Directory not found: ${dir}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      getAllImageFiles(fullPath, files);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

async function convertToWebp(inputPath) {
  const dir = path.dirname(inputPath);
  const basename = path.basename(inputPath, path.extname(inputPath));
  const outputPath = path.join(dir, `${basename}.webp`);

  await sharp(inputPath)
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);

  return outputPath;
}

async function main() {
  let imageFiles = [];
  let scannedDir = null;

  for (const dir of IMAGE_DIRS) {
    if (fs.existsSync(dir)) {
      scannedDir = dir;
      imageFiles = getAllImageFiles(dir);
      break;
    }
  }

  if (!scannedDir) {
    console.error("Error: No image directory found. Tried: src/app/image, src/image");
    process.exit(1);
  }

  console.log(`Scanning for images in: ${scannedDir}\n`);

  if (imageFiles.length === 0) {
    console.log("No jpg, jpeg, or png files found.");
    return;
  }

  console.log(`Found ${imageFiles.length} image(s) to convert.\n`);

  const converted = [];

  for (const filePath of imageFiles) {
    try {
      const outputPath = await convertToWebp(filePath);
      const relativePath = path.relative(process.cwd(), outputPath);
      converted.push(relativePath);
      console.log(`Converted: ${path.relative(process.cwd(), filePath)} -> ${relativePath}`);
    } catch (err) {
      console.error(`Failed to convert ${filePath}:`, err.message);
    }
  }

  console.log(`\nDone. Converted ${converted.length} file(s) to webp (quality: ${WEBP_QUALITY}).`);
  console.log("Original images were NOT deleted.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
