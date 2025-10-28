"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart, type Product } from "@/app/store/cart";
import { useWishlist } from "@/app/store/wishlist";
import s from "./ProductDetails.module.css";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [p, setP] = useState<Product | null>(null);
  const add = useCart(st=>st.add);
  const { ids, toggle } = useWishlist();

  useEffect(() => {
    if (id) fetch(`https://fakestoreapi.com/products/${id}`).then(r=>r.json()).then(setP);
  }, [id]);

  if (!p) return <p>Loading…</p>;

  return (
    <article className={s.wrap}>
      <img className={s.img} src={p.image} alt={p.title} />
      <div>
        <h1>{p.title}</h1>
        <p>{p.description}</p>
        <p className={s.price}>${p.price.toFixed(2)}</p>
        <div className={s.row}>
          <button className={`${s.btn} ${s.cta}`} onClick={() => add(p)}>ADD TO CART</button>
          <button className={s.btn} aria-pressed={ids.includes(p.id)} onClick={() => toggle(p.id)}>
            {ids.includes(p.id) ? "★ Saved" : "☆ Save"}
          </button>
        </div>
        <small>{p.category}</small>
      </div>
    </article>
  );
}
