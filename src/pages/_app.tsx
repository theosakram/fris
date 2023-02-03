import { ChakraProvider } from "@chakra-ui/react";

import { AppProps } from "next/app";
import { MainLayout } from "src/uikit/components/MainLayout";
import theme from "src/uikit/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
