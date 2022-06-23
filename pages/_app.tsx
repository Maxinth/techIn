import type { AppProps } from "next/app";
import { GlobalStyle } from "../appStyled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
