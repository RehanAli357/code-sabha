import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopBar from "../common/components/top-bar";
import Footer from "../common/components/footer";
import useScrollToTop from "../common/hook/use-scroll-top";

const RootLayout = () => {
  useScrollToTop();
  return (
    <Stack bgcolor={"aliceblue"} minHeight={"100vh"}>
      <TopBar />
      <Box minHeight={'65.5vh'}>
        <Outlet />
      </Box>
      <Footer />
    </Stack>
  );
};

export default RootLayout;
