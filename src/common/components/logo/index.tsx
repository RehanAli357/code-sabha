import { Link } from "react-router-dom";
import { LogoStyled } from "../top-bar/style";
import { ROUTE } from "../../../router/routes";

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = "darkblue" }) => {
  return (
    <Link to={ROUTE.HomePageRoute} style={{textDecoration:"none"}}>
      <LogoStyled color={color}>CODE SABHA</LogoStyled>
    </Link>
  );
};

export default Logo;
