import { Box, CircularProgress } from "@mui/material";

const Loader = () => (
  <Box
    sx={{
      height: "40vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress />
  </Box>
);

export default Loader;
