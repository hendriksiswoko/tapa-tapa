"use client";

import { Boxes, PackageOpen, Ship, Globe2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageCard from "@/components/ui/ImageCard";
import FadeIn from "@/components/ui/FadeIn";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";

const pointIcons = [Boxes, PackageOpen, PackageOpen, Ship, Globe2];

export default function Packaging() {
  const { lang } = useLanguage();
  const t = translations[lang].packaging;

  return (
    <section className="bg-background-soft py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <div className="flex flex-col items-start gap-6">
            <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {t.points.map((label, i) => {
                const Icon = pointIcons[i];
                return (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                      <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-foreground/85">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <ImageCard
            src="/images/packaging/packaging-container-shipment.webp"
            alt="Container shipment and export packaging"
            placeholderLabel={`${t.imagePlaceholder} — public/images/packaging/packaging-container-shipment.webp`}
            className="aspect-[4/3] w-full"
          />
        </FadeIn>
      </div>
    </section>
  );
}
