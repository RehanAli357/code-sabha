import { Navigate } from "react-router-dom";
import { ROUTE } from "../../../router/routes";

interface AuthGuardProps {
  Component: React.ComponentType;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ Component }) => {
  const isAuthenticated = false;

  return isAuthenticated ? <Component /> : <Navigate to={ROUTE.Login} />;
};

export default AuthGuard;
