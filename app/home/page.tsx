"use client";
import ProductList from "@/app/components/ProductList/ProductList";
import s from "./Home.module.css";

export default function HomePage() {
  return (
    <>
      <section className={s.hero}>
        <img src="/milk-honey-hero.png" alt="Milk & Honey Distillery" />
      </section>
      <h2 className={s.center}>LATEST PRODUCTS</h2>
      <ProductList url="https://fakestoreapi.com/products" />
    </>
  );
}
