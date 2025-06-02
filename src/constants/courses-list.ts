export type Course = {
  heading: string;
  subtext: string;
  searchQuery: string[];
  navigateString: string;
  description: string;
  duration: string;
  level:string;
  mode: string;
  price: string;
  tags: string[];
  image: string;
};

import UiUxImg from "../assets/ui-ux.jpg";
import WebDevImg from "../assets/web-dev.jpg";
import ReactDevImg from "../assets/front-end.jpg";
import BackEndDevImg from "../assets/back-end.jpg"
import AppDevImg from "../assets/app-dev.jpg";
import FullStackImg from "../assets/full-stack.jpg";

export const CourseList = [
  {
    heading: "UI/UX Development",
    subtext: "Personal tutions available",
    searchQuery: [
      "ui", "ux", "design", "html", "css", "scss", "less", "UI/UX Development",
    ],
    navigateString: "ui-ux",
    description:
      "Learn to design intuitive and attractive user interfaces and experiences using modern tools and practices. This course covers the principles of design, user psychology, wireframing, prototyping, and usability testing. You'll work on real-world projects using tools like Figma and Adobe XD to build beautiful, accessible, and user-friendly interfaces.",
    duration: "8 weeks",
    level: "Beginner to Intermediate", 
    mode: "Online",
    price: "Contact for pricing",
    tags: [
      "Figma", "Wireframing", "User Testing", "Accessibility",
      "Adobe XD", "Prototyping", "Design Systems", "Typography", "Color Theory"
    ],
    image: UiUxImg,
  },
  {
    heading: "Web Development",
    subtext: "Personal tutions available",
    searchQuery: [
      "html", "css", "scss", "front end", "javascript", "Web Development",
    ],
    navigateString: "web-dev",
    description:
      "Master the skills needed to build dynamic and responsive websites from scratch. Learn HTML, CSS, JavaScript, and responsive design techniques. By the end of this course, you’ll be able to build stunning websites that look great on all devices and are optimized for speed and accessibility.",
    duration: "10 weeks",
    level: "Beginner",
    mode: "Online",
    price: "Contact for pricing",
    tags: [
      "HTML5", "CSS3", "JavaScript", "Responsive Design",
      "Media Queries", "SCSS", "DOM Manipulation", "Accessibility", "SEO Basics"
    ],
    image: WebDevImg
  },
  {
    heading: "Front End Development",
    subtext: "Personal tutions available",
    searchQuery: [
      "html", "css", "scss", "javascript", "typescript", "react", "redux", "nextjs", "Front End Development",
    ],
    navigateString: "front-end",
    description:
      "Specialize in client-side development with modern frameworks like React, Redux, and Next.js. This course dives deep into building performant UIs, managing state effectively, and structuring scalable front-end code. Perfect for those aiming to build robust single-page applications and enhance user interactions.",
    duration: "12 weeks",
    level: "Intermediate",
    mode: "Online",
    price: "Contact for pricing",
    tags: [
      "React", "Next.js", "Redux", "TypeScript",
      "Context API", "Hooks", "SCSS", "React Router", "ES6+"
    ],
    image: ReactDevImg,
  },
  {
    heading: "App Development",
    subtext: "Personal tutions available",
    searchQuery: [
      "react native", "flutter", "android", "ios", "mobile", "expo", "swift", "kotlin", "App Development",
    ],
    navigateString: "app-dev",
    description:
      "Create powerful mobile applications for Android and iOS using technologies like React Native and Flutter. You’ll learn to build cross-platform apps, integrate native features, and publish your apps to the Play Store and App Store. This course also covers performance optimization and testing for mobile apps.",
    duration: "14 weeks",
    level: "Intermediate to Advanced",
    mode: "Online",
    price: "Contact for pricing",
    tags: [
      "React Native", "Flutter", "Expo", "Swift", "Kotlin",
      "Android Studio", "Xcode", "Cross Platform", "Play Store", "App Store"
    ],
    image: AppDevImg,
  },
  {
    heading: "Backend Development",
    subtext: "Personal tutions available",
    searchQuery: [
      "nodejs", "express", "nestjs", "api", "mongodb", "mysql", "postgresql", "authentication", "server", "Backend Development",
    ],
    navigateString: "back-end",
    description:
      "Develop robust server-side applications and APIs with databases and authentication systems. This course covers REST APIs, database design, middleware, JWT authentication, and cloud deployment using Node.js, Express, NestJS, and MongoDB. Ideal for developers who want to build the core logic of any web application.",
    duration: "10 weeks",
    level: "Intermediate",
    mode: "Online",
    price: "Contact for pricing",
    tags: [
      "Node.js", "Express", "NestJS", "MongoDB", "MySQL",
      "PostgreSQL", "REST API", "JWT", "Middleware", "Cloud Deployment", "TypeORM", "Prisma"
    ],
    image: BackEndDevImg,
  },
  {
    heading: "Fullstack Development",
    subtext: "Personal tutions available",
    searchQuery: [
      "frontend", "backend", "fullstack", "react", "nodejs", "express", "nestjs", "mongodb", "mysql", "typescript", "api", "Fullstack Development",
    ],
    navigateString: "full-stack",
    description:
      "Become a versatile developer capable of building complete web applications from front to back. This comprehensive course combines frontend and backend development, using the MERN and MEAN stacks. You’ll learn to create full-featured web apps, from responsive UIs to secure server-side APIs, with real-world projects and deployment strategies.",
    duration: "16 weeks",
    level: "Advanced",
    mode: "Online",
    price: "Contact for pricing",
    tags: [
      "MERN", "MEAN", "REST APIs", "Fullstack",
      "React", "Redux", "TypeScript", "Node.js", "Express", "NestJS",
      "MongoDB", "MySQL", "PostgreSQL", "JWT", "Authentication",
      "Authorization", "GraphQL", "Prisma", "Docker", "CI/CD",
      "Unit Testing", "API Testing", "Responsive Design", "Deployment", "AWS", "Firebase",
      "Microservices", "Serverless", "Cloud Functions", "GitHub Actions", "Monorepo"
    ],
    image: FullStackImg,
  },
];
