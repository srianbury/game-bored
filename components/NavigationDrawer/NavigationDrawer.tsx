import { useContext, FC } from "react";
import { Box, Drawer } from "@mui/material";
import { NavigationDrawerContext } from ".";

const NavigationDrawer: FC<{}> = () => {
  const { isOpen, closeDrawer } = useContext(NavigationDrawerContext);

  return (
    <Drawer anchor="left" open={isOpen} onClose={closeDrawer}>
      <Box sx={{ width: 250, m: 2 }} role="presentation">
        Drawer
      </Box>
    </Drawer>
  );
};

export { NavigationDrawer };
