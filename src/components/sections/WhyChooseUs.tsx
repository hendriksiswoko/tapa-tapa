"use client";

import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { whyChooseUs } from "@/data/site";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";
import type { LucideIcon } from "lucide-react";

export default function WhyChooseUs() {
  const { lang } = useLanguage();
  const t = translations[lang].whyChooseUs;

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page flex flex-col gap-12">
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] ?? Icons.Circle) as LucideIcon;
            return (
              <FadeIn key={item.icon} delay={i * 80}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border-subtle p-7 transition-colors hover:border-accent/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.title[lang]}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-secondary">
                    {item.description[lang]}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
