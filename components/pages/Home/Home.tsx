import type { NextPage } from "next";
import Head from "next/head";
import { Box, Container } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Container fixed>
          <Box>Hi, Bri! New File location</Box>
        </Container>
      </main>
    </div>
  );
};

export { Home };
