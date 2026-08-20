# Image Asset Guide

Semua gambar website disimpan di `public/images/`, dikelompokkan per section. Gunakan format
`.webp` (atau `.avif`), nama file kebab-case yang deskriptif — jangan `IMG_1234.jpg`,
`DSC00012.jpg`, atau `WhatsApp Image ....jpg`.

Ukuran yang disarankan: kompres ke lebar maksimum ~1600px untuk foto besar (hero/about/process),
~1200px untuk product/gallery. Rasio disebutkan di bawah agar tidak ada layout shift.

## Status saat ini

✅ Sudah ada — ⬜ placeholder (perlu ditambahkan)

| Folder | File | Status | Digunakan di |
|---|---|---|---|
| `logo/` | `logo-arang-tapa-tapa.webp` | ✅ | Navbar, Footer |
| `hero/` | `hero-charcoal-briquette.webp` | ✅ | Hero |
| `products/` | `product-coconut-charcoal-briquette.webp` | ✅ | Products, Gallery |
| `products/` | `product-bbq-charcoal.webp` | ⬜ | Products (BBQ Charcoal) |
| `products/` | `product-custom-private-label.webp` | ⬜ | Products (Custom/Private Label) |
| `about/` | `about-factory.webp` | ⬜ | About |
| `process/` | `process-raw-material.webp` | ⬜ | Our Process (01) |
| `process/` | `process-carbonization.webp` | ⬜ | Our Process (02) |
| `process/` | `process-grinding-mixing.webp` | ⬜ | Our Process (03) |
| `process/` | `process-briquette-forming.webp` | ⬜ | Our Process (04) |
| `process/` | `process-drying.webp` | ⬜ | Our Process (05) |
| `process/` | `process-quality-control.webp` | ⬜ | Our Process (06) |
| `process/` | `process-packaging.webp` | ⬜ | Our Process (07) |
| `process/` | `process-ready-for-shipment.webp` | ⬜ | Our Process (08) |
| `quality/` | `quality-inspection.webp` | ⬜ | Quality section |
| `packaging/` | `packaging-container-shipment.webp` | ⬜ | Packaging/Export section |
| `gallery/production/` | bebas, mis. `gallery-production-01.webp` | ⬜ | Gallery |
| `gallery/products/` | `gallery-product-01.webp` | ✅ | Gallery |
| `gallery/packaging/` | bebas, mis. `gallery-packaging-01.webp` | ⬜ | Gallery |
| `gallery/factory/` | bebas, mis. `gallery-factory-01.webp` | ⬜ | Gallery |
| `gallery/shipment/` | bebas, mis. `gallery-shipment-01.webp` | ⬜ | Gallery |

## Folder purpose

- `logo/` → logo perusahaan (navbar, footer, mobile menu)
- `hero/` → gambar utama hero section (produk unggulan)
- `about/` → foto perusahaan/factory/tim untuk section About
- `products/` → foto produk (satu per produk di `src/data/site.ts`)
- `process/` → foto tiap tahap produksi (8 tahap, urutan 01–08)
- `quality/` → foto quality control/inspeksi
- `packaging/` → foto packaging, container, shipment untuk section export
- `gallery/<kategori>/` → seluruh foto gallery, dikelompokkan per kategori (production, products,
  packaging, factory, shipment) agar filter kategori pada Gallery section bekerja
- `icons/` → custom icon tambahan (opsional; saat ini icon menggunakan Lucide React)
- `backgrounds/` → background/texture dekoratif tambahan (opsional)

## Cara menambahkan gambar

**Foto single-slot** (logo, hero, about, products, process 01–08, quality, packaging): cukup
simpan file `.webp` dengan **nama persis** seperti pada tabel di atas, di folder yang sesuai.
Tidak perlu edit kode — komponen sudah menunjuk ke path itu, dan begitu file tersedia, foto
otomatis tampil menggantikan placeholder abu-abu saat halaman di-refresh (`npm run dev`). Kalau
file belum ada, placeholder tetap tampil (tidak akan jadi gambar rusak/broken image).

**Gallery** (`gallery/<kategori>/`): tinggal drop banyak file `.webp` ke folder kategori yang
sesuai — **nama file bebas**, tidak perlu format tertentu. Setiap kali halaman di-refresh dalam
mode development (`npm run dev`), semua file di folder itu otomatis dibaca dan ditampilkan (lihat
`src/lib/gallery.ts`), tanpa perlu edit `site.ts` sama sekali.

⚠️ **Catatan untuk production (`npm run build` / `npm start`):** Gallery dibaca ulang dari
filesystem hanya saat build, bukan per-request. Kalau menambahkan foto gallery setelah situs
sudah di-deploy, jalankan `npm run build` lagi supaya foto baru ikut ter-generate.
