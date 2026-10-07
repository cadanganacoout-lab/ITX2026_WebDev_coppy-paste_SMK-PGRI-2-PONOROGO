# EduFuture

EduFuture adalah prototipe web untuk konsep alat bantu perencanaan belajar keterampilan digital dengan tema **“Empowering Minds: Digitalizing the Future of Education”**. Prototipe ini menyasar pembelajar yang belum yakin harus mulai dari mana: mereka dapat memilih salah satu jalur contoh, menentukan waktu belajar mingguan, lalu mengikuti rencana latihan tiga minggu dan menandai progresnya.

> **Status proyek: demo/prototipe, bukan layanan belajar operasional.** Jalur dan keterampilan merupakan contoh; rencana latihan dibuat dari data contoh di browser, bukan kurikulum atau materi ajar. Belum tersedia akun, backend, kursus sungguhan, evaluasi hasil belajar, atau sertifikat resmi. Konten ini tidak mengklaim jumlah pengguna maupun dampak produk.

## Fitur saat ini

- Halaman bertema pendidikan digital yang menjelaskan konsep, ruang lingkup demo, sumber bacaan eksternal, FAQ, kontak, dan footer.
- Peta navigasi website interaktif bergaya 3D yang menghubungkan bagian utama dan dapat digunakan untuk membuka tiap bagian.
- Headline tema utama: **“Empowering Minds: Digitalizing the Future of Education.”**
- Katalog contoh dengan filter kategori dan pencarian berdasarkan judul atau skill.
- Perencana belajar interaktif: pilih satu dari empat topik demo, atur waktu belajar 2/4/6 jam per minggu, lalu buat urutan kegiatan memahami, melatih, dan menerapkan keterampilan selama tiga minggu.
- Checklist progres per jalur disimpan di `localStorage` browser dan dapat diatur ulang. Data tidak dikirim ke server dan tidak tersinkron antarperangkat.
- Referensi pendidikan berasal dari sumber eksternal yang ditautkan; referensi tersebut bukan bukti dampak atau dukungan terhadap EduFuture.
- Pemilih bahasa: Bahasa Indonesia, English, Mandarin, Spanish, Arabic, dan French.
- Terjemahan per bahasa untuk konten halaman, ringkasan fitur prototipe, perencana belajar, dan label aksesibilitas.
- Tata letak RTL dan atribut `lang` dokumen diperbarui saat bahasa Arab dipilih.
- Dark mode dengan preferensi tema dan bahasa yang disimpan di `localStorage`.
- Ilustrasi buku digital 3D dan peta navigasi bergaya 3D berbasis CSS, tanpa dependensi 3D tambahan.
- Tata letak responsif untuk desktop dan perangkat mobile.
- Pengaturan gerakan `prefers-reduced-motion`.

## Teknologi

- **React 19** — antarmuka dan komponen.
- **Vite 8** — server pengembangan dan build produksi.
- **Tailwind CSS 4** — integrasi styling melalui plugin Vite.
- **Framer Motion** — animasi dan transisi.
- **Lucide React** — ikon.
- **i18next** dan **react-i18next** — pengelolaan terjemahan.
- **Oxlint** — pemeriksaan lint.

## Menjalankan secara lokal

Pastikan Node.js dan npm tersedia. Dari direktori proyek:

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite di terminal, biasanya `http://localhost:5173/`. **Jangan membuka `index.html` langsung dari file explorer**; halaman React perlu dijalankan lewat Vite.

Alur demo yang disarankan: **Katalog kursus → pilih jalur → atur waktu mingguan → tandai aktivitas → muat ulang halaman untuk melihat progres lokal tetap tersimpan.**

Perintah lain:

```bash
npm run lint      # Periksa lint
npm run build     # Buat build produksi di dist/
npm run preview   # Pratinjau build produksi
```

## Struktur dan lokasi file

```text
edtech-future/
├── index.html          # HTML awal, judul halaman, dan metadata
├── ROADMAP.md          # Tahapan pengembangan dan peta pengeditan konten
├── package.json        # Dependensi dan perintah npm
├── package-lock.json   # Versi dependensi yang terkunci
├── .oxlintrc.json      # Konfigurasi Oxlint
├── vite.config.js      # Konfigurasi React dan Tailwind untuk Vite
├── public/             # Ikon dan aset statis publik
└── src/
    ├── main.jsx        # Titik masuk React
    ├── App.jsx         # Komposisi halaman dan interaksi antarmuka
    ├── App.css         # Styling section, responsivitas, ilustrasi, dan tema
    ├── index.css       # CSS global dan variabel warna dasar
    ├── i18n.js         # Terjemahan dan data konten enam bahasa
    └── assets/         # Aset proyek, termasuk hero.png dan aset bawaan Vite/React
```

