import { lazy, Suspense, useEffect, useState } from "react";
import { Box, Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HeroSection from "./components/hero-section";
import TechStack from "./components/tech-stack";
import ChooseUs from "./components/choose-us-section";
import Loader from "../../common/components/loader";
import { useLocation } from "react-router-dom";

const CoursesSection = lazy(() => import("./components/courses-section"));
const TimelineSection = lazy(() => import("./components/timeline-section"));
const AboutUs = lazy(() => import("./components/about-us"));
const ContactUs = lazy(() => import("./components/contact-us"));

const HomePage = () => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HeroSection />
      <TechStack />

      <Suspense fallback={<Loader />}>
        <Box id="courses">
          <CoursesSection />
        </Box>

        <Box id="learn-more">
          <TimelineSection />
        </Box>

        <ChooseUs />

        <Box id="about-us">
          <AboutUs />
        </Box>

        <Box id="contact-us">
          <ContactUs />
        </Box>
      </Suspense>

      <Zoom in={showScrollTop}>
        <Box position="fixed" bottom={16} right={16} zIndex={1000}>
          <Fab
            sx={{
              color: "hsl(316, 73%, 45%)",
              backgroundColor: "hsl(37, 99%, 67%)",
              "&:hover": {
                backgroundColor: "hsl(37, 93.50%, 57.80%)",
              },
            }}
            size="small"
            onClick={scrollToTop}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Zoom>
    </>
  );
};

export default HomePage;
