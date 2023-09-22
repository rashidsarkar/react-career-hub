import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import JobDetails from "./Components/Home/JobDetails";
import AppliedJob from "./Components/AppliedJob/AppliedJob";
import BlogPage from "./Components/BlogPage/BlogPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/data/jobs.json"),
      },
      {
        path: "/applyedJob",
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch("/data/jobs.json"),
      },
      {
        path: "/BlogPage",
        element: <BlogPage></BlogPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
