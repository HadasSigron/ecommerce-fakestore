"use client";
import { useEffect, useState } from "react";
import { useWishlist } from "../store/wishlist";
import type { Product } from "../store/cart";
import ProductCard from "@/app/components/ProductCard/ProductCard";

export default function WishlistPage() {
  const { ids } = useWishlist();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!ids.length) { setProducts([]); return; }
    Promise.all(ids.map(id => fetch(`https://fakestoreapi.com/products/${id}`).then(r=>r.json())))
      .then(setProducts);
  }, [ids]);

  if (!ids.length) return <p>No favorites yet.</p>;
  return <section className="grid">{products.map(p => <ProductCard key={p.id} p={p} />)}</section>;
}
