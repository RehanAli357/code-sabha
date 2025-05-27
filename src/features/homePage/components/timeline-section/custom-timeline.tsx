import { Stack, Typography } from "@mui/material";
import MedalOne from "../../../../assets/one.png";
import MedalTwo from "../../../../assets/two.png";
import MedalThree from "../../../../assets/three.png";
import MedalFour from "../../../../assets/four.png";
import MedalFive from "../../../../assets/premium.gif";
import { TimelineContents, TimelinePoints } from "../../style";

type TimelineType = "left" | "right";

interface TimelineItemProps {
  img: string;
  alt: string;
  type: TimelineType;
  title: string;
  description: string;
}

const timelineData: TimelineItemProps[] = [
  {
    img: MedalOne,
    alt: "rank one",
    type: "left",
    title: "📚 The Learner",
    description:
      "Understanding UI design and building basic layouts for websites. Grasping the essentials of design principles. 🎨",
  },
  {
    img: MedalTwo,
    alt: "rank two",
    type: "right",
    title: "🖥️ The Coder",
    description:
      "Adding basic functionality to the website using JavaScript. Making the website interactive. ⚙️",
  },
  {
    img: MedalThree,
    alt: "rank three",
    type: "left",
    title: "⚛️ The Frontend Developer",
    description:
      "Building complete frontend functionality with React. Making dynamic user interfaces with components and states. 🔧",
  },
  {
    img: MedalFour,
    alt: "rank four",
    type: "right",
    title: "💻 The Full Stack Developer",
    description:
      "Diving into backend technologies and integrating them with the frontend to build full-stack web applications. 🌐",
  },
];

const TimelineItem = ({
  img,
  alt,
  type,
  title,
  description,
}: TimelineItemProps) => (
  <>
    <TimelinePoints>
      <img src={img} alt={alt} />
    </TimelinePoints>
    <TimelineContents type={type}>
      <Stack
        width="50%"
        py={2}
        {...(type === "left"
          ? {
              borderLeft: "2px solid darkblue",
              paddingLeft: 2,
            }
          : {
              borderRight: "2px solid darkblue",
              paddingRight: 2,
              textAlign: "right",
            })}
      >
        <Typography
          fontWeight={700}
          sx={(theme) => ({
            fontSize: theme.typography.h4.fontSize,

            [theme.breakpoints.down("sm")]: {
              fontSize: theme.typography.h6.fontSize,
            },
          })}
        >
          {title}
        </Typography>
        <Typography
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              fontSize: theme.typography.subtitle2.fontSize,
            },
          })}
        >
          {description}
        </Typography>
      </Stack>
    </TimelineContents>
  </>
);

const CsustomTimeline = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      mx="auto"
      sx={(theme) => ({
        width: "80%",
        [theme.breakpoints.down('sm')]:{
          width:'90%'
        }
      })}
    >
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
      <TimelinePoints>
        <img src={MedalFive} alt="rank five" />
      </TimelinePoints>
    </Stack>
  );
};

export default CsustomTimeline;
