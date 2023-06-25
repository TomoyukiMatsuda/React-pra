import GlobalStyle from "@/src/styles/grobalStyle";
import { ThemeProvider } from "@another_works/react-landscape";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider mode="light" type="tekapo">
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
