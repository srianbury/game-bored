import { useContext, FC } from "react";
import {
  Box,
  Button,
  Drawer,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NavigationDrawerContext } from ".";
import { UserContext } from "../UserContext";

const NavigationDrawer: FC<{}> = () => {
  const userContext = useContext(UserContext);
  const { isOpen, closeDrawer } = useContext(NavigationDrawerContext);

  return (
    <Drawer anchor="left" open={isOpen} onClose={closeDrawer}>
      <Box sx={{ width: 250, m: 2 }} role="presentation">
        <Stack spacing={2}>
          {userContext && userContext.user ? (
            <Box>{`Hello, ${userContext.user.username}`}</Box>
          ) : null}
          <Button
            onClick={
              userContext && userContext.user
                ? userContext.signOut
                : userContext.signIn
            }
            variant="outlined"
          >
            {userContext && userContext.user ? "Sign Out" : "Sign In"}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};

export { NavigationDrawer };