`dist/` adalah hasil build yang dibuat oleh Vite; `node_modules/` berisi dependensi lokal. Keduanya bukan lokasi untuk mengedit sumber aplikasi.

## Mengubah konten

Sebagian besar teks dan data ada di **`src/i18n.js`**:

- Teks antarmuka per bahasa berada pada `resources[bahasa].translation`.
- Konten bagian Cara Kerja, kursus, FAQ, komunitas, dan kontak berada pada `additionalTranslations[bahasa]`.
- Perencana, ruang lingkup prototipe, dan referensi eksternal berada pada `productTranslations[bahasa]`.
- Ringkasan fitur hero, keunggulan bagian Tentang, dan label aksesibilitas per bahasa berada pada `localizedDisplayContent`.

Bahasa yang didukung saat ini menggunakan kode `id`, `en`, `zh`, `es`, `ar`, dan `fr`. Jika mengubah konten, perbarui semua bahasa agar halaman tidak menampilkan terjemahan yang tidak konsisten.

### Data kursus

Setiap objek pada `additionalTranslations[bahasa].courses.items` menggunakan properti:

- `category` — ID filter kategori; harus cocok dengan salah satu ID pada `courses.filters`.
- `label` — label kategori pada visual kartu.
- `level` dan `duration` — tingkat kesulitan dan estimasi durasi.
- `title` dan `description` — judul dan ringkasan kursus.
- `skills` — daftar keterampilan yang ditampilkan pada kartu.

Kartu kursus saat ini adalah contoh. Perencana mengambil topik dan skill dari daftar ini untuk menyusun aktivitas generik; tautan kartu tidak membuka materi atau pendaftaran aktif.

### Klaim, sumber, dan batasan

- Jangan menampilkan statistik pengguna, rating, hasil belajar, berita, sertifikasi, maupun mitra yang tidak dapat diverifikasi.
- Ruang lingkup yang benar-benar tersedia ditampilkan dari `productTranslations[bahasa].prototypeScope`.
- Sumber bacaan eksternal ditampilkan dari `productTranslations[bahasa].references`; sumber tersebut bukan riset yang dilakukan EduFuture.
- Beberapa konten lama yang tidak lagi ditampilkan masih tersimpan di `demoContent` dalam `src/i18n.js`. Jangan menghubungkannya kembali ke UI sebelum setiap angka, kutipan, berita, sumber, dan URL diperiksa.

## Kesesuaian panduan ITX 2026

- **Tema dan konsep:** headline mengikuti tema resmi. Masalah yang dipilih untuk demonstrasi adalah kesulitan memulai belajar keterampilan digital; solusi prototipe adalah jalur contoh dan perencana latihan yang dapat dicoba.
- **Fungsionalitas:** filter, pencarian, perencana tiga minggu, checklist progres lokal, navigasi bagian, FAQ, bahasa, dan tema dapat dijalankan tanpa layanan backend.
- **UI/UX dan kreativitas:** ilustrasi 3D, peta navigasi interaktif, mode responsif, RTL, dan reduced motion merupakan modifikasi pada proyek; ini bukan klaim bahwa seluruh isi situs sudah menjadi produk belajar lengkap.
- **Source code dan dokumentasi:** struktur serta cara menjalankan demo didokumentasikan di README ini. Workspace saat ini tidak memiliki repository Git/URL GitHub yang dapat dicantumkan; tautan GitHub tetap harus dibuat dan dimasukkan ke berkas pengumpulan.
- **Proposal lomba:** proposal terpisah belum dibuat. Panduan meminta cover, identitas tim, judul, latar belakang, rumusan masalah, tujuan, solusi, deskripsi produk, target pengguna, fitur, user flow/flowchart, teknologi, tahapan pengembangan, keunggulan/inovasi, manfaat, mockup, tautan demo, tautan GitHub, dan kesimpulan. Periksa juga batas maksimal 15 halaman (di luar cover/lampiran), ukuran PDF maksimal 10 MB, kertas A4, margin kiri 4 cm dan margin lain 3 cm, Times New Roman 12, serta spasi 1,5.
- **Akses online:** tidak termasuk perubahan ini, sesuai permintaan.

