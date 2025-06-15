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
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTE } from "../../../../router/routes";
import Logo from "../../logo";
import { SearchButtonStyled } from "../../../../features/homePage/style";

const MobileTopBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const menuItems = [
    { text: "About", sectionId: "#about-us" },
    { text: "Courses", sectionId: "#courses" },
    { text: "Contact", sectionId: "#contact-us" },
  ];

  const handleNavClick = (sectionId: string) => {
    setOpen(false);
    const isHome = location.pathname === ROUTE.HomePageRoute;

    if (isHome) {
      const element = document.querySelector(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(`${ROUTE.HomePageRoute}${sectionId}`);
    }
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
                <ListItemButton onClick={() => handleNavClick(item.sectionId)}>
                  <ListItemText
                    primary={item.text}
                    sx={{ color: "darkblue", fontSize: "16px" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <a href="https://devconsole-codesabha.netlify.app/" target="_blank">
            <SearchButtonStyled
              sx={{ width: "100%", marginLeft: 2 }}
              onClick={() => {
                setOpen(false);
              }}
            >
              Portal
            </SearchButtonStyled>
          </a>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileTopBar;
