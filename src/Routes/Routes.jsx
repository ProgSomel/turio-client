import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import Login from "../pages/Login/Login";
import MyList from "../pages/MyList/MyList";
import Registration from "../pages/Register/Register";
import MainLayout from "./../layout/MainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/allTouristsSpot",
            element: <AllTouristsSpot></AllTouristsSpot>
        },
        {
            path: "/addTouristSpot",
            element: <ProtectedRoute>
                <AddTouristSpot></AddTouristSpot>
            </ProtectedRoute>
        },
        {
            path: "/myList",
            element: <ProtectedRoute>
                <MyList></MyList>
            </ProtectedRoute>
        },
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
