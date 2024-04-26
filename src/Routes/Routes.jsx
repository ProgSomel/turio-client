import MainLayout from "./../layout/MainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [],
  },
]);

export default router;
