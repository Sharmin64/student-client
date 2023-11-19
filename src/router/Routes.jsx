import {createBrowserRouter} from "react-router-dom";

import Main from "../Pages/Layout/Main/Main";
import Dashboard from "../Pages/Layout/Dashboard/Dashboard";
import Student from "../components/Student";
import StudentSearch from "../components/StudentSearch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/student",
        element: <Student />,
      },
      {
        path: "/dashboard/studentsearch",
        element: <StudentSearch />,
      },
    ],
  },
]);
