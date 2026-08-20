"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ImagePlus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { galleryCategories } from "@/data/site";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";
import type { GalleryImage } from "@/lib/gallery";

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const { lang } = useLanguage();
  const t = translations[lang].gallery;
  const [activeCategory, setActiveCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="container-page flex flex-col gap-10">
        <FadeIn>
          <SectionHeading align="center" eyebrow={t.eyebrow} title={t.title} description={t.description} />
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap justify-center gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-accent text-white"
                    : "bg-background-soft text-foreground/70 hover:bg-accent-soft hover:text-accent"
                }`}
              >
                {t.categories[category]}
              </button>
            ))}
          </div>
        </FadeIn>

        {filtered.length === 0 ? (
          <FadeIn>
            <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-border-subtle py-16 text-center">
              <ImagePlus className="h-6 w-6 text-foreground-secondary/50" aria-hidden="true" />
              <p className="max-w-sm px-4 text-sm text-foreground-secondary">{t.empty}</p>
            </div>
          </FadeIn>
        ) : (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {filtered.map((img, i) => (
              <FadeIn key={img.src} delay={(i % 6) * 60}>
                <button
                  type="button"
                  onClick={() => setLightbox(img.src)}
                  className="block w-full overflow-hidden rounded-2xl border border-border-subtle text-left"
                >
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt[lang]}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/90 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close preview"
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image src={lightbox} alt="Gallery preview" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
