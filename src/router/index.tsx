import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/root-layout";
import { ROUTE } from "./routes";
import PortalLayout from "../layout/portal-layout";
import AuthGaurd from "../common/components/gaurd/auth-gaurd";

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
    ],
  },
  {
    path: ROUTE.Login,
    lazy: async () => {
      const LoginPage = (await import("../features/LoginPage")).default;
      return { Component: LoginPage };
    },
  },
  {
    path: ROUTE.Portal,
    element: <PortalLayout />,
    children: [
      {
        path: ROUTE.PortalHome,
        lazy: async () => {
          const PortalPage = (await import("../features/PortalPage")).default;
          const LazyAuthComponent = () => <AuthGaurd Component={PortalPage}/>;
          return { Component: LazyAuthComponent };
        },
      },
    ],
  },
  {
    path: "*",
    lazy: async () => {
      const ErrorPage = (await import("../features/ErrorPage")).default;
      return { Component: ErrorPage };
    },
  },
]);
