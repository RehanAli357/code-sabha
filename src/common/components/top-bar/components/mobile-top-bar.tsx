import { useState } from "react";
import {
  IconButton,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../logo";

const MobileTopBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const menuItems = [
    { text: "About", path: "#about-us" },
    { text: "Courses", path: "#courses" },
    { text: "Contact", path: "#contact-us" },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack
        component="nav"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        pt={1}
      >
        <Logo />
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: "darkblue" }} />
        </IconButton>
      </Stack>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box width={250} role="presentation">
          <Stack direction="row" justifyContent="flex-end" p={1}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon sx={{ color: "darkblue" }} />
            </IconButton>
          </Stack>

          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.path}
                  onClick={handleLinkClick}
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      color: "darkblue",
                      fontSize: 16,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileTopBar;
