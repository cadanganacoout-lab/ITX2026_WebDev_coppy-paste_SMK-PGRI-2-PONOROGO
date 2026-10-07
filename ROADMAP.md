# Roadmap EduFuture

Dokumen ini merangkum struktur proyek dan langkah pengembangan berikutnya. EduFuture masih berupa prototipe konsep. Perencana belajar, navigasi, katalog, dan penyimpanan progres lokal berfungsi di browser, tetapi jalur/kursus tetap contoh dan belum ada layanan belajar, akun, backend, atau sertifikat.

## File utama

| File | Fungsi |
| --- | --- |
| `index.html` | Kerangka HTML, bahasa awal, judul tab, dan metadata halaman. |
| `src/main.jsx` | Titik masuk React; memuat konfigurasi bahasa dan CSS global. |
| `src/App.jsx` | Komposisi halaman, navigasi, peta navigasi website interaktif, filter/pencarian katalog, perencana belajar dengan checklist progres lokal, pemilih bahasa, tema terang/gelap, dan seluruh section. |
| `src/i18n.js` | Resource enam bahasa, label aksesibilitas, data contoh kursus, perencana, batasan prototipe, referensi eksternal, FAQ, dan peran komunitas. |
| `src/App.css` | Layout, komponen, responsivitas, ilustrasi 3D berbasis CSS, perencana belajar, dan warna dark mode. |
| `src/index.css` | Reset dan aturan CSS global serta variabel tema dasar. |
| `vite.config.js` | Konfigurasi Vite, React, dan Tailwind CSS. |
| `package.json` | Dependensi dan perintah `dev`, `build`, dan `lint`. |
| `public/` | Ikon statis yang disajikan langsung oleh Vite. |
| `src/assets/` | Aset proyek; `hero.png` tersedia bersama aset bawaan Vite/React. |
| `dist/` | Hasil build produksi dari `npm run build`; bukan tempat mengedit sumber. |
| `node_modules/` | Dependensi lokal yang dipasang npm; bukan sumber proyek. |

Peta navigasi website berada pada bagian **Peta navigasi 3D** di halaman. Peta ini merangkum alur dari Beranda ke bagian Tentang, Cara kerja, Kursus, Program, Dampak, Wawasan, Komunitas, FAQ, dan Kontak; klik sebuah titik untuk melihat ringkasan, lalu gunakan tombolnya untuk menuju bagian terkait. Tampilan 3D dibuat dengan CSS sehingga tidak memerlukan library 3D terpisah.

## Tempat mengedit data

Konten terjemahan berada di `src/i18n.js`. Cari objek `additionalTranslations` untuk konten umum, `productTranslations` untuk planner/ruang lingkup prototipe/referensi, dan `localizedDisplayContent` untuk ringkasan fitur serta label aksesibilitas.

- **Teks halaman awal:** `resources.<bahasa>.translation`.
- **Fitur hero, keunggulan bagian Tentang, dan label aksesibilitas:** `localizedDisplayContent.<bahasa>`. Jangan menggantinya dengan metrik pengguna atau dampak yang tidak diukur.
- **Rencana belajar, batasan demo, dan sumber eksternal:** `productTranslations.<bahasa>`. Pertahankan semua enam bahasa dan pastikan sumber tetap teratribusi.
- **Kursus:** `additionalTranslations.<bahasa>.courses.items`. Setiap kursus memiliki `category`, `label`, `level`, `duration`, `title`, `description`, dan `skills`. Kategori harus sesuai dengan ID filter kursus di `courses.filters`.
- **Langkah belajar:** `additionalTranslations.<bahasa>.how.steps`. Halaman saat ini menampilkan empat langkah.
- **Konten lama yang tidak ditampilkan:** `demoContent.<bahasa>`. Bagian ini memuat teks/metrik contoh lama yang tidak lagi digunakan di UI; jangan aktifkan kembali sebelum diverifikasi dan diperbarui.
- **FAQ:** `additionalTranslations.<bahasa>.faq.items`.
- **Peran komunitas:** `additionalTranslations.<bahasa>.community.roles`. Ini merupakan peran konseptual, bukan profil individu atau mitra resmi.
- **Kontak:** teks status kontak berada di `additionalTranslations.<bahasa>.contact`. Alamat email ditampilkan jika variabel lingkungan `VITE_CONTACT_EMAIL` disediakan; jangan memasang alamat contoh sebagai kontak resmi.
- **Teks halaman lainnya:** navigasi, hero, pengantar, bagian program, CTA, footer, serta label tema berada di `resources.<bahasa>.translation` di bagian awal `src/i18n.js`.

Saat mengubah struktur atau data pada satu bahasa, perbarui konten bahasa lainnya agar pemilih bahasa tidak menampilkan terjemahan yang tertinggal. Bahasa yang tersedia didefinisikan oleh daftar `languages` di `src/App.jsx` dan resource di `src/i18n.js`. Pilihan bahasa disimpan dengan kunci `edtech-language`; bahasa Arab juga mengubah atribut arah dokumen menjadi RTL.

## Tahapan pengembangan

### 1. Lengkapi dokumen kompetisi

- Susun proposal yang memenuhi semua kolom wajib guidebook, termasuk identitas tim, perumusan masalah pendidikan, solusi, target pengguna, fitur, user flow/flowchart, teknologi, tahapan, manfaat, inovasi, mockup, tautan demo/GitHub, dan kesimpulan.
- Ikuti format proposal: maksimal 15 halaman (di luar cover/lampiran), PDF maksimal 10 MB, A4, margin kiri 4 cm dan sisi lainnya 3 cm, Times New Roman 12, spasi 1,5.
- Tambahkan repository GitHub yang sah dan URL-nya di dokumen pengumpulan. Akses online website sengaja dikecualikan dari pekerjaan ini.

### 2. Validasi pengalaman belajar

- Uji alur pilih topik → atur waktu → ikuti checklist → muat ulang → reset progres.
- Tinjau jalur latihan dengan pembelajar/pendidik sasaran sebelum mengembangkan materi ajar.
- Tentukan apakah produk perlu materi, asesmen, aksesibilitas tambahan, akun/backend, atau sinkronisasi; jangan menjanjikan sertifikat tanpa penyelenggara dan kebijakan resmi.

### 3. Pastikan atribusi dan konten

- Verifikasi lisensi/asal `src/assets/hero.png`, `public/icons.svg`, dan aset bawaan yang tidak digunakan, atau hapus yang tidak memiliki izin.
- Verifikasi tautan serta atribusi referensi eksternal sebelum pengumpulan.
- Jika kelak menampilkan hasil belajar, tentukan metode evaluasi, privasi, persetujuan, dan pelaporan keterbatasannya.

### 4. Uji kesiapan antarmuka

- Uji keenam bahasa dan pastikan tata letak RTL bahasa Arab tetap berfungsi.
- Uji filter/pencarian, planner, penyimpanan progres, menu mobile, preferensi tema/bahasa, keyboard, dan reduced motion.
- Periksa tampilan pada ukuran layar dan browser yang ditargetkan.
- Jalankan `npm run lint` dan `npm run build` sebelum rilis.

## Menjalankan proyek

Dari direktori proyek:

```bash
npm install
npm run dev
```

Untuk pemeriksaan sebelum rilis:

```bash
npm run lint
npm run build
```

Jika diperlukan, atur `VITE_CONTACT_EMAIL` di file `.env.local` untuk alamat kontak resmi. Jangan memasukkan rahasia atau kredensial ke repository.
