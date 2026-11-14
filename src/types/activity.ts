export type CategoryType = 'Kuliah' | 'Olahraga' | 'Organisasi' | 'Pribadi';

export interface Activity {
  id: number;
  date: string; // Format: YYYY-MM-DD (contoh: "2026-11-14")
  title: string;
  time: string; // Contoh: "07:00"
  category: CategoryType;
  isDone: boolean;
}