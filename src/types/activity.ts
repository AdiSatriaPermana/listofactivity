export type CategoryType = string;

export interface Activity {
  id: number;
  date: string;
  title: string;
  time: string;
  category: CategoryType;
  isDone: boolean;
}