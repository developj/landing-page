import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image?: string | null;
  qty: number;
  // you can add color/size/etc later
};

type CartState = {
  items: CartItem[];

  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;

  // simple helpers
  count: () => number;   // total quantity
  total: () => number;   // total price
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      add: (item, qty = 1) =>
        set((state) => {
          const idx = state.items.findIndex((i) => i.id === item.id);
          if (idx >= 0) {
            const next = state.items.slice();
            next[idx] = { ...next[idx], qty: next[idx].qty + qty };
            return { items: next };
          }
          return { items: [...state.items, { ...item, qty }] };
        }),

      remove: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

      setQty: (id, qty) =>
        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, qty } : i)),
        })),

      clear: () => set({ items: [] }),

      count: () => get().items.reduce((n, i) => n + i.qty, 0),
      total: () => get().items.reduce((sum, i) => sum + i.qty * i.price, 0),
    }),
    {
      name: "cart", // localStorage key
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ items: s.items }), // don’t persist helpers
    }
  )
);
