import { CardContent, Typography, Box } from "@mui/material";
import CourseOne from "../../../../assets/course1.jpg";
import { CardMediaStyled, CardMediaTextStyled, CardStyled } from "../../style";

interface CourseCardProps {
  subtext: string;
  heading: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ subtext, heading }) => {
  return (
    <CardStyled>
      <Box sx={{ position: "relative" }}>
        <CardMediaStyled image={CourseOne} title={heading} />
        <CardMediaTextStyled>{heading}</CardMediaTextStyled>
      </Box>
      <CardContent>
        <Typography
          fontWeight={800}
          sx={(theme) => ({
            fontSize: theme.typography.h4.fontSize,
            [theme.breakpoints.down("sm")]: {
               fontSize: theme.typography.body1.fontSize,
            },
          })}
          gutterBottom
        >
          {heading}
        </Typography>
        <Typography color="text.secondary">{subtext}</Typography>
      </CardContent>
    </CardStyled>
  );
};

export default CourseCard;
