import { List, ListItem, Stack } from "@mui/material";
import Logo from "../../logo";

const DesktopTopBar = () => {
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
            component={"a"}
            href="#about-us"
            sx={{
              color: "darkblue",
              fontSize: "20px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            About Us
          </ListItem>
          <ListItem
            component={"a"}
            href="#courses"
            sx={{
              color: "darkblue",
              fontSize: "20px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Courses
          </ListItem>
          <ListItem
            component={"a"}
            href="#contact-us"
            sx={{
              color: "darkblue",
              fontSize: "20px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Contact Us
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};

export default DesktopTopBar;
