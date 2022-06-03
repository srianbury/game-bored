import * as React from "react";
import { FC } from "react";
import { Box, Container } from "@mui/material";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <Box sx={{ bgcolor: "primary.light", py: 2 }}>
        <Container fixed>
          <h1>Header</h1>
        </Container>
      </Box>
    </header>
  );
};

export { Header };
