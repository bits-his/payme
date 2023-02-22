import React from "react";
import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import NewRegistration from "../Home/NewRegistration";
import LogIn from "../Registrations/LogIn";
import Registration from "../Home/Registration";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <LogIn />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <LogIn /> },
        {
            path: "/new-registration",
            element: <NewRegistration />,
          },
          {
            path: "/registration",
            element: <Registration />,
          },
      ],
    },
  ]);
  return element;
}
export default AppNavigation;
