import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ChakraProvider>
  );
}
