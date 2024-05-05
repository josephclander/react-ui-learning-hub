import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Layout from "./components/Layout";
import Challenge from "./routes/Challenge";
import NotFound from "./routes/NotFound";

import { challengesLoader } from "./loaders/challengesLoader";
import { challengeByIdLoader } from "./loaders/challengeByIdLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
        loader: challengesLoader,
      },
      {
        path: "/challenge/:id",
        element: <Challenge />,
        loader: ({ params }) => {
          if (params.id === undefined) {
            throw new Error("Challenge ID is missing");
          }
          return challengeByIdLoader(params.id);
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
