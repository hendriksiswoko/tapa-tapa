"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { company, navHrefs, products, whatsappHref } from "@/data/site";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";

export default function Footer() {
  const year = 2026;
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer id="contact" className="bg-charcoal-950 text-white/70">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logo/logo-arang-tapa-tapa.webp"
            alt={company.name}
            width={140}
            height={56}
            className="h-12 w-auto object-contain"
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            {company.description[lang]}
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white">
            {t.footer.quickLinks}
          </h3>
          <ul className="flex flex-col gap-3">
            {navHrefs.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm transition-colors hover:text-accent">
                  {t.nav[item.key as keyof typeof t.nav]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white">
            {t.footer.products}
          </h3>
          <ul className="flex flex-col gap-3">
            {products.map((product) => (
              <li key={product.id}>
                <Link href="#products" className="text-sm transition-colors hover:text-accent">
                  {product.name[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white">
            {t.footer.contact}
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {company.address}, {company.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-accent">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a
                href={whatsappHref}
                target={company.whatsappNumber ? "_blank" : undefined}
                rel={company.whatsappNumber ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-accent"
              >
                {company.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{company.businessHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-page text-center text-xs text-white/40">
          © {year} {company.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
