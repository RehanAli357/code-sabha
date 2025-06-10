import { CardContent, Typography, Box } from "@mui/material";
import CourseOne from "../../../../assets/course1.jpg";
import { CardMediaStyled, CardMediaTextStyled, CardStyled } from "../../style";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../router/routes";
import React from "react";

interface CourseCardProps {
  subtext: string;
  heading: string;
  navigateString: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  subtext,
  heading,
  navigateString,
}) => {
  const navigate = useNavigate();
  const handleNavigate = (navigateString: string) => {
    navigate(ROUTE.Course.replace(":id", navigateString));
  };

  return (
    <CardStyled
      onClick={() => {
        handleNavigate(navigateString);
      }}
    >
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

export default React.memo(CourseCard);
