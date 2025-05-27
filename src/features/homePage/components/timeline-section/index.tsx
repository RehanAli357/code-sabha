import { Stack, Typography } from "@mui/material";
// import {
//   CourseHeadingText,
//   LastTimeLineStyled,
//   LastTimeLineText,
// } from "../../../style";
import CsustomTimeline from "./custom-timeline";
import {
  CourseHeadingText,
  LastTimeLineStyled,
  LastTimeLineText,
} from "../../style";

const TimelineSection = () => {
  return (
    <Stack mt={5} mx={2}>
      <CourseHeadingText>Step into Your Learning Journey!</CourseHeadingText>
      <Typography
        textAlign={"center"}
        width={"70%"}
        margin={"auto"}
        mt={2}
        sx={(theme) => ({
          fontSize: theme.typography.h6.fontSize,
          [theme.breakpoints.down("sm")]: {
            width: "90%",
            fontSize: theme.typography.body1.fontSize,
          },
        })}
      >
        Explore the roadmap to mastering skills with our structured course
        timeline. From fundamentals to advanced techniques, track your progress
        and unlock your potential. 🚩
      </Typography>
      <Stack mt={5}>
        <CsustomTimeline />
      </Stack>
      <LastTimeLineStyled />
      <LastTimeLineText>The Engineer</LastTimeLineText>
    </Stack>
  );
};

export default TimelineSection;
