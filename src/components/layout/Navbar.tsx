"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navHrefs, whatsappHref, company } from "@/data/site";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = navHrefs.map((item) => ({
    href: item.href,
    label: t.nav[item.key as keyof typeof t.nav],
  }));

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-white"
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo/logo-arang-tapa-tapa.webp"
            alt={company.name}
            width={140}
            height={56}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LangToggle lang={lang} toggleLang={toggleLang} />
          <Link
            href={whatsappHref}
            target={company.whatsappNumber ? "_blank" : undefined}
            rel={company.whatsappNumber ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {t.nav.getQuote}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle lang={lang} toggleLang={toggleLang} />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border-subtle bg-white lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-background-soft hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={whatsappHref}
                target={company.whatsappNumber ? "_blank" : undefined}
                rel={company.whatsappNumber ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                {t.nav.getQuote}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function LangToggle({
  lang,
  toggleLang,
}: {
  lang: "id" | "en";
  toggleLang: () => void;
}) {
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Toggle language"
      className="flex items-center rounded-full border border-border-subtle p-0.5 text-xs font-semibold"
    >
      <span
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "id" ? "bg-accent text-white" : "text-foreground-secondary"
        }`}
      >
        ID
      </span>
      <span
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "en" ? "bg-accent text-white" : "text-foreground-secondary"
        }`}
      >
        EN
      </span>
    </button>
  );
}
