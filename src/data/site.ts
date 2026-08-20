// Central content file. Replace bracketed placeholders like [COMPANY ADDRESS]
// with real data — every value here is surfaced somewhere on the site.
// Text fields that appear on the page use { id, en } pairs for the ID/EN toggle.
// Static UI copy (nav labels, section headings/buttons) lives in src/data/translations.ts.

export const company = {
  name: "Arang Tapa-Tapa",
  legalTagline: "Premium Coconut Charcoal Briquette Manufacturer & Exporter",
  foundedYear: "2020",
  description: {
    id: "Arang Tapa-Tapa memproduksi coconut charcoal briquettes berkualitas ekspor, diolah dari bahan baku tempurung kelapa pilihan dengan proses produksi yang terkontrol. Kami melayani kebutuhan retail, wholesale, dan ekspor untuk pasar shisha/hookah, BBQ, dan industri lainnya.",
    en: "Arang Tapa-Tapa produces export-quality coconut charcoal briquettes, made from carefully selected coconut shell raw material through a controlled production process. We serve retail, wholesale, and export needs for the shisha/hookah, BBQ, and other industries.",
  },
  address: "[COMPANY ADDRESS]",
  city: "[CITY], [COUNTRY]",
  email: "[EMAIL]",
  whatsappNumber: "6281339016934", // e.g. "6281234567890" (no + or leading 0). Leave empty to disable WhatsApp CTA.
  phone: "+62 813-3901-6934",
  businessHours: "Monday – Saturday, [XX:XX] – [XX:XX] (GMT+7)",
  productionCapacity: "[PRODUCTION CAPACITY] / month",
  moq: "[MOQ]",
  portOfLoading: "[PORT OF LOADING]",
  incoterms: "[INCOTERMS, e.g. FOB / CIF]",
  socials: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },
};

export const whatsappHref = company.whatsappNumber
  ? `https://wa.me/${company.whatsappNumber}`
  : "#contact";

export const navHrefs = [
  { key: "home", href: "/" },
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "process", href: "#process" },
  { key: "quality", href: "#quality" },
  { key: "gallery", href: "#gallery" },
  { key: "contact", href: "#contact" },
] as const;

export const products = [
  {
    id: "coconut-charcoal-briquette",
    name: { id: "Briket Arang Kelapa", en: "Coconut Charcoal Briquettes" },
    description: {
      id: "Briket arang tempurung kelapa untuk kebutuhan shisha/hookah dan BBQ, dibuat dari bahan baku pilihan melalui proses produksi yang terkontrol.",
      en: "Coconut shell charcoal briquettes for shisha/hookah and BBQ needs, made from selected raw material through a controlled production process.",
    },
    image: "/images/products/product-coconut-charcoal-briquette.webp",
    features: {
      id: ["Grade premium", "Kadar abu rendah", "Tahan lama", "Tanpa bau", "Mudah menyala"],
      en: ["Premium grade", "Low ash", "Long burning", "Odorless", "Easy ignition"],
    },
  },
  {
    id: "bbq-charcoal",
    name: { id: "Arang BBQ", en: "BBQ Charcoal" },
    description: {
      id: "[DESKRIPSI PRODUK] — lengkapi dengan detail produk BBQ charcoal Anda.",
      en: "[PRODUCT DESCRIPTION] — fill in your BBQ charcoal product details.",
    },
    image: "/images/products/product-bbq-charcoal.webp",
    features: {
      id: ["Tahan lama", "Panas stabil & merata", "Abu & asap rendah"],
      en: ["Long burning", "High & consistent heat", "Low ash & low smoke"],
    },
  },
  {
    id: "custom-private-label",
    name: { id: "Custom / Private Label", en: "Custom / Private Label" },
    description: {
      id: "Kami menyediakan opsi custom packaging dan private label untuk kebutuhan brand Anda sendiri. Hubungi kami untuk mendiskusikan spesifikasi dan kuantitas.",
      en: "We offer custom packaging and private label options for your own brand needs. Contact us to discuss specifications and quantity.",
    },
    image: "/images/products/product-custom-private-label.webp",
    features: {
      id: ["Kemasan custom", "Private label", "Spesifikasi fleksibel"],
      en: ["Custom packaging", "Private label", "Flexible specification"],
    },
  },
];

