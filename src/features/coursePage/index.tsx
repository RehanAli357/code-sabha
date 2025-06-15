import { Stack, Typography, Chip, Divider } from "@mui/material";
import { CourseList, type Course } from "../../constants/courses-list";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CourseHeadingText, SearchButtonStyled } from "../homePage/style";
import { StyledImage } from "./style";
import WhatsApp from "../../assets/whatsapp.svg";
import OpenModalHook from "./components/open-modal-hook";
import EnrollFormDialog from "./components/enroll-form-dialog";

const CoursePage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<Course | null>(null);
  const { open, openModal, closeModal } = OpenModalHook();
  useEffect(() => {
    if (id) {
      const data = CourseList.find((data) => data.navigateString === id);
      setDetails(data || null);
    }
  }, [id]);

  return (
    <>
      <Stack spacing={4} padding={4} minHeight={"60vh"}>
        {details === null ? (
          <Typography variant="h6">No Data Found</Typography>
        ) : (
          <Stack spacing={3} alignItems="center">
            <CourseHeadingText>{details.heading}</CourseHeadingText>
            <StyledImage src={details.image} alt={details.heading} />
            <Typography variant="subtitle1" color="text.secondary">
              {details.subtext}
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={(theme) => ({
                width: "60%",
                [theme.breakpoints.down("sm")]: {
                  width: "90%",
                },
              })}
            >
              {details.description}
            </Typography>

            <Divider flexItem />

            <Stack
              direction="row"
              flexWrap={"wrap"}
              gap={2}
              justifyContent={"center"}
            >
              <Chip label={`Duration: ${details.duration}`} />
              <Chip label={`Level: ${details.level}`} />
              <Chip label={`Mode: ${details.mode}`} />
              <Chip label={`Price: ${details.price}`} />
            </Stack>

            <Divider flexItem />

            <Stack
              direction="row"
              gap={2}
              flexWrap="wrap"
              justifyContent="center"
            >
              {details.tags.map((tag, index) => (
                <Chip key={index} label={tag} variant="outlined" />
              ))}
            </Stack>
            <SearchButtonStyled sx={{ width: "70%" }} onClick={openModal}>
              Enroll
            </SearchButtonStyled>
            <Typography>For Complete Details Contact Us</Typography>
            <a
              href={`https://wa.me/7253070157?text=Hi, I am interested in your ${details.heading} course.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={WhatsApp}
                style={{ width: "50px", cursor: "pointer" }}
                alt="Contact on WhatsApp"
              />
            </a>
          </Stack>
        )}
      </Stack>
      <EnrollFormDialog open={open} closeModal={closeModal} />
    </>
  );
};

export default CoursePage;
