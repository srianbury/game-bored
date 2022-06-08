import * as React from "react";
import { useContext, FC } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { UserContext } from "..";
import { NavigationDrawerContext } from "../NavigationDrawer";

const Header: FC<{}> = () => {
  const theme = useTheme();
  const isWiderThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  const userContext = useContext(UserContext);
  const { isOpen, openDrawer } = useContext(NavigationDrawerContext);

  return (
    <header>
      <Box sx={{ bgcolor: "primary.light", py: 2 }}>
        <Container fixed>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
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
            {isWiderThanSm ? (
              <Box>
                {userContext && userContext.user ? (
                  <Box>{`Hello, ${userContext.user.username}`}</Box>
                ) : (
                  <Button onClick={userContext.signIn} variant="outlined">
                    Sign In
                  </Button>
                )}
              </Box>
            ) : null}
          </Grid>
        </Container>
      </Box>
    </header>
  );
};

export { Header };
