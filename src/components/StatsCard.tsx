import type { ReactNode } from 'react';

interface StatsCardProps {
  label: string;
  count: number;
  icon: ReactNode;
  colorClass: string;
}

export default function StatsCard({ label, count, icon, colorClass }: StatsCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200/90 bg-white p-5 shadow-2xs dark:border-zinc-800 dark:bg-[#18181B]">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colorClass}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500 dark:text-zinc-400">{label}</p>
        <p className="mt-0.5 text-2xl font-bold text-gray-900 dark:text-white">{count}</p>
      </div>
    </div>
  );
}