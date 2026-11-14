import { CheckCircle2, Circle, Clock, Trash2 } from 'lucide-react';
import type { Activity, CategoryType } from '../types/activity';

interface ActivityItemProps {
  activity: Activity;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const CATEGORY_BADGES: Record<CategoryType, string> = {
  Kuliah: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400',
  Olahraga: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400',
  Organisasi: 'bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400',
  Pribadi: 'bg-purple-50 text-purple-600 dark:bg-purple-500/15 dark:text-purple-400',
};

export default function ActivityItem({ activity, onToggle, onDelete }: ActivityItemProps) {
  return (
    <div
      className={`group flex items-center justify-between gap-3 rounded-xl border p-3.5 transition-all ${
        activity.isDone
          ? 'border-gray-100 bg-gray-50/70 opacity-75 dark:border-zinc-800/60 dark:bg-zinc-900/40'
          : 'border-gray-200/90 bg-white dark:border-zinc-800 dark:bg-zinc-900'
      }`}
    >
      <div className="flex items-start gap-3 min-w-0">
        <button
          type="button"
          onClick={() => onToggle(activity.id)}
          aria-label="Tandai selesai"
          className="mt-0.5 text-gray-400 hover:text-[#5B5CE6] dark:text-zinc-500 dark:hover:text-[#7C7EF8] cursor-pointer"
        >
          {activity.isDone ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          ) : (
            <Circle className="h-5 w-5" />
          )}
        </button>

        <div className="min-w-0">
          <p
            className={`text-sm font-semibold truncate ${
              activity.isDone
                ? 'line-through text-gray-400 dark:text-zinc-500'
                : 'text-gray-900 dark:text-white'
            }`}
          >
            {activity.title}
          </p>

          <div className="mt-1.5 flex items-center gap-2">
            <span
              className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${CATEGORY_BADGES[activity.category]}`}
            >
              {activity.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-zinc-400">
              <Clock className="h-3 w-3" />
              {activity.time}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onDelete(activity.id)}
        aria-label="Hapus kegiatan"
        className="rounded-lg p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-500 dark:text-zinc-500 dark:hover:bg-red-500/10 dark:hover:text-red-400 cursor-pointer"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}