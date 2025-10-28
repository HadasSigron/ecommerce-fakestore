"use client";
import ProductList from "@/app/components/ProductList/ProductList";
import hs from ".home//Home.module.css";

export default function HomePage() {
  return (
    <>
      <section className={hs.hero}>
        <img src="/milk-honey-hero.png" alt="Milk & Honey Distillery" />
      </section>
      <h3 className={hs.sectionTitle}>LATEST PRODUCTS</h3>
      <ProductList url="https://fakestoreapi.com/products" />
    </>
  );
}
