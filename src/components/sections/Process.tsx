"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ImageCard from "@/components/ui/ImageCard";
import FadeIn from "@/components/ui/FadeIn";
import { processSteps } from "@/data/site";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";

export default function Process() {
  const { lang } = useLanguage();
  const t = translations[lang].process;

  return (
    <section id="process" className="bg-charcoal-950 py-20 text-white sm:py-28">
      <div className="container-page flex flex-col gap-14">
        <FadeIn>
          <SectionHeading
            align="center"
            light
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </FadeIn>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <FadeIn key={step.step} delay={(i % 4) * 80}>
              <div className="relative flex flex-col gap-4">
                <ImageCard
                  src={step.image}
                  alt={step.title[lang]}
                  placeholderLabel={`Add photo: ${step.image}`}
                  className="aspect-[4/3] w-full border-white/15 bg-white/5"
                />
                <div className="flex items-start gap-3">
                  <span className="font-display text-2xl font-bold text-accent">{step.step}</span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {step.title[lang]}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {step.description[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
