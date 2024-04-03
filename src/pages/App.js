import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./Layout";
import ToursPage from "./Tours-page";
import OpenCardTourPage from "./open-card-tour-page";
import ConCat from "./concat";
import Login from "./Login";
import LoginUp from "./login-up";
import Destination from "./destination";
import DefinitionOfJourney from "./definition-of-journey";
import Checkout from "./checkout";
import Magazines from "./magazines";
import LoginInAdmin from "../admin/pages-admin/login-admin";
import LoginUpAdmin from '../admin/pages-admin/login-up';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />
    },
    {
      path: "login-up-admin",
      element: <LoginUpAdmin />
    },
    {
      path: "loginInAdmin",
      element: <LoginInAdmin />
    },
    {
      path: "magazines",
      element: <Magazines />
    },
    {
      path: "check-box",
      element: <Checkout />
    },

    {
      path: "definition-of-journey",
      element: <DefinitionOfJourney />
    },

    {
      path: "destination",
      element: <Destination />
    },
    {
      path: "loginup",
      element: <LoginUp />
    },

    {
      path: "login",
      element: <Login />
    },

    {
      path: "concat",
      element: <ConCat />
    },
    {
      path: "opencard-tour-page",
      element: <OpenCardTourPage />
    },
    {
      path: "tourpage",
      element: <ToursPage />
    },


  ]);



  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
