import {createBrowserRouter} from "react-router-dom";

import Main from "../Pages/Layout/Main/Main";
import Dashboard from "../components/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