## Dependensi dan aset pihak ketiga

- `package-lock.json` merekam dependensi dan metadata lisensinya. Lisensi dependensi langsung mencakup MIT (React, Vite, Tailwind CSS, Framer Motion, i18next, Oxlint) dan ISC (Lucide React). Dependensi transitif juga mencakup MPL-2.0, Apache-2.0, BSD-3-Clause, 0BSD, dan ISC. Pertahankan pemberitahuan lisensi dan tinjau kewajiban setiap paket sebelum mendistribusikan dependensi.
- Kartu referensi menyebut sumber dan menautkan ke situs pemiliknya; periksa kembali atribusi, ringkasan, dan tautan sebelum pengumpulan.
- Ilustrasi utama serta roadmap dibuat dalam CSS; ikon antarmuka berasal dari Lucide React.
- Asal-usul `src/assets/hero.png`, ikon bawaan yang tidak digunakan, dan sprite `public/icons.svg` belum tercatat di proyek. Verifikasi lisensi/asalnya atau hapus aset tersebut sebelum distribusi jika tidak memiliki izin. Karena itu, kepatuhan lisensi seluruh aset belum dapat dinyatakan tuntas.
## Mengubah tema dan kontak

- Gaya, breakpoint responsif, ilustrasi 3D, serta warna mode terang/gelap berada di `src/App.css`.
- Variabel warna global berada di `src/index.css`.
- Preferensi tema disimpan pada `localStorage` dengan kunci `edtech-theme`; bahasa memakai `edtech-language`.
- Email kontak bersifat opsional. Isi variabel `VITE_CONTACT_EMAIL` pada `.env.local` untuk menampilkan alamat resmi:

  ```dotenv
  VITE_CONTACT_EMAIL=alamat-resmi@example.com
  ```

  Ganti contoh di atas dengan alamat yang memang berwenang digunakan. Jangan menyimpan kata sandi, token, atau rahasia lain di variabel frontend `VITE_*`, karena nilainya dapat disertakan dalam bundle publik.

## Bahasa dan aksesibilitas

Bahasa awal adalah Bahasa Indonesia. Bahasa yang didukung menggunakan kode `id`, `en`, `zh`, `es`, `ar`, dan `fr`. Terjemahan berada di `src/i18n.js`; pilihan bahasa disimpan dengan kunci `edtech-language` dan memperbarui atribut `lang` serta arah dokumen pada elemen `<html>`. Bahasa Arab menggunakan `dir="rtl"`. Terjemahkan konten visual dan label pembaca layar bersama-sama agar tidak tertinggal saat mengganti bahasa.

Saat menambah bahasa, tambahkan resource terjemahan di `src/i18n.js` dan opsi bahasanya di daftar `languages` pada `src/App.jsx`. Periksa kembali pemotongan teks, urutan ikon, arah layout, kontras, navigasi keyboard, dan pembaca layar untuk setiap bahasa.

## Roadmap

Lihat **[`ROADMAP.md`](./ROADMAP.md)** untuk prioritas pengembangan berikutnya, panduan penggantian data dummy, dan checklist kesiapan publikasi.

## Catatan sebelum publikasi

1. Siapkan proposal sesuai seluruh kolom wajib guidebook, beserta identitas tim, mockup/flowchart, dan tautan pengumpulan yang sah.
2. Buat repository GitHub dan cantumkan URL source code pada berkas pengumpulan.
3. Verifikasi asal aset yang belum memiliki catatan dan lisensi paket yang didistribusikan.
4. Tinjau materi kursus dan aktivitas dengan pendidik/pengguna sasaran sebelum menyebutnya sebagai konten ajar.
5. Uji enam bahasa, RTL, keyboard, mobile, alur simpan/reset progres, `npm run lint`, dan `npm run build`.

## Lisensi

Lisensi kode proyek belum ditetapkan. Jangan mengasumsikan kode atau aset proyek boleh digunakan ulang sampai pemilik menetapkan lisensi dan asal seluruh aset pihak ketiga sudah diverifikasi.
