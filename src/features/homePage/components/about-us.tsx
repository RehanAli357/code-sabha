import { Stack, Typography, Box } from "@mui/material";
import { CourseHeadingText } from "../style";

const AboutUs = () => {
  return (
    <Stack spacing={4} padding={4} alignItems="center">
      <CourseHeadingText>About Us 🌟</CourseHeadingText>

      <Typography
        variant="h6"
        textAlign="center"
        margin="auto"
        color="text.secondary"
        sx={(theme) => ({
          width: "70%",
          [theme.breakpoints.down("sm")]: {
            width: "90%",
            fontSize: theme.typography.body1.fontSize,
          },
        })}
      >
        We are a team of passionate educators and innovators dedicated to
        providing top-quality learning experiences. Our goal is to empower our
        students and help them succeed in their educational journey.
      </Typography>

      <Box
        sx={(theme) => ({
          padding: "30px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          width: "75%",
          margin: "auto",
          borderRadius: "16px",
          background: "linear-gradient(145deg, #ffffff, #f3f3f3)",
          border: "1px solid #e0e0e0",
          [theme.breakpoints.down("sm")]: {
            width: "95%",
          },
        })}
      >
        <Typography variant="h5" fontWeight={700} mb={2}>
          Our Mission 🎯
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Our mission is to provide personalized, project-based learning that
          helps students achieve mastery in various subjects. We aim to make
          education accessible, engaging, and stress-free by integrating
          creative methods and real-world projects.
        </Typography>

        <Typography variant="h5" fontWeight={700} mb={2}>
          Our Values 💡
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>1. Innovation:</strong> We embrace innovative teaching
          techniques and constantly evolve to meet the needs of our students.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>2. Integrity:</strong> We believe in transparency, honesty,
          and building trust with our students and staff.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>3. Excellence:</strong> We strive for excellence in all that
          we do and ensure that our students receive the best education
          possible.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>4. Empathy:</strong> We understand the challenges our students
          face and offer support at every step of their learning journey.
        </Typography>
      </Box>

      <Typography variant="h6" fontWeight={700} textAlign="center">
        Join Us and Begin Your Learning Journey Today! 🚀
      </Typography>
    </Stack>
  );
};

export default AboutUs;
