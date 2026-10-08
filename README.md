# EduFuture

EduFuture adalah platform edukasi digital dengan tema **“Empowering Minds: Digitalizing the Future of Education”**. Situs mempertahankan halaman pengenalan, peta situs, katalog keterampilan, wawasan, prinsip, FAQ, dan perencana belajar; fitur orientasi ditambahkan untuk membantu pengguna merefleksikan kebiasaan, memilih langkah awal, dan membuat rencana belajar fleksibel.

> **Status proyek: prototipe edukasi digital.** Refleksi hanya memberi saran awal—bukan diagnosis atau pengukuran kemampuan. Rencana merupakan panduan fleksibel, bukan jaminan hasil. Belum tersedia akun, backend, sinkronisasi antarperangkat, atau evaluasi hasil belajar.

## Fitur saat ini

- Landing page EduFuture dengan pemilih bahasa, mode terang/gelap, workflow situs empat langkah, katalog keterampilan, program, wawasan, FAQ, dan bagian kontak/komunitas.
- Perencana belajar katalog awal dengan pilihan jalur dan checklist progres lokal.
- Refleksi interaktif enam pertanyaan dengan ringkasan preferensi dan rekomendasi langkah yang beralasan.
- Peta lima langkah orientasi dengan status belum dimulai, sedang dicoba, dan selesai; urutannya tidak dikunci.
- Perencana tiga minggu yang dapat diedit, dengan checklist, waktu belajar, cetak/PDF, dan ekspor kalender `.ics`.
- Timer fokus 25 menit berbasis timestamp dengan penghitung sesi harian.
- Simulasi keputusan tentang verifikasi informasi dengan umpan balik edukatif.
- Progres terversi di penyimpanan lokal, ekspor/impor JSON, reset data, dan pesan fallback saat storage tidak tersedia.
- Enam bahasa: Bahasa Indonesia, English, Mandarin, Spanish, Arabic, dan French; bahasa Arab menggunakan RTL.
- Mode terang/gelap, navigasi keyboard, skip link, semantik HTML, dan dukungan `prefers-reduced-motion`.
- Tata letak responsif untuk desktop dan perangkat mobile. Tidak ada akun atau sinkronisasi antarperangkat.

## Teknologi

- **React 19** — antarmuka dan komponen.
- **Vite 8** — server pengembangan dan build produksi.
- **Tailwind CSS 4** — integrasi stylesheet melalui plugin Vite.
- **Lucide React** — ikon.
- **Oxlint** — pemeriksaan lint.

`Framer Motion`, `i18next`, dan `react-i18next` digunakan pada landing page EduFuture; antarmuka toolkit orientasi memiliki kamus teks lokal tersendiri.

## Menjalankan secara lokal

Pastikan Node.js dan npm tersedia. Dari direktori proyek:

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite di terminal, biasanya `http://localhost:5173/`. **Jangan membuka `index.html` langsung dari file explorer**; halaman React perlu dijalankan lewat Vite.

Alur demo yang disarankan: **Mulai refleksi → lihat alasan rekomendasi → tandai langkah orientasi → buat rencana tiga minggu → muat ulang halaman untuk memeriksa progres lokal.**

Perintah lain:

```bash
npm run lint      # Periksa lint
npm run build     # Buat build produksi di dist/
npm run preview   # Pratinjau build produksi
```

## Struktur dan lokasi file

```text
edufuture/
├── index.html          # HTML awal, judul halaman, dan metadata
├── ROADMAP.md          # Tahapan pengembangan dan peta pengeditan konten
├── package.json        # Dependensi dan perintah npm
├── package-lock.json   # Versi dependensi yang terkunci
├── .oxlintrc.json      # Konfigurasi Oxlint
├── vite.config.js      # Konfigurasi React dan Tailwind untuk Vite
├── public/             # Ikon dan aset statis publik
└── src/
    ├── main.jsx            # Titik masuk React; merender App.jsx
    ├── App.jsx              # Landing page dan konten EduFuture yang dipertahankan
    ├── App.css              # Styling landing page, layout, tema, dan responsivitas
    ├── i18n.js              # Terjemahan landing page dalam enam bahasa
    ├── OrientationApp.jsx   # Fitur orientasi tertanam dan penyimpanan progresnya
    ├── EduFuture.css        # Styling fitur orientasi, responsivitas, tema, dan cetak
    ├── index.css            # Aturan CSS global
    └── assets/             # Aset proyek
```

`dist/` adalah hasil build yang dibuat oleh Vite; `node_modules/` berisi dependensi lokal. Keduanya bukan lokasi untuk mengedit sumber aplikasi.

## Mengubah konten

Konten landing page dan bahasa berada pada **`src/App.jsx`** dan **`src/i18n.js`**. Teks refleksi, pertanyaan, peta orientasi, dan toolkit berada pada objek `copy` di **`src/OrientationApp.jsx`**. Keduanya menyediakan enam bahasa; jaga konsistensi terjemahan dan aksesibilitas saat mengubah fitur.

