import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopBar from "../common/components/top-bar";
import Footer from "../common/components/footer";

const RootLayout = () => {
  return (
    <Stack bgcolor={"aliceblue"} minHeight={"100vh"}>
      <TopBar />
      <Outlet />
      <Footer />
    </Stack>
  );
};

export default RootLayout;
