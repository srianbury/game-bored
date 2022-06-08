import * as React from "react";
import { useContext, FC } from "react";
import { Box, Button, Container, Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { UserContext } from "..";
import { NavigationDrawerContext } from "../NavigationDrawer";

const Header: FC<{}> = () => {
  const { user, signIn, signOut } = useContext(UserContext);
  const { isOpen, openDrawer } = useContext(NavigationDrawerContext);

  return (
    <header>
      <Box sx={{ bgcolor: "primary.light", py: 2 }}>
        <Container fixed>
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={openDrawer}
              edge="start"
              sx={{
                ...(isOpen && { display: "none" }),
              }}
            >
              <Menu />
            </IconButton>
            <h1>Header</h1>
          </Toolbar>
          <Box>{`Hello, ${user ? user.username : "Guest"}`}</Box>
          <Button onClick={user ? signOut : signIn} variant="outlined">
            {user ? "Sign Out" : "Sign In"}
          </Button>
        </Container>
      </Box>
    </header>
  );
};

export { Header };
