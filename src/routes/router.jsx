import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddEquipment from "../pages/AddEquipment";
import AllSportsEquipment from "../pages/AllSportsEquipment";
import Details from "../pages/Details";
import MyEquipmentList from "../pages/MyEquipmentList";
import UpdateEquipment from "../pages/UpdateEquipment";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addEquipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/allSportsEquipment",
        element: <AllSportsEquipment></AllSportsEquipment>,
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/myEquipmentList",
        element: (
          <PrivateRoute>
            <MyEquipmentList></MyEquipmentList>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/updateEquipment/:id",
        element: <UpdateEquipment></UpdateEquipment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateEquipments/${params.id}`),
      },
      {
        path: "/equipments/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipments/${params.id}`),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
