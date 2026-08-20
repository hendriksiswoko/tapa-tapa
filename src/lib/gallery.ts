import fs from "node:fs";
import path from "node:path";
import { galleryCategories } from "@/data/site";

// Server-only: reads public/images/gallery/<folder>/ so any image dropped in
// by the user shows up automatically on refresh — no code changes needed.

type GalleryCategory = Exclude<(typeof galleryCategories)[number], "All">;

const categoryFolders: Record<GalleryCategory, string> = {
  Production: "production",
  Products: "products",
  Packaging: "packaging",
  Factory: "factory",
  Shipment: "shipment",
};

const IMAGE_EXTENSIONS = new Set([".webp", ".avif", ".jpg", ".jpeg", ".png"]);

function humanize(filename: string) {
  const withoutExt = filename.replace(/\.[^.]+$/, "");
  return withoutExt.replace(/[-_]+/g, " ").trim();
}

export type GalleryImage = {
  category: GalleryCategory;
  src: string;
  alt: { id: string; en: string };
};

export function getGalleryImages(): GalleryImage[] {
  const images: GalleryImage[] = [];

  for (const category of Object.keys(categoryFolders) as GalleryCategory[]) {
    const folder = categoryFolders[category];
    const dirPath = path.join(process.cwd(), "public", "images", "gallery", folder);

    let files: string[] = [];
    try {
      files = fs.readdirSync(dirPath);
    } catch {
      continue; // folder doesn't exist yet
    }

    files
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort()
      .forEach((file) => {
        const label = humanize(file);
        images.push({
          category,
          src: `/images/gallery/${folder}/${file}`,
          alt: { id: label, en: label },
        });
      });
  }

  return images;
}
