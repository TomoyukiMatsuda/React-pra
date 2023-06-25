import "./global.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header
          style={{
            display: "flex",
            columnGap: 16,
          }}
        >
          <Link href={"/app"}>Appトップページ</Link>
          <Link href={"/app/about"}>Aboutページ</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
