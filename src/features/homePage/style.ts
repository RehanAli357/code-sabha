import {
  Autocomplete,
  Button,
  Card,
  CardMedia,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";

export const HeroStackOneStyled = styled(Stack)(({ theme }) => ({
  gap: 2,
  width: "60%",
  [theme.breakpoints.down(900)]: {
    width: "80%",
    gap: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    gap: theme.spacing(3),
    justifyContent: "center",
  },
}));

export const HeroStackTwoStyled = styled(Stack)(({ theme }) => ({
  width: "400px",
  position: "relative",
  [theme.breakpoints.down(900)]: {
    width: "20%",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "40%",
    alignItems: "center",
  },
}));

export const HeroTextStyled = styled(Typography)(({ theme }) => ({
  color: "gold",
  fontSize: theme.typography.h2.fontSize,
  fontWeight: 700,
  lineHeight: "1.2",
  textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
  [theme.breakpoints.down(900)]: {
    fontSize: theme.typography.h4.fontSize,
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

export const HeroImageStyled = styled("img")(() => ({
  width: "100%",
  height: "auto",
  borderRadius: "10px",
  position: "relative",
  zIndex: 1,
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "hsl(316, 73%, 52%)",
  color: "#fff",
  fontWeight: "bold",
  padding: "10px 20px",
  "&:hover": { backgroundColor: "hsl(316, 73%, 45%)" },
  [theme.breakpoints.down(335)]: {
    fontSize: "10px",
  },
}));
export const StyledButtonTwo = styled(Button)(({ theme }) => ({
  border: "1px solid hsl(37, 99%, 67%)",
  color: "darkblue",
  fontWeight: "bold",
  padding: "10px 20px",
  "&:hover": {
    borderColor: "hsl(37, 99%, 60%)",
    backgroundColor: "hsl(37, 99%, 90%)",
  },
  [theme.breakpoints.down(335)]: {
    fontSize: "10px",
  },
}));

export const StyledGlowEffectOne = styled(Stack)(() => ({
  borderRadius: "50%",
  boxShadow: "0px 0px 110px 80px hsl(316, 73%, 52%)",
  position: "absolute",
  top: "50px",
  left: "0px",
  opacity: 0.6,
}));

export const StyledGlowEffectTwo = styled(Stack)(() => ({
  borderRadius: "50%",
  boxShadow: "0px 0px 110px 80px hsl(37, 99%, 67%)",
  position: "absolute",
  bottom: "100px",
  right: "0px",
  opacity: 0.6,
}));

export const CourseHeadingText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h2.fontSize,
  fontWeight: 900,
  textAlign: "center",
  background:
    "linear-gradient(to right, hsl(316, 73%, 52%),hsl(316, 73%, 52%), hsl(37, 99%, 52%),hsl(37, 99%, 67%))",
  WebkitBackgroundClip: "text",
  color: "transparent",
  [theme.breakpoints.down(900)]: {
    fontSize: theme.typography.h3.fontSize,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

export const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  height: 240,
  filter: "brightness(0.9)",
  transition: "filter 0.3s",
  "&:hover": {
    filter: "brightness(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    height: 140,
  },
}));

export const CardMediaTextStyled = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: 10,
  left: 10,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "white",
  padding: "5px 10px",
  borderRadius: "4px",
  fontWeight: 700,
  fontSize: theme.typography.subtitle2.fontSize,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.caption.fontSize,
  },
}));

export const CardStyled = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "6px 0",
  cursor: "pointer",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  },
  [theme.breakpoints.down(900)]: {
    maxWidth: 305,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 205,
  },
}));

export const AutoCompleteStyled = styled(Autocomplete)(({ theme }) => ({
  width: "100%",
  maxWidth: 500,
  margin: "20px 0",
  [theme.breakpoints.down(900)]: {
    maxWidth: 400,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "70%",
  },
}));

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  margin: "20px 0",
  "& .MuiOutlinedInput-root": {
    paddingY: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: 200,
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "darkblue",
    },
  },
  "& .MuiInputLabel-root": {
    paddingLeft: "20px",
    fontWeight: "bold",
    "&.Mui-focused": {
      color: "darkblue",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
  },
}));

export const SearchButtonStyled = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(45deg, hsl(316, 73%, 52%),hsl(316, 73%, 52%), hsl(37, 99%, 52%),hsl(37, 99%, 67%))",
  padding: "10px 20px",
  color: "white",
  fontWeight: "bold",
  "&: hover": {
    transform: "scale(1.1)",
    transition: "0.3s",
  },
  [theme.breakpoints.down("sm")]: {
    width: "40%",
  },
}));

export const TimelinePoints = styled(Stack)(() => ({
  width: "50px",
  height: "50px",
  overflow: "hidden",

  backgroundColor: "transparent",
  border: "2px solid darkblue",
  borderRadius: "50%",

  "&:hover": {
    backgroundColor: "darkblue",
    boxShadow: "0px 0px 10px hsl(37, 99%, 52%)",
    transition: "0.3s",
  },
}));

interface TimelineContentsProps {
  type: "left" | "right";
}

export const TimelineContents = styled(Stack)<TimelineContentsProps>(
  ({ type }) => ({
    width: "100%",
    alignItems: type === "left" ? "flex-end" : "flex-start",
   
  })
);

export const LastTimeLineStyled = styled(Stack)(() => ({
  height: "70px",
  width: "1.6px",
  backgroundColor: "darkblue",
  margin: "auto",
}));

export const LastTimeLineText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  border: "2px solid darkblue",
  width: "fit-content",
  margin: "auto",
  padding: "5px 20px",
  borderRadius: 120,
  fontWeight: 700,
  fontSize: theme.typography.h5.fontSize,
  backgroundColor: "darkblue",
  color: "white",
  marginBottom: 10,
  "&:hover": {
    boxShadow: "0px 0px 20px  hsl(37, 99%, 52%)",
    transition: "0.3s",
    cursor: "default",
    transform: "scale(1.1)",
  },
}));
