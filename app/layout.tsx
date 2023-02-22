import { Manrope, Pacifico } from "@next/font/google";
import "./globals.css";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Search from "@/app/(Home)/Search";

const fontPacifico = Pacifico({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const fontManrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={fontManrope.className}>
        <main className={styles.main}>
          <div className={styles.fullRow}>
            <Link href="/">
              <h1
                className={fontPacifico.className}
                style={{ marginBottom: 30 }}
              >
                Weather app
              </h1>
            </Link>
            <Search />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
