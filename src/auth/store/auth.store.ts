import { create } from "zustand";

type Store = {
  count: number;
  increase(): void;
  reduce(): void;
};

const useCounterStore = create<Store>()((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  reduce: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
