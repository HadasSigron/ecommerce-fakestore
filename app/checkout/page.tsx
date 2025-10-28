"use client";
import { useCart } from "../store/cart";
import s from "./Checkout.module.css";

export default function CheckoutPage() {
  const { items, add, removeOne, removeAll, totalPrice, clear } = useCart();
  const entries = Object.values(items);
  if (!entries.length) return <p>Your cart is empty.</p>;

  return (
    <section>
      {entries.map(({ product, qty }) => (
        <div key={product.id} className={s.item}>
          <img src={product.image} alt={product.title} width={60} />
          <div className={s.grow}>
            <h4>{product.title}</h4>
            <p>${product.price.toFixed(2)} × {qty} = {(product.price*qty).toFixed(2)}</p>
          </div>
          <div>
            <button className={s.btn} onClick={() => removeOne(product.id)}>-</button>
            <button className={s.btn} onClick={() => add(product, 1)}>+</button>
            <button className={s.btn} onClick={() => removeAll(product.id)}>Remove</button>
          </div>
        </div>
      ))}
      <hr />
      <p className={s.total}>Total: ${totalPrice().toFixed(2)}</p>
      <button className={s.btn} onClick={() => alert("Simulated payment ✔")}>Pay Now</button>
      <button className={s.btn} onClick={clear}>Clear Cart</button>
    </section>
  );
}
