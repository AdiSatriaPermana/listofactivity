import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Activity } from '../types/activity';
import DayCell from './DayCell';

interface CalendarGridProps {
  currentYear: number;
  currentMonth: number;
  selectedDate: string;
  activities: Activity[];
  onSelectDate: (dateStr: string) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];
const DAY_NAMES = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

export default function CalendarGrid({
  currentYear,
  currentMonth,
  selectedDate,
  activities,
  onSelectDate,
  onPrevMonth,
  onNextMonth,
}: CalendarGridProps) {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const todayStr = new Date().toISOString().split('T')[0];

  const cells: (number | null)[] = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const formatDate = (day: number) => {
    const m = String(currentMonth + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${currentYear}-${m}-${d}`;
  };

  return (
    <div className="rounded-2xl border border-gray-200/90 bg-white p-5 sm:p-6 shadow-2xs dark:border-zinc-800 dark:bg-[#18181B]">
      {/* Header Bulan & Navigasi */}
      <div className="flex items-center justify-between pb-5 border-b border-gray-100 dark:border-zinc-800">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            {MONTH_NAMES[currentMonth]} {currentYear}
          </h2>
          <p className="text-xs text-gray-500 dark:text-zinc-400">
            Klik tanggal untuk melihat atau menambah jadwal
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrevMonth}
            aria-label="Bulan Sebelumnya"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onNextMonth}
            aria-label="Bulan Berikutnya"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Nama Hari */}
      <div className="mt-4 grid grid-cols-7 text-center text-xs font-semibold text-gray-400 dark:text-zinc-500">
        {DAY_NAMES.map((dayName) => (
          <div key={dayName} className="py-2">
            {dayName}
          </div>
        ))}
      </div>

      {/* Grid Tanggal */}
      <div className="mt-1 grid grid-cols-7 gap-1.5">
        {cells.map((day, index) => {
          const dateStr = day ? formatDate(day) : '';
          const count = day
            ? activities.filter((act) => act.date === dateStr).length
            : 0;

          return (
            <DayCell
              key={index}
              day={day}
              isSelected={dateStr === selectedDate}
              isToday={dateStr === todayStr}
              activityCount={count}
              onClick={() => day && onSelectDate(dateStr)}
            />
          );
        })}
      </div>
    </div>
  );
}