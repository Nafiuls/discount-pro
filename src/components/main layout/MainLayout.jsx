import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayout;
