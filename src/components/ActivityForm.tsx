import { useState, type FormEvent } from 'react';
import { Plus } from 'lucide-react';
import type { CategoryType } from '../types/activity';

interface ActivityFormProps {
  onAddActivity: (title: string, time: string, category: CategoryType) => void;
}

export default function ActivityForm({ onAddActivity }: ActivityFormProps) {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('08:00');
  const [category, setCategory] = useState<CategoryType>('Kuliah');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddActivity(title.trim(), time, category);
    setTitle('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-xl bg-gray-50 p-3.5 dark:bg-zinc-900/80 border border-gray-200/70 dark:border-zinc-800"
    >
      <input
        type="text"
        placeholder="Tambah kegiatan (misal: Olahraga lari pagi)..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-[#5B5CE6] focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:border-[#7C7EF8]"
      />

      <div className="flex flex-wrap items-center gap-2">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 focus:border-[#5B5CE6] focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as CategoryType)}
          className="rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 focus:border-[#5B5CE6] focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
        >
          <option value="Kuliah">Kuliah</option>
          <option value="Olahraga">Olahraga</option>
          <option value="Organisasi">Organisasi</option>
          <option value="Pribadi">Pribadi</option>
        </select>

        <button
          type="submit"
          className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-[#5B5CE6] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-[#4A4BD4] dark:bg-[#7C7EF8] dark:text-zinc-950 cursor-pointer"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>Tambah</span>
        </button>
      </div>
    </form>
  );
}