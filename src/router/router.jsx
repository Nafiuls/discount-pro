import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/main layout/MainLayout";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import MyProfile from "../pages/MyProfile";
import AboutDev from "../pages/AboutDev";
import RegisterPage from "../pages/RegisterPage";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Reset from "../pages/Reset";
import UpdateUser from "../pages/UpdateUser";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/brands",
        element: <Brands />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            {" "}
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutDev",
        element: <AboutDev />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reset",
        element: <Reset />,
      },
      {
        path: "/update",
        element: <UpdateUser />,
      },
      {
        path: "/brands/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const singleData = data.find((item) => item._id == params.id);
          console.log(singleData);
          return singleData;
        },
      },
    ],
  },
]);

export default router;
