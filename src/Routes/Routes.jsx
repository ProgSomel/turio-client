import Login from "../pages/Login/Login";
import Registration from "../pages/Register/Register";
import MainLayout from "./../layout/MainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Registration></Registration>
        }
    ],
  },
]);

export default router;
