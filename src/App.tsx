import { useState, useEffect } from 'react';
import { CalendarDays, CheckCircle2, Clock } from 'lucide-react';
import type { Activity, CategoryType } from './types/activity';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsCard from './components/StatsCard';
import CalendarGrid from './components/CalendarGrid';
import ActivityPanel from './components/ActivityPanel';

const INITIAL_ACTIVITIES: Activity[] = [
  {
    id: 1,
    date: '2026-11-14',
    title: 'Olahraga Lari Pagi',
    time: '06:30',
    category: 'Olahraga',
    isDone: true,
  },
  {
    id: 2,
    date: '2026-11-14',
    title: 'Mengerjakan Tugas React Component-Based UI',
    time: '14:00',
    category: 'Kuliah',
    isDone: false,
  },
  {
    id: 3,
    date: '2026-11-16',
    title: 'Rapat Evaluasi Himpunan',
    time: '16:00',
    category: 'Organisasi',
    isDone: false,
  },
];

export default function App() {
  const STUDENT_NAME = 'Adi Satria Permana';
  const STUDENT_NIM = '1247050074';

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('2026-11-14');
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [currentMonth, setCurrentMonth] = useState<number>(10); // 10 = November

  const [activities, setActivities] = useState<Activity[]>(() => {
    const saved = localStorage.getItem('activical_data');
    return saved ? JSON.parse(saved) : INITIAL_ACTIVITIES;
  });

  useEffect(() => {
    localStorage.setItem('activical_data', JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAddActivity = (title: string, time: string, category: CategoryType) => {
    const newActivity: Activity = {
      id: Date.now(),
      date: selectedDate,
      title,
      time,
      category,
      isDone: false,
    };
    setActivities((prev) => [...prev, newActivity]);
  };

  const handleToggleActivity = (id: number) => {
    setActivities((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item))
    );
  };

  const handleDeleteActivity = (id: number) => {
    setActivities((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const totalCount = activities.length;
  const doneCount = activities.filter((a) => a.isDone).length;
  const pendingCount = totalCount - doneCount;

  const selectedDateActivities = activities.filter((a) => a.date === selectedDate);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 transition-colors duration-200 dark:bg-[#0D0D0F] dark:text-zinc-100">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        studentName={STUDENT_NAME}
        studentNim={STUDENT_NIM}
      />

      <main className="pb-16">
        <HeroSection />

        {/* Baris 3 Kartu Statistik */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatsCard
              label="Total Kegiatan"
              count={totalCount}
              icon={<CalendarDays className="h-5 w-5" />}
              colorClass="bg-indigo-50 text-[#5B5CE6] dark:bg-indigo-500/15 dark:text-[#7C7EF8]"
            />
            <StatsCard
              label="Belum Selesai"
              count={pendingCount}
              icon={<Clock className="h-5 w-5" />}
              colorClass="bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400"
            />
            <StatsCard
              label="Selesai"
              count={doneCount}
              icon={<CheckCircle2 className="h-5 w-5" />}
              colorClass="bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
            />
          </div>
        </section>

        {/* Ruang Kerja Utama: Kalender (Kiri) & Detail Kegiatan (Kanan) */}
        <section id="kalender-section" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 scroll-mt-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <CalendarGrid
                currentYear={currentYear}
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                activities={activities}
                onSelectDate={setSelectedDate}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
              />
            </div>

            <div className="lg:col-span-5">
              <ActivityPanel
                selectedDate={selectedDate}
                activities={selectedDateActivities}
                onAddActivity={handleAddActivity}
                onToggleActivity={handleToggleActivity}
                onDeleteActivity={handleDeleteActivity}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}