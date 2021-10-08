import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <RecoilRoot>で囲うことで、その中でRecoilが利用できるようになる
    <RecoilRoot>
      {/*ページ遷移時のローディング表示*/}
      <NextNProgress />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
