import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./components/Header/Header"), { ssr: true });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
