"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlist = create<{ ids: number[]; toggle:(id:number)=>void }>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: id => {
        const has = get().ids.includes(id);
        set({ ids: has ? get().ids.filter(x=>x!==id) : [...get().ids, id] });
      }
    }),
    { name: "fs-wishlist" }
  )
);
