import DesktopTopBar from "./components/desktop-top-bar";
import { useIsMobileView } from "../../../utils/responsive-hook";
import MobileTopBar from "./components/mobile-top-bar";
const TopBar = () => {
  const isMobileView = useIsMobileView();

  return isMobileView ? <MobileTopBar /> : <DesktopTopBar />;
};

export default TopBar;
