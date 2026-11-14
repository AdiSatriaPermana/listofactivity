import { CalendarDays, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  studentName: string;
  studentNim: string;
}

export default function Navbar({
  darkMode,
  onToggleDarkMode,
  studentName,
  studentNim,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200/80 bg-[#FAFAFA]/80 backdrop-blur-md dark:border-zinc-800 dark:bg-[#0D0D0F]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Kiri: Logo Kalender + List Of Activity + Menu Navigasi */}
        <div className="flex items-center gap-10">
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5B5CE6]/10 text-[#5B5CE6] dark:bg-[#7C7EF8]/15 dark:text-[#7C7EF8]">
              <CalendarDays className="h-5 w-5" />
            </div>
            <span>List Of Activity</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600 dark:text-zinc-400">
            <a
              href="#beranda"
              className="transition-colors hover:text-[#5B5CE6] dark:hover:text-[#7C7EF8]"
            >
              Beranda
            </a>
            <a
              href="#kalender-section"
              className="transition-colors hover:text-[#5B5CE6] dark:hover:text-[#7C7EF8]"
            >
              Kalender &amp; Jadwal
            </a>
          </nav>
        </div>

        {/* Kanan: Badge Nama & NIM + Tombol Toggle Light / Dark Mode */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            <span className="truncate max-w-[110px] sm:max-w-none">{studentName}</span>
            <span className="text-gray-300 dark:text-zinc-700">|</span>
            <span className="font-mono text-[#5B5CE6] dark:text-[#7C7EF8]">{studentNim}</span>
          </div>

          <button
            onClick={onToggleDarkMode}
            aria-label="Ubah Tema"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-xs transition hover:bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}