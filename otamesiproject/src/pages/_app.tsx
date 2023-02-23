import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@another_works/react-landscape";
import GlobalStyle from "@/src/styles/grobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider mode="light" type="tekapo">
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
