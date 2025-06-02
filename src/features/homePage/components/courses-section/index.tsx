import { useState } from "react";
import { Stack } from "@mui/material";
import {
  AutoCompleteStyled,
  CourseHeadingText,
  SearchButtonStyled,
  TextFieldStyled,
} from "../../style";
import CourseCard from "./course-card";
import { CourseList } from "../../../../constants/courses-list";
import { Search } from "@mui/icons-material";

const courseOptions: string[] = [
  "UI/UX Development",
  "Web Development",
  "Front End Development",
  "App Development",
  "Backend Development",
  "Fullstack Development",
];

const CoursesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(CourseList);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredCourses(CourseList); // Show all if input is empty
      return;
    }

    const filtered = CourseList.filter((course) =>
      course.searchQuery.some((query: string) =>
        query.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setFilteredCourses(filtered);
  };

  return (
    <Stack>
      <CourseHeadingText>Explore Our Courses</CourseHeadingText>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        flexDirection={"row"}
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            gap: 0,
          },
        })}
      >
        <AutoCompleteStyled
          freeSolo
          id="course-search"
          options={courseOptions}
          onInputChange={(_, newInputValue) => setSearchTerm(newInputValue)}
          renderInput={(params) => (
            <TextFieldStyled
              {...params}
              label="Search Course"
              variant="outlined"
            />
          )}
        />
        <SearchButtonStyled
          onClick={handleSearch}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              marginTop: -3,
              marginBottom: 2,
            },
          })}
          startIcon={<Search sx={{ color: "white" }} />}
        >
          Search
        </SearchButtonStyled>
      </Stack>
      <Stack
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        width={"80%"}
        mx={"auto"}
        sx={(theme) => ({
          [theme.breakpoints.down(900)]: {
            width: "100%",
          },
        })}
      >
        {filteredCourses.map((data, index) => (
          <CourseCard
            heading={data.heading}
            subtext={data.subtext}
            key={index}
            navigateString={data.navigateString}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default CoursesSection;