### Klaim, sumber, dan batasan

- Jangan menampilkan statistik pengguna, rating, hasil belajar, berita, sertifikasi, maupun mitra yang tidak dapat diverifikasi.
- Data refleksi dan rencana disimpan lokal di bawah kunci `edufuture-orientation-v1`; data tidak tersinkron antarperangkat.
- Saat migrasi awal, tema, bahasa, dan checklist planner AI yang tersimpan dengan kunci lama dibaca bila tersedia. Pertahankan data lama sebelum mengubah mekanisme penyimpanan.

## Kesesuaian panduan ITX 2026

- **Tema dan konsep:** EduFuture menggabungkan konten edukasi digital yang sudah ada dengan fitur refleksi, orientasi, dan perencanaan belajar.
- **Fungsionalitas:** katalog dan perencana awal tetap tersedia bersama refleksi, rekomendasi, lima langkah orientasi, rencana tiga minggu, timer, simulasi, penyimpanan, dan kontrol data.
- **UI/UX:** antarmuka mendukung keyboard, tata letak responsif, RTL, dan reduced motion; lakukan uji pengguna dan lintas perangkat sebelum menyatakan siap rilis.
- **Source code dan dokumentasi:** struktur serta cara menjalankan demo didokumentasikan di README ini. Workspace saat ini tidak memiliki repository Git/URL GitHub yang dapat dicantumkan; tautan GitHub tetap harus dibuat dan dimasukkan ke berkas pengumpulan.
- **Proposal lomba:** proposal terpisah belum dibuat. Panduan meminta cover, identitas tim, judul, latar belakang, rumusan masalah, tujuan, solusi, deskripsi produk, target pengguna, fitur, user flow/flowchart, teknologi, tahapan pengembangan, keunggulan/inovasi, manfaat, mockup, tautan demo, tautan GitHub, dan kesimpulan. Periksa juga batas maksimal 15 halaman (di luar cover/lampiran), ukuran PDF maksimal 10 MB, kertas A4, margin kiri 4 cm dan margin lain 3 cm, Times New Roman 12, serta spasi 1,5.
- **Deployment:** implementasi kode tidak memverifikasi atau memperbarui deployment online; periksa situs yang dikirim ke juri secara terpisah.

## Dependensi dan aset pihak ketiga

- `package-lock.json` merekam dependensi dan metadata lisensinya. Lisensi dependensi langsung mencakup MIT (React, Vite, Tailwind CSS, Framer Motion, i18next, Oxlint) dan ISC (Lucide React). Dependensi transitif juga mencakup MPL-2.0, Apache-2.0, BSD-3-Clause, 0BSD, dan ISC. Pertahankan pemberitahuan lisensi dan tinjau kewajiban setiap paket sebelum mendistribusikan dependensi.
- Ikon antarmuka berasal dari Lucide React.
- Asal-usul `src/assets/hero.png`, ikon bawaan yang tidak digunakan, dan sprite `public/icons.svg` belum tercatat di proyek. Verifikasi lisensi/asalnya atau hapus aset tersebut sebelum distribusi jika tidak memiliki izin. Karena itu, kepatuhan lisensi seluruh aset belum dapat dinyatakan tuntas.
## Tema, bahasa, dan aksesibilitas

- Styling landing page berada di `src/App.css`; styling toolkit orientasi berada di `src/EduFuture.css`. Tema toolkit mengikuti pengaturan tema utama.
- Terjemahan landing page berada di `src/i18n.js`; terjemahan toolkit berada pada kamus `copy` di `src/OrientationApp.jsx`. Enam bahasa disediakan; bahasa Arab mengatur `dir="rtl"`.
- Uji keyboard, pembaca layar, kontras, mobile, cetak, serta `prefers-reduced-motion` setelah mengubah UI.

## Bahasa dan aksesibilitas

Bahasa awal adalah Bahasa Indonesia. Pemilih bahasa utama mengendalikan landing page dan toolkit orientasi. Progres toolkit disimpan bersama preferensi pada `edufuture-orientation-v1`. Perbarui konten dan label aksesibilitas pada keenam bahasa setiap kali UI berubah.

## Roadmap

Lihat **[`ROADMAP.md`](./ROADMAP.md)** untuk prioritas pengembangan berikutnya, panduan penggantian data dummy, dan checklist kesiapan publikasi.

## Catatan sebelum publikasi

1. Siapkan proposal sesuai seluruh kolom wajib guidebook, beserta identitas tim, mockup/flowchart, dan tautan pengumpulan yang sah.
2. Buat repository GitHub dan cantumkan URL source code pada berkas pengumpulan.
3. Verifikasi asal aset yang belum memiliki catatan dan lisensi paket yang didistribusikan.
4. Uji alur refleksi, progres, timer, simulasi, ekspor/impor/reset, dan rencana dengan pengguna sasaran.
5. Uji enam bahasa, RTL, keyboard, mobile, `npm run lint`, dan `npm run build`.
