import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore } from "../store/createStore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={createStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
