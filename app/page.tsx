"use client";
import ProductList from "./components/ProductList/ProductList";
import styles from "./Home.module.css"

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <img src="/logo2.jpg" alt="Milk & Honey Distillery" className={styles.logo} />
      </section>
      <h3 className={styles.sectionTitle}>LATEST PRODUCTS</h3>
      <ProductList url="https://fakestoreapi.com/products" />
    </>
  );
}
