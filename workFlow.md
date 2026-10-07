# Alur Kerja Website EduFuture

Dokumen ini menjelaskan alur yang tersedia pada prototipe EduFuture saat ini, berdasarkan fitur di aplikasi. EduFuture adalah prototipe konsep pembelajaran digital, **bukan LMS lengkap**. Katalog jalur, skill, dan aktivitas planner masih berupa contoh.

## 1. Ringkasan alur utama

```text
Pengunjung membuka EduFuture
  → Menjelajahi konsep dan bagian-bagian website
  → Membuka katalog jalur belajar contoh
  → (Opsional) mencari atau memfilter jalur
  → Memilih jalur dan target waktu di planner
  → Melihat urutan aktivitas tiga minggu
  → (Opsional) menandai dan menyimpan progres secara lokal
  → Menjelajahi referensi, FAQ, komunitas, dan kontak
  → Kembali ke bagian lain atau ke beranda
```

Pengunjung tidak perlu membuat akun atau masuk. Website tidak memiliki proses pendaftaran kelas, pengambilan kursus sungguhan, pengumpulan tugas, ujian, ataupun penerbitan sertifikat.

## 2. Alur dari awal sampai akhir

### A. Membuka website

1. Pengunjung membuka halaman EduFuture.
2. Website menampilkan beranda dengan pengenalan konsep dan tautan untuk menjelajahi katalog atau membaca informasi tentang EduFuture.
3. Pengunjung dapat menggulir halaman atau menggunakan tautan navigasi untuk berpindah ke bagian tertentu.
4. Di perangkat mobile, tombol menu membuka navigasi; memilih tautan atau tombol penutup akan menutup menu.

### B. Mengatur tampilan dan navigasi

- **Bahasa:** pengunjung dapat memilih Bahasa Indonesia, Inggris, Mandarin, Spanyol, Arab, atau Prancis. Pilihan disimpan di `localStorage`. Bahasa Arab menggunakan arah tata letak kanan-ke-kiri (RTL).
- **Tema:** tombol tema mengubah tampilan terang/gelap. Preferensi disimpan di `localStorage`.
- **Peta navigasi:** bagian roadmap visual menyediakan tombol sebelumnya, berikutnya, dan ulang; pengunjung dapat memilih titik atau menggunakan kontrol peta untuk melihat ringkasan bagian halaman dan menuju bagian tersebut. Peta ini adalah navigasi halaman, bukan kurikulum atau progres belajar.
- **Gerakan:** animasi mengikuti preferensi `prefers-reduced-motion` pada perangkat.

Navigasi utama meliputi Tentang, Peta navigasi, Cara kerja, Katalog, Wawasan, dan FAQ. Tautan ajakan mengarahkan pengunjung ke bagian program/katalog; tautan internal lain tersedia di konten dan footer.

### C. Membaca informasi EduFuture

Saat menggulir halaman, pengunjung dapat membaca bagian-bagian berikut:

1. **Tentang:** menjelaskan gagasan pengalaman belajar digital.
2. **Peta navigasi:** gambaran visual bagian-bagian website.
3. **Cara kerja:** empat langkah pembelajaran yang dijelaskan sebagai konsep.
4. **Ruang lingkup prototipe:** menjelaskan apa yang benar-benar tersedia dan batasannya.
5. **Program/pendekatan:** menampilkan contoh pendekatan teknologi pendidikan; tautannya membawa pengunjung ke katalog.
6. **Wawasan dan referensi:** menampilkan ringkasan serta tautan ke sumber eksternal yang dibuka di tab baru.
7. **Komunitas:** menjelaskan peran konseptual pembelajar, pendidik, pembuat, keluarga, atau institusi.
8. **FAQ:** pertanyaan dapat dibuka atau ditutup untuk membaca jawabannya.
9. **Kontak:** tautan email hanya muncul jika alamat resmi dikonfigurasi melalui `VITE_CONTACT_EMAIL`; jika tidak, website menampilkan keterangan bahwa kontak belum tersedia.
10. **Ajakan berpartisipasi dan footer:** tautan mengarah kembali ke katalog, bagian website, atau beranda.

Bagian “Cara kerja” dan beberapa pendekatan program menjelaskan pengalaman yang dibayangkan secara umum; bagian tersebut **tidak berarti** semua langkah LMS seperti kursus, materi, atau sertifikasi sudah berfungsi.

### D. Menjelajahi katalog

