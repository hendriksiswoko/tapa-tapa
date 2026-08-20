"use client";

import { ShieldCheck, Repeat, BadgeCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import ImageCard from "@/components/ui/ImageCard";
import { whatsappHref } from "@/data/site";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";

const trustIcons = [BadgeCheck, Repeat, ShieldCheck];

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="relative overflow-hidden bg-background-soft">
      <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            {t.eyebrow}
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.25rem]">
            {t.title}
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-foreground-secondary sm:text-lg">
            {t.description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappHref} variant="primary">
              {t.primaryCta}
            </Button>
            <Button href="#products" variant="secondary">
              {t.secondaryCta}
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4">
            {t.trust.map((label, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground/80">{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 -z-10 h-full w-full rounded-[2rem] bg-accent/10 sm:-right-8 sm:-top-8" />
          <ImageCard
            src="/images/hero/hero-charcoal-briquette.webp"
            alt="Premium coconut charcoal briquettes"
            placeholderLabel="Add hero product photo"
            priority
            className="aspect-[4/5] w-full shadow-2xl shadow-charcoal-900/10 sm:aspect-[5/4]"
          />
          <div className="absolute -bottom-6 left-6 hidden rounded-2xl bg-white px-5 py-4 shadow-xl shadow-charcoal-900/10 sm:flex sm:items-center sm:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft">
              <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.floatingCardTitle}</p>
              <p className="text-xs text-foreground-secondary">{t.floatingCardSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
