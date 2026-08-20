// Static UI copy (headings, labels, buttons) per language.
// Dynamic content (products, process steps, FAQ, etc.) lives in src/data/site.ts
// with bilingual fields directly on each item.

export const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      products: "Produk",
      process: "Proses Produksi",
      quality: "Kualitas",
      gallery: "Galeri",
      contact: "Kontak",
      getQuote: "Minta Penawaran",
    },
    hero: {
      eyebrow: "Briket Arang Kelapa Premium",
      title: "Briket Arang Kelapa Terpercaya untuk Pasar Lokal & Global",
      description:
        "Kami memproduksi coconut charcoal briquettes berkualitas ekspor untuk kebutuhan shisha/hookah, BBQ, dan kebutuhan bisnis lainnya — didukung proses produksi yang terkontrol dan siap melayani buyer retail, wholesale, maupun internasional.",
      primaryCta: "Minta Penawaran",
      secondaryCta: "Lihat Produk",
      trust: ["Kualitas Ekspor", "Supply Konsisten", "Terkontrol Kualitas"],
      floatingCardTitle: "Terkontrol Kualitas",
      floatingCardSubtitle: "Setiap batch produksi",
    },
    about: {
      eyebrow: "Tentang Perusahaan Kami",
      title: "Supplier Briket Arang Kelapa Terpercaya",
      bullets: [
        "Proses produksi yang terkontrol",
        "Kualitas produk yang konsisten",
        "Fokus pada kebutuhan customer",
        "Siap melayani retail, wholesale & ekspor",
      ],
      cta: "Pelajari Lebih Lanjut",
      imagePlaceholder: "Tambahkan foto factory/produksi",
    },
    products: {
      eyebrow: "Yang Kami Produksi",
      title: "Produk Kami",
      description:
        "Coconut charcoal briquettes yang diproduksi untuk memenuhi kebutuhan buyer retail, wholesale, dan ekspor.",
      viewProduct: "Lihat Produk",
    },
    whyChooseUs: {
      eyebrow: "Mengapa Memilih Kami",
      title: "Dibangun di Atas Kualitas dan Kepercayaan",
      description: "Fondasi yang kami jaga di setiap tahap produksi hingga pengiriman.",
    },
    process: {
      eyebrow: "Dari Bahan Baku hingga Pengiriman",
      title: "Proses Produksi Kami",
      description:
        "Setiap tahap produksi dijalankan dengan standar yang konsisten untuk menjaga kualitas akhir produk.",
    },
    quality: {
      eyebrow: "Komitmen Kami",
      title: "Kualitas yang Dapat Diandalkan",
      description:
        "Kami menjaga kualitas produk melalui pengawasan yang konsisten di setiap tahap produksi hingga siap dikirim.",
      imagePlaceholder: "Tambahkan foto inspeksi kualitas",
    },
    packaging: {
      eyebrow: "Siap untuk Wholesale & Ekspor",
      title: "Siap Melayani Wholesale & Ekspor",
      description:
        "Kami siap mendukung kebutuhan pembelian dalam jumlah besar maupun pengiriman ekspor, dengan opsi kemasan yang fleksibel sesuai kebutuhan buyer.",
      points: ["Pesanan dalam jumlah besar", "Kemasan custom", "Private label", "Pengiriman kontainer", "Buyer internasional"],
      imagePlaceholder: "Tambahkan foto kontainer/pengiriman",
    },
    gallery: {
      eyebrow: "Lihat Lebih Dekat",
      title: "Galeri Kami",
      description: "Dokumentasi produksi, produk, packaging, hingga proses pengiriman.",
      empty:
        "Belum ada foto di kategori ini. Tambahkan file ke folder public/images/gallery/ yang sesuai, lalu refresh halaman.",
      categories: {
        All: "Semua",
        Production: "Produksi",
        Products: "Produk",
        Packaging: "Kemasan",
        Factory: "Pabrik",
        Shipment: "Pengiriman",
      },
    },
    faq: {
      eyebrow: "Pertanyaan yang Sering Diajukan",
      title: "Ada Pertanyaan? Kami Punya Jawabannya",
      description: "Pertanyaan yang umum ditanyakan oleh buyer sebelum melakukan pemesanan.",
    },
    cta: {
      title: "Mencari Supplier Briket Arang yang Terpercaya?",
      description:
        "Sampaikan kebutuhan Anda dan tim kami akan menghubungi Anda kembali dengan informasi produk, harga, dan ketersediaan.",
      primaryCta: "Minta Penawaran",
      secondaryCta: "Hubungi Kami",
    },
    footer: {
      quickLinks: "Tautan Cepat",
      products: "Produk",
      contact: "Kontak",
      rights: "Seluruh Hak Cipta Dilindungi.",
    },
    stats: {
      yearsExperience: "Tahun Pengalaman",
      countriesServed: "Negara Terlayani",
      tonsCapacity: "Ton Kapasitas / Bulan",
      qualityControl: "Kontrol Kualitas",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      process: "Our Process",
      quality: "Quality",
      gallery: "Gallery",
      contact: "Contact",
      getQuote: "Get a Quote",
    },
    hero: {
      eyebrow: "Premium Coconut Charcoal Briquettes",
      title: "Reliable Coconut Charcoal Briquettes for Local & Global Markets",
      description:
        "We produce export-quality coconut charcoal briquettes for shisha/hookah, BBQ, and other business needs — backed by a controlled production process and ready to serve retail, wholesale, and international buyers.",
      primaryCta: "Get a Quote",
      secondaryCta: "Explore Products",
      trust: ["Export Quality", "Consistent Supply", "Quality Controlled"],
      floatingCardTitle: "Quality Controlled",
      floatingCardSubtitle: "Every production batch",
    },
    about: {
      eyebrow: "About Our Company",
      title: "Reliable Coconut Charcoal Briquette Supplier",
      bullets: [
        "Controlled production process",
        "Consistent product quality",
        "Focused on customer needs",
        "Ready to serve retail, wholesale & export",
      ],
      cta: "Learn More About Us",
      imagePlaceholder: "Add factory/production photo",
    },
    products: {
      eyebrow: "What We Produce",
      title: "Our Products",
      description:
        "Coconut charcoal briquettes produced to serve retail, wholesale, and export buyers.",
      viewProduct: "View Product",
    },
    whyChooseUs: {
      eyebrow: "Why Choose Us",
      title: "Built on Quality and Reliability",
      description: "The foundation we maintain at every stage, from production to delivery.",
    },
    process: {
      eyebrow: "From Raw Material to Shipment",
      title: "Our Process",
      description:
        "Every production stage runs on a consistent standard to protect the final product quality.",
    },
    quality: {
      eyebrow: "Our Commitment",
      title: "Quality You Can Count On",
      description:
        "We maintain product quality through consistent oversight at every stage of production until ready for shipment.",
      imagePlaceholder: "Add quality inspection photo",
    },
    packaging: {
      eyebrow: "Wholesale & Export Ready",
      title: "Built for Wholesale & Export",
      description:
        "We're ready to support bulk purchases and export shipments, with flexible packaging options tailored to buyer needs.",
      points: ["Bulk orders", "Custom packaging", "Private label", "Container shipment", "International buyers"],
      imagePlaceholder: "Add container/shipment photo",
    },
    gallery: {
      eyebrow: "Take a Look",
      title: "Our Gallery",
      description: "Documentation of production, products, packaging, and shipment.",
      empty:
        "No photos in this category yet. Add files to the matching public/images/gallery/ folder, then refresh the page.",
      categories: {
        All: "All",
        Production: "Production",
        Products: "Products",
        Packaging: "Packaging",
        Factory: "Factory",
        Shipment: "Shipment",
      },
    },
    faq: {
      eyebrow: "Frequently Asked Questions",
      title: "Have Questions? We Have Answers",
      description: "Questions commonly asked by buyers before placing an order.",
    },
    cta: {
      title: "Looking for a Reliable Charcoal Briquette Supplier?",
      description:
        "Tell us what you need and our team will get back to you with product information, pricing, and availability.",
      primaryCta: "Request a Quote",
      secondaryCta: "Contact Us",
    },
    footer: {
      quickLinks: "Quick Links",
      products: "Products",
      contact: "Contact",
      rights: "All Rights Reserved.",
    },
    stats: {
      yearsExperience: "Years Experience",
      countriesServed: "Countries Served",
      tonsCapacity: "Tons Monthly Capacity",
      qualityControl: "Quality Control",
    },
  },
} as const;
