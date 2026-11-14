interface DayCellProps {
  day: number | null;
  isSelected: boolean;
  isToday: boolean;
  activityCount: number;
  onClick: () => void;
}

export default function DayCell({
  day,
  isSelected,
  isToday,
  activityCount,
  onClick,
}: DayCellProps) {
  if (day === null) {
    return <div className="h-12 sm:h-14" />;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex h-12 sm:h-14 flex-col items-center justify-center rounded-xl text-sm font-semibold transition-all cursor-pointer
        ${
          isSelected
            ? 'bg-[#5B5CE6] text-white shadow-sm dark:bg-[#7C7EF8] dark:text-zinc-950'
            : isToday
            ? 'border border-[#5B5CE6]/50 bg-[#5B5CE6]/5 text-[#5B5CE6] dark:border-[#7C7EF8]/50 dark:bg-[#7C7EF8]/10 dark:text-[#7C7EF8]'
            : 'text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-800/80'
        }`}
    >
      <span>{day}</span>

      {activityCount > 0 && (
        <div className="mt-1 flex items-center gap-0.5">
          {Array.from({ length: Math.min(activityCount, 3) }).map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 w-1.5 rounded-full ${
                isSelected ? 'bg-white dark:bg-zinc-950' : 'bg-[#5B5CE6] dark:bg-[#7C7EF8]'
              }`}
            />
          ))}
        </div>
      )}
    </button>
  );
}