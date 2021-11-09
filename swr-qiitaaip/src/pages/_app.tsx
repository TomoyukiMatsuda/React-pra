import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

// fetcher
const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
export default MyApp;
