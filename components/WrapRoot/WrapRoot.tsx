import * as React from "react";
import { FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Box, CssBaseline } from "@mui/material";
import { Header, Footer } from "..";

const WrapRoot: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <CssBaseline />
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="description" content="Game Bored" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box sx={{ my: 2 }}>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </>
  );
};

export { WrapRoot };
