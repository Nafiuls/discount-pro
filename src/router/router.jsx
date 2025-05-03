import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/main layout/MainLayout";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import MyProfile from "../pages/MyProfile";
import AboutDev from "../pages/AboutDev";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/myProfile",
        element: <MyProfile />,
      },
      {
        path: "/aboutDev",
        element: <AboutDev />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