1. Pengunjung membuka bagian **Katalog pembelajaran**.
2. Katalog menampilkan jalur keterampilan contoh, termasuk AI & Data, Desain Belajar, Pengembangan, dan Inklusi Digital.
3. Pengunjung dapat memilih kategori untuk memfilter kartu atau mengetik judul/skill di kolom pencarian. Filter dan pencarian dapat digunakan bersamaan.
4. Jika tidak ada jalur yang cocok, website menampilkan pesan bahwa hasil tidak ditemukan.
5. Kartu berisi judul, deskripsi, tingkat, perkiraan durasi, dan skill contoh. Tautan pada kartu mengarah ke bagian **Cara kerja**, bukan ke halaman materi atau pendaftaran kursus.

### E. Menggunakan planner belajar

1. Pengunjung memilih salah satu jalur contoh pada kontrol planner.
2. Pengunjung memilih target waktu mingguan: **2, 4, atau 6 jam**.
3. Planner menampilkan tiga aktivitas dalam urutan contoh:
   - **Minggu 1:** memahami dasar skill pertama dan mencatat pertanyaan.
   - **Minggu 2:** mencoba latihan kecil dengan skill berikutnya.
   - **Minggu 3:** menggunakan skill berikutnya untuk membuat karya kecil dan melakukan refleksi.
4. Target jam dimasukkan ke teks aktivitas sebagai sasaran mingguan. Planner tidak membagi jam tersebut menjadi jadwal atau sesi otomatis.
5. Pengunjung dapat menandai atau membatalkan tanda selesai pada setiap aktivitas.
6. Website menghitung aktivitas yang ditandai dan memperbarui indikator progres.
7. Perubahan disimpan di browser menggunakan `localStorage`, menurut kategori jalur. Setelah halaman dimuat ulang di browser yang sama, progres dapat dibaca kembali.
8. Tombol **Atur ulang** menghapus progres untuk jalur yang sedang dipilih.

**Diagram alur planner:**

```text
Pilih jalur contoh
  → Pilih target waktu mingguan (2 / 4 / 6 jam)
  → Cocokkan tiga skill jalur dengan tiga template aktivitas
  → Tampilkan aktivitas Minggu 1–3
  → Pengunjung menandai aktivitas selesai
  → Hitung checklist selesai dan perbarui indikator progres
  → Simpan progres untuk jalur itu di localStorage
  → (Opsional) atur ulang progres jalur yang dipilih
```

## 3. Logika planner yang berjalan

Planner menggunakan data contoh yang telah tersedia di aplikasi, bukan algoritma yang menganalisis kemampuan siswa:

1. Cari jalur dengan kategori yang dipilih.
2. Ambil skill dari jalur itu berdasarkan urutannya.
3. Pasangkan tiga skill tersebut dengan template aktivitas minggu pertama, kedua, dan ketiga.
4. Tampilkan target jam pilihan sebagai bagian dari keterangan aktivitas.
5. Baca tiga nilai checklist untuk jalur itu dan jumlahkan yang bernilai selesai.
6. Simpan perubahan checklist lokal dengan kunci `edufuture-planner-progress`.

```text
jalur = cariJalur(kategoriYangDipilih)
untuk indeks minggu 0 sampai 2:
    skill = jalur.skills[indeks minggu]
    aktivitas = templateMinggu[indeks minggu](skill, targetJam)

progres = bacaChecklist(jalur.kategori)
tampilkan(aktivitas, progres)
saat checklist berubah:
    simpanChecklistLokal(jalur.kategori, progresTerbaru)
```

Jika data progres yang tersimpan tidak valid atau gagal dibaca, aplikasi mencatat kesalahan ke konsol dan memulai dengan progres kosong.

## 4. Data dan batas penyimpanan

- Data jalur, skill, template aktivitas, teks, dan terjemahan disediakan aplikasi sebagai konten contoh.
- Checklist planner disimpan di browser/perangkat lokal; tidak dikirim ke server dan tidak tersinkron ke perangkat lain.
- Tema dan bahasa juga disimpan lokal.
- Tidak ada akun, database/backend aplikasi, profil siswa, data kelas, catatan nilai, atau penyimpanan materi pada server.

## 5. Hal yang belum terjadi di website

Walaupun konsep halaman menyebut pengalaman belajar dan sertifikasi, prototipe ini belum:

- mengajarkan materi kursus sungguhan atau menyediakan pendaftaran kelas;
- menguji kemampuan awal, menjalankan kuis, memeriksa jawaban, atau memberi nilai;
- menyesuaikan aktivitas berdasarkan performa atau merekomendasikan materi secara adaptif;
- mengelola akun/role siswa, pengajar, dan admin;
- menerima pengumpulan tugas atau memberikan umpan balik pengajar;
- menyimpan progres ke server, menyinkronkan progres antarperangkat, atau menerbitkan sertifikat.

Karena itu, planner sebaiknya dipahami sebagai **demo perencanaan dan checklist sederhana**, bukan LMS atau sistem evaluasi hasil belajar.