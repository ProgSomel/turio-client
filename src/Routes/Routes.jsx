import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import Login from "../pages/Login/Login";
import MyList from "../pages/MyList/MyList";
import Registration from "../pages/Register/Register";
import MainLayout from "./../layout/MainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home/Home";
import TouristSpotDetails from "../pages/TouristspotDetails/TouristSpotDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch("http://localhost:5000/spots")
        },
        {
            path: "/allTouristsSpot",
            element: <AllTouristsSpot></AllTouristsSpot>,
            
        },
        {
            path: "/spotDetails/:id",
            element: <TouristSpotDetails></TouristSpotDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/spots/${params.id}`)
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
