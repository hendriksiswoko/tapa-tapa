"use client";

import FadeIn from "@/components/ui/FadeIn";
import { stats } from "@/data/site";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";

export default function Stats() {
  const { lang } = useLanguage();
  const t = translations[lang].stats;

  return (
    <section className="border-y border-border-subtle bg-white py-14">
      <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.labelKey} delay={i * 80}>
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="font-display text-3xl font-bold text-accent sm:text-4xl">
                {stat.value ?? "[XX]+"}
              </span>
              <span className="text-sm text-foreground-secondary">
                {t[stat.labelKey as keyof typeof t]}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
