import { Stack, Typography } from "@mui/material";
import { StyledButton } from "../homePage/style";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../router/routes";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Stack justifyContent={'center'} alignItems={'center'} minHeight={'67.5vh'}>
      <Typography variant="h5" textAlign={"center"}>
        You came too far , this page not found
      </Typography>
      <Typography variant="h2" textAlign={"center"}>
        404
      </Typography>
      <StyledButton
        onClick={() => {
          navigate(ROUTE.HomePageRoute);
        }}
      >
        {" "}
        Go Back
      </StyledButton>
    </Stack>
  );
};

export default ErrorPage;
