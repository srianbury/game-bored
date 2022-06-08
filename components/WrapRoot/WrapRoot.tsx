import * as React from "react";
import { FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Box, CssBaseline } from "@mui/material";
import { Header, Footer } from "..";
import { UserContextProvider } from "../UserContext";
import {
  NavigationDrawerContextProvider,
  NavigationDrawer,
} from "../NavigationDrawer";

const WrapRoot: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UserContextProvider>
      <NavigationDrawerContextProvider>
        <CssBaseline />
        <Head>
          <meta name="description" content="Game Bored" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <NavigationDrawer />
        <Box sx={{ my: 2 }}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </NavigationDrawerContextProvider>
    </UserContextProvider>
  );
};

export { WrapRoot };
