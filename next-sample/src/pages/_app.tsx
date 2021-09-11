import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  // todo 一旦Appで囲っちゃう<RecoilRoot>けど要検討
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
