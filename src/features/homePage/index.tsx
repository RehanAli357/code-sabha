import AboutUs from "./components/about-us";
import ChooseUs from "./components/choose-us-section";
import CoursesSection from "./components/courses-section";
import HeroSection from "./components/hero-section";
import TechStack from "./components/tech-stack";
import TimelineSection from "./components/timeline-section";
import ContactUs from "./components/contact-us";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TechStack />
      <Box id="courses">
        <CoursesSection />
      </Box>
      <TimelineSection />
      <ChooseUs />
      <Box id="about-us">
        <AboutUs />
      </Box>
      <Box id="contact-us">
        <ContactUs />
      </Box>
    </>
  );
};

export default HomePage;
