# Roadmap EduFuture

Dokumen ini merangkum arah pengembangan proyek dan lokasi utama untuk mengubah tampilan maupun kontennya. EduFuture saat ini masih berupa konsep/demo; kursus, metrik, berita, profil komunitas, kontak, dan beberapa teks merupakan konten contoh yang perlu ditinjau sebelum dipublikasikan.

## File utama

| File | Fungsi |
| --- | --- |
| `index.html` | Kerangka HTML, bahasa awal, judul tab, dan metadata halaman. |
| `src/main.jsx` | Titik masuk React; memuat konfigurasi bahasa dan CSS global. |
| `src/App.jsx` | Komposisi halaman, navigasi, peta navigasi website interaktif, filter/pencarian kursus, pemilih bahasa, tema terang/gelap, dan seluruh section. |
| `src/i18n.js` | Resource dan konten enam bahasa, termasuk hero, statistik, keunggulan, label aksesibilitas, kursus, langkah belajar, berita/wawasan, FAQ, dan peran komunitas. |
| `src/App.css` | Layout, komponen, responsivitas, ilustrasi 3D berbasis CSS, dan warna dark mode. |
| `src/index.css` | Reset dan aturan CSS global serta variabel tema dasar. |
| `vite.config.js` | Konfigurasi Vite, React, dan Tailwind CSS. |
| `package.json` | Dependensi dan perintah `dev`, `build`, dan `lint`. |
| `public/` | Ikon statis yang disajikan langsung oleh Vite. |
| `src/assets/` | Aset proyek; `hero.png` tersedia bersama aset bawaan Vite/React. |
| `dist/` | Hasil build produksi dari `npm run build`; bukan tempat mengedit sumber. |
| `node_modules/` | Dependensi lokal yang dipasang npm; bukan sumber proyek. |

Peta navigasi website berada pada bagian **Peta navigasi 3D** di halaman. Peta ini merangkum alur dari Beranda ke bagian Tentang, Cara kerja, Kursus, Program, Dampak, Wawasan, Komunitas, FAQ, dan Kontak; klik sebuah titik untuk melihat ringkasan, lalu gunakan tombolnya untuk menuju bagian terkait. Tampilan 3D dibuat dengan CSS sehingga tidak memerlukan library 3D terpisah.

## Tempat mengedit data

Konten terjemahan berada di `src/i18n.js`. Cari objek `additionalTranslations` untuk konten per bahasa, lalu objek `demoContent` untuk data contoh yang ditampilkan di halaman.

- **Teks halaman awal:** `resources.<bahasa>.translation`.
- **Statistik hero, keunggulan bagian Tentang, dan label aksesibilitas:** `localizedDisplayContent.<bahasa>`. Pertahankan ketiga kelompok untuk setiap bahasa yang didukung.
- **Kursus:** `additionalTranslations.<bahasa>.courses.items`. Setiap kursus memiliki `category`, `label`, `level`, `duration`, `title`, `description`, dan `skills`. Kategori harus sesuai dengan ID filter kursus di `courses.filters`.
- **Langkah belajar:** `additionalTranslations.<bahasa>.how.steps`. Halaman saat ini menampilkan empat langkah.
- **Statistik dampak:** `demoContent.<bahasa>.impact.items`. Nilai `XX` sengaja menjadi placeholder; ganti hanya dengan angka yang terukur dan dapat diverifikasi.
- **Bukti kuantitatif:** `demoContent.<bahasa>.evidence`. Ganti ringkasan, catatan konteks, dan sumber dengan bukti yang benar-benar relevan. Jangan menyajikan placeholder sebagai hasil platform.
- **Berita dan wawasan:** `demoContent.<bahasa>.insights.items`. Ganti kategori, judul, ringkasan, sumber/tanggal, dan URL. Tautan kosong memang tidak dapat diklik; isi dengan URL artikel yang sudah diperiksa.
- **FAQ:** `additionalTranslations.<bahasa>.faq.items`.
- **Peran komunitas:** `additionalTranslations.<bahasa>.community.roles`. Ini merupakan peran konseptual, bukan profil individu atau mitra resmi.
- **Kontak:** teks status kontak berada di `additionalTranslations.<bahasa>.contact`. Alamat email ditampilkan jika variabel lingkungan `VITE_CONTACT_EMAIL` disediakan; jangan memasang alamat contoh sebagai kontak resmi.
- **Teks halaman lainnya:** navigasi, hero, pengantar, bagian program, CTA, footer, serta label tema berada di `resources.<bahasa>.translation` di bagian awal `src/i18n.js`.

Saat mengubah struktur atau data pada satu bahasa, perbarui konten bahasa lainnya agar pemilih bahasa tidak menampilkan terjemahan yang tertinggal. Bahasa yang tersedia didefinisikan oleh daftar `languages` di `src/App.jsx` dan resource di `src/i18n.js`. Pilihan bahasa disimpan dengan kunci `edtech-language`; bahasa Arab juga mengubah atribut arah dokumen menjadi RTL.

## Tahapan roadmap

### 1. Lengkapi dan validasi konten

- Ganti seluruh teks dan data dummy dengan informasi yang sudah disetujui.
- Verifikasi sumber, tanggal, konteks, dan tautan untuk setiap berita atau klaim kuantitatif.
- Tetapkan katalog kursus, silabus, durasi, tingkat, kebijakan sertifikat, dan persyaratan penyelesaian.
- Tambahkan profil tim/mitra hanya setelah identitas dan izin publikasinya tersedia.
- Isi alamat kontak resmi melalui konfigurasi lingkungan.

### 2. Tinjau pengalaman belajar

- Tentukan tautan dan tujuan untuk aksi pada setiap kartu kursus.
- Rancang halaman detail kursus, materi, latihan interaktif, pelacakan kemajuan, dan proses penerbitan sertifikat.
- Tentukan alur akun/pengguna dan kebutuhan backend sebelum mengklaim fitur belajar benar-benar tersedia.

### 3. Siapkan berita dan data dampak

- Pilih sumber berita resmi atau tepercaya, aturan atribusi, dan frekuensi pembaruan.
- Mulai dengan pengelolaan manual; pertimbangkan RSS/API setelah sumber dan lisensinya dipastikan.
- Tetapkan metode pengukuran hasil belajar, persetujuan penggunaan data, privasi, dan cara melaporkan keterbatasan hasil.
- Jangan mengubah data studi eksternal menjadi klaim keberhasilan EduFuture.

### 4. Penyempurnaan produk dan rilis

- Uji keenam bahasa, termasuk statistik dan label aksesibilitas; pastikan tata letak RTL bahasa Arab tetap berfungsi.
- Uji filter/pencarian kursus, menu mobile, penyimpanan tema dan bahasa, akses keyboard, serta pengaturan reduced motion.
- Periksa tampilan pada ukuran layar dan browser yang ditargetkan.
- Jalankan `npm run lint` dan `npm run build` sebelum rilis.
- Siapkan hosting, domain, analitik yang menghormati privasi, dan mekanisme pembaruan konten.

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
