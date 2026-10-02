# EduFuture

EduFuture adalah prototipe landing page untuk konsep platform pembelajaran digital dengan tema **“Empowering Minds: Digitalizing the Future of Education”**. Proyek ini mengeksplorasi cara menyajikan kursus, alur belajar, wawasan pendidikan, dan informasi dampak dalam antarmuka yang modern, responsif, dan mudah digunakan.

> **Status proyek: demo/prototipe.** Katalog kursus, durasi, tingkat kesulitan, sertifikasi, statistik, berita, profil komunitas, dan informasi kontak belum mewakili layanan atau organisasi nyata. Ganti semua konten contoh dan verifikasi informasi sebelum situs dipublikasikan. Jangan menyajikan placeholder sebagai data atau klaim nyata.

## Fitur saat ini

- Landing page dengan bagian hero, pengantar, cara kerja, dampak, katalog kursus, program pembelajaran, wawasan, ekosistem pembelajaran, FAQ, kontak, dan footer.
- Peta navigasi website interaktif bergaya 3D yang menghubungkan bagian utama dan dapat digunakan untuk membuka tiap bagian.
- Headline tema utama: **“Empowering Minds: Digitalizing the Future of Education.”**
- Katalog contoh dengan filter kategori dan pencarian berdasarkan judul atau skill.
- Empat langkah alur belajar: pilih tujuan, ikuti kursus, praktikkan kemampuan, dan raih sertifikat. Alur ini adalah konsep, bukan layanan sertifikasi yang sudah aktif.
- Pemilih bahasa: Bahasa Indonesia, English, Mandarin, Spanish, Arabic, dan French.
- Terjemahan per bahasa untuk konten halaman, statistik hero, keunggulan, serta label aksesibilitas.
- Tata letak RTL dan atribut `lang` dokumen diperbarui saat bahasa Arab dipilih.
- Dark mode dengan preferensi tema dan bahasa yang disimpan di `localStorage`.
- Ilustrasi laptop 3D dan peta navigasi bergaya 3D berbasis CSS, tanpa dependensi 3D tambahan.
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
- Statistik hero, keunggulan bagian Tentang, dan label aksesibilitas per bahasa berada pada `localizedDisplayContent`.
- Metrik dampak, bukti kuantitatif, dan berita/wawasan contoh berada pada `demoContent[bahasa]`.

Bahasa yang didukung saat ini menggunakan kode `id`, `en`, `zh`, `es`, `ar`, dan `fr`. Jika mengubah konten, perbarui semua bahasa agar halaman tidak menampilkan terjemahan yang tidak konsisten.

### Data kursus

Setiap objek pada `additionalTranslations[bahasa].courses.items` menggunakan properti:

- `category` — ID filter kategori; harus cocok dengan salah satu ID pada `courses.filters`.
- `label` — label kategori pada visual kartu.
- `level` dan `duration` — tingkat kesulitan dan estimasi durasi.
- `title` dan `description` — judul dan ringkasan kursus.
- `skills` — daftar keterampilan yang ditampilkan pada kartu.

Kartu kursus saat ini adalah contoh. Tautan kursus mengarah ke bagian Cara Kerja, bukan ke materi atau pendaftaran yang aktif.

### Berita, bukti, dan statistik

Objek `demoContent[bahasa]` memakai teks placeholder yang sengaja mudah dikenali:

- Ganti nilai metrik seperti `XX%` hanya dengan data yang benar-benar diukur.
- Ganti ringkasan bukti dengan penelitian atau evaluasi yang dapat diverifikasi, lengkap dengan sumber, konteks, dan keterbatasan.
- Ganti kartu wawasan dengan artikel nyata, tanggal publikasi, ringkasan, dan tautan yang telah diperiksa.
- Jika informasi belum tersedia, pertahankan keterangan bahwa konten masih berupa contoh daripada membuat klaim.

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

1. Tentukan identitas pengelola dan status produk; halaman ini saat ini adalah konsep, bukan platform belajar operasional.
2. Ganti placeholder kursus, sertifikat, metrik, artikel, profil, dan kontak dengan informasi yang sudah disetujui.
3. Pastikan CTA menuju tindakan yang benar-benar tersedia.
4. Verifikasi semua sumber dan tautan, serta bedakan hasil penelitian eksternal dari dampak produk sendiri.
5. Uji semua bahasa, mode gelap, tata letak mobile, aksesibilitas, `npm run lint`, dan `npm run build`.
6. Deploy isi direktori `dist/` ke hosting statis yang sesuai.

## Lisensi

Lisensi proyek belum ditetapkan. Pastikan status lisensi kode dan aset pihak ketiga ditentukan sebelum distribusi publik.
