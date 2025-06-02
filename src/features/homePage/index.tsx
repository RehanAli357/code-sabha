import { lazy, Suspense } from "react";
import { Box } from "@mui/material";
import HeroSection from "./components/hero-section";
import TechStack from "./components/tech-stack";
import ChooseUs from "./components/choose-us-section";
import Loader from "../../common/components/loader";

const CoursesSection = lazy(() => import("./components/courses-section"));
const TimelineSection = lazy(() => import("./components/timeline-section"));
const AboutUs = lazy(() => import("./components/about-us"));
const ContactUs = lazy(() => import("./components/contact-us"));

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TechStack />

      <Suspense fallback={<Loader />}>
        <Box id="courses">
          <CoursesSection />
        </Box>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Box id="learn-more">
          <TimelineSection />
        </Box>
      </Suspense>

      <ChooseUs />

      <Suspense fallback={<Loader />}>
        <Box id="about-us">
          <AboutUs />
        </Box>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Box id="contact-us">
          <ContactUs />
        </Box>
      </Suspense>
    </>
  );
};

export default HomePage;
