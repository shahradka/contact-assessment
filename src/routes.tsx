import React from "react";
import {Home} from "@components/pages/home";
import { Details } from "@components/pages/details";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    }
  ]);