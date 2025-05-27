import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "../layout/root-layout";
import { ROUTE } from "./routes";

const HomePage = lazy(() => import("../features/homePage"));
export const router = createBrowserRouter([
  {
    path: ROUTE.HomePageRoute,
    element: <RootLayout />,
    children: [
      {
        path: ROUTE.HomePageRoute,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
]);
