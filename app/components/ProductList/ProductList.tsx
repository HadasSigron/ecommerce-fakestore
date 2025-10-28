"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import type { Product } from "@/app/store/cart";
import s from "./ProductList.module.css";

export default function ProductList({ url }: { url: string }) {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url).then(r=>r.json()).then(setData).finally(()=>setLoading(false));
  }, [url]);

  if (loading) return <p>Loading…</p>;

  return <section className={s.grid}>{data.map(p => <ProductCard key={p.id} p={p} />)}</section>;
}
