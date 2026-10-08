# Roadmap EduFuture

Dokumen ini merangkum struktur proyek dan langkah pengembangan berikutnya. EduFuture mempertahankan landing page, katalog keterampilan, wawasan, dan perencana belajar awal; peta navigasi 3D telah diganti workflow situs empat langkah yang menautkan ke fitur utama. Toolkit orientasi digital menjadi pendamping dengan refleksi, peta lima langkah, rencana tiga minggu, timer, simulasi, dan penyimpanan lokal; hasil refleksi tetap merupakan saran, bukan diagnosis.

## File utama

| File | Fungsi |
| --- | --- |
| `index.html` | Kerangka HTML, bahasa awal, judul tab, dan metadata halaman. |
| `src/main.jsx` | Titik masuk React dan CSS global; merender `App.jsx`. |
| `src/App.jsx` | Landing page, workflow situs, katalog keterampilan, perencana belajar awal, dan bagian situs lainnya; menyematkan fitur orientasi. |
| `src/i18n.js` | Terjemahan landing page dalam enam bahasa. |
| `src/App.css` | Styling landing page, komponen, responsivitas, dan tema. |
| `src/OrientationApp.jsx` | Refleksi enam pertanyaan, rekomendasi, peta lima langkah, rencana, timer, simulasi, privasi, dan terjemahan enam bahasa. |
| `src/EduFuture.css` | Styling toolkit orientasi, responsivitas, tema yang mengikuti aplikasi utama, aksesibilitas visual, dan stylesheet cetak. |
| `src/index.css` | Reset dan aturan CSS global serta variabel tema dasar. |
| `vite.config.js` | Konfigurasi Vite, React, dan Tailwind CSS. |
| `package.json` | Dependensi dan perintah `dev`, `build`, dan `lint`. |
| `public/` | Ikon statis yang disajikan langsung oleh Vite. |
| `src/assets/` | Aset proyek; `hero.png` tersedia bersama aset bawaan Vite/React. |
| `dist/` | Hasil build produksi dari `npm run build`; bukan tempat mengedit sumber. |
| `node_modules/` | Dependensi lokal yang dipasang npm; bukan sumber proyek. |

Workflow situs empat langkah menyediakan tautan langsung ke katalog, perencana, dan toolkit orientasi. Peta orientasi lima langkah berada di dalam toolkit dan tetap berupa daftar yang dapat dibuka tanpa urutan wajib.

## Tempat mengedit data

Teks landing page berada di `src/i18n.js`; teks toolkit orientasi berada pada objek `copy` di `src/OrientationApp.jsx`.

- `copy.id`, `copy.en`, `copy.zh`, `copy.es`, `copy.ar`, dan `copy.fr` harus memuat padanan teks untuk fitur aktif.
- Pertanyaan dan pilihan refleksi disusun dalam `questions`; setiap `labelKey` dan `answers` harus tersedia pada seluruh bahasa.
- Peta orientasi berisi lima langkah per bahasa pada `copy[language].steps`.
- Jangan mengubah hasil refleksi menjadi klasifikasi kemampuan atau diagnosis.

Saat mengubah UI, perbarui keenam bahasa, atribut pembaca layar, dan konten RTL. Pilihan bahasa disimpan bersama progres di `edufuture-orientation-v1`; saat pertama kali membuka aplikasi, beberapa pengaturan dan checklist lama dibaca untuk migrasi.

## Tahapan pengembangan

### 1. Lengkapi dokumen kompetisi

- Susun proposal yang memenuhi semua kolom wajib guidebook, termasuk identitas tim, perumusan masalah pendidikan, solusi, target pengguna, fitur, user flow/flowchart, teknologi, tahapan, manfaat, inovasi, mockup, tautan demo/GitHub, dan kesimpulan.
- Ikuti format proposal: maksimal 15 halaman (di luar cover/lampiran), PDF maksimal 10 MB, A4, margin kiri 4 cm dan sisi lainnya 3 cm, Times New Roman 12, spasi 1,5.
- Tambahkan repository GitHub yang sah dan URL-nya di dokumen pengumpulan. Panduan lomba mensyaratkan website dapat diakses online; deployment yang diakses panitia/juri harus diperiksa sebelum pengumpulan.

### 2. Validasi pengalaman belajar

- Uji alur refleksi → rekomendasi → langkah → rencana → muat ulang; periksa keyboard serta pesan fallback storage.
- Tinjau panduan dan aktivitas dengan pembelajar sasaran; rekomendasi harus terasa membantu dan tidak menghakimi.
- Tentukan pengayaan yang benar-benar dibutuhkan setelah alur inti diuji. Pertahankan tanpa akun/backend dan penyimpanan lokal sebagai keputusan desain produk; jangan menjanjikan hasil belajar yang belum diukur.

### 3. Pastikan atribusi dan konten

- Verifikasi lisensi/asal `src/assets/hero.png`, `public/icons.svg`, dan aset bawaan yang tidak digunakan, atau hapus yang tidak memiliki izin.
- Verifikasi tautan serta atribusi referensi eksternal sebelum pengumpulan.
- Jika kelak menampilkan hasil belajar, tentukan metode evaluasi, privasi, persetujuan, dan pelaporan keterbatasannya.

### 4. Uji kesiapan antarmuka

- Uji enam bahasa, RTL, peta lima langkah, planner, timer, simulasi, ekspor/impor/reset, tema, mobile, keyboard, dan reduced motion.
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

Deployment URL dan repository GitHub untuk pengumpulan lomba perlu diverifikasi/dicantumkan secara terpisah. Jangan memasukkan rahasia atau kredensial ke repository.
