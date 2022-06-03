import * as React from "react";
import { FC } from "react";
import { Box, Container } from "@mui/material";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer>
      <Box sx={{ bgcolor: "primary.light", py: 2 }}>
        <Container fixed>
          <h1>Footer</h1>
        </Container>
      </Box>
    </footer>
  );
};

export { Footer };
