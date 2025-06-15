import { List, ListItem, Stack } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../logo";
import { ROUTE } from "../../../../router/routes";
import { SearchButtonStyled } from "../../../../features/homePage/style";

const DesktopTopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    const isHome = location.pathname === ROUTE.HomePageRoute;

    if (isHome) {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`${ROUTE.HomePageRoute}${sectionId}`);
    }
  };

  return (
    <Stack
      component={"nav"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      px={2}
      pt={1}
    >
      <Stack>
        <Logo />
      </Stack>
      <Stack>
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            gap: 2,
          }}
        >
          <ListItem
            onClick={() => handleNavClick("#about-us")}
            sx={{
              color: "darkblue",
              fontSize: "20px",
              fontWeight: 500,
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            About Us
          </ListItem>
          <ListItem
            onClick={() => handleNavClick("#courses")}
            sx={{
              color: "darkblue",
              fontSize: "20px",
              fontWeight: 500,
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            Courses
          </ListItem>
          <ListItem
            onClick={() => handleNavClick("#contact-us")}
            sx={{
              color: "darkblue",
              fontSize: "20px",
              fontWeight: 500,
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            Contact Us
          </ListItem>
          <ListItem>
            <a href="https://devconsole-codesabha.netlify.app/" target="_blank">
              <SearchButtonStyled onClick={() => {}}>Portal</SearchButtonStyled>
            </a>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};

export default DesktopTopBar;
