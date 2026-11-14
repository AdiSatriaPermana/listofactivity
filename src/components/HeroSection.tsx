import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="beranda" className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-zinc-400">
        <span className="h-2 w-2 rounded-full bg-[#5B5CE6] dark:bg-[#7C7EF8]"></span>
        <span>Aplikasi Kalender &amp; Daftar Kegiatan</span>
      </div>

      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white leading-[1.15]">
        Satu Kalender.
        <span className="block text-[#5B5CE6] dark:text-[#7C7EF8]">
          Semua Kegiatan Teratur.
        </span>
      </h1>

      <p className="mt-4 max-w-2xl text-base text-gray-600 dark:text-zinc-400 leading-relaxed">
        Pilih tanggal pada kalender untuk melihat agenda harian, tambahkan jadwal baru,
        kelompokkan berdasarkan kategori, dan pantau progres kegiatanmu dalam satu tempat.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <a
          href="#kalender-section"
          className="inline-flex items-center gap-2 rounded-xl bg-[#5B5CE6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4A4BD4] dark:bg-[#7C7EF8] dark:text-zinc-950 dark:hover:bg-[#6B6DF0]"
        >
          <span>Mulai Atur Jadwal</span>
          <ArrowDown className="h-4 w-4" />
        </a>
        <span className="text-xs font-medium text-gray-500 dark:text-zinc-500">
          Pilih Tanggal · Catat · Selesaikan
        </span>
      </div>
    </section>
  );
}