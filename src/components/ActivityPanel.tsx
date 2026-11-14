import { useState } from 'react';
import { CalendarCheck2 } from 'lucide-react';
import type { Activity, CategoryType } from '../types/activity';
import ActivityForm from './ActivityForm';
import ActivityItem from './ActivityItem';

interface ActivityPanelProps {
  selectedDate: string;
  activities: Activity[];
  onAddActivity: (title: string, time: string, category: CategoryType) => void;
  onToggleActivity: (id: number) => void;
  onDeleteActivity: (id: number) => void;
}

export default function ActivityPanel({
  selectedDate,
  activities,
  onAddActivity,
  onToggleActivity,
  onDeleteActivity,
}: ActivityPanelProps) {
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'done'>('all');

  const formattedDate = new Date(selectedDate + 'T00:00:00').toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const displayedActivities = activities.filter((item) => {
    if (filterStatus === 'pending') return !item.isDone;
    if (filterStatus === 'done') return item.isDone;
    return true;
  });

  return (
    <div className="flex flex-col rounded-2xl border border-gray-200/90 bg-white p-5 sm:p-6 shadow-2xs dark:border-zinc-800 dark:bg-[#18181B]">
      {/* Header Tanggal Terpilih */}
      <div className="pb-4 border-b border-gray-100 dark:border-zinc-800">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5CE6] dark:text-[#7C7EF8]">
          Agenda Terpilih
        </span>
        <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
          {formattedDate}
        </h3>
      </div>

      {/* Form Tambah Kegiatan */}
      <div className="mt-4">
        <ActivityForm onAddActivity={onAddActivity} />
      </div>

      {/* Tab Filter Status */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1.5 rounded-lg bg-gray-100 p-1 dark:bg-zinc-900">
          {(['all', 'pending', 'done'] as const).map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setFilterStatus(status)}
              className={`rounded-md px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                filterStatus === status
                  ? 'bg-white text-gray-900 shadow-2xs dark:bg-zinc-800 dark:text-white'
                  : 'text-gray-500 hover:text-gray-800 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`}
            >
              {status === 'all' ? 'Semua' : status === 'pending' ? 'Belum' : 'Selesai'}
            </button>
          ))}
        </div>

        <span className="text-xs text-gray-500 dark:text-zinc-400">
          {displayedActivities.length} kegiatan
        </span>
      </div>

      {/* Daftar Kegiatan & Empty State */}
      <div className="mt-4 flex-1 space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
        {displayedActivities.length > 0 ? (
          displayedActivities.map((item) => (
            <ActivityItem
              key={item.id}
              activity={item}
              onToggle={onToggleActivity}
              onDelete={onDeleteActivity}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 py-10 text-center dark:border-zinc-800">
            <CalendarCheck2 className="h-8 w-8 text-gray-300 dark:text-zinc-600" />
            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-zinc-400">
              Tidak ada kegiatan di daftar ini
            </p>
            <p className="text-xs text-gray-400 dark:text-zinc-500">
              Gunakan form di atas untuk menambahkan jadwal baru.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}