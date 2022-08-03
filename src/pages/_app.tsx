import React from 'react';
import { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import "swiper/css/bundle";
import "../styles/third-party/swiper.css";
import { makeService } from '../services/mirage';

/* if(process.env.NODE_ENV === "development"){
  makeService();
} */

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    )
}

export default MyApp