export const whyChooseUs = [
  {
    icon: "Leaf",
    title: { id: "Bahan Baku Premium", en: "Premium Raw Materials" },
    description: {
      id: "Menggunakan bahan baku tempurung kelapa pilihan sebagai dasar kualitas produk.",
      en: "Using selected coconut shell raw material as the foundation of product quality.",
    },
  },
  {
    icon: "ShieldCheck",
    title: { id: "Kontrol Kualitas Ketat", en: "Strict Quality Control" },
    description: {
      id: "Setiap tahap produksi melalui pemeriksaan kualitas sebelum lanjut ke tahap berikutnya.",
      en: "Every production stage goes through quality inspection before moving to the next step.",
    },
  },
  {
    icon: "Repeat",
    title: { id: "Kualitas Konsisten", en: "Consistent Quality" },
    description: {
      id: "Proses produksi yang terstandardisasi menjaga konsistensi hasil dari batch ke batch.",
      en: "A standardized production process keeps results consistent from batch to batch.",
    },
  },
  {
    icon: "Truck",
    title: { id: "Supply Terpercaya", en: "Reliable Supply" },
    description: {
      id: "Kapasitas produksi yang dikelola dengan baik untuk mendukung kebutuhan supply berkelanjutan.",
      en: "Well-managed production capacity to support ongoing supply needs.",
    },
  },
  {
    icon: "Ship",
    title: { id: "Siap Ekspor", en: "Export Ready" },
    description: {
      id: "Siap melayani pengiriman ekspor dengan pengemasan yang sesuai untuk pengiriman jarak jauh.",
      en: "Ready for export shipment with packaging suited for long-distance delivery.",
    },
  },
  {
    icon: "Package",
    title: { id: "Kemasan Fleksibel", en: "Flexible Packaging" },
    description: {
      id: "Opsi kemasan yang dapat disesuaikan dengan kebutuhan buyer, termasuk private label.",
      en: "Packaging options that can be tailored to buyer needs, including private label.",
    },
  },
];

export const processSteps = [
  {
    step: "01",
    title: { id: "Pemilihan Bahan Baku", en: "Raw Material Selection" },
    description: {
      id: "Pemilihan tempurung kelapa berkualitas sebagai bahan baku utama.",
      en: "Selection of quality coconut shells as the main raw material.",
    },
    image: "/images/process/process-raw-material.webp",
  },
  {
    step: "02",
    title: { id: "Karbonisasi", en: "Carbonization" },
    description: {
      id: "Proses pembakaran terkontrol untuk menghasilkan karbon tempurung kelapa.",
      en: "Controlled burning process to produce coconut shell carbon.",
    },
    image: "/images/process/process-carbonization.webp",
  },
  {
    step: "03",
    title: { id: "Penggilingan & Pencampuran", en: "Grinding & Mixing" },
    description: {
      id: "Penggilingan karbon dan pencampuran dengan bahan perekat alami.",
      en: "Grinding the carbon and mixing it with natural binder.",
    },
    image: "/images/process/process-grinding-mixing.webp",
  },
  {
    step: "04",
    title: { id: "Pencetakan Briket", en: "Briquette Forming" },
    description: {
      id: "Pencetakan campuran menjadi bentuk briket sesuai spesifikasi.",
      en: "Forming the mixture into briquette shapes according to specification.",
    },
    image: "/images/process/process-briquette-forming.webp",
  },
  {
    step: "05",
    title: { id: "Pengeringan", en: "Drying" },
    description: {
      id: "Pengeringan briket hingga mencapai kadar air yang sesuai standar.",
      en: "Drying the briquettes until they reach the standard moisture level.",
    },
    image: "/images/process/process-drying.webp",
  },
  {
    step: "06",
    title: { id: "Kontrol Kualitas", en: "Quality Control" },
    description: {
      id: "Pemeriksaan kualitas produk sebelum masuk tahap pengemasan.",
      en: "Product quality inspection before entering the packaging stage.",
    },
    image: "/images/process/process-quality-control.webp",
  },
  {
    step: "07",
    title: { id: "Pengemasan", en: "Packaging" },
    description: {
      id: "Pengemasan produk sesuai kebutuhan buyer, termasuk custom/private label.",
      en: "Product packaging according to buyer needs, including custom/private label.",
    },
    image: "/images/process/process-packaging.webp",
  },
  {
    step: "08",
    title: { id: "Siap Dikirim", en: "Ready for Shipment" },
    description: {
      id: "Produk siap dikirim untuk kebutuhan domestik maupun ekspor.",
      en: "Products ready to be shipped for both domestic and export needs.",
    },
    image: "/images/process/process-ready-for-shipment.webp",
  },
];

