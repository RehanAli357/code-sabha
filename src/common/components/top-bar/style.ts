import { styled, Typography } from "@mui/material";

export const LogoStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "Rajdhani ,sans-serif",
  fontWeight: "bold",
  fontSize: theme.typography.h4.fontSize,
  textDecoration: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));
