import { Stack, Typography, Box } from "@mui/material";
import { CourseHeadingText } from "../style";

const features = [
  {
    title: "1. Personal Tuitions 👩‍🏫👨‍🏫",
    description:
      "Get individual attention tailored to your unique learning style and pace, ensuring your success every step of the way.",
  },
  {
    title: "2. Creative Learning 🎨🧠",
    description:
      "Engage in innovative and fun teaching methods that make complex concepts easy and enjoyable to grasp.",
  },
  {
    title: "3. Project-Based Learning for Each Topic 🛠️📚",
    description:
      "Work on mini-projects for every topic to put your knowledge into practice and strengthen your understanding.",
  },
  {
    title: "4. Complete Project-Based Learning 🌟🚀",
    description:
      "Tackle real-world challenges through comprehensive, hands-on projects that prepare you for the professional world.",
  },
  {
    title: "5. Stress-Free Learning Environment 🧘‍♂️🍃",
    description:
      "Learn in a relaxed, supportive environment where you can grow without pressure and build your confidence effortlessly.",
  },
];

const ChooseUs = () => {
  return (
    <Stack
      spacing={4}
      padding={4}
      borderRadius={4}
      alignItems="center"
      sx={(theme) => ({
        padding: 4,
        [theme.breakpoints.down("sm")]: {
          padding: 1,
          mt: 3,
        },
      })}
    >
      <CourseHeadingText>Why Choose Us❓✨</CourseHeadingText>
      <Typography
        textAlign="center"
        mt={2}
        sx={(theme) => ({
          fontSize: theme.typography.h6.fontSize,
          [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.body1.fontSize,
            px: 2,
          },
        })}
      >
        At The CS, we make learning exciting and fulfilling. Here’s why we’re
        your perfect choice:
      </Typography>
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={(theme) => ({
            boxShadow: "1px 1px 10px gray",
            padding: "10px 20px",
            width: "50%",
            margin: "auto",
            bgcolor: "white",
            [theme.breakpoints.down(900)]: {
              width: "90%",
            },
          })}
        >
          <Typography
            fontWeight={700}
            sx={(theme) => ({
              fontSize: theme.typography.h5.fontSize,
              [theme.breakpoints.down("sm")]: {
                fontSize: theme.typography.h6.fontSize,
              },
            })}
            mb={1}
          >
            {feature.title}
          </Typography>
          <Typography
            sx={(theme) => ({
              fontSize: theme.typography.body1.fontSize,
              [theme.breakpoints.down("sm")]: {
                fontSize: theme.typography.body2.fontSize,
              },
            })}
            mb={2}
            color="text.secondary"
          >
            {feature.description}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default ChooseUs;
