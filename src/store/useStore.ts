import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  savedColleges: string[];
  compareColleges: string[];
  recentColleges: string[];
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleSaved: (id: string) => void;
  toggleCompare: (id: string) => void;
  addRecent: (id: string) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      savedColleges: [],
      compareColleges: [],
      recentColleges: [],
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      toggleSaved: (id) =>
        set((state) => {
          const isSaved = state.savedColleges.includes(id);
          return {
            savedColleges: isSaved
              ? state.savedColleges.filter((c) => c !== id)
              : [...state.savedColleges, id],
          };
        }),
      toggleCompare: (id) =>
        set((state) => {
          const isCompared = state.compareColleges.includes(id);
          if (isCompared) {
            return {
              compareColleges: state.compareColleges.filter((c) => c !== id),
            };
          }
          // Max compare 3
          if (state.compareColleges.length >= 3) {
            return state; // Can't add more, ideally show a toast
          }
          return {
            compareColleges: [...state.compareColleges, id],
          };
        }),
      addRecent: (id) =>
        set((state) => {
          const filtered = state.recentColleges.filter((c) => c !== id);
          return {
            recentColleges: [id, ...filtered].slice(0, 5), // Keep last 5
          };
        }),
    }),
    {
      name: 'uniseeker-storage',
    }
  )
);
