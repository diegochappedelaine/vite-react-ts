import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface BearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  decreasePopulation: () => void;
}

export const useBearStore = create<BearStore>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
        decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
      }),
      {
        name: 'bear-storage',
      },
    ),
  ),
);
