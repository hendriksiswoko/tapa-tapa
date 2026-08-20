# Arang Tapa-Tapa — Company Website

Website B2B/export untuk **Arang Tapa-Tapa**, coconut charcoal briquette manufacturer &
exporter. Dibangun dengan Next.js (App Router) + TypeScript + Tailwind CSS v4 + Lucide React.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

```bash
npm run build   # production build
npm run lint     # eslint
```

## Struktur

```
src/
├── app/                  # layout, page, metadata, sitemap, robots
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Products, Process, Quality, Packaging, Gallery, FAQ, CTA, ...
│   └── ui/                # Button, SectionHeading, ProductCard, ImageCard, FadeIn, Container
└── data/
    └── site.ts            # SEMUA konten (teks, produk, FAQ, stats, gallery) — edit di sini
public/
└── images/                # lihat public/images/README.md untuk daftar & panduan naming
```

Untuk mengganti teks/konten, edit `src/data/site.ts` — komponen tidak perlu disentuh.
Untuk menambahkan gambar, lihat `public/images/README.md` (daftar file yang masih placeholder).

## Data yang masih perlu dilengkapi

Ditandai `[PLACEHOLDER]` di `src/data/site.ts`. Belum diisi karena belum ada datanya —
**jangan diisi dengan angka/klaim yang dikarang**:

- Alamat, kota/negara, email, WhatsApp, telepon, jam operasional
- Kapasitas produksi, MOQ, incoterms, port of loading
- Statistik (tahun berdiri, jumlah negara, kapasitas ton/bulan) — saat ini ditampilkan sebagai
  `[XX]+`
- Spesifikasi produk (ash content, moisture, fixed carbon, burning time, ukuran/bentuk briket)
- Sertifikasi (belum ditampilkan sama sekali sampai datanya diberikan)
- Gambar: about/factory, process (8 tahap), quality inspection, packaging/shipment, gallery
  tambahan, produk BBQ charcoal & custom/private label

## Catatan desain

- Logo (`public/images/logo/logo-arang-tapa-tapa.webp`) memiliki background hitam solid (bukan
  transparan) dan gaya playful/mascot — ditampilkan apa adanya tanpa kontainer sesuai keputusan
  saat pembuatan. Jika ingin tampilan lebih premium/corporate, siapkan versi logo dengan
  background transparan/putih dan style yang lebih formal.
- Warna: putih dominan, orange (`--accent-orange` di `globals.css`) sebagai accent/CTA, charcoal
  gelap untuk section gelap (Process, CTA, Footer).
- Font: Plus Jakarta Sans (heading) + DM Sans (body).
