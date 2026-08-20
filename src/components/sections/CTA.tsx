"use client";

import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { whatsappHref } from "@/data/site";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";

export default function CTA() {
  const { lang } = useLanguage();
  const t = translations[lang].cta;

  return (
    <section className="bg-charcoal-950 py-20 text-white sm:py-24">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <FadeIn>
          <h2 className="font-display max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            {t.title}
          </h2>
        </FadeIn>
        <FadeIn delay={80}>
          <p className="max-w-xl text-base leading-relaxed text-white/65">{t.description}</p>
        </FadeIn>
        <FadeIn delay={160}>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href={whatsappHref} variant="primary">
              {t.primaryCta}
            </Button>
            <Button href="#contact" variant="outline-light">
              {t.secondaryCta}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
