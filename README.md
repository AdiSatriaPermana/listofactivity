# List Of Activity — Kalender & Daftar Kegiatan

Aplikasi web manajemen kegiatan berbasis kalender interaktif yang dibangun menggunakan **React**, **TypeScript**, **Vite**, dan **Tailwind CSS** untuk memenuhi Tugas Pertemuan 7 Pengembangan Aplikasi Web.

- **Nama:** Adi Satria Permana
- **NIM:** 1247050074
## Daftar Komponen React (`src/components/`)

1. **`Navbar.tsx`**: Navigasi utama halaman, brand aplikasi, identitas mahasiswa (Nama & NIM), serta tombol pengubah tema Light/Dark Mode.
2. **`HeroSection.tsx`**: Bagian pembuka halaman yang memuat judul utama dan tombol navigasi cepat menuju kalender.
3. **`StatsCard.tsx` *(Reusable Component)***: Komponen kartu statistik yang digunakan kembali untuk menampilkan jumlah Total Kegiatan, Belum Selesai, dan Selesai.
4. **`CalendarGrid.tsx`**: Menampilkan grid kalender bulanan, navigasi antarbulan, serta indikator jumlah kegiatan pada setiap tanggal.
5. **`DayCell.tsx` *(Reusable Component)***: Komponen kotak satuan untuk setiap tanggal di dalam kalender yang menangani status terpilih (*selected*), hari ini (*today*), dan titik indikator jadwal.
6. **`ActivityPanel.tsx`**: Panel detail agenda berdasarkan tanggal yang diklik pada kalender, dilengkapi filter status (*Semua*, *Belum*, *Selesai*).
7. **`ActivityForm.tsx`**: Formulir input untuk menambahkan kegiatan baru lengkap dengan jam dan kategori (*Kuliah*, *Olahraga*, *Organisasi*, *Pribadi*).
8. **`ActivityItem.tsx` *(Reusable Component)***: Kartu satuan kegiatan yang menampilkan judul, badge kategori, waktu, tombol ubah status selesai, dan tombol hapus.

## Penerapan Konsep React

- **Props**: Mengirim data dan fungsi callback dari `App.tsx` (parent) ke komponen child (misalnya `selectedDate`, `activities`, `onSelectDate`, `onAddActivity`, `onToggleActivity`, `onDeleteActivity`, dan `darkMode`).
- **State (`useState`)**: Mengelola data dinamis seperti daftar kegiatan (`activities` yang tersimpan di `localStorage`), tanggal aktif (`selectedDate`), bulan/tahun kalender, tab filter (`filterStatus`), dan tema (`darkMode`).
- **Event Handling**: Menangani interaksi pengguna melalui `onClick` (memilih tanggal kalender, menandai kegiatan selesai, menghapus kegiatan, mengganti bulan, serta toggle tema), `onChange` (input teks, waktu, dan kategori), dan `onSubmit` (menambahkan jadwal baru).
- **Conditional Rendering & List Rendering**: Merender daftar tanggal kalender dan daftar kegiatan menggunakan `.map()` dengan `key` unik, serta menampilkan tampilan *empty state* apabila tanggal yang dipilih belum memiliki jadwal.