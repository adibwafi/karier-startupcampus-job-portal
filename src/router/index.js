import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/Layout";
import LandingPage from "../views/LandingPage";
import ApplyJobPage from "../views/ApplyJobPage";
import DetailJobPage from "../views/DetailJobPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/jobs/:id/apply",
        element: <ApplyJobPage />,
      },
      {
        path: "/jobs/:id",
        element: <DetailJobPage />
      },
    ],
  }
]);

export default router;
