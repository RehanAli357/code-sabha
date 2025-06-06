import React, { useState } from "react";
import { Stack, TextField, Typography, Paper, Divider } from "@mui/material";
import WhatsApp from "../../../assets/whatsapp.svg";
import Instagram from "../../../assets/instagram.svg";
import Gmail from "../../../assets/gmail.svg";
import { CourseHeadingText, SearchButtonStyled } from "../style";
import { useIsMobileView } from "../../../utils/responsive-hook";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isMobileView = useIsMobileView();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <Stack gap={3} my={2} px={2}>
      <CourseHeadingText>Contact Us 📞</CourseHeadingText>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          paddingBottom:3,
          borderRadius: "16px",
          maxWidth: "600px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Typography
          variant={isMobileView ? "h6" : "h4"}
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          Contact Us 📬
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                },
              }}
            />
            <TextField
              label="Phone Number"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="tel"
              fullWidth
              required
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                },
              }}
            />
            <TextField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                },
              }}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                },
              }}
            />

            <SearchButtonStyled
              sx={{
                "&:hover": {
                  transform: "scale(1)",
                },
              }}
              type="submit"
            >
              Submit
            </SearchButtonStyled>
          </Stack>
        </form>
        <Divider
          textAlign="center"
          sx={{
            marginY: 3,
            "&::before, &::after": {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              color: "text.secondary",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            OR
          </Typography>
        </Divider>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <a
            href={`https://wa.me/7253070157?text=Hi, I am interested in your course.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={WhatsApp}
              width={isMobileView ? "30px" : "50px"}
              style={{marginTop:"10px"}}
              height={isMobileView ? "30px" : "50px"}
              alt="Contact on WhatsApp"
            />
          </a>
          <img
            src={Instagram}
            alt="instagram"
            width={isMobileView ? "30px" : "50px"}
            height={isMobileView ? "30px" : "50px"}
          />
          <img
            src={Gmail}
            alt="gmail"
            width={isMobileView ? "30px" : "50px"}
            height={isMobileView ? "30px" : "50px"}
          />
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ContactUs;
