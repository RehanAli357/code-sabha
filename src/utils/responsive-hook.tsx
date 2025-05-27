import { useMediaQuery } from "@mui/material";
import theme from "../../theme";

export const useIsMobileView = () => {
  return useMediaQuery(theme.breakpoints.down("sm"));
};
