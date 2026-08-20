import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/language";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://hendriksiswoko.github.io/tapa-tapa"; // TODO: replace once a custom domain is set up

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arang Tapa-Tapa | Premium Coconut Charcoal Briquette Supplier & Exporter",
    template: "%s | Arang Tapa-Tapa",
  },
  description:
    "Arang Tapa-Tapa adalah coconut charcoal briquette manufacturer & exporter yang menyediakan produk premium untuk kebutuhan shisha, hookah, dan BBQ dengan kualitas ekspor dan supply yang konsisten.",
  keywords: [
    "coconut charcoal briquettes",
    "charcoal briquette supplier",
    "coconut charcoal supplier",
    "premium coconut charcoal",
    "shisha charcoal",
    "hookah charcoal",
    "BBQ charcoal",
    "charcoal briquette manufacturer",
    "coconut charcoal briquette exporter",
  ],
  openGraph: {
    title: "Arang Tapa-Tapa | Premium Coconut Charcoal Briquette Supplier & Exporter",
    description:
      "Coconut charcoal briquette manufacturer & exporter untuk kebutuhan shisha, hookah, dan BBQ dengan kualitas ekspor.",
    url: siteUrl,
    siteName: "Arang Tapa-Tapa",
    locale: "id_ID",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arang Tapa-Tapa | Premium Coconut Charcoal Briquette Supplier & Exporter",
    description:
      "Coconut charcoal briquette manufacturer & exporter untuk kebutuhan shisha, hookah, dan BBQ dengan kualitas ekspor.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${heading.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
