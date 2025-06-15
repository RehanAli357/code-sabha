import { useState } from "react";
import { TextField, Box, Link } from "@mui/material";
import Logo from "../../common/components/logo";
import {
  LoginButton,
  LoginFormHeading,
  LoginFormPaper,
  LoginStack,
} from "./style";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../router/routes";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    const newErrors = { username: "", password: "" };

    if (!username.trim() || username !== "admin") {
      newErrors.username = "Invalid Username";
    }

    if (!password.trim() || password !== "12345") {
      newErrors.password = "Invalid Password";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (!hasErrors) {
      navigate(ROUTE.PortalHome);
    }
  };

  return (
    <LoginStack>
      <LoginFormPaper elevation={6}>
        <Box display="flex" justifyContent="center" mb={3}>
          <Logo color="#00f0ff" />
        </Box>

        <LoginFormHeading>Welcome to DevConsole</LoginFormHeading>

        <TextField
          fullWidth
          label="Username"
          type="text"
          margin="normal"
          variant="filled"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!errors.username}
          helperText={errors.username}
          InputProps={{
            style: {
              backgroundColor: "#111",
              color: "#fff",
              fontFamily: "'Fira Code', monospace",
            },
          }}
          InputLabelProps={{
            style: { color: "#888" },
          }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{
            style: {
              backgroundColor: "#111",
              color: "#fff",
              fontFamily: "'Fira Code', monospace",
            },
          }}
          InputLabelProps={{
            style: { color: "#888" },
          }}
        />

        <Box display="flex" justifyContent="flex-end" mt={1} mb={2}>
          <Link
            href="#"
            underline="hover"
            variant="body2"
            sx={{ color: "#00f0ff" }}
          >
            Forgot password?
          </Link>
        </Box>

        <LoginButton fullWidth variant="contained" onClick={handleLogin}>
          Access Console
        </LoginButton>
      </LoginFormPaper>
    </LoginStack>
  );
};

export default LoginPage;
