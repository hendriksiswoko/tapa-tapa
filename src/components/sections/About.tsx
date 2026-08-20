"use client";

import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageCard from "@/components/ui/ImageCard";
import FadeIn from "@/components/ui/FadeIn";
import { company } from "@/data/site";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <ImageCard
            src="/images/about/about-factory.webp"
            alt="Arang Tapa-Tapa factory and production"
            placeholderLabel={`${t.imagePlaceholder} — public/images/about/about-factory.webp`}
            className="aspect-[4/3] w-full"
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col items-start gap-5">
            <SectionHeading eyebrow={t.eyebrow} title={t.title} description={company.description[lang]} />
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2 pt-2 sm:grid-cols-2">
              {t.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="#quality" variant="secondary" className="mt-2">
              {t.cta}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
