import { useState, useEffect, type FormEvent } from 'react';
import { Plus, FolderPlus } from 'lucide-react';
import type { CategoryType } from '../types/activity';

interface ActivityFormProps {
  onAddActivity: (title: string, time: string, category: CategoryType) => void;
}

const DEFAULT_CATEGORIES = ['Kuliah', 'Olahraga', 'Organisasi', 'Pribadi'];

export default function ActivityForm({ onAddActivity }: ActivityFormProps) {
  const [categories, setCategories] = useState<string[]>(() => {
    const saved = localStorage.getItem('activical_categories');
    return saved ? JSON.parse(saved) : DEFAULT_CATEGORIES;
  });

  const [title, setTitle] = useState('');
  const [time, setTime] = useState('08:00');
  const [category, setCategory] = useState<CategoryType>(categories[0] || 'Kuliah');
  const [isAddingCat, setIsAddingCat] = useState(false);
  const [newCatName, setNewCatName] = useState('');

  useEffect(() => {
    localStorage.setItem('activical_categories', JSON.stringify(categories));
  }, [categories]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddActivity(title.trim(), time, category);
    setTitle('');
  };

  const handleAddCategory = () => {
    const trimmed = newCatName.trim();
    if (!trimmed) return;
    if (!categories.includes(trimmed)) {
      setCategories((prev) => [...prev, trimmed]);
    }
    setCategory(trimmed);
    setNewCatName('');
    setIsAddingCat(false);
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
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 focus:border-[#5B5CE6] focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => setIsAddingCat(!isAddingCat)}
          title="Tambah kategori baru"
          className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
        >
          <FolderPlus className="h-3.5 w-3.5" />
        </button>

        <button
          type="submit"
          className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-[#5B5CE6] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-[#4A4BD4] dark:bg-[#7C7EF8] dark:text-zinc-950 cursor-pointer"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>Tambah</span>
        </button>
      </div>

      {/* Input tambah kategori baru saat ikon folder diklik */}
      {isAddingCat && (
        <div className="flex items-center gap-2 pt-1">
          <input
            type="text"
            placeholder="Nama kategori baru..."
            value={newCatName}
            onChange={(e) => setNewCatName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddCategory())}
            className="flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-900 focus:border-[#5B5CE6] focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
          <button
            type="button"
            onClick={handleAddCategory}
            className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600 cursor-pointer"
          >
            Simpan
          </button>
        </div>
      )}
    </form>
  );
}