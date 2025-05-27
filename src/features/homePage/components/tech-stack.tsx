import { Stack, Typography, Box } from "@mui/material";
import { slides } from "../../../constants/tech-stack-slides";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 35000, easing: (t: number) => t };

const TechStack = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    rtl: false,
    slides: {
      perView: 8,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 5,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 4,
        },
      },
       "(max-width: 600px)": {
        slides: {
          perView: 3,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <Stack px={2} sx={(theme)=>({
        mt:13,
        [theme.breakpoints.down(900)]:{
            mt:8
        },
        [theme.breakpoints.down('sm')]:{
            mt:4
        }
    })}>

      <Box
        ref={sliderRef}
        className="keen-slider"
        sx={{
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
          py: 3,
        }}
      >
        {slides.map((data) => (
          <a
            href={data.link}
            target="_blank"
            key={data.alt}
            style={{ textDecoration: "none" }}
            className="keen-slider__slide"
          >
            <Stack
              width={110}
              height={110}
              alignItems="center"
              justifyContent="center"
              sx={{
                borderRadius: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  backgroundColor: "#f0f8ff",
                },
              }}
              mx="auto"
            >
              <img
                src={data.img}
                alt={data.alt}
                style={{ width: "40px", height: "40px", marginBottom: 8,objectFit:'contain' }}
              />
              <Typography
                variant="caption"
                color="text.primary"
                fontWeight={600}
              >
                {data.alt}
              </Typography>
            </Stack>
          </a>
        ))}
      </Box>
    </Stack>
  );
};

export default TechStack;
