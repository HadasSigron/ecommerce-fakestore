"use client";
import Link from "next/link";
import type { Product } from "../../store/cart";
import { useCart } from "../../store/cart";
import { useWishlist } from "../../store/wishlist";
import s from "./ProductCard.module.css";

export default function ProductCard({ p }: { p: Product }) {
  const add = useCart(st => st.add);
  const { ids, toggle } = useWishlist();

  return (
    <div className={s.card}>
      <Link href={`/product/${p.id}`}>
        <div className={s.imgWrap}>
          <img className={s.img} src={p.image} alt={p.title} />
        </div>
        <h3 className={s.title}>{p.title}</h3>
      </Link>

      <div className={s.meta}>{p.category}</div>
      <div className={s.price}>${p.price.toFixed(2)}</div>

      <div className={s.row}>
        <button className={`${s.btn} ${s.cta}`} onClick={() => add(p)}>ADD TO CART</button>
        <button
          className={`${s.btn} ${s.star}`}
          aria-pressed={ids.includes(p.id)}
          onClick={() => toggle(p.id)}
          title="Save to wish-list"
        >
          {ids.includes(p.id) ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}
