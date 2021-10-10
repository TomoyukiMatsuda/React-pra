import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import NextNProgress from "nextjs-progressbar";
import nProgress from "nprogress";

nProgress.configure({ speed: 200, minimum: 0.3 });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <RecoilRoot>で囲うことで、その中でRecoilが利用できるようになる
    <RecoilRoot>
      <NextNProgress />{" "}
      {/*ページ遷移時とAPIローディング時にプログレスバーを表示*/}
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
