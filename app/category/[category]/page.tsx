"use client";
import { useParams } from "next/navigation";
import ProductList from "@/app/components/ProductList/ProductList";
import s from "./Category.module.css";

const SLUG_TO_NAME: Record<string,string> = {
  mens: "men's clothing",
  womens: "women's clothing",
  jewelery: "jewelery",
  electronics: "electronics",
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const name = SLUG_TO_NAME[String(category)] ?? String(category);
  const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(name)}`;

  return (
    <>
      <h1 className={s.title}>{name}</h1>
      <ProductList url={url} />
    </>
  );
}
