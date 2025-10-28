"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/store/cart";
import useHydrated from "@/app/hooks/useHydrated";
import s from "./Header.module.css";

function Nav({ href, label }: { href: string; label: string }) {
  const path = usePathname();
  const cls = `${s.link} ${path === href ? s.active : ""}`;
  return <Link href={href} className={cls}>{label}</Link>;
}

export default function Header() {
  const total = useCart(st => st.totalQty());
  const hydrated = useHydrated();

  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <Link href="/" className={`${s.logo} ${s.link}`}>
          <img src="/favicon.ico" alt="" /> SHOP
        </Link>

        <Nav href="/" label="Home" />
        <Nav href="/category/mens" label="Mens" />
        <Nav href="/category/womens" label="Womens" />
        <Nav href="/category/jewelery" label="Jewelery" />
        <Nav href="/category/electronics" label="Electronics" />

        <div className={s.spacer} />

        <Nav href="/wishlist" label="Wish-List" />
        <Link href="/checkout" className={`${s.link} ${s.cart}`}>
          Cart <span className={s.badge} suppressHydrationWarning> {hydrated ? total : 0} </span>
        </Link>
      </nav>
    </header>
  );
}
