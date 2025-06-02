import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/root-layout";
import { ROUTE } from "./routes";

export const router = createBrowserRouter([
  {
    path: ROUTE.HomePageRoute,
    element: <RootLayout />,
    children: [
      {
        path: ROUTE.HomePageRoute,
        lazy: async () => {
          const HomePage = (await import("../features/homePage")).default;
          return { Component: HomePage };
        },
      },
      {
        path: ROUTE.Course,
        lazy: async () => {
          const CoursePage = (await import("../features/coursePage")).default;
          return { Component: CoursePage };
        },
      },
      {
        path: "*",
        lazy: async () => {
          const ErrorPage = (await import("../features/ErrorPage")).default;
          return { Component: ErrorPage };
        },
      },
    ],
  },
]);
