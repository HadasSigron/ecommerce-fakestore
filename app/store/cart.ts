"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Product = {
  id: number; title: string; price: number;
  description: string; category: string; image: string;
};

type CartItem = { product: Product; qty: number };

type CartState = {
  items: Record<number, CartItem>;
  add: (p: Product, qty?: number) => void;
  removeOne: (id: number) => void;
  removeAll: (id: number) => void;
  clear: () => void;
  totalQty: () => number;
  totalPrice: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: {},
      add: (p, qty = 1) =>
        set(s => {
          const cur = s.items[p.id]?.qty ?? 0;
          return { items: { ...s.items, [p.id]: { product: p, qty: cur + qty } } };
        }),
      removeOne: id =>
        set(s => {
          const e = s.items[id]; if (!e) return s;
          const next = { ...s.items }; const q = e.qty - 1;
          if (q <= 0) delete next[id]; else next[id] = { ...e, qty: q };
          return { items: next };
        }),
      removeAll: id =>
        set(s => { const n = { ...s.items }; delete n[id]; return { items: n }; }),
      clear: () => set({ items: {} }),
      totalQty: () => Object.values(get().items).reduce((a,c)=>a+c.qty,0),
      totalPrice: () => Object.values(get().items)
        .reduce((a,c)=>a + c.product.price*c.qty, 0),
    }),
    { name: "fs-cart" }
  )
);
