import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Quality from "@/components/sections/Quality";
import Packaging from "@/components/sections/Packaging";
import Stats from "@/components/sections/Stats";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { getGalleryImages } from "@/lib/gallery";

export default function Home() {
  const galleryImages = getGalleryImages();

  return (
    <>
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Process />
      <Quality />
      <Packaging />
      <Stats />
      <Gallery images={galleryImages} />
      <FAQ />
      <CTA />
    </>
  );
}
