import { Stack, Typography, Box } from "@mui/material";
import Logo from "../logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box component="footer" bgcolor="darkblue" color="aliceblue" py={4}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        px={4}
        gap={3}
      >
        <Stack flexDirection={"row"} alignItems={"flex-end"} justifyContent={'flex-start'}>
          <Logo color="gold" />
          <span style={{marginBottom:'10px',fontSize:"10px",color:"aliceblue",marginLeft:'5px'}}>v0.0.1</span>
        </Stack>

        <Stack direction="row" spacing={3}>
          <Link to="/" style={{ color: "white" }}>
            About Us
          </Link>
          <Link to="/" style={{ color: "white" }}>
            Contact Us
          </Link>
          <Link to="/" style={{ color: "white" }}>
            Privacy
          </Link>
        </Stack>
      </Stack>

      <Typography
        variant="body2"
        textAlign="center"
        mt={4}
        px={2}
        color="aliceblue"
      >
        © {new Date().getFullYear()} CodeSabha. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
