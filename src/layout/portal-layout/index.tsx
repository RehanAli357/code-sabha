import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const PortalLayout = () => {
  return(
    <Stack minHeight={'100vh'} bgcolor={'#0d0d0d'}>
        
        <Outlet/>
    </Stack>
  )
};

export default PortalLayout;