export const qualityChecklist = {
  id: [
    "Bahan Baku Terpilih dengan Cermat",
    "Proses Produksi yang Terkontrol",
    "Kualitas Produk yang Konsisten",
    "Pengemasan yang Tepat",
    "Inspeksi Kualitas Sebelum Pengiriman",
  ],
  en: [
    "Carefully Selected Raw Materials",
    "Controlled Production Process",
    "Consistent Product Quality",
    "Proper Packaging",
    "Quality Inspection Before Shipment",
  ],
};

// Set a value to null to hide that stat and render a benefit-style layout instead.
export const stats = [
  { value: null, labelKey: "yearsExperience" },
  { value: null, labelKey: "countriesServed" },
  { value: null, labelKey: "tonsCapacity" },
  { value: null, labelKey: "qualityControl" },
] as const;

export const galleryCategories = [
  "All",
  "Production",
  "Products",
  "Packaging",
  "Factory",
  "Shipment",
] as const;

// Gallery images are no longer listed here — they're auto-discovered from
// public/images/gallery/<category>/ at request time. See src/lib/gallery.ts.

export const faqs = [
  {
    question: {
      id: "Jenis briket arang kelapa apa saja yang Anda tawarkan?",
      en: "What types of coconut charcoal briquettes do you offer?",
    },
    answer: {
      id: "Kami memproduksi coconut charcoal briquettes untuk kebutuhan shisha/hookah dan BBQ. Hubungi kami untuk informasi lengkap mengenai varian produk yang tersedia.",
      en: "We produce coconut charcoal briquettes for shisha/hookah and BBQ needs. Contact us for full information on available product variants.",
    },
  },
  {
    question: { id: "Apakah Anda menerima pesanan dalam jumlah besar?", en: "Do you accept bulk orders?" },
    answer: {
      id: "Ya, kami melayani pemesanan dalam jumlah besar (bulk/wholesale) untuk kebutuhan buyer domestik maupun internasional.",
      en: "Yes, we accept bulk/wholesale orders for both domestic and international buyers.",
    },
  },
  {
    question: { id: "Bisakah Anda menyediakan kemasan custom?", en: "Can you provide custom packaging?" },
    answer: {
      id: "Ya, kami menyediakan opsi custom packaging sesuai kebutuhan buyer. Silakan hubungi tim kami untuk mendiskusikan spesifikasi.",
      en: "Yes, we offer custom packaging options according to buyer needs. Please contact our team to discuss specifications.",
    },
  },
  {
    question: { id: "Apakah Anda menyediakan private label?", en: "Do you offer private label?" },
    answer: {
      id: "Ya, private label tersedia. Hubungi kami untuk mendiskusikan detail dan kuantitas minimum.",
      en: "Yes, private label is available. Contact us to discuss details and minimum quantity.",
    },
  },
  {
    question: { id: "Berapa minimum order quantity (MOQ) Anda?", en: "What is your minimum order quantity?" },
    answer: {
      id: `MOQ kami adalah ${company.moq}. Hubungi kami untuk informasi lebih lanjut sesuai jenis produk.`,
      en: `Our MOQ is ${company.moq}. Contact us for further information depending on the product type.`,
    },
  },
  {
    question: { id: "Apakah Anda melayani pengiriman internasional?", en: "Do you ship internationally?" },
    answer: {
      id: "Ya, kami siap melayani pengiriman internasional untuk kebutuhan ekspor. Hubungi kami untuk informasi port of loading dan incoterms yang tersedia.",
      en: "Yes, we're ready to handle international shipments for export needs. Contact us for available port of loading and incoterms information.",
    },
  },
  {
    question: { id: "Bagaimana cara meminta penawaran harga?", en: "How can I request a quotation?" },
    answer: {
      id: "Anda dapat menghubungi kami melalui WhatsApp, email, atau formulir kontak pada halaman ini. Tim kami akan merespons dengan informasi produk, harga, dan ketersediaan.",
      en: "You can contact us via WhatsApp, email, or the contact section on this page. Our team will respond with product information, pricing, and availability.",
    },
  },
];
