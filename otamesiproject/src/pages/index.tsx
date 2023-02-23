import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/src/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>Next.js13 おためしプロジェクト</Head>
      まっち練習用
    </div>
  );
}
