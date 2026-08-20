"use client";

import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageCard from "@/components/ui/ImageCard";
import FadeIn from "@/components/ui/FadeIn";
import { qualityChecklist } from "@/data/site";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";

export default function Quality() {
  const { lang } = useLanguage();
  const t = translations[lang].quality;

  return (
    <section id="quality" className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <ImageCard
            src="/images/quality/quality-inspection.webp"
            alt="Quality inspection of coconut charcoal briquettes"
            placeholderLabel={`${t.imagePlaceholder} — public/images/quality/quality-inspection.webp`}
            className="aspect-[4/3] w-full"
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col items-start gap-6">
            <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
            <ul className="flex flex-col gap-3">
              {qualityChecklist[lang].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                    <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
