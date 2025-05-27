import { keyframes, Stack, Typography } from "@mui/material";
import {
  HeroImageStyled,
  HeroStackOneStyled,
  HeroStackTwoStyled,
  HeroTextStyled,
  StyledButton,
  StyledButtonTwo,
  StyledGlowEffectOne,
  StyledGlowEffectTwo,
} from "../style";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import BannerImage from "../../../assets/banner.png";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
`;
const HeroSection = () => {
  return (
    <>
      <Stack
        component={"section"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={3}
        sx={(theme) => ({
          mt: 2,
          [theme.breakpoints.down(900)]: {
            mt: 7,
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse",
            gap: theme.spacing(4),
            mt: 3,
          },
        })}
      >
        <HeroStackOneStyled>
          <HeroTextStyled>
            <q>Master Coding Skills to Build Your Dream Career!</q>
          </HeroTextStyled>
          <Typography
            variant="body1"
            sx={(theme) => ({
              color: "darkblue",
              fontWeight: 600,
              maxWidth: "80%",
              my:2,
              [theme.breakpoints.down("sm")]: {
                maxWidth: "100%",
                textAlign: "center",
                my:0
              },
            })}
          >
            Start your journey with our curated courses and personalized
            guidance from experts. Learn coding, ace your interviews, and land
            your dream job!
          </Typography>
          <Stack
            flexDirection="row"
            gap={2}
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                justifyContent: "center",
              },
            })}
          >
            <StyledButton>Get Started</StyledButton>
            <StyledButtonTwo>Learn More</StyledButtonTwo>
          </Stack>
        </HeroStackOneStyled>
        <HeroStackTwoStyled>
          <HeroImageStyled src={BannerImage} alt="Banner-img" />
          <StyledGlowEffectOne />
          <StyledGlowEffectTwo />
        </HeroStackTwoStyled>
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Stack
          sx={(theme) => ({
            width: "25px",
            height: "46px",
            borderRadius: "40px",
            border: "1px solid darkblue",
            cursor: "pointer",
            [theme.breakpoints.down('sm')]:{
                mt:2
            }
          })}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <KeyboardDoubleArrowDownIcon
            sx={{ color: "darkblue", animation: `${bounce} 1.5s infinite` }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default HeroSection;
