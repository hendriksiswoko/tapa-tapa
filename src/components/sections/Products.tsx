"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import FadeIn from "@/components/ui/FadeIn";
import { products } from "@/data/site";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";

export default function Products() {
  const { lang } = useLanguage();
  const t = translations[lang].products;

  return (
    <section id="products" className="bg-background-soft py-20 sm:py-28">
      <div className="container-page flex flex-col gap-12">
        <FadeIn>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 100}>
              <ProductCard
                name={product.name[lang]}
                description={product.description[lang]}
                image={product.image}
                features={product.features[lang]}
                viewProductLabel={t.viewProduct}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
