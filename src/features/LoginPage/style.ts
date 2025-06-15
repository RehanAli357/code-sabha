import { Button, Paper, Stack, styled, Typography } from "@mui/material";

export const LoginStack = styled(Stack)(() => ({
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#0d0d0d",
  px: 2,
}));

export const LoginFormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: "100%",
  maxWidth: 440,
  borderRadius: 3,
  background: "rgba(25, 25, 25, 0.85)",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  boxShadow: "0 0 30px #00ffff33",
  color: "#fff",
  fontFamily: "'Fira Code', monospace",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    padding: theme.spacing(3),
  },
}));

export const LoginFormHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  textAlign: "center",
  color: "#00f0ff",
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.h6.fontSize,
  },
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  background: "linear-gradient(to right, #00f0ff, #4facfe)",
  color: "#000",
  fontWeight: 600,
  fontFamily: "'Fira Code', monospace",
  boxShadow: "0 0 10px #00f0ff99",
  textTransform: "none",
  transition: "0.3s",
  "&:hover": {
    background: "linear-gradient(to right, #4facfe, #00f0ff)",
    transition: "0.3s",
  },
}));
