import React from "react";
import {Home} from "@components/pages/home";
import { Details } from "@components/pages/details";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@components/templates/layout";
import { ContactRecords } from "@components/pages/contactRecords";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout title="home" contactRecordsComp={<ContactRecords />}><Home /></Layout>,
    },
    {
      path: "/details/:id",
      element: <Layout title="Details"><Details /></Layout>,
    }
  ]);